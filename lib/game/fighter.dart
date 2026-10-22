import 'dart:math' as math;

import 'input.dart';

/// The visible and logical state of one fighter.
enum FighterState {
  idle,
  walk,
  windup,
  attack,
  recover,
  block,
  hit,
  stagger,
  dead,
}

const int maxHp = 5;
const double attackWindup = 0.18;
const double attackActive = 0.12;
const double attackRecovery = 0.35;
const double attackTotal = attackWindup + attackActive + attackRecovery;
const double attackCooldownTime = attackTotal;
const double attackRange = 3.25;
const double parryWindow = 0.15;
const double hitStun = 0.25;
const double blockStun = 0.12;
const double parryStun = 0.50;
const double moveSpeed = 1.10;
const double blockMoveSpeed = 0.45;
const double minSeparation = 2.45;
const double playerMinX = -3.20;
const double playerMaxX = -0.70;
const double botMinX = 0.70;
const double botMaxX = 3.20;
const double roundDuration = 30.0;

/// One duelist.
///
/// The fighter owns only its own state. Combat, rounds, and AI live in
/// [Combat], [Match], and [BotBrain].
class Fighter {
  Fighter({required this.isPlayer, required this.facing, required this.x});

  final bool isPlayer;

  /// +1 for the left fighter, -1 for the right fighter.
  final int facing;

  double x;
  int hp = maxHp;
  FighterState state = FighterState.idle;
  double stateTime = 0;
  double walkCycle = 0;

  /// Local forward (+1) or backward (-1) movement for the gait renderer.
  int moveDir = 0;

  double attackCooldown = 0;
  double blockAge = 0;
  double stunTimer = 0;
  double staggerDuration = parryStun;
  bool blockHeld = false;
  bool hasLandedHit = false;

  /// Render state: the shield has been hit this round.
  bool wounded = false;

  /// Render state: this fighter's spear tip has drawn blood this round.
  bool bloodyTip = false;

  int roundWins = 0;

  bool get isDead => state == FighterState.dead;
  bool get isBlocking => state == FighterState.block;
  bool get isAttacking =>
      state == FighterState.windup ||
      state == FighterState.attack ||
      state == FighterState.recover;
  bool get isOpen =>
      state == FighterState.recover ||
      state == FighterState.hit ||
      state == FighterState.stagger;
  bool get canAct =>
      !isDead &&
      state != FighterState.hit &&
      state != FighterState.stagger &&
      stunTimer <= 0;

  void reset({required double x, int? hp}) {
    this.x = x;
    this.hp = hp ?? maxHp;
    state = FighterState.idle;
    stateTime = 0;
    walkCycle = 0;
    moveDir = 0;
    attackCooldown = 0;
    blockAge = 0;
    stunTimer = 0;
    staggerDuration = parryStun;
    blockHeld = false;
    hasLandedHit = false;
    wounded = false;
    bloodyTip = false;
  }

  void startAttack() {
    if (!canAct || attackCooldown > 0 || isAttacking) return;
    state = FighterState.windup;
    stateTime = 0;
    attackCooldown = attackCooldownTime;
    hasLandedHit = false;
    blockHeld = false;
  }

  void startBlock() {
    if (!canAct || isAttacking) return;
    blockHeld = true;
    if (state != FighterState.block) {
      state = FighterState.block;
      stateTime = 0;
      blockAge = 0;
    }
  }

  void releaseBlock() {
    blockHeld = false;
    if (state == FighterState.block) {
      state = FighterState.idle;
      stateTime = 0;
    }
  }

  void takeHit() {
    hp = math.max(0, hp - 1);
    wounded = true;
    state = hp <= 0 ? FighterState.dead : FighterState.hit;
    stateTime = 0;
    stunTimer = 0;
    blockHeld = false;
    hasLandedHit = false;
    x += -facing * 0.18;
  }

  void blockImpact() {
    stunTimer = math.max(stunTimer, blockStun);
    x += -facing * 0.05;
  }

  void stagger(double duration) {
    if (isDead) return;
    state = FighterState.stagger;
    stateTime = 0;
    staggerDuration = duration;
    stunTimer = duration;
    blockHeld = false;
    hasLandedHit = false;
    x += -facing * 0.12;
  }

  void update(double dt) {
    stateTime += dt;
    attackCooldown = math.max(0, attackCooldown - dt);
    stunTimer = math.max(0, stunTimer - dt);

    switch (state) {
      case FighterState.windup:
        if (stateTime >= attackWindup) {
          state = FighterState.attack;
          stateTime = 0;
        }
      case FighterState.attack:
        if (stateTime >= attackActive) {
          state = FighterState.recover;
          stateTime = 0;
        }
      case FighterState.recover:
        if (stateTime >= attackRecovery) {
          state = FighterState.idle;
          stateTime = 0;
        }
      case FighterState.hit:
        if (stateTime >= hitStun) {
          state = FighterState.idle;
          stateTime = 0;
        }
      case FighterState.stagger:
        if (stateTime >= staggerDuration) {
          state = FighterState.idle;
          stateTime = 0;
        }
      case FighterState.block:
        blockAge += dt;
        if (!blockHeld) {
          state = FighterState.idle;
          stateTime = 0;
        }
      case FighterState.idle:
      case FighterState.walk:
      case FighterState.dead:
        break;
    }
  }

  void applyIntent(FighterIntent intent, double dt) {
    if (isDead ||
        state == FighterState.hit ||
        state == FighterState.stagger ||
        stunTimer > 0) {
      return;
    }

    if (intent.attackPressed && canAct && attackCooldown <= 0 && !isAttacking) {
      startAttack();
      intent.consumeAttack();
      return;
    }

    if (intent.blockHeld && canAct) {
      startBlock();
    } else if (state == FighterState.block) {
      releaseBlock();
    }

    if (state == FighterState.idle ||
        state == FighterState.walk ||
        state == FighterState.block) {
      final direction = (intent.forward ? 1 : 0) - (intent.backward ? 1 : 0);
      if (direction != 0) {
        if (moveDir == 0) {
          walkCycle = 0;
        }
        moveDir = direction;
        final speed = state == FighterState.block ? blockMoveSpeed : moveSpeed;
        x += facing * direction * speed * dt;
        if (state != FighterState.block) {
          state = FighterState.walk;
        }
        walkCycle += dt * (state == FighterState.block ? 5.0 : 8.0);
      } else {
        moveDir = 0;
        if (state == FighterState.walk) {
          state = FighterState.idle;
          stateTime = 0;
        }
        walkCycle += dt * 1.5;
      }
    }
  }
}

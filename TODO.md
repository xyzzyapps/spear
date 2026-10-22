# Homer / Spear - Task List

## Foundation
- [x] Create the Dart web project scaffold (`pubspec.yaml`, `analysis_options.yaml`, `.gitignore`, `.nojekyll`)
- [x] Add zero-dependency tooling: `tool/build.dart`, `tool/serve.dart`, `tool/check.dart`, `tool/test.dart`
- [x] Move the reference art to `design/ref.png` and remove the old Three.js scene
- [x] Add `tool/smoke.dart` (Chrome DevTools) and `tool/sim.dart` (balance)

## Pure game logic
- [x] Implement math helpers, `Vec2`, two-bone IK, and deterministic RNG
- [x] Implement the fighter state machine, attack/block/parry timings, and hit stun
- [x] Implement combat resolution, range checks, and damage
- [x] Implement the bot brain with reaction time, aggression, blocking, mistakes, opening delay, and round scaling
- [x] Implement the match state machine: 5 HP rounds, best-of-10, sudden death, round timer
- [x] Implement the game composition root, input intents, event drain, and snapshot
- [x] Write unit tests for math, IK, combat, fighter transitions, match flow, bot determinism, opening delay, and bot-disabled debug mode
- [x] Add `?bot=off` for deterministic input smoke tests

## Canvas papercut renderer
- [x] Implement the measured 1600x766 reference frame and responsive fit
- [x] Build the procedural top and bottom band textures at the reference rows
- [x] Build the papercut warrior: helmet, crest, eye, torso, chest piece, pteruges, sword, greaves, feet
- [x] Build the shields: rim, dot ring, rosette, lambda, shadows, field gradient
- [x] Build the spear: shaft, sliding grip, leaf tip, fist on the shaft
- [x] Correct the grip to the overhand dory hold: palm over the shaft, pinky toward the tip
- [x] Add the wrist, shoulder cap, and off-hand shield arm joints
- [x] Add the visible neck, collar, and gorget between the torso and helmet
- [x] Implement the idle/ref pose, walk, windup, thrust, recover, block, hit, stagger, and death poses
- [x] Rework locomotion into a low, planted-foot gait with weight transfer, toe drops, and upper-body secondary motion
- [x] Lower the hips during walk/attack so the leg targets stay inside the leg reach
- [x] Enlarge the spear draw and thrust arc; add the shaft slide and a deep shield-crossing poke
- [x] Use the reachable two-bone hand for the grip/fist so the hand stays on the shaft
- [x] Draw the attacker last so the spear tip visibly crosses the defender's shield
- [x] Add the block brace/tremor, hit recoil footwork, stagger footwork, and buckle-then-fall death
- [x] Add state-dependent pose blending and static `?pose=STATE&t=` previews
- [x] Capture walk filmstrips and attack/windup/block/hit/death poses for visual review
- [x] Implement paper-scrap particles and subtle screen shake
- [x] Add blood on hit: airborne droplets, shield splat, bloodied spear tip, red flash
- [x] Make lost HUD pips blood red
- [x] Implement the CSS radial background, vignette, and grain

## UI and interaction
- [x] Build the HUD: 5 health pips per fighter, score, round counter, timer, banners
- [x] Build the start and rematch overlays
- [x] Build keyboard input (`A/D`, `J/Space`, `K/Shift`, `Enter`)
- [x] Build touch controls (`BACK`, `FWD`, `ATTACK`, hold `BLOCK`)
- [x] Add `?ui=0`, `?preview=1`, `?pose=STATE&t=`, `?debug=1`, `?seed=`, `?autoplay=1`, `?bot=off`
- [x] Add the X Player Card metadata and local-only assets

## Verification
- [x] Run `dart format`, `dart analyze`, and the test harness (60/60)
- [x] Compile `web/main.dart` to `app.js` and serve it locally
- [x] Capture the idle frame at 1600x766 and compare it against `design/ref.png`
- [x] Iterate on band rows, figure proportions, colors, and silhouette
- [x] Capture 480x270, 1200x628, 480x480, and 390x844 layouts
- [x] Run a scripted-player vs bot simulation to tune round length and difficulty (75% player wins over 40 matches)
- [x] Run a headless smoke test for the start flow, attacks, blocks, and movement
- [x] Generate `preview.png` at 1200x628 and copy it to the root

## Documentation and handoff
- [x] Write `SPEC.md` with architecture, rules, state machines, timings, dimensions, and verification
- [x] Write `README.md` with local development, build, deploy, controls, and X Player Card instructions
- [x] Update `TODO.md` and prepare the final summary
- [ ] Commit the completed work (waiting for the user's end-of-session signal)

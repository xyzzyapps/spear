(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.jY(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.r(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eT(b)
return new s(c,this)}:function(){if(s===null)s=A.eT(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eT(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
eY(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ei(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eV==null){A.jM()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.d(A.fp("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.e0
if(o==null)o=$.e0=A.eh(n)
p=q[o]}if(p!=null)return p
p=A.jS(a)
if(p!=null)return p
if(typeof a=="function")return B.a8
s=Object.getPrototypeOf(a)
if(s==null)return B.F
if(s===Object.prototype)return B.F
if(typeof q=="function"){o=$.e0
if(o==null)o=$.e0=A.eh(n)
Object.defineProperty(q,o,{value:B.v,enumerable:false,writable:true,configurable:true})
return B.v}return B.v},
hP(a,b){if(a<0||a>4294967295)throw A.d(A.Y(a,0,4294967295,"length",null))
return J.hQ(new Array(a),b)},
hQ(a,b){var s=A.r(a,b.i("t<0>"))
s.$flags=1
return s},
fb(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hR(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.fb(r))break;++b}return b},
hS(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.fb(q))break}return b},
av(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bb.prototype
return J.cf.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.bc.prototype
if(typeof a=="boolean")return J.ce.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.ei(a)},
eg(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.ei(a)},
jH(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.ei(a)},
cU(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.ei(a)},
f0(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.av(a).P(a,b)},
af(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.jQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.eg(a).C(a,b)},
hA(a,b,c,d){return J.cU(a).bV(a,b,c,d)},
eq(a){return J.cU(a).gbi(a)},
cX(a){return J.av(a).gv(a)},
f1(a){return J.jH(a).gJ(a)},
cY(a){return J.eg(a).gp(a)},
hB(a){return J.av(a).gM(a)},
V(a,b){return J.cU(a).saJ(a,b)},
b4(a){return J.av(a).h(a)},
ba:function ba(){},
ce:function ce(){},
bc:function bc(){},
A:function A(){},
ad:function ad(){},
cm:function cm(){},
br:function br(){},
a4:function a4(){},
aJ:function aJ(){},
aK:function aK(){},
t:function t(a){this.$ti=a},
cd:function cd(){},
d6:function d6(a){this.$ti=a},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bd:function bd(){},
bb:function bb(){},
cf:function cf(){},
aI:function aI(){}},A={ew:function ew(){},
fc(a){return new A.aL("Field '"+a+"' has been assigned during initialization.")},
hV(a){return new A.aL("Field '"+a+"' has not been initialized.")},
hU(a){return new A.aL("Field '"+a+"' has already been initialized.")},
ej(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
fn(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i8(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
h7(a,b,c){return a},
eW(a){var s,r
for(s=$.O.length,r=0;r<s;++r)if(a===$.O[r])return!0
return!1},
fa(){return new A.bp("No element")},
aL:function aL(a){this.a=a},
bZ:function bZ(a){this.a=a},
dl:function dl(){},
b8:function b8(){},
cj:function cj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aG:function aG(){},
ao:function ao(){},
aR:function aR(){},
hK(){throw A.d(A.ap("Cannot modify unmodifiable Map"))},
hg(a){var s=A.hf(a)
if(s!=null)return s
return"minified:"+a},
jQ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b4(a)
return s},
cn(a){var s,r=$.fg
if(r==null)r=$.fg=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eC(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.b(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
i0(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.aM(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
co(a){var s,r,q,p
if(a instanceof A.o)return A.N(A.ax(a),null)
s=J.av(a)
if(s===B.a7||s===B.a9||t.cr.b(a)){r=B.x(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.N(A.ax(a),null)},
i1(a){var s,r,q
if(typeof a=="number"||A.eP(a))return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ac)return a.h(0)
s=$.hz()
for(r=0;r<1;++r){q=s[r].cJ(a)
if(q!=null)return q}return"Instance of '"+A.co(a)+"'"},
hZ(){if(!!self.location)return self.location.href
return null},
i2(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
an(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.e.ar(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.Y(a,0,1114111,null,null))},
i_(a){var s=a.$thrownJsError
if(s==null)return null
return A.aw(s)},
jK(a){throw A.d(A.eS(a))},
b(a,b){if(a==null)J.cY(a)
throw A.d(A.ee(a,b))},
ee(a,b){var s,r="index"
if(!A.fX(b))return new A.W(!0,b,r,null)
s=A.bL(J.cY(a))
if(b<0||b>=s)return A.eu(b,s,a,r)
return A.fh(b,r)},
eS(a){return new A.W(!0,a,null,null)},
d(a){return A.u(a,new Error())},
u(a,b){var s
if(a==null)a=new A.a8()
b.dartException=a
s=A.jZ
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jZ(){return J.b4(this.dartException)},
b2(a,b){throw A.u(a,b==null?new Error():b)},
aA(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.b2(A.j3(a,b,c),s)},
j3(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.bs("'"+s+"': Cannot "+o+" "+l+k+n)},
cW(a){throw A.d(A.ak(a))},
a9(a){var s,r,q,p,o,n
a=A.jW(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.r([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dC(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dD(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fo(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ex(a,b){var s=b==null,r=s?null:b.method
return new A.ch(a,r,s?null:b.receiver)},
b3(a){if(a==null)return new A.de(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.az(a,a.dartException)
return A.jB(a)},
az(a,b){if(t.U.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.ar(r,16)&8191)===10)switch(q){case 438:return A.az(a,A.ex(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.az(a,new A.bk())}}if(a instanceof TypeError){p=$.hk()
o=$.hl()
n=$.hm()
m=$.hn()
l=$.hq()
k=$.hr()
j=$.hp()
$.ho()
i=$.ht()
h=$.hs()
g=p.K(s)
if(g!=null)return A.az(a,A.ex(A.ab(s),g))
else{g=o.K(s)
if(g!=null){g.method="call"
return A.az(a,A.ex(A.ab(s),g))}else if(n.K(s)!=null||m.K(s)!=null||l.K(s)!=null||k.K(s)!=null||j.K(s)!=null||m.K(s)!=null||i.K(s)!=null||h.K(s)!=null){A.ab(s)
return A.az(a,new A.bk())}}return A.az(a,new A.cy(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bo()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.az(a,new A.W(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bo()
return a},
aw(a){var s
if(a==null)return new A.bC(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bC(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
hb(a){if(a==null)return J.cX(a)
if(typeof a=="object")return A.cn(a)
return J.cX(a)},
jc(a,b,c,d,e,f){t.Z.a(a)
switch(A.bL(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.dR("Unsupported number of arguments for wrapped closure"))},
bP(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.jF(a,b)
a.$identity=s
return s},
jF(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jc)},
hJ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cv().constructor.prototype):Object.create(new A.aC(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.f9(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hF(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.f9(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hF(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hD)}throw A.d("Error in functionType of tearoff")},
hG(a,b,c,d){var s=A.f7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
f9(a,b,c,d){if(c)return A.hI(a,b,d)
return A.hG(b.length,d,a,b)},
hH(a,b,c,d){var s=A.f7,r=A.hE
switch(b?-1:a){case 0:throw A.d(new A.cr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hI(a,b,c){var s,r
if($.f5==null)$.f5=A.f4("interceptor")
if($.f6==null)$.f6=A.f4("receiver")
s=b.length
r=A.hH(s,c,a,b)
return r},
eT(a){return A.hJ(a)},
hD(a,b){return A.e7(v.typeUniverse,A.ax(a.a),b)},
f7(a){return a.a},
hE(a){return a.b},
f4(a){var s,r,q,p=new A.aC("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.aB("Field name "+a+" not found.",null))},
eh(a){return v.getIsolateTag(a)},
ky(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jS(a){var s,r,q,p,o,n=A.ab($.ha.$1(a)),m=$.ef[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.en[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.fS($.h5.$2(a,n))
if(q!=null){m=$.ef[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.en[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.eo(s)
$.ef[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.en[n]=s
return s}if(p==="-"){o=A.eo(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hc(a,s)
if(p==="*")throw A.d(A.fp(n))
if(v.leafTags[n]===true){o=A.eo(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hc(a,s)},
hc(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eY(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
eo(a){return J.eY(a,!1,null,!!a.$iam)},
jU(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.eo(s)
else return J.eY(s,c,null,null)},
jM(){if(!0===$.eV)return
$.eV=!0
A.jN()},
jN(){var s,r,q,p,o,n,m,l
$.ef=Object.create(null)
$.en=Object.create(null)
A.jL()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hd.$1(o)
if(n!=null){m=A.jU(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jL(){var s,r,q,p,o,n,m=B.O()
m=A.b_(B.P,A.b_(B.Q,A.b_(B.y,A.b_(B.y,A.b_(B.R,A.b_(B.S,A.b_(B.T(B.x),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ha=new A.ek(p)
$.h5=new A.el(o)
$.hd=new A.em(n)},
b_(a,b){return a(b)||b},
jG(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hT(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.F("Illegal RegExp pattern ("+String(o)+")",a,null))},
jW(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
b6:function b6(){},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
bn:function bn(){},
dC:function dC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bk:function bk(){},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a},
de:function de(a){this.a=a},
bC:function bC(a){this.a=a
this.b=null},
ac:function ac(){},
bX:function bX(){},
bY:function bY(){},
cw:function cw(){},
cv:function cv(){},
aC:function aC(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
be:function be(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
da:function da(a,b){this.a=a
this.b=b
this.c=null},
bf:function bf(a,b){this.a=a
this.$ti=b},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
em:function em(a){this.a=a},
cg:function cg(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
j4(a){return a},
hX(a){return new Uint8Array(a)},
eN(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ee(b,a))},
bi:function bi(){},
a6:function a6(){},
bh:function bh(){},
ck:function ck(){},
bj:function bj(){},
bz:function bz(){},
bA:function bA(){},
eD(a,b){var s=b.c
return s==null?b.c=A.bF(a,"ca",[b.x]):s},
fj(a){var s=a.w
if(s===6||s===7)return A.fj(a.x)
return s===11||s===12},
i4(a){return a.as},
cT(a){return A.e6(v.typeUniverse,a,!1)},
as(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.as(a1,s,a3,a4)
if(r===s)return a2
return A.fC(a1,r,!0)
case 7:s=a2.x
r=A.as(a1,s,a3,a4)
if(r===s)return a2
return A.fB(a1,r,!0)
case 8:q=a2.y
p=A.aZ(a1,q,a3,a4)
if(p===q)return a2
return A.bF(a1,a2.x,p)
case 9:o=a2.x
n=A.as(a1,o,a3,a4)
m=a2.y
l=A.aZ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.eH(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aZ(a1,j,a3,a4)
if(i===j)return a2
return A.fD(a1,k,i)
case 11:h=a2.x
g=A.as(a1,h,a3,a4)
f=a2.y
e=A.jy(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fA(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aZ(a1,d,a3,a4)
o=a2.x
n=A.as(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eI(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bU("Attempted to substitute unexpected RTI kind "+a0))}},
aZ(a,b,c,d){var s,r,q,p,o=b.length,n=A.eb(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.as(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jz(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.eb(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.as(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jy(a,b,c,d){var s,r=b.a,q=A.aZ(a,r,c,d),p=b.b,o=A.aZ(a,p,c,d),n=b.c,m=A.jz(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cK()
s.a=q
s.b=o
s.c=m
return s},
r(a,b){a[v.arrayRti]=b
return a},
h8(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jJ(s)
return a.$S()}return null},
jO(a,b){var s
if(A.fj(b))if(a instanceof A.ac){s=A.h8(a)
if(s!=null)return s}return A.ax(a)},
ax(a){if(a instanceof A.o)return A.C(a)
if(Array.isArray(a))return A.ar(a)
return A.eO(J.av(a))},
ar(a){var s=a[v.arrayRti],r=t.r
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
C(a){var s=a.$ti
return s!=null?s:A.eO(a)},
eO(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jb(a,s)},
jb(a,b){var s=a instanceof A.ac?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.iD(v.typeUniverse,s.name)
b.$ccache=r
return r},
jJ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.e6(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jI(a){return A.au(A.C(a))},
jx(a){var s=a instanceof A.ac?A.h8(a):null
if(s!=null)return s
if(t.bW.b(a))return J.hB(a).a
if(Array.isArray(a))return A.ar(a)
return A.ax(a)},
au(a){var s=a.r
return s==null?a.r=new A.e5(a):s},
eZ(a){return A.au(A.e6(v.typeUniverse,a,!1))},
ja(a){var s=this
s.b=A.ju(s)
return s.b(a)},
ju(a){var s,r,q,p,o
if(a===t.K)return A.ji
if(A.ay(a))return A.jm
s=a.w
if(s===6)return A.j8
if(s===1)return A.fZ
if(s===7)return A.jd
r=A.jt(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ay)){a.f="$i"+q
if(q==="q")return A.jg
if(a===t.o)return A.jf
return A.jl}}else if(s===10){p=A.jG(a.x,a.y)
o=p==null?A.fZ:p
return o==null?A.bM(o):o}return A.j6},
jt(a){if(a.w===8){if(a===t.p)return A.fX
if(a===t.i||a===t.H)return A.jh
if(a===t.N)return A.jk
if(a===t.y)return A.eP}return null},
j9(a){var s=this,r=A.j5
if(A.ay(s))r=A.j2
else if(s===t.K)r=A.bM
else if(A.b0(s)){r=A.j7
if(s===t.a3)r=A.j_
else if(s===t.aD)r=A.fS
else if(s===t.u)r=A.iY
else if(s===t.ae)r=A.fR
else if(s===t.I)r=A.iZ
else if(s===t.aQ)r=A.j1}else if(s===t.p)r=A.bL
else if(s===t.N)r=A.ab
else if(s===t.y)r=A.iX
else if(s===t.H)r=A.fQ
else if(s===t.i)r=A.cS
else if(s===t.o)r=A.j0
s.a=r
return s.a(a)},
j6(a){var s=this
if(a==null)return A.b0(s)
return A.jR(v.typeUniverse,A.jO(a,s),s)},
j8(a){if(a==null)return!0
return this.x.b(a)},
jl(a){var s,r=this
if(a==null)return A.b0(r)
s=r.f
if(a instanceof A.o)return!!a[s]
return!!J.av(a)[s]},
jg(a){var s,r=this
if(a==null)return A.b0(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.o)return!!a[s]
return!!J.av(a)[s]},
jf(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.o)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fY(a){if(typeof a=="object"){if(a instanceof A.o)return t.o.b(a)
return!0}if(typeof a=="function")return!0
return!1},
j5(a){var s=this
if(a==null){if(A.b0(s))return a}else if(s.b(a))return a
throw A.u(A.fT(a,s),new Error())},
j7(a){var s=this
if(a==null||s.b(a))return a
throw A.u(A.fT(a,s),new Error())},
fT(a,b){return new A.bD("TypeError: "+A.fw(a,A.N(b,null)))},
fw(a,b){return A.d2(a)+": type '"+A.N(A.jx(a),null)+"' is not a subtype of type '"+b+"'"},
S(a,b){return new A.bD("TypeError: "+A.fw(a,b))},
jd(a){var s=this
return s.x.b(a)||A.eD(v.typeUniverse,s).b(a)},
ji(a){return a!=null},
bM(a){if(a!=null)return a
throw A.u(A.S(a,"Object"),new Error())},
jm(a){return!0},
j2(a){return a},
fZ(a){return!1},
eP(a){return!0===a||!1===a},
iX(a){if(!0===a)return!0
if(!1===a)return!1
throw A.u(A.S(a,"bool"),new Error())},
iY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.u(A.S(a,"bool?"),new Error())},
cS(a){if(typeof a=="number")return a
throw A.u(A.S(a,"double"),new Error())},
iZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.S(a,"double?"),new Error())},
fX(a){return typeof a=="number"&&Math.floor(a)===a},
bL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.u(A.S(a,"int"),new Error())},
j_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.u(A.S(a,"int?"),new Error())},
jh(a){return typeof a=="number"},
fQ(a){if(typeof a=="number")return a
throw A.u(A.S(a,"num"),new Error())},
fR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.S(a,"num?"),new Error())},
jk(a){return typeof a=="string"},
ab(a){if(typeof a=="string")return a
throw A.u(A.S(a,"String"),new Error())},
fS(a){if(typeof a=="string")return a
if(a==null)return a
throw A.u(A.S(a,"String?"),new Error())},
j0(a){if(A.fY(a))return a
throw A.u(A.S(a,"JSObject"),new Error())},
j1(a){if(a==null)return a
if(A.fY(a))return a
throw A.u(A.S(a,"JSObject?"),new Error())},
h1(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.N(a[q],b)
return s},
jp(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.h1(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.N(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fV(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.r([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.N(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.N(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.N(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.N(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.N(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
N(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.N(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.N(a.x,b)+">"
if(l===8){p=A.jA(a.x)
o=a.y
return o.length>0?p+("<"+A.h1(o,b)+">"):p}if(l===10)return A.jp(a,b)
if(l===11)return A.fV(a,b,null)
if(l===12)return A.fV(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
jA(a){var s=A.hf(a)
if(s!=null)return s
return"minified:"+a},
iE(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
iD(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.e6(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bG(a,5,"#")
q=A.eb(s)
for(p=0;p<s;++p)q[p]=r
o=A.bF(a,b,q)
n[b]=o
return o}else return m},
iB(a,b){return A.fM(a.tR,b)},
iA(a,b){return A.fM(a.eT,b)},
e6(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fE(a,null,b,!1)
r.set(b,s)
return s},
e7(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fE(a,b,c,!0)
q.set(c,r)
return r},
iC(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.eH(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fE(a,b,c,d){return A.is(A.il(a,b,c,d))},
ae(a,b){b.a=A.j9
b.b=A.ja
return b},
bG(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.U(null,null)
s.w=b
s.as=c
r=A.ae(a,s)
a.eC.set(c,r)
return r},
fC(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.iy(a,b,r,c)
a.eC.set(r,s)
return s},
iy(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ay(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.b0(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.U(null,null)
q.w=6
q.x=b
q.as=c
return A.ae(a,q)},
fB(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iw(a,b,r,c)
a.eC.set(r,s)
return s},
iw(a,b,c,d){var s,r
if(d){s=b.w
if(A.ay(b)||b===t.K)return b
else if(s===1)return A.bF(a,"ca",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.U(null,null)
r.w=7
r.x=b
r.as=c
return A.ae(a,r)},
iz(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.w=13
s.x=b
s.as=q
r=A.ae(a,s)
a.eC.set(q,r)
return r},
bE(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
iv(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bF(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.U(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ae(a,r)
a.eC.set(p,q)
return q},
eH(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.U(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ae(a,o)
a.eC.set(q,n)
return n},
fD(a,b,c){var s,r,q="+"+(b+"("+A.bE(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ae(a,s)
a.eC.set(q,r)
return r},
fA(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bE(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bE(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iv(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.U(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ae(a,p)
a.eC.set(r,o)
return o},
eI(a,b,c,d){var s,r=b.as+("<"+A.bE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ix(a,b,c,r,d)
a.eC.set(r,s)
return s},
ix(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.eb(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.as(a,b,r,0)
m=A.aZ(a,c,r,0)
return A.eI(a,n,m,c!==m)}}l=new A.U(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ae(a,l)},
il(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
is(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.io(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fy(a,r,l,k,!1)
else if(q===46)r=A.fy(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aq(a.u,a.e,k.pop()))
break
case 94:k.push(A.iz(a.u,k.pop()))
break
case 35:k.push(A.bG(a.u,5,"#"))
break
case 64:k.push(A.bG(a.u,2,"@"))
break
case 126:k.push(A.bG(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.iq(a,k)
break
case 38:A.ip(a,k)
break
case 63:p=a.u
k.push(A.fC(p,A.aq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fB(p,A.aq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.im(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fz(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.it(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.aq(a.u,a.e,m)},
io(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fy(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.iE(s,o.x)[p]
if(n==null)A.b2('No "'+p+'" in "'+A.i4(o)+'"')
d.push(A.e7(s,o,n))}else d.push(p)
return m},
iq(a,b){var s,r=a.u,q=A.fx(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bF(r,p,q))
else{s=A.aq(r,a.e,p)
switch(s.w){case 11:b.push(A.eI(r,s,q,a.n))
break
default:b.push(A.eH(r,s,q))
break}}},
im(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fx(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aq(p,a.e,o)
q=new A.cK()
q.a=s
q.b=n
q.c=m
b.push(A.fA(p,r,q))
return
case-4:b.push(A.fD(p,b.pop(),s))
return
default:throw A.d(A.bU("Unexpected state under `()`: "+A.m(o)))}},
ip(a,b){var s=b.pop()
if(0===s){b.push(A.bG(a.u,1,"0&"))
return}if(1===s){b.push(A.bG(a.u,4,"1&"))
return}throw A.d(A.bU("Unexpected extended operation "+A.m(s)))},
fx(a,b){var s=b.splice(a.p)
A.fz(a.u,a.e,s)
a.p=b.pop()
return s},
aq(a,b,c){if(typeof c=="string")return A.bF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ir(a,b,c)}else return c},
fz(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aq(a,b,c[s])},
it(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aq(a,b,c[s])},
ir(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bU("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bU("Bad index "+c+" for "+b.h(0)))},
jR(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.v(a,b,null,c,null)
r.set(c,s)}return s},
v(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ay(d))return!0
s=b.w
if(s===4)return!0
if(A.ay(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.v(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.v(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.v(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.v(a,b.x,c,d,e))return!1
return A.v(a,A.eD(a,b),c,d,e)}if(s===6)return A.v(a,p,c,d,e)&&A.v(a,b.x,c,d,e)
if(q===7){if(A.v(a,b,c,d.x,e))return!0
return A.v(a,b,c,A.eD(a,d),e)}if(q===6)return A.v(a,b,c,p,e)||A.v(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.cY)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.v(a,j,c,i,e)||!A.v(a,i,e,j,c))return!1}return A.fW(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fW(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.je(a,b,c,d,e)}if(o&&q===10)return A.jj(a,b,c,d,e)
return!1},
fW(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.v(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.v(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.v(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.v(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.v(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
je(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.e7(a,b,r[o])
return A.fP(a,p,null,c,d.y,e)}return A.fP(a,b.y,null,c,d.y,e)},
fP(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.v(a,b[s],d,e[s],f))return!1
return!0},
jj(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.v(a,r[s],c,q[s],e))return!1
return!0},
b0(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ay(a))if(s!==6)r=s===7&&A.b0(a.x)
return r},
ay(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fM(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
eb(a){return a>0?new Array(a):v.typeUniverse.sEA},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cK:function cK(){this.c=this.b=this.a=null},
e5:function e5(a){this.a=a},
cI:function cI(){},
bD:function bD(a){this.a=a},
ie(){var s,r,q
if(self.scheduleImmediate!=null)return A.jC()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bP(new A.dK(s),1)).observe(r,{childList:true})
return new A.dJ(s,r,q)}else if(self.setImmediate!=null)return A.jD()
return A.jE()},
ig(a){self.scheduleImmediate(A.bP(new A.dL(t.M.a(a)),0))},
ih(a){self.setImmediate(A.bP(new A.dM(t.M.a(a)),0))},
ii(a){t.M.a(a)
A.iu(0,a)},
iu(a,b){var s=new A.e3()
s.bS(a,b)
return s},
es(a){var s
if(t.U.b(a)){s=a.ga3()
if(s!=null)return s}return B.V},
ij(a,b,c){var s,r,q,p={},o=p.a=a
for(s=t._;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if(o===b){s=A.i5()
b.bX(new A.a1(new A.W(!0,o,null,"Cannot complete a future with itself"),s))
return}s=r|b.a&1
o.a=s
if((s&24)===0){q=t.F.a(b.c)
b.a=b.a&1|4
b.c=o
o.b4(q)
return}q=b.a6()
b.a4(p.a)
A.aV(b,q)
return},
aV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.ec(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.aV(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.ec(j.a,j.b)
return}g=$.y
if(g!==h)$.y=h
else g=null
c=c.c
if((c&15)===8)new A.dY(q,d,n).$0()
else if(o){if((c&1)!==0)new A.dX(q,j).$0()}else if((c&2)!==0)new A.dW(d,q).$0()
if(g!=null)$.y=g
c=q.c
if(c instanceof A.R){p=q.a.$ti
p=p.i("ca<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.a7(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.ij(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.a7(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
jq(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.w
if(s.b(a))return s.a(a)
throw A.d(A.er(a,"onError",u.c))},
jo(){var s,r
for(s=$.aY;s!=null;s=$.aY){$.bO=null
r=s.b
$.aY=r
if(r==null)$.bN=null
s.a.$0()}},
jv(){$.eQ=!0
try{A.jo()}finally{$.bO=null
$.eQ=!1
if($.aY!=null)$.f_().$1(A.h6())}},
h3(a){var s=new A.cD(a),r=$.bN
if(r==null){$.aY=$.bN=s
if(!$.eQ)$.f_().$1(A.h6())}else $.bN=r.b=s},
js(a){var s,r,q,p=$.aY
if(p==null){A.h3(a)
$.bO=$.bN
return}s=new A.cD(a)
r=$.bO
if(r==null){s.b=p
$.aY=$.bO=s}else{q=r.b
s.b=q
$.bO=r.b=s
if(q==null)$.bN=s}},
ec(a,b){A.js(new A.ed(a,b))},
h_(a,b,c,d,e){var s,r=$.y
if(r===c)return d.$0()
$.y=c
s=r
try{r=d.$0()
return r}finally{$.y=s}},
h0(a,b,c,d,e,f,g){var s,r=$.y
if(r===c)return d.$1(e)
$.y=c
s=r
try{r=d.$1(e)
return r}finally{$.y=s}},
jr(a,b,c,d,e,f,g,h,i){var s,r=$.y
if(r===c)return d.$2(e,f)
$.y=c
s=r
try{r=d.$2(e,f)
return r}finally{$.y=s}},
eR(a,b,c,d){t.M.a(d)
if(B.h!==c){d=c.ck(d)
d=d}A.h3(d)},
dK:function dK(a){this.a=a},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
e3:function e3(){},
e4:function e4(a,b){this.a=a
this.b=b},
a1:function a1(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
R:function R(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dT:function dT(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b){this.a=a
this.b=b},
e_:function e_(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.b=b},
cD:function cD(a){this.a=a
this.b=null},
bq:function bq(){},
dp:function dp(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
bK:function bK(){},
cM:function cM(){},
e1:function e1(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a,b){this.a=a
this.b=b},
hW(a,b){return new A.be(a.i("@<0>").O(b).i("be<1,2>"))},
fd(a){return new A.bx(a.i("bx<0>"))},
eG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ik(a,b,c){var s=new A.aW(a,b,c.i("aW<0>"))
s.c=a.e
return s},
ey(a){var s,r
if(A.eW(a))return"{...}"
s=new A.H("")
try{r={}
B.c.l($.O,a)
s.a+="{"
r.a=!0
a.T(0,new A.dc(r,s))
s.a+="}"}finally{if(0>=$.O.length)return A.b($.O,-1)
$.O.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bx:function bx(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a){this.a=a
this.c=this.b=null},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
B:function B(){},
D:function D(){},
dc:function dc(a,b){this.a=a
this.b=b},
cP:function cP(){},
bg:function bg(){},
aS:function aS(a,b){this.a=a
this.$ti=b},
a7:function a7(){},
bB:function bB(){},
bH:function bH(){},
iV(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.hx()
else s=new Uint8Array(o)
for(r=J.eg(a),q=0;q<o;++q){p=r.C(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
iU(a,b,c,d){var s=a?$.hw():$.hv()
if(s==null)return null
if(0===c&&d===b.length)return A.fL(s,b)
return A.fL(s,b.subarray(c,d))},
fL(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
f3(a,b,c,d,e,f){if(B.e.R(f,4)!==0)throw A.d(A.F("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.F("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.F("Invalid base64 padding, more than two '=' characters",a,b))},
iW(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ea:function ea(){},
e9:function e9(){},
bW:function bW(){},
d_:function d_(){},
aD:function aD(){},
c0:function c0(){},
c4:function c4(){},
cB:function cB(){},
dH:function dH(a){this.a=a},
e8:function e8(a){this.a=a
this.b=16
this.c=0},
jP(a){var s=A.eC(a,null)
if(s!=null)return s
throw A.d(A.F(a,null,null))},
hL(a,b){a=A.u(a,new Error())
if(a==null)a=A.bM(a)
a.stack=b.h(0)
throw a},
fe(a,b,c,d){var s,r=J.hP(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
ff(a,b){var s,r,q=A.r([],b.i("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cW)(a),++r)B.c.l(q,b.a(a[r]))
return q},
fm(a,b,c){var s,r
A.fi(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.Y(c,b,null,"end",null))
if(s===0)return""}r=A.i7(a,b,c)
return r},
i7(a,b,c){var s=a.length
if(b>=s)return""
return A.i2(a,b,c==null||c>s?s:c)},
i3(a){return new A.cg(a,A.hT(a,!1,!0,!1,!1,""))},
fl(a,b,c){var s=J.f1(b)
if(!s.A())return a
if(c.length===0){do a+=A.m(s.gF())
while(s.A())}else{a+=A.m(s.gF())
while(s.A())a=a+c+A.m(s.gF())}return a},
ic(){var s,r,q=A.hZ()
if(q==null)throw A.d(A.ap("'Uri.base' is not supported"))
s=$.fs
if(s!=null&&q===$.fr)return s
r=A.id(q)
$.fs=r
$.fr=q
return r},
i5(){return A.aw(new Error())},
d2(a){if(typeof a=="number"||A.eP(a)||a==null)return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.i1(a)},
hM(a,b){A.h7(a,"error",t.K)
A.h7(b,"stackTrace",t.l)
A.hL(a,b)},
bU(a){return new A.bT(a)},
aB(a,b){return new A.W(!1,null,b,a)},
er(a,b,c){return new A.W(!0,a,b,c)},
fh(a,b){return new A.bm(null,null,!0,a,b,"Value not in range")},
Y(a,b,c,d,e){return new A.bm(b,c,!0,a,d,"Invalid value")},
cp(a,b,c){if(0>a||a>c)throw A.d(A.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.Y(b,a,c,"end",null))
return b}return c},
fi(a,b){if(a<0)throw A.d(A.Y(a,0,null,b,null))
return a},
eu(a,b,c,d){return new A.cc(b,!0,a,d,"Index out of range")},
ap(a){return new A.bs(a)},
fp(a){return new A.cx(a)},
fk(a){return new A.bp(a)},
ak(a){return new A.c_(a)},
F(a,b,c){return new A.a2(a,b,c)},
hO(a,b,c){var s,r
if(A.eW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.r([],t.s)
B.c.l($.O,a)
try{A.jn(a,s)}finally{if(0>=$.O.length)return A.b($.O,-1)
$.O.pop()}r=A.fl(b,t.c.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ev(a,b,c){var s,r
if(A.eW(a))return b+"..."+c
s=new A.H(b)
B.c.l($.O,a)
try{r=s
r.a=A.fl(r.a,a,", ")}finally{if(0>=$.O.length)return A.b($.O,-1)
$.O.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jn(a,b){var s,r,q,p,o,n,m,l=a.gJ(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.A())return
s=A.m(l.gF())
B.c.l(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gF();++j
if(!l.A()){if(j<=4){B.c.l(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF();++j
for(;l.A();p=o,o=n){n=l.gF();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.c.l(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.l(b,m)
B.c.l(b,q)
B.c.l(b,r)},
hY(a,b){var s=B.f.gv(a)
b=B.f.gv(b)
b=A.i8(A.fn(A.fn($.hy(),s),b))
return b},
id(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.b(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.fq(a4<a4?B.a.k(a5,0,a4):a5,5,a3).gbB()
else if(s===32)return A.fq(B.a.k(a5,5,a4),0,a3).gbB()}r=A.fe(8,0,!1,t.p)
B.c.q(r,0,0)
B.c.q(r,1,-1)
B.c.q(r,2,-1)
B.c.q(r,7,-1)
B.c.q(r,3,0)
B.c.q(r,4,0)
B.c.q(r,5,a4)
B.c.q(r,6,a4)
if(A.h2(a5,0,a4,0,r)>=14)B.c.q(r,7,a4)
q=r[1]
if(q>=0)if(A.h2(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.a.B(a5,"\\",n))if(p>0)h=B.a.B(a5,"\\",p-1)||B.a.B(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.B(a5,"..",n)))h=m>n+2&&B.a.B(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.B(a5,"file",0)){if(p<=0){if(!B.a.B(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.k(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.Z(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.B(a5,"http",0)){if(i&&o+3===n&&B.a.B(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.Z(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.B(a5,"https",0)){if(i&&o+4===n&&B.a.B(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.Z(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cN(a4<a5.length?B.a.k(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.iO(a5,0,q)
else{if(q===0)A.aX(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.iP(a5,c,p-1):""
a=A.iK(a5,p,o,!1)
i=o+1
if(i<n){a0=A.eC(B.a.k(a5,i,n),a3)
d=A.iM(a0==null?A.b2(A.F("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.iL(a5,n,m,a3,j,a!=null)
a2=m<l?A.iN(a5,m+1,l,a3):a3
return A.iF(j,b,a,d,a1,a2,l<a4?A.iJ(a5,l+1,a4):a3)},
fu(a){var s=t.N
return B.c.cu(A.r(a.split("&"),t.s),A.hW(s,s),new A.dG(B.z),t.f)},
cA(a,b,c){throw A.d(A.F("Illegal IPv4 address, "+a,b,c))},
i9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.b(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.cA("each part must be in the range 0..255",a,r)}A.cA("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.cA(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aA(d)
if(!(k<16))return A.b(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.cA(j,a,q)
p=l}A.cA("IPv4 address should contain exactly 4 parts",a,q)},
ia(a,b,c){var s
if(b===c)throw A.d(A.F("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.b(a,b)
if(a.charCodeAt(b)===118){s=A.ib(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.ft(a,b,c)
return!0},
ib(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.a2(n,a,q)
r=q
break}return new A.a2("Unexpected character",a,q-1)}if(r-1===b)return new A.a2(n,a,r)
return new A.a2("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.a2("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.b(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.a2("Invalid IPvFuture address character",a,r)}},
ft(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.dF(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.b(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.b(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.b(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.i9(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.e.ar(l,8)
if(!(o<16))return A.b(s,o)
s[o]=e;++o
if(!(o<16))return A.b(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.D.bK(s,a0,16,s,a)
B.D.ct(s,a,a0,0)}}return s},
iF(a,b,c,d,e,f,g){return new A.bI(a,b,c,d,e,f,g)},
fF(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
aX(a,b,c){throw A.d(A.F(c,a,b))},
iM(a,b){var s=A.fF(b)
if(a===s)return null
return a},
iK(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.b(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.b(a,r)
if(a.charCodeAt(r)!==93)A.aX(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.b(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.iH(a,q,r)
if(o<r){n=o+1
p=A.fK(a,B.a.B(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.ia(a,q,o)
l=B.a.k(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.b(a,k)
if(a.charCodeAt(k)===58){o=B.a.ab(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.fK(a,B.a.B(a,"25",n)?o+3:n,c,"%25")}else p=""
A.ft(a,b,o)
return"["+B.a.k(a,b,o)+p+"]"}}return A.iR(a,b,c)},
iH(a,b,c){var s=B.a.ab(a,"%",b)
return s>=b&&s<c?s:c},
fK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.H(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.eK(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.H("")
l=h.a+=B.a.k(a,q,r)
if(m)n=B.a.k(a,r,r+3)
else if(n==="%")A.aX(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.H("")
if(q<r){h.a+=B.a.k(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.b(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.k(a,q,r)
if(h==null){h=new A.H("")
m=h}else m=h
m.a+=i
l=A.eJ(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.k(a,b,c)
if(q<c){i=B.a.k(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
iR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.eK(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.H("")
k=B.a.k(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.k(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.H("")
if(q<r){p.a+=B.a.k(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.aX(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.b(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.k(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.H("")
l=p}else l=p
l.a+=k
j=A.eJ(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.k(a,b,c)
if(q<c){k=B.a.k(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
iO(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.b(a,b)
if(!A.fH(a.charCodeAt(b)))A.aX(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.aX(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.k(a,b,c)
return A.iG(q?a.toLowerCase():a)},
iG(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
iP(a,b,c){return A.bJ(a,b,c,16,!1,!1)},
iL(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.bJ(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.a.D(q,"/"))q="/"+q
return A.iQ(q,e,f)},
iQ(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.D(a,"/")&&!B.a.D(a,"\\"))return A.iS(a,!s||c)
return A.iT(a)},
iN(a,b,c,d){return A.bJ(a,b,c,256,!0,!1)},
iJ(a,b,c){return A.bJ(a,b,c,256,!0,!1)},
eK(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.b(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.b(a,l)
q=a.charCodeAt(l)
p=A.ej(r)
o=A.ej(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.b(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.an(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.k(a,b,b+3).toUpperCase()
return null},
eJ(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.b(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.e.ce(a,6*p)&63|q
if(!(o<r))return A.b(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.b(k,l)
if(!(m<r))return A.b(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.b(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.fm(s,0,null)},
bJ(a,b,c,d,e,f){var s=A.fJ(a,b,c,d,e,f)
return s==null?B.a.k(a,b,c):s},
fJ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.b(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.eK(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.aX(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.b(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.eJ(n)}if(o==null){o=new A.H("")
k=o}else k=o
k.a=(k.a+=B.a.k(a,p,q))+l
if(typeof m!=="number")return A.jK(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.k(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
fI(a){if(B.a.D(a,"."))return!0
return B.a.bo(a,"/.")!==-1},
iT(a){var s,r,q,p,o,n,m
if(!A.fI(a))return a
s=A.r([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.b(s,-1)
s.pop()
if(s.length===0)B.c.l(s,"")}p=!0}else{p="."===n
if(!p)B.c.l(s,n)}}if(p)B.c.l(s,"")
return B.c.U(s,"/")},
iS(a,b){var s,r,q,p,o,n
if(!A.fI(a))return!b?A.fG(a):a
s=A.r([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.gbr(s)!==".."){if(0>=s.length)return A.b(s,-1)
s.pop()}else B.c.l(s,"..")
p=!0}else{p="."===n
if(!p)B.c.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.c.l(s,"")
if(!b){if(0>=s.length)return A.b(s,0)
B.c.q(s,0,A.fG(s[0]))}return B.c.U(s,"/")},
fG(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.fH(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.k(a,0,s)+"%3A"+B.a.W(a,s+1)
if(r<=127){if(!(r<128))return A.b(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
iI(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.b(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.aB("Invalid URL encoding",null))}}return r},
eL(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.b(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.z===d)return B.a.k(a,b,c)
else p=new A.bZ(B.a.k(a,b,c))
else{p=A.r([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.b(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.aB("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.aB("Truncated URI",null))
B.c.l(p,A.iI(a,n+1))
n+=2}else if(r===43)B.c.l(p,32)
else B.c.l(p,r)}}t.L.a(p)
return B.am.cp(p)},
fH(a){var s=a|32
return 97<=s&&s<=122},
fq(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.r([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.F(k,a,r))}}if(q<0&&r>b)throw A.d(A.F(k,a,r))
while(p!==44){B.c.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.b(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.c.l(j,o)
else{n=B.c.gbr(j)
if(p!==44||r!==n+7||!B.a.B(a,"base64",n+1))throw A.d(A.F("Expecting '='",a,r))
break}}B.c.l(j,r)
m=r+1
if((j.length&1)===1)a=B.N.cA(a,m,s)
else{l=A.fJ(a,m,s,256,!0,!1)
if(l!=null)a=B.a.Z(a,m,s,l)}return new A.dE(a,j,c)},
h2(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.b(n,p)
o=n.charCodeAt(p)
d=o&31
B.c.q(e,o>>>5,r)}return d},
dP:function dP(){},
p:function p(){},
bT:function bT(a){this.a=a},
a8:function a8(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cc:function cc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bs:function bs(a){this.a=a},
cx:function cx(a){this.a=a},
bp:function bp(a){this.a=a},
c_:function c_(a){this.a=a},
cl:function cl(){},
bo:function bo(){},
dR:function dR(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
L:function L(){},
o:function o(){},
cO:function cO(){},
H:function H(a){this.a=a},
dG:function dG(a){this.a=a},
dF:function dF(a){this.a=a},
bI:function bI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
cG:function cG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
f8(a,b){var s=document.createElement("canvas")
s.toString
B.k.sbD(s,b)
B.k.sbn(s,a)
return s},
x(){var s=new Path2D()
s.toString
return s},
eF(a,b,c){var s=a.classList
s.toString
if(c){s.add(b)
return!0}else{s.remove(b)
return!1}},
K(a,b,c,d,e){var s=A.h4(new A.dQ(c),t.z)
if(s!=null)J.hA(a,b,t.B.a(s),!1)
return new A.cJ(a,b,s,!1,e.i("cJ<0>"))},
h4(a,b){var s=$.y
if(s===B.h)return a
return s.cl(a,b)},
e:function e(){},
bQ:function bQ(){},
bR:function bR(){},
ag:function ag(){},
ah:function ah(){},
b5:function b5(){},
ai:function ai(){},
X:function X(){},
aF:function aF(){},
d1:function d1(){},
c2:function c2(){},
c3:function c3(){},
z:function z(){},
a:function a(){},
w:function w(){},
c8:function c8(){},
a5:function a5(){},
J:function J(){},
l:function l(){},
aO:function aO(){},
cs:function cs(){},
Z:function Z(){},
aa:function aa(){},
aT:function aT(){},
aU:function aU(){},
by:function by(){},
cE:function cE(){},
bu:function bu(a){this.a=a},
bt:function bt(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
cH:function cH(a){this.a=a},
et:function et(a,b){this.a=a
this.$ti=b},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cJ:function cJ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
dQ:function dQ(a){this.a=a},
aH:function aH(){},
c7:function c7(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cF:function cF(){},
cQ:function cQ(){},
cR:function cR(){},
c1:function c1(){},
bV:function bV(a){this.a=a},
c:function c(){},
cu:function cu(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=0
_.x=_.w=$},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
db:function db(a){this.a=a},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.c=0.24
_.d=0.45
_.e=0.35
_.f=0.18
_.w=_.r=0
_.x=!1
_.y=0},
jX(a,b){var s
if(Math.abs(b.c-a.c)>3.25)return new A.aj(B.u)
s=b.e
if(s===B.j)return new A.aj(B.u)
if(s===B.i){if(b.y<=0.15)return new A.aj(B.Y)
return new A.aj(B.X)}return new A.aj(B.W)},
aE:function aE(a,b){this.a=a
this.b=b},
aj:function aj(a){this.a=a},
P:function P(a,b){this.a=a
this.b=b},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=5
_.e=d
_.z=_.y=_.x=_.w=_.r=_.f=0
_.Q=0.5
_.ay=_.ax=_.at=_.as=!1},
d3:function d3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p},
cb:function cb(a,b,c,d,e){var _=this
_.a=a
_.b=$
_.c=b
_.d=c
_.e=d
_.f=e
_.r=!1
_.w=0
_.x=null},
c6:function c6(){var _=this
_.c=_.b=_.a=!1
_.d=0
_.e=!1},
ez(a,b){var s=A.r([],t.m),r=(b^23063^1374496523)>>>0
s=new A.dd(new A.d0(new A.cq(r===0?2654435769:r),a),B.A,B.C,B.r,s)
s.c=new A.b9(!0,1,-1.6,B.d)
s.d=new A.b9(!1,-1,1.6,B.d)
s.ag(1)
return s},
aM:function aM(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=a
this.b=b},
a3:function a3(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dd:function dd(a,b,c,d,e){var _=this
_.b=a
_.d=_.c=$
_.e=b
_.f=c
_.r=d
_.w=1
_.z=_.y=_.x=0
_.Q=30
_.as=""
_.at=0
_.ax=e
_.ay=!1},
a_(a,b,c){if(a<b)return b
if(a>c)return c
return a},
cV(a){var s=A.a_(a,0,1)
return s*s*(3-2*s)},
eU(a){var s,r=A.a_(a,0,1)
if(r<0.5)return 4*r*r*r
s=-2*r+2
return 1-s*s*s/2},
ep(a,b,c,d,e){var s=b.H(0,a),r=s.gp(0),q=A.a_(r,Math.abs(c-d)+0.000001,c+d-0.000001),p=r<1e-9?B.an:s.m(0,1/r),o=c*c,n=(o-d*d+q*q)/(2*q),m=Math.sqrt(Math.max(0,o-n*n))
return new A.d5(a.j(0,p.m(0,n)).j(0,new A.f(-p.b,p.a).m(0,m*e)),a.j(0,p.m(0,q)))},
f:function f(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
cq:function cq(a){this.a=a},
hC(){var s,r,q=1600,p=A.f8(93,q),o=t.b.a(B.k.af(p,"2d"))
B.b.sn(o,"#1a0c08")
o.fillRect(0,0,q,4)
for(s=-32;s<1632;s+=32){o.beginPath()
o.moveTo(s,7)
r=s+18
o.lineTo(r,7)
o.bezierCurveTo(r,25,s+14.040000000000001,41,s+9,41)
o.bezierCurveTo(s+3.96,41,s,25,s,7)
o.closePath()
o.fill()}o.fillRect(0,47,q,4)
o.fillRect(0,66,q,4)
o.fillRect(0,72,q,21)
return p},
f2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
a.save()
B.b.su(a,"#1a0c08")
a.lineWidth=e
a.lineCap="square"
a.lineJoin="miter"
for(s=-d,r=1600+d,q=b+c,p=d*0.82,o=b+c*0.12,n=d*0.3,m=b+c*0.56,l=d*0.56,k=b+c*0.34,j=d*0.44;s<r;s+=d){a.beginPath()
a.moveTo(s,q)
i=s+p
a.lineTo(i,q)
a.lineTo(i,o)
i=s+n
a.lineTo(i,o)
a.lineTo(i,m)
i=s+l
a.lineTo(i,m)
a.lineTo(i,k)
a.lineTo(s+j,k)
a.stroke()}a.restore()},
cZ:function cZ(){var _=this
_.b=_.a=$
_.d=_.c=null},
h9(a,b){var s,r
if(a/b>=1){s=b/766
r=(a-1600*s)/2
return new A.c9(s,r,0,-r/s,(a-r)/s)}s=a/1600
return new A.c9(s,0,(b-766*s)/2,0,1600)},
c9:function c9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bl:function bl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=1
_.w=g
_.x=h
_.y=i},
df:function df(a,b){this.a=a
this.b=b},
eA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new A.dh(d,f,q,n,p,o,l,m,i,e,k,a,g,b,h,j,c)},
eB(b0,b1,b2){var s=b0.a,r=b1.a,q=b0.b,p=b1.b,o=b0.c,n=b1.c,m=b0.d.ad(b1.d,b2),l=b0.e,k=b1.e,j=b0.f,i=b1.f,h=b0.r.ad(b1.r,b2),g=b0.w,f=b1.w,e=b0.x,d=b1.x,c=b0.y,b=b1.y,a=b0.z,a0=b1.z,a1=b0.Q.ad(b1.Q,b2),a2=b0.as.ad(b1.as,b2),a3=b0.at,a4=b1.at,a5=b0.ax,a6=b1.ax,a7=b0.ay,a8=b1.ay,a9=b0.ch
return A.eA(a1,a3+(a4-a3)*b2,a9+(b1.ch-a9)*b2,s+(r-s)*b2,c+(b-c)*b2,q+(p-q)*b2,a2,a5+(a6-a5)*b2,e+(d-e)*b2,a7+(a8-a7)*b2,a+(a0-a)*b2,h,g+(f-g)*b2,m,j+(i-j)*b2,l+(k-l)*b2,o+(n-o)*b2)},
b1(a,b){var s,r,q,p,o,n,m,l=A.eA(B.L,0,0,0,0,0,B.J,0,0,0,0,B.I,-0.02,B.K,0,0,0),k=a.a?0:1.7,j=Math.sin(b*1.6+k),i=Math.sin(b*0.9+k)
l.a=j*0.014
l.b=0.004+j*0.008
l.c=i*0.025
l.x=i*0.014
l.y=j*0.03+i*0.02
l.r=l.r.j(0,new A.f(0,0.014*Math.sin(b*1.2+k)))
l.d=l.d.j(0,new A.f(0,0.01*Math.sin(b*1.05+k+0.4)))
l.e=l.e+0.012*Math.sin(b*0.8+k)
switch(a.e.a){case 0:break
case 1:l.b+=0.05
A.fN(l,a,0.22,0.05,0.1,0.06)
break
case 2:A.eM(l,A.cV(a.f/0.18))
break
case 3:A.eM(l,1)
A.fO(l,1)
break
case 4:A.eM(l,1)
A.fO(l,1)
s=A.a_((a.f-0.06)/0.29,0,1)
return A.eB(l,A.eA(B.L,0,0,0,0,0,B.J,0,0,0,0,B.I,-0.02,B.K,0,0,0),A.eU(s))
case 5:r=a.f
q=A.cV(Math.min(1,r/0.12))
l.b=l.b+0.075*q
l.a=l.a+0.03*q
l.c=l.c-0.02*q
l.r=l.r.j(0,B.as.m(0,q))
l.d=l.d.j(0,B.aA.m(0,q))
l.w=l.w-0.18*q
l.x=l.x-0.04*q
if(a.z>0){p=Math.sin(r*120)*0.035*(a.z/0.12)
l.w+=p
l.c=l.c-p*0.3}if(a.w!==0)A.fN(l,a,0.15,0.015,0.045,0.014)
break
case 6:q=1-A.cV(a.f/0.25)
l.a=l.a+0.18*q
r=0.06*q
l.c=l.c-r
l.x=l.x+0.24*q
l.y=l.y+0.3*q
l.r=l.r.j(0,B.ao.m(0,q))
l.d=l.d.j(0,B.aD.m(0,q))
l.b+=r
l.Q=l.Q.j(0,new A.f(-0.12*q,0.05*Math.sin(q*3.141592653589793)))
l.as=l.as.j(0,new A.f(-0.04*q,0))
l.at=-0.1*q
break
case 7:r=a.f
q=1-A.cV(r/a.Q)
o=Math.sin(r*26)*0.05*q
l.a=l.a+(0.22*q+o)
l.c=l.c-(0.05*q+o*0.4)
l.x=l.x+0.3*q
l.y=l.y+(0.4*q+o)
l.r=l.r.j(0,B.aE.m(0,q))
l.d=l.d.j(0,B.ap.m(0,q))
l.b=l.b+0.1*q
l.Q=l.Q.j(0,new A.f(-0.18*q,0.04*Math.sin(q*3.141592653589793)))
l.as=l.as.j(0,new A.f(-0.06*q,0))
l.at=-0.14*q
l.z=o*0.25
break
case 8:r=a.f
n=A.cV(Math.min(1,r/0.3))
m=A.eU(A.a_((r-0.1)/0.7,0,1))
l.b=l.b+0.16*n
l.z=1.35*m
l.a=l.a+(0.18*n+0.1*m)
r=0.06*n
l.c=l.c-r
l.x=l.x+0.35*m
l.y=l.y+0.55*m
l.d=l.d.j(0,B.aC.m(0,m))
l.r=l.r.j(0,B.aF.m(0,m))
l.Q=l.Q.j(0,new A.f(-0.12*n,0.02*n))
l.as=l.as.j(0,new A.f(0.04*n,0))
l.at=-0.1*n
l.ax=r
break}return l},
eM(a,b){var s,r=0.14*b
a.a=a.a+r
a.b=a.b+0.07*b
s=0.06*b
a.c=a.c-s
a.d=a.d.j(0,B.ax.m(0,b))
a.e=a.e+0.36*b
a.f-=r
a.r=a.r.j(0,B.ay.m(0,b))
a.w=a.w-0.05*b
a.Q=a.Q.j(0,new A.f(-0.04*b,0))
a.x=a.x+0.03*b
a.y+=s},
fO(a,b){var s,r=Math.sin(3.141592653589793*b)
a.ay=a.ay+0.32*b
a.b=a.b+0.06*b
s=0.09*b
a.c=a.c+s
a.a=a.a-0.16*b
a.d=a.d.j(0,B.aB.m(0,b))
a.e=a.e-0.36*b
a.f=a.f+0.78*b
a.r=a.r.j(0,B.ar.m(0,b))
a.w+=s
a.as=a.as.j(0,new A.f(0.28*b,0.05*r*b))
a.Q=a.Q.j(0,new A.f(-0.06*b,0.03*r*b))
a.ax=-0.16*r
a.at=-0.2*b
a.x=a.x-0.05*b
a.y=a.y-0.08*b},
fN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=b.w
if(k===0)return
s=b.r/6.283185307179586
r=s-Math.floor(s)
q=A.fU(r,a.as,k,c,e)
p=A.fU(B.f.R(r+0.5,1),a.Q,k,c,e)
a.as=q.a
a.ax=q.b
a.Q=p.a
a.at=p.b
o=r*3.141592653589793
n=o*2
m=Math.sin(n)
l=Math.cos(o*4)
a.c=a.c+f*Math.cos(n)*k
o=a.a-d*k
a.a=o
a.a=o+0.032*m*k
a.b=a.b+0.028*(0.5+0.5*l)
a.ch=0.012*(1-l)
a.r=a.r.j(0,new A.f(0.018*m,0.048*m))
a.d=a.d.j(0,new A.f(-0.018*m*k,0.032*Math.sin(n+0.4)))
a.e=a.e+0.028*Math.sin(n+0.3)*k
o=n+0.9
a.w=a.w+0.055*Math.sin(o)*k
a.x=a.x+0.026*Math.sin(n+0.6)
a.y=a.y+0.055*Math.sin(o)},
fU(a,b,c,d,e){var s,r,q,p,o,n=B.f.R(a,1)
if(n<0.55){s=n/0.55
r=d*(1-2*s)
q=s>0.55&&s<0.9?-0.08*Math.sin((s-0.55)/0.35*3.141592653589793)*c:0
p=0}else{o=(n-0.55)/0.45
r=d*(-1+2*A.eU(o))
p=e*Math.sin(3.141592653589793*Math.pow(o,0.88))
q=-0.22*Math.sin(3.141592653589793*o)}return new A.dS(new A.f(b.a+c*r,b.b+p),q)},
dh:function dh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q},
dS:function dS(a,b){this.a=a
this.b=b},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.w=_.r=_.f=0},
dj:function dj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.f=_.e=null},
dk:function dk(){},
ct:function ct(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=1},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.z=a
_.Q=b
_.as=$},
d7:function d7(a,b){this.a=a
this.b=b},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
dr:function dr(a){this.a=a},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
dA:function dA(a){this.a=a},
dB:function dB(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
hf(a){return v.mangledGlobalNames[a]},
jV(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
jY(a){throw A.u(A.fc(a),new Error())},
k(){throw A.u(A.hV(""),new Error())},
T(){throw A.u(A.hU(""),new Error())},
he(){throw A.u(A.fc(""),new Error())},
eX(a,b){},
jT(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=1600
try{s=A.ic().gbw()
r=J.af(s,"debug")==="1"
q=J.af(s,"preview")==="1"
p=J.af(s,"pose")
o=J.af(s,"ui")!=="0"
n=J.af(s,"autoplay")==="1"
m=J.af(s,"bot")!=="off"
a0=J.af(s,"seed")
a1=A.eC(a0==null?"":a0,null)
l=a1==null?1:a1
if(!o){a0=document.body
if(a0!=null){a2=a0.classList
a2.contains("no-ui").toString
a2.add("no-ui")}}if(q){a0=document.body
if(a0!=null){a2=a0.classList
a2.contains("preview").toString
a2.add("preview")}}k=t.cR.a(document.querySelector("#scene"))
if(k==null){a0=A.fk("Missing #scene canvas")
throw A.d(a0)}a0=l
a3=m
a4=A.r([],t.m)
a5=new A.cb(new A.db(r),new A.c6(),a4,a0,a3)
a5.b=A.ez(a3,a0)
j=a5
if(p!=null){i=A.jw(p)
if(i!=null){a0=J.af(s,"t")
a0=A.i0(a0==null?"":a0)
h=a0==null?0:a0
a0=j.b
a0===$&&A.k()
a0=a0.c
a0===$&&A.k()
g=a0
g.e=i
g.sbO(h)
if(i===B.m){a0=h
if(typeof a0!=="number")return a0.m()
a0*=8}else a0=0
g.r=a0
a0=i===B.m?1:0
g.w=a0
j.scI(h)}}a0=k
a3=new A.cZ()
k=A.f8(119,b0)
a4=t.b
a6=a4.a(B.k.af(k,"2d"))
B.b.sn(a6,"#1a0c08")
a6.fillRect(0,0,b0,9)
a6.fillRect(0,11,b0,6)
A.f2(a6,19,12,32,2)
a6.fillRect(0,33,b0,5)
a6.fillRect(0,41,b0,11)
a6.fillRect(0,70,b0,4)
A.f2(a6,80,29,40,3.8)
a6.fillRect(0,115,b0,4)
a3.a=k
a3.b=A.hC()
a7=A.r([],t.b4)
a3=new A.dj(a3,new A.df(a7,new A.cq(20973)))
a3.c=new A.cC(0.5,B.G,"#7e3222","#963d28","#5f2418",B.H,B.at,0)
a3.d=new A.cC(0.65,B.ai,"#f0e0c7","#f6ead6","#d8c3a4",B.av,B.au,-0.1)
a7=A.h9(b0,766)
f=new A.di(a0,a4.a(B.k.af(a0,"2d")),a3,a7)
a7=t.J
a8=new A.d4(A.r([],a7),A.r([],a7))
a8.bR()
e=a8
a0=q||p!=null
d=new A.cu(j,f,e,n,a0)
d.cm()}catch(a9){c=A.b3(a9)
b=A.aw(a9)
a=document.querySelector("#error")
if(a!=null){J.eq(a).a1(0,"hidden")
J.V(a,"Homer failed to start.\n"+A.m(c))}A.jV("Homer error: "+A.m(c)+"\n"+A.m(b))}},
jw(a){var s,r
for(s=0;s<9;++s){r=B.aa[s]
if(r.b===a)return r}return null}},B={}
var w=[A,J,B]
var $={}
A.ew.prototype={}
J.ba.prototype={
P(a,b){return a===b},
gv(a){return A.cn(a)},
h(a){return"Instance of '"+A.co(a)+"'"},
gM(a){return A.au(A.eO(this))}}
J.ce.prototype={
h(a){return String(a)},
gv(a){return a?519018:218159},
gM(a){return A.au(t.y)},
$iM:1,
$iat:1}
J.bc.prototype={
P(a,b){return null==b},
h(a){return"null"},
gv(a){return 0},
$iM:1}
J.A.prototype={$ij:1}
J.ad.prototype={
gv(a){return 0},
h(a){return String(a)}}
J.cm.prototype={}
J.br.prototype={}
J.a4.prototype={
h(a){var s=a[$.hj()]
if(s==null)s=a[$.hi()]
if(s==null)return this.bQ(a)
return"JavaScript function for "+J.b4(s)},
$ial:1}
J.aJ.prototype={
gv(a){return 0},
h(a){return String(a)}}
J.aK.prototype={
gv(a){return 0},
h(a){return String(a)}}
J.t.prototype={
l(a,b){A.ar(a).c.a(b)
a.$flags&1&&A.aA(a,29)
a.push(b)},
cj(a,b){A.ar(a).i("n<1>").a(b)
a.$flags&1&&A.aA(a,"addAll",2)
this.bU(a,b)
return},
bU(a,b){var s,r
t.r.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.ak(a))
for(r=0;r<s;++r)a.push(b[r])},
av(a){a.$flags&1&&A.aA(a,"clear","clear")
a.length=0},
U(a,b){var s,r=A.fe(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.q(r,s,A.m(a[s]))
return r.join(b)},
cB(a,b){var s,r,q
A.ar(a).i("1(1,1)").a(b)
s=a.length
if(s===0)throw A.d(A.fa())
if(0>=s)return A.b(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.d(A.ak(a))}return r},
cu(a,b,c,d){var s,r,q
d.a(b)
A.ar(a).O(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.ak(a))}return r},
gbr(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.fa())},
h(a){return A.ev(a,"[","]")},
gJ(a){return new J.bS(a,a.length,A.ar(a).i("bS<1>"))},
gv(a){return A.cn(a)},
gp(a){return a.length},
C(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ee(a,b))
return a[b]},
q(a,b,c){var s
A.ar(a).c.a(c)
a.$flags&2&&A.aA(a)
s=a.length
if(b>=s)throw A.d(A.ee(a,b))
a[b]=c},
$in:1,
$iq:1}
J.cd.prototype={
cJ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.co(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.d6.prototype={}
J.bS.prototype={
gF(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.cW(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bd.prototype={
aw(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.e.gac(b)
if(this.gac(a)===s)return 0
if(this.gac(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gac(a){return a===0?1/a<0:a<0},
bA(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.ap(""+a+".round()"))},
cn(a,b,c){if(B.e.aw(b,c)>0)throw A.d(A.eS(b))
if(this.aw(a,b)<0)return b
if(this.aw(a,c)>0)return c
return a},
aK(a,b){var s
if(b>20)throw A.d(A.Y(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gac(a))return"-"+s
return s},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
R(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
cf(a,b){return(a|0)===a?a/b|0:this.cg(a,b)},
cg(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.ap("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
ar(a,b){var s
if(a>0)s=this.b6(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ce(a,b){if(0>b)throw A.d(A.eS(b))
return this.b6(a,b)},
b6(a,b){return b>31?0:a>>>b},
gM(a){return A.au(t.H)},
$iE:1,
$ia0:1}
J.bb.prototype={
gM(a){return A.au(t.p)},
$iM:1,
$ii:1}
J.cf.prototype={
gM(a){return A.au(t.i)},
$iM:1}
J.aI.prototype={
Z(a,b,c,d){var s=A.cp(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
B(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.Y(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
D(a,b){return this.B(a,b,0)},
k(a,b,c){return a.substring(b,A.cp(b,c,a.length))},
W(a,b){return this.k(a,b,null)},
aM(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.hR(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.hS(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
m(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.U)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ab(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.Y(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bo(a,b){return this.ab(a,b,0)},
h(a){return a},
gv(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gM(a){return A.au(t.N)},
gp(a){return a.length},
$iM:1,
$idg:1,
$ih:1}
A.aL.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bZ.prototype={
gp(a){return this.a.length},
C(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.dl.prototype={}
A.b8.prototype={}
A.cj.prototype={
gF(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.eg(q),o=p.gp(q)
if(r.b!==o)throw A.d(A.ak(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.az(q,s);++r.c
return!0}}
A.aG.prototype={}
A.ao.prototype={
q(a,b,c){A.C(this).i("ao.E").a(c)
throw A.d(A.ap("Cannot modify an unmodifiable list"))}}
A.aR.prototype={}
A.b6.prototype={
h(a){return A.ey(this)},
q(a,b,c){var s=A.C(this)
s.c.a(b)
s.y[1].a(c)
A.hK()},
$iG:1}
A.b7.prototype={
gp(a){return this.b.length},
co(a){if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
C(a,b){if(!this.co(b))return null
return this.b[this.a[b]]},
T(a,b){var s,r,q,p,o=this
o.$ti.i("~(1,2)").a(b)
s=o.$keys
if(s==null){s=Object.keys(o.a)
o.$keys=s}s=s
r=o.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])}}
A.bn.prototype={}
A.dC.prototype={
K(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bk.prototype={
h(a){return"Null check operator used on a null value"}}
A.ch.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cy.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.de.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bC.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaQ:1}
A.ac.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hg(r==null?"unknown":r)+"'"},
$ial:1,
gcL(){return this},
$C:"$1",
$R:1,
$D:null}
A.bX.prototype={$C:"$0",$R:0}
A.bY.prototype={$C:"$2",$R:2}
A.cw.prototype={}
A.cv.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hg(s)+"'"}}
A.aC.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aC))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.hb(this.a)^A.cn(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.co(this.a)+"'")}}
A.cr.prototype={
h(a){return"RuntimeError: "+this.a}}
A.be.prototype={
gp(a){return this.a},
gV(){return new A.bf(this,A.C(this).i("bf<1>"))},
C(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cw(b)},
cw(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bp(a)]
r=this.bq(s,a)
if(r<0)return null
return s[r].b},
q(a,b,c){var s,r,q,p,o,n,m=this,l=A.C(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aR(s==null?m.b=m.ao():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aR(r==null?m.c=m.ao():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ao()
p=m.bp(b)
o=q[p]
if(o==null)q[p]=[m.ah(b,c)]
else{n=m.bq(o,b)
if(n>=0)o[n].b=c
else o.push(m.ah(b,c))}}},
T(a,b){var s,r,q=this
A.C(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ak(q))
s=s.c}},
aR(a,b,c){var s,r=A.C(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ah(b,c)
else s.b=c},
ah(a,b){var s=this,r=A.C(s),q=new A.da(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
bp(a){return J.cX(a)&1073741823},
bq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.f0(a[r].a,b))return r
return-1},
h(a){return A.ey(this)},
ao(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.da.prototype={}
A.bf.prototype={
gp(a){return this.a.a},
gJ(a){var s=this.a
return new A.ci(s,s.r,s.e,this.$ti.i("ci<1>"))}}
A.ci.prototype={
gF(){return this.d},
A(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ak(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ek.prototype={
$1(a){return this.a(a)},
$S:11}
A.el.prototype={
$2(a,b){return this.a(a,b)},
$S:12}
A.em.prototype={
$1(a){return this.a(A.ab(a))},
$S:13}
A.cg.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
$idg:1}
A.bi.prototype={
c7(a,b,c,d){var s=A.Y(b,0,c,d,null)
throw A.d(s)},
aV(a,b,c,d){if(b>>>0!==b||b>c)this.c7(a,b,c,d)}}
A.a6.prototype={
gp(a){return a.length},
$iam:1}
A.bh.prototype={
q(a,b,c){A.bL(c)
a.$flags&2&&A.aA(a)
A.eN(b,a,a.length)
a[b]=c},
bK(a,b,c,d,e){var s,r,q
t.e.a(d)
a.$flags&2&&A.aA(a,5)
s=a.length
this.aV(a,b,s,"start")
this.aV(a,c,s,"end")
if(b>c)A.b2(A.Y(b,0,c,null,null))
r=c-b
if(e<0)A.b2(A.aB(e,null))
if(16-e<r)A.b2(A.fk("Not enough elements"))
q=e!==0||16!==r?d.subarray(e,e+r):d
a.set(q,b)
return},
$in:1,
$iq:1}
A.ck.prototype={
gM(a){return B.aj},
C(a,b){A.eN(b,a,a.length)
return a[b]},
$iM:1}
A.bj.prototype={
gM(a){return B.al},
gp(a){return a.length},
C(a,b){A.eN(b,a,a.length)
return a[b]},
$iM:1,
$ieE:1}
A.bz.prototype={}
A.bA.prototype={}
A.U.prototype={
i(a){return A.e7(v.typeUniverse,this,a)},
O(a){return A.iC(v.typeUniverse,this,a)}}
A.cK.prototype={}
A.e5.prototype={
h(a){return A.N(this.a,null)}}
A.cI.prototype={
h(a){return this.a}}
A.bD.prototype={$ia8:1}
A.dK.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.dJ.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.dL.prototype={
$0(){this.a.$0()},
$S:6}
A.dM.prototype={
$0(){this.a.$0()},
$S:6}
A.e3.prototype={
bS(a,b){if(self.setTimeout!=null)self.setTimeout(A.bP(new A.e4(this,b),0),a)
else throw A.d(A.ap("`setTimeout()` not found."))}}
A.e4.prototype={
$0(){this.b.$0()},
$S:0}
A.a1.prototype={
h(a){return A.m(this.a)},
$ip:1,
ga3(){return this.b}}
A.bw.prototype={
cz(a){if((this.c&15)!==6)return!0
return this.b.b.aI(t.bG.a(this.d),a.a,t.y,t.K)},
cv(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.cD(q,m,a.b,o,n,t.l)
else p=l.aI(t.w.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.b7.b(A.b3(s))){if((r.c&1)!==0)throw A.d(A.aB("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.aB("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.R.prototype={
cH(a,b,c){var s,r,q=this.$ti
q.O(c).i("1/(2)").a(a)
s=$.y
if(s===B.h){if(!t.Q.b(b)&&!t.w.b(b))throw A.d(A.er(b,"onError",u.c))}else{c.i("@<0/>").O(q.c).i("1(2)").a(a)
b=A.jq(b,s)}r=new A.R(s,c.i("R<0>"))
this.aT(new A.bw(r,3,a,b,q.i("@<1>").O(c).i("bw<1,2>")))
return r},
cd(a){this.a=this.a&1|16
this.c=a},
a4(a){this.a=a.a&30|this.a&1
this.c=a.c},
aT(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.aT(a)
return}r.a4(s)}A.eR(null,null,r.b,t.M.a(new A.dT(r,a)))}},
b4(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.b4(a)
return}m.a4(n)}l.a=m.a7(a)
A.eR(null,null,m.b,t.M.a(new A.dV(l,m)))}},
a6(){var s=t.F.a(this.c)
this.c=null
return this.a7(s)},
a7(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bY(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a6()
q.a4(a)
A.aV(q,r)},
aW(a){var s=this.a6()
this.cd(a)
A.aV(this,s)},
bX(a){this.a^=2
A.eR(null,null,this.b,t.M.a(new A.dU(this,a)))},
$ica:1}
A.dT.prototype={
$0(){A.aV(this.a,this.b)},
$S:0}
A.dV.prototype={
$0(){A.aV(this.b,this.a.a)},
$S:0}
A.dU.prototype={
$0(){this.a.aW(this.b)},
$S:0}
A.dY.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.cC(t.bd.a(q.d),t.A)}catch(p){s=A.b3(p)
r=A.aw(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.es(q)
n=k.a
n.c=new A.a1(q,o)
q=n}q.b=!0
return}if(j instanceof A.R&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.R){m=k.b.a
l=new A.R(m.b,m.$ti)
j.cH(new A.dZ(l,m),new A.e_(l),t.q)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dZ.prototype={
$1(a){this.a.bY(this.b)},
$S:5}
A.e_.prototype={
$2(a,b){A.bM(a)
t.l.a(b)
this.a.aW(new A.a1(a,b))},
$S:15}
A.dX.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aI(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.b3(l)
r=A.aw(l)
q=s
p=r
if(p==null)p=A.es(q)
o=this.a
o.c=new A.a1(q,p)
o.b=!0}},
$S:0}
A.dW.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cz(s)&&p.a.e!=null){p.c=p.a.cv(s)
p.b=!1}}catch(o){r=A.b3(o)
q=A.aw(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.es(p)
m=l.b
m.c=new A.a1(p,n)
p=m}p.b=!0}},
$S:0}
A.cD.prototype={}
A.bq.prototype={
gp(a){var s,r,q=this,p={},o=new A.R($.y,t.a)
p.a=0
s=A.C(q)
r=s.i("~(1)?").a(new A.dp(p,q))
t.bp.a(new A.dq(p,o))
A.K(q.a,q.b,r,!1,s.c)
return o}}
A.dp.prototype={
$1(a){A.C(this.b).c.a(a);++this.a.a},
$S(){return A.C(this.b).i("~(1)")}}
A.dq.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.a6()
r.c.a(q)
s.a=8
s.c=q
A.aV(s,p)},
$S:0}
A.bK.prototype={$ifv:1}
A.cM.prototype={
cE(a){var s,r,q
t.M.a(a)
try{if(B.h===$.y){a.$0()
return}A.h_(null,null,this,a,t.q)}catch(q){s=A.b3(q)
r=A.aw(q)
A.ec(A.bM(s),t.l.a(r))}},
cF(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.h===$.y){a.$1(b)
return}A.h0(null,null,this,a,b,t.q,c)}catch(q){s=A.b3(q)
r=A.aw(q)
A.ec(A.bM(s),t.l.a(r))}},
ck(a){return new A.e1(this,t.M.a(a))},
cl(a,b){return new A.e2(this,b.i("~(0)").a(a),b)},
cC(a,b){b.i("0()").a(a)
if($.y===B.h)return a.$0()
return A.h_(null,null,this,a,b)},
aI(a,b,c,d){c.i("@<0>").O(d).i("1(2)").a(a)
d.a(b)
if($.y===B.h)return a.$1(b)
return A.h0(null,null,this,a,b,c,d)},
cD(a,b,c,d,e,f){d.i("@<0>").O(e).O(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.y===B.h)return a.$2(b,c)
return A.jr(null,null,this,a,b,c,d,e,f)}}
A.e1.prototype={
$0(){return this.a.cE(this.b)},
$S:0}
A.e2.prototype={
$1(a){var s=this.c
return this.a.cF(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.ed.prototype={
$0(){A.hM(this.a,this.b)},
$S:0}
A.bx.prototype={
gJ(a){var s=this,r=new A.aW(s,s.r,A.C(s).i("aW<1>"))
r.c=s.e
return r},
gp(a){return this.a},
l(a,b){var s,r,q=this
A.C(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aS(s==null?q.b=A.eG():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aS(r==null?q.c=A.eG():r,b)}else return q.bT(b)},
bT(a){var s,r,q,p=this
A.C(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.eG()
r=p.aX(a)
q=s[r]
if(q==null)s[r]=[p.ap(a)]
else{if(p.b_(q,a)>=0)return!1
q.push(p.ap(a))}return!0},
a1(a,b){var s
if(b!=="__proto__")return this.ca(this.b,b)
else{s=this.c9(b)
return s}},
c9(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aX(a)
r=n[s]
q=o.b_(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.bc(p)
return!0},
aS(a,b){A.C(this).c.a(b)
if(t.O.a(a[b])!=null)return!1
a[b]=this.ap(b)
return!0},
ca(a,b){var s
if(a==null)return!1
s=t.O.a(a[b])
if(s==null)return!1
this.bc(s)
delete a[b]
return!0},
b0(){this.r=this.r+1&1073741823},
ap(a){var s,r=this,q=new A.cL(A.C(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.b0()
return q},
bc(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.b0()},
aX(a){return J.cX(a)&1073741823},
b_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.f0(a[r].a,b))return r
return-1}}
A.cL.prototype={}
A.aW.prototype={
gF(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ak(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}}}
A.B.prototype={
gJ(a){return new A.cj(a,this.gp(a),A.ax(a).i("cj<B.E>"))},
az(a,b){return this.C(a,b)},
ct(a,b,c,d){var s
A.ax(a).i("B.E?").a(d)
A.cp(b,c,this.gp(a))
for(s=b;s<c;++s)this.q(a,s,d)},
h(a){return A.ev(a,"[","]")},
$in:1,
$iq:1}
A.D.prototype={
T(a,b){var s,r,q,p=A.C(this)
p.i("~(D.K,D.V)").a(b)
for(s=J.f1(this.gV()),p=p.i("D.V");s.A();){r=s.gF()
q=this.C(0,r)
b.$2(r,q==null?p.a(q):q)}},
gp(a){return J.cY(this.gV())},
h(a){return A.ey(this)},
$iG:1}
A.dc.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:16}
A.cP.prototype={
q(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
throw A.d(A.ap("Cannot modify unmodifiable map"))}}
A.bg.prototype={
C(a,b){return this.a.C(0,b)},
q(a,b,c){var s=this.$ti
this.a.q(0,s.c.a(b),s.y[1].a(c))},
gp(a){var s=this.a
return s.gp(s)},
h(a){return this.a.h(0)},
$iG:1}
A.aS.prototype={}
A.a7.prototype={
h(a){return A.ev(this,"{","}")},
U(a,b){var s,r,q,p,o=this.gJ(this)
if(!o.A())return""
s=o.d
r=J.b4(s==null?o.$ti.c.a(s):s)
if(!o.A())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.m(p==null?s.a(p):p)}while(o.A())
s=q}else{q=r
do{p=o.d
q=q+b+A.m(p==null?s.a(p):p)}while(o.A())
s=q}return s.charCodeAt(0)==0?s:s},
$in:1,
$iaP:1}
A.bB.prototype={}
A.bH.prototype={}
A.ea.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:7}
A.e9.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:7}
A.bW.prototype={
cA(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.cp(a4,a5,a2)
s=$.hu()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.b(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.b(a3,k)
h=A.ej(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.b(a3,g)
f=A.ej(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.b(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.b(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.H("")
g=o}else g=o
g.a+=B.a.k(a3,p,q)
c=A.an(j)
g.a+=c
p=k
continue}}throw A.d(A.F("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.k(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.f3(a3,m,a5,n,l,r)
else{b=B.e.R(r-1,4)+1
if(b===1)throw A.d(A.F(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.Z(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.f3(a3,m,a5,n,l,a)
else{b=B.e.R(a,4)
if(b===1)throw A.d(A.F(a1,a3,a5))
if(b>1)a3=B.a.Z(a3,a5,a5,b===2?"==":"=")}return a3}}
A.d_.prototype={}
A.aD.prototype={}
A.c0.prototype={}
A.c4.prototype={}
A.cB.prototype={}
A.dH.prototype={
cp(a){return new A.e8(this.a).c_(t.L.a(a),0,null,!0)}}
A.e8.prototype={
c_(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.cp(b,c,J.cY(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.iV(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.iU(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.aj(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.iW(o)
l.b=0
throw A.d(A.F(m,a,p+l.c))}return n},
aj(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.e.cf(b+c,2)
r=q.aj(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.aj(a,s,c,d)}return q.cr(a,b,c,d)},
cr(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.H(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.b(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.b(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.b(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.an(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.an(h)
e.a+=p
break
case 65:p=A.an(h)
e.a+=p;--d
break
default:p=A.an(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.b(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.b(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.b(a,l)
p=A.an(a[l])
e.a+=p}else{p=A.fm(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.an(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.dP.prototype={
h(a){return this.S()}}
A.p.prototype={
ga3(){return A.i_(this)}}
A.bT.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.d2(s)
return"Assertion failed"}}
A.a8.prototype={}
A.W.prototype={
gam(){return"Invalid argument"+(!this.a?"(s)":"")},
gal(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gam()+q+o
if(!s.a)return n
return n+s.gal()+": "+A.d2(s.gaC())},
gaC(){return this.b}}
A.bm.prototype={
gaC(){return A.fR(this.b)},
gam(){return"RangeError"},
gal(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.cc.prototype={
gaC(){return A.bL(this.b)},
gam(){return"RangeError"},
gal(){if(A.bL(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gp(a){return this.f}}
A.bs.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.cx.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bp.prototype={
h(a){return"Bad state: "+this.a}}
A.c_.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.d2(s)+"."}}
A.cl.prototype={
h(a){return"Out of Memory"},
ga3(){return null},
$ip:1}
A.bo.prototype={
h(a){return"Stack Overflow"},
ga3(){return null},
$ip:1}
A.dR.prototype={
h(a){return"Exception: "+this.a}}
A.a2.prototype={
h(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.k(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.b(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.b(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.a.k(e,i,j)+k+"\n"+B.a.m(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.m(f)+")"):g}}
A.n.prototype={
gp(a){var s,r=this.gJ(this)
for(s=0;r.A();)++s
return s},
az(a,b){var s,r
A.fi(b,"index")
s=this.gJ(this)
for(r=b;s.A();){if(r===0)return s.gF();--r}throw A.d(A.eu(b,b-r,this,"index"))},
h(a){return A.hO(this,"(",")")}}
A.L.prototype={
gv(a){return A.o.prototype.gv.call(this,0)},
h(a){return"null"}}
A.o.prototype={$io:1,
P(a,b){return this===b},
gv(a){return A.cn(this)},
h(a){return"Instance of '"+A.co(this)+"'"},
gM(a){return A.jI(this)},
toString(){return this.h(this)}}
A.cO.prototype={
h(a){return""},
$iaQ:1}
A.H.prototype={
gp(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ii6:1}
A.dG.prototype={
$2(a,b){var s,r,q,p
t.f.a(a)
A.ab(b)
s=B.a.bo(b,"=")
if(s===-1){if(b!=="")a.q(0,A.eL(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.k(b,0,s)
q=B.a.W(b,s+1)
p=this.a
a.q(0,A.eL(r,0,r.length,p,!0),A.eL(q,0,q.length,p,!0))}return a},
$S:17}
A.dF.prototype={
$2(a,b){throw A.d(A.F("Illegal IPv6 address, "+a,this.a,b))},
$S:18}
A.bI.prototype={
gb9(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.m(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gv(a){var s,r=this,q=r.y
if(q===$){s=B.a.gv(r.gb9())
r.y!==$&&A.he()
r.y=s
q=s}return q},
gbw(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.fu(s==null?"":s)
r.z!==$&&A.he()
q=r.z=new A.aS(s,t.W)}return q},
gbC(){return this.b},
gaB(a){var s=this.c
if(s==null)return""
if(B.a.D(s,"[")&&!B.a.B(s,"v",1))return B.a.k(s,1,s.length-1)
return s},
gaF(a){var s=this.d
return s==null?A.fF(this.a):s},
gaG(){var s=this.f
return s==null?"":s},
gbj(){var s=this.r
return s==null?"":s},
gbk(){return this.c!=null},
gbm(){return this.f!=null},
gbl(){return this.r!=null},
h(a){return this.gb9()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.k.b(b))if(p.a===b.gaO())if(p.c!=null===b.gbk())if(p.b===b.gbC())if(p.gaB(0)===b.gaB(b))if(p.gaF(0)===b.gaF(b))if(p.e===b.gbv(b)){r=p.f
q=r==null
if(!q===b.gbm()){if(q)r=""
if(r===b.gaG()){r=p.r
q=r==null
if(!q===b.gbl()){s=q?"":r
s=s===b.gbj()}}}}return s},
$icz:1,
gaO(){return this.a},
gbv(a){return this.e}}
A.dE.prototype={
gbB(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.b(m,0)
s=o.a
m=m[0]+1
r=B.a.ab(s,"?",m)
q=s.length
if(r>=0){p=A.bJ(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.cG("data","",n,n,A.bJ(s,m,q,128,!1,!1),p,n)}return m},
h(a){var s,r=this.b
if(0>=r.length)return A.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.cN.prototype={
gbk(){return this.c>0},
gbm(){return this.f<this.r},
gbl(){return this.r<this.a.length},
gaO(){var s=this.w
return s==null?this.w=this.bZ():s},
bZ(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.D(r.a,"http"))return"http"
if(q===5&&B.a.D(r.a,"https"))return"https"
if(s&&B.a.D(r.a,"file"))return"file"
if(q===7&&B.a.D(r.a,"package"))return"package"
return B.a.k(r.a,0,q)},
gbC(){var s=this.c,r=this.b+3
return s>r?B.a.k(this.a,r,s-1):""},
gaB(a){var s=this.c
return s>0?B.a.k(this.a,s,this.d):""},
gaF(a){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.jP(B.a.k(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.D(r.a,"http"))return 80
if(s===5&&B.a.D(r.a,"https"))return 443
return 0},
gbv(a){return B.a.k(this.a,this.e,this.f)},
gaG(){var s=this.f,r=this.r
return s<r?B.a.k(this.a,s+1,r):""},
gbj(){var s=this.r,r=this.a
return s<r.length?B.a.W(r,s+1):""},
gbw(){if(this.f>=this.r)return B.ac
return new A.aS(A.fu(this.gaG()),t.W)},
gv(a){var s=this.x
return s==null?this.x=B.a.gv(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.h(0)},
h(a){return this.a},
$icz:1}
A.cG.prototype={}
A.e.prototype={}
A.bQ.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.bR.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.ag.prototype={$iag:1}
A.ah.prototype={
sbn(a,b){a.height=b},
sbD(a,b){a.width=b},
af(a,b){return a.getContext(b)},
$iah:1}
A.b5.prototype={$ib5:1}
A.ai.prototype={
sn(a,b){a.fillStyle=b},
su(a,b){a.strokeStyle=b},
N(a,b){return a.stroke(b)},
$iai:1}
A.X.prototype={
gp(a){return a.length}}
A.aF.prototype={
gp(a){var s=a.length
s.toString
return s}}
A.d1.prototype={}
A.c2.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.c3.prototype={
gp(a){var s=a.length
s.toString
return s}}
A.z.prototype={
gbi(a){return new A.cH(a)},
h(a){var s=a.localName
s.toString
return s},
gaD(a){return new A.I(a,"mousedown",!1,t.C)},
gbs(a){return new A.I(a,"mouseleave",!1,t.C)},
gbt(a){return new A.I(a,"touchcancel",!1,t.S)},
gbu(a){return new A.I(a,"touchend",!1,t.S)},
gaE(a){return new A.I(a,"touchstart",!1,t.S)},
$iz:1}
A.a.prototype={$ia:1}
A.w.prototype={
bV(a,b,c,d){return a.addEventListener(b,A.bP(t.B.a(c),1),!1)},
$iw:1}
A.c8.prototype={
gp(a){return a.length}}
A.a5.prototype={$ia5:1}
A.J.prototype={$iJ:1}
A.l.prototype={
h(a){var s=a.nodeValue
return s==null?this.bP(a):s},
saJ(a,b){a.textContent=b},
$il:1}
A.aO.prototype={
bg(a,b,c,d,e,f,g){return a.arc(b,c,d,e,f,!1)},
$iaO:1}
A.cs.prototype={
gp(a){return a.length}}
A.Z.prototype={$iZ:1}
A.aa.prototype={}
A.aT.prototype={
bx(a,b){var s
t.G.a(b)
this.c6(a)
s=A.h4(b,t.H)
s.toString
return this.cb(a,s)},
cb(a,b){var s=a.requestAnimationFrame(A.bP(t.G.a(b),1))
s.toString
return s},
c6(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.aU.prototype={$iaU:1}
A.by.prototype={
gp(a){var s=a.length
s.toString
return s},
C(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.eu(b,s,a,null))
s=a[b]
s.toString
return s},
q(a,b,c){t.a1.a(c)
throw A.d(A.ap("Cannot assign element of immutable List."))},
az(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$iam:1,
$in:1,
$iq:1}
A.cE.prototype={
T(a,b){var s,r,q,p,o,n
t.Y.a(b)
for(s=this.gV(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.cW)(s),++p){o=s[p]
n=q.getAttribute(o)
b.$2(o,n==null?A.ab(n):n)}},
gV(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.r([],t.s)
for(r=m.length,q=t.x,p=0;p<r;++p){if(!(p<m.length))return A.b(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.c.l(s,n)}}return s}}
A.bu.prototype={
C(a,b){return this.a.getAttribute(A.ab(b))},
q(a,b,c){this.a.setAttribute(b,c)},
gp(a){return this.gV().length}}
A.bt.prototype={
C(a,b){return this.a.a.getAttribute("data-"+this.E(A.ab(b)))},
q(a,b,c){this.a.a.setAttribute("data-"+this.E(b),c)},
T(a,b){this.a.T(0,new A.dN(this,t.Y.a(b)))},
gV(){var s=A.r([],t.s)
this.a.T(0,new A.dO(this,s))
return s},
gp(a){return this.gV().length},
bb(a){var s,r,q=A.r(a.split("-"),t.s)
for(s=1;s<q.length;++s){r=q[s]
if(r.length>0)B.c.q(q,s,r[0].toUpperCase()+B.a.W(r,1))}return B.c.U(q,"")},
E(a){var s,r,q,p,o
for(s=a.length,r=0,q="";r<s;++r){p=a[r]
o=p.toLowerCase()
q=(p!==o&&r>0?q+"-":q)+o}return q.charCodeAt(0)==0?q:q}}
A.dN.prototype={
$2(a,b){if(B.a.D(a,"data-"))this.b.$2(this.a.bb(B.a.W(a,5)),b)},
$S:8}
A.dO.prototype={
$2(a,b){if(B.a.D(a,"data-"))B.c.l(this.b,this.a.bb(B.a.W(a,5)))},
$S:8}
A.cH.prototype={
Y(){var s,r,q,p,o=A.fd(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=B.a.aM(s[q])
if(p.length!==0)o.l(0,p)}return o},
aN(a){this.a.className=t.at.a(a).U(0," ")},
gp(a){var s=this.a.classList.length
s.toString
return s},
a1(a,b){var s=this.a.classList,r=s.contains(b)
r.toString
s.remove(b)
return r},
aL(a,b,c){var s=A.eF(this.a,b,c)
return s}}
A.et.prototype={}
A.bv.prototype={}
A.I.prototype={}
A.cJ.prototype={}
A.dQ.prototype={
$1(a){return this.a.$1(t.z.a(a))},
$S:9}
A.aH.prototype={
gJ(a){return new A.c7(a,a.length,A.ax(a).i("c7<aH.E>"))}}
A.c7.prototype={
A(){var s=this,r=s.c+1,q=s.b
if(r<q){q=s.a
if(!(r>=0&&r<q.length))return A.b(q,r)
s.d=q[r]
s.c=r
return!0}s.d=null
s.c=q
return!1},
gF(){var s=this.d
return s==null?this.$ti.c.a(s):s}}
A.cF.prototype={}
A.cQ.prototype={}
A.cR.prototype={}
A.c1.prototype={
be(a){var s=$.hh()
if(s.b.test(a))return a
throw A.d(A.er(a,"value","Not a valid class token"))},
h(a){return this.Y().U(0," ")},
aL(a,b,c){var s
this.be(b)
s=this.Y()
if(c)s.l(0,b)
else s.a1(0,b)
this.aN(s)
return c},
gJ(a){var s=this.Y()
return A.ik(s,s.r,A.C(s).c)},
gp(a){return this.Y().a},
a1(a,b){var s,r
this.be(b)
s=this.Y()
r=s.a1(0,b)
this.aN(s)
return r}}
A.bV.prototype={
Y(){var s,r,q,p,o=this.a.getAttribute("class"),n=A.fd(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=B.a.aM(s[q])
if(p.length!==0)n.l(0,p)}return n},
aN(a){this.a.setAttribute("class",a.U(0," "))}}
A.c.prototype={
gbi(a){return new A.bV(a)},
gaD(a){return new A.I(a,"mousedown",!1,t.C)},
gbs(a){return new A.I(a,"mouseleave",!1,t.C)},
gbt(a){return new A.I(a,"touchcancel",!1,t.S)},
gbu(a){return new A.I(a,"touchend",!1,t.S)},
gaE(a){return new A.I(a,"touchstart",!1,t.S)}}
A.cu.prototype={
cm(){var s,r=this,q=r.b,p=new A.d7(q,r.gc8())
r.w!==$&&A.T()
r.w=p
s=new A.dr(q)
r.x!==$&&A.T()
r.x=s
p.au()
s.au()
s=r.d.as
s===$&&A.k()
p=t.C
A.K(s,"click",p.i("~(1)?").a(new A.dm(r)),!1,p.c)
r.b5()
p=window
p.toString
A.K(p,"resize",t.cx.a(new A.dn(r)),!1,t.z)
if(!r.f&&r.e){q.aP(0)
r.c.bz()}q=document.documentElement
q.toString
q.setAttribute("data-"+new A.bt(new A.bu(q)).E("ready"),"1")
q=window
q.toString
B.M.bx(q,r.gba())},
b5(){var s,r,q,p,o=window.innerWidth
if(o==null)o=1600
s=window.innerHeight
if(s==null)s=766
r=window.devicePixelRatio
r.toString
q=this.c
q.e=r
p=q.a
B.k.sbD(p,B.f.bA(o*r))
B.k.sbn(p,B.f.bA(s*r))
r=p.style
r.width=""+o+"px"
r=p.style
r.height=""+s+"px"
q.d=A.h9(o,s)},
ci(a){var s,r,q,p,o,n,m,l=this,k=A.fQ(a)/1000,j=l.r,i=j===0?0.016666666666666666:Math.min(0.033,Math.max(0,k-j))
l.r=k
j=l.b
s=l.c
r=s.c
if(l.f){q=j.a2()
j=q.ch
r.e=A.b1(q.as,j)
r.f=A.b1(q.at,j)
s.a9(0,q)
l.d.L(q)
l.bd(q)}else{j.L(i)
s.aA(j.cG())
q=j.a2()
j=q.as
p=q.ch
o=A.b1(j,p)
n=q.at
m=A.b1(n,p)
if(r.e==null||r.f==null){r.e=o
r.f=m}else{j=Math.exp(-r.b3(j.e)*i)
n=Math.exp(-r.b3(n.e)*i)
p=r.e
p.toString
r.e=A.eB(p,o,1-j)
j=r.f
j.toString
r.f=A.eB(j,m,1-n)}r.b.L(i)
s.a9(i,q)
l.d.L(q)
l.bd(q)}j=window
j.toString
B.M.bx(j,l.gba())},
b1(){var s,r,q,p=this,o=document.body
if(o!=null){s=o.classList
s.contains("preview").toString
s.remove("preview")}o=p.b
r=o.a2()
if(!r.ax){o.aP(0)
p.f=!1}else if(r.a===B.t){o.r=!0
o.w=0
q=A.ez(o.f,++o.e)
o.b=q
o.x=q.e
q=o.e
if(o.a.a)A.eX("rematch seed="+q,"spear")
p.f=!1}else return
p.c.bz()
p.d.L(o.a2())},
bd(a){var s,r,q=document.documentElement
q.toString
s=new A.bt(new A.bu(q))
q.setAttribute("data-"+s.E("phase"),a.a.b)
q.setAttribute("data-"+s.E("round"),""+a.d)
q.setAttribute("data-"+s.E("playerHp"),""+a.f)
q.setAttribute("data-"+s.E("botHp"),""+a.r)
q.setAttribute("data-"+s.E("playerWins"),""+a.w)
q.setAttribute("data-"+s.E("botWins"),""+a.x)
r=a.as.e
q.setAttribute("data-"+s.E("playerState"),r.b)
r=a.at.e
q.setAttribute("data-"+s.E("botState"),r.b)
r=a.ax?"1":"0"
q.setAttribute("data-"+s.E("started"),r)
r=B.f.aK(a.ch,2)
q.setAttribute("data-"+s.E("time"),r)}}
A.dm.prototype={
$1(a){t.V.a(a)
return this.a.b1()},
$S:2}
A.dn.prototype={
$1(a){return this.a.b5()},
$S:9}
A.db.prototype={}
A.d0.prototype={
cq(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=new A.c6()
if(!l.b||b.e===B.j||c.e===B.j)return k
s=b.e
if(s===B.p||s===B.l||s===B.q||s===B.n||s===B.o)return k
s=l.r-=a
if((l.w-=a)<=0)l.x=!1
k.e=l.x
if(s>0){s=l.y
k.a=s>0
k.b=s<0
return k}s=l.a
l.r=l.c*(0.75+s.t()/4294967296*0.5)
r=Math.abs(c.c-b.c)
q=r<=3.2
p=c.e
o=p===B.p||p===B.l
n=p===B.q||p===B.n||p===B.o
m=p===B.i
p=l.f
if(s.t()/4294967296<p){l.x=!1
l.y=0
k.e=!1
return k}p=!1
if(o)if(r<=3.7){p=l.e
p=s.t()/4294967296<p}if(p){l.x=!0
l.w=0.26+s.t()/4294967296*0.24
l.y=0
k.e=!0
return k}if(q)if(!n){p=l.d
p=s.t()/4294967296<p}else p=!0
else p=!1
if(p)if(!m||s.t()/4294967296<0.3){k.c=!0
l.x=!1
l.y=0
return k}if(!q)s=l.y=1
else{p=-1
if(r<2.6300000000000003){l.y=-1
s=p}else if(m&&s.t()/4294967296<0.45){l.y=-1
s=p}else if(s.t()/4294967296<0.22){l.y=-1
s=p}else if(s.t()/4294967296<0.22){l.y=0
s=0}else{l.y=1
s=1}}k.a=s>0
k.b=s<0
return k}}
A.aE.prototype={
S(){return"CombatOutcome."+this.b}}
A.aj.prototype={}
A.P.prototype={
S(){return"FighterState."+this.b}}
A.b9.prototype={
gX(){var s=this.e
return s===B.p||s===B.l||s===B.q},
ga0(){var s=this.e
return s!==B.j&&s!==B.n&&s!==B.o&&this.z<=0},
by(a,b){var s=this
s.c=b
s.d=5
s.e=B.d
s.z=s.y=s.x=s.w=s.r=s.f=0
s.Q=0.5
s.ay=s.ax=s.at=s.as=!1},
aQ(){var s=this
if(!s.ga0()||s.x>0||s.gX())return
s.e=B.p
s.f=0
s.x=0.6499999999999999
s.as=s.at=!1},
bN(){var s=this
if(!s.ga0()||s.gX())return
s.as=!0
if(s.e!==B.i){s.e=B.i
s.y=s.f=0}},
bh(){var s=this
s.z=Math.max(s.z,0.12)
s.c=s.c+-s.b*0.05},
bM(a){var s=this
if(s.e===B.j)return
s.e=B.o
s.f=0
s.z=s.Q=a
s.at=s.as=!1
s.c=s.c+-s.b*0.12},
L(a){var s=this,r=s.f+=a
s.x=Math.max(0,s.x-a)
s.z=Math.max(0,s.z-a)
switch(s.e.a){case 2:if(r>=0.18){s.e=B.l
s.f=0}break
case 3:if(r>=0.12){s.e=B.q
s.f=0}break
case 4:if(r>=0.35){s.e=B.d
s.f=0}break
case 6:if(r>=0.25){s.e=B.d
s.f=0}break
case 7:if(r>=s.Q){s.e=B.d
s.f=0}break
case 5:s.y+=a
if(!s.as){s.e=B.d
s.f=0}break
case 0:case 1:case 8:break}},
bf(a,b){var s,r,q,p=this,o=p.e
if(o===B.j||o===B.n||o===B.o||p.z>0)return
if(a.c&&p.ga0()&&p.x<=0&&!p.gX()){p.aQ()
a.c=!1
a.d=0
return}if(a.e&&p.ga0())p.bN()
else if(o===B.i){p.as=!1
p.e=B.d
p.f=0}o=p.e
if(o===B.d||o===B.m||o===B.i){s=a.a?1:0
r=s-(a.b?1:0)
if(r!==0){if(p.w===0)p.r=0
p.w=r
s=o===B.i
q=s?0.45:1.1
p.c=p.c+p.b*r*q*b
if(!s)o=p.e=B.m
s=p.r
p.r=s+b*(o===B.i?5:8)}else{p.w=0
if(o===B.m){p.e=B.d
p.f=0}p.r=p.r+b*1.5}}},
sbO(a){this.f=A.cS(a)}}
A.d3.prototype={}
A.cb.prototype={
aP(a){var s,r=this
if(r.r)return
r.r=!0
r.w=0
s=A.ez(r.f,r.e)
r.b=s
r.x=s.e
s=r.e
if(r.a.a)A.eX("match start seed="+s,"spear")},
bJ(a){this.c.a=a},
bF(a){this.c.b=a},
bH(a){this.c.e=a},
L(a){var s,r,q,p,o,n=this
if(!n.r){n.w+=a
return}n.w+=a
s=n.b
s===$&&A.k()
s.cK(a,n.c)
s=n.x
r=n.b
q=r.e
if(s!==q){n.x=q
s=r.w
if(n.a.a)A.eX("phase "+q.b+" round "+s,"spear")}s=r.ax
p=A.ff(s,t.D)
B.c.av(s)
s=p.length
if(s===0)return
for(o=0;o<s;++o);B.c.cj(n.d,p)},
cG(){var s,r=this.d
if(r.length===0)return B.ab
s=A.ff(r,t.D)
B.c.av(r)
return s},
a2(){var s,r,q,p,o,n,m=this.b
m===$&&A.k()
s=m.e
r=m.f
q=m.w
p=m.c
p===$&&A.k()
o=p.d
n=m.d
n===$&&A.k()
return new A.d3(s,r,q,10,o,n.d,m.x,m.y,m.Q,m.as,m.at,p,n,this.r,m.ay,this.w)},
scI(a){this.w=A.cS(a)}}
A.c6.prototype={}
A.aM.prototype={
S(){return"MatchPhase."+this.b}}
A.aN.prototype={
S(){return"MatchResult."+this.b}}
A.c5.prototype={
S(){return"EndReason."+this.b}}
A.a3.prototype={
S(){return"GameEventType."+this.b}}
A.Q.prototype={}
A.dd.prototype={
ag(a){var s,r,q=this
q.w=a
q.e=B.A
q.z=0
q.Q=30
q.f=B.C
q.r=B.r
s=q.c
s===$&&A.k()
s.by(0,-1.6)
s=q.d
s===$&&A.k()
s.by(0,1.6)
s=q.b
r=A.a_((a-1)/9,0,1)
s.c=0.24+-0.12*r
s.d=0.45+0.39999999999999997*r
s.e=0.35+0.43000000000000005*r
s.f=0.18+-0.13999999999999999*r
s.r=0.75+-0.4*r
s.w=0
s.x=!1
s.y=0
s=a>10?"SUDDEN DEATH":"ROUND "+a
q.as=s
q.at=1.2
B.c.l(q.ax,new A.Q(B.a_,a,0,0,s,null))},
cK(a,b){var s,r,q,p,o,n,m,l=this,k=l.e
if(k===B.t)return
s=l.z+=a
l.at=Math.max(0,l.at-a)
switch(k.a){case 0:if(s>=1.2){l.e=B.B
l.z=0
l.as="FIGHT"
l.at=0.6
B.c.l(l.ax,B.a6)}break
case 1:l.Q=Math.max(0,l.Q-a)
k=l.d
k===$&&A.k()
s=l.c
s===$&&A.k()
r=l.b.cq(a,k,s,!0)
s.bf(b,a)
k.bf(r,a)
r.c=!1
r.d=0
s.L(a)
k.L(a)
if(b.c&&s.ga0()&&s.x<=0&&!s.gX()){s.aQ()
b.c=!1
b.d=0}else{q=b.d
if(q>0){q=Math.max(0,q-a)
b.d=q
b.c=q>0}else b.c=!1}p=l.b2(s,k)
o=l.b2(k,s)
if(p!=null)l.aU(p,s,k)
if(o!=null)l.aU(o,k,s)
s.c=A.a_(s.c,-3.2,-0.7)
q=k.c=A.a_(k.c,0.7,3.2)
n=s.c
if(q-n<2.45){m=(n+q)/2
s.c=A.a_(m-1.225,-3.2,-0.7)
k.c=A.a_(m+1.225,0.7,3.2)}if(s.d<=0||k.d<=0)l.aZ(B.r)
else if(l.Q<=0)l.aZ(B.Z)
break
case 2:if(s>=2)l.bW()
break
case 3:break}},
b2(a,b){var s
if(a.e!==B.l||a.at)return null
s=A.jX(a,b)
if(s.a===B.u)return null
a.at=!0
return s},
aU(a,b,c){var s,r,q=this
switch(a.a.a){case 1:b.ay=!0
s=Math.max(0,c.d-1)
c.d=s
c.ax=!0
c.e=s<=0?B.j:B.n
c.z=c.f=0
c.at=c.as=!1
r=c.c+-c.b*0.18
c.c=r
B.c.l(q.ax,new A.Q(B.a1,q.w,r,2,"HIT",b.a))
break
case 2:c.bh()
B.c.l(q.ax,new A.Q(B.a2,q.w,c.c,2,"BLOCK",b.a))
break
case 3:c.bh()
b.bM(0.5)
B.c.l(q.ax,new A.Q(B.a3,q.w,c.c,2,"PARRY",b.a))
break
case 0:break}},
aZ(a){var s,r,q,p,o,n=this
if(n.e!==B.B)return
n.r=a
s=!1
if(a===B.r){r=n.c
r===$&&A.k()
q=r.d<=0
if(q){r=n.d
r===$&&A.k()
r=r.d<=0}else r=!1
if(r)p=!1
else{p=!q
s=q}}else{r=n.c
r===$&&A.k()
r=r.d
o=n.d
o===$&&A.k()
o=o.d
p=r>o
if(!p)s=o>r}if(p)++n.x
if(s)++n.y
n.e=B.ad
n.z=0
switch(a.a){case 1:if(p)r="TIME - YOU"
else r=s?"TIME - BOT":"TIME - DRAW"
break
case 0:if(p)r="K.O."
else r=s?"K.O.":"DOUBLE K.O."
break
case 2:r="DRAW"
break
default:r=null}n.as=r
n.at=1.8
B.c.l(n.ax,new A.Q(B.a4,n.w,0,0,r,null))},
bW(){var s,r=this,q=r.x
if(q>=6||r.y>=6){r.ak()
return}s=r.w
if(s>=10){if(q===r.y){if(r.ay){r.ak()
return}r.ay=!0
r.ag(s+1)
return}r.ak()
return}r.ag(s+1)},
ak(){var s,r,q=this
q.e=B.t
q.z=0
s=q.x
r=q.y
if(s>r)s=B.ae
else s=r>s?B.af:B.ag
q.f=s
switch(s.a){case 1:s="YOU WIN"
break
case 2:s="BOT WINS"
break
case 3:s="DRAW"
break
case 0:s=""
break
default:s=null}q.as=s
q.at=999
B.c.l(q.ax,new A.Q(B.a5,q.w,0,0,s,null))}}
A.f.prototype={
j(a,b){return new A.f(this.a+b.a,this.b+b.b)},
H(a,b){return new A.f(this.a-b.a,this.b-b.b)},
m(a,b){return new A.f(this.a*b,this.b*b)},
gp(a){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
gae(){var s=this.gp(0)
if(s<1e-9)return B.H
return new A.f(this.a/s,this.b/s)},
aH(a,b){var s=Math.cos(b),r=Math.sin(b),q=this.a,p=this.b
return new A.f(q*s-p*r,q*r+p*s)},
ad(a,b){var s=this.a,r=this.b
return new A.f(s+(a.a-s)*b,r+(a.b-r)*b)},
h(a){return"Vec2("+A.m(this.a)+", "+A.m(this.b)+")"},
P(a,b){if(b==null)return!1
return b instanceof A.f&&b.a===this.a&&b.b===this.b},
gv(a){return A.hY(this.a,this.b)}}
A.d5.prototype={}
A.cq.prototype={
t(){var s=this.a
s^=s<<13
s^=s>>>17
return this.a=(s^s<<5)>>>0}}
A.cZ.prototype={
a9(a,b){var s,r,q,p,o=this
if(o.c==null){s=o.a
s===$&&A.k()
o.c=a.createPattern(s,"repeat")}s=o.d
if(s==null){s=o.b
s===$&&A.k()
s=o.d=a.createPattern(s,"repeat")}r=o.c
if(r==null||s==null)return
q=b.d
p=b.e-q
a.save()
B.b.sn(a,r)
a.fillRect(q,0,p,119)
B.b.sn(a,s)
a.fillRect(q,673,p,93)
a.restore()}}
A.c9.prototype={}
A.bl.prototype={}
A.df.prototype={
bL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=800+a*100,e=673-b*100
for(s=this.b,r=this.a,q=0;q<15;++q){p=-3.141592653589793+s.t()/4294967296*3.5915926535897933
o=70+s.t()/4294967296*250
n=s.t()
m=s.t()
l=Math.cos(p)
k=Math.sin(p)
j=s.t()
i=s.t()
h=B.e.R(q,3)
A:{if(0===h){g="#a32323"
break A}if(1===h){g="#6e1414"
break A}g="#4a0c0c"
break A}B.c.l(r,new A.bl(f+(-16+n/4294967296*32),e+(-16+m/4294967296*32),l*o,k*o,0+j/4294967296*6.283185307179586,-16+i/4294967296*32,g,4+s.t()/4294967296*10,!0))}},
b8(a,b,c){var s,r,q,p,o,n,m,l,k=800+a*100,j=673-b*100,i=c?6:9
for(s=this.a,r=this.b,q=0;q<i;++q){p=-3.141592653589793+r.t()/4294967296*3.491592653589793
o=90+r.t()/4294967296*170
if(c)n="#f6ead6"
else{m=B.e.R(q,3)
A:{if(0===m){l="#f0e0c7"
break A}if(1===m){l="#b85b3a"
break A}l="#1a0c08"
break A}n=l}B.c.l(s,new A.bl(k+(-12+r.t()/4294967296*24),j+(-12+r.t()/4294967296*24),Math.cos(p)*o,Math.sin(p)*o,0+r.t()/4294967296*6.283185307179586,-12+r.t()/4294967296*24,n,5+r.t()/4294967296*8,!1))}},
L(a){var s,r,q,p,o,n,m
for(s=this.a,r=s.length-1,q=760*a,p=a/0.72,o=s.$flags|0;r>=0;--r){n=s.length
if(!(r<n))return A.b(s,r)
m=s[r]
if((m.r-=p)<=0){o&1&&A.aA(s,"removeAt",1)
if(r>=n)A.b2(A.fh(r,null))
s.splice(r,1)[0]
continue}n=m.d+=q
m.a=m.a+m.c*a
m.b=m.b+n*a
m.e=m.e+m.f*a}},
cs(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.cW)(s),++q){p=s[q]
a.save()
a.translate(p.a,p.b)
a.rotate(p.e)
a.globalAlpha=A.a_(p.r,0,1)
B.b.sn(a,p.w)
o=p.x
n=-o
if(p.y){a.beginPath()
a.arc(0,0,o*0.42,0,6.283185307179586,!1)
a.fill()
a.beginPath()
o*=0.18
a.arc(n*0.28,o,o,0,6.283185307179586,!1)
a.fill()}else a.fillRect(n/2,n/3,o,o*0.66)
a.restore()}a.globalAlpha=1}}
A.dh.prototype={}
A.dS.prototype={}
A.di.prototype={
aA(a){var s,r,q=this
t.d.a(a)
q.c.aA(a)
for(s=a.length,r=0;r<s;++r)switch(a[r].a.a){case 2:q.f=0.18
q.r=4
q.w=0.14
break
case 3:case 4:q.f=0.18
q.r=2
break
case 0:case 1:case 5:case 6:break}},
a9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.f=Math.max(0,g.f-a)
g.w=Math.max(0,g.w-a)
s=f>0?f/0.18:0
f=Math.sin(f*110)
r=g.r
q=Math.cos(g.f*91)
p=g.r
o=g.b
o.setTransform(1,0,0,1,0,0)
n=g.a
m=n.width
if(m==null)m=0
l=n.height
o.clearRect(0,0,m,l==null?0:l)
m=g.e
l=g.d
k=m*l.a
o.setTransform(k,0,0,k,m*(l.b+f*r*s),m*(l.c+q*p*0.55*s))
p=g.c
p.a.a9(o,g.d)
p.c4(o)
j=p.e
if(j==null)j=A.b1(b.as,b.ch)
i=p.f
if(i==null)i=A.b1(b.at,b.ch)
f=b.as
h=f.gX()
r=b.at
if(r.gX()&&!h){q=p.c
q===$&&A.k()
q.aa(o,f,j)
f=p.d
f===$&&A.k()
f.aa(o,r,i)}else{q=p.d
q===$&&A.k()
q.aa(o,r,i)
r=p.c
r===$&&A.k()
r.aa(o,f,j)}p.b.cs(o)
if(g.w>0){o.setTransform(1,0,0,1,0,0)
B.b.sn(o,"rgba(110, 20, 20, "+B.f.aK(0.12*(g.w/0.14),3)+")")
f=n.width
if(f==null)f=0
n=n.height
o.fillRect(0,0,f,n==null?0:n)}},
bz(){var s=this.c
B.c.av(s.b.a)
s.f=s.e=null
this.f=this.w=0}}
A.dj.prototype={
b3(a){var s=30
switch(a.a){case 0:s=20
break
case 1:s=24
break
case 2:s=45
break
case 3:s=220
break
case 4:break
case 5:s=26
break
case 6:s=34
break
case 7:break
case 8:s=16
break
default:s=null}return s},
aA(a){var s,r,q,p,o,n
t.d.a(a)
for(s=a.length,r=this.b,q=0;q<a.length;a.length===s||(0,A.cW)(a),++q){p=a[q]
switch(p.a.a){case 2:o=p.c
n=p.d
r.b8(o,n,!1)
r.bL(o,n)
this.b7(p.f)
break
case 3:case 4:r.b8(p.c,p.d,!0)
this.b7(p.f)
break
case 0:case 1:case 5:case 6:break}}},
b7(a){var s,r
if(a==null)return
s=new A.b9(a,a?1:-1,0,B.d)
s.e=B.l
r=A.b1(s,0)
if(a)this.e=r
else this.f=r},
c4(a){var s,r,q,p,o,n,m
a.save()
a.font='500 18px "Palatino Linotype", Palatino, "Times New Roman", serif'
B.b.sn(a,"rgba(42, 20, 14, 0.84)")
a.textBaseline="middle"
s=A.r([],t.cw)
for(r="SPEAR".split(""),q=r.length,p=0;p<q;++p){o=a.measureText(r[p]).width
s.push(o==null?0:o)}n=800-(B.c.cB(s,new A.dk())+48)/2
for(m=0;m<5;++m){a.fillText("SPEAR"[m],n,146)
if(!(m<s.length))return A.b(s,m)
n+=s[m]+12}a.restore()}}
A.dk.prototype={
$2(a,b){return A.cS(a)+A.cS(b)},
$S:20}
A.ct.prototype={
S(){return"ShieldDevice."+this.b}}
A.cC.prototype={
aa(d0,d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="#1a0c08",b6="#d8c3a4",b7="#f0e0c7",b8=b4.x=d1.b,b9=1.06-d2.b,c0=b9+0.76,c1=new A.f(-0.08,c0),c2=b9+0.7,c3=new A.f(-0.01,c2),c4=new A.f(0.06,b9+1.24),c5=d2.d,c6=c1.j(0,new A.f(-0.38+(c5.a+0.55)*0.46,c5.b-0.24)),c7=new A.f(0.08,c0).j(0,d2.r).j(0,b4.f),c8=c7.j(0,b4.r.aH(0,d2.w)),c9=0.085-d2.e*0.28
c5=d2.f
s=(c5<0?c5*0.45:c5*1.3)+0.21
r=A.ep(c1,c6,0.29,0.51,1)
q=A.ep(c1,c6,0.29,0.51,-1)
c5=r.a
p=q.a
o=c5.b+0.35*c5.a<=p.b+0.35*p.a?r:q
n=o.b
m=n.j(0,B.aw)
c5=d1.c
p=d2.ay
l=d2.ch
d0.save()
d0.translate(800+c5*100+b8*p*100,673-l*100)
d0.scale(b8*100,-100)
d0.rotate(d2.z)
b4.aY(d0,new A.f(-0.16,b9),d2.Q.j(0,new A.f(b4.w,0)),1,d2.at)
b4.aY(d0,new A.f(0.06,b9),d2.as,1,d2.ax)
d0.save()
b8=d2.a
l=d2.c
d0.translate(0,b9)
d0.rotate(b8)
d0.translate(0,-b9)
d0.translate(l,0)
d0.save()
l=m.a
b8=m.b
d0.translate(l,b8)
d0.rotate(c9)
k=-1.3+s
j=1.12+s
i=A.x()
i.moveTo(-1.46+s,0)
i.lineTo(k,0.018)
i.lineTo(j,0.021)
i.lineTo(j,-0.021)
i.lineTo(k,-0.018)
i.closePath()
b4.G(d0,i,b5)
d0.restore()
p=d1.ay
d0.save()
d0.translate(l,b8)
d0.rotate(c9)
h=1.11+s
g=1.24+s
f=1.46+s
e=b4.a8(1.05+s,-0.024,0.065,0.048,0.01)
B.b.sn(d0,b6)
d0.fill(e)
d=A.x()
d.moveTo(h,0)
d.quadraticCurveTo(g,-0.082,f,0)
d.quadraticCurveTo(g,0.082,h,0)
d.closePath()
b4.G(d0,d,"#f6ead6")
B.b.su(d0,b6)
d0.lineWidth=0.011
B.b.N(d0,d)
B.b.su(d0,b6)
d0.lineWidth=0.01
d0.beginPath()
b8=h+0.02
d0.moveTo(b8,0)
d0.lineTo(f-0.03,0)
d0.stroke()
if(p){d0.save()
d0.clip(d)
c=A.x()
c.moveTo(b8,-0.06)
c.quadraticCurveTo(g-0.02,-0.08,f-0.02,0)
c.quadraticCurveTo(g,0.08,b8,0.06)
c.closePath()
B.b.sn(d0,"#a32323")
d0.fill(c)
B.b.sn(d0,"#6e1414")
d0.fillRect(h+0.12,0.018,0.2,0.025)
d0.restore()}d0.restore()
b4.c3(d0,c1,o.a,n,c9)
b8=b9+0.06
b=new A.f(-0.06,b8)
c5=b9-0.42
a=new A.f(-0.42,c5)
a0=a.H(0,b).gae()
p=a0.b
l=-p
a1=a0.a
a2=A.x()
a3=l*0.048
a4=a1*0.048
a2.moveTo(-0.06+a3,b8+a4)
a5=l*0.038
a6=a1*0.038
a2.lineTo(-0.42+a5,c5+a6)
a2.lineTo(-0.42+a1*0.085,c5+p*0.085)
a2.lineTo(-0.42-a5,c5-a6)
a2.lineTo(-0.06-a3,b8-a4)
a2.closePath()
b4.G(d0,a2,"#873311")
B.b.su(d0,b5)
d0.lineWidth=0.012
B.b.N(d0,a2)
B.b.su(d0,b7)
d0.lineWidth=0.012
a7=a.j(0,a0.m(0,-0.07))
d0.beginPath()
a4=a7.a
b8=l*0.042
a3=a7.b
a6=a1*0.042
d0.moveTo(a4+b8,a3+a6)
d0.lineTo(a4-b8,a3-a6)
d0.stroke()
a8=b.j(0,a0.m(0,0.14))
d0.beginPath()
a6=a8.a
l*=0.046
a3=a8.b
a1*=0.046
d0.moveTo(a6+l,a3+a1)
d0.lineTo(a6-l,a3-a1)
d0.stroke()
b4.c1(d0,b9,d2.a)
a9=d2.x
b0=c4.j(0,B.aq.aH(0,a9))
b1=c4.j(0,B.az.aH(0,a9))
c0+=0.1
a2=A.x()
a2.moveTo(-0.09,c0)
a1=b0.a
a3=b0.b
a2.quadraticCurveTo((-0.09+a1)*0.5-0.01,(c0+a3)*0.5,a1,a3)
a3=b1.a
a1=b1.b
a2.lineTo(a3,a1)
a2.quadraticCurveTo((0.08+a3)*0.5-0.01,(c0+a1)*0.5,0.08,c0)
a2.closePath()
b4.G(d0,a2,b5)
B.b.su(d0,b7)
d0.lineWidth=0.01
d0.beginPath()
a1=c0+0.02
d0.moveTo(-0.08,a1)
d0.quadraticCurveTo(0,c0+0.005,0.07,a1)
d0.stroke()
b4.c5(d0,b9)
b4.c0(d0,c4,d2)
b2=A.ep(c3,c7,0.34,0.34,-1)
b3=b2.a
b4.an(d0,-0.01,c2,0.07,b5)
b4.G(d0,b4.a_(c3,b3,0.052,0.052,0.064,0.074,0.068,0.068),b5)
B.b.su(d0,b7)
d0.lineWidth=0.011
d0.beginPath()
d0.arc(-0.01,c2,0.076,1.85,4.35,!1)
d0.stroke()
b4.G(d0,b4.a_(b3,b2.b,0.042,0.042,0.052,0.06,0.056,0.056),b5)
b4.an(d0,b3.a,b3.b,0.048,b5)
b4.c2(d0,c8,d2,d1.ax)
d0.restore()
d0.restore()},
aY(b8,b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="#1a0c08",b5=A.ep(b9,c0,0.55,0.57,c1),b6=b5.a,b7=b5.b
b3.G(b8,b3.a_(b9,b6,0.086,0.082,0.13,0.148,0.14,0.14),b4)
b8.save()
s=b7.a
r=b7.b
b8.translate(s,r)
b8.rotate(c2)
b8.translate(-s,-r)
q=s-0.075
p=s+0.235
o=A.x()
o.moveTo(s-0.055,0.095)
o.quadraticCurveTo(q-0.015,0.055,q,0.022)
o.lineTo(s-0.01,0.022)
o.quadraticCurveTo(s+0.04,0.03,s+0.1,0.022)
o.lineTo(p-0.02,0.022)
o.quadraticCurveTo(p+0.015,0.039999999999999994,p-0.01,0.05)
o.quadraticCurveTo(s+0.11,0.072,s+0.045,0.095)
o.closePath()
b3.G(b8,o,b4)
b8.restore()
n=b7.H(0,b6).gae()
m=n.b
l=-m
k=n.a
j=new A.dI(b6,n,b7.H(0,b6).gp(0),new A.f(l,k))
i=j.$2(-0.07,0.048)
h=j.$2(0.02,0.072)
g=j.$2(0.52,0.06)
f=j.$2(0.98,0.05)
e=j.$2(0.98,-0.052)
d=j.$2(0.76,-0.058)
c=j.$2(0.34,-0.112)
b=j.$2(0.03,-0.08)
a=A.x()
a0=b.a
a1=b.b
a.moveTo(a0,a1)
a2=b6.a
a3=b6.b
a.quadraticCurveTo(a2+k*-0.08,a3+m*-0.08,i.a,i.b)
a.quadraticCurveTo(j.$2(-0.02,0.088).a,j.$2(-0.02,0.088).b,h.a,h.b)
m=j.$2(0.25,0.082).a
k=j.$2(0.25,0.082).b
a4=g.a
a5=g.b
a6=f.a
a7=f.b
a.bezierCurveTo(m,k,a4,a5,a6,a7)
a5=e.a
a4=e.b
a.lineTo(a5,a4)
a.bezierCurveTo(d.a,d.b,c.a,c.b,a0,a1)
a.closePath()
b8.save()
b8.translate(0.02*b3.x,-0.03)
B.b.sn(b8,"rgba(26, 12, 8, 0.24)")
b8.fill(a)
b8.restore()
a8=b8.createLinearGradient(a2+l*0.08,a3,s-l*0.12,r)
a8.addColorStop(0,"#a25130")
a8.addColorStop(0.65,"#8e4125")
a8.addColorStop(1,"#73321a")
B.b.sn(b8,a8)
b8.fill(a)
B.b.su(b8,b4)
b8.lineWidth=0.014
B.b.N(b8,a)
B.b.su(b8,"#f0e0c7")
b8.lineWidth=0.011
b8.beginPath()
a9=j.$2(0.08,-0.035)
b0=j.$2(-0.055,0.045)
b1=j.$2(0.04,0.066)
b2=j.$2(0.95,0.04)
b8.moveTo(a9.a,a9.b)
b8.quadraticCurveTo(j.$2(-0.03,-0.02).a,j.$2(-0.03,-0.02).b,b0.a,b0.b)
b8.quadraticCurveTo(j.$2(-0.01,0.072).a,j.$2(-0.01,0.072).b,b1.a,b1.b)
b8.lineTo(b2.a,b2.b)
b8.stroke()
b8.beginPath()
b8.moveTo(a5,a4)
b8.lineTo(a6,a7)
b8.stroke()},
c5(a,b){var s,r,q,p,o,n,m=this,l="#1a0c08",k=A.x(),j=b+0.02
k.moveTo(-0.2,j)
k.bezierCurveTo(-0.23,b+0.28,-0.27,b+0.56,-0.18,b+0.82)
s=b+0.9
k.quadraticCurveTo(-0.08,b+0.92,0.08,s)
k.quadraticCurveTo(0.22,b+0.84,0.24,b+0.62)
r=b+0.18
k.bezierCurveTo(0.22,b+0.38,0.19,r,0.17,j)
k.closePath()
a.save()
a.translate(0.02*m.x,-0.03)
B.b.sn(a,"rgba(26, 12, 8, 0.24)")
a.fill(k)
a.restore()
q=a.createLinearGradient(-0.2,b,0.22,s)
q.addColorStop(0,"#9a4020")
q.addColorStop(0.7,"#873311")
q.addColorStop(1,"#6d280e")
B.b.sn(a,q)
a.fill(k)
B.b.su(a,l)
a.lineWidth=0.013
B.b.N(a,k)
B.b.su(a,"#f0e0c7")
a.lineWidth=0.011
a.beginPath()
a.moveTo(-0.11,b+0.87)
a.quadraticCurveTo(0,b+0.85,0.11,b+0.88)
a.stroke()
m.a5(a,0.16,r,0.028,"#f0e0c7",!1)
m.a5(a,0.16,r,0.01,l,!1)
r=b-0.01
p=m.a8(-0.22,r,0.41,0.075,0.018)
B.b.sn(a,"#6d280e")
a.fill(p)
B.b.su(a,l)
a.lineWidth=0.012
B.b.N(a,p)
for(j=b+0.065,o=0;o<5;++o){n=-0.16+o*0.075
a.beginPath()
a.moveTo(n,r)
a.lineTo(n+0.02,j)
a.stroke()}},
c1(a,b,c){var s,r,q,p,o,n,m,l,k
a.save()
s=b+0.01
r=b-0.34
q=-c*0.18
p=A.x()
p.moveTo(-0.2,s)
p.lineTo(0.17,s)
p.lineTo(0.2+q,r)
p.lineTo(-0.23+q,r)
p.closePath()
this.G(a,p,"#1a0c08")
for(o=-0.21+q,n=0;n<6;++n){m=n/6
l=(n+0.84)/6
k=A.x()
k.moveTo(-0.19+m*0.35,s)
k.lineTo(-0.19+l*0.35,s)
k.lineTo(o+l*0.39,r)
k.lineTo(o+m*0.39,r)
k.closePath()
B.b.sn(a,(n&1)===0?"#f0e0c7":"#d8c3a4")
a.fill(k)}B.b.su(a,"#1a0c08")
a.lineWidth=0.012
B.b.N(a,p)
a.restore()},
c0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="rgba(26, 12, 8, 0.24)"
a.save()
a.translate(b.a,b.b)
a.rotate(c.x)
a.save()
a.translate(0,0.24)
a.rotate(c.y)
s=A.x()
s.moveTo(0.16,0.04)
s.bezierCurveTo(0.18,0.24,0.04,0.34,-0.1,0.32)
s.bezierCurveTo(-0.26,0.3,-0.38,0.16,-0.42,-0.08)
s.quadraticCurveTo(-0.28,-0.02,-0.16,0.03)
s.quadraticCurveTo(-0.02,0.06,0.16,0.04)
s.closePath()
a.save()
a.translate(0.02*g.x,-0.03)
B.b.sn(a,f)
a.fill(s)
a.restore()
r=a.createLinearGradient(-0.28,0.28,0.12,-0.04)
q=g.d
r.addColorStop(0,q)
r.addColorStop(0.7,g.c)
p=g.e
r.addColorStop(1,p)
B.b.sn(a,r)
a.fill(s)
B.b.su(a,p)
a.lineWidth=0.011
B.b.N(a,s)
B.b.su(a,q)
a.lineWidth=0.009
for(o=0;o<4;++o){n=o/3
m=-0.04+-0.18*n
l=0.05+-0.05*n
k=0.06+-0.38*n
j=0.28+-0.12000000000000002*n
a.beginPath()
a.moveTo(m,l)
a.quadraticCurveTo((m+k)*0.5,(l+j)*0.5+0.04,k,j)
a.stroke()}a.restore()
i=A.x()
i.moveTo(0.2,0.06)
i.bezierCurveTo(0.18,0.24,0.04,0.31,-0.06,0.3)
i.bezierCurveTo(-0.2,0.28,-0.24,0.12,-0.21,-0.04)
i.quadraticCurveTo(-0.2,-0.1,-0.25,-0.15)
i.lineTo(-0.14,-0.16)
i.quadraticCurveTo(-0.08,-0.11,-0.04,-0.15)
i.lineTo(0.12,-0.18)
i.lineTo(0.2,-0.12)
i.quadraticCurveTo(0.14,-0.08,0.13,-0.01)
i.lineTo(0.21,-0.02)
i.lineTo(0.2,0.06)
i.closePath()
a.save()
a.translate(0.02*g.x,-0.03)
B.b.sn(a,f)
a.fill(i)
a.restore()
B.b.sn(a,"#1a0c08")
a.fill(i)
B.b.su(a,"#f0e0c7")
a.lineWidth=0.011
a.beginPath()
a.moveTo(-0.22,-0.13)
a.quadraticCurveTo(-0.18,-0.04,-0.19,0.08)
a.bezierCurveTo(-0.19,0.24,-0.04,0.28,0.08,0.25)
a.quadraticCurveTo(0.17,0.2,0.18,0.06)
a.lineTo(0.19,-0.01)
a.stroke()
a.beginPath()
a.moveTo(0.18,-0.11)
a.lineTo(0.11,-0.16)
a.lineTo(-0.03,-0.13)
a.quadraticCurveTo(-0.07,-0.06,-0.13,-0.14)
a.stroke()
h=A.x()
h.moveTo(0.08,0.025)
h.quadraticCurveTo(0.125,0.05,0.165,0.025)
h.quadraticCurveTo(0.125,0.005,0.08,0.025)
h.closePath()
B.b.sn(a,"#f0e0c7")
a.fill(h)
g.a5(a,0.135,0.025,0.012,"#1a0c08",!1)
a.restore()},
c2(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
a.save()
a.translate(b.a,b.b)
a.rotate(a0.w)
a.save()
a.translate(0.02*d.x,-0.03)
B.b.sn(a,"rgba(26, 12, 8, 0.34)")
a.fill(d.I(0,0,c))
a.restore()
B.b.sn(a,"#1a0c08")
a.fill(d.I(0,0,c))
s=-0.16*c
r=a.createRadialGradient(s,s,0.05*c,0,0,c*1.1)
r.addColorStop(0,"#361b13")
r.addColorStop(0.65,"#2a1510")
r.addColorStop(1,"#1d0d09")
B.b.sn(a,r)
s=c*0.84
a.fill(d.I(0,0,s))
B.b.su(a,"#3a1a12")
a.lineWidth=0.014
B.b.N(a,d.I(0,0,c*0.88))
for(q=c*0.028,p=0;p<18;++p){o=p/18*3.141592653589793*2+0.06
n=Math.cos(o)
m=Math.sin(o)
B.b.sn(a,"#f0e0c7")
l=A.x()
B.E.bg(l,n*c*0.82,m*c*0.82,q,0,6.283185307179586,!1)
a.fill(l)}if(d.b===B.G){for(q=0.14*c,n=0.09*c,m=0.48*c,k=0.22*c,j=0.6*c,i=-0.22*c,h=-0.09*c,p=0;p<8;++p){a.save()
a.rotate(p/8*3.141592653589793*2)
g=A.x()
g.moveTo(0,0)
g.bezierCurveTo(q,n,m,k,j,0)
g.bezierCurveTo(m,i,q,h,0,0)
g.closePath()
B.b.sn(a,"#b85b3a")
a.fill(g)
a.restore()}B.b.sn(a,"#f0e0c7")
a.fill(d.I(0,0,c*0.13))}else{f=A.x()
f.moveTo(0,0.6*c)
q=-0.5*c
f.lineTo(-0.52*c,q)
f.lineTo(-0.34*c,q)
f.lineTo(0,0.02*c)
f.lineTo(0.34*c,q)
f.lineTo(0.52*c,q)
f.closePath()
B.b.sn(a,"#b85b3a")
a.fill(f)}B.b.su(a,"rgba(240, 224, 199, 0.08)")
a.lineWidth=c*0.1
a.beginPath()
a.arc(0,0,c*0.72,2.701769682087222,4.838052686528282,!1)
a.stroke()
if(a1){a.save()
a.clip(d.I(0,0,s))
e=A.x()
s=-0.54*c
q=0.12*c
e.moveTo(s,q)
n=0.34*c
e.bezierCurveTo(-0.64*c,0.28*c,-0.42*c,0.44*c,-0.31*c,n)
m=0.3*c
e.bezierCurveTo(-0.19*c,0.47*c,-0.02*c,m,-0.13*c,0.19*c)
e.bezierCurveTo(-0.25*c,0.07*c,-0.44*c,0.03*c,s,q)
e.closePath()
B.b.sn(a,"#a32323")
a.fill(e)
B.b.sn(a,"#6e1414")
q=-0.1*c
a.fill(d.I(q,0.49*c,0.052*c))
a.fill(d.I(0.2*c,0.26*c,0.042*c))
a.fill(d.I(-0.58*c,q,0.036*c))
B.b.sn(a,"#4a0c0c")
a.fill(d.a8(-0.37*c,m,0.045*c,n,0.02*c))
a.restore()}a.restore()},
c3(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="#1a0c08"
f.G(a,f.a_(b,c,0.052,0.05,0.066,0.074,0.066,0.066),e)
f.an(a,c.a,c.b,0.05,e)
f.G(a,f.a_(c,d,0.042,0.042,0.054,0.062,0.056,0.056),e)
s=d.H(0,c).gae()
r=s.b
q=-r
p=s.a
o=new A.f(q,p)
B.b.su(a,"#f0e0c7")
a.lineWidth=0.01
a.beginPath()
n=c.j(0,s.m(0,0.036)).j(0,o.m(0,0.048))
m=c.H(0,s.m(0,0.018))
l=c.j(0,s.m(0,0.036)).H(0,o.m(0,0.048))
a.moveTo(n.a,n.b)
a.quadraticCurveTo(m.a,m.b,l.a,l.b)
a.stroke()
a.lineWidth=0.011
a.beginPath()
k=d.a
q*=0.044
j=p*0.052
i=d.b
p*=0.044
r*=0.052
a.moveTo(k+q-j,i+p-r)
a.lineTo(k-q-j,i-p-r)
a.stroke()
a.save()
a.translate(k,i)
a.rotate(a0)
f.G(a,f.a8(-0.068,-0.052,0.136,0.098,0.032),e)
B.b.su(a,"#f0e0c7")
a.lineWidth=0.008
for(h=0;h<3;++h){g=-0.022+h*0.024
a.beginPath()
a.moveTo(g,-0.038)
a.lineTo(g+0.004,0.015)
a.stroke()}a.restore()},
a_(a,b,c,d,e,f,g,h){var s=b.H(0,a),r=s.gae(),q=new A.f(-r.b,r.a),p=a.j(0,s.m(0,0.46)),o=a.j(0,q.m(0,h)),n=p.j(0,q.m(0,f)),m=b.j(0,q.m(0,d)),l=b.H(0,q.m(0,c)),k=p.H(0,q.m(0,e)),j=a.H(0,q.m(0,g)),i=A.x()
i.moveTo(o.a,o.b)
i.quadraticCurveTo(n.a,n.b,m.a,m.b)
i.lineTo(l.a,l.b)
i.quadraticCurveTo(k.a,k.b,j.a,j.b)
i.closePath()
return i},
G(a,b,c){a.save()
a.translate(0.02*this.x,-0.03)
B.b.sn(a,"rgba(26, 12, 8, 0.24)")
a.fill(b)
a.restore()
B.b.sn(a,c)
a.fill(b)},
a5(a,b,c,d,e,f){var s=this.I(b,c,d)
if(f){a.save()
a.translate(0.02*this.x,-0.03)
B.b.sn(a,"rgba(26, 12, 8, 0.24)")
a.fill(s)
a.restore()}B.b.sn(a,e)
a.fill(s)},
an(a,b,c,d,e){return this.a5(a,b,c,d,e,!0)},
I(a,b,c){var s=A.x()
B.E.bg(s,a,b,c,0,6.283185307179586,!1)
return s},
a8(a,b,c,d,e){var s,r,q,p,o,n=A.x(),m=Math.min(e,Math.min(c/2,d/2)),l=a+m
n.moveTo(l,b)
s=a+c
r=s-m
n.lineTo(r,b)
q=b+m
n.quadraticCurveTo(s,b,s,q)
p=b+d
o=p-m
n.lineTo(s,o)
n.quadraticCurveTo(s,p,r,p)
n.lineTo(l,p)
n.quadraticCurveTo(a,p,a,o)
n.lineTo(a,q)
n.quadraticCurveTo(a,b,l,b)
n.closePath()
return n}}
A.dI.prototype={
$2(a,b){var s=this
return s.a.j(0,s.b.m(0,a*s.c)).j(0,s.d.m(0,b))},
$S:21}
A.d4.prototype={
bR(){var s,r,q,p,o,n,m=this,l=document,k=l.querySelector("#player-pips")
if(k==null)k=t.h.a(k)
m.a!==$&&A.T()
m.a=k
s=l.querySelector("#bot-pips")
if(s==null)s=t.h.a(s)
m.b!==$&&A.T()
m.b=s
r=l.querySelector("#player-score")
if(r==null)r=t.h.a(r)
m.c!==$&&A.T()
m.c=r
r=l.querySelector("#bot-score")
if(r==null)r=t.h.a(r)
m.d!==$&&A.T()
m.d=r
r=l.querySelector("#round-label")
if(r==null)r=t.h.a(r)
m.e!==$&&A.T()
m.e=r
r=l.querySelector("#timer-fill")
if(r==null)r=t.h.a(r)
m.f!==$&&A.T()
m.f=r
r=l.querySelector("#banner")
if(r==null)r=t.h.a(r)
m.r!==$&&A.T()
m.r=r
r=l.querySelector("#overlay")
if(r==null)r=t.h.a(r)
m.w!==$&&A.T()
m.w=r
r=l.querySelector("#overlay-title")
if(r==null)r=t.h.a(r)
m.x!==$&&A.T()
m.x=r
r=l.querySelector("#overlay-sub")
if(r==null)r=t.h.a(r)
m.y!==$&&A.T()
m.y=r
r=t.E.a(l.querySelector("#start-button"))
m.as!==$&&A.T()
m.as=r
for(r=m.z,q=m.Q,p=0;p<5;++p){o=l.createElement("div")
o.className="pip"
n=l.createElement("div")
n.className="pip"
k.appendChild(o).toString
s.appendChild(n).toString
B.c.l(r,o)
B.c.l(q,n)}},
L(a){var s,r,q,p,o,n,m,l,k,j=this
for(s=j.Q,r=a.r,q=j.z,p=a.f,o=0;o<5;++o){if(!(o<q.length))return A.b(q,o)
A.eF(q[o],"empty",o>=p)
if(!(o<s.length))return A.b(s,o)
A.eF(s[o],"empty",o>=r)}s=j.c
s===$&&A.k()
r=""+a.w
J.V(s,r)
s=j.d
s===$&&A.k()
q=""+a.x
J.V(s,q)
n=a.a===B.t
if(n){s=j.e
s===$&&A.k()
J.V(s,"MATCH OVER")}else{s=j.e
if(a.ay){s===$&&A.k()
J.V(s,"SUDDEN DEATH")}else{s===$&&A.k()
J.V(s,"ROUND "+a.d+" / "+a.e)}}m=B.f.cn(a.y/30*100,0,100)
s=j.f
s===$&&A.k()
s=s.style
s.toString
p=B.f.aK(m,1)
s.width=p+"%"
s=a.ax
l=s&&a.Q>0&&a.z.length!==0&&!n
p=j.r
p===$&&A.k()
J.V(p,a.z)
J.eq(p).aL(0,"show",l)
k=!s||n
p=j.w
p===$&&A.k()
J.eq(p).aL(0,"hidden",!k)
if(!s){s=j.x
s===$&&A.k()
J.V(s,"YOU vs BOT")
s=j.y
s===$&&A.k()
J.V(s,"Red crest vs white crest. First to 6 rounds.")
s=j.as
s===$&&A.k()
B.w.saJ(s,"START DUEL")}else if(n){s=j.x
s===$&&A.k()
J.V(s,j.cc(a.b))
s=j.y
s===$&&A.k()
J.V(s,"Round wins "+r+" - "+q)
q=j.as
q===$&&A.k()
B.w.saJ(q,"REMATCH")}},
cc(a){var s
switch(a.a){case 1:s="YOU WIN"
break
case 2:s="BOT WINS"
break
case 3:s="DRAW"
break
case 0:s=""
break
default:s=null}return s}}
A.d7.prototype={
au(){var s,r,q=document
q.toString
s=t.bA
r=t.v
A.K(q,"keydown",s.a(new A.d8(this)),!1,r)
A.K(q,"keyup",s.a(new A.d9(this)),!1,r)}}
A.d8.prototype={
$1(a){var s,r,q=this
t.v.a(a)
s=a.key
if(s==null)s=""
r=s.toLowerCase()
if(r===" "||r==="arrowleft"||r==="arrowright")a.preventDefault()
s=a.repeat
if(s===!0)return
switch(r){case"a":case"arrowleft":q.a.a.c.b=!0
break
case"d":case"arrowright":q.a.a.c.a=!0
break
case"j":case" ":s=q.a.a
if(s.r){s=s.c
s.c=!0
s.d=0.2}break
case"k":case"shift":q.a.a.c.e=!0
break
case"enter":q.a.b.$0()
break}},
$S:10}
A.d9.prototype={
$1(a){var s=t.v.a(a).key
if(s==null)s=""
switch(s.toLowerCase()){case"a":case"arrowleft":this.a.a.c.b=!1
break
case"d":case"arrowright":this.a.a.c.a=!1
break
case"k":case"shift":this.a.a.c.e=!1
break}},
$S:10}
A.dr.prototype={
au(){var s,r,q=this,p=document,o=p.querySelector("#btn-back")
if(o==null)o=t.h.a(o)
s=q.a
q.ai(o,s.gbE())
o=p.querySelector("#btn-forward")
if(o==null)o=t.h.a(o)
q.ai(o,s.gbI())
o=p.querySelector("#btn-block")
if(o==null)o=t.h.a(o)
q.ai(o,s.gbG())
r=p.querySelector("#btn-attack")
if(r==null)r=t.h.a(r)
p=J.cU(r)
o=p.gaD(r)
s=o.$ti
A.K(o.a,o.b,s.i("~(1)?").a(new A.dx(q)),!1,s.c)
p=p.gaE(r)
s=p.$ti
A.K(p.a,p.b,s.i("~(1)?").a(new A.dy(q)),!1,s.c)
s=window
s.toString
A.K(s,"mouseup",t.aC.a(new A.dz(q)),!1,t.V)
s=window
s.toString
p=t.al
o=t.R
A.K(s,"touchend",p.a(new A.dA(q)),!1,o)
s=window
s.toString
A.K(s,"touchcancel",p.a(new A.dB(q)),!1,o)},
ai(a,b){var s,r,q
t.a4.a(b)
s=J.cU(a)
r=s.gaD(a)
q=r.$ti
A.K(r.a,r.b,q.i("~(1)?").a(new A.ds(b)),!1,q.c)
q=s.gbs(a)
r=q.$ti
A.K(q.a,q.b,r.i("~(1)?").a(new A.dt(b)),!1,r.c)
r=s.gaE(a)
q=r.$ti
A.K(r.a,r.b,q.i("~(1)?").a(new A.du(b)),!1,q.c)
q=s.gbu(a)
r=q.$ti
A.K(q.a,q.b,r.i("~(1)?").a(new A.dv(b)),!1,r.c)
s=s.gbt(a)
r=s.$ti
A.K(s.a,s.b,r.i("~(1)?").a(new A.dw(b)),!1,r.c)},
aq(){var s=this.a.c
s.e=s.b=s.a=!1}}
A.dx.prototype={
$1(a){var s
t.V.a(a)
s=this.a.a
if(s.r){s=s.c
s.c=!0
s.d=0.2}return null},
$S:2}
A.dy.prototype={
$1(a){var s
t.R.a(a).preventDefault()
s=this.a.a
if(s.r){s=s.c
s.c=!0
s.d=0.2}},
$S:1}
A.dz.prototype={
$1(a){t.V.a(a)
return this.a.aq()},
$S:2}
A.dA.prototype={
$1(a){t.R.a(a)
return this.a.aq()},
$S:1}
A.dB.prototype={
$1(a){t.R.a(a)
return this.a.aq()},
$S:1}
A.ds.prototype={
$1(a){t.V.a(a)
return this.a.$1(!0)},
$S:2}
A.dt.prototype={
$1(a){t.V.a(a)
return this.a.$1(!1)},
$S:2}
A.du.prototype={
$1(a){t.R.a(a).preventDefault()
this.a.$1(!0)},
$S:1}
A.dv.prototype={
$1(a){t.R.a(a).preventDefault()
this.a.$1(!1)},
$S:1}
A.dw.prototype={
$1(a){t.R.a(a).preventDefault()
this.a.$1(!1)},
$S:1};(function aliases(){var s=J.ba.prototype
s.bP=s.h
s=J.ad.prototype
s.bQ=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u,p=hunkHelpers._instance_0u
s(A,"jC","ig",4)
s(A,"jD","ih",4)
s(A,"jE","ii",4)
r(A,"h6","jv",0)
var o
q(o=A.cu.prototype,"gba","ci",19)
p(o,"gc8","b1",0)
q(o=A.cb.prototype,"gbI","bJ",3)
q(o,"gbE","bF",3)
q(o,"gbG","bH",3)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.o,null)
q(A.o,[A.ew,J.ba,A.bn,J.bS,A.p,A.B,A.dl,A.n,A.cj,A.aG,A.ao,A.b6,A.dC,A.de,A.bC,A.ac,A.D,A.da,A.ci,A.cg,A.U,A.cK,A.e5,A.e3,A.a1,A.bw,A.R,A.cD,A.bq,A.bK,A.a7,A.cL,A.aW,A.cP,A.bg,A.aD,A.c0,A.e8,A.dP,A.cl,A.bo,A.dR,A.a2,A.L,A.cO,A.H,A.bI,A.dE,A.cN,A.d1,A.et,A.cJ,A.aH,A.c7,A.cu,A.db,A.d0,A.aj,A.b9,A.d3,A.cb,A.c6,A.Q,A.dd,A.f,A.d5,A.cq,A.cZ,A.c9,A.bl,A.df,A.dh,A.dS,A.di,A.dj,A.cC,A.d4,A.d7,A.dr])
q(J.ba,[J.ce,J.bc,J.A,J.aJ,J.aK,J.bd,J.aI])
q(J.A,[J.ad,J.t,A.bi,A.w,A.b5,A.ai,A.cF,A.c2,A.c3,A.a,A.aO,A.cQ])
q(J.ad,[J.cm,J.br,J.a4])
r(J.cd,A.bn)
r(J.d6,J.t)
q(J.bd,[J.bb,J.cf])
q(A.p,[A.aL,A.a8,A.ch,A.cy,A.cr,A.cI,A.bT,A.W,A.bs,A.cx,A.bp,A.c_])
r(A.aR,A.B)
r(A.bZ,A.aR)
r(A.b8,A.n)
r(A.b7,A.b6)
r(A.bk,A.a8)
q(A.ac,[A.bX,A.bY,A.cw,A.ek,A.em,A.dK,A.dJ,A.dZ,A.dp,A.e2,A.dQ,A.dm,A.dn,A.d8,A.d9,A.dx,A.dy,A.dz,A.dA,A.dB,A.ds,A.dt,A.du,A.dv,A.dw])
q(A.cw,[A.cv,A.aC])
q(A.D,[A.be,A.cE,A.bt])
r(A.bf,A.b8)
q(A.bY,[A.el,A.e_,A.dc,A.dG,A.dF,A.dN,A.dO,A.dk,A.dI])
r(A.a6,A.bi)
r(A.bz,A.a6)
r(A.bA,A.bz)
r(A.bh,A.bA)
q(A.bh,[A.ck,A.bj])
r(A.bD,A.cI)
q(A.bX,[A.dL,A.dM,A.e4,A.dT,A.dV,A.dU,A.dY,A.dX,A.dW,A.dq,A.e1,A.ed,A.ea,A.e9])
r(A.cM,A.bK)
q(A.a7,[A.bB,A.c1])
r(A.bx,A.bB)
r(A.bH,A.bg)
r(A.aS,A.bH)
q(A.aD,[A.bW,A.c4])
q(A.c0,[A.d_,A.dH])
r(A.cB,A.c4)
q(A.W,[A.bm,A.cc])
r(A.cG,A.bI)
q(A.w,[A.l,A.aT])
q(A.l,[A.z,A.X,A.aU])
q(A.z,[A.e,A.c])
q(A.e,[A.bQ,A.bR,A.ag,A.ah,A.c8,A.cs])
r(A.aF,A.cF)
r(A.aa,A.a)
q(A.aa,[A.a5,A.J,A.Z])
r(A.cR,A.cQ)
r(A.by,A.cR)
r(A.bu,A.cE)
q(A.c1,[A.cH,A.bV])
r(A.bv,A.bq)
r(A.I,A.bv)
q(A.dP,[A.aE,A.P,A.aM,A.aN,A.c5,A.a3,A.ct])
s(A.aR,A.ao)
s(A.bz,A.B)
s(A.bA,A.aG)
s(A.bH,A.cP)
s(A.cF,A.d1)
s(A.cQ,A.B)
s(A.cR,A.aH)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",E:"double",a0:"num",h:"String",at:"bool",L:"Null",q:"List",o:"Object",G:"Map",j:"JSObject"},mangledNames:{},types:["~()","~(Z)","~(J)","~(at)","~(~())","L(@)","L()","@()","~(h,h)","~(a)","~(a5)","@(@)","@(@,h)","@(h)","L(~())","L(o,aQ)","~(o?,o?)","G<h,h>(G<h,h>,h)","0&(h,i?)","~(a0)","E(E,E)","f(E,E)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.iB(v.typeUniverse,JSON.parse('{"cm":"ad","br":"ad","a4":"ad","k3":"A","k0":"a","k9":"a","k_":"c","ka":"c","k1":"e","kd":"e","kb":"l","k8":"l","ke":"J","k4":"aa","k2":"X","kg":"X","kc":"z","ce":{"at":[],"M":[]},"bc":{"M":[]},"A":{"j":[]},"ad":{"j":[]},"t":{"q":["1"],"j":[],"n":["1"]},"cd":{"bn":[]},"d6":{"t":["1"],"q":["1"],"j":[],"n":["1"]},"bd":{"E":[],"a0":[]},"bb":{"E":[],"i":[],"a0":[],"M":[]},"cf":{"E":[],"a0":[],"M":[]},"aI":{"h":[],"dg":[],"M":[]},"aL":{"p":[]},"bZ":{"B":["i"],"ao":["i"],"q":["i"],"n":["i"],"B.E":"i","ao.E":"i"},"b8":{"n":["1"]},"aR":{"B":["1"],"ao":["1"],"q":["1"],"n":["1"]},"b6":{"G":["1","2"]},"b7":{"b6":["1","2"],"G":["1","2"]},"bk":{"a8":[],"p":[]},"ch":{"p":[]},"cy":{"p":[]},"bC":{"aQ":[]},"ac":{"al":[]},"bX":{"al":[]},"bY":{"al":[]},"cw":{"al":[]},"cv":{"al":[]},"aC":{"al":[]},"cr":{"p":[]},"be":{"D":["1","2"],"G":["1","2"],"D.K":"1","D.V":"2"},"bf":{"n":["1"]},"cg":{"dg":[]},"bi":{"j":[]},"a6":{"am":["1"],"j":[]},"bh":{"B":["i"],"a6":["i"],"q":["i"],"am":["i"],"j":[],"n":["i"],"aG":["i"]},"ck":{"B":["i"],"a6":["i"],"q":["i"],"am":["i"],"j":[],"n":["i"],"aG":["i"],"M":[],"B.E":"i"},"bj":{"eE":[],"B":["i"],"a6":["i"],"q":["i"],"am":["i"],"j":[],"n":["i"],"aG":["i"],"M":[],"B.E":"i"},"cI":{"p":[]},"bD":{"a8":[],"p":[]},"a1":{"p":[]},"R":{"ca":["1"]},"bK":{"fv":[]},"cM":{"bK":[],"fv":[]},"bx":{"a7":["1"],"aP":["1"],"n":["1"]},"B":{"q":["1"],"n":["1"]},"D":{"G":["1","2"]},"bg":{"G":["1","2"]},"aS":{"bH":["1","2"],"bg":["1","2"],"cP":["1","2"],"G":["1","2"]},"a7":{"aP":["1"],"n":["1"]},"bB":{"a7":["1"],"aP":["1"],"n":["1"]},"bW":{"aD":["q<i>","h"]},"c4":{"aD":["h","q<i>"]},"cB":{"aD":["h","q<i>"]},"E":{"a0":[]},"i":{"a0":[]},"q":{"n":["1"]},"h":{"dg":[]},"bT":{"p":[]},"a8":{"p":[]},"W":{"p":[]},"bm":{"p":[]},"cc":{"p":[]},"bs":{"p":[]},"cx":{"p":[]},"bp":{"p":[]},"c_":{"p":[]},"cl":{"p":[]},"bo":{"p":[]},"cO":{"aQ":[]},"H":{"i6":[]},"bI":{"cz":[]},"cN":{"cz":[]},"cG":{"cz":[]},"z":{"l":[],"w":[],"j":[]},"a":{"j":[]},"a5":{"a":[],"j":[]},"J":{"a":[],"j":[]},"l":{"w":[],"j":[]},"Z":{"a":[],"j":[]},"e":{"z":[],"l":[],"w":[],"j":[]},"bQ":{"z":[],"l":[],"w":[],"j":[]},"bR":{"z":[],"l":[],"w":[],"j":[]},"ag":{"z":[],"l":[],"w":[],"j":[]},"ah":{"z":[],"l":[],"w":[],"j":[]},"b5":{"j":[]},"ai":{"j":[]},"X":{"l":[],"w":[],"j":[]},"aF":{"j":[]},"c2":{"j":[]},"c3":{"j":[]},"w":{"j":[]},"c8":{"z":[],"l":[],"w":[],"j":[]},"aO":{"j":[]},"cs":{"z":[],"l":[],"w":[],"j":[]},"aa":{"a":[],"j":[]},"aT":{"w":[],"j":[]},"aU":{"l":[],"w":[],"j":[]},"by":{"B":["l"],"aH":["l"],"q":["l"],"am":["l"],"j":[],"n":["l"],"B.E":"l","aH.E":"l"},"cE":{"D":["h","h"],"G":["h","h"]},"bu":{"D":["h","h"],"G":["h","h"],"D.K":"h","D.V":"h"},"bt":{"D":["h","h"],"G":["h","h"],"D.K":"h","D.V":"h"},"cH":{"a7":["h"],"aP":["h"],"n":["h"]},"bv":{"bq":["1"]},"I":{"bv":["1"],"bq":["1"]},"c1":{"a7":["h"],"aP":["h"],"n":["h"]},"bV":{"a7":["h"],"aP":["h"],"n":["h"]},"c":{"z":[],"l":[],"w":[],"j":[]},"hN":{"q":["i"],"n":["i"]},"eE":{"q":["i"],"n":["i"]}}'))
A.iA(v.typeUniverse,JSON.parse('{"b8":1,"aR":1,"a6":1,"bB":1,"c0":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cT
return{n:s("a1"),E:s("ag"),b:s("ai"),h:s("z"),U:s("p"),z:s("a"),Z:s("al"),D:s("Q"),c:s("n<@>"),e:s("n<i>"),J:s("t<z>"),m:s("t<Q>"),b4:s("t<bl>"),s:s("t<h>"),cw:s("t<E>"),r:s("t<@>"),t:s("t<i>"),T:s("bc"),o:s("j"),g:s("a4"),da:s("am<@>"),v:s("a5"),d:s("q<Q>"),j:s("q<@>"),L:s("q<i>"),f:s("G<h,h>"),V:s("J"),a1:s("l"),P:s("L"),K:s("o"),cY:s("kf"),at:s("aP<h>"),l:s("aQ"),N:s("h"),R:s("Z"),bW:s("M"),b7:s("a8"),cr:s("br"),W:s("aS<h,h>"),k:s("cz"),x:s("aU"),C:s("I<J>"),S:s("I<Z>"),_:s("R<@>"),a:s("R<i>"),y:s("at"),bG:s("at(o)"),i:s("E"),A:s("@"),bd:s("@()"),w:s("@(o)"),Q:s("@(o,aQ)"),p:s("i"),cR:s("ah?"),bc:s("ca<L>?"),aQ:s("j?"),X:s("o?"),aD:s("h?"),F:s("bw<@,@>?"),O:s("cL?"),u:s("at?"),I:s("E?"),B:s("@(a)?"),a3:s("i?"),ae:s("a0?"),bp:s("~()?"),cx:s("~(a)?"),bA:s("~(a5)?"),aC:s("~(J)?"),al:s("~(Z)?"),H:s("a0"),q:s("~"),M:s("~()"),Y:s("~(h,h)"),a4:s("~(at)"),G:s("~(a0)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.w=A.ag.prototype
B.k=A.ah.prototype
B.b=A.ai.prototype
B.a7=J.ba.prototype
B.c=J.t.prototype
B.e=J.bb.prototype
B.f=J.bd.prototype
B.a=J.aI.prototype
B.a8=J.a4.prototype
B.a9=J.A.prototype
B.D=A.bj.prototype
B.E=A.aO.prototype
B.F=J.cm.prototype
B.v=J.br.prototype
B.M=A.aT.prototype
B.aG=new A.d_()
B.N=new A.bW()
B.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.O=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.T=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.S=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.R=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.Q=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.y=function(hooks) { return hooks; }

B.U=new A.cl()
B.aH=new A.dl()
B.z=new A.cB()
B.h=new A.cM()
B.V=new A.cO()
B.u=new A.aE(0,"miss")
B.W=new A.aE(1,"hit")
B.X=new A.aE(2,"blocked")
B.Y=new A.aE(3,"parried")
B.r=new A.c5(0,"ko")
B.Z=new A.c5(1,"timeout")
B.d=new A.P(0,"idle")
B.m=new A.P(1,"walk")
B.p=new A.P(2,"windup")
B.l=new A.P(3,"attack")
B.q=new A.P(4,"recover")
B.i=new A.P(5,"block")
B.n=new A.P(6,"hit")
B.o=new A.P(7,"stagger")
B.j=new A.P(8,"dead")
B.a_=new A.a3(0,"roundStart")
B.a1=new A.a3(2,"hit")
B.a2=new A.a3(3,"blocked")
B.a3=new A.a3(4,"parried")
B.a4=new A.a3(5,"roundEnd")
B.a5=new A.a3(6,"matchEnd")
B.a0=new A.a3(1,"fight")
B.a6=new A.Q(B.a0,0,0,0,"FIGHT",null)
B.aa=s([B.d,B.m,B.p,B.l,B.q,B.i,B.n,B.o,B.j],A.cT("t<P>"))
B.ab=s([],t.m)
B.ah={}
B.ac=new A.b7(B.ah,[],A.cT("b7<h,h>"))
B.A=new A.aM(0,"roundIntro")
B.B=new A.aM(1,"fighting")
B.ad=new A.aM(2,"roundEnd")
B.t=new A.aM(3,"matchEnd")
B.C=new A.aN(0,"none")
B.ae=new A.aN(1,"playerWin")
B.af=new A.aN(2,"botWin")
B.ag=new A.aN(3,"draw")
B.G=new A.ct(0,"rosette")
B.ai=new A.ct(1,"lambda")
B.aj=A.eZ("hN")
B.ak=A.eZ("o")
B.al=A.eZ("eE")
B.am=new A.dH(!1)
B.H=new A.f(0,0)
B.an=new A.f(0,-1)
B.ao=new A.f(-0.04,-0.14)
B.ap=new A.f(-0.18,-0.1)
B.aq=new A.f(-0.13,-0.1)
B.I=new A.f(0.45,-0.17)
B.ar=new A.f(0.18,0.02)
B.as=new A.f(0.05,0.2)
B.at=new A.f(0.25,0.03)
B.au=new A.f(0.25,0.02)
B.J=new A.f(0.45,0.08)
B.av=new A.f(0.04,-0.09)
B.aw=new A.f(0,-0.015)
B.ax=new A.f(-0.2,0.08)
B.ay=new A.f(-0.03,0.12)
B.az=new A.f(0.07,-0.12)
B.K=new A.f(-0.55,0.52)
B.L=new A.f(-0.75,0.08)
B.aA=new A.f(-0.04,-0.12)
B.aB=new A.f(0.73,-0.06)
B.aC=new A.f(-0.22,-0.4)
B.aD=new A.f(-0.12,-0.06)
B.aE=new A.f(-0.06,-0.2)
B.aF=new A.f(-0.08,-0.5)})();(function staticFields(){$.e0=null
$.O=A.r([],A.cT("t<o>"))
$.fg=null
$.f6=null
$.f5=null
$.ha=null
$.h5=null
$.hd=null
$.ef=null
$.en=null
$.eV=null
$.aY=null
$.bN=null
$.bO=null
$.eQ=!1
$.y=B.h
$.fr=""
$.fs=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"k7","hj",()=>A.eh("_$dart_dartClosure"))
s($,"k6","hi",()=>A.eh("_$dart_dartClosure_dartJSInterop"))
s($,"kx","hz",()=>A.r([new J.cd()],A.cT("t<bn>")))
s($,"kh","hk",()=>A.a9(A.dD({
toString:function(){return"$receiver$"}})))
s($,"ki","hl",()=>A.a9(A.dD({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kj","hm",()=>A.a9(A.dD(null)))
s($,"kk","hn",()=>A.a9(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kn","hq",()=>A.a9(A.dD(void 0)))
s($,"ko","hr",()=>A.a9(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"km","hp",()=>A.a9(A.fo(null)))
s($,"kl","ho",()=>A.a9(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kq","ht",()=>A.a9(A.fo(void 0)))
s($,"kp","hs",()=>A.a9(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kr","f_",()=>A.ie())
s($,"kv","hx",()=>A.hX(4096))
s($,"kt","hv",()=>new A.ea().$0())
s($,"ku","hw",()=>new A.e9().$0())
s($,"ks","hu",()=>new Int8Array(A.j4(A.r([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"kw","hy",()=>A.hb(B.ak))
s($,"k5","hh",()=>A.i3("^\\S+$"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.A,DOMError:J.A,MediaError:J.A,Navigator:J.A,NavigatorConcurrentHardware:J.A,NavigatorUserMediaError:J.A,OverconstrainedError:J.A,PositionError:J.A,GeolocationPositionError:J.A,TextMetrics:J.A,WebGLRenderingContext:J.A,WebGL2RenderingContext:J.A,ArrayBufferView:A.bi,Int8Array:A.ck,Uint8Array:A.bj,HTMLAudioElement:A.e,HTMLBRElement:A.e,HTMLBaseElement:A.e,HTMLBodyElement:A.e,HTMLContentElement:A.e,HTMLDListElement:A.e,HTMLDataElement:A.e,HTMLDataListElement:A.e,HTMLDetailsElement:A.e,HTMLDialogElement:A.e,HTMLDivElement:A.e,HTMLEmbedElement:A.e,HTMLFieldSetElement:A.e,HTMLHRElement:A.e,HTMLHeadElement:A.e,HTMLHeadingElement:A.e,HTMLHtmlElement:A.e,HTMLIFrameElement:A.e,HTMLImageElement:A.e,HTMLInputElement:A.e,HTMLLIElement:A.e,HTMLLabelElement:A.e,HTMLLegendElement:A.e,HTMLLinkElement:A.e,HTMLMapElement:A.e,HTMLMediaElement:A.e,HTMLMenuElement:A.e,HTMLMetaElement:A.e,HTMLMeterElement:A.e,HTMLModElement:A.e,HTMLOListElement:A.e,HTMLObjectElement:A.e,HTMLOptGroupElement:A.e,HTMLOptionElement:A.e,HTMLOutputElement:A.e,HTMLParagraphElement:A.e,HTMLParamElement:A.e,HTMLPictureElement:A.e,HTMLPreElement:A.e,HTMLProgressElement:A.e,HTMLQuoteElement:A.e,HTMLScriptElement:A.e,HTMLShadowElement:A.e,HTMLSlotElement:A.e,HTMLSourceElement:A.e,HTMLSpanElement:A.e,HTMLStyleElement:A.e,HTMLTableCaptionElement:A.e,HTMLTableCellElement:A.e,HTMLTableDataCellElement:A.e,HTMLTableHeaderCellElement:A.e,HTMLTableColElement:A.e,HTMLTableElement:A.e,HTMLTableRowElement:A.e,HTMLTableSectionElement:A.e,HTMLTemplateElement:A.e,HTMLTextAreaElement:A.e,HTMLTimeElement:A.e,HTMLTitleElement:A.e,HTMLTrackElement:A.e,HTMLUListElement:A.e,HTMLUnknownElement:A.e,HTMLVideoElement:A.e,HTMLDirectoryElement:A.e,HTMLFontElement:A.e,HTMLFrameElement:A.e,HTMLFrameSetElement:A.e,HTMLMarqueeElement:A.e,HTMLElement:A.e,HTMLAnchorElement:A.bQ,HTMLAreaElement:A.bR,HTMLButtonElement:A.ag,HTMLCanvasElement:A.ah,CanvasPattern:A.b5,CanvasRenderingContext2D:A.ai,CDATASection:A.X,CharacterData:A.X,Comment:A.X,ProcessingInstruction:A.X,Text:A.X,CSSStyleDeclaration:A.aF,MSStyleCSSProperties:A.aF,CSS2Properties:A.aF,DOMException:A.c2,DOMTokenList:A.c3,MathMLElement:A.z,Element:A.z,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.w,HTMLFormElement:A.c8,KeyboardEvent:A.a5,MouseEvent:A.J,DragEvent:A.J,PointerEvent:A.J,WheelEvent:A.J,Document:A.l,DocumentFragment:A.l,HTMLDocument:A.l,ShadowRoot:A.l,XMLDocument:A.l,DocumentType:A.l,Node:A.l,Path2D:A.aO,HTMLSelectElement:A.cs,TouchEvent:A.Z,CompositionEvent:A.aa,FocusEvent:A.aa,TextEvent:A.aa,UIEvent:A.aa,Window:A.aT,DOMWindow:A.aT,Attr:A.aU,NamedNodeMap:A.by,MozNamedAttrMap:A.by,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,ArrayBufferView:false,Int8Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasPattern:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMTokenList:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.a6.$nativeSuperclassTag="ArrayBufferView"
A.bz.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jT
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
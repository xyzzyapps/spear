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
if(a[b]!==s){A.jX(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.r(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eR(b)
return new s(c,this)}:function(){if(s===null)s=A.eR(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eR(a).prototype
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
eW(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eh(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eT==null){A.jL()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.d(A.fo("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.e_
if(o==null)o=$.e_=A.eg(n)
p=q[o]}if(p!=null)return p
p=A.jR(a)
if(p!=null)return p
if(typeof a=="function")return B.a8
s=Object.getPrototypeOf(a)
if(s==null)return B.F
if(s===Object.prototype)return B.F
if(typeof q=="function"){o=$.e_
if(o==null)o=$.e_=A.eg(n)
Object.defineProperty(q,o,{value:B.v,enumerable:false,writable:true,configurable:true})
return B.v}return B.v},
hO(a,b){if(a<0||a>4294967295)throw A.d(A.Y(a,0,4294967295,"length",null))
return J.hP(new Array(a),b)},
hP(a,b){var s=A.r(a,b.i("t<0>"))
s.$flags=1
return s},
fa(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hQ(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.fa(r))break;++b}return b},
hR(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.fa(q))break}return b},
av(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b9.prototype
return J.cf.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.ba.prototype
if(typeof a=="boolean")return J.ce.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a3.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.eh(a)},
ef(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a3.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.eh(a)},
jG(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a3.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.eh(a)},
cU(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a3.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aJ.prototype
return a}if(a instanceof A.o)return a
return J.eh(a)},
f_(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.av(a).N(a,b)},
af(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.jP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ef(a).C(a,b)},
hz(a,b,c,d){return J.cU(a).bV(a,b,c,d)},
eo(a){return J.cU(a).gbh(a)},
cX(a){return J.av(a).gu(a)},
f0(a){return J.jG(a).gI(a)},
cY(a){return J.ef(a).gn(a)},
hA(a){return J.av(a).gL(a)},
V(a,b){return J.cU(a).saI(a,b)},
b3(a){return J.av(a).h(a)},
b8:function b8(){},
ce:function ce(){},
ba:function ba(){},
z:function z(){},
ad:function ad(){},
cm:function cm(){},
bp:function bp(){},
a3:function a3(){},
aJ:function aJ(){},
aK:function aK(){},
t:function t(a){this.$ti=a},
cd:function cd(){},
d6:function d6(a){this.$ti=a},
bR:function bR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bb:function bb(){},
b9:function b9(){},
cf:function cf(){},
aI:function aI(){}},A={eu:function eu(){},
fb(a){return new A.aL("Field '"+a+"' has been assigned during initialization.")},
hU(a){return new A.aL("Field '"+a+"' has not been initialized.")},
hT(a){return new A.aL("Field '"+a+"' has already been initialized.")},
ei(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
fm(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i7(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
h6(a,b,c){return a},
eU(a){var s,r
for(s=$.N.length,r=0;r<s;++r)if(a===$.N[r])return!0
return!1},
f9(){return new A.bn("No element")},
aL:function aL(a){this.a=a},
bY:function bY(a){this.a=a},
dl:function dl(){},
b7:function b7(){},
cj:function cj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aG:function aG(){},
ao:function ao(){},
aR:function aR(){},
hJ(){throw A.d(A.ap("Cannot modify unmodifiable Map"))},
hf(a){var s=A.he(a)
if(s!=null)return s
return"minified:"+a},
jP(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b3(a)
return s},
cn(a){var s,r=$.ff
if(r==null)r=$.ff=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eA(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.b(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
i_(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.aL(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
co(a){var s,r,q,p
if(a instanceof A.o)return A.M(A.ax(a),null)
s=J.av(a)
if(s===B.a7||s===B.a9||t.cr.b(a)){r=B.x(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.M(A.ax(a),null)},
i0(a){var s,r,q
if(typeof a=="number"||A.eN(a))return J.b3(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ac)return a.h(0)
s=$.hy()
for(r=0;r<1;++r){q=s[r].cH(a)
if(q!=null)return q}return"Instance of '"+A.co(a)+"'"},
hY(){if(!!self.location)return self.location.href
return null},
i1(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
an(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.ar(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.Y(a,0,1114111,null,null))},
hZ(a){var s=a.$thrownJsError
if(s==null)return null
return A.aw(s)},
jJ(a){throw A.d(A.eQ(a))},
b(a,b){if(a==null)J.cY(a)
throw A.d(A.ed(a,b))},
ed(a,b){var s,r="index"
if(!A.fW(b))return new A.W(!0,b,r,null)
s=A.bJ(J.cY(a))
if(b<0||b>=s)return A.es(b,s,a,r)
return A.fg(b,r)},
eQ(a){return new A.W(!0,a,null,null)},
d(a){return A.u(a,new Error())},
u(a,b){var s
if(a==null)a=new A.a7()
b.dartException=a
s=A.jY
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jY(){return J.b3(this.dartException)},
b1(a,b){throw A.u(a,b==null?new Error():b)},
aA(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.b1(A.j2(a,b,c),s)},
j2(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bq("'"+s+"': Cannot "+o+" "+l+k+n)},
cW(a){throw A.d(A.ak(a))},
a8(a){var s,r,q,p,o,n
a=A.jV(a.replace(String({}),"$receiver$"))
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
fn(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ev(a,b){var s=b==null,r=s?null:b.method
return new A.ch(a,r,s?null:b.receiver)},
b2(a){if(a==null)return new A.de(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.az(a,a.dartException)
return A.jA(a)},
az(a,b){if(t.U.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.ar(r,16)&8191)===10)switch(q){case 438:return A.az(a,A.ev(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.az(a,new A.bi())}}if(a instanceof TypeError){p=$.hj()
o=$.hk()
n=$.hl()
m=$.hm()
l=$.hp()
k=$.hq()
j=$.ho()
$.hn()
i=$.hs()
h=$.hr()
g=p.J(s)
if(g!=null)return A.az(a,A.ev(A.aa(s),g))
else{g=o.J(s)
if(g!=null){g.method="call"
return A.az(a,A.ev(A.aa(s),g))}else if(n.J(s)!=null||m.J(s)!=null||l.J(s)!=null||k.J(s)!=null||j.J(s)!=null||m.J(s)!=null||i.J(s)!=null||h.J(s)!=null){A.aa(s)
return A.az(a,new A.bi())}}return A.az(a,new A.cy(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bm()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.az(a,new A.W(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bm()
return a},
aw(a){var s
if(a==null)return new A.bA(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bA(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ha(a){if(a==null)return J.cX(a)
if(typeof a=="object")return A.cn(a)
return J.cX(a)},
jb(a,b,c,d,e,f){t.Z.a(a)
switch(A.bJ(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.dQ("Unsupported number of arguments for wrapped closure"))},
bN(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.jE(a,b)
a.$identity=s
return s},
jE(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jb)},
hI(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cv().constructor.prototype):Object.create(new A.aC(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.f8(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hE(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.f8(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hE(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hC)}throw A.d("Error in functionType of tearoff")},
hF(a,b,c,d){var s=A.f6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
f8(a,b,c,d){if(c)return A.hH(a,b,d)
return A.hF(b.length,d,a,b)},
hG(a,b,c,d){var s=A.f6,r=A.hD
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
hH(a,b,c){var s,r
if($.f4==null)$.f4=A.f3("interceptor")
if($.f5==null)$.f5=A.f3("receiver")
s=b.length
r=A.hG(s,c,a,b)
return r},
eR(a){return A.hI(a)},
hC(a,b){return A.e6(v.typeUniverse,A.ax(a.a),b)},
f6(a){return a.a},
hD(a){return a.b},
f3(a){var s,r,q,p=new A.aC("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.aB("Field name "+a+" not found.",null))},
eg(a){return v.getIsolateTag(a)},
kx(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jR(a){var s,r,q,p,o,n=A.aa($.h9.$1(a)),m=$.ee[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.em[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.fR($.h4.$2(a,n))
if(q!=null){m=$.ee[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.em[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.en(s)
$.ee[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.em[n]=s
return s}if(p==="-"){o=A.en(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hb(a,s)
if(p==="*")throw A.d(A.fo(n))
if(v.leafTags[n]===true){o=A.en(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hb(a,s)},
hb(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eW(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
en(a){return J.eW(a,!1,null,!!a.$iam)},
jT(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.en(s)
else return J.eW(s,c,null,null)},
jL(){if(!0===$.eT)return
$.eT=!0
A.jM()},
jM(){var s,r,q,p,o,n,m,l
$.ee=Object.create(null)
$.em=Object.create(null)
A.jK()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hc.$1(o)
if(n!=null){m=A.jT(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jK(){var s,r,q,p,o,n,m=B.O()
m=A.b_(B.P,A.b_(B.Q,A.b_(B.y,A.b_(B.y,A.b_(B.R,A.b_(B.S,A.b_(B.T(B.x),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.h9=new A.ej(p)
$.h4=new A.ek(o)
$.hc=new A.el(n)},
b_(a,b){return a(b)||b},
jF(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hS(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.E("Illegal RegExp pattern ("+String(o)+")",a,null))},
jV(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
b5:function b5(){},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(){},
dC:function dC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bi:function bi(){},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a},
de:function de(a){this.a=a},
bA:function bA(a){this.a=a
this.b=null},
ac:function ac(){},
bW:function bW(){},
bX:function bX(){},
cw:function cw(){},
cv:function cv(){},
aC:function aC(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
bc:function bc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
da:function da(a,b){this.a=a
this.b=b
this.c=null},
bd:function bd(a,b){this.a=a
this.$ti=b},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ej:function ej(a){this.a=a},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
cg:function cg(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
j3(a){return a},
hW(a){return new Uint8Array(a)},
eL(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ed(b,a))},
bg:function bg(){},
a5:function a5(){},
bf:function bf(){},
ck:function ck(){},
bh:function bh(){},
bx:function bx(){},
by:function by(){},
eB(a,b){var s=b.c
return s==null?b.c=A.bD(a,"ca",[b.x]):s},
fi(a){var s=a.w
if(s===6||s===7)return A.fi(a.x)
return s===11||s===12},
i3(a){return a.as},
cT(a){return A.e5(v.typeUniverse,a,!1)},
as(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.as(a1,s,a3,a4)
if(r===s)return a2
return A.fB(a1,r,!0)
case 7:s=a2.x
r=A.as(a1,s,a3,a4)
if(r===s)return a2
return A.fA(a1,r,!0)
case 8:q=a2.y
p=A.aZ(a1,q,a3,a4)
if(p===q)return a2
return A.bD(a1,a2.x,p)
case 9:o=a2.x
n=A.as(a1,o,a3,a4)
m=a2.y
l=A.aZ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.eF(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aZ(a1,j,a3,a4)
if(i===j)return a2
return A.fC(a1,k,i)
case 11:h=a2.x
g=A.as(a1,h,a3,a4)
f=a2.y
e=A.jx(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fz(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aZ(a1,d,a3,a4)
o=a2.x
n=A.as(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eG(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bT("Attempted to substitute unexpected RTI kind "+a0))}},
aZ(a,b,c,d){var s,r,q,p,o=b.length,n=A.ea(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.as(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jy(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ea(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.as(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jx(a,b,c,d){var s,r=b.a,q=A.aZ(a,r,c,d),p=b.b,o=A.aZ(a,p,c,d),n=b.c,m=A.jy(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cK()
s.a=q
s.b=o
s.c=m
return s},
r(a,b){a[v.arrayRti]=b
return a},
h7(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jI(s)
return a.$S()}return null},
jN(a,b){var s
if(A.fi(b))if(a instanceof A.ac){s=A.h7(a)
if(s!=null)return s}return A.ax(a)},
ax(a){if(a instanceof A.o)return A.B(a)
if(Array.isArray(a))return A.ar(a)
return A.eM(J.av(a))},
ar(a){var s=a[v.arrayRti],r=t.r
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.eM(a)},
eM(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ja(a,s)},
ja(a,b){var s=a instanceof A.ac?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.iC(v.typeUniverse,s.name)
b.$ccache=r
return r},
jI(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.e5(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jH(a){return A.au(A.B(a))},
jw(a){var s=a instanceof A.ac?A.h7(a):null
if(s!=null)return s
if(t.bW.b(a))return J.hA(a).a
if(Array.isArray(a))return A.ar(a)
return A.ax(a)},
au(a){var s=a.r
return s==null?a.r=new A.e4(a):s},
eY(a){return A.au(A.e5(v.typeUniverse,a,!1))},
j9(a){var s=this
s.b=A.jt(s)
return s.b(a)},
jt(a){var s,r,q,p,o
if(a===t.K)return A.jh
if(A.ay(a))return A.jl
s=a.w
if(s===6)return A.j7
if(s===1)return A.fY
if(s===7)return A.jc
r=A.js(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ay)){a.f="$i"+q
if(q==="q")return A.jf
if(a===t.o)return A.je
return A.jk}}else if(s===10){p=A.jF(a.x,a.y)
o=p==null?A.fY:p
return o==null?A.bK(o):o}return A.j5},
js(a){if(a.w===8){if(a===t.p)return A.fW
if(a===t.i||a===t.H)return A.jg
if(a===t.N)return A.jj
if(a===t.y)return A.eN}return null},
j8(a){var s=this,r=A.j4
if(A.ay(s))r=A.j1
else if(s===t.K)r=A.bK
else if(A.b0(s)){r=A.j6
if(s===t.a3)r=A.iZ
else if(s===t.aD)r=A.fR
else if(s===t.u)r=A.iX
else if(s===t.ae)r=A.fQ
else if(s===t.I)r=A.iY
else if(s===t.aQ)r=A.j0}else if(s===t.p)r=A.bJ
else if(s===t.N)r=A.aa
else if(s===t.y)r=A.iW
else if(s===t.H)r=A.fP
else if(s===t.i)r=A.cS
else if(s===t.o)r=A.j_
s.a=r
return s.a(a)},
j5(a){var s=this
if(a==null)return A.b0(s)
return A.jQ(v.typeUniverse,A.jN(a,s),s)},
j7(a){if(a==null)return!0
return this.x.b(a)},
jk(a){var s,r=this
if(a==null)return A.b0(r)
s=r.f
if(a instanceof A.o)return!!a[s]
return!!J.av(a)[s]},
jf(a){var s,r=this
if(a==null)return A.b0(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.o)return!!a[s]
return!!J.av(a)[s]},
je(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.o)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fX(a){if(typeof a=="object"){if(a instanceof A.o)return t.o.b(a)
return!0}if(typeof a=="function")return!0
return!1},
j4(a){var s=this
if(a==null){if(A.b0(s))return a}else if(s.b(a))return a
throw A.u(A.fS(a,s),new Error())},
j6(a){var s=this
if(a==null||s.b(a))return a
throw A.u(A.fS(a,s),new Error())},
fS(a,b){return new A.bB("TypeError: "+A.fv(a,A.M(b,null)))},
fv(a,b){return A.d2(a)+": type '"+A.M(A.jw(a),null)+"' is not a subtype of type '"+b+"'"},
S(a,b){return new A.bB("TypeError: "+A.fv(a,b))},
jc(a){var s=this
return s.x.b(a)||A.eB(v.typeUniverse,s).b(a)},
jh(a){return a!=null},
bK(a){if(a!=null)return a
throw A.u(A.S(a,"Object"),new Error())},
jl(a){return!0},
j1(a){return a},
fY(a){return!1},
eN(a){return!0===a||!1===a},
iW(a){if(!0===a)return!0
if(!1===a)return!1
throw A.u(A.S(a,"bool"),new Error())},
iX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.u(A.S(a,"bool?"),new Error())},
cS(a){if(typeof a=="number")return a
throw A.u(A.S(a,"double"),new Error())},
iY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.S(a,"double?"),new Error())},
fW(a){return typeof a=="number"&&Math.floor(a)===a},
bJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.u(A.S(a,"int"),new Error())},
iZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.u(A.S(a,"int?"),new Error())},
jg(a){return typeof a=="number"},
fP(a){if(typeof a=="number")return a
throw A.u(A.S(a,"num"),new Error())},
fQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.S(a,"num?"),new Error())},
jj(a){return typeof a=="string"},
aa(a){if(typeof a=="string")return a
throw A.u(A.S(a,"String"),new Error())},
fR(a){if(typeof a=="string")return a
if(a==null)return a
throw A.u(A.S(a,"String?"),new Error())},
j_(a){if(A.fX(a))return a
throw A.u(A.S(a,"JSObject"),new Error())},
j0(a){if(a==null)return a
if(A.fX(a))return a
throw A.u(A.S(a,"JSObject?"),new Error())},
h0(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.M(a[q],b)
return s},
jo(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.h0(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.M(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fU(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.r([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.M(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.M(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.M(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.M(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.M(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
M(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.M(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.M(a.x,b)+">"
if(l===8){p=A.jz(a.x)
o=a.y
return o.length>0?p+("<"+A.h0(o,b)+">"):p}if(l===10)return A.jo(a,b)
if(l===11)return A.fU(a,b,null)
if(l===12)return A.fU(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
jz(a){var s=A.he(a)
if(s!=null)return s
return"minified:"+a},
iD(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
iC(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.e5(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bE(a,5,"#")
q=A.ea(s)
for(p=0;p<s;++p)q[p]=r
o=A.bD(a,b,q)
n[b]=o
return o}else return m},
iA(a,b){return A.fL(a.tR,b)},
iz(a,b){return A.fL(a.eT,b)},
e5(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fD(a,null,b,!1)
r.set(b,s)
return s},
e6(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fD(a,b,c,!0)
q.set(c,r)
return r},
iB(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.eF(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fD(a,b,c,d){return A.ir(A.ik(a,b,c,d))},
ae(a,b){b.a=A.j8
b.b=A.j9
return b},
bE(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.U(null,null)
s.w=b
s.as=c
r=A.ae(a,s)
a.eC.set(c,r)
return r},
fB(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ix(a,b,r,c)
a.eC.set(r,s)
return s},
ix(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ay(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.b0(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.U(null,null)
q.w=6
q.x=b
q.as=c
return A.ae(a,q)},
fA(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iv(a,b,r,c)
a.eC.set(r,s)
return s},
iv(a,b,c,d){var s,r
if(d){s=b.w
if(A.ay(b)||b===t.K)return b
else if(s===1)return A.bD(a,"ca",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.U(null,null)
r.w=7
r.x=b
r.as=c
return A.ae(a,r)},
iy(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.w=13
s.x=b
s.as=q
r=A.ae(a,s)
a.eC.set(q,r)
return r},
bC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
iu(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bD(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bC(c)+">"
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
eF(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bC(r)+">")
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
fC(a,b,c){var s,r,q="+"+(b+"("+A.bC(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ae(a,s)
a.eC.set(q,r)
return r},
fz(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bC(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bC(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iu(i)+"}"}r=n+(g+")")
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
eG(a,b,c,d){var s,r=b.as+("<"+A.bC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iw(a,b,c,r,d)
a.eC.set(r,s)
return s},
iw(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ea(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.as(a,b,r,0)
m=A.aZ(a,c,r,0)
return A.eG(a,n,m,c!==m)}}l=new A.U(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ae(a,l)},
ik(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ir(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.im(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fx(a,r,l,k,!1)
else if(q===46)r=A.fx(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aq(a.u,a.e,k.pop()))
break
case 94:k.push(A.iy(a.u,k.pop()))
break
case 35:k.push(A.bE(a.u,5,"#"))
break
case 64:k.push(A.bE(a.u,2,"@"))
break
case 126:k.push(A.bE(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ip(a,k)
break
case 38:A.io(a,k)
break
case 63:p=a.u
k.push(A.fB(p,A.aq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fA(p,A.aq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.il(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fy(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.is(a.u,a.e,o)
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
im(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fx(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.iD(s,o.x)[p]
if(n==null)A.b1('No "'+p+'" in "'+A.i3(o)+'"')
d.push(A.e6(s,o,n))}else d.push(p)
return m},
ip(a,b){var s,r=a.u,q=A.fw(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bD(r,p,q))
else{s=A.aq(r,a.e,p)
switch(s.w){case 11:b.push(A.eG(r,s,q,a.n))
break
default:b.push(A.eF(r,s,q))
break}}},
il(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fw(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aq(p,a.e,o)
q=new A.cK()
q.a=s
q.b=n
q.c=m
b.push(A.fz(p,r,q))
return
case-4:b.push(A.fC(p,b.pop(),s))
return
default:throw A.d(A.bT("Unexpected state under `()`: "+A.m(o)))}},
io(a,b){var s=b.pop()
if(0===s){b.push(A.bE(a.u,1,"0&"))
return}if(1===s){b.push(A.bE(a.u,4,"1&"))
return}throw A.d(A.bT("Unexpected extended operation "+A.m(s)))},
fw(a,b){var s=b.splice(a.p)
A.fy(a.u,a.e,s)
a.p=b.pop()
return s},
aq(a,b,c){if(typeof c=="string")return A.bD(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.iq(a,b,c)}else return c},
fy(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aq(a,b,c[s])},
is(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aq(a,b,c[s])},
iq(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bT("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bT("Bad index "+c+" for "+b.h(0)))},
jQ(a,b,c){var s,r=b.d
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
return A.v(a,A.eB(a,b),c,d,e)}if(s===6)return A.v(a,p,c,d,e)&&A.v(a,b.x,c,d,e)
if(q===7){if(A.v(a,b,c,d.x,e))return!0
return A.v(a,b,c,A.eB(a,d),e)}if(q===6)return A.v(a,b,c,p,e)||A.v(a,b,c,d.x,e)
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
if(!A.v(a,j,c,i,e)||!A.v(a,i,e,j,c))return!1}return A.fV(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fV(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.jd(a,b,c,d,e)}if(o&&q===10)return A.ji(a,b,c,d,e)
return!1},
fV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
jd(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.e6(a,b,r[o])
return A.fO(a,p,null,c,d.y,e)}return A.fO(a,b.y,null,c,d.y,e)},
fO(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.v(a,b[s],d,e[s],f))return!1
return!0},
ji(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.v(a,r[s],c,q[s],e))return!1
return!0},
b0(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ay(a))if(s!==6)r=s===7&&A.b0(a.x)
return r},
ay(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fL(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ea(a){return a>0?new Array(a):v.typeUniverse.sEA},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cK:function cK(){this.c=this.b=this.a=null},
e4:function e4(a){this.a=a},
cI:function cI(){},
bB:function bB(a){this.a=a},
id(){var s,r,q
if(self.scheduleImmediate!=null)return A.jB()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bN(new A.dJ(s),1)).observe(r,{childList:true})
return new A.dI(s,r,q)}else if(self.setImmediate!=null)return A.jC()
return A.jD()},
ie(a){self.scheduleImmediate(A.bN(new A.dK(t.M.a(a)),0))},
ig(a){self.setImmediate(A.bN(new A.dL(t.M.a(a)),0))},
ih(a){t.M.a(a)
A.it(0,a)},
it(a,b){var s=new A.e2()
s.bS(a,b)
return s},
eq(a){var s
if(t.U.b(a)){s=a.ga2()
if(s!=null)return s}return B.V},
ii(a,b,c){var s,r,q,p={},o=p.a=a
for(s=t._;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if(o===b){s=A.i4()
b.bX(new A.a0(new A.W(!0,o,null,"Cannot complete a future with itself"),s))
return}s=r|b.a&1
o.a=s
if((s&24)===0){q=t.F.a(b.c)
b.a=b.a&1|4
b.c=o
o.b4(q)
return}q=b.a5()
b.a3(p.a)
A.aV(b,q)
return},
aV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.eb(m.a,m.b)}return}q.a=b
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
A.eb(j.a,j.b)
return}g=$.x
if(g!==h)$.x=h
else g=null
c=c.c
if((c&15)===8)new A.dX(q,d,n).$0()
else if(o){if((c&1)!==0)new A.dW(q,j).$0()}else if((c&2)!==0)new A.dV(d,q).$0()
if(g!=null)$.x=g
c=q.c
if(c instanceof A.R){p=q.a.$ti
p=p.i("ca<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.a6(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.ii(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.a6(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
jp(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.w
if(s.b(a))return s.a(a)
throw A.d(A.ep(a,"onError",u.c))},
jn(){var s,r
for(s=$.aY;s!=null;s=$.aY){$.bM=null
r=s.b
$.aY=r
if(r==null)$.bL=null
s.a.$0()}},
ju(){$.eO=!0
try{A.jn()}finally{$.bM=null
$.eO=!1
if($.aY!=null)$.eZ().$1(A.h5())}},
h2(a){var s=new A.cD(a),r=$.bL
if(r==null){$.aY=$.bL=s
if(!$.eO)$.eZ().$1(A.h5())}else $.bL=r.b=s},
jr(a){var s,r,q,p=$.aY
if(p==null){A.h2(a)
$.bM=$.bL
return}s=new A.cD(a)
r=$.bM
if(r==null){s.b=p
$.aY=$.bM=s}else{q=r.b
s.b=q
$.bM=r.b=s
if(q==null)$.bL=s}},
eb(a,b){A.jr(new A.ec(a,b))},
fZ(a,b,c,d,e){var s,r=$.x
if(r===c)return d.$0()
$.x=c
s=r
try{r=d.$0()
return r}finally{$.x=s}},
h_(a,b,c,d,e,f,g){var s,r=$.x
if(r===c)return d.$1(e)
$.x=c
s=r
try{r=d.$1(e)
return r}finally{$.x=s}},
jq(a,b,c,d,e,f,g,h,i){var s,r=$.x
if(r===c)return d.$2(e,f)
$.x=c
s=r
try{r=d.$2(e,f)
return r}finally{$.x=s}},
eP(a,b,c,d){t.M.a(d)
if(B.h!==c){d=c.ci(d)
d=d}A.h2(d)},
dJ:function dJ(a){this.a=a},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a){this.a=a},
dL:function dL(a){this.a=a},
e2:function e2(){},
e3:function e3(a,b){this.a=a
this.b=b},
a0:function a0(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c,d,e){var _=this
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
dS:function dS(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a,b){this.a=a
this.b=b},
dZ:function dZ(a){this.a=a},
dW:function dW(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
cD:function cD(a){this.a=a
this.b=null},
bo:function bo(){},
dp:function dp(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
bI:function bI(){},
cM:function cM(){},
e0:function e0(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a,b){this.a=a
this.b=b},
hV(a,b){return new A.bc(a.i("@<0>").M(b).i("bc<1,2>"))},
fc(a){return new A.bv(a.i("bv<0>"))},
eE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ij(a,b,c){var s=new A.aW(a,b,c.i("aW<0>"))
s.c=a.e
return s},
ew(a){var s,r
if(A.eU(a))return"{...}"
s=new A.G("")
try{r={}
B.c.k($.N,a)
s.a+="{"
r.a=!0
a.S(0,new A.dc(r,s))
s.a+="}"}finally{if(0>=$.N.length)return A.b($.N,-1)
$.N.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bv:function bv(a){var _=this
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
A:function A(){},
C:function C(){},
dc:function dc(a,b){this.a=a
this.b=b},
cP:function cP(){},
be:function be(){},
aS:function aS(a,b){this.a=a
this.$ti=b},
a6:function a6(){},
bz:function bz(){},
bF:function bF(){},
iU(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.hw()
else s=new Uint8Array(o)
for(r=J.ef(a),q=0;q<o;++q){p=r.C(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
iT(a,b,c,d){var s=a?$.hv():$.hu()
if(s==null)return null
if(0===c&&d===b.length)return A.fK(s,b)
return A.fK(s,b.subarray(c,d))},
fK(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
f2(a,b,c,d,e,f){if(B.d.O(f,4)!==0)throw A.d(A.E("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.E("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.E("Invalid base64 padding, more than two '=' characters",a,b))},
iV(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
e9:function e9(){},
e8:function e8(){},
bV:function bV(){},
d_:function d_(){},
aD:function aD(){},
c_:function c_(){},
c3:function c3(){},
cB:function cB(){},
dH:function dH(a){this.a=a},
e7:function e7(a){this.a=a
this.b=16
this.c=0},
jO(a){var s=A.eA(a,null)
if(s!=null)return s
throw A.d(A.E(a,null,null))},
hK(a,b){a=A.u(a,new Error())
if(a==null)a=A.bK(a)
a.stack=b.h(0)
throw a},
fd(a,b,c,d){var s,r=J.hO(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
fe(a,b){var s,r,q=A.r([],b.i("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cW)(a),++r)B.c.k(q,b.a(a[r]))
return q},
fl(a,b,c){var s,r
A.fh(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.Y(c,b,null,"end",null))
if(s===0)return""}r=A.i6(a,b,c)
return r},
i6(a,b,c){var s=a.length
if(b>=s)return""
return A.i1(a,b,c==null||c>s?s:c)},
i2(a){return new A.cg(a,A.hS(a,!1,!0,!1,!1,""))},
fk(a,b,c){var s=J.f0(b)
if(!s.A())return a
if(c.length===0){do a+=A.m(s.gF())
while(s.A())}else{a+=A.m(s.gF())
while(s.A())a=a+c+A.m(s.gF())}return a},
ib(){var s,r,q=A.hY()
if(q==null)throw A.d(A.ap("'Uri.base' is not supported"))
s=$.fr
if(s!=null&&q===$.fq)return s
r=A.ic(q)
$.fr=r
$.fq=q
return r},
i4(){return A.aw(new Error())},
d2(a){if(typeof a=="number"||A.eN(a)||a==null)return J.b3(a)
if(typeof a=="string")return JSON.stringify(a)
return A.i0(a)},
hL(a,b){A.h6(a,"error",t.K)
A.h6(b,"stackTrace",t.l)
A.hK(a,b)},
bT(a){return new A.bS(a)},
aB(a,b){return new A.W(!1,null,b,a)},
ep(a,b,c){return new A.W(!0,a,b,c)},
fg(a,b){return new A.bk(null,null,!0,a,b,"Value not in range")},
Y(a,b,c,d,e){return new A.bk(b,c,!0,a,d,"Invalid value")},
cp(a,b,c){if(0>a||a>c)throw A.d(A.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.Y(b,a,c,"end",null))
return b}return c},
fh(a,b){if(a<0)throw A.d(A.Y(a,0,null,b,null))
return a},
es(a,b,c,d){return new A.cc(b,!0,a,d,"Index out of range")},
ap(a){return new A.bq(a)},
fo(a){return new A.cx(a)},
fj(a){return new A.bn(a)},
ak(a){return new A.bZ(a)},
E(a,b,c){return new A.a1(a,b,c)},
hN(a,b,c){var s,r
if(A.eU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.r([],t.s)
B.c.k($.N,a)
try{A.jm(a,s)}finally{if(0>=$.N.length)return A.b($.N,-1)
$.N.pop()}r=A.fk(b,t.c.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
et(a,b,c){var s,r
if(A.eU(a))return b+"..."+c
s=new A.G(b)
B.c.k($.N,a)
try{r=s
r.a=A.fk(r.a,a,", ")}finally{if(0>=$.N.length)return A.b($.N,-1)
$.N.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jm(a,b){var s,r,q,p,o,n,m,l=a.gI(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.A())return
s=A.m(l.gF())
B.c.k(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gF();++j
if(!l.A()){if(j<=4){B.c.k(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF();++j
for(;l.A();p=o,o=n){n=l.gF();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.c.k(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.k(b,m)
B.c.k(b,q)
B.c.k(b,r)},
hX(a,b){var s=B.f.gu(a)
b=B.f.gu(b)
b=A.i7(A.fm(A.fm($.hx(),s),b))
return b},
ic(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.b(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.fp(a4<a4?B.a.j(a5,0,a4):a5,5,a3).gbA()
else if(s===32)return A.fp(B.a.j(a5,5,a4),0,a3).gbA()}r=A.fd(8,0,!1,t.p)
B.c.p(r,0,0)
B.c.p(r,1,-1)
B.c.p(r,2,-1)
B.c.p(r,7,-1)
B.c.p(r,3,0)
B.c.p(r,4,0)
B.c.p(r,5,a4)
B.c.p(r,6,a4)
if(A.h1(a5,0,a4,0,r)>=14)B.c.p(r,7,a4)
q=r[1]
if(q>=0)if(A.h1(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+B.a.j(a5,n,a4)
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
n=e}j="https"}k=!h}}}}if(k)return new A.cN(a4<a5.length?B.a.j(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.iN(a5,0,q)
else{if(q===0)A.aX(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.iO(a5,c,p-1):""
a=A.iJ(a5,p,o,!1)
i=o+1
if(i<n){a0=A.eA(B.a.j(a5,i,n),a3)
d=A.iL(a0==null?A.b1(A.E("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.iK(a5,n,m,a3,j,a!=null)
a2=m<l?A.iM(a5,m+1,l,a3):a3
return A.iE(j,b,a,d,a1,a2,l<a4?A.iI(a5,l+1,a4):a3)},
ft(a){var s=t.N
return B.c.cs(A.r(a.split("&"),t.s),A.hV(s,s),new A.dG(B.z),t.f)},
cA(a,b,c){throw A.d(A.E("Illegal IPv4 address, "+a,b,c))},
i8(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
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
i9(a,b,c){var s
if(b===c)throw A.d(A.E("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.b(a,b)
if(a.charCodeAt(b)===118){s=A.ia(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.fs(a,b,c)
return!0},
ia(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.a1(n,a,q)
r=q
break}return new A.a1("Unexpected character",a,q-1)}if(r-1===b)return new A.a1(n,a,r)
return new A.a1("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.a1("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.b(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.a1("Invalid IPvFuture address character",a,r)}},
fs(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.dF(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.i8(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.ar(l,8)
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
B.D.bJ(s,a0,16,s,a)
B.D.cr(s,a,a0,0)}}return s},
iE(a,b,c,d,e,f,g){return new A.bG(a,b,c,d,e,f,g)},
fE(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
aX(a,b,c){throw A.d(A.E(c,a,b))},
iL(a,b){var s=A.fE(b)
if(a===s)return null
return a},
iJ(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.b(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.b(a,r)
if(a.charCodeAt(r)!==93)A.aX(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.b(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.iG(a,q,r)
if(o<r){n=o+1
p=A.fJ(a,B.a.B(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.i9(a,q,o)
l=B.a.j(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.b(a,k)
if(a.charCodeAt(k)===58){o=B.a.aa(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.fJ(a,B.a.B(a,"25",n)?o+3:n,c,"%25")}else p=""
A.fs(a,b,o)
return"["+B.a.j(a,b,o)+p+"]"}}return A.iQ(a,b,c)},
iG(a,b,c){var s=B.a.aa(a,"%",b)
return s>=b&&s<c?s:c},
fJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.G(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.eI(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.G("")
l=h.a+=B.a.j(a,q,r)
if(m)n=B.a.j(a,r,r+3)
else if(n==="%")A.aX(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.G("")
if(q<r){h.a+=B.a.j(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.b(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.j(a,q,r)
if(h==null){h=new A.G("")
m=h}else m=h
m.a+=i
l=A.eH(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.j(a,b,c)
if(q<c){i=B.a.j(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
iQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.eI(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.G("")
k=B.a.j(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.j(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.G("")
if(q<r){p.a+=B.a.j(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.aX(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.b(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.j(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.G("")
l=p}else l=p
l.a+=k
j=A.eH(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.j(a,b,c)
if(q<c){k=B.a.j(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
iN(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.b(a,b)
if(!A.fG(a.charCodeAt(b)))A.aX(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.aX(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.j(a,b,c)
return A.iF(q?a.toLowerCase():a)},
iF(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
iO(a,b,c){return A.bH(a,b,c,16,!1,!1)},
iK(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.bH(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.a.D(q,"/"))q="/"+q
return A.iP(q,e,f)},
iP(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.D(a,"/")&&!B.a.D(a,"\\"))return A.iR(a,!s||c)
return A.iS(a)},
iM(a,b,c,d){return A.bH(a,b,c,256,!0,!1)},
iI(a,b,c){return A.bH(a,b,c,256,!0,!1)},
eI(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.b(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.b(a,l)
q=a.charCodeAt(l)
p=A.ei(r)
o=A.ei(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.b(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.an(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.j(a,b,b+3).toUpperCase()
return null},
eH(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.cc(a,6*p)&63|q
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
o+=3}}return A.fl(s,0,null)},
bH(a,b,c,d,e,f){var s=A.fI(a,b,c,d,e,f)
return s==null?B.a.j(a,b,c):s},
fI(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.b(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.eI(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.aX(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.b(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.eH(n)}if(o==null){o=new A.G("")
k=o}else k=o
k.a=(k.a+=B.a.j(a,p,q))+l
if(typeof m!=="number")return A.jJ(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.j(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
fH(a){if(B.a.D(a,"."))return!0
return B.a.bn(a,"/.")!==-1},
iS(a){var s,r,q,p,o,n,m
if(!A.fH(a))return a
s=A.r([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.b(s,-1)
s.pop()
if(s.length===0)B.c.k(s,"")}p=!0}else{p="."===n
if(!p)B.c.k(s,n)}}if(p)B.c.k(s,"")
return B.c.T(s,"/")},
iR(a,b){var s,r,q,p,o,n
if(!A.fH(a))return!b?A.fF(a):a
s=A.r([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.gbq(s)!==".."){if(0>=s.length)return A.b(s,-1)
s.pop()}else B.c.k(s,"..")
p=!0}else{p="."===n
if(!p)B.c.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.c.k(s,"")
if(!b){if(0>=s.length)return A.b(s,0)
B.c.p(s,0,A.fF(s[0]))}return B.c.T(s,"/")},
fF(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.fG(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.j(a,0,s)+"%3A"+B.a.W(a,s+1)
if(r<=127){if(!(r<128))return A.b(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
iH(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.b(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.aB("Invalid URL encoding",null))}}return r},
eJ(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.b(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.z===d)return B.a.j(a,b,c)
else p=new A.bY(B.a.j(a,b,c))
else{p=A.r([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.b(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.aB("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.aB("Truncated URI",null))
B.c.k(p,A.iH(a,n+1))
n+=2}else if(r===43)B.c.k(p,32)
else B.c.k(p,r)}}t.L.a(p)
return B.am.cn(p)},
fG(a){var s=a|32
return 97<=s&&s<=122},
fp(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.r([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.E(k,a,r))}}if(q<0&&r>b)throw A.d(A.E(k,a,r))
while(p!==44){B.c.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.b(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.c.k(j,o)
else{n=B.c.gbq(j)
if(p!==44||r!==n+7||!B.a.B(a,"base64",n+1))throw A.d(A.E("Expecting '='",a,r))
break}}B.c.k(j,r)
m=r+1
if((j.length&1)===1)a=B.N.cw(a,m,s)
else{l=A.fI(a,m,s,256,!0,!1)
if(l!=null)a=B.a.Z(a,m,s,l)}return new A.dE(a,j,c)},
h1(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.b(n,p)
o=n.charCodeAt(p)
d=o&31
B.c.p(e,o>>>5,r)}return d},
dO:function dO(){},
p:function p(){},
bS:function bS(a){this.a=a},
a7:function a7(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b,c,d,e,f){var _=this
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
bq:function bq(a){this.a=a},
cx:function cx(a){this.a=a},
bn:function bn(a){this.a=a},
bZ:function bZ(a){this.a=a},
cl:function cl(){},
bm:function bm(){},
dQ:function dQ(a){this.a=a},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
K:function K(){},
o:function o(){},
cO:function cO(){},
G:function G(a){this.a=a},
dG:function dG(a){this.a=a},
dF:function dF(a){this.a=a},
bG:function bG(a,b,c,d,e,f,g){var _=this
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
f7(a,b){var s=document.createElement("canvas")
s.toString
B.k.sbC(s,b)
B.k.sbm(s,a)
return s},
D(){var s=new Path2D()
s.toString
return s},
eD(a,b,c){var s=a.classList
s.toString
if(c){s.add(b)
return!0}else{s.remove(b)
return!1}},
J(a,b,c,d,e){var s=A.h3(new A.dP(c),t.z)
if(s!=null)J.hz(a,b,t.B.a(s),!1)
return new A.cJ(a,b,s,!1,e.i("cJ<0>"))},
h3(a,b){var s=$.x
if(s===B.h)return a
return s.cj(a,b)},
e:function e(){},
bP:function bP(){},
bQ:function bQ(){},
ag:function ag(){},
ah:function ah(){},
b4:function b4(){},
ai:function ai(){},
X:function X(){},
aF:function aF(){},
d1:function d1(){},
c1:function c1(){},
c2:function c2(){},
y:function y(){},
a:function a(){},
w:function w(){},
c8:function c8(){},
a4:function a4(){},
I:function I(){},
l:function l(){},
aO:function aO(){},
cs:function cs(){},
Z:function Z(){},
a9:function a9(){},
aT:function aT(){},
aU:function aU(){},
bw:function bw(){},
cE:function cE(){},
bs:function bs(a){this.a=a},
br:function br(a){this.a=a},
dM:function dM(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
cH:function cH(a){this.a=a},
er:function er(a,b){this.a=a
this.$ti=b},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
H:function H(a,b,c,d){var _=this
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
dP:function dP(a){this.a=a},
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
c0:function c0(){},
bU:function bU(a){this.a=a},
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
jW(a,b){var s
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
c5:function c5(a,b,c,d){var _=this
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
_.d=_.c=_.b=_.a=!1},
ex(a,b){var s=A.r([],t.m),r=(b^23063^1374496523)>>>0
s=new A.dd(new A.d0(new A.cq(r===0?2654435769:r),a),B.A,B.C,B.r,s)
s.c=new A.c5(!0,1,-1.6,B.e)
s.d=new A.c5(!1,-1,1.6,B.e)
s.af(1)
return s},
aM:function aM(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=a
this.b=b},
a2:function a2(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
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
ab(a,b,c){if(a<b)return b
if(a>c)return c
return a},
cV(a){var s=A.ab(a,0,1)
return s*s*(3-2*s)},
eS(a){var s,r=A.ab(a,0,1)
if(r<0.5)return 4*r*r*r
s=-2*r+2
return 1-s*s*s/2},
eX(a,b,c,d,e){var s=b.V(0,a),r=s.gn(0),q=A.ab(r,Math.abs(c-d)+0.000001,c+d-0.000001),p=r<1e-9?B.an:s.t(0,1/r),o=c*c,n=(o-d*d+q*q)/(2*q),m=Math.sqrt(Math.max(0,o-n*n))
return new A.d5(a.m(0,p.t(0,n)).m(0,new A.h(-p.b,p.a).t(0,m*e)),a.m(0,p.t(0,q)))},
h:function h(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
cq:function cq(a){this.a=a},
hB(){var s,r,q=1600,p=A.f7(93,q),o=t.b.a(B.k.ae(p,"2d"))
B.b.sl(o,"#1a0c08")
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
f1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
a.save()
B.b.sv(a,"#1a0c08")
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
h8(a,b){var s,r
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
bj:function bj(a,b,c,d,e,f,g,h,i){var _=this
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
ey(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new A.dh(d,f,q,n,p,o,l,m,i,e,k,a,g,b,h,j,c)},
ez(a9,b0,b1){var s=a9.a,r=b0.a,q=a9.b,p=b0.b,o=a9.c,n=b0.c,m=a9.d.ad(b0.d,b1),l=a9.e,k=b0.e,j=a9.f,i=b0.f,h=a9.r.ad(b0.r,b1),g=a9.w,f=b0.w,e=a9.x,d=b0.x,c=a9.y,b=b0.y,a=a9.z,a0=b0.z,a1=a9.Q.ad(b0.Q,b1),a2=a9.as.ad(b0.as,b1),a3=a9.at,a4=b0.at,a5=a9.ax,a6=b0.ax,a7=a9.ay,a8=a9.ch
return A.ey(a1,a3+(a4-a3)*b1,a8+(b0.ch-a8)*b1,s+(r-s)*b1,c+(b-c)*b1,q+(p-q)*b1,a2,a5+(a6-a5)*b1,e+(d-e)*b1,a7+(b0.ay-a7)*b1,a+(a0-a)*b1,h,g+(f-g)*b1,m,j+(i-j)*b1,l+(k-l)*b1,o+(n-o)*b1)},
bO(a,b){var s,r,q,p,o,n,m=A.ey(B.L,0,0,0,0,0,B.J,0,0,0,0,B.I,-0.02,B.K,0,0,0),l=a.a?0:1.7,k=Math.sin(b*1.6+l),j=Math.sin(b*0.9+l)
m.a=k*0.014
m.b=0.004+k*0.008
m.c=j*0.025
m.x=j*0.014
m.y=k*0.03+j*0.02
m.r=m.r.m(0,new A.h(0,0.014*Math.sin(b*1.2+l)))
m.d=m.d.m(0,new A.h(0,0.01*Math.sin(b*1.05+l+0.4)))
m.e=m.e+0.012*Math.sin(b*0.8+l)
switch(a.e.a){case 0:break
case 1:m.b+=0.14
A.fM(m,a,0.22,0.05,0.1,0.06)
break
case 2:A.eK(m,A.cV(a.f/0.18))
break
case 3:A.eK(m,1)
A.fN(m,1)
break
case 4:A.eK(m,1)
A.fN(m,1)
return A.ez(m,A.ey(B.L,0,0,0,0,0,B.J,0,0,0,0,B.I,-0.02,B.K,0,0,0),A.eS(Math.min(1,a.f/0.35)))
case 5:s=a.f
r=A.cV(Math.min(1,s/0.12))
m.b=m.b+0.075*r
m.a=m.a+0.03*r
m.c=m.c-0.02*r
m.r=m.r.m(0,B.aq.t(0,r))
m.d=m.d.m(0,B.av.t(0,r))
m.w=m.w-0.18*r
m.x=m.x-0.04*r
if(a.z>0){q=Math.sin(s*120)*0.035*(a.z/0.12)
m.w+=q
m.c=m.c-q*0.3}if(a.w!==0)A.fM(m,a,0.15,0.015,0.045,0.014)
break
case 6:r=1-A.cV(a.f/0.25)
m.a=m.a+0.18*r
s=0.06*r
m.c=m.c-s
m.x=m.x+0.24*r
m.y=m.y+0.3*r
m.r=m.r.m(0,B.ao.t(0,r))
m.d=m.d.m(0,B.az.t(0,r))
m.b+=s
m.Q=m.Q.m(0,new A.h(-0.12*r,0.05*Math.sin(r*3.141592653589793)))
m.as=m.as.m(0,new A.h(-0.04*r,0))
m.at=-0.1*r
break
case 7:s=a.f
r=1-A.cV(s/a.Q)
p=Math.sin(s*26)*0.05*r
m.a=m.a+(0.22*r+p)
m.c=m.c-(0.05*r+p*0.4)
m.x=m.x+0.3*r
m.y=m.y+(0.4*r+p)
m.r=m.r.m(0,B.aA.t(0,r))
m.d=m.d.m(0,B.ap.t(0,r))
m.b=m.b+0.1*r
m.Q=m.Q.m(0,new A.h(-0.18*r,0.04*Math.sin(r*3.141592653589793)))
m.as=m.as.m(0,new A.h(-0.06*r,0))
m.at=-0.14*r
m.z=p*0.25
break
case 8:s=a.f
o=A.cV(Math.min(1,s/0.3))
n=A.eS(A.ab((s-0.1)/0.7,0,1))
m.b=m.b+0.16*o
m.z=1.35*n
m.a=m.a+(0.18*o+0.1*n)
s=0.06*o
m.c=m.c-s
m.x=m.x+0.35*n
m.y=m.y+0.55*n
m.d=m.d.m(0,B.aw.t(0,n))
m.r=m.r.m(0,B.aC.t(0,n))
m.Q=m.Q.m(0,new A.h(-0.12*o,0.02*o))
m.as=m.as.m(0,new A.h(0.04*o,0))
m.at=-0.1*o
m.ax=s
break}return m},
eK(a,b){var s=0.12*b
a.a=a.a+s
a.b=a.b+0.06*b
a.c=a.c-0.05*b
a.d=a.d.m(0,B.at.t(0,b))
a.e=a.e+0.35*b
a.f-=s
a.r=a.r.m(0,B.aB.t(0,b))
a.w=a.w-0.03*b
a.x=a.x+0.02*b
a.y=a.y+0.04*b},
fN(a,b){var s,r=Math.sin(3.141592653589793*b)
a.ay=a.ay+0.3*b
a.b=a.b+0.1*b
s=0.08*b
a.c=a.c+s
a.a=a.a-0.16*b
a.d=a.d.m(0,B.aD.t(0,b))
a.e=a.e-0.35*b
a.f=a.f+0.5*b
a.r=a.r.m(0,B.as.t(0,b))
a.w+=s
a.as=a.as.m(0,new A.h(0.26*b,0.05*r*b))
a.Q=a.Q.m(0,new A.h(-0.1*b,0.03*r*b))
a.ax=-0.15*r
a.at=-0.18*b
a.x=a.x-0.04*b
a.y=a.y-0.06*b},
fM(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=b.w
if(k===0)return
s=b.r/6.283185307179586
r=s-Math.floor(s)
q=A.fT(r,a.as,k,c,e)
p=A.fT(B.f.O(r+0.5,1),a.Q,k,c,e)
a.as=q.a
a.ax=q.b
a.Q=p.a
a.at=p.b
o=r*3.141592653589793
n=o*2
m=Math.sin(n)
a.c=a.c+f*Math.cos(n)*k
l=a.a-d*k
a.a=l
a.a=l+0.03*m*k
a.b=a.b+0.025*(0.5+0.5*Math.cos(o*4))
a.r=a.r.m(0,new A.h(0.015,0.05*m))
a.d=a.d.m(0,new A.h(0,0.03*Math.sin(n+0.4)))
a.e=a.e+0.025*Math.sin(n+0.3)*k
o=n+0.9
a.w=a.w+0.06*Math.sin(o)*k
a.x=a.x+0.03*Math.sin(n+0.6)
a.y=a.y+0.05*Math.sin(o)},
fT(a,b,c,d,e){var s,r,q,p,o,n=B.f.O(a,1)
if(n<0.55){s=d*(1-2*(n/0.55))
r=0
q=0}else{p=(n-0.55)/0.45
s=d*(-1+2*A.eS(p))
o=3.141592653589793*p
r=e*Math.sin(o)
q=-0.2*Math.sin(o)}return new A.dR(new A.h(b.a+c*s,b.b+r),q)},
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
dR:function dR(a,b){this.a=a
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
he(a){return v.mangledGlobalNames[a]},
jU(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
jX(a){throw A.u(A.fb(a),new Error())},
k(){throw A.u(A.hU(""),new Error())},
T(){throw A.u(A.hT(""),new Error())},
hd(){throw A.u(A.fb(""),new Error())},
eV(a,b){},
jS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=1600
try{s=A.ib().gbv()
r=J.af(s,"debug")==="1"
q=J.af(s,"preview")==="1"
p=J.af(s,"pose")
o=J.af(s,"ui")!=="0"
n=J.af(s,"autoplay")==="1"
m=J.af(s,"bot")!=="off"
a0=J.af(s,"seed")
a1=A.eA(a0==null?"":a0,null)
l=a1==null?1:a1
if(!o){a0=document.body
if(a0!=null){a2=a0.classList
a2.contains("no-ui").toString
a2.add("no-ui")}}if(q){a0=document.body
if(a0!=null){a2=a0.classList
a2.contains("preview").toString
a2.add("preview")}}k=t.cR.a(document.querySelector("#scene"))
if(k==null){a0=A.fj("Missing #scene canvas")
throw A.d(a0)}a0=l
a3=m
a4=A.r([],t.m)
a5=new A.cb(new A.db(r),new A.c6(),a4,a0,a3)
a5.b=A.ex(a3,a0)
j=a5
if(p!=null){i=A.jv(p)
if(i!=null){a0=J.af(s,"t")
a0=A.i_(a0==null?"":a0)
h=a0==null?0:a0
a0=j.b
a0===$&&A.k()
a0=a0.c
a0===$&&A.k()
g=a0
g.e=i
g.sbO(h)
if(i===B.l){a0=h
if(typeof a0!=="number")return a0.t()
a0*=8}else a0=0
g.r=a0
a0=i===B.l?1:0
g.w=a0
j.scG(h)}}a0=k
a3=new A.cZ()
k=A.f7(119,b0)
a4=t.b
a6=a4.a(B.k.ae(k,"2d"))
B.b.sl(a6,"#1a0c08")
a6.fillRect(0,0,b0,9)
a6.fillRect(0,11,b0,6)
A.f1(a6,19,12,32,2)
a6.fillRect(0,33,b0,5)
a6.fillRect(0,41,b0,11)
a6.fillRect(0,70,b0,4)
A.f1(a6,80,29,40,3.8)
a6.fillRect(0,115,b0,4)
a3.a=k
a3.b=A.hB()
a7=A.r([],t.b4)
a3=new A.dj(a3,new A.df(a7,new A.cq(20973)))
a3.c=new A.cC(0.5,B.G,"#7e3222","#963d28","#5f2418",B.H,B.au,0)
a3.d=new A.cC(0.68,B.ai,"#f0e0c7","#f6ead6","#d8c3a4",B.ay,B.ax,-0.1)
a7=A.h8(b0,766)
f=new A.di(a0,a4.a(B.k.ae(a0,"2d")),a3,a7)
a7=t.J
a8=new A.d4(A.r([],a7),A.r([],a7))
a8.bR()
e=a8
a0=q||p!=null
d=new A.cu(j,f,e,n,a0)
d.ck()}catch(a9){c=A.b2(a9)
b=A.aw(a9)
a=document.querySelector("#error")
if(a!=null){J.eo(a).a0(0,"hidden")
J.V(a,"Homer failed to start.\n"+A.m(c))}A.jU("Homer error: "+A.m(c)+"\n"+A.m(b))}},
jv(a){var s,r
for(s=0;s<9;++s){r=B.aa[s]
if(r.b===a)return r}return null}},B={}
var w=[A,J,B]
var $={}
A.eu.prototype={}
J.b8.prototype={
N(a,b){return a===b},
gu(a){return A.cn(a)},
h(a){return"Instance of '"+A.co(a)+"'"},
gL(a){return A.au(A.eM(this))}}
J.ce.prototype={
h(a){return String(a)},
gu(a){return a?519018:218159},
gL(a){return A.au(t.y)},
$iL:1,
$iat:1}
J.ba.prototype={
N(a,b){return null==b},
h(a){return"null"},
gu(a){return 0},
$iL:1}
J.z.prototype={$ij:1}
J.ad.prototype={
gu(a){return 0},
h(a){return String(a)}}
J.cm.prototype={}
J.bp.prototype={}
J.a3.prototype={
h(a){var s=a[$.hi()]
if(s==null)s=a[$.hh()]
if(s==null)return this.bQ(a)
return"JavaScript function for "+J.b3(s)},
$ial:1}
J.aJ.prototype={
gu(a){return 0},
h(a){return String(a)}}
J.aK.prototype={
gu(a){return 0},
h(a){return String(a)}}
J.t.prototype={
k(a,b){A.ar(a).c.a(b)
a.$flags&1&&A.aA(a,29)
a.push(b)},
cg(a,b){A.ar(a).i("n<1>").a(b)
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
T(a,b){var s,r=A.fd(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.p(r,s,A.m(a[s]))
return r.join(b)},
cz(a,b){var s,r,q
A.ar(a).i("1(1,1)").a(b)
s=a.length
if(s===0)throw A.d(A.f9())
if(0>=s)return A.b(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.d(A.ak(a))}return r},
cs(a,b,c,d){var s,r,q
d.a(b)
A.ar(a).M(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.ak(a))}return r},
gbq(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.f9())},
h(a){return A.et(a,"[","]")},
gI(a){return new J.bR(a,a.length,A.ar(a).i("bR<1>"))},
gu(a){return A.cn(a)},
gn(a){return a.length},
C(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ed(a,b))
return a[b]},
p(a,b,c){var s
A.ar(a).c.a(c)
a.$flags&2&&A.aA(a)
s=a.length
if(b>=s)throw A.d(A.ed(a,b))
a[b]=c},
$in:1,
$iq:1}
J.cd.prototype={
cH(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.co(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.d6.prototype={}
J.bR.prototype={
gF(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.cW(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bb.prototype={
aw(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.d.gac(b)
if(this.gac(a)===s)return 0
if(this.gac(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gac(a){return a===0?1/a<0:a<0},
bz(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.ap(""+a+".round()"))},
cl(a,b,c){if(B.d.aw(b,c)>0)throw A.d(A.eQ(b))
if(this.aw(a,b)<0)return b
if(this.aw(a,c)>0)return c
return a},
aJ(a,b){var s
if(b>20)throw A.d(A.Y(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gac(a))return"-"+s
return s},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
O(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
cd(a,b){return(a|0)===a?a/b|0:this.ce(a,b)},
ce(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.ap("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
ar(a,b){var s
if(a>0)s=this.b6(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cc(a,b){if(0>b)throw A.d(A.eQ(b))
return this.b6(a,b)},
b6(a,b){return b>31?0:a>>>b},
gL(a){return A.au(t.H)},
$iO:1,
$ia_:1}
J.b9.prototype={
gL(a){return A.au(t.p)},
$iL:1,
$ii:1}
J.cf.prototype={
gL(a){return A.au(t.i)},
$iL:1}
J.aI.prototype={
Z(a,b,c,d){var s=A.cp(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
B(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.Y(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
D(a,b){return this.B(a,b,0)},
j(a,b,c){return a.substring(b,A.cp(b,c,a.length))},
W(a,b){return this.j(a,b,null)},
aL(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.hQ(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.hR(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
t(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.U)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aa(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.Y(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bn(a,b){return this.aa(a,b,0)},
h(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gL(a){return A.au(t.N)},
gn(a){return a.length},
$iL:1,
$idg:1,
$if:1}
A.aL.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bY.prototype={
gn(a){return this.a.length},
C(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.dl.prototype={}
A.b7.prototype={}
A.cj.prototype={
gF(){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.ef(q),o=p.gn(q)
if(r.b!==o)throw A.d(A.ak(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.az(q,s);++r.c
return!0}}
A.aG.prototype={}
A.ao.prototype={
p(a,b,c){A.B(this).i("ao.E").a(c)
throw A.d(A.ap("Cannot modify an unmodifiable list"))}}
A.aR.prototype={}
A.b5.prototype={
h(a){return A.ew(this)},
p(a,b,c){var s=A.B(this)
s.c.a(b)
s.y[1].a(c)
A.hJ()},
$iF:1}
A.b6.prototype={
gn(a){return this.b.length},
cm(a){if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
C(a,b){if(!this.cm(b))return null
return this.b[this.a[b]]},
S(a,b){var s,r,q,p,o=this
o.$ti.i("~(1,2)").a(b)
s=o.$keys
if(s==null){s=Object.keys(o.a)
o.$keys=s}s=s
r=o.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])}}
A.bl.prototype={}
A.dC.prototype={
J(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.bi.prototype={
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
A.bA.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaQ:1}
A.ac.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hf(r==null?"unknown":r)+"'"},
$ial:1,
gcJ(){return this},
$C:"$1",
$R:1,
$D:null}
A.bW.prototype={$C:"$0",$R:0}
A.bX.prototype={$C:"$2",$R:2}
A.cw.prototype={}
A.cv.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hf(s)+"'"}}
A.aC.prototype={
N(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aC))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.ha(this.a)^A.cn(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.co(this.a)+"'")}}
A.cr.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bc.prototype={
gn(a){return this.a},
gU(){return new A.bd(this,A.B(this).i("bd<1>"))},
C(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cu(b)},
cu(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bo(a)]
r=this.bp(s,a)
if(r<0)return null
return s[r].b},
p(a,b,c){var s,r,q,p,o,n,m=this,l=A.B(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aP(s==null?m.b=m.ao():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aP(r==null?m.c=m.ao():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ao()
p=m.bo(b)
o=q[p]
if(o==null)q[p]=[m.ah(b,c)]
else{n=m.bp(o,b)
if(n>=0)o[n].b=c
else o.push(m.ah(b,c))}}},
S(a,b){var s,r,q=this
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ak(q))
s=s.c}},
aP(a,b,c){var s,r=A.B(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ah(b,c)
else s.b=c},
ah(a,b){var s=this,r=A.B(s),q=new A.da(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
bo(a){return J.cX(a)&1073741823},
bp(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.f_(a[r].a,b))return r
return-1},
h(a){return A.ew(this)},
ao(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.da.prototype={}
A.bd.prototype={
gn(a){return this.a.a},
gI(a){var s=this.a
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
A.ej.prototype={
$1(a){return this.a(a)},
$S:11}
A.ek.prototype={
$2(a,b){return this.a(a,b)},
$S:12}
A.el.prototype={
$1(a){return this.a(A.aa(a))},
$S:13}
A.cg.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
$idg:1}
A.bg.prototype={
c5(a,b,c,d){var s=A.Y(b,0,c,d,null)
throw A.d(s)},
aT(a,b,c,d){if(b>>>0!==b||b>c)this.c5(a,b,c,d)}}
A.a5.prototype={
gn(a){return a.length},
$iam:1}
A.bf.prototype={
p(a,b,c){A.bJ(c)
a.$flags&2&&A.aA(a)
A.eL(b,a,a.length)
a[b]=c},
bJ(a,b,c,d,e){var s,r,q
t.e.a(d)
a.$flags&2&&A.aA(a,5)
s=a.length
this.aT(a,b,s,"start")
this.aT(a,c,s,"end")
if(b>c)A.b1(A.Y(b,0,c,null,null))
r=c-b
if(e<0)A.b1(A.aB(e,null))
if(16-e<r)A.b1(A.fj("Not enough elements"))
q=e!==0||16!==r?d.subarray(e,e+r):d
a.set(q,b)
return},
$in:1,
$iq:1}
A.ck.prototype={
gL(a){return B.aj},
C(a,b){A.eL(b,a,a.length)
return a[b]},
$iL:1}
A.bh.prototype={
gL(a){return B.al},
gn(a){return a.length},
C(a,b){A.eL(b,a,a.length)
return a[b]},
$iL:1,
$ieC:1}
A.bx.prototype={}
A.by.prototype={}
A.U.prototype={
i(a){return A.e6(v.typeUniverse,this,a)},
M(a){return A.iB(v.typeUniverse,this,a)}}
A.cK.prototype={}
A.e4.prototype={
h(a){return A.M(this.a,null)}}
A.cI.prototype={
h(a){return this.a}}
A.bB.prototype={$ia7:1}
A.dJ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.dI.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.dK.prototype={
$0(){this.a.$0()},
$S:6}
A.dL.prototype={
$0(){this.a.$0()},
$S:6}
A.e2.prototype={
bS(a,b){if(self.setTimeout!=null)self.setTimeout(A.bN(new A.e3(this,b),0),a)
else throw A.d(A.ap("`setTimeout()` not found."))}}
A.e3.prototype={
$0(){this.b.$0()},
$S:0}
A.a0.prototype={
h(a){return A.m(this.a)},
$ip:1,
ga2(){return this.b}}
A.bu.prototype={
cv(a){if((this.c&15)!==6)return!0
return this.b.b.aH(t.bG.a(this.d),a.a,t.y,t.K)},
ct(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.cB(q,m,a.b,o,n,t.l)
else p=l.aH(t.w.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.b7.b(A.b2(s))){if((r.c&1)!==0)throw A.d(A.aB("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.aB("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.R.prototype={
cF(a,b,c){var s,r,q=this.$ti
q.M(c).i("1/(2)").a(a)
s=$.x
if(s===B.h){if(!t.Q.b(b)&&!t.w.b(b))throw A.d(A.ep(b,"onError",u.c))}else{c.i("@<0/>").M(q.c).i("1(2)").a(a)
b=A.jp(b,s)}r=new A.R(s,c.i("R<0>"))
this.aR(new A.bu(r,3,a,b,q.i("@<1>").M(c).i("bu<1,2>")))
return r},
cb(a){this.a=this.a&1|16
this.c=a},
a3(a){this.a=a.a&30|this.a&1
this.c=a.c},
aR(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.aR(a)
return}r.a3(s)}A.eP(null,null,r.b,t.M.a(new A.dS(r,a)))}},
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
return}m.a3(n)}l.a=m.a6(a)
A.eP(null,null,m.b,t.M.a(new A.dU(l,m)))}},
a5(){var s=t.F.a(this.c)
this.c=null
return this.a6(s)},
a6(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bY(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a5()
q.a3(a)
A.aV(q,r)},
aU(a){var s=this.a5()
this.cb(a)
A.aV(this,s)},
bX(a){this.a^=2
A.eP(null,null,this.b,t.M.a(new A.dT(this,a)))},
$ica:1}
A.dS.prototype={
$0(){A.aV(this.a,this.b)},
$S:0}
A.dU.prototype={
$0(){A.aV(this.b,this.a.a)},
$S:0}
A.dT.prototype={
$0(){this.a.aU(this.b)},
$S:0}
A.dX.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.cA(t.bd.a(q.d),t.A)}catch(p){s=A.b2(p)
r=A.aw(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.eq(q)
n=k.a
n.c=new A.a0(q,o)
q=n}q.b=!0
return}if(j instanceof A.R&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.R){m=k.b.a
l=new A.R(m.b,m.$ti)
j.cF(new A.dY(l,m),new A.dZ(l),t.q)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dY.prototype={
$1(a){this.a.bY(this.b)},
$S:5}
A.dZ.prototype={
$2(a,b){A.bK(a)
t.l.a(b)
this.a.aU(new A.a0(a,b))},
$S:15}
A.dW.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aH(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.b2(l)
r=A.aw(l)
q=s
p=r
if(p==null)p=A.eq(q)
o=this.a
o.c=new A.a0(q,p)
o.b=!0}},
$S:0}
A.dV.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cv(s)&&p.a.e!=null){p.c=p.a.ct(s)
p.b=!1}}catch(o){r=A.b2(o)
q=A.aw(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.eq(p)
m=l.b
m.c=new A.a0(p,n)
p=m}p.b=!0}},
$S:0}
A.cD.prototype={}
A.bo.prototype={
gn(a){var s,r,q=this,p={},o=new A.R($.x,t.a)
p.a=0
s=A.B(q)
r=s.i("~(1)?").a(new A.dp(p,q))
t.bp.a(new A.dq(p,o))
A.J(q.a,q.b,r,!1,s.c)
return o}}
A.dp.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.dq.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.a5()
r.c.a(q)
s.a=8
s.c=q
A.aV(s,p)},
$S:0}
A.bI.prototype={$ifu:1}
A.cM.prototype={
cC(a){var s,r,q
t.M.a(a)
try{if(B.h===$.x){a.$0()
return}A.fZ(null,null,this,a,t.q)}catch(q){s=A.b2(q)
r=A.aw(q)
A.eb(A.bK(s),t.l.a(r))}},
cD(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.h===$.x){a.$1(b)
return}A.h_(null,null,this,a,b,t.q,c)}catch(q){s=A.b2(q)
r=A.aw(q)
A.eb(A.bK(s),t.l.a(r))}},
ci(a){return new A.e0(this,t.M.a(a))},
cj(a,b){return new A.e1(this,b.i("~(0)").a(a),b)},
cA(a,b){b.i("0()").a(a)
if($.x===B.h)return a.$0()
return A.fZ(null,null,this,a,b)},
aH(a,b,c,d){c.i("@<0>").M(d).i("1(2)").a(a)
d.a(b)
if($.x===B.h)return a.$1(b)
return A.h_(null,null,this,a,b,c,d)},
cB(a,b,c,d,e,f){d.i("@<0>").M(e).M(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.x===B.h)return a.$2(b,c)
return A.jq(null,null,this,a,b,c,d,e,f)}}
A.e0.prototype={
$0(){return this.a.cC(this.b)},
$S:0}
A.e1.prototype={
$1(a){var s=this.c
return this.a.cD(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.ec.prototype={
$0(){A.hL(this.a,this.b)},
$S:0}
A.bv.prototype={
gI(a){var s=this,r=new A.aW(s,s.r,A.B(s).i("aW<1>"))
r.c=s.e
return r},
gn(a){return this.a},
k(a,b){var s,r,q=this
A.B(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aQ(s==null?q.b=A.eE():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aQ(r==null?q.c=A.eE():r,b)}else return q.bT(b)},
bT(a){var s,r,q,p=this
A.B(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.eE()
r=p.aV(a)
q=s[r]
if(q==null)s[r]=[p.ap(a)]
else{if(p.b_(q,a)>=0)return!1
q.push(p.ap(a))}return!0},
a0(a,b){var s
if(b!=="__proto__")return this.c8(this.b,b)
else{s=this.c7(b)
return s}},
c7(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aV(a)
r=n[s]
q=o.b_(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.bb(p)
return!0},
aQ(a,b){A.B(this).c.a(b)
if(t.O.a(a[b])!=null)return!1
a[b]=this.ap(b)
return!0},
c8(a,b){var s
if(a==null)return!1
s=t.O.a(a[b])
if(s==null)return!1
this.bb(s)
delete a[b]
return!0},
b0(){this.r=this.r+1&1073741823},
ap(a){var s,r=this,q=new A.cL(A.B(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.b0()
return q},
bb(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.b0()},
aV(a){return J.cX(a)&1073741823},
b_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.f_(a[r].a,b))return r
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
A.A.prototype={
gI(a){return new A.cj(a,this.gn(a),A.ax(a).i("cj<A.E>"))},
az(a,b){return this.C(a,b)},
cr(a,b,c,d){var s
A.ax(a).i("A.E?").a(d)
A.cp(b,c,this.gn(a))
for(s=b;s<c;++s)this.p(a,s,d)},
h(a){return A.et(a,"[","]")},
$in:1,
$iq:1}
A.C.prototype={
S(a,b){var s,r,q,p=A.B(this)
p.i("~(C.K,C.V)").a(b)
for(s=J.f0(this.gU()),p=p.i("C.V");s.A();){r=s.gF()
q=this.C(0,r)
b.$2(r,q==null?p.a(q):q)}},
gn(a){return J.cY(this.gU())},
h(a){return A.ew(this)},
$iF:1}
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
p(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
throw A.d(A.ap("Cannot modify unmodifiable map"))}}
A.be.prototype={
C(a,b){return this.a.C(0,b)},
p(a,b,c){var s=this.$ti
this.a.p(0,s.c.a(b),s.y[1].a(c))},
gn(a){var s=this.a
return s.gn(s)},
h(a){return this.a.h(0)},
$iF:1}
A.aS.prototype={}
A.a6.prototype={
h(a){return A.et(this,"{","}")},
T(a,b){var s,r,q,p,o=this.gI(this)
if(!o.A())return""
s=o.d
r=J.b3(s==null?o.$ti.c.a(s):s)
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
A.bz.prototype={}
A.bF.prototype={}
A.e9.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:7}
A.e8.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:7}
A.bV.prototype={
cw(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.cp(a4,a5,a2)
s=$.ht()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.b(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.b(a3,k)
h=A.ei(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.b(a3,g)
f=A.ei(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.G("")
g=o}else g=o
g.a+=B.a.j(a3,p,q)
c=A.an(j)
g.a+=c
p=k
continue}}throw A.d(A.E("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.j(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.f2(a3,m,a5,n,l,r)
else{b=B.d.O(r-1,4)+1
if(b===1)throw A.d(A.E(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.Z(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.f2(a3,m,a5,n,l,a)
else{b=B.d.O(a,4)
if(b===1)throw A.d(A.E(a1,a3,a5))
if(b>1)a3=B.a.Z(a3,a5,a5,b===2?"==":"=")}return a3}}
A.d_.prototype={}
A.aD.prototype={}
A.c_.prototype={}
A.c3.prototype={}
A.cB.prototype={}
A.dH.prototype={
cn(a){return new A.e7(this.a).c_(t.L.a(a),0,null,!0)}}
A.e7.prototype={
c_(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.cp(b,c,J.cY(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.iU(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.iT(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.aj(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.iV(o)
l.b=0
throw A.d(A.E(m,a,p+l.c))}return n},
aj(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.cd(b+c,2)
r=q.aj(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.aj(a,s,c,d)}return q.cp(a,b,c,d)},
cp(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.G(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.fl(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.an(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.dO.prototype={
h(a){return this.P()}}
A.p.prototype={
ga2(){return A.hZ(this)}}
A.bS.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.d2(s)
return"Assertion failed"}}
A.a7.prototype={}
A.W.prototype={
gam(){return"Invalid argument"+(!this.a?"(s)":"")},
gal(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gam()+q+o
if(!s.a)return n
return n+s.gal()+": "+A.d2(s.gaC())},
gaC(){return this.b}}
A.bk.prototype={
gaC(){return A.fQ(this.b)},
gam(){return"RangeError"},
gal(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.cc.prototype={
gaC(){return A.bJ(this.b)},
gam(){return"RangeError"},
gal(){if(A.bJ(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.bq.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.cx.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bn.prototype={
h(a){return"Bad state: "+this.a}}
A.bZ.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.d2(s)+"."}}
A.cl.prototype={
h(a){return"Out of Memory"},
ga2(){return null},
$ip:1}
A.bm.prototype={
h(a){return"Stack Overflow"},
ga2(){return null},
$ip:1}
A.dQ.prototype={
h(a){return"Exception: "+this.a}}
A.a1.prototype={
h(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.j(e,0,75)+"..."
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
k=""}return g+l+B.a.j(e,i,j)+k+"\n"+B.a.t(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.m(f)+")"):g}}
A.n.prototype={
gn(a){var s,r=this.gI(this)
for(s=0;r.A();)++s
return s},
az(a,b){var s,r
A.fh(b,"index")
s=this.gI(this)
for(r=b;s.A();){if(r===0)return s.gF();--r}throw A.d(A.es(b,b-r,this,"index"))},
h(a){return A.hN(this,"(",")")}}
A.K.prototype={
gu(a){return A.o.prototype.gu.call(this,0)},
h(a){return"null"}}
A.o.prototype={$io:1,
N(a,b){return this===b},
gu(a){return A.cn(this)},
h(a){return"Instance of '"+A.co(this)+"'"},
gL(a){return A.jH(this)},
toString(){return this.h(this)}}
A.cO.prototype={
h(a){return""},
$iaQ:1}
A.G.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ii5:1}
A.dG.prototype={
$2(a,b){var s,r,q,p
t.f.a(a)
A.aa(b)
s=B.a.bn(b,"=")
if(s===-1){if(b!=="")a.p(0,A.eJ(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.j(b,0,s)
q=B.a.W(b,s+1)
p=this.a
a.p(0,A.eJ(r,0,r.length,p,!0),A.eJ(q,0,q.length,p,!0))}return a},
$S:17}
A.dF.prototype={
$2(a,b){throw A.d(A.E("Illegal IPv6 address, "+a,this.a,b))},
$S:18}
A.bG.prototype={
gb8(){var s,r,q,p,o=this,n=o.w
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
gu(a){var s,r=this,q=r.y
if(q===$){s=B.a.gu(r.gb8())
r.y!==$&&A.hd()
r.y=s
q=s}return q},
gbv(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.ft(s==null?"":s)
r.z!==$&&A.hd()
q=r.z=new A.aS(s,t.W)}return q},
gbB(){return this.b},
gaB(a){var s=this.c
if(s==null)return""
if(B.a.D(s,"[")&&!B.a.B(s,"v",1))return B.a.j(s,1,s.length-1)
return s},
gaF(a){var s=this.d
return s==null?A.fE(this.a):s},
gaG(){var s=this.f
return s==null?"":s},
gbi(){var s=this.r
return s==null?"":s},
gbj(){return this.c!=null},
gbl(){return this.f!=null},
gbk(){return this.r!=null},
h(a){return this.gb8()},
N(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.k.b(b))if(p.a===b.gaN())if(p.c!=null===b.gbj())if(p.b===b.gbB())if(p.gaB(0)===b.gaB(b))if(p.gaF(0)===b.gaF(b))if(p.e===b.gbu(b)){r=p.f
q=r==null
if(!q===b.gbl()){if(q)r=""
if(r===b.gaG()){r=p.r
q=r==null
if(!q===b.gbk()){s=q?"":r
s=s===b.gbi()}}}}return s},
$icz:1,
gaN(){return this.a},
gbu(a){return this.e}}
A.dE.prototype={
gbA(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.b(m,0)
s=o.a
m=m[0]+1
r=B.a.aa(s,"?",m)
q=s.length
if(r>=0){p=A.bH(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.cG("data","",n,n,A.bH(s,m,q,128,!1,!1),p,n)}return m},
h(a){var s,r=this.b
if(0>=r.length)return A.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.cN.prototype={
gbj(){return this.c>0},
gbl(){return this.f<this.r},
gbk(){return this.r<this.a.length},
gaN(){var s=this.w
return s==null?this.w=this.bZ():s},
bZ(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.D(r.a,"http"))return"http"
if(q===5&&B.a.D(r.a,"https"))return"https"
if(s&&B.a.D(r.a,"file"))return"file"
if(q===7&&B.a.D(r.a,"package"))return"package"
return B.a.j(r.a,0,q)},
gbB(){var s=this.c,r=this.b+3
return s>r?B.a.j(this.a,r,s-1):""},
gaB(a){var s=this.c
return s>0?B.a.j(this.a,s,this.d):""},
gaF(a){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.jO(B.a.j(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.D(r.a,"http"))return 80
if(s===5&&B.a.D(r.a,"https"))return 443
return 0},
gbu(a){return B.a.j(this.a,this.e,this.f)},
gaG(){var s=this.f,r=this.r
return s<r?B.a.j(this.a,s+1,r):""},
gbi(){var s=this.r,r=this.a
return s<r.length?B.a.W(r,s+1):""},
gbv(){if(this.f>=this.r)return B.ac
return new A.aS(A.ft(this.gaG()),t.W)},
gu(a){var s=this.x
return s==null?this.x=B.a.gu(this.a):s},
N(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.h(0)},
h(a){return this.a},
$icz:1}
A.cG.prototype={}
A.e.prototype={}
A.bP.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.bQ.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.ag.prototype={$iag:1}
A.ah.prototype={
sbm(a,b){a.height=b},
sbC(a,b){a.width=b},
ae(a,b){return a.getContext(b)},
$iah:1}
A.b4.prototype={$ib4:1}
A.ai.prototype={
sl(a,b){a.fillStyle=b},
sv(a,b){a.strokeStyle=b},
ag(a,b){return a.stroke(b)},
$iai:1}
A.X.prototype={
gn(a){return a.length}}
A.aF.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.d1.prototype={}
A.c1.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.c2.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.y.prototype={
gbh(a){return new A.cH(a)},
h(a){var s=a.localName
s.toString
return s},
gaD(a){return new A.H(a,"mousedown",!1,t.C)},
gbr(a){return new A.H(a,"mouseleave",!1,t.C)},
gbs(a){return new A.H(a,"touchcancel",!1,t.S)},
gbt(a){return new A.H(a,"touchend",!1,t.S)},
gaE(a){return new A.H(a,"touchstart",!1,t.S)},
$iy:1}
A.a.prototype={$ia:1}
A.w.prototype={
bV(a,b,c,d){return a.addEventListener(b,A.bN(t.B.a(c),1),!1)},
$iw:1}
A.c8.prototype={
gn(a){return a.length}}
A.a4.prototype={$ia4:1}
A.I.prototype={$iI:1}
A.l.prototype={
h(a){var s=a.nodeValue
return s==null?this.bP(a):s},
saI(a,b){a.textContent=b},
$il:1}
A.aO.prototype={
bf(a,b,c,d,e,f,g){return a.arc(b,c,d,e,f,!1)},
$iaO:1}
A.cs.prototype={
gn(a){return a.length}}
A.Z.prototype={$iZ:1}
A.a9.prototype={}
A.aT.prototype={
bw(a,b){var s
t.G.a(b)
this.c4(a)
s=A.h3(b,t.H)
s.toString
return this.c9(a,s)},
c9(a,b){var s=a.requestAnimationFrame(A.bN(t.G.a(b),1))
s.toString
return s},
c4(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.aU.prototype={$iaU:1}
A.bw.prototype={
gn(a){var s=a.length
s.toString
return s},
C(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.es(b,s,a,null))
s=a[b]
s.toString
return s},
p(a,b,c){t.a1.a(c)
throw A.d(A.ap("Cannot assign element of immutable List."))},
az(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$iam:1,
$in:1,
$iq:1}
A.cE.prototype={
S(a,b){var s,r,q,p,o,n
t.Y.a(b)
for(s=this.gU(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.cW)(s),++p){o=s[p]
n=q.getAttribute(o)
b.$2(o,n==null?A.aa(n):n)}},
gU(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.r([],t.s)
for(r=m.length,q=t.x,p=0;p<r;++p){if(!(p<m.length))return A.b(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.c.k(s,n)}}return s}}
A.bs.prototype={
C(a,b){return this.a.getAttribute(A.aa(b))},
p(a,b,c){this.a.setAttribute(b,c)},
gn(a){return this.gU().length}}
A.br.prototype={
C(a,b){return this.a.a.getAttribute("data-"+this.E(A.aa(b)))},
p(a,b,c){this.a.a.setAttribute("data-"+this.E(b),c)},
S(a,b){this.a.S(0,new A.dM(this,t.Y.a(b)))},
gU(){var s=A.r([],t.s)
this.a.S(0,new A.dN(this,s))
return s},
gn(a){return this.gU().length},
ba(a){var s,r,q=A.r(a.split("-"),t.s)
for(s=1;s<q.length;++s){r=q[s]
if(r.length>0)B.c.p(q,s,r[0].toUpperCase()+B.a.W(r,1))}return B.c.T(q,"")},
E(a){var s,r,q,p,o
for(s=a.length,r=0,q="";r<s;++r){p=a[r]
o=p.toLowerCase()
q=(p!==o&&r>0?q+"-":q)+o}return q.charCodeAt(0)==0?q:q}}
A.dM.prototype={
$2(a,b){if(B.a.D(a,"data-"))this.b.$2(this.a.ba(B.a.W(a,5)),b)},
$S:8}
A.dN.prototype={
$2(a,b){if(B.a.D(a,"data-"))B.c.k(this.b,this.a.ba(B.a.W(a,5)))},
$S:8}
A.cH.prototype={
Y(){var s,r,q,p,o=A.fc(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=B.a.aL(s[q])
if(p.length!==0)o.k(0,p)}return o},
aM(a){this.a.className=t.at.a(a).T(0," ")},
gn(a){var s=this.a.classList.length
s.toString
return s},
a0(a,b){var s=this.a.classList,r=s.contains(b)
r.toString
s.remove(b)
return r},
aK(a,b,c){var s=A.eD(this.a,b,c)
return s}}
A.er.prototype={}
A.bt.prototype={}
A.H.prototype={}
A.cJ.prototype={}
A.dP.prototype={
$1(a){return this.a.$1(t.z.a(a))},
$S:9}
A.aH.prototype={
gI(a){return new A.c7(a,a.length,A.ax(a).i("c7<aH.E>"))}}
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
A.c0.prototype={
bd(a){var s=$.hg()
if(s.b.test(a))return a
throw A.d(A.ep(a,"value","Not a valid class token"))},
h(a){return this.Y().T(0," ")},
aK(a,b,c){var s
this.bd(b)
s=this.Y()
if(c)s.k(0,b)
else s.a0(0,b)
this.aM(s)
return c},
gI(a){var s=this.Y()
return A.ij(s,s.r,A.B(s).c)},
gn(a){return this.Y().a},
a0(a,b){var s,r
this.bd(b)
s=this.Y()
r=s.a0(0,b)
this.aM(s)
return r}}
A.bU.prototype={
Y(){var s,r,q,p,o=this.a.getAttribute("class"),n=A.fc(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=B.a.aL(s[q])
if(p.length!==0)n.k(0,p)}return n},
aM(a){this.a.setAttribute("class",a.T(0," "))}}
A.c.prototype={
gbh(a){return new A.bU(a)},
gaD(a){return new A.H(a,"mousedown",!1,t.C)},
gbr(a){return new A.H(a,"mouseleave",!1,t.C)},
gbs(a){return new A.H(a,"touchcancel",!1,t.S)},
gbt(a){return new A.H(a,"touchend",!1,t.S)},
gaE(a){return new A.H(a,"touchstart",!1,t.S)}}
A.cu.prototype={
ck(){var s,r=this,q=r.b,p=new A.d7(q,r.gc6())
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
A.J(s,"click",p.i("~(1)?").a(new A.dm(r)),!1,p.c)
r.b5()
p=window
p.toString
A.J(p,"resize",t.cx.a(new A.dn(r)),!1,t.z)
if(!r.f&&r.e){q.aO(0)
r.c.by()}q=document.documentElement
q.toString
q.setAttribute("data-"+new A.br(new A.bs(q)).E("ready"),"1")
q=window
q.toString
B.M.bw(q,r.gb9())},
b5(){var s,r,q,p,o=window.innerWidth
if(o==null)o=1600
s=window.innerHeight
if(s==null)s=766
r=window.devicePixelRatio
r.toString
q=this.c
q.e=r
p=q.a
B.k.sbC(p,B.f.bz(o*r))
B.k.sbm(p,B.f.bz(s*r))
r=p.style
r.width=""+o+"px"
r=p.style
r.height=""+s+"px"
q.d=A.h8(o,s)},
cf(a){var s,r,q,p,o,n,m,l=this,k=A.fP(a)/1000,j=l.r,i=j===0?0.016666666666666666:Math.min(0.033,Math.max(0,k-j))
l.r=k
j=l.b
s=l.c
r=s.c
if(l.f){q=j.a1()
j=q.ch
r.e=A.bO(q.as,j)
r.f=A.bO(q.at,j)
s.a8(0,q)
l.d.K(q)
l.bc(q)}else{j.K(i)
s.aA(j.cE())
q=j.a1()
j=q.as
p=q.ch
o=A.bO(j,p)
n=q.at
m=A.bO(n,p)
if(r.e==null||r.f==null){r.e=o
r.f=m}else{j=Math.exp(-r.b3(j.e)*i)
n=Math.exp(-r.b3(n.e)*i)
p=r.e
p.toString
r.e=A.ez(p,o,1-j)
j=r.f
j.toString
r.f=A.ez(j,m,1-n)}r.b.K(i)
s.a8(i,q)
l.d.K(q)
l.bc(q)}j=window
j.toString
B.M.bw(j,l.gb9())},
b1(){var s,r,q,p=this,o=document.body
if(o!=null){s=o.classList
s.contains("preview").toString
s.remove("preview")}o=p.b
r=o.a1()
if(!r.ax){o.aO(0)
p.f=!1}else if(r.a===B.t){o.r=!0
o.w=0
q=A.ex(o.f,++o.e)
o.b=q
o.x=q.e
q=o.e
if(o.a.a)A.eV("rematch seed="+q,"spear")
p.f=!1}else return
p.c.by()
p.d.K(o.a1())},
bc(a){var s,r,q=document.documentElement
q.toString
s=new A.br(new A.bs(q))
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
r=B.f.aJ(a.ch,2)
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
co(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=new A.c6()
if(!l.b||b.e===B.j||c.e===B.j)return k
s=b.e
if(s===B.p||s===B.m||s===B.q||s===B.n||s===B.o)return k
s=l.r-=a
if((l.w-=a)<=0)l.x=!1
k.d=l.x
if(s>0){s=l.y
k.a=s>0
k.b=s<0
return k}s=l.a
l.r=l.c*(0.75+s.q()/4294967296*0.5)
r=Math.abs(c.c-b.c)
q=r<=3.2
p=c.e
o=p===B.p||p===B.m
n=p===B.q||p===B.n||p===B.o
m=p===B.i
p=l.f
if(s.q()/4294967296<p){l.x=!1
l.y=0
k.d=!1
return k}p=!1
if(o)if(r<=3.7){p=l.e
p=s.q()/4294967296<p}if(p){l.x=!0
l.w=0.26+s.q()/4294967296*0.24
l.y=0
k.d=!0
return k}if(q)if(!n){p=l.d
p=s.q()/4294967296<p}else p=!0
else p=!1
if(p)if(!m||s.q()/4294967296<0.3){k.c=!0
l.x=!1
l.y=0
return k}if(!q)s=l.y=1
else{p=-1
if(r<2.6300000000000003){l.y=-1
s=p}else if(m&&s.q()/4294967296<0.45){l.y=-1
s=p}else if(s.q()/4294967296<0.22){l.y=-1
s=p}else if(s.q()/4294967296<0.22){l.y=0
s=0}else{l.y=1
s=1}}k.a=s>0
k.b=s<0
return k}}
A.aE.prototype={
P(){return"CombatOutcome."+this.b}}
A.aj.prototype={}
A.P.prototype={
P(){return"FighterState."+this.b}}
A.c5.prototype={
gab(){var s=this.e
return s===B.p||s===B.m||s===B.q},
ga7(){var s=this.e
return s!==B.j&&s!==B.n&&s!==B.o&&this.z<=0},
bx(a,b){var s=this
s.c=b
s.d=5
s.e=B.e
s.z=s.y=s.x=s.w=s.r=s.f=0
s.Q=0.5
s.ay=s.ax=s.at=s.as=!1},
bM(){var s=this
if(!s.ga7()||s.x>0||s.gab())return
s.e=B.p
s.f=0
s.x=0.7
s.as=s.at=!1},
bN(){var s=this
if(!s.ga7()||s.gab())return
s.as=!0
if(s.e!==B.i){s.e=B.i
s.y=s.f=0}},
bg(){var s=this
s.z=Math.max(s.z,0.12)
s.c=s.c+-s.b*0.05},
bL(a){var s=this
if(s.e===B.j)return
s.e=B.o
s.f=0
s.z=s.Q=a
s.at=s.as=!1
s.c=s.c+-s.b*0.12},
K(a){var s=this,r=s.f+=a
s.x=Math.max(0,s.x-a)
s.z=Math.max(0,s.z-a)
switch(s.e.a){case 2:if(r>=0.18){s.e=B.m
s.f=0}break
case 3:if(r>=0.12){s.e=B.q
s.f=0}break
case 4:if(r>=0.35){s.e=B.e
s.f=0}break
case 6:if(r>=0.25){s.e=B.e
s.f=0}break
case 7:if(r>=s.Q){s.e=B.e
s.f=0}break
case 5:s.y+=a
if(!s.as){s.e=B.e
s.f=0}break
case 0:case 1:case 8:break}},
be(a,b){var s,r,q,p=this,o=p.e
if(o===B.j||o===B.n||o===B.o||p.z>0)return
if(a.c&&p.ga7()&&p.x<=0){p.bM()
return}if(a.d&&p.ga7())p.bN()
else if(o===B.i){p.as=!1
p.e=B.e
p.f=0}o=p.e
if(o===B.e||o===B.l||o===B.i){s=a.a?1:0
r=s-(a.b?1:0)
if(r!==0){if(p.w===0)p.r=0
p.w=r
s=o===B.i
q=s?0.45:1.1
p.c=p.c+p.b*r*q*b
if(!s)o=p.e=B.l
s=p.r
p.r=s+b*(o===B.i?5:8)}else{p.w=0
if(o===B.l){p.e=B.e
p.f=0}p.r=p.r+b*1.5}}},
sbO(a){this.f=A.cS(a)}}
A.d3.prototype={}
A.cb.prototype={
aO(a){var s,r=this
if(r.r)return
r.r=!0
r.w=0
s=A.ex(r.f,r.e)
r.b=s
r.x=s.e
s=r.e
if(r.a.a)A.eV("match start seed="+s,"spear")},
bI(a){this.c.a=a},
bE(a){this.c.b=a},
bG(a){this.c.d=a},
K(a){var s,r,q,p,o,n=this
if(!n.r){n.w+=a
return}n.w+=a
s=n.b
s===$&&A.k()
s.cI(a,n.c)
s=n.x
r=n.b
q=r.e
if(s!==q){n.x=q
s=r.w
if(n.a.a)A.eV("phase "+q.b+" round "+s,"spear")}s=r.ax
p=A.fe(s,t.D)
B.c.av(s)
s=p.length
if(s===0)return
for(o=0;o<s;++o);B.c.cg(n.d,p)},
cE(){var s,r=this.d
if(r.length===0)return B.ab
s=A.fe(r,t.D)
B.c.av(r)
return s},
a1(){var s,r,q,p,o,n,m=this.b
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
scG(a){this.w=A.cS(a)}}
A.c6.prototype={}
A.aM.prototype={
P(){return"MatchPhase."+this.b}}
A.aN.prototype={
P(){return"MatchResult."+this.b}}
A.c4.prototype={
P(){return"EndReason."+this.b}}
A.a2.prototype={
P(){return"GameEventType."+this.b}}
A.Q.prototype={}
A.dd.prototype={
af(a){var s,r,q=this
q.w=a
q.e=B.A
q.z=0
q.Q=30
q.f=B.C
q.r=B.r
s=q.c
s===$&&A.k()
s.bx(0,-1.6)
s=q.d
s===$&&A.k()
s.bx(0,1.6)
s=q.b
r=A.ab((a-1)/9,0,1)
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
B.c.k(q.ax,new A.Q(B.a_,a,0,0,s))},
cI(a,b){var s,r,q,p,o,n,m,l=this,k=l.e
if(k===B.t)return
s=l.z+=a
l.at=Math.max(0,l.at-a)
switch(k.a){case 0:if(s>=1.2){l.e=B.B
l.z=0
l.as="FIGHT"
l.at=0.6
B.c.k(l.ax,B.a6)}break
case 1:l.Q=Math.max(0,l.Q-a)
k=l.d
k===$&&A.k()
s=l.c
s===$&&A.k()
r=l.b.co(a,k,s,!0)
s.be(b,a)
k.be(r,a)
r.c=b.c=!1
s.K(a)
k.K(a)
q=l.b2(s,k)
p=l.b2(k,s)
if(q!=null)l.aS(q,s,k)
if(p!=null)l.aS(p,k,s)
s.c=A.ab(s.c,-3.2,-0.7)
o=k.c=A.ab(k.c,0.7,3.2)
n=s.c
if(o-n<2.45){m=(n+o)/2
s.c=A.ab(m-1.225,-3.2,-0.7)
k.c=A.ab(m+1.225,0.7,3.2)}if(s.d<=0||k.d<=0)l.aZ(B.r)
else if(l.Q<=0)l.aZ(B.Z)
break
case 2:if(s>=2)l.bW()
break
case 3:break}},
b2(a,b){var s
if(a.e!==B.m||a.at)return null
s=A.jW(a,b)
if(s.a===B.u)return null
a.at=!0
return s},
aS(a,b,c){var s,r,q=this
switch(a.a.a){case 1:b.ay=!0
s=Math.max(0,c.d-1)
c.d=s
c.ax=!0
c.e=s<=0?B.j:B.n
c.z=c.f=0
c.at=c.as=!1
r=c.c+-c.b*0.18
c.c=r
B.c.k(q.ax,new A.Q(B.a1,q.w,r,2,"HIT"))
break
case 2:c.bg()
B.c.k(q.ax,new A.Q(B.a2,q.w,c.c,2,"BLOCK"))
break
case 3:c.bg()
b.bL(0.5)
B.c.k(q.ax,new A.Q(B.a3,q.w,c.c,2,"PARRY"))
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
B.c.k(n.ax,new A.Q(B.a4,n.w,0,0,r))},
bW(){var s,r=this,q=r.x
if(q>=6||r.y>=6){r.ak()
return}s=r.w
if(s>=10){if(q===r.y){if(r.ay){r.ak()
return}r.ay=!0
r.af(s+1)
return}r.ak()
return}r.af(s+1)},
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
B.c.k(q.ax,new A.Q(B.a5,q.w,0,0,s))}}
A.h.prototype={
m(a,b){return new A.h(this.a+b.a,this.b+b.b)},
V(a,b){return new A.h(this.a-b.a,this.b-b.b)},
t(a,b){return new A.h(this.a*b,this.b*b)},
gn(a){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
ga_(){var s=this.gn(0)
if(s<1e-9)return B.H
return new A.h(this.a/s,this.b/s)},
ad(a,b){var s=this.a,r=this.b
return new A.h(s+(a.a-s)*b,r+(a.b-r)*b)},
h(a){return"Vec2("+A.m(this.a)+", "+A.m(this.b)+")"},
N(a,b){if(b==null)return!1
return b instanceof A.h&&b.a===this.a&&b.b===this.b},
gu(a){return A.hX(this.a,this.b)}}
A.d5.prototype={}
A.cq.prototype={
q(){var s=this.a
s^=s<<13
s^=s>>>17
return this.a=(s^s<<5)>>>0}}
A.cZ.prototype={
a8(a,b){var s,r,q,p,o=this
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
B.b.sl(a,r)
a.fillRect(q,0,p,119)
B.b.sl(a,s)
a.fillRect(q,673,p,93)
a.restore()}}
A.c9.prototype={}
A.bj.prototype={}
A.df.prototype={
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=800+a*100,e=673-b*100
for(s=this.b,r=this.a,q=0;q<15;++q){p=-3.141592653589793+s.q()/4294967296*3.5915926535897933
o=70+s.q()/4294967296*250
n=s.q()
m=s.q()
l=Math.cos(p)
k=Math.sin(p)
j=s.q()
i=s.q()
h=B.d.O(q,3)
A:{if(0===h){g="#a32323"
break A}if(1===h){g="#6e1414"
break A}g="#4a0c0c"
break A}B.c.k(r,new A.bj(f+(-16+n/4294967296*32),e+(-16+m/4294967296*32),l*o,k*o,0+j/4294967296*6.283185307179586,-16+i/4294967296*32,g,4+s.q()/4294967296*10,!0))}},
b7(a,b,c){var s,r,q,p,o,n,m,l,k=800+a*100,j=673-b*100,i=c?6:9
for(s=this.a,r=this.b,q=0;q<i;++q){p=-3.141592653589793+r.q()/4294967296*3.491592653589793
o=90+r.q()/4294967296*170
if(c)n="#f6ead6"
else{m=B.d.O(q,3)
A:{if(0===m){l="#f0e0c7"
break A}if(1===m){l="#b85b3a"
break A}l="#1a0c08"
break A}n=l}B.c.k(s,new A.bj(k+(-12+r.q()/4294967296*24),j+(-12+r.q()/4294967296*24),Math.cos(p)*o,Math.sin(p)*o,0+r.q()/4294967296*6.283185307179586,-12+r.q()/4294967296*24,n,5+r.q()/4294967296*8,!1))}},
K(a){var s,r,q,p,o,n,m
for(s=this.a,r=s.length-1,q=760*a,p=a/0.72,o=s.$flags|0;r>=0;--r){n=s.length
if(!(r<n))return A.b(s,r)
m=s[r]
if((m.r-=p)<=0){o&1&&A.aA(s,"removeAt",1)
if(r>=n)A.b1(A.fg(r,null))
s.splice(r,1)[0]
continue}n=m.d+=q
m.a=m.a+m.c*a
m.b=m.b+n*a
m.e=m.e+m.f*a}},
cq(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.cW)(s),++q){p=s[q]
a.save()
a.translate(p.a,p.b)
a.rotate(p.e)
a.globalAlpha=A.ab(p.r,0,1)
B.b.sl(a,p.w)
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
A.dR.prototype={}
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
a8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.f=Math.max(0,g.f-a)
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
p.a.a8(o,g.d)
p.c3(o)
j=p.e
if(j==null)j=A.bO(b.as,b.ch)
i=p.f
if(i==null)i=A.bO(b.at,b.ch)
f=b.as
h=f.gab()
r=b.at
if(r.gab()&&!h){q=p.c
q===$&&A.k()
q.a9(o,f,j)
f=p.d
f===$&&A.k()
f.a9(o,r,i)}else{q=p.d
q===$&&A.k()
q.a9(o,r,i)
r=p.c
r===$&&A.k()
r.a9(o,f,j)}p.b.cq(o)
if(g.w>0){o.setTransform(1,0,0,1,0,0)
B.b.sl(o,"rgba(110, 20, 20, "+B.f.aJ(0.12*(g.w/0.14),3)+")")
f=n.width
if(f==null)f=0
n=n.height
o.fillRect(0,0,f,n==null?0:n)}},
by(){var s=this.c
B.c.av(s.b.a)
s.f=s.e=null
this.f=this.w=0}}
A.dj.prototype={
b3(a){var s=30
switch(a.a){case 0:s=20
break
case 1:s=24
break
case 2:s=40
break
case 3:s=80
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
r.b7(o,n,!1)
r.bK(o,n)
break
case 3:case 4:r.b7(p.c,p.d,!0)
break
case 0:case 1:case 5:case 6:break}}},
c3(a){var s,r,q,p,o,n,m
a.save()
a.font='500 18px "Palatino Linotype", Palatino, "Times New Roman", serif'
B.b.sl(a,"rgba(42, 20, 14, 0.84)")
a.textBaseline="middle"
s=A.r([],t.cw)
for(r="HOMER".split(""),q=r.length,p=0;p<q;++p){o=a.measureText(r[p]).width
s.push(o==null?0:o)}n=800-(B.c.cz(s,new A.dk())+48)/2
for(m=0;m<5;++m){a.fillText("HOMER"[m],n,146)
if(!(m<s.length))return A.b(s,m)
n+=s[m]+12}a.restore()}}
A.dk.prototype={
$2(a,b){return A.cS(a)+A.cS(b)},
$S:20}
A.ct.prototype={
P(){return"ShieldDevice."+this.b}}
A.cC.prototype={
a9(c9,d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7="rgba(26, 12, 8, 0.24)",b8="#1a0c08",b9="#f0e0c7",c0=b6.x=d0.b,c1=1.15-d1.b,c2=new A.h(0,c1+0.87),c3=c2.m(0,d1.d),c4=c2.m(0,d1.r).m(0,b6.f),c5=b6.r,c6=d1.w,c7=Math.cos(c6),c8=Math.sin(c6)
c6=c5.a
c5=c5.b
s=c4.m(0,new A.h(c6*c7-c5*c8,c6*c8+c5*c7))
r=0.095+d1.e
q=A.eX(c2,c3,0.34,0.44,-1).b
p=q.m(0,B.ar)
c5=d0.c
c6=d1.ay
c9.save()
c9.translate(800+c5*100+c0*c6*100,673-d1.ch*100)
c9.scale(c0*100,-100)
c9.rotate(d1.z)
b6.aY(c9,new A.h(-0.18,c1),d1.Q.m(0,new A.h(b6.w,0)),-1,d1.at)
b6.aY(c9,new A.h(0.02,c1),d1.as,1,d1.ax)
c9.save()
c0=d1.a
c6=d1.c
c9.translate(0,c1)
c9.rotate(c0)
c9.translate(0,-c1)
c9.translate(c6,0)
b6.c0(c9,c2,c4,0.34,0.34,-1)
o=A.D()
o.moveTo(-0.23,c1)
o.lineTo(-0.28,c1+0.55)
c6=c1+0.8
o.quadraticCurveTo(-0.26,c6,-0.11,c1+0.88)
c0=c1+0.9
o.lineTo(0.1,c0)
c5=c1+0.86
n=c1+0.66
o.quadraticCurveTo(0.25,c5,0.27,n)
m=c1+0.1
o.lineTo(0.22,m)
o.lineTo(0.14,c1)
o.closePath()
c9.save()
c9.translate(0.02*b6.x,-0.03)
B.b.sl(c9,b7)
c9.fill(o)
c9.restore()
l=c9.createLinearGradient(0,c1,0,c0)
l.addColorStop(0,"#9a4020")
l.addColorStop(1,"#873311")
B.b.sl(c9,l)
c9.fill(o)
k=A.D()
k.moveTo(-0.13,c0)
j=c1+0.84
k.quadraticCurveTo(0.06,c1+0.94,0.23,j)
k.lineTo(0.25,n)
k.quadraticCurveTo(0.13,c1+0.58,0.06,c1+0.62)
k.lineTo(-0.02,c6)
k.closePath()
B.b.sl(c9,b8)
c9.fill(k)
i=b6.R(-0.27,c1+0.02,0.54,0.08,0.02)
B.b.sl(c9,"#6d280e")
c9.fill(i)
b6.an(c9,0.24,m,0.035,b9,!1)
b6.c1(c9,c1)
m=c1+0.08
c6=c1-0.5
h=new A.h(-0.48,c6)
g=h.V(0,new A.h(-0.12,m)).ga_()
n=g.b
f=-n
e=g.a
o=A.D()
d=f*0.06
c=e*0.06
o.moveTo(-0.12+d,m+c)
b=f*0.05
a=e*0.05
o.lineTo(-0.48+b,c6+a)
a0=e*0.1
o.lineTo(-0.48+a0,c6+n*0.1)
o.lineTo(-0.48-b,c6-a)
o.lineTo(-0.12-d,m-c)
o.closePath()
b6.H(c9,o,"#6d280e")
b6.X(c9,-0.12,m,0.055,b8)
B.b.sv(c9,b8)
c9.lineWidth=0.03
c9.beginPath()
c=f*0.1
c9.moveTo(-0.12-c,m-a0)
c9.lineTo(-0.12+c,m+a0)
c9.stroke()
B.b.sv(c9,b9)
c9.lineWidth=0.012
a1=h.m(0,g.t(0,-0.1))
c9.beginPath()
a0=a1.a
f*=0.055
m=a1.b
e*=0.055
c9.moveTo(a0+f,m+e)
c9.lineTo(a0-f,m-e)
c9.stroke()
o=A.D()
o.moveTo(-0.1,j)
o.lineTo(0.1,j)
j=c1+1.34
o.lineTo(0.075,j)
o.lineTo(-0.075,j)
o.closePath()
b6.H(c9,o,"#7b3d25")
a2=A.D()
a2.moveTo(0.015,c0)
a2.lineTo(0.065,c0)
c0=c1+1.31
a2.lineTo(0.05,c0)
a2.lineTo(0.01,c0)
a2.closePath()
B.b.sl(c9,"#95502f")
c9.fill(a2)
a3=b6.R(-0.13,c5,0.26,0.09,0.02)
B.b.sl(c9,b8)
c9.fill(a3)
B.b.sv(c9,b9)
c9.lineWidth=0.012
c9.beginPath()
c5=c1+0.955
c9.moveTo(-0.11,c5)
c9.lineTo(0.11,c5)
c9.stroke()
c9.save()
c9.translate(0.08,c1+1.57)
c9.rotate(d1.x)
a4=A.D()
a4.moveTo(-0.24,-0.1)
a4.bezierCurveTo(-0.32,0.1,-0.22,0.32,0.02,0.32)
a4.bezierCurveTo(0.2,0.32,0.28,0.18,0.26,0.06)
a4.lineTo(0.22,-0.02)
a4.lineTo(0.26,-0.14)
a4.lineTo(0.18,-0.16)
a4.lineTo(0.13,-0.24)
a4.lineTo(-0.02,-0.26)
a4.lineTo(-0.18,-0.19)
a4.closePath()
c9.save()
c9.translate(0.02*b6.x,-0.03)
B.b.sl(c9,b7)
c9.fill(a4)
c9.restore()
B.b.sl(c9,b8)
c9.fill(a4)
c9.save()
c9.clip(a4)
a5=c9.createRadialGradient(-0.08,0.1,0.02,-0.02,0.02,0.42)
a5.addColorStop(0,"rgba(96, 48, 34, 0.40)")
a5.addColorStop(1,"rgba(18, 8, 6, 0)")
B.b.sl(c9,a5)
c9.fillRect(-0.45,-0.4,0.9,0.85)
c9.restore()
a6=A.D()
a6.moveTo(0.06,0.03)
a6.quadraticCurveTo(0.12,0.06,0.19,0.03)
a6.quadraticCurveTo(0.12,0.005,0.06,0.03)
a6.closePath()
B.b.sl(c9,b9)
c9.fill(a6)
b6.an(c9,0.14,0.03,0.016,b8,!1)
B.b.sv(c9,b9)
c9.lineWidth=0.014
c9.beginPath()
c9.moveTo(0.255,0.08)
c9.lineTo(0.275,-0.12)
c9.stroke()
c9.lineWidth=0.012
c9.beginPath()
c9.moveTo(0.2,-0.1)
c9.quadraticCurveTo(0.15,-0.17,0.09,-0.22)
c9.stroke()
B.b.sl(c9,b8)
c9.fillRect(-0.012,0.3,0.024,0.1)
c9.save()
c9.translate(0,0.3)
c9.rotate(d1.y)
a7=A.D()
a7.moveTo(0.38,0)
a7.bezierCurveTo(0.34,0.12,0.22,0.22,0.08,0.22)
a7.bezierCurveTo(-0.1,0.22,-0.3,0.02,-0.44,-0.15)
a7.bezierCurveTo(-0.28,-0.08,-0.08,-0.02,0.12,0)
a7.bezierCurveTo(0.22,0.02,0.32,0.02,0.38,0)
a7.closePath()
c9.save()
c9.translate(0.02*b6.x,-0.03)
B.b.sl(c9,b7)
c9.fill(a7)
c9.restore()
a8=c9.createLinearGradient(-0.26,0.18,0.12,-0.08)
c5=b6.d
a8.addColorStop(0,c5)
a8.addColorStop(1,b6.c)
B.b.sl(c9,a8)
c9.fill(a7)
B.b.sv(c9,b6.e)
c9.lineWidth=0.012
B.b.ag(c9,a7)
B.b.sv(c9,c5)
c9.lineWidth=0.014
c9.beginPath()
c9.moveTo(0.36,0.02)
c9.bezierCurveTo(0.32,0.12,0.21,0.2,0.08,0.2)
c9.bezierCurveTo(-0.09,0.2,-0.28,0,-0.41,-0.13)
c9.stroke()
c9.restore()
c9.restore()
c5=d1.f
c9.save()
c0=p.a
j=p.b
c9.translate(c0,j)
c9.rotate(r)
a9=-1.47+c5
b0=1.15+c5
B.b.sv(c9,b7)
c9.lineWidth=0.05
c9.lineCap="round"
c9.beginPath()
c9.moveTo(a9+0.02*b6.x,-0.02)
c9.lineTo(b0+0.02*b6.x,-0.02)
c9.stroke()
B.b.sv(c9,b8)
c9.lineWidth=0.045
c9.beginPath()
c9.moveTo(a9,0)
c9.lineTo(b0,0)
c9.stroke()
B.b.sl(c9,b9)
c9.fillRect(-0.055,-0.045,0.11,0.09)
c9.restore()
b6.c2(c9,s,d1,d0.ax)
b6.aW(c9,c2,q,0.34,0.44,-1,!0,r)
c5=d1.f
e=d0.ay
c9.save()
c9.translate(c0,j)
c9.rotate(r)
b1=1.13+c5
b2=1.3+c5
b3=1.5+c5
b4=A.D()
b4.moveTo(b1,-0.055)
b4.quadraticCurveTo(b2,-0.1,b3,0)
b4.quadraticCurveTo(b2,0.1,b1,0.055)
b4.closePath()
b6.H(c9,b4,"#f6ead6")
B.b.sv(c9,"#d8c3a4")
c9.lineWidth=0.012
B.b.ag(c9,b4)
if(e){c9.save()
c9.clip(b4)
b5=A.D()
c0=b1+0.02
b5.moveTo(c0,-0.06)
b5.quadraticCurveTo(b2-0.02,-0.08,b3-0.04,0)
b5.quadraticCurveTo(b2,0.09,c0,0.06)
b5.closePath()
B.b.sl(c9,"#a32323")
c9.fill(b5)
B.b.sl(c9,"#6e1414")
c9.fillRect(b1+0.14,0.025,0.22,0.028)
c9.restore()}c9.restore()
c9.restore()
c9.restore()},
aY(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="#1a0c08",e="#f0e0c7",d=A.eX(a0,a1,0.6,0.64,a2),c=d.a,b=d.b
g.H(a,g.a4(a0,c,0.16,0.12),f)
s=g.a4(c,b,0.11,0.075)
a.save()
a.translate(0.02*g.x,-0.03)
B.b.sl(a,"rgba(26, 12, 8, 0.24)")
a.fill(s)
a.restore()
r=c.a
q=c.b
p=b.a
o=b.b
n=a.createLinearGradient(r,q,p,o)
n.addColorStop(0,"#a25130")
n.addColorStop(1,"#8e4125")
B.b.sl(a,n)
a.fill(s)
m=b.V(0,c).ga_()
l=-m.b
k=m.a
B.b.sv(a,"rgba(232, 170, 130, 0.26)")
a.lineWidth=0.02
a.beginPath()
a.moveTo(r+l*0.05,q+k*0.05)
a.lineTo(p+l*0.032,o+k*0.032)
a.stroke()
B.b.sv(a,f)
a.lineWidth=0.014
a.beginPath()
j=l*0.11
i=k*0.11
a.moveTo(r+j,q+i)
l*=0.075
k*=0.075
a.lineTo(p+l,o+k)
a.lineTo(p-l,o-k)
a.lineTo(r-j,q-i)
a.closePath()
a.stroke()
g.X(a,r,q,0.11,f)
g.aX(a,c,b,0.07,0.11,e,0.016)
g.aX(a,b,c,0.025,0.075,e,0.012)
a.save()
a.translate(p,o)
a.rotate(a3)
a.translate(-p,-o)
h=A.D()
o=p-0.06
h.moveTo(o,0.1)
h.lineTo(p+0.19,0.1)
h.quadraticCurveTo(p+0.27,0.1,p+0.26,0.04)
h.lineTo(o,0.04)
h.closePath()
g.H(a,h,f)
B.b.sv(a,e)
a.lineWidth=0.012
a.beginPath()
a.moveTo(p-0.035,0.105)
a.lineTo(p+0.035,0.105)
a.stroke()
a.restore()},
c1(a,b){var s,r
for(s=b-0.4,r=0;r<7;++r)this.H(a,this.R(-0.36+r*0.112,s,0.085,0.44,0.012),"#f0e0c7")},
c2(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
a.save()
a.translate(b.a,b.b)
a.rotate(a0.w)
a.save()
a.translate(0.02*d.x,-0.03)
B.b.sl(a,"rgba(26, 12, 8, 0.34)")
a.fill(d.G(0,0,c))
a.restore()
B.b.sl(a,"#1a0c08")
a.fill(d.G(0,0,c))
s=-0.16*c
r=a.createRadialGradient(s,s,0.05*c,0,0,c*1.1)
r.addColorStop(0,"#361b13")
r.addColorStop(0.65,"#2a1510")
r.addColorStop(1,"#1d0d09")
B.b.sl(a,r)
s=c*0.84
a.fill(d.G(0,0,s))
B.b.sv(a,"#3a1a12")
a.lineWidth=0.014
B.b.ag(a,d.G(0,0,c*0.88))
for(q=c*0.028,p=0;p<18;++p){o=p/18*3.141592653589793*2+0.06
n=Math.cos(o)
m=Math.sin(o)
B.b.sl(a,"#f0e0c7")
l=A.D()
B.E.bf(l,n*c*0.82,m*c*0.82,q,0,6.283185307179586,!1)
a.fill(l)}if(d.b===B.G){for(q=0.14*c,n=0.09*c,m=0.48*c,k=0.22*c,j=0.6*c,i=-0.22*c,h=-0.09*c,p=0;p<8;++p){a.save()
a.rotate(p/8*3.141592653589793*2)
g=A.D()
g.moveTo(0,0)
g.bezierCurveTo(q,n,m,k,j,0)
g.bezierCurveTo(m,i,q,h,0,0)
g.closePath()
B.b.sl(a,"#b85b3a")
a.fill(g)
a.restore()}B.b.sl(a,"#f0e0c7")
a.fill(d.G(0,0,c*0.13))}else{f=A.D()
f.moveTo(0,0.6*c)
q=-0.5*c
f.lineTo(-0.52*c,q)
f.lineTo(-0.34*c,q)
f.lineTo(0,0.02*c)
f.lineTo(0.34*c,q)
f.lineTo(0.52*c,q)
f.closePath()
B.b.sl(a,"#b85b3a")
a.fill(f)}B.b.sv(a,"rgba(240, 224, 199, 0.08)")
a.lineWidth=c*0.1
a.beginPath()
a.arc(0,0,c*0.72,2.701769682087222,4.838052686528282,!1)
a.stroke()
if(a1){a.save()
a.clip(d.G(0,0,s))
e=A.D()
s=-0.54*c
q=0.12*c
e.moveTo(s,q)
n=0.34*c
e.bezierCurveTo(-0.64*c,0.28*c,-0.42*c,0.44*c,-0.31*c,n)
m=0.3*c
e.bezierCurveTo(-0.19*c,0.47*c,-0.02*c,m,-0.13*c,0.19*c)
e.bezierCurveTo(-0.25*c,0.07*c,-0.44*c,0.03*c,s,q)
e.closePath()
B.b.sl(a,"#a32323")
a.fill(e)
B.b.sl(a,"#6e1414")
q=-0.1*c
a.fill(d.G(q,0.49*c,0.052*c))
a.fill(d.G(0.2*c,0.26*c,0.042*c))
a.fill(d.G(-0.58*c,q,0.036*c))
B.b.sl(a,"#4a0c0c")
a.fill(d.R(-0.37*c,m,0.045*c,n,0.02*c))
a.restore()}a.restore()},
aW(a,b,c,d,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="#1a0c08",g=A.eX(b,c,d,a0,a1),f=g.a,e=g.b
i.X(a,b.a,b.b,0.09,h)
i.H(a,i.a4(b,f,0.072,0.062),h)
i.H(a,i.a4(f,e,0.062,0.052),h)
i.X(a,f.a,f.b,0.052,h)
s=e.a
r=e.b
i.X(a,s,r,0.06,h)
if(a2&&a3!=null){a.save()
a.translate(s,r)
a.rotate(a3)
i.H(a,i.R(-0.075,-0.065,0.15,0.13,0.04),h)
i.H(a,i.R(-0.1,-0.075,0.2,0.15,0.05),h)
B.b.sv(a,"#24110b")
a.lineWidth=0.012
for(q=0;q<3;++q){p=0.015+q*0.025
a.beginPath()
a.moveTo(p,-0.058)
a.lineTo(p+0.008,0.05)
a.stroke()}o=i.R(-0.088,0.03,0.08,0.042,0.018)
B.b.sl(a,"#24110b")
a.fill(o)
a.restore()}else i.X(a,s,r,0.072,h)
n=e.V(0,f).ga_()
m=n.b
l=n.a
B.b.sv(a,"#f0e0c7")
a.lineWidth=0.012
a.beginPath()
k=-m*0.055
j=l*0.045
l*=0.055
m*=0.045
a.moveTo(s+k-j,r+l-m)
a.lineTo(s-k-j,r-l-m)
a.stroke()},
c0(a,b,c,d,e,f){return this.aW(a,b,c,d,e,f,!1,null)},
a4(a,b,c,d){var s,r,q=b.V(0,a).ga_(),p=-q.b,o=q.a,n=A.D(),m=a.a,l=p*c,k=a.b,j=o*c
n.moveTo(m+l,k+j)
s=b.a
p*=d
r=b.b
o*=d
n.lineTo(s+p,r+o)
n.lineTo(s-p,r-o)
n.lineTo(m-l,k-j)
n.closePath()
return n},
aX(a,b,c,d,e,f,g){var s,r,q,p,o=c.V(0,b).ga_(),n=b.m(0,o.t(0,d))
B.b.sv(a,f)
a.lineWidth=g
a.beginPath()
s=n.a
r=-o.b*e
q=n.b
p=o.a*e
a.moveTo(s+r,q+p)
a.lineTo(s-r,q-p)
a.stroke()},
H(a,b,c){a.save()
a.translate(0.02*this.x,-0.03)
B.b.sl(a,"rgba(26, 12, 8, 0.24)")
a.fill(b)
a.restore()
B.b.sl(a,c)
a.fill(b)},
an(a,b,c,d,e,f){var s=this.G(b,c,d)
if(f){a.save()
a.translate(0.02*this.x,-0.03)
B.b.sl(a,"rgba(26, 12, 8, 0.24)")
a.fill(s)
a.restore()}B.b.sl(a,e)
a.fill(s)},
X(a,b,c,d,e){return this.an(a,b,c,d,e,!0)},
G(a,b,c){var s=A.D()
B.E.bf(s,a,b,c,0,6.283185307179586,!1)
return s},
R(a,b,c,d,e){var s,r,q,p,o,n=A.D(),m=Math.min(e,Math.min(c/2,d/2)),l=a+m
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
B.c.k(r,o)
B.c.k(q,n)}},
K(a){var s,r,q,p,o,n,m,l,k,j=this
for(s=j.Q,r=a.r,q=j.z,p=a.f,o=0;o<5;++o){if(!(o<q.length))return A.b(q,o)
A.eD(q[o],"empty",o>=p)
if(!(o<s.length))return A.b(s,o)
A.eD(s[o],"empty",o>=r)}s=j.c
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
J.V(s,"ROUND "+a.d+" / "+a.e)}}m=B.f.cl(a.y/30*100,0,100)
s=j.f
s===$&&A.k()
s=s.style
s.toString
p=B.f.aJ(m,1)
s.width=p+"%"
s=a.ax
l=s&&a.Q>0&&a.z.length!==0&&!n
p=j.r
p===$&&A.k()
J.V(p,a.z)
J.eo(p).aK(0,"show",l)
k=!s||n
p=j.w
p===$&&A.k()
J.eo(p).aK(0,"hidden",!k)
if(!s){s=j.x
s===$&&A.k()
J.V(s,"YOU vs BOT")
s=j.y
s===$&&A.k()
J.V(s,"Red crest vs white crest. First to 6 rounds.")
s=j.as
s===$&&A.k()
B.w.saI(s,"START DUEL")}else if(n){s=j.x
s===$&&A.k()
J.V(s,j.ca(a.b))
s=j.y
s===$&&A.k()
J.V(s,"Round wins "+r+" - "+q)
q=j.as
q===$&&A.k()
B.w.saI(q,"REMATCH")}},
ca(a){var s
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
A.J(q,"keydown",s.a(new A.d8(this)),!1,r)
A.J(q,"keyup",s.a(new A.d9(this)),!1,r)}}
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
if(s.r)s.c.c=!0
break
case"k":case"shift":q.a.a.c.d=!0
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
case"k":case"shift":this.a.a.c.d=!1
break}},
$S:10}
A.dr.prototype={
au(){var s,r,q=this,p=document,o=p.querySelector("#btn-back")
if(o==null)o=t.h.a(o)
s=q.a
q.ai(o,s.gbD())
o=p.querySelector("#btn-forward")
if(o==null)o=t.h.a(o)
q.ai(o,s.gbH())
o=p.querySelector("#btn-block")
if(o==null)o=t.h.a(o)
q.ai(o,s.gbF())
r=p.querySelector("#btn-attack")
if(r==null)r=t.h.a(r)
p=J.cU(r)
o=p.gaD(r)
s=o.$ti
A.J(o.a,o.b,s.i("~(1)?").a(new A.dx(q)),!1,s.c)
p=p.gaE(r)
s=p.$ti
A.J(p.a,p.b,s.i("~(1)?").a(new A.dy(q)),!1,s.c)
s=window
s.toString
A.J(s,"mouseup",t.aC.a(new A.dz(q)),!1,t.V)
s=window
s.toString
p=t.al
o=t.R
A.J(s,"touchend",p.a(new A.dA(q)),!1,o)
s=window
s.toString
A.J(s,"touchcancel",p.a(new A.dB(q)),!1,o)},
ai(a,b){var s,r,q
t.a4.a(b)
s=J.cU(a)
r=s.gaD(a)
q=r.$ti
A.J(r.a,r.b,q.i("~(1)?").a(new A.ds(b)),!1,q.c)
q=s.gbr(a)
r=q.$ti
A.J(q.a,q.b,r.i("~(1)?").a(new A.dt(b)),!1,r.c)
r=s.gaE(a)
q=r.$ti
A.J(r.a,r.b,q.i("~(1)?").a(new A.du(b)),!1,q.c)
q=s.gbt(a)
r=q.$ti
A.J(q.a,q.b,r.i("~(1)?").a(new A.dv(b)),!1,r.c)
s=s.gbs(a)
r=s.$ti
A.J(s.a,s.b,r.i("~(1)?").a(new A.dw(b)),!1,r.c)},
aq(){var s=this.a.c
s.d=s.b=s.a=!1}}
A.dx.prototype={
$1(a){var s
t.V.a(a)
s=this.a.a
if(s.r)s.c.c=!0
return null},
$S:2}
A.dy.prototype={
$1(a){var s
t.R.a(a).preventDefault()
s=this.a.a
if(s.r)s.c.c=!0},
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
$S:1};(function aliases(){var s=J.b8.prototype
s.bP=s.h
s=J.ad.prototype
s.bQ=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u,p=hunkHelpers._instance_0u
s(A,"jB","ie",4)
s(A,"jC","ig",4)
s(A,"jD","ih",4)
r(A,"h5","ju",0)
var o
q(o=A.cu.prototype,"gb9","cf",19)
p(o,"gc6","b1",0)
q(o=A.cb.prototype,"gbH","bI",3)
q(o,"gbD","bE",3)
q(o,"gbF","bG",3)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.o,null)
q(A.o,[A.eu,J.b8,A.bl,J.bR,A.p,A.A,A.dl,A.n,A.cj,A.aG,A.ao,A.b5,A.dC,A.de,A.bA,A.ac,A.C,A.da,A.ci,A.cg,A.U,A.cK,A.e4,A.e2,A.a0,A.bu,A.R,A.cD,A.bo,A.bI,A.a6,A.cL,A.aW,A.cP,A.be,A.aD,A.c_,A.e7,A.dO,A.cl,A.bm,A.dQ,A.a1,A.K,A.cO,A.G,A.bG,A.dE,A.cN,A.d1,A.er,A.cJ,A.aH,A.c7,A.cu,A.db,A.d0,A.aj,A.c5,A.d3,A.cb,A.c6,A.Q,A.dd,A.h,A.d5,A.cq,A.cZ,A.c9,A.bj,A.df,A.dh,A.dR,A.di,A.dj,A.cC,A.d4,A.d7,A.dr])
q(J.b8,[J.ce,J.ba,J.z,J.aJ,J.aK,J.bb,J.aI])
q(J.z,[J.ad,J.t,A.bg,A.w,A.b4,A.ai,A.cF,A.c1,A.c2,A.a,A.aO,A.cQ])
q(J.ad,[J.cm,J.bp,J.a3])
r(J.cd,A.bl)
r(J.d6,J.t)
q(J.bb,[J.b9,J.cf])
q(A.p,[A.aL,A.a7,A.ch,A.cy,A.cr,A.cI,A.bS,A.W,A.bq,A.cx,A.bn,A.bZ])
r(A.aR,A.A)
r(A.bY,A.aR)
r(A.b7,A.n)
r(A.b6,A.b5)
r(A.bi,A.a7)
q(A.ac,[A.bW,A.bX,A.cw,A.ej,A.el,A.dJ,A.dI,A.dY,A.dp,A.e1,A.dP,A.dm,A.dn,A.d8,A.d9,A.dx,A.dy,A.dz,A.dA,A.dB,A.ds,A.dt,A.du,A.dv,A.dw])
q(A.cw,[A.cv,A.aC])
q(A.C,[A.bc,A.cE,A.br])
r(A.bd,A.b7)
q(A.bX,[A.ek,A.dZ,A.dc,A.dG,A.dF,A.dM,A.dN,A.dk])
r(A.a5,A.bg)
r(A.bx,A.a5)
r(A.by,A.bx)
r(A.bf,A.by)
q(A.bf,[A.ck,A.bh])
r(A.bB,A.cI)
q(A.bW,[A.dK,A.dL,A.e3,A.dS,A.dU,A.dT,A.dX,A.dW,A.dV,A.dq,A.e0,A.ec,A.e9,A.e8])
r(A.cM,A.bI)
q(A.a6,[A.bz,A.c0])
r(A.bv,A.bz)
r(A.bF,A.be)
r(A.aS,A.bF)
q(A.aD,[A.bV,A.c3])
q(A.c_,[A.d_,A.dH])
r(A.cB,A.c3)
q(A.W,[A.bk,A.cc])
r(A.cG,A.bG)
q(A.w,[A.l,A.aT])
q(A.l,[A.y,A.X,A.aU])
q(A.y,[A.e,A.c])
q(A.e,[A.bP,A.bQ,A.ag,A.ah,A.c8,A.cs])
r(A.aF,A.cF)
r(A.a9,A.a)
q(A.a9,[A.a4,A.I,A.Z])
r(A.cR,A.cQ)
r(A.bw,A.cR)
r(A.bs,A.cE)
q(A.c0,[A.cH,A.bU])
r(A.bt,A.bo)
r(A.H,A.bt)
q(A.dO,[A.aE,A.P,A.aM,A.aN,A.c4,A.a2,A.ct])
s(A.aR,A.ao)
s(A.bx,A.A)
s(A.by,A.aG)
s(A.bF,A.cP)
s(A.cF,A.d1)
s(A.cQ,A.A)
s(A.cR,A.aH)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",O:"double",a_:"num",f:"String",at:"bool",K:"Null",q:"List",o:"Object",F:"Map",j:"JSObject"},mangledNames:{},types:["~()","~(Z)","~(I)","~(at)","~(~())","K(@)","K()","@()","~(f,f)","~(a)","~(a4)","@(@)","@(@,f)","@(f)","K(~())","K(o,aQ)","~(o?,o?)","F<f,f>(F<f,f>,f)","0&(f,i?)","~(a_)","O(O,O)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.iA(v.typeUniverse,JSON.parse('{"cm":"ad","bp":"ad","a3":"ad","k2":"z","k_":"a","k8":"a","jZ":"c","k9":"c","k0":"e","kc":"e","ka":"l","k7":"l","kd":"I","k3":"a9","k1":"X","kf":"X","kb":"y","ce":{"at":[],"L":[]},"ba":{"L":[]},"z":{"j":[]},"ad":{"j":[]},"t":{"q":["1"],"j":[],"n":["1"]},"cd":{"bl":[]},"d6":{"t":["1"],"q":["1"],"j":[],"n":["1"]},"bb":{"O":[],"a_":[]},"b9":{"O":[],"i":[],"a_":[],"L":[]},"cf":{"O":[],"a_":[],"L":[]},"aI":{"f":[],"dg":[],"L":[]},"aL":{"p":[]},"bY":{"A":["i"],"ao":["i"],"q":["i"],"n":["i"],"A.E":"i","ao.E":"i"},"b7":{"n":["1"]},"aR":{"A":["1"],"ao":["1"],"q":["1"],"n":["1"]},"b5":{"F":["1","2"]},"b6":{"b5":["1","2"],"F":["1","2"]},"bi":{"a7":[],"p":[]},"ch":{"p":[]},"cy":{"p":[]},"bA":{"aQ":[]},"ac":{"al":[]},"bW":{"al":[]},"bX":{"al":[]},"cw":{"al":[]},"cv":{"al":[]},"aC":{"al":[]},"cr":{"p":[]},"bc":{"C":["1","2"],"F":["1","2"],"C.K":"1","C.V":"2"},"bd":{"n":["1"]},"cg":{"dg":[]},"bg":{"j":[]},"a5":{"am":["1"],"j":[]},"bf":{"A":["i"],"a5":["i"],"q":["i"],"am":["i"],"j":[],"n":["i"],"aG":["i"]},"ck":{"A":["i"],"a5":["i"],"q":["i"],"am":["i"],"j":[],"n":["i"],"aG":["i"],"L":[],"A.E":"i"},"bh":{"eC":[],"A":["i"],"a5":["i"],"q":["i"],"am":["i"],"j":[],"n":["i"],"aG":["i"],"L":[],"A.E":"i"},"cI":{"p":[]},"bB":{"a7":[],"p":[]},"a0":{"p":[]},"R":{"ca":["1"]},"bI":{"fu":[]},"cM":{"bI":[],"fu":[]},"bv":{"a6":["1"],"aP":["1"],"n":["1"]},"A":{"q":["1"],"n":["1"]},"C":{"F":["1","2"]},"be":{"F":["1","2"]},"aS":{"bF":["1","2"],"be":["1","2"],"cP":["1","2"],"F":["1","2"]},"a6":{"aP":["1"],"n":["1"]},"bz":{"a6":["1"],"aP":["1"],"n":["1"]},"bV":{"aD":["q<i>","f"]},"c3":{"aD":["f","q<i>"]},"cB":{"aD":["f","q<i>"]},"O":{"a_":[]},"i":{"a_":[]},"q":{"n":["1"]},"f":{"dg":[]},"bS":{"p":[]},"a7":{"p":[]},"W":{"p":[]},"bk":{"p":[]},"cc":{"p":[]},"bq":{"p":[]},"cx":{"p":[]},"bn":{"p":[]},"bZ":{"p":[]},"cl":{"p":[]},"bm":{"p":[]},"cO":{"aQ":[]},"G":{"i5":[]},"bG":{"cz":[]},"cN":{"cz":[]},"cG":{"cz":[]},"y":{"l":[],"w":[],"j":[]},"a":{"j":[]},"a4":{"a":[],"j":[]},"I":{"a":[],"j":[]},"l":{"w":[],"j":[]},"Z":{"a":[],"j":[]},"e":{"y":[],"l":[],"w":[],"j":[]},"bP":{"y":[],"l":[],"w":[],"j":[]},"bQ":{"y":[],"l":[],"w":[],"j":[]},"ag":{"y":[],"l":[],"w":[],"j":[]},"ah":{"y":[],"l":[],"w":[],"j":[]},"b4":{"j":[]},"ai":{"j":[]},"X":{"l":[],"w":[],"j":[]},"aF":{"j":[]},"c1":{"j":[]},"c2":{"j":[]},"w":{"j":[]},"c8":{"y":[],"l":[],"w":[],"j":[]},"aO":{"j":[]},"cs":{"y":[],"l":[],"w":[],"j":[]},"a9":{"a":[],"j":[]},"aT":{"w":[],"j":[]},"aU":{"l":[],"w":[],"j":[]},"bw":{"A":["l"],"aH":["l"],"q":["l"],"am":["l"],"j":[],"n":["l"],"A.E":"l","aH.E":"l"},"cE":{"C":["f","f"],"F":["f","f"]},"bs":{"C":["f","f"],"F":["f","f"],"C.K":"f","C.V":"f"},"br":{"C":["f","f"],"F":["f","f"],"C.K":"f","C.V":"f"},"cH":{"a6":["f"],"aP":["f"],"n":["f"]},"bt":{"bo":["1"]},"H":{"bt":["1"],"bo":["1"]},"c0":{"a6":["f"],"aP":["f"],"n":["f"]},"bU":{"a6":["f"],"aP":["f"],"n":["f"]},"c":{"y":[],"l":[],"w":[],"j":[]},"hM":{"q":["i"],"n":["i"]},"eC":{"q":["i"],"n":["i"]}}'))
A.iz(v.typeUniverse,JSON.parse('{"b7":1,"aR":1,"a5":1,"bz":1,"c_":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cT
return{n:s("a0"),E:s("ag"),b:s("ai"),h:s("y"),U:s("p"),z:s("a"),Z:s("al"),D:s("Q"),c:s("n<@>"),e:s("n<i>"),J:s("t<y>"),m:s("t<Q>"),b4:s("t<bj>"),s:s("t<f>"),cw:s("t<O>"),r:s("t<@>"),t:s("t<i>"),T:s("ba"),o:s("j"),g:s("a3"),da:s("am<@>"),v:s("a4"),d:s("q<Q>"),j:s("q<@>"),L:s("q<i>"),f:s("F<f,f>"),V:s("I"),a1:s("l"),P:s("K"),K:s("o"),cY:s("ke"),at:s("aP<f>"),l:s("aQ"),N:s("f"),R:s("Z"),bW:s("L"),b7:s("a7"),cr:s("bp"),W:s("aS<f,f>"),k:s("cz"),x:s("aU"),C:s("H<I>"),S:s("H<Z>"),_:s("R<@>"),a:s("R<i>"),y:s("at"),bG:s("at(o)"),i:s("O"),A:s("@"),bd:s("@()"),w:s("@(o)"),Q:s("@(o,aQ)"),p:s("i"),cR:s("ah?"),bc:s("ca<K>?"),aQ:s("j?"),X:s("o?"),aD:s("f?"),F:s("bu<@,@>?"),O:s("cL?"),u:s("at?"),I:s("O?"),B:s("@(a)?"),a3:s("i?"),ae:s("a_?"),bp:s("~()?"),cx:s("~(a)?"),bA:s("~(a4)?"),aC:s("~(I)?"),al:s("~(Z)?"),H:s("a_"),q:s("~"),M:s("~()"),Y:s("~(f,f)"),a4:s("~(at)"),G:s("~(a_)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.w=A.ag.prototype
B.k=A.ah.prototype
B.b=A.ai.prototype
B.a7=J.b8.prototype
B.c=J.t.prototype
B.d=J.b9.prototype
B.f=J.bb.prototype
B.a=J.aI.prototype
B.a8=J.a3.prototype
B.a9=J.z.prototype
B.D=A.bh.prototype
B.E=A.aO.prototype
B.F=J.cm.prototype
B.v=J.bp.prototype
B.M=A.aT.prototype
B.aE=new A.d_()
B.N=new A.bV()
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
B.aF=new A.dl()
B.z=new A.cB()
B.h=new A.cM()
B.V=new A.cO()
B.u=new A.aE(0,"miss")
B.W=new A.aE(1,"hit")
B.X=new A.aE(2,"blocked")
B.Y=new A.aE(3,"parried")
B.r=new A.c4(0,"ko")
B.Z=new A.c4(1,"timeout")
B.e=new A.P(0,"idle")
B.l=new A.P(1,"walk")
B.p=new A.P(2,"windup")
B.m=new A.P(3,"attack")
B.q=new A.P(4,"recover")
B.i=new A.P(5,"block")
B.n=new A.P(6,"hit")
B.o=new A.P(7,"stagger")
B.j=new A.P(8,"dead")
B.a_=new A.a2(0,"roundStart")
B.a1=new A.a2(2,"hit")
B.a2=new A.a2(3,"blocked")
B.a3=new A.a2(4,"parried")
B.a4=new A.a2(5,"roundEnd")
B.a5=new A.a2(6,"matchEnd")
B.a0=new A.a2(1,"fight")
B.a6=new A.Q(B.a0,0,0,0,"FIGHT")
B.aa=s([B.e,B.l,B.p,B.m,B.q,B.i,B.n,B.o,B.j],A.cT("t<P>"))
B.ab=s([],t.m)
B.ah={}
B.ac=new A.b6(B.ah,[],A.cT("b6<f,f>"))
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
B.aj=A.eY("hM")
B.ak=A.eY("o")
B.al=A.eY("eC")
B.am=new A.dH(!1)
B.H=new A.h(0,0)
B.an=new A.h(0,-1)
B.ao=new A.h(-0.04,-0.14)
B.ap=new A.h(-0.18,-0.1)
B.I=new A.h(0.45,-0.17)
B.aq=new A.h(0.05,0.2)
B.J=new A.h(0.45,0.08)
B.ar=new A.h(0,-0.02)
B.as=new A.h(0.2,0.02)
B.at=new A.h(-0.18,0.06)
B.au=new A.h(0.25,0.08)
B.K=new A.h(-0.55,0.52)
B.L=new A.h(-0.75,0.08)
B.av=new A.h(-0.04,-0.12)
B.aw=new A.h(-0.22,-0.4)
B.ax=new A.h(0.2,0.1)
B.ay=new A.h(0,0.2)
B.az=new A.h(-0.12,-0.06)
B.aA=new A.h(-0.06,-0.2)
B.aB=new A.h(-0.04,0.1)
B.aC=new A.h(-0.08,-0.5)
B.aD=new A.h(0.82,-0.06)})();(function staticFields(){$.e_=null
$.N=A.r([],A.cT("t<o>"))
$.ff=null
$.f5=null
$.f4=null
$.h9=null
$.h4=null
$.hc=null
$.ee=null
$.em=null
$.eT=null
$.aY=null
$.bL=null
$.bM=null
$.eO=!1
$.x=B.h
$.fq=""
$.fr=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"k6","hi",()=>A.eg("_$dart_dartClosure"))
s($,"k5","hh",()=>A.eg("_$dart_dartClosure_dartJSInterop"))
s($,"kw","hy",()=>A.r([new J.cd()],A.cT("t<bl>")))
s($,"kg","hj",()=>A.a8(A.dD({
toString:function(){return"$receiver$"}})))
s($,"kh","hk",()=>A.a8(A.dD({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ki","hl",()=>A.a8(A.dD(null)))
s($,"kj","hm",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"km","hp",()=>A.a8(A.dD(void 0)))
s($,"kn","hq",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kl","ho",()=>A.a8(A.fn(null)))
s($,"kk","hn",()=>A.a8(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kp","hs",()=>A.a8(A.fn(void 0)))
s($,"ko","hr",()=>A.a8(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kq","eZ",()=>A.id())
s($,"ku","hw",()=>A.hW(4096))
s($,"ks","hu",()=>new A.e9().$0())
s($,"kt","hv",()=>new A.e8().$0())
s($,"kr","ht",()=>new Int8Array(A.j3(A.r([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"kv","hx",()=>A.ha(B.ak))
s($,"k4","hg",()=>A.i2("^\\S+$"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.z,DOMError:J.z,MediaError:J.z,Navigator:J.z,NavigatorConcurrentHardware:J.z,NavigatorUserMediaError:J.z,OverconstrainedError:J.z,PositionError:J.z,GeolocationPositionError:J.z,TextMetrics:J.z,WebGLRenderingContext:J.z,WebGL2RenderingContext:J.z,ArrayBufferView:A.bg,Int8Array:A.ck,Uint8Array:A.bh,HTMLAudioElement:A.e,HTMLBRElement:A.e,HTMLBaseElement:A.e,HTMLBodyElement:A.e,HTMLContentElement:A.e,HTMLDListElement:A.e,HTMLDataElement:A.e,HTMLDataListElement:A.e,HTMLDetailsElement:A.e,HTMLDialogElement:A.e,HTMLDivElement:A.e,HTMLEmbedElement:A.e,HTMLFieldSetElement:A.e,HTMLHRElement:A.e,HTMLHeadElement:A.e,HTMLHeadingElement:A.e,HTMLHtmlElement:A.e,HTMLIFrameElement:A.e,HTMLImageElement:A.e,HTMLInputElement:A.e,HTMLLIElement:A.e,HTMLLabelElement:A.e,HTMLLegendElement:A.e,HTMLLinkElement:A.e,HTMLMapElement:A.e,HTMLMediaElement:A.e,HTMLMenuElement:A.e,HTMLMetaElement:A.e,HTMLMeterElement:A.e,HTMLModElement:A.e,HTMLOListElement:A.e,HTMLObjectElement:A.e,HTMLOptGroupElement:A.e,HTMLOptionElement:A.e,HTMLOutputElement:A.e,HTMLParagraphElement:A.e,HTMLParamElement:A.e,HTMLPictureElement:A.e,HTMLPreElement:A.e,HTMLProgressElement:A.e,HTMLQuoteElement:A.e,HTMLScriptElement:A.e,HTMLShadowElement:A.e,HTMLSlotElement:A.e,HTMLSourceElement:A.e,HTMLSpanElement:A.e,HTMLStyleElement:A.e,HTMLTableCaptionElement:A.e,HTMLTableCellElement:A.e,HTMLTableDataCellElement:A.e,HTMLTableHeaderCellElement:A.e,HTMLTableColElement:A.e,HTMLTableElement:A.e,HTMLTableRowElement:A.e,HTMLTableSectionElement:A.e,HTMLTemplateElement:A.e,HTMLTextAreaElement:A.e,HTMLTimeElement:A.e,HTMLTitleElement:A.e,HTMLTrackElement:A.e,HTMLUListElement:A.e,HTMLUnknownElement:A.e,HTMLVideoElement:A.e,HTMLDirectoryElement:A.e,HTMLFontElement:A.e,HTMLFrameElement:A.e,HTMLFrameSetElement:A.e,HTMLMarqueeElement:A.e,HTMLElement:A.e,HTMLAnchorElement:A.bP,HTMLAreaElement:A.bQ,HTMLButtonElement:A.ag,HTMLCanvasElement:A.ah,CanvasPattern:A.b4,CanvasRenderingContext2D:A.ai,CDATASection:A.X,CharacterData:A.X,Comment:A.X,ProcessingInstruction:A.X,Text:A.X,CSSStyleDeclaration:A.aF,MSStyleCSSProperties:A.aF,CSS2Properties:A.aF,DOMException:A.c1,DOMTokenList:A.c2,MathMLElement:A.y,Element:A.y,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.w,HTMLFormElement:A.c8,KeyboardEvent:A.a4,MouseEvent:A.I,DragEvent:A.I,PointerEvent:A.I,WheelEvent:A.I,Document:A.l,DocumentFragment:A.l,HTMLDocument:A.l,ShadowRoot:A.l,XMLDocument:A.l,DocumentType:A.l,Node:A.l,Path2D:A.aO,HTMLSelectElement:A.cs,TouchEvent:A.Z,CompositionEvent:A.a9,FocusEvent:A.a9,TextEvent:A.a9,UIEvent:A.a9,Window:A.aT,DOMWindow:A.aT,Attr:A.aU,NamedNodeMap:A.bw,MozNamedAttrMap:A.bw,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,ArrayBufferView:false,Int8Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasPattern:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMTokenList:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.a5.$nativeSuperclassTag="ArrayBufferView"
A.bx.$nativeSuperclassTag="ArrayBufferView"
A.by.$nativeSuperclassTag="ArrayBufferView"
A.bf.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jS
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
async function lo(r,e){let t=window.Capacitor?.Plugins?.PrimerkaFiles;if(!window.Capacitor?.isNativePlatform()||!t)return!1;let i=await new Promise((a,s)=>{let o=new FileReader;o.onload=()=>a(o.result.split(",")[1]),o.onerror=()=>s(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B")),o.readAsDataURL(r)});if((await t.save({contents:i,filename:e,mime:r.type})).cancelled)throw new Error("\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E");return!0}(function(){let r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(let i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(let n of i)if(n.type==="childList")for(let a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){let n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;let n=e(i);fetch(i.href,n)}})();var kc="170",_a={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ob=0,Op=1,kb=2,Um=1,Nm=2,Sr=3,ir=0,$t=1,Zi=2,rn=0,va=1,kp=2,Bp=3,Fp=4,Om=5,Zr=100,Bb=101,Fb=102,zb=103,Hb=104,km=200,Vb=201,Gb=202,jb=203,gh=204,bh=205,Wb=206,Xb=207,Bm=208,qb=209,Yb=210,Kb=211,Zb=212,Jb=213,Qb=214,_h=0,vh=1,xh=2,Ta=3,yh=4,Mh=5,Sh=6,Eh=7,Fm=0,$b=1,e_=2,nn=0,t_=1,i_=2,r_=3,n_=4,a_=5,s_=6,zm=7,zp="attached",o_="detached",Hm=300,wa=301,Aa=302,Th=303,wh=304,Bc=306,Ra=1e3,$r=1001,pc=1002,ii=1003,Vm=1004,Ms=1005,_i=1006,rc=1007,wr=1008,Ir=1009,Gm=1010,jm=1011,Us=1012,Hd=1013,an=1014,vi=1015,Ys=1016,Vd=1017,Gd=1018,Ca=1020,Wm=35902,Xm=1021,qm=1022,di=1023,Ym=1024,Km=1025,xa=1026,Pa=1027,jd=1028,Fc=1029,Zm=1030,Wd=1031,Xd=1033,nc=33776,ac=33777,sc=33778,oc=33779,Ah=35840,Rh=35841,Ch=35842,Ph=35843,Ih=36196,Lh=37492,Dh=37496,Uh=37808,Nh=37809,Oh=37810,kh=37811,Bh=37812,Fh=37813,zh=37814,Hh=37815,Vh=37816,Gh=37817,jh=37818,Wh=37819,Xh=37820,qh=37821,cc=36492,Yh=36494,Kh=36495,Jm=36283,Zh=36284,Jh=36285,Qh=36286,Ns=2300,Os=2301,gl=2302,Hp=2400,Vp=2401,Gp=2402,c_=2500,l_=0,Qm=1,$h=2,h_=3200,u_=3201,$m=0,d_=1,Jr="",Tt="srgb",ri="srgb-linear",zc="linear",nt="srgb",Xn=7680,jp=519,p_=512,f_=513,m_=514,eg=515,g_=516,b_=517,__=518,v_=519,eu=35044,Wp="300 es",Ar=2e3,fc=2001,Lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xp=1234567,As=Math.PI/180,Ia=180/Math.PI;function $i(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Bt(r,e,t){return Math.max(e,Math.min(t,r))}function qd(r,e){return(r%e+e)%e}function x_(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function y_(r,e,t){return r!==e?(t-r)/(e-r):0}function Rs(r,e,t){return(1-t)*r+t*e}function M_(r,e,t,i){return Rs(r,e,1-Math.exp(-t*i))}function S_(r,e=1){return e-Math.abs(qd(r,e*2)-e)}function E_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function T_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function w_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function A_(r,e){return r+Math.random()*(e-r)}function R_(r){return r*(.5-Math.random())}function C_(r){r!==void 0&&(Xp=r);let e=Xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P_(r){return r*As}function I_(r){return r*Ia}function L_(r){return(r&r-1)===0&&r!==0}function D_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function U_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function N_(r,e,t,i,n){let a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),d=s((e-i)/2),p=a((i-e)/2),b=s((i-e)/2);switch(n){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*b,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*b,o*l);break;case"ZYZ":r.set(c*b,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ji(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var zn={DEG2RAD:As,RAD2DEG:Ia,generateUUID:$i,clamp:Bt,euclideanModulo:qd,mapLinear:x_,inverseLerp:y_,lerp:Rs,damp:M_,pingpong:S_,smoothstep:E_,smootherstep:T_,randInt:w_,randFloat:A_,randFloatSpread:R_,seededRandom:C_,degToRad:P_,radToDeg:I_,isPowerOfTwo:L_,ceilPowerOfTwo:D_,floorPowerOfTwo:U_,setQuaternionFromProperEuler:N_,normalize:rt,denormalize:Ji},Me=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class r{constructor(e,t,i,n,a,s,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,c,l)}set(e,t,i,n,a,s,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],b=i[8],g=n[0],f=n[3],m=n[6],_=n[1],v=n[4],x=n[7],E=n[2],w=n[5],S=n[8];return a[0]=s*g+o*_+c*E,a[3]=s*f+o*v+c*w,a[6]=s*m+o*x+c*S,a[1]=l*g+h*_+u*E,a[4]=l*f+h*v+u*w,a[7]=l*m+h*x+u*S,a[2]=d*g+p*_+b*E,a[5]=d*f+p*v+b*w,a[8]=d*m+p*x+b*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-i*a*h+i*o*c+n*a*l-n*s*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,d=o*c-h*a,p=l*a-s*c,b=t*u+i*d+n*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/b;return e[0]=u*g,e[1]=(n*l-h*i)*g,e[2]=(o*i-n*s)*g,e[3]=d*g,e[4]=(h*t-n*c)*g,e[5]=(n*a-o*t)*g,e[6]=p*g,e[7]=(i*c-l*t)*g,e[8]=(s*t-i*a)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){let c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-n*l,n*c,-n*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bl.makeScale(e,t)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bl=new Be;function tg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function O_(){let r=ks("canvas");return r.style.display="block",r}var qp={};function Ss(r){r in qp||(qp[r]=!0,console.warn(r))}function k_(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function B_(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function F_(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(r.r=ya(r.r),r.g=ya(r.g),r.b=ya(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jr?zc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ya(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Yp=[.64,.33,.3,.6,.15,.06],Kp=[.2126,.7152,.0722],Zp=[.3127,.329],Jp=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[ri]:{primaries:Yp,whitePoint:Zp,transfer:zc,toXYZ:Jp,fromXYZ:Qp,luminanceCoefficients:Kp,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Yp,whitePoint:Zp,transfer:nt,toXYZ:Jp,fromXYZ:Qp,luminanceCoefficients:Kp,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var qn,tu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=ks("canvas")),qn.width=e.width,qn.height=e.height;let i=qn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=Rr(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},z_=0,mc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(_l(n[s].image)):a.push(_l(n[s]))}else a=_l(n);i.url=a}return t||(e.images[this.uuid]=i),i}};function _l(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var H_=0,Xt=class r extends Lr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=$r,n=$r,a=_i,s=wr,o=di,c=Ir,l=r.DEFAULT_ANISOTROPY,h=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=$i(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Hm;Xt.DEFAULT_ANISOTROPY=1;var tt=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a,s=e.elements,o=s[0],c=s[4],l=s[8],h=s[1],u=s[5],d=s[9],p=s[2],b=s[6],g=s[10];if(Math.abs(c-h)<.01&&Math.abs(l-p)<.01&&Math.abs(d-b)<.01){if(Math.abs(c+h)<.1&&Math.abs(l+p)<.1&&Math.abs(d+b)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let m=(o+1)/2,_=(u+1)/2,v=(g+1)/2,x=(c+h)/4,E=(l+p)/4,w=(d+b)/4;return m>_&&m>v?m<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(m),n=x/i,a=E/i):_>v?_<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(_),i=x/n,a=w/n):v<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(v),i=E/a,n=w/a),this.set(i,n,a,t),this}let f=Math.sqrt((b-d)*(b-d)+(l-p)*(l-p)+(h-c)*(h-c));return Math.abs(f)<.001&&(f=1),this.x=(b-d)/f,this.y=(l-p)/f,this.z=(h-c)/f,this.w=Math.acos((o+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},iu=class extends Lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Xt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dr=class extends iu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},gc=class extends Xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ru=class extends Xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ni=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=a[s+0],p=a[s+1],b=a[s+2],g=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=b,e[t+3]=g;return}if(u!==g||c!==d||l!==p||h!==b){let f=1-o,m=c*d+l*p+h*b+u*g,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let E=Math.sqrt(v),w=Math.atan2(E,m*_);f=Math.sin(f*w)/E,o=Math.sin(o*w)/E}let x=o*_;if(c=c*f+d*x,l=l*f+p*x,h=h*f+b*x,u=u*f+g*x,f===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,a,s){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=a[s],d=a[s+1],p=a[s+2],b=a[s+3];return e[t]=o*b+h*u+c*p-l*d,e[t+1]=c*b+h*d+l*u-o*p,e[t+2]=l*b+h*p+o*d-c*u,e[t+3]=h*b-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(a/2),d=c(i/2),p=c(n/2),b=c(a/2);switch(s){case"XYZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"YXZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"ZXY":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"ZYX":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"YZX":this._x=d*h*u+l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u-d*p*b;break;case"XZY":this._x=d*h*u-l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u+d*p*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(s-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(a-l)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(s-n)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+s*o+n*l-a*c,this._y=n*h+s*c+a*o-i*l,this._z=a*h+s*l+i*c-n*o,this._w=s*h-i*o-n*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,a=this._z,s=this._w,o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*n-o*i),h=2*(o*t-a*n),u=2*(a*i-s*t);return this.x=t+c*l+s*u-o*h,this.y=i+c*h+o*l-a*u,this.z=n+c*u+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-a*o,this.y=a*s-i*c,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new P,$p=new ni,ot=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Xi):Xi.fromBufferAttribute(a,s),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}let n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),uo.subVectors(this.max,as),Yn.subVectors(e.a,as),Kn.subVectors(e.b,as),Zn.subVectors(e.c,as),Hr.subVectors(Kn,Yn),Vr.subVectors(Zn,Kn),xn.subVectors(Yn,Zn);let t=[0,-Hr.z,Hr.y,0,-Vr.z,Vr.y,0,-xn.z,xn.y,Hr.z,0,-Hr.x,Vr.z,0,-Vr.x,xn.z,0,-xn.x,-Hr.y,Hr.x,0,-Vr.y,Vr.x,0,-xn.y,xn.x,0];return!xl(t,Yn,Kn,Zn,uo)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Yn,Kn,Zn,uo))?!1:(po.crossVectors(Hr,Vr),t=[po.x,po.y,po.z],xl(t,Yn,Kn,Zn,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},br=[new P,new P,new P,new P,new P,new P,new P,new P],Xi=new P,ho=new ot,Yn=new P,Kn=new P,Zn=new P,Hr=new P,Vr=new P,xn=new P,as=new P,uo=new P,po=new P,yn=new P;function xl(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){yn.fromArray(r,a);let o=n.x*Math.abs(yn.x)+n.y*Math.abs(yn.y)+n.z*Math.abs(yn.z),c=e.dot(yn),l=t.dot(yn),h=i.dot(yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var V_=new ot,ss=new P,yl=new P,Dt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):V_.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);let t=ss.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ss,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(yl)),this.expandByPoint(ss.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_r=new P,Ml=new P,fo=new P,Gr=new P,Sl=new P,mo=new P,El=new P,Ur=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ml.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(Ml);let a=e.distanceTo(t)*.5,s=-this.direction.dot(fo),o=Gr.dot(this.direction),c=-Gr.dot(fo),l=Gr.lengthSq(),h=Math.abs(1-s*s),u,d,p,b;if(h>0)if(u=s*c-o,d=s*o-c,b=a*h,u>=0)if(d>=-b)if(d<=b){let g=1/h;u*=g,d*=g,p=u*(u+s*d+2*o)+d*(s*u+d+2*c)+l}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-b?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l):d<=b?(u=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ml).addScaledVector(fo,d),p}intersectSphere(e,t){_r.subVectors(e.center,this.origin);let i=_r.dot(this.direction),n=_r.dot(_r)-i*i,a=e.radius*e.radius;if(n>a)return null;let s=Math.sqrt(a-n),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,n,a){Sl.subVectors(t,e),mo.subVectors(i,e),El.crossVectors(Sl,mo);let s=this.direction.dot(El),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Gr.subVectors(this.origin,e);let c=o*this.direction.dot(mo.crossVectors(Gr,mo));if(c<0)return null;let l=o*this.direction.dot(Sl.cross(Gr));if(l<0||c+l>s)return null;let h=-o*Gr.dot(El);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class r{constructor(e,t,i,n,a,s,o,c,l,h,u,d,p,b,g,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,c,l,h,u,d,p,b,g,f)}set(e,t,i,n,a,s,o,c,l,h,u,d,p,b,g,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=a,m[5]=s,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=b,m[11]=g,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Jn.setFromMatrixColumn(e,0).length(),a=1/Jn.setFromMatrixColumn(e,1).length(),s=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=s*h,p=s*u,b=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+b*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=b+p*l,t[10]=s*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,b=l*h,g=l*u;t[0]=d+g*o,t[4]=b*o-p,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-b,t[6]=g+d*o,t[10]=s*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,b=l*h,g=l*u;t[0]=d-g*o,t[4]=-s*u,t[8]=b+p*o,t[1]=p+b*o,t[5]=s*h,t[9]=g-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let d=s*h,p=s*u,b=o*h,g=o*u;t[0]=c*h,t[4]=b*l-p,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=p*l-b,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let d=s*c,p=s*l,b=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=b*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+b,t[10]=d-g*u}else if(e.order==="XZY"){let d=s*c,p=s*l,b=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=s*h,t[9]=p*u-b,t[2]=b*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,j_)}lookAt(e,t,i){let n=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),jr.crossVectors(i,gi),jr.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),jr.crossVectors(i,gi)),jr.normalize(),go.crossVectors(gi,jr),n[0]=jr.x,n[4]=go.x,n[8]=gi.x,n[1]=jr.y,n[5]=go.y,n[9]=gi.y,n[2]=jr.z,n[6]=go.z,n[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],b=i[2],g=i[6],f=i[10],m=i[14],_=i[3],v=i[7],x=i[11],E=i[15],w=n[0],S=n[4],A=n[8],M=n[12],y=n[1],C=n[5],D=n[9],L=n[13],B=n[2],j=n[6],z=n[10],q=n[14],W=n[3],$=n[7],ue=n[11],Ee=n[15];return a[0]=s*w+o*y+c*B+l*W,a[4]=s*S+o*C+c*j+l*$,a[8]=s*A+o*D+c*z+l*ue,a[12]=s*M+o*L+c*q+l*Ee,a[1]=h*w+u*y+d*B+p*W,a[5]=h*S+u*C+d*j+p*$,a[9]=h*A+u*D+d*z+p*ue,a[13]=h*M+u*L+d*q+p*Ee,a[2]=b*w+g*y+f*B+m*W,a[6]=b*S+g*C+f*j+m*$,a[10]=b*A+g*D+f*z+m*ue,a[14]=b*M+g*L+f*q+m*Ee,a[3]=_*w+v*y+x*B+E*W,a[7]=_*S+v*C+x*j+E*$,a[11]=_*A+v*D+x*z+E*ue,a[15]=_*M+v*L+x*q+E*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],b=e[3],g=e[7],f=e[11],m=e[15];return b*(+a*c*u-n*l*u-a*o*d+i*l*d+n*o*p-i*c*p)+g*(+t*c*p-t*l*d+a*s*d-n*s*p+n*l*h-a*c*h)+f*(+t*l*u-t*o*p-a*s*u+i*s*p+a*o*h-i*l*h)+m*(-n*o*h-t*c*u+t*o*d+n*s*u-i*s*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],b=e[12],g=e[13],f=e[14],m=e[15],_=u*f*l-g*d*l+g*c*p-o*f*p-u*c*m+o*d*m,v=b*d*l-h*f*l-b*c*p+s*f*p+h*c*m-s*d*m,x=h*g*l-b*u*l+b*o*p-s*g*p-h*o*m+s*u*m,E=b*u*c-h*g*c-b*o*d+s*g*d+h*o*f-s*u*f,w=t*_+i*v+n*x+a*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return e[0]=_*S,e[1]=(g*d*a-u*f*a-g*n*p+i*f*p+u*n*m-i*d*m)*S,e[2]=(o*f*a-g*c*a+g*n*l-i*f*l-o*n*m+i*c*m)*S,e[3]=(u*c*a-o*d*a-u*n*l+i*d*l+o*n*p-i*c*p)*S,e[4]=v*S,e[5]=(h*f*a-b*d*a+b*n*p-t*f*p-h*n*m+t*d*m)*S,e[6]=(b*c*a-s*f*a-b*n*l+t*f*l+s*n*m-t*c*m)*S,e[7]=(s*d*a-h*c*a+h*n*l-t*d*l-s*n*p+t*c*p)*S,e[8]=x*S,e[9]=(b*u*a-h*g*a-b*i*p+t*g*p+h*i*m-t*u*m)*S,e[10]=(s*g*a-b*o*a+b*i*l-t*g*l-s*i*m+t*o*m)*S,e[11]=(h*o*a-s*u*a-h*i*l+t*u*l+s*i*p-t*o*p)*S,e[12]=E*S,e[13]=(h*g*n-b*u*n+b*i*d-t*g*d-h*i*f+t*u*f)*S,e[14]=(b*o*n-s*g*n-b*i*c+t*g*c+s*i*f-t*o*f)*S,e[15]=(s*u*n-h*o*n+h*i*c-t*u*c-s*i*d+t*o*d)*S,this}scale(e){let t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*s,0,l*c-n*o,h*c+n*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,u=o+o,d=a*l,p=a*h,b=a*u,g=s*h,f=s*u,m=o*u,_=c*l,v=c*h,x=c*u,E=i.x,w=i.y,S=i.z;return n[0]=(1-(g+m))*E,n[1]=(p+x)*E,n[2]=(b-v)*E,n[3]=0,n[4]=(p-x)*w,n[5]=(1-(d+m))*w,n[6]=(f+_)*w,n[7]=0,n[8]=(b+v)*S,n[9]=(f-_)*S,n[10]=(1-(d+g))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,a=Jn.set(n[0],n[1],n[2]).length(),s=Jn.set(n[4],n[5],n[6]).length(),o=Jn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],qi.copy(this);let c=1/a,l=1/s,h=1/o;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=l,qi.elements[5]*=l,qi.elements[6]*=l,qi.elements[8]*=h,qi.elements[9]*=h,qi.elements[10]*=h,t.setFromRotationMatrix(qi),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=Ar){let c=this.elements,l=2*a/(t-e),h=2*a/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,b;if(o===Ar)p=-(s+a)/(s-a),b=-2*s*a/(s-a);else if(o===fc)p=-s/(s-a),b=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=Ar){let c=this.elements,l=1/(t-e),h=1/(i-n),u=1/(s-a),d=(t+e)*l,p=(i+n)*h,b,g;if(o===Ar)b=(s+a)*u,g=-2*u;else if(o===fc)b=a*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Jn=new P,qi=new ye,G_=new P(0,0,0),j_=new P(1,1,1),jr=new P,go=new P,gi=new P,ef=new ye,tf=new ni,cr=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,a=n[0],s=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},W_=0,rf=new P,Qn=new ni,vr=new ye,bo=new P,os=new P,X_=new P,q_=new ni,nf=new P(1,0,0),af=new P(0,1,0),sf=new P(0,0,1),of={type:"added"},Y_={type:"removed"},$n={type:"childadded",child:null},Tl={type:"childremoved",child:null},St=class r extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new P,t=new cr,i=new ni,n=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ye},normalMatrix:{value:new Be}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bo.copy(e):bo.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(os,bo,this.up):vr.lookAt(bo,os,this.up),this.quaternion.setFromRotationMatrix(vr),n&&(vr.extractRotation(n.matrixWorld),Qn.setFromRotationMatrix(vr),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),$n.child=e,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(a(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),b=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),b.length>0&&(i.nodes=b)}return i.object=n,i;function s(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=new P,xr=new P,wl=new P,yr=new P,ea=new P,ta=new P,cf=new P,Al=new P,Rl=new P,Cl=new P,Pl=new tt,Il=new tt,Ll=new tt,hi=class r{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Yi.subVectors(e,t),n.cross(Yi);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){Yi.subVectors(n,t),xr.subVectors(i,t),wl.subVectors(e,t);let s=Yi.dot(Yi),o=Yi.dot(xr),c=Yi.dot(wl),l=xr.dot(xr),h=xr.dot(wl),u=s*l-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,b=(s*h-o*c)*d;return a.set(1-p-b,b,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,i,n,a,s,o,c){return this.getBarycoord(e,t,i,n,yr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,yr.x),c.addScaledVector(s,yr.y),c.addScaledVector(o,yr.z),c)}static getInterpolatedAttribute(e,t,i,n,a,s){return Pl.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Pl,a.x),s.addScaledVector(Il,a.y),s.addScaledVector(Ll,a.z),s}static isFrontFacing(e,t,i,n){return Yi.subVectors(i,t),xr.subVectors(e,t),Yi.cross(xr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Yi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,a=this.c,s,o;ea.subVectors(n,i),ta.subVectors(a,i),Al.subVectors(e,i);let c=ea.dot(Al),l=ta.dot(Al);if(c<=0&&l<=0)return t.copy(i);Rl.subVectors(e,n);let h=ea.dot(Rl),u=ta.dot(Rl);if(h>=0&&u<=h)return t.copy(n);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(i).addScaledVector(ea,s);Cl.subVectors(e,a);let p=ea.dot(Cl),b=ta.dot(Cl);if(b>=0&&p<=b)return t.copy(a);let g=p*l-c*b;if(g<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(i).addScaledVector(ta,o);let f=h*b-p*u;if(f<=0&&u-h>=0&&p-b>=0)return cf.subVectors(a,n),o=(u-h)/(u-h+(p-b)),t.copy(n).addScaledVector(cf,o);let m=1/(f+g+d);return s=g*m,o=d*m,t.copy(i).addScaledVector(ea,s).addScaledVector(ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Dl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=je.workingColorSpace){if(e=qd(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Dl(s,a,e+1/3),this.g=Dl(s,a,e),this.b=Dl(s,a,e-1/3)}return je.toWorkingColorSpace(this,n),this}setStyle(e,t=Tt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=ig[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return je.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Bt(Jt.r*255,0,255))*65536+Math.round(Bt(Jt.g*255,0,255))*256+Math.round(Bt(Jt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Jt.copy(this),t);let i=Jt.r,n=Jt.g,a=Jt.b,s=Math.max(i,n,a),o=Math.min(i,n,a),c,l,h=(o+s)/2;if(o===s)c=0,l=0;else{let u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case i:c=(n-a)/u+(n<a?6:0);break;case n:c=(a-i)/u+2;break;case a:c=(i-n)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Tt){je.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,n=Jt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(_o);let i=Rs(Wr.h,_o.h,t),n=Rs(Wr.s,_o.s,t),a=Rs(Wr.l,_o.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Re;Re.NAMES=ig;var K_=0,yi=class extends Lr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=$i(),this.name="",this.blending=va,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=bh,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==va&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gh&&(i.blendSrc=this.blendSrc),this.blendDst!==bh&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){let s=[];for(let o in a){let c=a[o];delete c.metadata,s.push(c)}return s}if(t){let a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ui=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ct=new P,vo=new Me,st=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eu,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array),a=rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eu&&(e.usage=this.usage),e}},bc=class extends st{constructor(e,t,i){super(new Uint16Array(e),t,i)}},_c=class extends st{constructor(e,t,i){super(new Uint32Array(e),t,i)}},er=class extends st{constructor(e,t,i){super(new Float32Array(e),t,i)}},Z_=0,Pi=new ye,Ul=new St,ia=new P,bi=new ot,cs=new ot,kt=new P,qt=class r extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?_c:bc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,i){return Pi.makeTranslation(e,t,i),this.applyMatrix4(Pi),this}scale(e,t,i){return Pi.makeScale(e,t,i),this.applyMatrix4(Pi),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,a=e.length;n<a;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new er(i,3))}else{for(let i=0,n=t.count;i<n;i++){let a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let a=t[i];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(bi.min,cs.min),bi.expandByPoint(kt),kt.addVectors(bi.max,cs.max),bi.expandByPoint(kt)):(bi.expandByPoint(cs.min),bi.expandByPoint(cs.max))}bi.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)kt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(kt));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)kt.fromBufferAttribute(o,l),c&&(ia.fromBufferAttribute(e,l),kt.add(ia)),n=Math.max(n,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<i.count;A++)o[A]=new P,c[A]=new P;let l=new P,h=new P,u=new P,d=new Me,p=new Me,b=new Me,g=new P,f=new P;function m(A,M,y){l.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,y),d.fromBufferAttribute(a,A),p.fromBufferAttribute(a,M),b.fromBufferAttribute(a,y),h.sub(l),u.sub(l),p.sub(d),b.sub(d);let C=1/(p.x*b.y-b.x*p.y);isFinite(C)&&(g.copy(h).multiplyScalar(b.y).addScaledVector(u,-p.y).multiplyScalar(C),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-b.x).multiplyScalar(C),o[A].add(g),o[M].add(g),o[y].add(g),c[A].add(f),c[M].add(f),c[y].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,M=_.length;A<M;++A){let y=_[A],C=y.start,D=y.count;for(let L=C,B=C+D;L<B;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new P,x=new P,E=new P,w=new P;function S(A){E.fromBufferAttribute(n,A),w.copy(E);let M=o[A];v.copy(M),v.sub(E.multiplyScalar(E.dot(M))).normalize(),x.crossVectors(w,M);let y=x.dot(c[A])<0?-1:1;s.setXYZW(A,v.x,v.y,v.z,y)}for(let A=0,M=_.length;A<M;++A){let y=_[A],C=y.start,D=y.count;for(let L=C,B=C+D;L<B;L+=3)S(e.getX(L+0)),S(e.getX(L+1)),S(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new P,a=new P,s=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let b=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,f),o.add(h),c.add(h),l.add(h),i.setXYZ(b,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,b=0;for(let g=0,f=c.length;g<f;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let m=0;m<h;m++)d[b++]=l[p++]}return new st(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=e(c,i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(n[c]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let a=e.morphAttributes;for(let l in a){let h=[],u=a[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,h=s.length;l<h;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lf=new ye,Mn=new Ur,xo=new Dt,hf=new P,yo=new P,Mo=new P,So=new P,Nl=new P,Eo=new P,uf=new P,To=new P,He=class extends St{constructor(e=new qt,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){let s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(a&&o){Eo.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=o[c],u=a[c];h!==0&&(Nl.fromBufferAttribute(u,e),s?Eo.addScaledVector(Nl,h):Eo.addScaledVector(Nl.sub(t),h))}t.add(Eo)}return t}raycast(e,t){let i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(a),Mn.copy(e.ray).recast(e.near),!(xo.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(xo,hf)===null||Mn.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(lf.copy(a).invert(),Mn.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&Mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mn)))}_computeIntersections(e,t,i){let n,a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let b=0,g=d.length;b<g;b++){let f=d[b],m=s[f.materialIndex],_=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let x=_,E=v;x<E;x+=3){let w=o.getX(x),S=o.getX(x+1),A=o.getX(x+2);n=wo(this,m,e,i,l,h,u,w,S,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{let b=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let f=b,m=g;f<m;f+=3){let _=o.getX(f),v=o.getX(f+1),x=o.getX(f+2);n=wo(this,s,e,i,l,h,u,_,v,x),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let b=0,g=d.length;b<g;b++){let f=d[b],m=s[f.materialIndex],_=Math.max(f.start,p.start),v=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let x=_,E=v;x<E;x+=3){let w=x,S=x+1,A=x+2;n=wo(this,m,e,i,l,h,u,w,S,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{let b=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let f=b,m=g;f<m;f+=3){let _=f,v=f+1,x=f+2;n=wo(this,s,e,i,l,h,u,_,v,x),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}};function J_(r,e,t,i,n,a,s,o){let c;if(e.side===$t?c=i.intersectTriangle(s,a,n,!0,o):c=i.intersectTriangle(n,a,s,e.side===ir,o),c===null)return null;To.copy(o),To.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(To);return l<t.near||l>t.far?null:{distance:l,point:To.clone(),object:r}}function wo(r,e,t,i,n,a,s,o,c,l){r.getVertexPosition(o,yo),r.getVertexPosition(c,Mo),r.getVertexPosition(l,So);let h=J_(r,e,t,i,yo,Mo,So,uf);if(h){let u=new P;hi.getBarycoord(uf,yo,Mo,So,u),n&&(h.uv=hi.getInterpolatedAttribute(n,o,c,l,u,new Me)),a&&(h.uv1=hi.getInterpolatedAttribute(a,o,c,l,u,new Me)),s&&(h.normal=hi.getInterpolatedAttribute(s,o,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};hi.getNormal(yo,Mo,So,d.normal),h.face=d,h.barycoord=u}return h}var La=class r extends qt{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=0,p=0;b("z","y","x",-1,-1,i,t,e,s,a,0),b("z","y","x",1,-1,i,t,-e,s,a,1),b("x","z","y",1,1,e,i,t,n,s,2),b("x","z","y",1,-1,e,i,-t,n,s,3),b("x","y","z",1,-1,e,t,i,n,a,4),b("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new er(l,3)),this.setAttribute("normal",new er(h,3)),this.setAttribute("uv",new er(u,2));function b(g,f,m,_,v,x,E,w,S,A,M){let y=x/S,C=E/A,D=x/2,L=E/2,B=w/2,j=S+1,z=A+1,q=0,W=0,$=new P;for(let ue=0;ue<z;ue++){let Ee=ue*C-L;for(let Ue=0;Ue<j;Ue++){let Je=Ue*y-D;$[g]=Je*_,$[f]=Ee*v,$[m]=B,l.push($.x,$.y,$.z),$[g]=0,$[f]=0,$[m]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(Ue/S),u.push(1-ue/A),q+=1}}for(let ue=0;ue<A;ue++)for(let Ee=0;Ee<S;Ee++){let Ue=d+Ee+j*ue,Je=d+Ee+j*(ue+1),Y=d+(Ee+1)+j*(ue+1),te=d+(Ee+1)+j*ue;c.push(Ue,Je,te),c.push(Je,Y,te),W+=6}o.addGroup(p,W,M),p+=W,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Da(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ti(r){let e={};for(let t=0;t<r.length;t++){let i=Da(r[t]);for(let n in i)e[n]=i[n]}return e}function Q_(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rg(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var $_={clone:Da,merge:ti},ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ev,this.fragmentShader=tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ng=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Ar}copy(r,e){return super.copy(r,e),this.matrixWorldInverse.copy(r.matrixWorldInverse),this.projectionMatrix.copy(r.projectionMatrix),this.projectionMatrixInverse.copy(r.projectionMatrixInverse),this.coordinateSystem=r.coordinateSystem,this}getWorldDirection(r){return super.getWorldDirection(r).negate()}updateMatrixWorld(r){super.updateMatrixWorld(r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(r,e){super.updateWorldMatrix(r,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xr=new P,df=new Me,pf=new Me,Ft=class extends ng{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,df,pf),t.subVectors(pf,df)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(As*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*n/c,t-=s.offsetY*i/l,n*=s.width/c,i*=s.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ra=-90,na=1,nu=class extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ft(ra,na,e,t);n.layers=this.layers,this.add(n);let a=new Ft(ra,na,e,t);a.layers=this.layers,this.add(a);let s=new Ft(ra,na,e,t);s.layers=this.layers,this.add(s);let o=new Ft(ra,na,e,t);o.layers=this.layers,this.add(o);let c=new Ft(ra,na,e,t);c.layers=this.layers,this.add(c);let l=new Ft(ra,na,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,c]=t;for(let l of t)this.remove(l);if(e===Ar)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,c),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}},vc=class extends Xt{constructor(e,t,i,n,a,s,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wa,super(e,t,i,n,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},au=class extends Dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new vc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new La(5,5,5),a=new Fi({name:"CubemapFromEquirect",uniforms:Da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:rn});a.uniforms.tEquirect.value=t;let s=new He(n,a),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=_i),new nu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}},Ol=new P,iv=new P,rv=new Be,Li=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ol.subVectors(i,t).cross(iv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ol),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rv.getNormalMatrix(e),n=this.coplanarPoint(Ol).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sn=new Dt,Ao=new P,Ua=class{constructor(e=new Li,t=new Li,i=new Li,n=new Li,a=new Li,s=new Li){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ar){let i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],c=n[3],l=n[4],h=n[5],u=n[6],d=n[7],p=n[8],b=n[9],g=n[10],f=n[11],m=n[12],_=n[13],v=n[14],x=n[15];if(i[0].setComponents(c-a,d-l,f-p,x-m).normalize(),i[1].setComponents(c+a,d+l,f+p,x+m).normalize(),i[2].setComponents(c+s,d+h,f+b,x+_).normalize(),i[3].setComponents(c-s,d-h,f-b,x-_).normalize(),i[4].setComponents(c-o,d-u,f-g,x-v).normalize(),t===Ar)i[5].setComponents(c+o,d+u,f+g,x+v).normalize();else if(t===fc)i[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ao.x=n.normal.x>0?e.max.x:e.min.x,Ao.y=n.normal.y>0?e.max.y:e.min.y,Ao.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ag(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function nv(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((p,b)=>p.start-b.start);let d=0;for(let p=1;p<u.length;p++){let b=u[d],g=u[p];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,b=u.length;p<b;p++){let g=u[p];r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:a,update:s}}var Na=class r extends qt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,d=t/c,p=[],b=[],g=[],f=[];for(let m=0;m<h;m++){let _=m*d-s;for(let v=0;v<l;v++){let x=v*u-a;b.push(x,-_,0),g.push(0,0,1),f.push(v/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let v=_+l*m,x=_+l*(m+1),E=_+1+l*(m+1),w=_+1+l*m;p.push(v,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new er(b,3)),this.setAttribute("normal",new er(g,3)),this.setAttribute("uv",new er(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_v=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ov=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:av,alphahash_pars_fragment:sv,alphamap_fragment:ov,alphamap_pars_fragment:cv,alphatest_fragment:lv,alphatest_pars_fragment:hv,aomap_fragment:uv,aomap_pars_fragment:dv,batching_pars_vertex:pv,batching_vertex:fv,begin_vertex:mv,beginnormal_vertex:gv,bsdfs:bv,iridescence_fragment:_v,bumpmap_pars_fragment:vv,clipping_planes_fragment:xv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:Sv,color_fragment:Ev,color_pars_fragment:Tv,color_pars_vertex:wv,color_vertex:Av,common:Rv,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Lv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Uv,colorspace_fragment:Nv,colorspace_pars_fragment:Ov,envmap_fragment:kv,envmap_common_pars_fragment:Bv,envmap_pars_fragment:Fv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Jv,envmap_vertex:Hv,fog_vertex:Vv,fog_pars_vertex:Gv,fog_fragment:jv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:qv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:Kv,lights_pars_begin:Zv,lights_toon_fragment:Qv,lights_toon_pars_fragment:$v,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:i0,lights_physical_pars_fragment:r0,lights_fragment_begin:n0,lights_fragment_maps:a0,lights_fragment_end:s0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:f0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:b0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:x0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:E0,normal_pars_vertex:T0,normal_vertex:w0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:I0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:U0,project_vertex:N0,dithering_fragment:O0,dithering_pars_fragment:k0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:H0,shadowmap_vertex:V0,shadowmask_pars_fragment:G0,skinbase_vertex:j0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:K0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:$0,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:ix,worldpos_vertex:rx,background_vert:nx,background_frag:ax,backgroundCube_vert:sx,backgroundCube_frag:ox,cube_vert:cx,cube_frag:lx,depth_vert:hx,depth_frag:ux,distanceRGBA_vert:dx,distanceRGBA_frag:px,equirect_vert:fx,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:bx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:xx,meshlambert_frag:yx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:Ex,meshnormal_frag:Tx,meshphong_vert:wx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Lx,points_frag:Dx,shadow_vert:Ux,shadow_frag:Nx,sprite_vert:Ox,sprite_frag:kx},ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},or={basic:{uniforms:ti([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:ti([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:ti([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:ti([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:ti([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:ti([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:ti([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:ti([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:ti([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:ti([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:ti([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:ti([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:ti([ae.lights,ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};or.physical={uniforms:ti([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Ro={r:0,b:0,g:0},En=new cr,Bx=new ye;function Fx(r,e,t,i,n,a,s){let o=new Re(0),c=a===!0?0:1,l,h,u=null,d=0,p=null;function b(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function g(_){let v=!1,x=b(_);x===null?m(o,c):x&&x.isColor&&(m(x,1),v=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(_,v){let x=b(v);x&&(x.isCubeTexture||x.mapping===Bc)?(h===void 0&&(h=new He(new La(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Da(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),En.copy(v.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(En)),h.material.toneMapped=je.getTransfer(x.colorSpace)!==nt,(u!==x||d!==x.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new He(new Na(2,2),new Fi({name:"BackgroundMaterial",uniforms:Da(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(Ro,rg(r)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(o,c)},render:g,addToRenderList:f}}function zx(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),a=n,s=!1;function o(y,C,D,L,B){let j=!1,z=u(L,D,C);a!==z&&(a=z,l(a.object)),j=p(y,L,D,B),j&&b(y,L,D,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,x(y,C,D,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,C,D){let L=D.wireframe===!0,B=i[y.id];B===void 0&&(B={},i[y.id]=B);let j=B[C.id];j===void 0&&(j={},B[C.id]=j);let z=j[L];return z===void 0&&(z=d(c()),j[L]=z),z}function d(y){let C=[],D=[],L=[];for(let B=0;B<t;B++)C[B]=0,D[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:L,object:y,attributes:{},index:null}}function p(y,C,D,L){let B=a.attributes,j=C.attributes,z=0,q=D.getAttributes();for(let W in q)if(q[W].location>=0){let $=B[W],ue=j[W];if(ue===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),$===void 0||$.attribute!==ue||ue&&$.data!==ue.data)return!0;z++}return a.attributesNum!==z||a.index!==L}function b(y,C,D,L){let B={},j=C.attributes,z=0,q=D.getAttributes();for(let W in q)if(q[W].location>=0){let $=j[W];$===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&($=y.instanceColor));let ue={};ue.attribute=$,$&&$.data&&(ue.data=$.data),B[W]=ue,z++}a.attributes=B,a.attributesNum=z,a.index=L}function g(){let y=a.newAttributes;for(let C=0,D=y.length;C<D;C++)y[C]=0}function f(y){m(y,0)}function m(y,C){let D=a.newAttributes,L=a.enabledAttributes,B=a.attributeDivisors;D[y]=1,L[y]===0&&(r.enableVertexAttribArray(y),L[y]=1),B[y]!==C&&(r.vertexAttribDivisor(y,C),B[y]=C)}function _(){let y=a.newAttributes,C=a.enabledAttributes;for(let D=0,L=C.length;D<L;D++)C[D]!==y[D]&&(r.disableVertexAttribArray(D),C[D]=0)}function v(y,C,D,L,B,j,z){z===!0?r.vertexAttribIPointer(y,C,D,B,j):r.vertexAttribPointer(y,C,D,L,B,j)}function x(y,C,D,L){g();let B=L.attributes,j=D.getAttributes(),z=C.defaultAttributeValues;for(let q in j){let W=j[q];if(W.location>=0){let $=B[q];if($===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){let ue=$.normalized,Ee=$.itemSize,Ue=e.get($);if(Ue===void 0)continue;let Je=Ue.buffer,Y=Ue.type,te=Ue.bytesPerElement,be=Y===r.INT||Y===r.UNSIGNED_INT||$.gpuType===Hd;if($.isInterleavedBufferAttribute){let oe=$.data,Ie=oe.stride,Oe=$.offset;if(oe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<W.locationSize;Ve++)m(W.location+Ve,oe.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ve=0;Ve<W.locationSize;Ve++)f(W.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let Ve=0;Ve<W.locationSize;Ve++)v(W.location+Ve,Ee/W.locationSize,Y,ue,Ie*te,(Oe+Ee/W.locationSize*Ve)*te,be)}else{if($.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe,$.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<W.locationSize;oe++)f(W.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let oe=0;oe<W.locationSize;oe++)v(W.location+oe,Ee/W.locationSize,Y,ue,Ee*te,Ee/W.locationSize*oe*te,be)}}else if(z!==void 0){let ue=z[q];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(W.location,ue);break;case 3:r.vertexAttrib3fv(W.location,ue);break;case 4:r.vertexAttrib4fv(W.location,ue);break;default:r.vertexAttrib1fv(W.location,ue)}}}}_()}function E(){A();for(let y in i){let C=i[y];for(let D in C){let L=C[D];for(let B in L)h(L[B].object),delete L[B];delete C[D]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;let C=i[y.id];for(let D in C){let L=C[D];for(let B in L)h(L[B].object),delete L[B];delete C[D]}delete i[y.id]}function S(y){for(let C in i){let D=i[C];if(D[y.id]===void 0)continue;let L=D[y.id];for(let B in L)h(L[B].object),delete L[B];delete D[y.id]}}function A(){M(),s=!0,a!==n&&(a=n,l(a.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:f,disableUnusedAttributes:_}}function Hx(r,e,t){let i;function n(l){i=l}function a(l,h){r.drawArrays(i,l,h),t.update(h,i,1)}function s(l,h,u){u!==0&&(r.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let b=0;b<l.length;b++)s(l[b],h[b],d[b]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let b=0;for(let g=0;g<u;g++)b+=h[g]*d[g];t.update(b,i,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vx(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){return!(S!==di&&i.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let A=S===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Ir&&i.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==vi&&!A)}function c(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=b>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:w}}function Gx(r){let e=this,t=null,i=0,n=!1,a=!1,s=new Li,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let b=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,m=r.get(u);if(!n||b===null||b.length===0||a&&!f)a?h(null):l();else{let _=a?0:i,v=_*4,x=m.clippingState||null;c.value=x,x=h(b,d,v,p);for(let E=0;E!==v;++E)x[E]=t[E];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,b){let g=u!==null?u.length:0,f=null;if(g!==0){if(f=c.value,b!==!0||f===null){let m=p+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,x=p;v!==g;++v,x+=4)s.copy(u[v]).applyMatrix4(_,o),s.normal.toArray(f,x),f[x+3]=s.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function jx(r){let e=new WeakMap;function t(s,o){return o===Th?s.mapping=wa:o===wh&&(s.mapping=Aa),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===Th||o===wh)if(e.has(s)){let c=e.get(s).texture;return t(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let l=new au(c.height);return l.fromEquirectangularTexture(r,s),e.set(s,l),s.addEventListener("dispose",n),t(l.texture,s.mapping)}else return null}}return s}function n(s){let o=s.target;o.removeEventListener("dispose",n);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}var Fs=class extends ng{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,a=i-e,s=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ga=4,ff=[.125,.215,.35,.446,.526,.582],Dn=20,kl=new Fs,mf=new Re,Bl=null,Fl=0,zl=0,Hl=!1,Ln=(1+Math.sqrt(5))/2,aa=1/Ln,gf=[new P(-Ln,aa,0),new P(Ln,aa,0),new P(-aa,0,Ln),new P(aa,0,Ln),new P(0,Ln,-aa),new P(0,Ln,aa),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Bl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,Fl,zl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wa||e.mapping===Aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Ys,format:di,colorSpace:ri,depthBuffer:!1},n=bf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(a)),this._blurMaterial=Xx(a,e,t)}return n}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,i,n){let a=new Ft(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(mf),c.toneMapping=nn,c.autoClear=!1;let u=new Ui({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),d=new He(new La,u),p=!1,b=e.background;b?b.isColor&&(u.color.copy(b),e.background=null,p=!0):(u.color.copy(mf),p=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(a.up.set(0,s[g],0),a.lookAt(o[g],0,0)):f===1?(a.up.set(0,0,s[g]),a.lookAt(0,o[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,o[g]));let m=this._cubeSize;Co(n,f*m,g>2?m:0,m,m),c.setRenderTarget(n),p&&c.render(d,a),c.render(e,a)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===wa||e.mapping===Aa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let a=n?this._cubemapMaterial:this._equirectMaterial,s=new He(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;let c=this._cubeSize;Co(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,kl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let a=1;a<n;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=gf[(n-a-1)%gf.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new He(this._lodPlanes[n],l),d=l.uniforms,p=this._sizeLods[i]-1,b=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Dn-1),g=a/b,f=isFinite(a)?1+Math.floor(h*g):Dn;f>Dn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Dn}`);let m=[],_=0;for(let S=0;S<Dn;++S){let A=S/g,M=Math.exp(-A*A/2);m.push(M),S===0?_+=M:S<f&&(_+=2*M)}for(let S=0;S<m.length;S++)m[S]=m[S]/_;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=b,d.mipInt.value=v-i;let x=this._sizeLods[n],E=3*x*(n>v-ga?n-v+ga:0),w=4*(this._cubeSize-x);Co(t,E,w,3*x,2*x),c.setRenderTarget(t),c.render(u,kl)}};function Wx(r){let e=[],t=[],i=[],n=r,a=r-ga+1+ff.length;for(let s=0;s<a;s++){let o=Math.pow(2,n);t.push(o);let c=1/o;s>r-ga?c=ff[s-r+ga-1]:s===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,b=6,g=3,f=2,m=1,_=new Float32Array(g*b*p),v=new Float32Array(f*b*p),x=new Float32Array(m*b*p);for(let w=0;w<p;w++){let S=w%3*2/3-1,A=w>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];_.set(M,g*b*w),v.set(d,f*b*w);let y=[w,w,w,w,w,w];x.set(y,m*b*w)}let E=new qt;E.setAttribute("position",new st(_,g)),E.setAttribute("uv",new st(v,f)),E.setAttribute("faceIndex",new st(x,m)),e.push(E),n>ga&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bf(r,e,t){let i=new Dr(r,e,t);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Xx(r,e,t){let i=new Float32Array(Dn),n=new P(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function _f(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function vf(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qx(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Th||c===wh,h=c===wa||c===Aa;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new zs(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new zs(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function n(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Yx(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Ss("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Kx(r,e,t,i){let n={},a=new WeakMap;function s(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let b in d.attributes)e.remove(d.attributes[b]);for(let b in d.morphAttributes){let g=d.morphAttributes[b];for(let f=0,m=g.length;f<m;f++)e.remove(g[f])}d.removeEventListener("dispose",s),delete n[d.id];let p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let b in d)e.update(d[b],r.ARRAY_BUFFER);let p=u.morphAttributes;for(let b in p){let g=p[b];for(let f=0,m=g.length;f<m;f++)e.update(g[f],r.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,b=u.attributes.position,g=0;if(p!==null){let _=p.array;g=p.version;for(let v=0,x=_.length;v<x;v+=3){let E=_[v+0],w=_[v+1],S=_[v+2];d.push(E,w,w,S,S,E)}}else if(b!==void 0){let _=b.array;g=b.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let E=v+0,w=v+1,S=v+2;d.push(E,w,w,S,S,E)}}else return;let f=new(tg(d)?_c:bc)(d,1);f.version=g;let m=a.get(u);m&&e.remove(m),a.set(u,f)}function h(u){let d=a.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Zx(r,e,t){let i;function n(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function c(d,p){r.drawElements(i,p,a,d*s),t.update(p,i,1)}function l(d,p,b){b!==0&&(r.drawElementsInstanced(i,p,a,d*s,b),t.update(p,i,b))}function h(d,p,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,b);let g=0;for(let f=0;f<b;f++)g+=p[f];t.update(g,i,1)}function u(d,p,b,g){if(b===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)l(d[m]/s,p[m],g[m]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,g,0,b);let m=0;for(let _=0;_<b;_++)m+=p[_]*g[_];t.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jx(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Qx(r,e,t){let i=new WeakMap,n=new tt;function a(s,o,c){let l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let b=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;g===!0&&(E=1),f===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let A=new Float32Array(w*S*4*u),M=new gc(A,w,S,u);M.type=vi,M.needsUpdate=!0;let y=E*4;for(let C=0;C<u;C++){let D=_[C],L=v[C],B=x[C],j=w*S*4*C;for(let z=0;z<D.count;z++){let q=z*y;g===!0&&(n.fromBufferAttribute(D,z),A[j+q+0]=n.x,A[j+q+1]=n.y,A[j+q+2]=n.z,A[j+q+3]=0),f===!0&&(n.fromBufferAttribute(L,z),A[j+q+4]=n.x,A[j+q+5]=n.y,A[j+q+6]=n.z,A[j+q+7]=0),m===!0&&(n.fromBufferAttribute(B,z),A[j+q+8]=n.x,A[j+q+9]=n.y,A[j+q+10]=n.z,A[j+q+11]=B.itemSize===4?n.w:1)}}d={count:u,texture:M,size:new Me(w,S)},i.set(o,d),o.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let b=0;for(let f=0;f<l.length;f++)b+=l[f];let g=o.morphTargetsRelative?1:1-b;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:a}}function $x(r,e,t,i){let n=new WeakMap;function a(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(n.get(u)!==l&&(e.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function s(){n=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}var xc=class extends Xt{constructor(e,t,i,n,a,s,o,c,l,h=xa){if(h!==xa&&h!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xa&&(i=an),i===void 0&&h===Pa&&(i=Ca),super(null,n,a,s,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ii,this.minFilter=c!==void 0?c:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sg=new Xt,xf=new xc(1,1),og=new gc,cg=new ru,lg=new vc,yf=[],Mf=[],Sf=new Float32Array(16),Ef=new Float32Array(9),Tf=new Float32Array(4);function Va(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,a=yf[n];if(a===void 0&&(a=new Float32Array(n),yf[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Nt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Hc(r,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function ey(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ty(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),Nt(t,e)}}function iy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),Nt(t,e)}}function ry(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),Nt(t,e)}}function ny(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Tf.set(i),r.uniformMatrix2fv(this.addr,!1,Tf),Nt(t,i)}}function ay(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Ef.set(i),r.uniformMatrix3fv(this.addr,!1,Ef),Nt(t,i)}}function sy(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Sf.set(i),r.uniformMatrix4fv(this.addr,!1,Sf),Nt(t,i)}}function oy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),Nt(t,e)}}function ly(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),Nt(t,e)}}function hy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),Nt(t,e)}}function uy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),Nt(t,e)}}function py(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),Nt(t,e)}}function fy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),Nt(t,e)}}function my(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(xf.compareFunction=eg,a=xf):a=sg,t.setTexture2D(e||a,n)}function gy(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||cg,n)}function by(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||lg,n)}function _y(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||og,n)}function vy(r){switch(r){case 5126:return ey;case 35664:return ty;case 35665:return iy;case 35666:return ry;case 35674:return ny;case 35675:return ay;case 35676:return sy;case 5124:case 35670:return oy;case 35667:case 35671:return cy;case 35668:case 35672:return ly;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return py;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return _y}}function xy(r,e){r.uniform1fv(this.addr,e)}function yy(r,e){let t=Va(e,this.size,2);r.uniform2fv(this.addr,t)}function My(r,e){let t=Va(e,this.size,3);r.uniform3fv(this.addr,t)}function Sy(r,e){let t=Va(e,this.size,4);r.uniform4fv(this.addr,t)}function Ey(r,e){let t=Va(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ty(r,e){let t=Va(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wy(r,e){let t=Va(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ay(r,e){r.uniform1iv(this.addr,e)}function Ry(r,e){r.uniform2iv(this.addr,e)}function Cy(r,e){r.uniform3iv(this.addr,e)}function Py(r,e){r.uniform4iv(this.addr,e)}function Iy(r,e){r.uniform1uiv(this.addr,e)}function Ly(r,e){r.uniform2uiv(this.addr,e)}function Dy(r,e){r.uniform3uiv(this.addr,e)}function Uy(r,e){r.uniform4uiv(this.addr,e)}function Ny(r,e,t){let i=this.cache,n=e.length,a=Hc(t,n);Ut(i,a)||(r.uniform1iv(this.addr,a),Nt(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||sg,a[s])}function Oy(r,e,t){let i=this.cache,n=e.length,a=Hc(t,n);Ut(i,a)||(r.uniform1iv(this.addr,a),Nt(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||cg,a[s])}function ky(r,e,t){let i=this.cache,n=e.length,a=Hc(t,n);Ut(i,a)||(r.uniform1iv(this.addr,a),Nt(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||lg,a[s])}function By(r,e,t){let i=this.cache,n=e.length,a=Hc(t,n);Ut(i,a)||(r.uniform1iv(this.addr,a),Nt(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||og,a[s])}function Fy(r){switch(r){case 5126:return xy;case 35664:return yy;case 35665:return My;case 35666:return Sy;case 35674:return Ey;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Ly;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return By}}var su=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vy(t.type)}},ou=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fy(t.type)}},cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let a=0,s=n.length;a!==s;++a){let o=n[a];o.setValue(e,t[o.id],i)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function wf(r,e){r.seq.push(e),r.map[e.id]=e}function zy(r,e,t){let i=r.name,n=i.length;for(Vl.lastIndex=0;;){let a=Vl.exec(i),s=Vl.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===n){wf(t,l===void 0?new su(o,r,e):new ou(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new cu(o),wf(t,h)),t=h}}}var Ma=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);zy(a,s,this)}}setValue(e,t,i,n){let a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){let o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,a=e.length;n!==a;++n){let s=e[n];s.id in t&&i.push(s)}return i}};function Af(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Hy=37297,Vy=0;function Gy(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){let o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}var Rf=new Be;function jy(r){je._getMatrix(Rf,je.workingColorSpace,r);let e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(r)){case zc:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cf(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Gy(r.getShaderSource(e),s)}else return n}function Wy(r,e){let t=jy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xy(r,e){let t;switch(e){case t_:t="Linear";break;case i_:t="Reinhard";break;case r_:t="Cineon";break;case n_:t="ACESFilmic";break;case s_:t="AgX";break;case zm:t="Neutral";break;case a_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Po=new P;function qy(){je.getLuminanceCoefficients(Po);let r=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Ky(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Zy(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let a=r.getActiveAttrib(e,n),s=a.name,o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Es(r){return r!==""}function Pf(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(r){return r.replace(Jy,$y)}var Qy=new Map;function $y(r,e){let t=ze[e];if(t===void 0){let i=Qy.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}var eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(r){return r.replace(eM,tM)}function tM(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Df(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Nm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Sr&&(e="SHADOWMAP_TYPE_VSM"),e}function rM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wa:case Aa:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nM(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Aa&&(e="ENVMAP_MODE_REFRACTION"),e}function aM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fm:e="ENVMAP_BLENDING_MULTIPLY";break;case $b:e="ENVMAP_BLENDING_MIX";break;case e_:e="ENVMAP_BLENDING_ADD";break}return e}function sM(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function oM(r,e,t,i){let n=r.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,c=iM(t),l=rM(t),h=nM(t),u=aM(t),d=sM(t),p=Yy(t),b=Ky(a),g=n.createProgram(),f,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Es).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Es).join(`
`),m.length>0&&(m+=`
`)):(f=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),m=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==nn?Xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Wy("linearToOutputTexel",t.outputColorSpace),qy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),s=lu(s),s=Pf(s,t),s=If(s,t),o=lu(o),o=Pf(o,t),o=If(o,t),s=Lf(s),o=Lf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+f+s,x=_+m+o,E=Af(n,n.VERTEX_SHADER,v),w=Af(n,n.FRAGMENT_SHADER,x);n.attachShader(g,E),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function S(C){if(r.debug.checkShaderErrors){let D=n.getProgramInfoLog(g).trim(),L=n.getShaderInfoLog(E).trim(),B=n.getShaderInfoLog(w).trim(),j=!0,z=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,E,w);else{let q=Cf(n,E,"vertex"),W=Cf(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+q+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||B==="")&&(z=!1);z&&(C.diagnostics={runnable:j,programLog:D,vertexShader:{log:L,prefix:f},fragmentShader:{log:B,prefix:m}})}n.deleteShader(E),n.deleteShader(w),A=new Ma(n,g),M=Zy(n,g)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(g,Hy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}var cM=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new uu(e),t.set(e,i)),i}},uu=class{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}};function lM(r,e,t,i,n,a,s){let o=new Bs,c=new hu,l=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function f(M,y,C,D,L){let B=D.fog,j=L.geometry,z=M.isMeshStandardMaterial?D.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),W=q&&q.mapping===Bc?q.image.height:null,$=b[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ee=ue!==void 0?ue.length:0,Ue=0;j.morphAttributes.position!==void 0&&(Ue=1),j.morphAttributes.normal!==void 0&&(Ue=2),j.morphAttributes.color!==void 0&&(Ue=3);let Je,Y,te,be;if($){let it=or[$];Je=it.vertexShader,Y=it.fragmentShader}else Je=M.vertexShader,Y=M.fragmentShader,c.update(M),te=c.getVertexShaderID(M),be=c.getFragmentShaderID(M);let oe=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Oe=L.isInstancedMesh===!0,Ve=L.isBatchedMesh===!0,_t=!!M.map,Ke=!!M.matcap,Et=!!q,k=!!M.aoMap,Ci=!!M.lightMap,We=!!M.bumpMap,Xe=!!M.normalMap,Ce=!!M.displacementMap,lt=!!M.emissiveMap,we=!!M.metalnessMap,I=!!M.roughnessMap,T=M.anisotropy>0,F=M.clearcoat>0,Z=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,_e=M.transmission>0,ce=T&&!!M.anisotropyMap,me=F&&!!M.clearcoatMap,Ze=F&&!!M.clearcoatNormalMap,ie=F&&!!M.clearcoatRoughnessMap,pe=Q&&!!M.iridescenceMap,Pe=Q&&!!M.iridescenceThicknessMap,De=K&&!!M.sheenColorMap,fe=K&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Fe=!!M.specularColorMap,ct=!!M.specularIntensityMap,N=_e&&!!M.transmissionMap,se=_e&&!!M.thicknessMap,X=!!M.gradientMap,J=!!M.alphaMap,he=M.alphaTest>0,ne=!!M.alphaHash,Ye=!!M.extensions,xt=nn;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xt=r.toneMapping);let Kt={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:Y,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&L._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&L.instanceColor!==null,instancingMorph:Oe&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ri,alphaToCoverage:!!M.alphaToCoverage,map:_t,matcap:Ke,envMap:Et,envMapMode:Et&&q.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:Ci,bumpMap:We,normalMap:Xe,displacementMap:d&&Ce,emissiveMap:lt,normalMapObjectSpace:Xe&&M.normalMapType===d_,normalMapTangentSpace:Xe&&M.normalMapType===$m,metalnessMap:we,roughnessMap:I,anisotropy:T,anisotropyMap:ce,clearcoat:F,clearcoatMap:me,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Pe,sheen:K,sheenColorMap:De,sheenRoughnessMap:fe,specularMap:qe,specularColorMap:Fe,specularIntensityMap:ct,transmission:_e,transmissionMap:N,thicknessMap:se,gradientMap:X,opaque:M.transparent===!1&&M.blending===va&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:ne,combine:M.combine,mapUv:_t&&g(M.map.channel),aoMapUv:k&&g(M.aoMap.channel),lightMapUv:Ci&&g(M.lightMap.channel),bumpMapUv:We&&g(M.bumpMap.channel),normalMapUv:Xe&&g(M.normalMap.channel),displacementMapUv:Ce&&g(M.displacementMap.channel),emissiveMapUv:lt&&g(M.emissiveMap.channel),metalnessMapUv:we&&g(M.metalnessMap.channel),roughnessMapUv:I&&g(M.roughnessMap.channel),anisotropyMapUv:ce&&g(M.anisotropyMap.channel),clearcoatMapUv:me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(M.sheenRoughnessMap.channel),specularMapUv:qe&&g(M.specularMap.channel),specularColorMapUv:Fe&&g(M.specularColorMap.channel),specularIntensityMapUv:ct&&g(M.specularIntensityMap.channel),transmissionMapUv:N&&g(M.transmissionMap.channel),thicknessMapUv:se&&g(M.thicknessMap.channel),alphaMapUv:J&&g(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Xe||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!j.attributes.uv&&(_t||J),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:L.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:_t&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zi,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function m(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(y,M),v(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let y=b[M.type],C;if(y){let D=or[y];C=$_.clone(D.uniforms)}else C=M.uniforms;return C}function E(M,y){let C;for(let D=0,L=h.length;D<L;D++){let B=h[D];if(B.cacheKey===y){C=B,++C.usedTimes;break}}return C===void 0&&(C=new oM(r,y,M,a),h.push(C)),C}function w(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function S(M){c.remove(M)}function A(){c.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:A}}function hM(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,c){r.get(s)[o]=c}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function uM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Uf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nf(){let r=[],e=0,t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(u,d,p,b,g,f){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:b,renderOrder:u.renderOrder,z:g,group:f},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=b,m.renderOrder=u.renderOrder,m.z=g,m.group=f),e++,m}function o(u,d,p,b,g,f){let m=s(u,d,p,b,g,f);p.transmission>0?i.push(m):p.transparent===!0?n.push(m):t.push(m)}function c(u,d,p,b,g,f){let m=s(u,d,p,b,g,f);p.transmission>0?i.unshift(m):p.transparent===!0?n.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||uM),i.length>1&&i.sort(d||Uf),n.length>1&&n.sort(d||Uf)}function h(){for(let u=e,d=r.length;u<d;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:c,finish:h,sort:l}}function dM(){let r=new WeakMap;function e(i,n){let a=r.get(i),s;return a===void 0?(s=new Nf,r.set(i,[s])):n>=a.length?(s=new Nf,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function pM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function fM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var mM=0;function gM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bM(r){let e=new pM,t=fM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let n=new P,a=new ye,s=new ye;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,b=0,g=0,f=0,m=0,_=0,v=0,x=0,E=0,w=0,S=0;l.sort(gM);for(let M=0,y=l.length;M<y;M++){let C=l[M],D=C.color,L=C.intensity,B=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*L,u+=D.g*L,d+=D.b*L;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],L);S++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,W=t.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=C.shadow.matrix,_++}i.directional[p]=z,p++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(D).multiplyScalar(L),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[g]=z;let q=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,q.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[g]=q.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=j,x++}g++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(D).multiplyScalar(L),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=z,f++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let q=C.shadow,W=t.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,i.pointShadow[b]=W,i.pointShadowMap[b]=j,i.pointShadowMatrix[b]=C.shadow.matrix,v++}i.point[b]=z,b++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(L),z.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[m]=z,m++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let A=i.hash;(A.directionalLength!==p||A.pointLength!==b||A.spotLength!==g||A.rectAreaLength!==f||A.hemiLength!==m||A.numDirectionalShadows!==_||A.numPointShadows!==v||A.numSpotShadows!==x||A.numSpotMaps!==E||A.numLightProbes!==S)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=f,i.point.length=b,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=S,A.directionalLength=p,A.pointLength=b,A.spotLength=g,A.rectAreaLength=f,A.hemiLength=m,A.numDirectionalShadows=_,A.numPointShadows=v,A.numSpotShadows=x,A.numSpotMaps=E,A.numLightProbes=S,i.version=mM++)}function c(l,h){let u=0,d=0,p=0,b=0,g=0,f=h.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){let v=l[m];if(v.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(f),u++}else if(v.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(f),p++}else if(v.isRectAreaLight){let x=i.rectArea[b];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),s.identity(),a.copy(v.matrixWorld),a.premultiply(f),s.extractRotation(a),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){let x=i.hemi[g];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(f),g++}}}return{setup:o,setupView:c,state:i}}function Of(r){let e=new bM(r),t=[],i=[];function n(h){l.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function _M(r){let e=new WeakMap;function t(n,a=0){let s=e.get(n),o;return s===void 0?(o=new Of(r),e.set(n,[o])):a>=s.length?(o=new Of(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var du=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pu=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yM(r,e,t){let i=new Ua,n=new Me,a=new Me,s=new tt,o=new du({depthPacking:u_}),c=new pu,l={},h=t.maxTextureSize,u={[ir]:$t,[$t]:ir,[Zi]:Zi},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let b=new qt;b.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new He(b,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let m=this.type;this.render=function(w,S,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;let M=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),D=r.state;D.setBlending(rn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=m!==Sr&&this.type===Sr,B=m===Sr&&this.type!==Sr;for(let j=0,z=w.length;j<z;j++){let q=w[j],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let $=W.getFrameExtents();if(n.multiply($),a.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/$.x),n.x=a.x*$.x,W.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/$.y),n.y=a.y*$.y,W.mapSize.y=a.y)),W.map===null||L===!0||B===!0){let Ee=this.type!==Sr?{minFilter:ii,magFilter:ii}:{};W.map!==null&&W.map.dispose(),W.map=new Dr(n.x,n.y,Ee),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let ue=W.getViewportCount();for(let Ee=0;Ee<ue;Ee++){let Ue=W.getViewport(Ee);s.set(a.x*Ue.x,a.y*Ue.y,a.x*Ue.z,a.y*Ue.w),D.viewport(s),W.updateMatrices(q,Ee),i=W.getFrustum(),x(S,A,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Sr&&_(W,A),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(M,y,C)};function _(w,S){let A=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dr(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,A,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,A,p,g,null)}function v(w,S,A,M){let y=null,C=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=A.isPointLight===!0?c:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let D=y.uuid,L=S.uuid,B=l[D];B===void 0&&(B={},l[D]=B);let j=B[L];j===void 0&&(j=y.clone(),B[L]=j,S.addEventListener("dispose",E)),y=j}if(y.visible=S.visible,y.wireframe=S.wireframe,M===Sr?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:u[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=r.properties.get(y);D.light=A}return y}function x(w,S,A,M,y){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Sr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let D=e.update(w),L=w.material;if(Array.isArray(L)){let B=D.groups;for(let j=0,z=B.length;j<z;j++){let q=B[j],W=L[q.materialIndex];if(W&&W.visible){let $=v(w,W,M,y);w.onBeforeShadow(r,w,S,A,D,$,q),r.renderBufferDirect(A,null,D,$,w,q),w.onAfterShadow(r,w,S,A,D,$,q)}}}else if(L.visible){let B=v(w,L,M,y);w.onBeforeShadow(r,w,S,A,D,B,null),r.renderBufferDirect(A,null,D,B,w,null),w.onAfterShadow(r,w,S,A,D,B,null)}}let C=w.children;for(let D=0,L=C.length;D<L;D++)x(C[D],S,A,M,y)}function E(w){w.target.removeEventListener("dispose",E);for(let S in l){let A=l[S],M=w.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}var MM={[_h]:vh,[xh]:Sh,[yh]:Eh,[Ta]:Mh,[vh]:_h,[Sh]:xh,[Eh]:yh,[Mh]:Ta};function SM(r,e){function t(){let N=!1,se=new tt,X=null,J=new tt(0,0,0,0);return{setMask:function(he){X!==he&&!N&&(r.colorMask(he,he,he,he),X=he)},setLocked:function(he){N=he},setClear:function(he,ne,Ye,xt,Kt){Kt===!0&&(he*=xt,ne*=xt,Ye*=xt),se.set(he,ne,Ye,xt),J.equals(se)===!1&&(r.clearColor(he,ne,Ye,xt),J.copy(se))},reset:function(){N=!1,X=null,J.set(-1,0,0,0)}}}function i(){let N=!1,se=!1,X=null,J=null,he=null;return{setReversed:function(ne){if(se!==ne){let Ye=e.get("EXT_clip_control");se?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let xt=he;he=null,this.setClear(xt)}se=ne},getReversed:function(){return se},setTest:function(ne){ne?oe(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(ne){X!==ne&&!N&&(r.depthMask(ne),X=ne)},setFunc:function(ne){if(se&&(ne=MM[ne]),J!==ne){switch(ne){case _h:r.depthFunc(r.NEVER);break;case vh:r.depthFunc(r.ALWAYS);break;case xh:r.depthFunc(r.LESS);break;case Ta:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Mh:r.depthFunc(r.GEQUAL);break;case Sh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ne}},setLocked:function(ne){N=ne},setClear:function(ne){he!==ne&&(se&&(ne=1-ne),r.clearDepth(ne),he=ne)},reset:function(){N=!1,X=null,J=null,he=null,se=!1}}}function n(){let N=!1,se=null,X=null,J=null,he=null,ne=null,Ye=null,xt=null,Kt=null;return{setTest:function(it){N||(it?oe(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(it){se!==it&&!N&&(r.stencilMask(it),se=it)},setFunc:function(it,ji,gr){(X!==it||J!==ji||he!==gr)&&(r.stencilFunc(it,ji,gr),X=it,J=ji,he=gr)},setOp:function(it,ji,gr){(ne!==it||Ye!==ji||xt!==gr)&&(r.stencilOp(it,ji,gr),ne=it,Ye=ji,xt=gr)},setLocked:function(it){N=it},setClear:function(it){Kt!==it&&(r.clearStencil(it),Kt=it)},reset:function(){N=!1,se=null,X=null,J=null,he=null,ne=null,Ye=null,xt=null,Kt=null}}}let a=new t,s=new i,o=new n,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],b=null,g=!1,f=null,m=null,_=null,v=null,x=null,E=null,w=null,S=new Re(0,0,0),A=0,M=!1,y=null,C=null,D=null,L=null,B=null,j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,q=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=q>=2);let $=null,ue={},Ee=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Je=new tt().fromArray(Ee),Y=new tt().fromArray(Ue);function te(N,se,X,J){let he=new Uint8Array(4),ne=r.createTexture();r.bindTexture(N,ne),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<X;Ye++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(se+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return ne}let be={};be[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),s.setFunc(Ta),We(!1),Xe(Op),oe(r.CULL_FACE),k(rn);function oe(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Ie(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Oe(N,se){return u[N]!==se?(r.bindFramebuffer(N,se),u[N]=se,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=se),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=se),!0):!1}function Ve(N,se){let X=p,J=!1;if(N){X=d.get(se),X===void 0&&(X=[],d.set(se,X));let he=N.textures;if(X.length!==he.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,Ye=he.length;ne<Ye;ne++)X[ne]=r.COLOR_ATTACHMENT0+ne;X.length=he.length,J=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,J=!0);J&&r.drawBuffers(X)}function _t(N){return b!==N?(r.useProgram(N),b=N,!0):!1}let Ke={[Zr]:r.FUNC_ADD,[Bb]:r.FUNC_SUBTRACT,[Fb]:r.FUNC_REVERSE_SUBTRACT};Ke[zb]=r.MIN,Ke[Hb]=r.MAX;let Et={[km]:r.ZERO,[Vb]:r.ONE,[Gb]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[Yb]:r.SRC_ALPHA_SATURATE,[Bm]:r.DST_COLOR,[Wb]:r.DST_ALPHA,[jb]:r.ONE_MINUS_SRC_COLOR,[bh]:r.ONE_MINUS_SRC_ALPHA,[qb]:r.ONE_MINUS_DST_COLOR,[Xb]:r.ONE_MINUS_DST_ALPHA,[Kb]:r.CONSTANT_COLOR,[Zb]:r.ONE_MINUS_CONSTANT_COLOR,[Jb]:r.CONSTANT_ALPHA,[Qb]:r.ONE_MINUS_CONSTANT_ALPHA};function k(N,se,X,J,he,ne,Ye,xt,Kt,it){if(N===rn){g===!0&&(Ie(r.BLEND),g=!1);return}if(g===!1&&(oe(r.BLEND),g=!0),N!==Om){if(N!==f||it!==M){if((m!==Zr||x!==Zr)&&(r.blendEquation(r.FUNC_ADD),m=Zr,x=Zr),it)switch(N){case va:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kp:r.blendFunc(r.ONE,r.ONE);break;case Bp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case va:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Bp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,v=null,E=null,w=null,S.set(0,0,0),A=0,f=N,M=it}return}he=he||se,ne=ne||X,Ye=Ye||J,(se!==m||he!==x)&&(r.blendEquationSeparate(Ke[se],Ke[he]),m=se,x=he),(X!==_||J!==v||ne!==E||Ye!==w)&&(r.blendFuncSeparate(Et[X],Et[J],Et[ne],Et[Ye]),_=X,v=J,E=ne,w=Ye),(xt.equals(S)===!1||Kt!==A)&&(r.blendColor(xt.r,xt.g,xt.b,Kt),S.copy(xt),A=Kt),f=N,M=!1}function Ci(N,se){N.side===Zi?Ie(r.CULL_FACE):oe(r.CULL_FACE);let X=N.side===$t;se&&(X=!X),We(X),N.blending===va&&N.transparent===!1?k(rn):k(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),a.setMask(N.colorWrite);let J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){y!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),y=N)}function Xe(N){N!==Ob?(oe(r.CULL_FACE),N!==C&&(N===Op?r.cullFace(r.BACK):N===kb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),C=N}function Ce(N){N!==D&&(z&&r.lineWidth(N),D=N)}function lt(N,se,X){N?(oe(r.POLYGON_OFFSET_FILL),(L!==se||B!==X)&&(r.polygonOffset(se,X),L=se,B=X)):Ie(r.POLYGON_OFFSET_FILL)}function we(N){N?oe(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function I(N){N===void 0&&(N=r.TEXTURE0+j-1),$!==N&&(r.activeTexture(N),$=N)}function T(N,se,X){X===void 0&&($===null?X=r.TEXTURE0+j-1:X=$);let J=ue[X];J===void 0&&(J={type:void 0,texture:void 0},ue[X]=J),(J.type!==N||J.texture!==se)&&($!==X&&(r.activeTexture(X),$=X),r.bindTexture(N,se||be[N]),J.type=N,J.texture=se)}function F(){let N=ue[$];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){Je.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Je.copy(N))}function fe(N){Y.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function qe(N,se){let X=l.get(se);X===void 0&&(X=new WeakMap,l.set(se,X));let J=X.get(N);J===void 0&&(J=r.getUniformBlockIndex(se,N.name),X.set(N,J))}function Fe(N,se){let X=l.get(se).get(N);c.get(se)!==X&&(r.uniformBlockBinding(se,X,N.__bindingPointIndex),c.set(se,X))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},$=null,ue={},u={},d=new WeakMap,p=[],b=null,g=!1,f=null,m=null,_=null,v=null,x=null,E=null,w=null,S=new Re(0,0,0),A=0,M=!1,y=null,C=null,D=null,L=null,B=null,Je.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:oe,disable:Ie,bindFramebuffer:Oe,drawBuffers:Ve,useProgram:_t,setBlending:k,setMaterial:Ci,setFlipSided:We,setCullFace:Xe,setLineWidth:Ce,setPolygonOffset:lt,setScissorTest:we,activeTexture:I,bindTexture:T,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Pe,updateUBOMapping:qe,uniformBlockBinding:Fe,texStorage2D:Ze,texStorage3D:ie,texSubImage2D:K,texSubImage3D:_e,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:De,viewport:fe,reset:ct}}function kf(r,e,t,i){let n=EM(i);switch(t){case Xm:return r*e;case Ym:return r*e;case Km:return r*e*2;case jd:return r*e/n.components*n.byteLength;case Fc:return r*e/n.components*n.byteLength;case Zm:return r*e*2/n.components*n.byteLength;case Wd:return r*e*2/n.components*n.byteLength;case qm:return r*e*3/n.components*n.byteLength;case di:return r*e*4/n.components*n.byteLength;case Xd:return r*e*4/n.components*n.byteLength;case nc:case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Ph:return Math.max(r,16)*Math.max(e,8)/4;case Ah:case Ch:return Math.max(r,8)*Math.max(e,8)/2;case Ih:case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case cc:case Yh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jm:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Jh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function EM(r){switch(r){case Ir:case Gm:return{byteLength:1,components:1};case Us:case jm:case Ys:return{byteLength:2,components:1};case Vd:case Gd:return{byteLength:2,components:4};case an:case Hd:case vi:return{byteLength:4,components:1};case Wm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function TM(r,e,t,i,n,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,T){return p?new OffscreenCanvas(I,T):ks("canvas")}function g(I,T,F){let Z=1,Q=we(I);if((Q.width>F||Q.height>F)&&(Z=F/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K=Math.floor(Z*Q.width),_e=Math.floor(Z*Q.height);u===void 0&&(u=b(K,_e));let ce=T?b(K,_e):u;return ce.width=K,ce.height=_e,ce.getContext("2d").drawImage(I,0,0,K,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+_e+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function f(I){return I.generateMipmaps}function m(I){r.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(I,T,F,Z,Q=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=T;if(T===r.RED&&(F===r.FLOAT&&(K=r.R32F),F===r.HALF_FLOAT&&(K=r.R16F),F===r.UNSIGNED_BYTE&&(K=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.R8UI),F===r.UNSIGNED_SHORT&&(K=r.R16UI),F===r.UNSIGNED_INT&&(K=r.R32UI),F===r.BYTE&&(K=r.R8I),F===r.SHORT&&(K=r.R16I),F===r.INT&&(K=r.R32I)),T===r.RG&&(F===r.FLOAT&&(K=r.RG32F),F===r.HALF_FLOAT&&(K=r.RG16F),F===r.UNSIGNED_BYTE&&(K=r.RG8)),T===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RG8UI),F===r.UNSIGNED_SHORT&&(K=r.RG16UI),F===r.UNSIGNED_INT&&(K=r.RG32UI),F===r.BYTE&&(K=r.RG8I),F===r.SHORT&&(K=r.RG16I),F===r.INT&&(K=r.RG32I)),T===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RGB8UI),F===r.UNSIGNED_SHORT&&(K=r.RGB16UI),F===r.UNSIGNED_INT&&(K=r.RGB32UI),F===r.BYTE&&(K=r.RGB8I),F===r.SHORT&&(K=r.RGB16I),F===r.INT&&(K=r.RGB32I)),T===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),F===r.UNSIGNED_INT&&(K=r.RGBA32UI),F===r.BYTE&&(K=r.RGBA8I),F===r.SHORT&&(K=r.RGBA16I),F===r.INT&&(K=r.RGBA32I)),T===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),T===r.RGBA){let _e=Q?zc:je.getTransfer(Z);F===r.FLOAT&&(K=r.RGBA32F),F===r.HALF_FLOAT&&(K=r.RGBA16F),F===r.UNSIGNED_BYTE&&(K=_e===nt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(I,T){let F;return I?T===null||T===an||T===Ca?F=r.DEPTH24_STENCIL8:T===vi?F=r.DEPTH32F_STENCIL8:T===Us&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===an||T===Ca?F=r.DEPTH_COMPONENT24:T===vi?F=r.DEPTH_COMPONENT32F:T===Us&&(F=r.DEPTH_COMPONENT16),F}function E(I,T){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==ii&&I.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function w(I){let T=I.target;T.removeEventListener("dispose",w),A(T),T.isVideoTexture&&h.delete(T)}function S(I){let T=I.target;T.removeEventListener("dispose",S),y(T)}function A(I){let T=i.get(I);if(T.__webglInit===void 0)return;let F=I.source,Z=d.get(F);if(Z){let Q=Z[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(I),Object.keys(Z).length===0&&d.delete(F)}i.remove(I)}function M(I){let T=i.get(I);r.deleteTexture(T.__webglTexture);let F=I.source,Z=d.get(F);delete Z[T.__cacheKey],s.memory.textures--}function y(I){let T=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let Q=0;Q<T.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[Z]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let F=I.textures;for(let Z=0,Q=F.length;Z<Q;Z++){let K=i.get(F[Z]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),s.memory.textures--),i.remove(F[Z])}i.remove(I)}let C=0;function D(){C=0}function L(){let I=C;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),C+=1,I}function B(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function j(I,T){let F=i.get(I);if(I.isVideoTexture&&Ce(I),I.isRenderTargetTexture===!1&&I.version>0&&F.__version!==I.version){let Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,I,T);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}function z(I,T){let F=i.get(I);if(I.version>0&&F.__version!==I.version){Y(F,I,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)}function q(I,T){let F=i.get(I);if(I.version>0&&F.__version!==I.version){Y(F,I,T);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)}function W(I,T){let F=i.get(I);if(I.version>0&&F.__version!==I.version){te(F,I,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)}let $={[Ra]:r.REPEAT,[$r]:r.CLAMP_TO_EDGE,[pc]:r.MIRRORED_REPEAT},ue={[ii]:r.NEAREST,[Vm]:r.NEAREST_MIPMAP_NEAREST,[Ms]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[rc]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},Ee={[p_]:r.NEVER,[v_]:r.ALWAYS,[f_]:r.LESS,[eg]:r.LEQUAL,[m_]:r.EQUAL,[__]:r.GEQUAL,[g_]:r.GREATER,[b_]:r.NOTEQUAL};function Ue(I,T){if(T.type===vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===rc||T.magFilter===Ms||T.magFilter===wr||T.minFilter===_i||T.minFilter===rc||T.minFilter===Ms||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,$[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,$[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,$[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ue[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ii||T.minFilter!==Ms&&T.minFilter!==wr||T.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Je(I,T){let F=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",w));let Z=T.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let K=B(T);if(K!==I.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Q[K].usedTimes++;let _e=Q[I.__cacheKey];_e!==void 0&&(Q[I.__cacheKey].usedTimes--,_e.usedTimes===0&&M(T)),I.__cacheKey=K,I.__webglTexture=Q[K].texture}return F}function Y(I,T,F){let Z=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=r.TEXTURE_3D);let Q=Je(I,T),K=T.source;t.bindTexture(Z,I.__webglTexture,r.TEXTURE0+F);let _e=i.get(K);if(K.version!==_e.__version||Q===!0){t.activeTexture(r.TEXTURE0+F);let ce=je.getPrimaries(je.workingColorSpace),me=T.colorSpace===Jr?null:je.getPrimaries(T.colorSpace),Ze=T.colorSpace===Jr||ce===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ie=g(T.image,!1,n.maxTextureSize);ie=lt(T,ie);let pe=a.convert(T.format,T.colorSpace),Pe=a.convert(T.type),De=v(T.internalFormat,pe,Pe,T.colorSpace,T.isVideoTexture);Ue(Z,T);let fe,qe=T.mipmaps,Fe=T.isVideoTexture!==!0,ct=_e.__version===void 0||Q===!0,N=K.dataReady,se=E(T,ie);if(T.isDepthTexture)De=x(T.format===Pa,T.type),ct&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,pe,Pe,null));else if(T.isDataTexture)if(qe.length>0){Fe&&ct&&t.texStorage2D(r.TEXTURE_2D,se,De,qe[0].width,qe[0].height);for(let X=0,J=qe.length;X<J;X++)fe=qe[X],Fe?N&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,fe.width,fe.height,pe,Pe,fe.data):t.texImage2D(r.TEXTURE_2D,X,De,fe.width,fe.height,0,pe,Pe,fe.data);T.generateMipmaps=!1}else Fe?(ct&&t.texStorage2D(r.TEXTURE_2D,se,De,ie.width,ie.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,Pe,ie.data)):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,pe,Pe,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Fe&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,De,qe[0].width,qe[0].height,ie.depth);for(let X=0,J=qe.length;X<J;X++)if(fe=qe[X],T.format!==di)if(pe!==null)if(Fe){if(N)if(T.layerUpdates.size>0){let he=kf(fe.width,fe.height,T.format,T.type);for(let ne of T.layerUpdates){let Ye=fe.data.subarray(ne*he/fe.data.BYTES_PER_ELEMENT,(ne+1)*he/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ne,fe.width,fe.height,1,pe,Ye)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ie.depth,pe,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,De,fe.width,fe.height,ie.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ie.depth,pe,Pe,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,De,fe.width,fe.height,ie.depth,0,pe,Pe,fe.data)}else{Fe&&ct&&t.texStorage2D(r.TEXTURE_2D,se,De,qe[0].width,qe[0].height);for(let X=0,J=qe.length;X<J;X++)fe=qe[X],T.format!==di?pe!==null?Fe?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,fe.width,fe.height,pe,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,X,De,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,fe.width,fe.height,pe,Pe,fe.data):t.texImage2D(r.TEXTURE_2D,X,De,fe.width,fe.height,0,pe,Pe,fe.data)}else if(T.isDataArrayTexture)if(Fe){if(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,De,ie.width,ie.height,ie.depth),N)if(T.layerUpdates.size>0){let X=kf(ie.width,ie.height,T.format,T.type);for(let J of T.layerUpdates){let he=ie.data.subarray(J*X/ie.data.BYTES_PER_ELEMENT,(J+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,pe,Pe,he)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Pe,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,pe,Pe,ie.data);else if(T.isData3DTexture)Fe?(ct&&t.texStorage3D(r.TEXTURE_3D,se,De,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Pe,ie.data)):t.texImage3D(r.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,pe,Pe,ie.data);else if(T.isFramebufferTexture){if(ct)if(Fe)t.texStorage2D(r.TEXTURE_2D,se,De,ie.width,ie.height);else{let X=ie.width,J=ie.height;for(let he=0;he<se;he++)t.texImage2D(r.TEXTURE_2D,he,De,X,J,0,pe,Pe,null),X>>=1,J>>=1}}else if(qe.length>0){if(Fe&&ct){let X=we(qe[0]);t.texStorage2D(r.TEXTURE_2D,se,De,X.width,X.height)}for(let X=0,J=qe.length;X<J;X++)fe=qe[X],Fe?N&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,pe,Pe,fe):t.texImage2D(r.TEXTURE_2D,X,De,pe,Pe,fe);T.generateMipmaps=!1}else if(Fe){if(ct){let X=we(ie);t.texStorage2D(r.TEXTURE_2D,se,De,X.width,X.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Pe,ie)}else t.texImage2D(r.TEXTURE_2D,0,De,pe,Pe,ie);f(T)&&m(Z),_e.__version=K.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function te(I,T,F){if(T.image.length!==6)return;let Z=Je(I,T),Q=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+F);let K=i.get(Q);if(Q.version!==K.__version||Z===!0){t.activeTexture(r.TEXTURE0+F);let _e=je.getPrimaries(je.workingColorSpace),ce=T.colorSpace===Jr?null:je.getPrimaries(T.colorSpace),me=T.colorSpace===Jr||_e===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,ie=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!Ze&&!ie?pe[J]=g(T.image[J],!0,n.maxCubemapSize):pe[J]=ie?T.image[J].image:T.image[J],pe[J]=lt(T,pe[J]);let Pe=pe[0],De=a.convert(T.format,T.colorSpace),fe=a.convert(T.type),qe=v(T.internalFormat,De,fe,T.colorSpace),Fe=T.isVideoTexture!==!0,ct=K.__version===void 0||Z===!0,N=Q.dataReady,se=E(T,Pe);Ue(r.TEXTURE_CUBE_MAP,T);let X;if(Ze){Fe&&ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,qe,Pe.width,Pe.height);for(let J=0;J<6;J++){X=pe[J].mipmaps;for(let he=0;he<X.length;he++){let ne=X[he];T.format!==di?De!==null?Fe?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ne.width,ne.height,De,ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,qe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ne.width,ne.height,De,fe,ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,qe,ne.width,ne.height,0,De,fe,ne.data)}}}else{if(X=T.mipmaps,Fe&&ct){X.length>0&&se++;let J=we(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,qe,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Fe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,De,fe,pe[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,pe[J].width,pe[J].height,0,De,fe,pe[J].data);for(let he=0;he<X.length;he++){let ne=X[he].image[J].image;Fe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,ne.width,ne.height,De,fe,ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,qe,ne.width,ne.height,0,De,fe,ne.data)}}else{Fe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,fe,pe[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,De,fe,pe[J]);for(let he=0;he<X.length;he++){let ne=X[he];Fe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,De,fe,ne.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,qe,De,fe,ne.image[J])}}}f(T)&&m(r.TEXTURE_CUBE_MAP),K.__version=Q.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function be(I,T,F,Z,Q,K){let _e=a.convert(F.format,F.colorSpace),ce=a.convert(F.type),me=v(F.internalFormat,_e,ce,F.colorSpace),Ze=i.get(T),ie=i.get(F);if(ie.__renderTarget=T,!Ze.__hasExternalTextures){let pe=Math.max(1,T.width>>K),Pe=Math.max(1,T.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,me,pe,Pe,T.depth,0,_e,ce,null):t.texImage2D(Q,K,me,pe,Pe,0,_e,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,ie.__webglTexture,0,We(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,ie.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(I,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){let Z=T.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=x(T.stencilBuffer,Q),_e=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=We(T);Xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,K,T.width,T.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,I)}else{let Z=T.textures;for(let Q=0;Q<Z.length;Q++){let K=Z[Q],_e=a.convert(K.format,K.colorSpace),ce=a.convert(K.type),me=v(K.internalFormat,_e,ce,K.colorSpace),Ze=We(T);F&&Xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,me,T.width,T.height):Xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,me,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,me,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=i.get(T.depthTexture);F.__renderTarget=T,(!F.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);let Z=F.__webglTexture,Q=We(T);if(T.depthTexture.format===xa)Xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(T.depthTexture.format===Pa)Xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Oe(I){let T=i.get(I),F=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=Z}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(T.__webglFramebuffer,I)}else if(F){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=r.createRenderbuffer(),oe(T.__webglDepthbuffer[Z],I,!1);else{let Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),oe(T.__webglDepthbuffer,I,!1);else{let Z=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(I,T,F){let Z=i.get(I);T!==void 0&&be(Z.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Oe(I)}function _t(I){let T=I.texture,F=i.get(I),Z=i.get(T);I.addEventListener("dispose",S);let Q=I.textures,K=I.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=T.version,s.memory.textures++),K){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let me=0;me<T.mipmaps.length;me++)F.__webglFramebuffer[ce][me]=r.createFramebuffer()}else F.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)F.__webglFramebuffer[ce]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(_e)for(let ce=0,me=Q.length;ce<me;ce++){let Ze=i.get(Q[ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),s.memory.textures++)}if(I.samples>0&&Xe(I)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){let me=Q[ce];F.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);let Ze=a.convert(me.format,me.colorSpace),ie=a.convert(me.type),pe=v(me.internalFormat,Ze,ie,me.colorSpace,I.isXRRenderTarget===!0),Pe=We(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,pe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)be(F.__webglFramebuffer[ce][me],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else be(F.__webglFramebuffer[ce],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);f(T)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ce=0,me=Q.length;ce<me;ce++){let Ze=Q[ce],ie=i.get(Ze);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Ue(r.TEXTURE_2D,Ze),be(F.__webglFramebuffer,I,Ze,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),f(Ze)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),Ue(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)be(F.__webglFramebuffer[me],I,T,r.COLOR_ATTACHMENT0,ce,me);else be(F.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,ce,0);f(T)&&m(ce),t.unbindTexture()}I.depthBuffer&&Oe(I)}function Ke(I){let T=I.textures;for(let F=0,Z=T.length;F<Z;F++){let Q=T[F];if(f(Q)){let K=_(I),_e=i.get(Q).__webglTexture;t.bindTexture(K,_e),m(K),t.unbindTexture()}}}let Et=[],k=[];function Ci(I){if(I.samples>0){if(Xe(I)===!1){let T=I.textures,F=I.width,Z=I.height,Q=r.COLOR_BUFFER_BIT,K=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=i.get(I),ce=T.length>1;if(ce)for(let me=0;me<T.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<T.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let Ze=i.get(T[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ze,0)}r.blitFramebuffer(0,0,F,Z,0,0,F,Z,Q,r.NEAREST),c===!0&&(Et.length=0,k.length=0,Et.push(r.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Et.push(K),k.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<T.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let Ze=i.get(T[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function We(I){return Math.min(n.maxSamples,I.samples)}function Xe(I){let T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(I){let T=s.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function lt(I,T){let F=I.colorSpace,Z=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||F!==ri&&F!==Jr&&(je.getTransfer(F)===nt?(Z!==di||Q!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}function we(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Ve,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ci,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Xe}function wM(r,e){function t(i,n=Jr){let a,s=je.getTransfer(n);if(i===Ir)return r.UNSIGNED_BYTE;if(i===Vd)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Gd)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Wm)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Gm)return r.BYTE;if(i===jm)return r.SHORT;if(i===Us)return r.UNSIGNED_SHORT;if(i===Hd)return r.INT;if(i===an)return r.UNSIGNED_INT;if(i===vi)return r.FLOAT;if(i===Ys)return r.HALF_FLOAT;if(i===Xm)return r.ALPHA;if(i===qm)return r.RGB;if(i===di)return r.RGBA;if(i===Ym)return r.LUMINANCE;if(i===Km)return r.LUMINANCE_ALPHA;if(i===xa)return r.DEPTH_COMPONENT;if(i===Pa)return r.DEPTH_STENCIL;if(i===jd)return r.RED;if(i===Fc)return r.RED_INTEGER;if(i===Zm)return r.RG;if(i===Wd)return r.RG_INTEGER;if(i===Xd)return r.RGBA_INTEGER;if(i===nc||i===ac||i===sc||i===oc)if(s===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===nc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===nc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ah||i===Rh||i===Ch||i===Ph)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ih||i===Lh||i===Dh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ih||i===Lh)return s===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Dh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uh||i===Nh||i===Oh||i===kh||i===Bh||i===Fh||i===zh||i===Hh||i===Vh||i===Gh||i===jh||i===Wh||i===Xh||i===qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Uh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qh)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cc||i===Yh||i===Kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===cc)return s===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jm||i===Zh||i===Jh||i===Qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===cc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ca?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var fu=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qi=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},AM={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,i),m=this._getHandJoint(l,g);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,b=.005;l.inputState.pinching&&d>p+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},RM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new Xt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Fi({vertexShader:RM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends Lr{constructor(e,t){super();let i=this,n=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,b=null,g=new mu,f=t.getContextAttributes(),m=null,_=null,v=[],x=[],E=new Me,w=null,S=new Ft;S.viewport=new tt;let A=new Ft;A.viewport=new tt;let M=[S,A],y=new fu,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=v[Y];return te===void 0&&(te=new Cs,v[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=v[Y];return te===void 0&&(te=new Cs,v[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=v[Y];return te===void 0&&(te=new Cs,v[Y]=te),te.getHandSpace()};function L(Y){let te=x.indexOf(Y.inputSource);if(te===-1)return;let be=v[te];be!==void 0&&(be.update(Y.inputSource,Y.frame,l||s),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",j);for(let Y=0;Y<v.length;Y++){let te=x[Y];te!==null&&(x[Y]=null,v[Y].disconnect(te))}C=null,D=null,g.reset(),e.setRenderTarget(m),p=null,d=null,u=null,n=null,_=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return b},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",B),n.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),n.renderState.layers===void 0){let te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Dr(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let te=null,be=null,oe=null;f.depth&&(oe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?Pa:xa,be=f.stencil?Ca:an);let Ie={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(Ie),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Dr(d.textureWidth,d.textureHeight,{format:di,type:Ir,depthTexture:new xc(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await n.requestReferenceSpace(o),Je.setContext(n),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Y){for(let te=0;te<Y.removed.length;te++){let be=Y.removed[te],oe=x.indexOf(be);oe>=0&&(x[oe]=null,v[oe].disconnect(be))}for(let te=0;te<Y.added.length;te++){let be=Y.added[te],oe=x.indexOf(be);if(oe===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=x.length){x.push(be),oe=Oe;break}else if(x[Oe]===null){x[Oe]=be,oe=Oe;break}if(oe===-1)break}let Ie=v[oe];Ie&&Ie.connect(be)}}let z=new P,q=new P;function W(Y,te,be){z.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(be.matrixWorld);let oe=z.distanceTo(q),Ie=te.projectionMatrix.elements,Oe=be.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),_t=Ie[14]/(Ie[10]+1),Ke=(Ie[9]+1)/Ie[5],Et=(Ie[9]-1)/Ie[5],k=(Ie[8]-1)/Ie[0],Ci=(Oe[8]+1)/Oe[0],We=Ve*k,Xe=Ve*Ci,Ce=oe/(-k+Ci),lt=Ce*-k;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let we=Ve+Ce,I=_t+Ce,T=We-lt,F=Xe+(oe-lt),Z=Ke*_t/I*we,Q=Et*_t/I*we;Y.projectionMatrix.makePerspective(T,F,Z,Q,we,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let te=Y.near,be=Y.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(be=g.depthFar)),y.near=A.near=S.near=te,y.far=A.far=S.far=be,(C!==y.near||D!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,D=y.far),S.layers.mask=Y.layers.mask|2,A.layers.mask=Y.layers.mask|4,y.layers.mask=S.layers.mask|A.layers.mask;let oe=Y.parent,Ie=y.cameras;$(y,oe);for(let Oe=0;Oe<Ie.length;Oe++)$(Ie[Oe],oe);Ie.length===2?W(y,S,A):y.projectionMatrix.copy(S.projectionMatrix),ue(Y,y,oe)};function ue(Y,te,be){be===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ia*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Ee=null;function Ue(Y,te){if(h=te.getViewerPose(l||s),b=te,h!==null){let be=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let oe=!1;be.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Oe=0;Oe<be.length;Oe++){let Ve=be[Oe],_t=null;if(p!==null)_t=p.getViewport(Ve);else{let Et=u.getViewSubImage(d,Ve);_t=Et.viewport,Oe===0&&(e.setRenderTargetTextures(_,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(_))}let Ke=M[Oe];Ke===void 0&&(Ke=new Ft,Ke.layers.enable(Oe),Ke.viewport=new tt,M[Oe]=Ke),Ke.matrix.fromArray(Ve.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ve.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(_t.x,_t.y,_t.width,_t.height),Oe===0&&(y.matrix.copy(Ke.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Ke)}let Ie=n.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Oe=u.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,n.renderState)}}for(let be=0;be<v.length;be++){let oe=x[be],Ie=v[be];oe!==null&&Ie!==void 0&&Ie.update(oe,te,l||s)}Ee&&Ee(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),b=null}let Je=new ag;Je.setAnimationLoop(Ue),this.setAnimationLoop=function(Y){Ee=Y},this.dispose=function(){}}},Tn=new cr,PM=new ye;function IM(r,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,rg(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function n(f,m,_,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(f,m):m.isMeshToonMaterial?(a(f,m),u(f,m)):m.isMeshPhongMaterial?(a(f,m),h(f,m)):m.isMeshStandardMaterial?(a(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,x)):m.isMeshMatcapMaterial?(a(f,m),b(f,m)):m.isMeshDepthMaterial?a(f,m):m.isMeshDistanceMaterial?(a(f,m),g(f,m)):m.isMeshNormalMaterial?a(f,m):m.isLineBasicMaterial?(s(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?c(f,m,_,v):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===$t&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===$t&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _=e.get(m),v=_.envMap,x=_.envMapRotation;v&&(f.envMap.value=v,Tn.copy(x),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),f.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Tn)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function s(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,_,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=v*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function b(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){let _=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function LM(r,e,t,i){let n={},a={},s=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let x=v.program;i.uniformBlockBinding(_,x)}function l(_,v){let x=n[_.id];x===void 0&&(b(_),x=h(_),n[_.id]=x,_.addEventListener("dispose",f));let E=v.program;i.updateUBOMapping(_,E);let w=e.render.frame;a[_.id]!==w&&(d(_),a[_.id]=w)}function h(_){let v=u();_.__bindingPointIndex=v;let x=r.createBuffer(),E=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=n[_.id],x=_.uniforms,E=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,S=x.length;w<S;w++){let A=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,y=A.length;M<y;M++){let C=A[M];if(p(C,w,M,E)===!0){let D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value],B=0;for(let j=0;j<L.length;j++){let z=L[j],q=g(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,D+B,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(_,v,x,E){let w=_.value,S=v+"_"+x;if(E[S]===void 0)return typeof w=="number"||typeof w=="boolean"?E[S]=w:E[S]=w.clone(),!0;{let A=E[S];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[S]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function b(_){let v=_.uniforms,x=0,E=16;for(let S=0,A=v.length;S<A;S++){let M=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,C=M.length;y<C;y++){let D=M[y],L=Array.isArray(D.value)?D.value:[D.value];for(let B=0,j=L.length;B<j;B++){let z=L[B],q=g(z),W=x%E,$=W%q.boundary,ue=W+$;x+=$,ue!==0&&E-ue<q.storage&&(x+=E-ue),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=q.storage}}}let w=x%E;return w>0&&(x+=E-w),_.__size=x,_.__cache={},this}function g(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function f(_){let v=_.target;v.removeEventListener("dispose",f);let x=s.indexOf(v.__bindingPointIndex);s.splice(x,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete a[v.id]}function m(){for(let _ in n)r.deleteBuffer(n[_]);s=[],n={},a={}}return{bind:c,update:l,dispose:m}}var yc=class{constructor(e={}){let{canvas:t=O_(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let b=new Uint32Array(4),g=new Int32Array(4),f=null,m=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=nn,this.toneMappingExposure=1;let x=this,E=!1,w=0,S=0,A=null,M=-1,y=null,C=new tt,D=new tt,L=null,B=new Re(0),j=0,z=t.width,q=t.height,W=1,$=null,ue=null,Ee=new tt(0,0,z,q),Ue=new tt(0,0,z,q),Je=!1,Y=new Ua,te=!1,be=!1,oe=new ye,Ie=new ye,Oe=new P,Ve=new tt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Et(){return A===null?W:1}let k=i;function Ci(R,O){return t.getContext(R,O)}try{let R={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ne,!1),k===null){let O="webgl2";if(k=Ci(O,R),k===null)throw Ci(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,Xe,Ce,lt,we,I,T,F,Z,Q,K,_e,ce,me,Ze,ie,pe,Pe,De,fe,qe,Fe,ct,N;function se(){We=new Yx(k),We.init(),Fe=new wM(k,We),Xe=new Vx(k,We,e,Fe),Ce=new SM(k,We),Xe.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),lt=new Jx(k),we=new hM,I=new TM(k,We,Ce,we,Xe,Fe,lt),T=new jx(x),F=new qx(x),Z=new nv(k),ct=new zx(k,Z),Q=new Kx(k,Z,lt,ct),K=new $x(k,Q,Z,lt),De=new Qx(k,Xe,I),ie=new Gx(we),_e=new lM(x,T,F,We,Xe,ct,ie),ce=new IM(x,we),me=new dM,Ze=new _M(We),Pe=new Fx(x,T,F,Ce,K,p,c),pe=new yM(x,K,Xe),N=new LM(k,lt,Xe,Ce),fe=new Hx(k,We,lt),qe=new Zx(k,We,lt),lt.programs=_e.programs,x.capabilities=Xe,x.extensions=We,x.properties=we,x.renderLists=me,x.shadowMap=pe,x.state=Ce,x.info=lt}se();let X=new gu(x,k);this.xr=X,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(z,q,!1))},this.getSize=function(R){return R.set(z,q)},this.setSize=function(R,O,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,q=O,t.width=Math.floor(R*W),t.height=Math.floor(O*W),H===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(z*W,q*W).floor()},this.setDrawingBufferSize=function(R,O,H){z=R,q=O,W=H,t.width=Math.floor(R*H),t.height=Math.floor(O*H),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(Ee)},this.setViewport=function(R,O,H,V){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,O,H,V),Ce.viewport(C.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(Ue)},this.setScissor=function(R,O,H,V){R.isVector4?Ue.set(R.x,R.y,R.z,R.w):Ue.set(R,O,H,V),Ce.scissor(D.copy(Ue).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(R){Ce.setScissorTest(Je=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(R=!0,O=!0,H=!0){let V=0;if(R){let U=!1;if(A!==null){let ee=A.texture.format;U=ee===Xd||ee===Wd||ee===Fc}if(U){let ee=A.texture.type,de=ee===Ir||ee===an||ee===Us||ee===Ca||ee===Vd||ee===Gd,ge=Pe.getClearColor(),ve=Pe.getClearAlpha(),Ne=ge.r,ke=ge.g,Ae=ge.b;de?(b[0]=Ne,b[1]=ke,b[2]=Ae,b[3]=ve,k.clearBufferuiv(k.COLOR,0,b)):(g[0]=Ne,g[1]=ke,g[2]=Ae,g[3]=ve,k.clearBufferiv(k.COLOR,0,g))}else V|=k.COLOR_BUFFER_BIT}O&&(V|=k.DEPTH_BUFFER_BIT),H&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),me.dispose(),Ze.dispose(),we.dispose(),T.dispose(),F.dispose(),K.dispose(),ct.dispose(),N.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",Rp),X.removeEventListener("sessionend",Cp),bn.stop()};function J(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let R=lt.autoReset,O=pe.enabled,H=pe.autoUpdate,V=pe.needsUpdate,U=pe.type;se(),lt.autoReset=R,pe.enabled=O,pe.autoUpdate=H,pe.needsUpdate=V,pe.type=U}function ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ye(R){let O=R.target;O.removeEventListener("dispose",Ye),xt(O)}function xt(R){Kt(R),we.remove(R)}function Kt(R){let O=we.get(R).programs;O!==void 0&&(O.forEach(function(H){_e.releaseProgram(H)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,H,V,U,ee){O===null&&(O=_t);let de=U.isMesh&&U.matrixWorld.determinant()<0,ge=Db(R,O,H,V,U);Ce.setMaterial(V,de);let ve=H.index,Ne=1;if(V.wireframe===!0){if(ve=Q.getWireframeAttribute(H),ve===void 0)return;Ne=2}let ke=H.drawRange,Ae=H.attributes.position,$e=ke.start*Ne,pt=(ke.start+ke.count)*Ne;ee!==null&&($e=Math.max($e,ee.start*Ne),pt=Math.min(pt,(ee.start+ee.count)*Ne)),ve!==null?($e=Math.max($e,0),pt=Math.min(pt,ve.count)):Ae!=null&&($e=Math.max($e,0),pt=Math.min(pt,Ae.count));let ft=pt-$e;if(ft<0||ft===1/0)return;ct.setup(U,V,ge,H,ve);let Rt,mt=fe;if(ve!==null&&(Rt=Z.get(ve),mt=qe,mt.setIndex(Rt)),U.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*Et()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(U.isLine){let xe=V.linewidth;xe===void 0&&(xe=1),Ce.setLineWidth(xe*Et()),U.isLineSegments?mt.setMode(k.LINES):U.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else U.isPoints?mt.setMode(k.POINTS):U.isSprite&&mt.setMode(k.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)mt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))mt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let xe=U._multiDrawStarts,_n=U._multiDrawCounts,vn=U._multiDrawCount,Wi=ve?Z.get(ve).bytesPerElement:1,Wn=we.get(V).currentProgram.getUniforms();for(let mi=0;mi<vn;mi++)Wn.setValue(k,"_gl_DrawID",mi),mt.render(xe[mi]/Wi,_n[mi])}else if(U.isInstancedMesh)mt.renderInstances($e,ft,U.count);else if(H.isInstancedBufferGeometry){let xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_n=Math.min(H.instanceCount,xe);mt.renderInstances($e,ft,_n)}else mt.render($e,ft)};function it(R,O,H){R.transparent===!0&&R.side===Zi&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,co(R,O,H),R.side=ir,R.needsUpdate=!0,co(R,O,H),R.side=Zi):co(R,O,H)}this.compile=function(R,O,H=null){H===null&&(H=R),m=Ze.get(H),m.init(O),v.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),R!==H&&R.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();let V=new Set;return R.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ee=U.material;if(ee)if(Array.isArray(ee))for(let de=0;de<ee.length;de++){let ge=ee[de];it(ge,H,U),V.add(ge)}else it(ee,H,U),V.add(ee)}),v.pop(),m=null,V},this.compileAsync=function(R,O,H=null){let V=this.compile(R,O,H);return new Promise(U=>{function ee(){if(V.forEach(function(de){we.get(de).currentProgram.isReady()&&V.delete(de)}),V.size===0){U(R);return}setTimeout(ee,10)}We.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ji=null;function gr(R){ji&&ji(R)}function Rp(){bn.stop()}function Cp(){bn.start()}let bn=new ag;bn.setAnimationLoop(gr),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(R){ji=R,X.setAnimationLoop(R),R===null?bn.stop():bn.start()},X.addEventListener("sessionstart",Rp),X.addEventListener("sessionend",Cp),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,O,A),m=Ze.get(R,v.length),m.init(O),v.push(m),Ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(Ie),be=this.localClippingEnabled,te=ie.init(this.clippingPlanes,be),f=me.get(R,_.length),f.init(),_.push(f),X.enabled===!0&&X.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&ml(ee,O,-1/0,x.sortObjects)}ml(R,O,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort($,ue),Ke=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ke&&Pe.addToRenderList(f,R),this.info.render.frame++,te===!0&&ie.beginShadows();let H=m.state.shadowsArray;pe.render(H,R,O),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=f.opaque,U=f.transmissive;if(m.setupLights(),O.isArrayCamera){let ee=O.cameras;if(U.length>0)for(let de=0,ge=ee.length;de<ge;de++){let ve=ee[de];Ip(V,U,R,ve)}Ke&&Pe.render(R);for(let de=0,ge=ee.length;de<ge;de++){let ve=ee[de];Pp(f,R,ve,ve.viewport)}}else U.length>0&&Ip(V,U,R,O),Ke&&Pe.render(R),Pp(f,R,O);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,O),ct.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(m=v[v.length-1],te===!0&&ie.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?f=_[_.length-1]:f=null};function ml(R,O,H,V){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){V&&Ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ie);let ee=K.update(R),de=R.material;de.visible&&f.push(R,ee,de,H,Ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){let ee=K.update(R),de=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ve.copy(R.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),Ve.copy(ee.boundingSphere.center)),Ve.applyMatrix4(R.matrixWorld).applyMatrix4(Ie)),Array.isArray(de)){let ge=ee.groups;for(let ve=0,Ne=ge.length;ve<Ne;ve++){let ke=ge[ve],Ae=de[ke.materialIndex];Ae&&Ae.visible&&f.push(R,ee,Ae,H,Ve.z,ke)}}else de.visible&&f.push(R,ee,de,H,Ve.z,null)}}let U=R.children;for(let ee=0,de=U.length;ee<de;ee++)ml(U[ee],O,H,V)}function Pp(R,O,H,V){let U=R.opaque,ee=R.transmissive,de=R.transparent;m.setupLightsView(H),te===!0&&ie.setGlobalState(x.clippingPlanes,H),V&&Ce.viewport(C.copy(V)),U.length>0&&oo(U,O,H),ee.length>0&&oo(ee,O,H),de.length>0&&oo(de,O,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ip(R,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Dr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ys:Ir,minFilter:wr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let U=m.state.transmissionRenderTarget[V.id],ee=V.viewport||C;U.setSize(ee.z,ee.w);let de=x.getRenderTarget();x.setRenderTarget(U),x.getClearColor(B),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Pe.render(H);let ge=x.toneMapping;x.toneMapping=nn;let ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),te===!0&&ie.setGlobalState(x.clippingPlanes,V),oo(R,H,V),I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ke=0,Ae=O.length;ke<Ae;ke++){let $e=O[ke],pt=$e.object,ft=$e.geometry,Rt=$e.material,mt=$e.group;if(Rt.side===Zi&&pt.layers.test(V.layers)){let xe=Rt.side;Rt.side=$t,Rt.needsUpdate=!0,Lp(pt,H,V,ft,Rt,mt),Rt.side=xe,Rt.needsUpdate=!0,Ne=!0}}Ne===!0&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U))}x.setRenderTarget(de),x.setClearColor(B,j),ve!==void 0&&(V.viewport=ve),x.toneMapping=ge}function oo(R,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let U=0,ee=R.length;U<ee;U++){let de=R[U],ge=de.object,ve=de.geometry,Ne=V===null?de.material:V,ke=de.group;ge.layers.test(H.layers)&&Lp(ge,O,H,ve,Ne,ke)}}function Lp(R,O,H,V,U,ee){R.onBeforeRender(x,O,H,V,U,ee),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),U.onBeforeRender(x,O,H,V,R,ee),U.transparent===!0&&U.side===Zi&&U.forceSinglePass===!1?(U.side=$t,U.needsUpdate=!0,x.renderBufferDirect(H,O,V,U,R,ee),U.side=ir,U.needsUpdate=!0,x.renderBufferDirect(H,O,V,U,R,ee),U.side=Zi):x.renderBufferDirect(H,O,V,U,R,ee),R.onAfterRender(x,O,H,V,U,ee)}function co(R,O,H){O.isScene!==!0&&(O=_t);let V=we.get(R),U=m.state.lights,ee=m.state.shadowsArray,de=U.state.version,ge=_e.getParameters(R,U.state,ee,O,H),ve=_e.getProgramCacheKey(ge),Ne=V.programs;V.environment=R.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(R.isMeshStandardMaterial?F:T).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",Ye),Ne=new Map,V.programs=Ne);let ke=Ne.get(ve);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===de)return Up(R,ge),ke}else ge.uniforms=_e.getUniforms(R),R.onBeforeCompile(ge,x),ke=_e.acquireProgram(ge,ve),Ne.set(ve,ke),V.uniforms=ge.uniforms;let Ae=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),Up(R,ge),V.needsLights=Nb(R),V.lightsStateVersion=de,V.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function Dp(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=Ma.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Up(R,O){let H=we.get(R);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Db(R,O,H,V,U){O.isScene!==!0&&(O=_t),I.resetTextureUnits();let ee=O.fog,de=V.isMeshStandardMaterial?O.environment:null,ge=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ri,ve=(V.isMeshStandardMaterial?F:T).get(V.envMap||de),Ne=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!H.morphAttributes.position,$e=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color,ft=nn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=x.toneMapping);let Rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mt=Rt!==void 0?Rt.length:0,xe=we.get(V),_n=m.state.lights;if(te===!0&&(be===!0||R!==y)){let si=R===y&&V.id===M;ie.setState(V,R,si)}let vn=!1;V.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==_n.state.version||xe.outputColorSpace!==ge||U.isBatchedMesh&&xe.batching===!1||!U.isBatchedMesh&&xe.batching===!0||U.isBatchedMesh&&xe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xe.instancing===!1||!U.isInstancedMesh&&xe.instancing===!0||U.isSkinnedMesh&&xe.skinning===!1||!U.isSkinnedMesh&&xe.skinning===!0||U.isInstancedMesh&&xe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xe.instancingMorph===!1&&U.morphTexture!==null||xe.envMap!==ve||V.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ie.numPlanes||xe.numIntersection!==ie.numIntersection)||xe.vertexAlphas!==Ne||xe.vertexTangents!==ke||xe.morphTargets!==Ae||xe.morphNormals!==$e||xe.morphColors!==pt||xe.toneMapping!==ft||xe.morphTargetsCount!==mt)&&(vn=!0):(vn=!0,xe.__version=V.version);let Wi=xe.currentProgram;vn===!0&&(Wi=co(V,O,U));let Wn=!1,mi=!1,is=!1,ht=Wi.getUniforms(),sr=xe.uniforms;if(Ce.useProgram(Wi.program)&&(Wn=!0,mi=!0,is=!0),V.id!==M&&(M=V.id,mi=!0),Wn||y!==R){Ce.buffers.depth.getReversed()?(oe.copy(R.projectionMatrix),B_(oe),F_(oe),ht.setValue(k,"projectionMatrix",oe)):ht.setValue(k,"projectionMatrix",R.projectionMatrix),ht.setValue(k,"viewMatrix",R.matrixWorldInverse);let si=ht.map.cameraPosition;si!==void 0&&si.setValue(k,Oe.setFromMatrixPosition(R.matrixWorld)),Xe.logarithmicDepthBuffer&&ht.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,mi=!0,is=!0)}if(U.isSkinnedMesh){ht.setOptional(k,U,"bindMatrix"),ht.setOptional(k,U,"bindMatrixInverse");let si=U.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),ht.setValue(k,"boneTexture",si.boneTexture,I))}U.isBatchedMesh&&(ht.setOptional(k,U,"batchingTexture"),ht.setValue(k,"batchingTexture",U._matricesTexture,I),ht.setOptional(k,U,"batchingIdTexture"),ht.setValue(k,"batchingIdTexture",U._indirectTexture,I),ht.setOptional(k,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(k,"batchingColorTexture",U._colorsTexture,I));let rs=H.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&De.update(U,H,Wi),(mi||xe.receiveShadow!==U.receiveShadow)&&(xe.receiveShadow=U.receiveShadow,ht.setValue(k,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(sr.envMap.value=ve,sr.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(sr.envMapIntensity.value=O.environmentIntensity),mi&&(ht.setValue(k,"toneMappingExposure",x.toneMappingExposure),xe.needsLights&&Ub(sr,is),ee&&V.fog===!0&&ce.refreshFogUniforms(sr,ee),ce.refreshMaterialUniforms(sr,V,W,q,m.state.transmissionRenderTarget[R.id]),Ma.upload(k,Dp(xe),sr,I)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ma.upload(k,Dp(xe),sr,I),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(k,"center",U.center),ht.setValue(k,"modelViewMatrix",U.modelViewMatrix),ht.setValue(k,"normalMatrix",U.normalMatrix),ht.setValue(k,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let si=V.uniformsGroups;for(let ns=0,zr=si.length;ns<zr;ns++){let Np=si[ns];N.update(Np,Wi),N.bind(Np,Wi)}}return Wi}function Ub(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Nb(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,O,H){we.get(R.texture).__webglTexture=O,we.get(R.depthTexture).__webglTexture=H;let V=we.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){let H=we.get(R);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,H=0){A=R,w=O,S=H;let V=!0,U=null,ee=!1,de=!1;if(R){let ge=we.get(R);if(ge.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(k.FRAMEBUFFER,null),V=!1;else if(ge.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(ge.__hasExternalTextures)I.rebindTextures(R,we.get(R.texture).__webglTexture,we.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ke=R.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&we.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let ve=R.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);let Ne=we.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?U=Ne[O][H]:U=Ne[O],ee=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?U=we.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[H]:U=Ne,C.copy(R.viewport),D.copy(R.scissor),L=R.scissorTest}else C.copy(Ee).multiplyScalar(W).floor(),D.copy(Ue).multiplyScalar(W).floor(),L=Je;if(Ce.bindFramebuffer(k.FRAMEBUFFER,U)&&V&&Ce.drawBuffers(R,U),Ce.viewport(C),Ce.scissor(D),Ce.setScissorTest(L),ee){let ge=we.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,H)}else if(de){let ge=we.get(R.texture),ve=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ge.__webglTexture,H||0,ve)}M=-1},this.readRenderTargetPixels=function(R,O,H,V,U,ee,de){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){Ce.bindFramebuffer(k.FRAMEBUFFER,ge);try{let ve=R.texture,Ne=ve.format,ke=ve.type;if(!Xe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-V&&H>=0&&H<=R.height-U&&k.readPixels(O,H,V,U,Fe.convert(Ne),Fe.convert(ke),ee)}finally{let ve=A!==null?we.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(R,O,H,V,U,ee,de){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){let ve=R.texture,Ne=ve.format,ke=ve.type;if(!Xe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-V&&H>=0&&H<=R.height-U){Ce.bindFramebuffer(k.FRAMEBUFFER,ge);let Ae=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ae),k.bufferData(k.PIXEL_PACK_BUFFER,ee.byteLength,k.STREAM_READ),k.readPixels(O,H,V,U,Fe.convert(Ne),Fe.convert(ke),0);let $e=A!==null?we.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,$e);let pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await k_(k,pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ae),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ee),k.deleteBuffer(Ae),k.deleteSync(pt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,H=0){R.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);let V=Math.pow(2,-H),U=Math.floor(R.image.width*V),ee=Math.floor(R.image.height*V),de=O!==null?O.x:0,ge=O!==null?O.y:0;I.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,de,ge,U,ee),Ce.unbindTexture()},this.copyTextureToTexture=function(R,O,H=null,V=null,U=0){R.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],O=arguments[2],U=arguments[3]||0,H=null);let ee,de,ge,ve,Ne,ke,Ae,$e,pt,ft=R.isCompressedTexture?R.mipmaps[U]:R.image;H!==null?(ee=H.max.x-H.min.x,de=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,ve=H.min.x,Ne=H.min.y,ke=H.isBox3?H.min.z:0):(ee=ft.width,de=ft.height,ge=ft.depth||1,ve=0,Ne=0,ke=0),V!==null?(Ae=V.x,$e=V.y,pt=V.z):(Ae=0,$e=0,pt=0);let Rt=Fe.convert(O.format),mt=Fe.convert(O.type),xe;O.isData3DTexture?(I.setTexture3D(O,0),xe=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(I.setTexture2DArray(O,0),xe=k.TEXTURE_2D_ARRAY):(I.setTexture2D(O,0),xe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let _n=k.getParameter(k.UNPACK_ROW_LENGTH),vn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Wi=k.getParameter(k.UNPACK_SKIP_PIXELS),Wn=k.getParameter(k.UNPACK_SKIP_ROWS),mi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ve),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ne),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ke);let is=R.isDataArrayTexture||R.isData3DTexture,ht=O.isDataArrayTexture||O.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let sr=we.get(R),rs=we.get(O),si=we.get(sr.__renderTarget),ns=we.get(rs.__renderTarget);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,si.__webglFramebuffer),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let zr=0;zr<ge;zr++)is&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.get(R).__webglTexture,U,ke+zr),R.isDepthTexture?(ht&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.get(O).__webglTexture,U,pt+zr),k.blitFramebuffer(ve,Ne,ee,de,Ae,$e,ee,de,k.DEPTH_BUFFER_BIT,k.NEAREST)):ht?k.copyTexSubImage3D(xe,U,Ae,$e,pt+zr,ve,Ne,ee,de):k.copyTexSubImage2D(xe,U,Ae,$e,pt+zr,ve,Ne,ee,de);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ht?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(xe,U,Ae,$e,pt,ee,de,ge,Rt,mt,ft.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(xe,U,Ae,$e,pt,ee,de,ge,Rt,ft.data):k.texSubImage3D(xe,U,Ae,$e,pt,ee,de,ge,Rt,mt,ft):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,U,Ae,$e,ee,de,Rt,mt,ft.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,U,Ae,$e,ft.width,ft.height,Rt,ft.data):k.texSubImage2D(k.TEXTURE_2D,U,Ae,$e,ee,de,Rt,mt,ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,_n),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,mi),U===0&&O.generateMipmaps&&k.generateMipmap(xe),Ce.unbindTexture()},this.copyTextureToTexture3D=function(R,O,H=null,V=null,U=0){return R.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,R=arguments[2],O=arguments[3],U=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,H,V,U)},this.initRenderTarget=function(R){we.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ce.unbindTexture()},this.resetState=function(){w=0,S=0,A=null,Ce.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}},Hs=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eu,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ei=new P,_u=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ji(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array),a=rt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bf=new P,Ff=new tt,zf=new tt,DM=new P,Hf=new ye,Io=new P,Gl=new Dt,Vf=new ye,jl=new Ur,vu=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zp,this.bindMatrix=new ye,this.bindMatrixInverse=new ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ot),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Io),this.boundingSphere.expandByPoint(Io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gl.copy(this.boundingSphere),Gl.applyMatrix4(n),e.ray.intersectsSphere(Gl)!==!1&&(Vf.copy(n).invert(),jl.copy(e.ray).applyMatrix4(Vf),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===o_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Ff.fromBufferAttribute(n.attributes.skinIndex,e),zf.fromBufferAttribute(n.attributes.skinWeight,e),Bf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let s=zf.getComponent(a);if(s!==0){let o=Ff.getComponent(a);Hf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(DM.copy(Bf).applyMatrix4(Hf),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},Mc=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Nn=class extends Xt{constructor(e=null,t=1,i=1,n,a,s,o,c,l=ii,h=ii,u,d){super(null,s,o,c,l,h,n,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gf=new ye,UM=new ye,xu=class r{constructor(e=[],t=[]){this.uuid=$i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let a=0,s=e.length;a<s;a++){let o=e[a]?e[a].matrixWorld:UM;Gf.multiplyMatrices(o,t[a]),Gf.toArray(i,a*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Nn(t,e,e,di,vi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let a=e.bones[i],s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new Mc),this.bones.push(s),this.boneInverses.push(new ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,a=t.length;n<a;n++){let s=t[n];e.bones.push(s.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},Vs=class extends st{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sa=new ye,jf=new ye,Lo=[],Wf=new ot,NM=new ye,ls=new He,hs=new Dt,yu=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,NM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),Wf.copy(e.boundingBox).applyMatrix4(sa),this.boundingBox.union(Wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),hs.copy(e.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(i),e.ray.intersectsSphere(hs)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,sa),jf.multiplyMatrices(i,sa),ls.matrixWorld=jf,ls.raycast(e,Lo);for(let s=0,o=Lo.length;s<o;s++){let c=Lo[s];c.instanceId=a,c.object=this,t.push(c)}Lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(n*this.count),n,this.count,jd,vi));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,c=n*e;a[c]=o,a.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function Wl(r,e){return r-e}function OM(r,e){return r.z-e.z}function kM(r,e){return e.z-r.z}var Mu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let a=this.pool,s=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let o=a[this.index];s.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},oi=new ye,BM=new Re(1,1,1),Xl=new Ua,Do=new ot,wn=new Dt,us=new P,Xf=new P,FM=new P,ql=new Mu,Qt=new He,Uo=[];function zM(r,e,t=0){let i=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){let n=r.count;for(let a=0;a<n;a++)for(let s=0;s<i;s++)e.setComponent(a+t,s,r.getComponent(a,s))}else e.array.set(r.array,t*i);e.needsUpdate=!0}function An(r,e){if(r.constructor!==e.constructor){let t=Math.min(r.length,e.length);for(let i=0;i<t;i++)e[i]=r[i]}else{let t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}var Su=class extends He{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,i=t*2,n){super(new qt,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new Nn(t,e,e,di,vi);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new Nn(t,e,e,Fc,an);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new Nn(t,e,e,di,vi);i.colorSpace=je.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(let a in e.attributes){let s=e.getAttribute(a),{array:o,itemSize:c,normalized:l}=s,h=new o.constructor(i*c),u=new st(h,c,l);t.setAttribute(a,u)}if(e.getIndex()!==null){let a=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new st(a,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let n=e.getAttribute(i),a=t.getAttribute(i);if(n.itemSize!==a.itemSize||n.normalized!==a.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let a=t[i].geometryIndex;this.getMatrixAt(i,oi),this.getBoundingBoxAt(a,Do).applyMatrix4(oi),e.union(Do)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;let a=t[i].geometryIndex;this.getMatrixAt(i,oi),this.getBoundingSphereAt(a,wn).applyMatrix4(oi),e.union(wn)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let t={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Wl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));let n=this._matricesTexture;oi.identity().toArray(n.image.data,i*16),n.needsUpdate=!0;let a=this._colorsTexture;return a&&(BM.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},a=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let s=e.getIndex();if(s!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?s.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Wl),o=this._availableGeometryIds.shift(),a[o]=n):(o=this._geometryCount,this._geometryCount++,a.push(n)),this.setGeometryAt(o,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,o}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,n=i.getIndex()!==null,a=i.getIndex(),s=t.getIndex(),o=this._geometryInfo[e];if(n&&s.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in i.attributes){let u=t.getAttribute(h),d=i.getAttribute(h);zM(u,d,c);let p=u.itemSize;for(let b=u.count,g=l;b<g;b++){let f=c+b;for(let m=0;m<p;m++)d.setComponent(f,m,0)}d.needsUpdate=!0,d.addUpdateRange(c*p,l*p)}if(n){let h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<s.count;d++)a.setX(h+d,c+s.getX(d));for(let d=s.count,p=u;d<p;d++)a.setX(h+d,c);a.needsUpdate=!0,a.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let n=0,a=i.length;n<a;n++)i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0,i=this._geometryInfo,n=i.map((s,o)=>o).sort((s,o)=>i[s].vertexStart-i[o].vertexStart),a=this.geometry;for(let s=0,o=i.length;s<o;s++){let c=n[s],l=i[c];if(l.active!==!1){if(a.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,p=a.index,b=p.array,g=e-u;for(let f=h;f<h+d;f++)b[f]=b[f]+g;p.array.copyWithin(t,h,h+d),p.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,d=a.attributes;for(let p in d){let b=d[p],{array:g,itemSize:f}=b;g.copyWithin(e*f,h*f,(h+u)*f),b.addUpdateRange(e*f,u*f)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=a.index?l.indexStart:l.vertexStart,this._nextIndexStart=a.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){let a=new ot,s=i.index,o=i.attributes.position;for(let c=n.start,l=n.start+n.count;c<l;c++){let h=c;s&&(h=s.getX(h)),a.expandByPoint(us.fromBufferAttribute(o,h))}n.boundingBox=a}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){let a=new Dt;this.getBoundingBoxAt(e,Do),Do.getCenter(a.center);let s=i.index,o=i.attributes.position,c=0;for(let l=n.start,h=n.start+n.count;l<h;l++){let u=l;s&&(u=s.getX(u)),us.fromBufferAttribute(o,u),c=Math.max(c,a.center.distanceToSquared(us))}a.radius=Math.sqrt(c),n.boundingSphere=a}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){let i=this._instanceInfo,n=this._matricesTexture,a=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?this:(t.toArray(a,e*16),n.needsUpdate=!0,this)}getMatrixAt(e,t){let i=this._instanceInfo,n=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let i=this._colorsTexture,n=this._colorsTexture.image.data,a=this._instanceInfo;return e>=a.length||a[e].active===!1?this:(t.toArray(n,e*4),i.needsUpdate=!0,this)}getColorAt(e,t){let i=this._colorsTexture.image.data,n=this._instanceInfo;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*4)}setVisibleAt(e,t){let i=this._instanceInfo;return e>=i.length||i[e].active===!1||i[e].visible===t?this:(i[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let i=this._instanceInfo,n=this._geometryInfo;return e>=i.length||i[e].active===!1||t>=n.length||n[t].active===!1?null:(i[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Wl);t[t.length-1]===i.length;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let n=new Int32Array(e),a=new Int32Array(e);An(this._multiDrawCounts,n),An(this._multiDrawStarts,a),this._multiDrawCounts=n,this._multiDrawStarts=a,this._maxInstanceCount=e;let s=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;s.dispose(),this._initIndirectTexture(),An(s.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),An(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),An(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(s=>s.active);if(Math.max(...i.map(s=>s.vertexStart+s.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(s=>s.indexStart+s.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let n=this.geometry;n.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new qt,this._initializeGeometry(n));let a=this.geometry;n.index&&An(n.index.array,a.index.array);for(let s in n.attributes)An(n.attributes[s].array,a.attributes[s].array)}raycast(e,t){let i=this._instanceInfo,n=this._geometryInfo,a=this.matrixWorld,s=this.geometry;Qt.material=this.material,Qt.geometry.index=s.index,Qt.geometry.attributes=s.attributes,Qt.geometry.boundingBox===null&&(Qt.geometry.boundingBox=new ot),Qt.geometry.boundingSphere===null&&(Qt.geometry.boundingSphere=new Dt);for(let o=0,c=i.length;o<c;o++){if(!i[o].visible||!i[o].active)continue;let l=i[o].geometryIndex,h=n[l];Qt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Qt.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,Qt.geometry.boundingBox),this.getBoundingSphereAt(l,Qt.geometry.boundingSphere),Qt.raycast(e,Uo);for(let u=0,d=Uo.length;u<d;u++){let p=Uo[u];p.object=this,p.batchId=o,t.push(p)}Uo.length=0}Qt.material=null,Qt.geometry.index=null,Qt.geometry.attributes={},Qt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,n,a){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let s=n.getIndex(),o=s===null?1:s.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,p=this._indirectTexture,b=p.image.data;d&&(oi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Xl.setFromProjectionMatrix(oi,e.coordinateSystem));let g=0;if(this.sortObjects){oi.copy(this.matrixWorld).invert(),us.setFromMatrixPosition(i.matrixWorld).applyMatrix4(oi),Xf.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(oi);for(let _=0,v=c.length;_<v;_++)if(c[_].visible&&c[_].active){let x=c[_].geometryIndex;this.getMatrixAt(_,oi),this.getBoundingSphereAt(x,wn).applyMatrix4(oi);let E=!1;if(d&&(E=!Xl.intersectsSphere(wn)),!E){let w=u[x],S=FM.subVectors(wn.center,us).dot(Xf);ql.push(w.start,w.count,S,_)}}let f=ql.list,m=this.customSort;m===null?f.sort(a.transparent?kM:OM):m.call(this,f,i);for(let _=0,v=f.length;_<v;_++){let x=f[_];l[g]=x.start*o,h[g]=x.count,b[g]=x.index,g++}ql.reset()}else for(let f=0,m=c.length;f<m;f++)if(c[f].visible&&c[f].active){let _=c[f].geometryIndex,v=!1;if(d&&(this.getMatrixAt(f,oi),this.getBoundingSphereAt(_,wn).applyMatrix4(oi),v=!Xl.intersectsSphere(wn)),!v){let x=u[_];l[g]=x.start*o,h[g]=x.count,b[g]=f,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,a,s){this.onBeforeRender(e,null,n,a,s)}},Sc=class extends yi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ec=new P,Tc=new P,qf=new ye,ds=new Ur,No=new Dt,Yl=new P,Yf=new P,Gs=class extends St{constructor(e=new qt,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)Ec.fromBufferAttribute(t,n-1),Tc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ec.distanceTo(Tc);e.setAttribute("lineDistance",new er(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(n),No.radius+=a,e.ray.intersectsSphere(No)===!1)return;qf.copy(n).invert(),ds.copy(e.ray).applyMatrix4(qf);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=l){let f=h.getX(b),m=h.getX(b+1),_=Oo(this,e,ds,c,f,m);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(d),f=Oo(this,e,ds,c,b,g);f&&t.push(f)}}else{let d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=l){let f=Oo(this,e,ds,c,b,b+1);f&&t.push(f)}if(this.isLineLoop){let b=Oo(this,e,ds,c,p-1,d);b&&t.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){let s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Oo(r,e,t,i,n,a){let s=r.geometry.attributes.position;if(Ec.fromBufferAttribute(s,n),Tc.fromBufferAttribute(s,a),t.distanceSqToSegment(Ec,Tc,Yl,Yf)>i)return;Yl.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(Yl);if(!(o<e.near||o>e.far))return{distance:o,point:Yf.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}var Kf=new P,Zf=new P,Eu=class extends Gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)Kf.fromBufferAttribute(t,n),Zf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Kf.distanceTo(Zf);e.setAttribute("lineDistance",new er(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Tu=class extends Gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wc=class extends yi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jf=new ye,wu=new Ur,ko=new Dt,Bo=new P,Au=class extends St{constructor(e=new qt,t=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(n),ko.radius+=a,e.ray.intersectsSphere(ko)===!1)return;Jf.copy(n).invert(),wu.copy(e.ray).applyMatrix4(Jf);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let p=u,b=d;p<b;p++){let g=l.getX(p);Bo.fromBufferAttribute(h,g),Qf(Bo,g,c,n,e,t,this)}}else{let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=u,b=d;p<b;p++)Bo.fromBufferAttribute(h,p),Qf(Bo,p,c,n,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){let s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Qf(r,e,t,i,n,a,s){let o=wu.distanceSqToPoint(r);if(o<t){let c=new P;wu.closestPointToPoint(r,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Oa=class extends Xt{constructor(e,t,i,n,a,s,o,c,l){super(e,t,i,n,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ru=class extends yi{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},sn=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$m,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mi=class extends sn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Fo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function HM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function VM(r){function e(n,a){return r[n]-r[a]}let t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function $f(r,e,t){let i=r.length,n=new r.constructor(i);for(let a=0,s=0;s!==i;++a){let o=t[a]*e;for(let c=0;c!==e;++c)n[s++]=r[o+c]}return n}function hg(r,e,t,i){let n=1,a=r[0];for(;a!==void 0&&a[i]===void 0;)a=r[n++];if(a===void 0)return;let s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=r[n++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=r[n++];while(a!==void 0);else do s=a[i],s!==void 0&&(e.push(a.time),t.push(s)),a=r[n++];while(a!==void 0)}var Bn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],a=t[i-1];i:{e:{let s;t:{r:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){let o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,n)}return this.interpolate_(i,a,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n;for(let s=0;s!==n;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cu=class extends Bn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hp,endingEnd:Hp}}intervalChanged_(e,t,i){let n=this.parameterPositions,a=e-2,s=e+1,o=n[a],c=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Vp:a=e,o=2*t-i;break;case Gp:a=n.length-2,o=t+n[a]-n[a+1];break;default:a=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Vp:s=e,c=2*i-t;break;case Gp:s=1,c=i+n[1]-n[0];break;default:s=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,b=(i-t)/(n-t),g=b*b,f=g*b,m=-d*f+2*d*g-d*b,_=(1+d)*f+(-1.5-2*d)*g+(-.5+d)*b+1,v=(-1-p)*f+(1.5+p)*g+.5*b,x=p*f-p*g;for(let E=0;E!==o;++E)a[E]=m*s[h+E]+_*s[l+E]+v*s[c+E]+x*s[u+E];return a}},Pu=class extends Bn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[l+d]*u+s[c+d]*h;return a}},Iu=class extends Bn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},zi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,a=0,s=n-1;for(;a!==n&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==n){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(n!==void 0&&HM(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===gl,a=e.length-1,s=1;for(let o=1;o<a;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(n)c=!0;else{let u=o*i,d=u-i,p=u+i;for(let b=0;b!==i;++b){let g=t[u+b];if(g!==t[d+b]||g!==t[p+b]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let u=o*i,d=s*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Os;var on=class extends zi{constructor(e,t,i){super(e,t,i)}};on.prototype.ValueTypeName="bool";on.prototype.ValueBufferType=Array;on.prototype.DefaultInterpolation=Ns;on.prototype.InterpolantFactoryMethodLinear=void 0;on.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends zi{};Ac.prototype.ValueTypeName="color";var cn=class extends zi{};cn.prototype.ValueTypeName="number";var Lu=class extends Bn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)ni.slerpFlat(a,0,s,l-o,s,l,c);return a}},ln=class extends zi{InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}};ln.prototype.ValueTypeName="quaternion";ln.prototype.InterpolantFactoryMethodSmooth=void 0;var hn=class extends zi{constructor(e,t,i){super(e,t,i)}};hn.prototype.ValueTypeName="string";hn.prototype.ValueBufferType=Array;hn.prototype.DefaultInterpolation=Ns;hn.prototype.InterpolantFactoryMethodLinear=void 0;hn.prototype.InterpolantFactoryMethodSmooth=void 0;var un=class extends zi{};un.prototype.ValueTypeName="vector";var Du=class{constructor(e="",t=-1,i=[],n=c_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=$i(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(jM(i[s]).scale(n));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=i.length;a!==s;++a)t.push(zi.toJSON(i[a]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let a=t.length,s=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);let h=VM(c);c=$f(c,1,h),l=$f(l,1,h),!n&&c[0]===0&&(c.push(a),l.push(l[0])),s.push(new cn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(a);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(l)}}let s=[];for(let o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,u,d,p,b){if(d.length!==0){let g=[],f=[];hg(d,g,f,p),g.length!==0&&b.push(new h(u,g,f))}},n=[],a=e.name||"default",s=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let b=0;b<u[p].morphTargets.length;b++)d[u[p].morphTargets[b]]=-1;for(let b in d){let g=[],f=[];for(let m=0;m!==u[p].morphTargets.length;++m){let _=u[p];g.push(_.time),f.push(_.morphTarget===b?1:0)}n.push(new cn(".morphTargetInfluence["+b+"]",g,f))}c=d.length*s}else{let d=".bones["+t[h].name+"]";i(un,d+".position",u,"pos",n),i(ln,d+".quaternion",u,"rot",n),i(un,d+".scale",u,"scl",n)}}return n.length===0?null:new this(a,c,n,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function GM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cn;case"vector":case"vector2":case"vector3":case"vector4":return un;case"color":return Ac;case"quaternion":return ln;case"bool":case"boolean":return on;case"string":return hn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function jM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=GM(r.type);if(r.times===void 0){let t=[],i=[];hg(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var en={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Uu=class{constructor(e,t,i){let n=this,a=!1,s=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],b=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return b}return null}}},WM=new Uu,dn=class{constructor(e){this.manager=e!==void 0?e:WM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr={},Nu=class extends Error{constructor(e,t){super(e),this.response=t}},Rc=class extends dn{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=en.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Mr[e]!==void 0){Mr[e].push({onLoad:t,onProgress:i,onError:n});return}Mr[e]=[],Mr[e].push({onLoad:t,onProgress:i,onError:n});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Mr[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,b=p!==0,g=0,f=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:x})=>{if(v)m.close();else{g+=x.byteLength;let E=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:p});for(let w=0,S=h.length;w<S;w++){let A=h[w];A.onProgress&&A.onProgress(E)}m.enqueue(x),_()}},v=>{m.error(v)})}}});return new Response(f)}else throw new Nu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{en.add(e,l);let h=Mr[e];delete Mr[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Mr[e];if(h===void 0)throw this.manager.itemError(e),l;delete Mr[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Ou=class extends dn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=en.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;let o=ks("img");function c(){h(),en.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),n&&n(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}},ku=class extends dn{constructor(e){super(e)}load(e,t,i,n){let a=new Xt,s=new Ou(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}},ka=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bu=class extends ka{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kl=new ye,em=new P,tm=new P,js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;em.setFromMatrixPosition(e.matrixWorld),t.position.copy(em),tm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tm),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fu=class extends js{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ia*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||n!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=n,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},zu=class extends ka{constructor(e,t,i=0,n=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=n,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Fu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},im=new ye,ps=new P,Zl=new P,Hu=class extends js{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ps.setFromMatrixPosition(e.matrixWorld),i.position.copy(ps),Zl.copy(i.position),Zl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zl),i.updateMatrixWorld(),n.makeTranslation(-ps.x,-ps.y,-ps.z),im.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(im)}},Cc=class extends ka{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vu=class extends js{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ba=class extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Vu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},On=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Gu=class extends dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=en.get(e);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{n&&n(l)});return}return setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return en.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){n&&n(l),en.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});en.add(e,c),a.manager.itemStart(e)}},Kd="\\[\\]\\.:\\/",XM=new RegExp("["+Kd+"]","g"),Zd="[^"+Kd+"]",qM="[^"+Kd.replace("\\.","")+"]",YM=/((?:WC+[\/:])*)/.source.replace("WC",Zd),KM=/(WCOD+)?/.source.replace("WCOD",qM),ZM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zd),JM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zd),QM=new RegExp("^"+YM+KM+ZM+JM+"$"),$M=["material","materials","bones","map"],ju=class{constructor(e,t,i){let n=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=i.length;n!==a;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(e){let t=QM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=i.nodeName.substring(n+1);$M.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,a=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=ju;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rm=new ye,Pc=class{constructor(e,t,i=0,n=1/0){this.ray=new Ur(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rm),this}intersectObject(e,t=!0,i=[]){return Wu(e,this,i,t),i.sort(nm),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Wu(e[n],this,i,t);return i.sort(nm),i}};function nm(r,e){return r.distance-e.distance}function Wu(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let a=r.children;for(let s=0,o=a.length;s<o;s++)Wu(a[s],e,t,!0)}}var Ic=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},am=new P,zo=new P,tr=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){am.subVectors(e,this.start),zo.subVectors(this.end,this.start);let i=zo.dot(zo),n=zo.dot(am)/i;return t&&(n=Bt(n,0,1)),n}closestPointToPoint(e,t,i){let n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Xu=class extends Lr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);var sm={type:"change"},Jd={type:"start"},ug={type:"end"},Ho=new Ur,om=new Li,eS=Math.cos(70*zn.DEG2RAD),Lt=new P,ci=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=1e-6,qu=class extends Xu{constructor(e,t=null){super(e,t),this.state=at.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_a.ROTATE,MIDDLE:_a.DOLLY,RIGHT:_a.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ni,this._lastTargetPosition=new P,this._quat=new ni().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ic,this._sphericalDelta=new Ic,this._scale=1,this._panOffset=new P,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new P,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iS.bind(this),this._onPointerDown=tS.bind(this),this._onPointerUp=rS.bind(this),this._onContextMenu=hS.bind(this),this._onMouseWheel=sS.bind(this),this._onKeyDown=oS.bind(this),this._onTouchStart=cS.bind(this),this._onTouchMove=lS.bind(this),this._onMouseDown=nS.bind(this),this._onMouseMove=aS.bind(this),this._interceptControlDown=uS.bind(this),this._interceptControlUp=dS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sm),this.update(),this.state=at.NONE}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=ci:i>Math.PI&&(i-=ci),n<-Math.PI?n+=ci:n>Math.PI&&(n-=ci),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let o=Lt.length();s=this._clampDistance(o*this._scale);let c=o-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),s=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<eS?this.object.lookAt(this.target):(om.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(om,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl?(this.dispatchEvent(sm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ci/60*this.autoRotateSpeed*e:ci/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Lt.copy(n).sub(this.target);let a=Lt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=n/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ci*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ci*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ci*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ci*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function tS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function iS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function rS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ug),this.state=at.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nS(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _a.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=at.DOLLY;break;case _a.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=at.ROTATE}break;case _a.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Jd)}function aS(r){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function sS(r){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(r.preventDefault(),this.dispatchEvent(Jd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ug))}function oS(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function cS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=at.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=at.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Jd)}function lS(r){switch(this._trackPointer(r),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=at.NONE}}function hS(r){this.enabled!==!1&&r.preventDefault()}function uS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Yu=class extends Hs{constructor(){super();let e=new La;e.deleteAttribute("uv");let t=new sn({side:$t}),i=new sn,n=new Cc(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let a=new He(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let s=new He(e,i);s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),this.add(s);let o=new He(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let c=new He(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new He(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new He(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new He(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new He(e,oa(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new He(e,oa(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let b=new He(e,oa(17));b.position.set(14.904,12.198,-1.832),b.scale.set(.15,4.265,6.331),this.add(b);let g=new He(e,oa(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let f=new He(e,oa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new He(e,oa(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function oa(r){let e=new Ui;return e.color.setScalar(r),e}var dg=(r,e,t=[])=>{let i=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(n=>{i.setAttribute(n,String(e[n]))}),t.length&&t.forEach(n=>{let a=dg(...n);i.appendChild(a)}),i},pS=([r,e,t])=>dg(r,e,t);var fS=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),mS=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",gS=r=>r.flatMap(mS).map(e=>e.trim()).filter(Boolean).filter((e,t,i)=>i.indexOf(e)===t).join(" "),bS=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,i)=>t.toUpperCase()+i.toLowerCase()),cm=(r,{nameAttr:e,icons:t,attrs:i})=>{var n;let a=r.getAttribute(e);if(a==null)return;let s=bS(a),o=t[s];if(!o)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);let c=fS(r),[l,h,u]=o,d={...h,"data-lucide":a,...i,...c},p=gS(["lucide",`lucide-${a}`,c,i]);p&&Object.assign(d,{class:p});let b=pS([l,d,u]);return(n=r.parentNode)==null?void 0:n.replaceChild(b,r)};var Ei={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var _S=["svg",Ei,[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]]];var vS=["svg",Ei,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];var xS=["svg",Ei,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];var yS=["svg",Ei,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];var MS=["svg",Ei,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];var SS=["svg",Ei,[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]]];var ES=["svg",Ei,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];var TS=["svg",Ei,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];var wS=["svg",Ei,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];var AS=["svg",Ei,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];var RS=["svg",Ei,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];var CS=["svg",Ei,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];var PS=["svg",Ei,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var IS=({icons:r={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let i=document.querySelectorAll(`[${e}]`);if(Array.from(i).forEach(n=>cm(n,{nameAttr:e,icons:r,attrs:t})),e==="data-lucide"){let n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(a=>cm(a,{nameAttr:"icon-name",icons:r,attrs:t})))}};function Vc(r){return new Promise((e,t)=>{r.oncomplete=r.onsuccess=()=>e(r.result),r.onabort=r.onerror=()=>t(r.error)})}function LS(r,e){let t=indexedDB.open(r);t.onupgradeneeded=()=>t.result.createObjectStore(e);let i=Vc(t);return(n,a)=>i.then(s=>a(s.transaction(e,n).objectStore(e)))}var Ql;function Qd(){return Ql||(Ql=LS("keyval-store","keyval")),Ql}function $d(r,e=Qd()){return e("readonly",t=>Vc(t.get(r)))}function ep(r,e,t=Qd()){return t("readwrite",i=>(i.put(e,r),Vc(i.transaction)))}function lm(r,e){if(e===l_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===$h||e===Qm){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=t.count-2,n=[];if(e===$h)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=r.clone();return a.setIndex(n),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Ku=class extends dn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $u(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)})}load(e,t,i,n){let a=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=On.extractUrlBase(e);s=On.resolveURL(l,this.path)}else s=On.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){n?n(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Rc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,s,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let a,s={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pg){try{s[Ge.KHR_BINARY_GLTF]=new fd(e)}catch(h){n&&n(h);return}a=JSON.parse(s[Ge.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new yd(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:s[u]=new Ju;break;case Ge.KHR_DRACO_MESH_COMPRESSION:s[u]=new md(a,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:s[u]=new gd;break;case Ge.KHR_MESH_QUANTIZATION:s[u]=new bd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,a){i.parse(e,t,n,a)})}};function DS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zu=class{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],o,c=new Re(16777215);s.color!==void 0&&c.setRGB(s.color[0],s.color[1],s.color[2],ri);let l=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new Ba(c),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Cc(c),o.distance=l;break;case"spot":o=new zu(c),o.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),o.decay=2,Tr(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),n=Promise.resolve(o),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,n=i.json.nodes[e],a=(n.extensions&&n.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return i._getNodeRef(t.cache,a,s)})}},Ju=class{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Ui}extendParams(e,t,i){let n=[];e.color=new Re(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],ri),e.opacity=s[3]}a.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",a.baseColorTexture,Tt))}return Promise.all(n)}},Qu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let n=i.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){let o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(a)}},ed=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let n=i.extensions[this.name];return t.dispersion=n.dispersion!==void 0?n.dispersion:0,Promise.resolve()}},td=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}},id=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){let o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],ri)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Tt)),s.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}},rd=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}},nd=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],ri),Promise.all(a)}},ad=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let n=i.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}},sd=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));let o=s.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],ri),s.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Tt)),Promise.all(a)}},od=class{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(a)}},cd=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}},ld=class{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let a=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}},hd=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],o=n.images[s.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,s.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ud=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],o=n.images[s.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,s.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},dd=class{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],a=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let c=n.byteOffset||0,l=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,n.mode,n.filter),p})})}else return null}},pd=class{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Ii.TRIANGLES&&c.mode!==Ii.TRIANGLE_STRIP&&c.mode!==Ii.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,s=[],o={};for(let c in a)s.push(this.parser.getDependency("accessor",a[c]).then(l=>(o[c]=l,o[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(c=>{let l=c.pop(),h=l.isGroup?l.children:[l],u=c[0].count,d=[];for(let p of h){let b=new ye,g=new P,f=new ni,m=new P(1,1,1),_=new yu(p.geometry,p.material,u);for(let v=0;v<u;v++)o.TRANSLATION&&g.fromBufferAttribute(o.TRANSLATION,v),o.ROTATION&&f.fromBufferAttribute(o.ROTATION,v),o.SCALE&&m.fromBufferAttribute(o.SCALE,v),_.setMatrixAt(v,b.compose(g,f,m));for(let v in o)if(v==="_COLOR_0"){let x=o[v];_.instanceColor=new Vs(x.array,x.itemSize,x.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,o[v]);St.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),d.push(_)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},pg="glTF",fs=12,hm={JSON:1313821514,BIN:5130562},fd=class{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-fs,a=new DataView(e,fs),s=0;for(;s<n;){let o=a.getUint32(s,!0);s+=4;let c=a.getUint32(s,!0);if(s+=4,c===hm.JSON){let l=new Uint8Array(e,fs+s,o);this.content=i.decode(l)}else if(c===hm.BIN){let l=fs+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},md=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},l={};for(let h in s){let u=vd[h]||h.toLowerCase();o[u]=s[h]}for(let h in e.attributes){let u=vd[h]||h.toLowerCase();if(s[h]!==void 0){let d=i.accessors[e.attributes[h]],p=Sa[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(p){for(let b in p.attributes){let g=p.attributes[b],f=c[b];f!==void 0&&(g.normalized=f)}u(p)},o,l,ri,d)})})}},gd=class{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bd=class{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}},Lc=class extends Bn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[a+s];return t}interpolate_(e,t,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=n-t,u=(i-t)/h,d=u*u,p=d*u,b=e*l,g=b-l,f=-2*p+3*d,m=p-d,_=1-f,v=m-d+u;for(let x=0;x!==o;x++){let E=s[g+x+o],w=s[g+x+c]*h,S=s[b+x+o],A=s[b+x]*h;a[x]=_*E+v*w+f*S+m*A}return a}},US=new ni,_d=class extends Lc{interpolate_(e,t,i,n){let a=super.interpolate_(e,t,i,n);return US.fromArray(a).normalize().toArray(a),a}},Ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},um={9728:ii,9729:_i,9984:Vm,9985:rc,9986:Ms,9987:wr},dm={33071:$r,33648:pc,10497:Ra},$l={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},NS={CUBICSPLINE:void 0,LINEAR:Os,STEP:Ns},eh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ir})),r.DefaultMaterial}function Rn(r,e,t){for(let i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Tr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kS(r,e,t){let i=!1,n=!1,a=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(a=!0),i&&n&&a)break}if(!i&&!n&&!a)return Promise.resolve(r);let s=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;s.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(a){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),a&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function BS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FS(r){let e,t=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+th(t.attributes):e=r.indices+":"+th(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+th(r.targets[i]);return e}function th(r){let e="",t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function xd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var HS=new ye,yd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,a=!1,s=-1;if(typeof navigator<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);n=i&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,s=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||a&&s<98?this.textureLoader=new ku(this.options.manager):this.textureLoader=new Gu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){let o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return Rn(a,o,n),Tr(o,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,a=t.length;n<a;n++){let s=t[n].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let n=0,a=e.length;n<a;n++){let s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),a=(s,o)=>{let c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(let[l,h]of s.children.entries())a(h,o.children[l])};return a(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let a=e(t[n]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":n=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(a,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(a,s){i.load(On.resolveURL(t.uri,n.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let s=$l[n.type],o=Sa[n.componentType],c=n.normalized===!0,l=new o(n.count*s);return Promise.resolve(new st(l,s,c))}let a=[];return n.bufferView!==void 0?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),n.sparse!==void 0&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then(function(s){let o=s[0],c=$l[n.type],l=Sa[n.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,b=n.normalized===!0,g,f;if(p&&p!==u){let m=Math.floor(d/p),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count,v=t.cache.get(_);v||(g=new l(o,m*p,n.count*p/h),v=new bu(g,p/h),t.cache.add(_,v)),f=new _u(v,c,d%p/h,b)}else o===null?g=new l(n.count*c):g=new l(o,d,n.count*c),f=new st(g,c,b);if(n.sparse!==void 0){let m=$l.SCALAR,_=Sa[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,x=n.sparse.values.byteOffset||0,E=new _(s[1],v,n.sparse.count*m),w=new l(s[2],x,n.sparse.count*c);o!==null&&(f=new st(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let S=0,A=E.length;S<A;S++){let M=E[S];if(f.setX(M,w[S*c]),c>=2&&f.setY(M,w[S*c+1]),c>=3&&f.setZ(M,w[S*c+2]),c>=4&&f.setW(M,w[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=b}return f})}loadTexture(e){let t=this.json,i=this.options,n=t.textures[e].source,a=t.images[n],s=this.textureLoader;if(a.uri){let o=i.manager.getHandler(a.uri);o!==null&&(s=o)}return this.loadTextureImage(e,n,s)}loadTextureImage(e,t,i){let n=this,a=this.json,s=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(a.samplers||{})[s.sampler]||{};return h.magFilter=um[u.magFilter]||_i,h.minFilter=um[u.minFilter]||wr,h.wrapS=dm[u.wrapS]||Ra,h.wrapT=dm[u.wrapT]||Ra,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ii&&h.minFilter!==_i,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,n=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let s=n.images[e],o=self.URL||self.webkitURL,c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:s.mimeType});return c=o.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let b=d;t.isImageBitmapLoader===!0&&(b=function(g){let f=new Xt(g);f.needsUpdate=!0,d(f)}),t.load(On.resolveURL(u,a.path),b,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Tr(u,s),u.userData.mimeType=s.mimeType||zS(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let a=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),a.extensions[Ge.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=a.associations.get(s);s=a.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,c)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new wc,yi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Sc,yi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(n||a||s){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),a&&(c.vertexColors=!0),s&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return sn}loadMaterial(e){let t=this,i=this.json,n=this.extensions,a=i.materials[e],s,o={},c=a.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){let u=n[Ge.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{let u=a.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ri),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Zi);let h=a.alphaMode||eh.OPAQUE;if(h===eh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===eh.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==Ui&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Me(1,1),a.normalTexture.scale!==void 0)){let u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==Ui&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==Ui){let u=a.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],ri)}return a.emissiveTexture!==void 0&&s!==Ui&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new s(o);return a.name&&(u.name=a.name),Tr(u,a),t.associations.set(u,{materials:e}),a.extensions&&Rn(n,u,a),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function a(o){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return pm(c,o,t)})}let s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=FS(l),u=n[h];if(u)s.push(u.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=pm(new qt,l,t),n[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,n=this.extensions,a=i.meshes[e],s=a.primitives,o=[];for(let c=0,l=s.length;c<l;c++){let h=s[c].material===void 0?OS(this.cache):this.getDependency("material",s[c].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,b=h.length;p<b;p++){let g=h[p],f=s[p],m,_=l[p];if(f.mode===Ii.TRIANGLES||f.mode===Ii.TRIANGLE_STRIP||f.mode===Ii.TRIANGLE_FAN||f.mode===void 0)m=a.isSkinnedMesh===!0?new vu(g,_):new He(g,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===Ii.TRIANGLE_STRIP?m.geometry=lm(m.geometry,Qm):f.mode===Ii.TRIANGLE_FAN&&(m.geometry=lm(m.geometry,$h));else if(f.mode===Ii.LINES)m=new Eu(g,_);else if(f.mode===Ii.LINE_STRIP)m=new Gs(g,_);else if(f.mode===Ii.LINE_LOOP)m=new Tu(g,_);else if(f.mode===Ii.POINTS)m=new Au(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&BS(m,a),m.name=t.createUniqueName(a.name||"mesh_"+e),Tr(m,a),f.extensions&&Rn(n,m,f),t.assignFinalMaterial(m),u.push(m)}for(let p=0,b=u.length;p<b;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&Rn(n,u[0],a),u[0];let d=new Qi;a.extensions&&Rn(n,d,a),t.associations.set(d,{meshes:e});for(let p=0,b=u.length;p<b;p++)d.add(u[p]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ft(zn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Fs(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Tr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,a=t.joints.length;n<a;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let a=n.pop(),s=n,o=[],c=[];for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u){o.push(u);let d=new ye;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xu(o,c)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],a=n.name?n.name:"animation_"+e,s=[],o=[],c=[],l=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let p=n.channels[u],b=n.samplers[p.sampler],g=p.target,f=g.node,m=n.parameters!==void 0?n.parameters[b.input]:b.input,_=n.parameters!==void 0?n.parameters[b.output]:b.output;g.node!==void 0&&(s.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(b),h.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],b=u[2],g=u[3],f=u[4],m=[];for(let _=0,v=d.length;_<v;_++){let x=d[_],E=p[_],w=b[_],S=g[_],A=f[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let M=i._createAnimationTracks(x,E,w,S,A);if(M)for(let y=0;y<M.length;y++)m.push(M[y])}return new Du(a,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(a){let s=i._getNodeRef(i.meshCache,n.mesh,a);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=n.weights.length;c<l;c++)o.morphTargetInfluences[c]=n.weights[c]}),s})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],a=i._loadNodeShallow(e),s=[],o=n.children||[];for(let l=0,h=o.length;l<h;l++)s.push(i.getDependency("node",o[l]));let c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([a,Promise.all(s),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,HS)});for(let p=0,b=u.length;p<b;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],s=a.name?n.createUniqueName(a.name):"",o=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(n.getDependency("camera",a.camera).then(function(l){return n._getNodeRef(n.cameraCache,a.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new Mc:l.length>1?h=new Qi:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=s),Tr(h,a),a.extensions&&Rn(i,h,a),a.matrix!==void 0){let u=new ye;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,a=new Qi;i.name&&(a.name=n.createUniqueName(i.name)),Tr(a,i),i.extensions&&Rn(t,a,i);let s=i.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(n.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)a.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of n.associations)(d instanceof yi||d instanceof Xt)&&u.set(d,p);return h.traverse(d=>{let p=n.associations.get(d);p!=null&&u.set(d,p)}),u};return n.associations=l(a),a})}_createAnimationTracks(e,t,i,n,a){let s=[],o=e.name?e.name:e.uuid,c=[];qr[a.path]===qr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(qr[a.path]){case qr.weights:l=cn;break;case qr.rotation:l=ln;break;case qr.position:case qr.scale:l=un;break;default:i.itemSize===1?l=cn:l=un;break}let h=n.interpolation!==void 0?NS[n.interpolation]:Os,u=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){let b=new l(c[d]+"."+qr[a.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),s.push(b)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=xd(t.constructor),n=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)n[a]=t[a]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){let i=this instanceof ln?_d:Lc;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function VS(r,e,t){let i=e.attributes,n=new ot;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(n.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=xd(Sa[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new P,c=new P;for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,b=d.max;if(p!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),d.normalized){let g=xd(Sa[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let s=new Dt;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=s}function pm(r,e,t){let i=e.attributes,n=[];function a(s,o){return t.getDependency("accessor",s).then(function(c){r.setAttribute(o,c)})}for(let s in i){let o=vd[s]||s.toLowerCase();o in r.attributes||n.push(a(i[s],o))}if(e.indices!==void 0&&!r.index){let s=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(s)}return je.workingColorSpace!==ri&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Tr(r,e),VS(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?kS(r,e.targets,t):r})}var GS=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?e:r,a,s=WebAssembly.instantiate(o(n),{}).then(function(m){a=m.instance,a.exports.__wasm_call_ctors()});function o(m){for(var _=new Uint8Array(m.length),v=0;v<m.length;++v){var x=m.charCodeAt(v);_[v]=x>96?x-97:x>64?x-39:x+4}for(var E=0,v=0;v<m.length;++v)_[E++]=_[v]<60?i[_[v]]:(_[v]-60)*64+_[++v];return _.buffer.slice(0,E)}function c(m,_,v,x,E,w){var S=a.exports.sbrk,A=v+3&-4,M=S(A*x),y=S(E.length),C=new Uint8Array(a.exports.memory.buffer);C.set(E,y);var D=m(M,v,x,y,E.length);if(D==0&&w&&w(M,A,x),_.set(C.subarray(M,M+v*x)),S(M-S(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(m){var _={object:new Worker(m),pending:0,requests:{}};return _.object.onmessage=function(v){var x=v.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function b(m){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+f.toString(),v=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(v),E=0;E<m;++E)u[E]=p(x);URL.revokeObjectURL(x)}function g(m,_,v,x,E){for(var w=u[0],S=1;S<u.length;++S)u[S].pending<w.pending&&(w=u[S]);return new Promise(function(A,M){var y=new Uint8Array(v),C=d++;w.pending+=m,w.requests[C]={resolve:A,reject:M},w.object.postMessage({id:C,count:m,size:_,source:y,mode:x,filter:E},[y.buffer])})}function f(m){s.then(function(){var _=m.data;try{var v=new Uint8Array(_.count*_.size);c(a.exports[_.mode],v,_.count,_.size,_.source,a.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:s,supported:!0,useWorkers:function(m){b(m)},decodeVertexBuffer:function(m,_,v,x,E){c(a.exports.meshopt_decodeVertexBuffer,m,_,v,x,a.exports[l[E]])},decodeIndexBuffer:function(m,_,v,x){c(a.exports.meshopt_decodeIndexBuffer,m,_,v,x)},decodeIndexSequence:function(m,_,v,x){c(a.exports.meshopt_decodeIndexSequence,m,_,v,x)},decodeGltfBuffer:function(m,_,v,x,E,w){c(a.exports[h[E]],m,_,v,x,a.exports[l[w]])},decodeGltfBufferAsync:function(m,_,v,x,E){return u.length>0?g(m,_,v,h[x],l[E]):s.then(function(){var w=new Uint8Array(m*_);return c(a.exports[h[x]],w,m,_,v,a.exports[l[E]]),w})}}})(),fg=0,jS=1,WS=2,fm=2,ih=1.25,mm=1,Ps=32,Gc=65535,XS=Math.pow(2,-24),rh=Symbol("SKIP_GENERATION");function qS(r){return r.index?r.index.count:r.attributes.position.count}function Ga(r){return qS(r)/3}function YS(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function KS(r,e){if(!r.index){let t=r.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=YS(t,i);r.setIndex(new st(n,1));for(let a=0;a<t;a++)n[a]=a}}function mg(r,e){let t=Ga(r),i=e||r.drawRange,n=i.start/3,a=(i.start+i.count)/3,s=Math.max(0,n),o=Math.min(t,a)-s;return[{offset:Math.floor(s),count:Math.floor(o)}]}function gg(r,e){if(!r.groups||!r.groups.length)return mg(r,e);let t=[],i=new Set,n=e||r.drawRange,a=n.start/3,s=(n.start+n.count)/3;for(let c of r.groups){let l=c.start/3,h=(c.start+c.count)/3;i.add(Math.max(a,l)),i.add(Math.min(s,h))}let o=Array.from(i.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){let l=o[c],h=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(h-l)})}return t}function ZS(r,e){let t=Ga(r),i=gg(r,e).sort((s,o)=>s.offset-o.offset),n=i[i.length-1];n.count=Math.min(t-n.offset,n.count);let a=0;return i.forEach(({count:s})=>a+=s),t!==a}function nh(r,e,t,i,n){let a=1/0,s=1/0,o=1/0,c=-1/0,l=-1/0,h=-1/0,u=1/0,d=1/0,p=1/0,b=-1/0,g=-1/0,f=-1/0;for(let m=e*6,_=(e+t)*6;m<_;m+=6){let v=r[m+0],x=r[m+1],E=v-x,w=v+x;E<a&&(a=E),w>c&&(c=w),v<u&&(u=v),v>b&&(b=v);let S=r[m+2],A=r[m+3],M=S-A,y=S+A;M<s&&(s=M),y>l&&(l=y),S<d&&(d=S),S>g&&(g=S);let C=r[m+4],D=r[m+5],L=C-D,B=C+D;L<o&&(o=L),B>h&&(h=B),C<p&&(p=C),C>f&&(f=C)}i[0]=a,i[1]=s,i[2]=o,i[3]=c,i[4]=l,i[5]=h,n[0]=u,n[1]=d,n[2]=p,n[3]=b,n[4]=g,n[5]=f}function JS(r,e=null,t=null,i=null){let n=r.attributes.position,a=r.index?r.index.array:null,s=Ga(r),o=n.normalized,c;e===null?(c=new Float32Array(s*6),t=0,i=s):(c=e,t=t||0,i=i||s);let l=n.array,h=n.offset||0,u=3;n.isInterleavedBufferAttribute&&(u=n.data.stride);let d=["getX","getY","getZ"];for(let p=t;p<t+i;p++){let b=p*3,g=p*6,f=b+0,m=b+1,_=b+2;a&&(f=a[f],m=a[m],_=a[_]),o||(f=f*u+h,m=m*u+h,_=_*u+h);for(let v=0;v<3;v++){let x,E,w;o?(x=n[d[v]](f),E=n[d[v]](m),w=n[d[v]](_)):(x=l[f+v],E=l[m+v],w=l[_+v]);let S=x;E<S&&(S=E),w<S&&(S=w);let A=x;E>A&&(A=E),w>A&&(A=w);let M=(A-S)/2,y=v*2;c[g+y+0]=S+M,c[g+y+1]=M+(Math.abs(S)+M)*XS}}return c}function yt(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function gm(r){let e=-1,t=-1/0;for(let i=0;i<3;i++){let n=r[i+3]-r[i];n>t&&(t=n,e=i)}return e}function bm(r,e){e.set(r)}function _m(r,e,t){let i,n;for(let a=0;a<3;a++){let s=a+3;i=r[a],n=e[a],t[a]=i<n?i:n,i=r[s],n=e[s],t[s]=i>n?i:n}}function Vo(r,e,t){for(let i=0;i<3;i++){let n=e[r+2*i],a=e[r+2*i+1],s=n-a,o=n+a;s<t[i]&&(t[i]=s),o>t[i+3]&&(t[i+3]=o)}}function ms(r){let e=r[3]-r[0],t=r[4]-r[1],i=r[5]-r[2];return 2*(e*t+t*i+i*e)}var Er=32,QS=(r,e)=>r.candidate-e.candidate,Yr=new Array(Er).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Go=new Float32Array(6);function $S(r,e,t,i,n,a){let s=-1,o=0;if(a===fg)s=gm(e),s!==-1&&(o=(e[s]+e[s+3])/2);else if(a===jS)s=gm(r),s!==-1&&(o=e1(t,i,n,s));else if(a===WS){let c=ms(r),l=ih*n,h=i*6,u=(i+n)*6;for(let d=0;d<3;d++){let p=e[d],b=(e[d+3]-p)/Er;if(n<Er/4){let g=[...Yr];g.length=n;let f=0;for(let _=h;_<u;_+=6,f++){let v=g[f];v.candidate=t[_+2*d],v.count=0;let{bounds:x,leftCacheBounds:E,rightCacheBounds:w}=v;for(let S=0;S<3;S++)w[S]=1/0,w[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0,x[S]=1/0,x[S+3]=-1/0;Vo(_,t,x)}g.sort(QS);let m=n;for(let _=0;_<m;_++){let v=g[_];for(;_+1<m&&g[_+1].candidate===v.candidate;)g.splice(_+1,1),m--}for(let _=h;_<u;_+=6){let v=t[_+2*d];for(let x=0;x<m;x++){let E=g[x];v>=E.candidate?Vo(_,t,E.rightCacheBounds):(Vo(_,t,E.leftCacheBounds),E.count++)}}for(let _=0;_<m;_++){let v=g[_],x=v.count,E=n-v.count,w=v.leftCacheBounds,S=v.rightCacheBounds,A=0;x!==0&&(A=ms(w)/c);let M=0;E!==0&&(M=ms(S)/c);let y=mm+ih*(A*x+M*E);y<l&&(s=d,l=y,o=v.candidate)}}else{for(let m=0;m<Er;m++){let _=Yr[m];_.count=0,_.candidate=p+b+m*b;let v=_.bounds;for(let x=0;x<3;x++)v[x]=1/0,v[x+3]=-1/0}for(let m=h;m<u;m+=6){let _=~~((t[m+2*d]-p)/b);_>=Er&&(_=Er-1);let v=Yr[_];v.count++,Vo(m,t,v.bounds)}let g=Yr[Er-1];bm(g.bounds,g.rightCacheBounds);for(let m=Er-2;m>=0;m--){let _=Yr[m],v=Yr[m+1];_m(_.bounds,v.rightCacheBounds,_.rightCacheBounds)}let f=0;for(let m=0;m<Er-1;m++){let _=Yr[m],v=_.count,x=_.bounds,E=Yr[m+1].rightCacheBounds;v!==0&&(f===0?bm(x,Go):_m(x,Go,Go)),f+=v;let w=0,S=0;f!==0&&(w=ms(Go)/c);let A=n-f;A!==0&&(S=ms(E)/c);let M=mm+ih*(w*f+S*A);M<l&&(s=d,l=M,o=_.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${a} used.`);return{axis:s,pos:o}}function e1(r,e,t,i){let n=0;for(let a=e,s=e+t;a<s;a++)n+=r[a*6+i*2];return n/t}var Is=class{constructor(){this.boundingData=new Float32Array(6)}};function t1(r,e,t,i,n,a){let s=i,o=i+n-1,c=a.pos,l=a.axis*2;for(;;){for(;s<=o&&t[s*6+l]<c;)s++;for(;s<=o&&t[o*6+l]>=c;)o--;if(s<o){for(let h=0;h<3;h++){let u=e[s*3+h];e[s*3+h]=e[o*3+h],e[o*3+h]=u}for(let h=0;h<6;h++){let u=t[s*6+h];t[s*6+h]=t[o*6+h],t[o*6+h]=u}s++,o--}else return s}}function i1(r,e,t,i,n,a){let s=i,o=i+n-1,c=a.pos,l=a.axis*2;for(;;){for(;s<=o&&t[s*6+l]<c;)s++;for(;s<=o&&t[o*6+l]>=c;)o--;if(s<o){let h=r[s];r[s]=r[o],r[o]=h;for(let u=0;u<6;u++){let d=t[s*6+u];t[s*6+u]=t[o*6+u],t[o*6+u]=d}s++,o--}else return s}}function ui(r,e){return e[r+15]===65535}function xi(r,e){return e[r+6]}function Ni(r,e){return e[r+14]}function Oi(r){return r+8}function ki(r,e){return e[r+6]}function bg(r,e){return e[r+7]}var _g,Ts,lc,vg,r1=Math.pow(2,32);function Md(r){return"count"in r?1:1+Md(r.left)+Md(r.right)}function n1(r,e,t){return _g=new Float32Array(t),Ts=new Uint32Array(t),lc=new Uint16Array(t),vg=new Uint8Array(t),Sd(r,e)}function Sd(r,e){let t=r/4,i=r/2,n="count"in e,a=e.boundingData;for(let s=0;s<6;s++)_g[t+s]=a[s];if(n)if(e.buffer){let s=e.buffer;vg.set(new Uint8Array(s),r);for(let o=r,c=r+s.byteLength;o<c;o+=Ps){let l=o/2;ui(l,lc)||(Ts[o/4+6]+=t)}return r+s.byteLength}else{let s=e.offset,o=e.count;return Ts[t+6]=s,lc[i+14]=o,lc[i+15]=Gc,r+Ps}else{let s=e.left,o=e.right,c=e.splitAxis,l;if(l=Sd(r+Ps,s),l/4>r1)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ts[t+6]=l/4,l=Sd(l,o),Ts[t+7]=c,l}}function a1(r,e){let t=(r.index?r.index.count:r.attributes.position.count)/3,i=t>2**16,n=i?4:2,a=e?new SharedArrayBuffer(t*n):new ArrayBuffer(t*n),s=i?new Uint32Array(a):new Uint16Array(a);for(let o=0,c=s.length;o<c;o++)s[o]=o;return s}function s1(r,e,t,i,n){let{maxDepth:a,verbose:s,maxLeafTris:o,strategy:c,onProgress:l,indirect:h}=n,u=r._indirectBuffer,d=r.geometry,p=d.index?d.index.array:null,b=h?i1:t1,g=Ga(d),f=new Float32Array(6),m=!1,_=new Is;return nh(e,t,i,_.boundingData,f),x(_,t,i,f),_;function v(E){l&&l(E/g)}function x(E,w,S,A=null,M=0){if(!m&&M>=a&&(m=!0,s&&(console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),S<=o||M>=a)return v(w+S),E.offset=w,E.count=S,E;let y=$S(E.boundingData,A,e,w,S,c);if(y.axis===-1)return v(w+S),E.offset=w,E.count=S,E;let C=b(u,p,e,w,S,y);if(C===w||C===w+S)v(w+S),E.offset=w,E.count=S;else{E.splitAxis=y.axis;let D=new Is,L=w,B=C-w;E.left=D,nh(e,L,B,D.boundingData,f),x(D,L,B,f,M+1);let j=new Is,z=C,q=S-B;E.right=j,nh(e,z,q,j.boundingData,f),x(j,z,q,f,M+1)}return E}}function o1(r,e){let t=r.geometry;e.indirect&&(r._indirectBuffer=a1(t,e.useSharedArrayBuffer),ZS(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||KS(t,e);let i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=JS(t),a=e.indirect?mg(t,e.range):gg(t,e.range);r._roots=a.map(s=>{let o=s1(r,n,s.offset,s.count,e),c=Md(o),l=new i(Ps*c);return n1(0,o,l),l})}var rr=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let a=0,s=e.length;a<s;a++){let o=e[a][t];i=o<i?o:i,n=o>n?o:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let a=0,s=t.length;a<s;a++){let o=t[a],c=e.dot(o);i=c<i?c:i,n=c>n?c:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}};rr.prototype.setFromBox=(function(){let r=new P;return function(e,t){let i=t.min,n=t.max,a=1/0,s=-1/0;for(let o=0;o<=1;o++)for(let c=0;c<=1;c++)for(let l=0;l<=1;l++){r.x=i.x*o+n.x*(1-o),r.y=i.y*c+n.y*(1-c),r.z=i.z*l+n.z*(1-l);let h=e.dot(r);a=Math.min(h,a),s=Math.max(h,s)}this.min=a,this.max=s}})();var c1=(function(){let r=new P,e=new P,t=new P;return function(i,n,a){let s=i.start,o=r,c=n.start,l=e;t.subVectors(s,c),r.subVectors(i.end,i.start),e.subVectors(n.end,n.start);let h=t.dot(l),u=l.dot(o),d=l.dot(l),p=t.dot(o),b=o.dot(o)*d-u*u,g,f;b!==0?g=(h*u-p*d)/b:g=0,f=(h+g*u)/d,a.x=g,a.y=f}})(),tp=(function(){let r=new Me,e=new P,t=new P;return function(i,n,a,s){c1(i,n,r);let o=r.x,c=r.y;if(o>=0&&o<=1&&c>=0&&c<=1){i.at(o,a),n.at(c,s);return}else if(o>=0&&o<=1){c<0?n.at(0,s):n.at(1,s),i.closestPointToPoint(s,!0,a);return}else if(c>=0&&c<=1){o<0?i.at(0,a):i.at(1,a),n.closestPointToPoint(a,!0,s);return}else{let l;o<0?l=i.start:l=i.end;let h;c<0?h=n.start:h=n.end;let u=e,d=t;if(i.closestPointToPoint(h,!0,e),n.closestPointToPoint(l,!0,t),u.distanceToSquared(h)<=d.distanceToSquared(l)){a.copy(u),s.copy(h);return}else{a.copy(l),s.copy(d);return}}}})(),l1=(function(){let r=new P,e=new P,t=new Li,i=new tr;return function(n,a){let{radius:s,center:o}=n,{a:c,b:l,c:h}=a;if(i.start=c,i.end=l,i.closestPointToPoint(o,!0,r).distanceTo(o)<=s||(i.start=c,i.end=h,i.closestPointToPoint(o,!0,r).distanceTo(o)<=s)||(i.start=l,i.end=h,i.closestPointToPoint(o,!0,r).distanceTo(o)<=s))return!0;let u=a.getPlane(t);if(Math.abs(u.distanceToPoint(o))<=s){let d=u.projectPoint(o,e);if(a.containsPoint(d))return!0}return!1}})(),h1=1e-15;function ah(r){return Math.abs(r)<h1}var Si=class extends hi{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new rr),this.points=[this.a,this.b,this.c],this.sphere=new Dt,this.plane=new Li,this.needsUpdate=!0}intersectsSphere(e){return l1(e,this)}update(){let e=this.a,t=this.b,i=this.c,n=this.points,a=this.satAxes,s=this.satBounds,o=a[0],c=s[0];this.getNormal(o),c.setFromPoints(o,n);let l=a[1],h=s[1];l.subVectors(e,t),h.setFromPoints(l,n);let u=a[2],d=s[2];u.subVectors(t,i),d.setFromPoints(u,n);let p=a[3],b=s[3];p.subVectors(i,e),b.setFromPoints(p,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};Si.prototype.closestPointToSegment=(function(){let r=new P,e=new P,t=new tr;return function(i,n=null,a=null){let{start:s,end:o}=i,c=this.points,l,h=1/0;for(let u=0;u<3;u++){let d=(u+1)%3;t.start.copy(c[u]),t.end.copy(c[d]),tp(t,i,r,e),l=r.distanceToSquared(e),l<h&&(h=l,n&&n.copy(r),a&&a.copy(e))}return this.closestPointToPoint(s,r),l=s.distanceToSquared(r),l<h&&(h=l,n&&n.copy(r),a&&a.copy(s)),this.closestPointToPoint(o,r),l=o.distanceToSquared(r),l<h&&(h=l,n&&n.copy(r),a&&a.copy(o)),Math.sqrt(h)}})();Si.prototype.intersectsTriangle=(function(){let r=new Si,e=new Array(3),t=new Array(3),i=new rr,n=new rr,a=new P,s=new P,o=new P,c=new P,l=new P,h=new tr,u=new tr,d=new tr,p=new P;function b(g,f,m){let _=g.points,v=0,x=-1;for(let E=0;E<3;E++){let{start:w,end:S}=h;w.copy(_[E]),S.copy(_[(E+1)%3]),h.delta(s);let A=ah(f.distanceToPoint(w));if(ah(f.normal.dot(s))&&A){m.copy(h),v=2;break}let M=f.intersectLine(h,p);if(!M&&A&&p.copy(w),(M||A)&&!ah(p.distanceTo(S))){if(v<=1)(v===1?m.start:m.end).copy(p),A&&(x=v);else if(v>=2){(x===1?m.start:m.end).copy(p),v=2;break}if(v++,v===2&&x===-1)break}}return v}return function(g,f=null,m=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(r.copy(g),r.update(),g=r);let _=this.plane,v=g.plane;if(Math.abs(_.normal.dot(v.normal))>1-1e-10){let x=this.satBounds,E=this.satAxes;t[0]=g.a,t[1]=g.b,t[2]=g.c;for(let A=0;A<4;A++){let M=x[A],y=E[A];if(i.setFromPoints(y,t),M.isSeparated(i))return!1}let w=g.satBounds,S=g.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let A=0;A<4;A++){let M=w[A],y=S[A];if(i.setFromPoints(y,e),M.isSeparated(i))return!1}for(let A=0;A<4;A++){let M=E[A];for(let y=0;y<4;y++){let C=S[y];if(a.crossVectors(M,C),i.setFromPoints(a,e),n.setFromPoints(a,t),i.isSeparated(n))return!1}}return f&&(m||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),f.start.set(0,0,0),f.end.set(0,0,0)),!0}else{let x=b(this,v,u);if(x===1&&g.containsPoint(u.end))return f&&(f.start.copy(u.end),f.end.copy(u.end)),!0;if(x!==2)return!1;let E=b(g,_,d);if(E===1&&this.containsPoint(d.end))return f&&(f.start.copy(d.end),f.end.copy(d.end)),!0;if(E!==2)return!1;if(u.delta(o),d.delta(c),o.dot(c)<0){let D=d.start;d.start=d.end,d.end=D}let w=u.start.dot(o),S=u.end.dot(o),A=d.start.dot(o),M=d.end.dot(o),y=S<A,C=w<M;return w!==M&&A!==S&&y===C?!1:(f&&(l.subVectors(u.start,d.start),l.dot(o)>0?f.start.copy(u.start):f.start.copy(d.start),l.subVectors(u.end,d.end),l.dot(o)<0?f.end.copy(u.end):f.end.copy(d.end)),!0)}}})();Si.prototype.distanceToPoint=(function(){let r=new P;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();Si.prototype.distanceToTriangle=(function(){let r=new P,e=new P,t=["a","b","c"],i=new tr,n=new tr;return function(a,s=null,o=null){let c=s||o?i:null;if(this.intersectsTriangle(a,c))return(s||o)&&(s&&c.getCenter(s),o&&c.getCenter(o)),0;let l=1/0;for(let h=0;h<3;h++){let u,d=t[h],p=a[d];this.closestPointToPoint(p,r),u=p.distanceToSquared(r),u<l&&(l=u,s&&s.copy(r),o&&o.copy(p));let b=this[d];a.closestPointToPoint(b,r),u=b.distanceToSquared(r),u<l&&(l=u,s&&s.copy(b),o&&o.copy(r))}for(let h=0;h<3;h++){let u=t[h],d=t[(h+1)%3];i.set(this[u],this[d]);for(let p=0;p<3;p++){let b=t[p],g=t[(p+1)%3];n.set(a[b],a[g]),tp(i,n,r,e);let f=r.distanceToSquared(e);f<l&&(l=f,s&&s.copy(r),o&&o.copy(e))}}return Math.sqrt(l)}})();var Yt=class{constructor(e,t,i){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new ye,this.invMatrix=new ye,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new rr),this.alignedSatBounds=new Array(3).fill().map(()=>new rr),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Yt.prototype.update=(function(){return function(){let r=this.matrix,e=this.min,t=this.max,i=this.points;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){let u=1*c|2*l|4*h,d=i[u];d.x=c?t.x:e.x,d.y=l?t.y:e.y,d.z=h?t.z:e.z,d.applyMatrix4(r)}let n=this.satBounds,a=this.satAxes,s=i[0];for(let c=0;c<3;c++){let l=a[c],h=n[c],u=1<<c,d=i[u];l.subVectors(s,d),h.setFromPoints(l,i)}let o=this.alignedSatBounds;o[0].setFromPointsField(i,"x"),o[1].setFromPointsField(i,"y"),o[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Yt.prototype.intersectsBox=(function(){let r=new rr;return function(e){this.needsUpdate&&this.update();let t=e.min,i=e.max,n=this.satBounds,a=this.satAxes,s=this.alignedSatBounds;if(r.min=t.x,r.max=i.x,s[0].isSeparated(r)||(r.min=t.y,r.max=i.y,s[1].isSeparated(r))||(r.min=t.z,r.max=i.z,s[2].isSeparated(r)))return!1;for(let o=0;o<3;o++){let c=a[o],l=n[o];if(r.setFromBox(c,e),l.isSeparated(r))return!1}return!0}})();Yt.prototype.intersectsTriangle=(function(){let r=new Si,e=new Array(3),t=new rr,i=new rr,n=new P;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(r.copy(a),r.update(),a=r);let s=this.satBounds,o=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let u=0;u<3;u++){let d=s[u],p=o[u];if(t.setFromPoints(p,e),d.isSeparated(t))return!1}let c=a.satBounds,l=a.satAxes,h=this.points;for(let u=0;u<3;u++){let d=c[u],p=l[u];if(t.setFromPoints(p,h),d.isSeparated(t))return!1}for(let u=0;u<3;u++){let d=o[u];for(let p=0;p<4;p++){let b=l[p];if(n.crossVectors(d,b),t.setFromPoints(n,e),i.setFromPoints(n,h),t.isSeparated(i))return!1}}return!0}})();Yt.prototype.closestPointToPoint=(function(){return function(r,e){return this.needsUpdate&&this.update(),e.copy(r).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Yt.prototype.distanceToPoint=(function(){let r=new P;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();Yt.prototype.distanceToBox=(function(){let r=["x","y","z"],e=new Array(12).fill().map(()=>new tr),t=new Array(12).fill().map(()=>new tr),i=new P,n=new P;return function(a,s=0,o=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(o||c)&&(a.getCenter(n),this.closestPointToPoint(n,i),a.closestPointToPoint(i,n),o&&o.copy(i),c&&c.copy(n)),0;let l=s*s,h=a.min,u=a.max,d=this.points,p=1/0;for(let g=0;g<8;g++){let f=d[g];n.copy(f).clamp(h,u);let m=f.distanceToSquared(n);if(m<p&&(p=m,o&&o.copy(f),c&&c.copy(n),m<l))return Math.sqrt(m)}let b=0;for(let g=0;g<3;g++)for(let f=0;f<=1;f++)for(let m=0;m<=1;m++){let _=(g+1)%3,v=(g+2)%3,x=f<<_|m<<v,E=1<<g|f<<_|m<<v,w=d[x],S=d[E];e[b].set(w,S);let A=r[g],M=r[_],y=r[v],C=t[b],D=C.start,L=C.end;D[A]=h[A],D[M]=f?h[M]:u[M],D[y]=m?h[y]:u[M],L[A]=u[A],L[M]=f?h[M]:u[M],L[y]=m?h[y]:u[M],b++}for(let g=0;g<=1;g++)for(let f=0;f<=1;f++)for(let m=0;m<=1;m++){n.x=g?u.x:h.x,n.y=f?u.y:h.y,n.z=m?u.z:h.z,this.closestPointToPoint(n,i);let _=n.distanceToSquared(i);if(_<p&&(p=_,o&&o.copy(i),c&&c.copy(n),_<l))return Math.sqrt(_)}for(let g=0;g<12;g++){let f=e[g];for(let m=0;m<12;m++){let _=t[m];tp(f,_,i,n);let v=i.distanceToSquared(n);if(v<p&&(p=v,o&&o.copy(i),c&&c.copy(n),v<l))return Math.sqrt(v)}}return Math.sqrt(p)}})();var Ws=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},Ed=class extends Ws{constructor(){super(()=>new Si)}},Bi=new Ed,Td=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},dt=new Td,tn,ba,ca=[],jo=new Ws(()=>new ot);function u1(r,e,t,i,n,a){tn=jo.getPrimitive(),ba=jo.getPrimitive(),ca.push(tn,ba),dt.setBuffer(r._roots[e]);let s=wd(0,r.geometry,t,i,n,a);dt.clearBuffer(),jo.releasePrimitive(tn),jo.releasePrimitive(ba),ca.pop(),ca.pop();let o=ca.length;return o>0&&(ba=ca[o-1],tn=ca[o-2]),s}function wd(r,e,t,i,n=null,a=0,s=0){let{float32Array:o,uint16Array:c,uint32Array:l}=dt,h=r*2;if(ui(h,c)){let p=xi(r,l),b=Ni(h,c);return yt(r,o,tn),i(p,b,!1,s,a+r,tn)}else{let p=function(L){let{uint16Array:B,uint32Array:j}=dt,z=L*2;for(;!ui(z,B);)L=Oi(L),z=L*2;return xi(L,j)},b=function(L){let{uint16Array:B,uint32Array:j}=dt,z=L*2;for(;!ui(z,B);)L=ki(L,j),z=L*2;return xi(L,j)+Ni(z,B)};var u=p,d=b;let g=Oi(r),f=ki(r,l),m=g,_=f,v,x,E,w;if(n&&(E=tn,w=ba,yt(m,o,E),yt(_,o,w),v=n(E),x=n(w),x<v)){m=f,_=g;let L=v;v=x,x=L,E=w}E||(E=tn,yt(m,o,E));let S=ui(m*2,c),A=t(E,S,v,s+1,a+m),M;if(A===fm){let L=p(m),B=b(m)-L;M=i(L,B,!0,s+1,a+m,E)}else M=A&&wd(m,e,t,i,n,a,s+1);if(M)return!0;w=ba,yt(_,o,w);let y=ui(_*2,c),C=t(w,y,x,s+1,a+_),D;if(C===fm){let L=p(_),B=b(_)-L;D=i(L,B,!0,s+1,a+_,w)}else D=C&&wd(_,e,t,i,n,a,s+1);return!!D}}var gs=new P,sh=new P;function d1(r,e,t={},i=0,n=1/0){let a=i*i,s=n*n,o=1/0,c=null;if(r.shapecast({boundsTraverseOrder:h=>(gs.copy(e).clamp(h.min,h.max),gs.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<o&&d<s,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,gs);let d=e.distanceToSquared(gs);return d<o&&(sh.copy(gs),o=d,c=u),d<a}}),o===1/0)return null;let l=Math.sqrt(o);return t.point?t.point.copy(sh):t.point=sh.clone(),t.distance=l,t.faceIndex=c,t}var p1=parseInt(kc)>=169,Cn=new P,Pn=new P,In=new P,Wo=new Me,Xo=new Me,qo=new Me,vm=new P,xm=new P,ym=new P,bs=new P;function f1(r,e,t,i,n,a,s,o){let c;if(a===$t?c=r.intersectTriangle(i,t,e,!0,n):c=r.intersectTriangle(e,t,i,a!==Zi,n),c===null)return null;let l=r.origin.distanceTo(n);return l<s||l>o?null:{distance:l,point:n.clone()}}function m1(r,e,t,i,n,a,s,o,c,l,h){Cn.fromBufferAttribute(e,a),Pn.fromBufferAttribute(e,s),In.fromBufferAttribute(e,o);let u=f1(r,Cn,Pn,In,bs,c,l,h);if(u){let d=new P;hi.getBarycoord(bs,Cn,Pn,In,d),i&&(Wo.fromBufferAttribute(i,a),Xo.fromBufferAttribute(i,s),qo.fromBufferAttribute(i,o),u.uv=hi.getInterpolation(bs,Cn,Pn,In,Wo,Xo,qo,new Me)),n&&(Wo.fromBufferAttribute(n,a),Xo.fromBufferAttribute(n,s),qo.fromBufferAttribute(n,o),u.uv1=hi.getInterpolation(bs,Cn,Pn,In,Wo,Xo,qo,new Me)),t&&(vm.fromBufferAttribute(t,a),xm.fromBufferAttribute(t,s),ym.fromBufferAttribute(t,o),u.normal=hi.getInterpolation(bs,Cn,Pn,In,vm,xm,ym,new P),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:s,c:o,normal:new P,materialIndex:0};hi.getNormal(Cn,Pn,In,p.normal),u.face=p,u.faceIndex=a,p1&&(u.barycoord=d)}return u}function jc(r,e,t,i,n,a,s){let o=i*3,c=o+0,l=o+1,h=o+2,u=r.index;r.index&&(c=u.getX(c),l=u.getX(l),h=u.getX(h));let{position:d,normal:p,uv:b,uv1:g}=r.attributes,f=m1(t,d,p,b,g,c,l,h,e,a,s);return f?(f.faceIndex=i,n&&n.push(f),f):null}function Pt(r,e,t,i){let n=r.a,a=r.b,s=r.c,o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),n.x=i.getX(o),n.y=i.getY(o),n.z=i.getZ(o),a.x=i.getX(c),a.y=i.getY(c),a.z=i.getZ(c),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l)}function g1(r,e,t,i,n,a,s,o){let{geometry:c,_indirectBuffer:l}=r;for(let h=i,u=i+n;h<u;h++)jc(c,e,t,h,a,s,o)}function b1(r,e,t,i,n,a,s){let{geometry:o,_indirectBuffer:c}=r,l=1/0,h=null;for(let u=i,d=i+n;u<d;u++){let p;p=jc(o,e,t,u,null,a,s),p&&p.distance<l&&(h=p,l=p.distance)}return h}function _1(r,e,t,i,n,a,s){let{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=h,Pt(s,d*3,c,l),s.needsUpdate=!0,i(s,d,n,a))return!0}return!1}function v1(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=r.geometry,i=t.index?t.index.array:null,n=t.attributes.position,a,s,o,c,l=0,h=r._roots;for(let d=0,p=h.length;d<p;d++)a=h[d],s=new Uint32Array(a),o=new Uint16Array(a),c=new Float32Array(a),u(0,l),l+=a.byteLength;function u(d,p,b=!1){let g=d*2;if(o[g+15]===Gc){let f=s[d+6],m=o[g+14],_=1/0,v=1/0,x=1/0,E=-1/0,w=-1/0,S=-1/0;for(let A=3*f,M=3*(f+m);A<M;A++){let y=i[A],C=n.getX(y),D=n.getY(y),L=n.getZ(y);C<_&&(_=C),C>E&&(E=C),D<v&&(v=D),D>w&&(w=D),L<x&&(x=L),L>S&&(S=L)}return c[d+0]!==_||c[d+1]!==v||c[d+2]!==x||c[d+3]!==E||c[d+4]!==w||c[d+5]!==S?(c[d+0]=_,c[d+1]=v,c[d+2]=x,c[d+3]=E,c[d+4]=w,c[d+5]=S,!0):!1}else{let f=d+8,m=s[d+6],_=f+p,v=m+p,x=b,E=!1,w=!1;e?x||(E=e.has(_),w=e.has(v),x=!E&&!w):(E=!0,w=!0);let S=x||E,A=x||w,M=!1;S&&(M=u(f,p,x));let y=!1;A&&(y=u(m,p,x));let C=M||y;if(C)for(let D=0;D<3;D++){let L=f+D,B=m+D,j=c[L],z=c[L+3],q=c[B],W=c[B+3];c[d+D]=j<q?j:q,c[d+D+3]=z>W?z:W}return C}}}function pn(r,e,t,i,n){let a,s,o,c,l,h,u=1/t.direction.x,d=1/t.direction.y,p=1/t.direction.z,b=t.origin.x,g=t.origin.y,f=t.origin.z,m=e[r],_=e[r+3],v=e[r+1],x=e[r+3+1],E=e[r+2],w=e[r+3+2];return u>=0?(a=(m-b)*u,s=(_-b)*u):(a=(_-b)*u,s=(m-b)*u),d>=0?(o=(v-g)*d,c=(x-g)*d):(o=(x-g)*d,c=(v-g)*d),a>c||o>s||((o>a||isNaN(a))&&(a=o),(c<s||isNaN(s))&&(s=c),p>=0?(l=(E-f)*p,h=(w-f)*p):(l=(w-f)*p,h=(E-f)*p),a>h||l>s)?!1:((l>a||a!==a)&&(a=l),(h<s||s!==s)&&(s=h),a<=n&&s>=i)}function x1(r,e,t,i,n,a,s,o){let{geometry:c,_indirectBuffer:l}=r;for(let h=i,u=i+n;h<u;h++){let d=l?l[h]:h;jc(c,e,t,d,a,s,o)}}function y1(r,e,t,i,n,a,s){let{geometry:o,_indirectBuffer:c}=r,l=1/0,h=null;for(let u=i,d=i+n;u<d;u++){let p;p=jc(o,e,t,c?c[u]:u,null,a,s),p&&p.distance<l&&(h=p,l=p.distance)}return h}function M1(r,e,t,i,n,a,s){let{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),Pt(s,d*3,c,l),s.needsUpdate=!0,i(s,d,n,a))return!0}return!1}function S1(r,e,t,i,n,a,s){dt.setBuffer(r._roots[e]),Ad(0,r,t,i,n,a,s),dt.clearBuffer()}function Ad(r,e,t,i,n,a,s){let{float32Array:o,uint16Array:c,uint32Array:l}=dt,h=r*2;if(ui(h,c)){let u=xi(r,l),d=Ni(h,c);g1(e,t,i,u,d,n,a,s)}else{let u=Oi(r);pn(u,o,i,a,s)&&Ad(u,e,t,i,n,a,s);let d=ki(r,l);pn(d,o,i,a,s)&&Ad(d,e,t,i,n,a,s)}}var E1=["x","y","z"];function T1(r,e,t,i,n,a){dt.setBuffer(r._roots[e]);let s=Rd(0,r,t,i,n,a);return dt.clearBuffer(),s}function Rd(r,e,t,i,n,a){let{float32Array:s,uint16Array:o,uint32Array:c}=dt,l=r*2;if(ui(l,o)){let h=xi(r,c),u=Ni(l,o);return b1(e,t,i,h,u,n,a)}else{let h=bg(r,c),u=E1[h],d=i.direction[u]>=0,p,b;d?(p=Oi(r),b=ki(r,c)):(p=ki(r,c),b=Oi(r));let g=pn(p,s,i,n,a)?Rd(p,e,t,i,n,a):null;if(g){let m=g.point[u];if(d?m<=s[b+h]:m>=s[b+h+3])return g}let f=pn(b,s,i,n,a)?Rd(b,e,t,i,n,a):null;return g&&f?g.distance<=f.distance?g:f:g||f||null}}var Yo=new ot,la=new Si,ha=new Si,_s=new ye,Mm=new Yt,Ko=new Yt;function w1(r,e,t,i){dt.setBuffer(r._roots[e]);let n=Cd(0,r,t,i);return dt.clearBuffer(),n}function Cd(r,e,t,i,n=null){let{float32Array:a,uint16Array:s,uint32Array:o}=dt,c=r*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Mm.set(t.boundingBox.min,t.boundingBox.max,i),n=Mm),ui(c,s)){let l=e.geometry,h=l.index,u=l.attributes.position,d=t.index,p=t.attributes.position,b=xi(r,o),g=Ni(c,s);if(_s.copy(i).invert(),t.boundsTree)return yt(r,a,Ko),Ko.matrix.copy(_s),Ko.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:f=>Ko.intersectsBox(f),intersectsTriangle:f=>{f.a.applyMatrix4(i),f.b.applyMatrix4(i),f.c.applyMatrix4(i),f.needsUpdate=!0;for(let m=b*3,_=(g+b)*3;m<_;m+=3)if(Pt(ha,m,h,u),ha.needsUpdate=!0,f.intersectsTriangle(ha))return!0;return!1}});for(let f=b*3,m=(g+b)*3;f<m;f+=3){Pt(la,f,h,u),la.a.applyMatrix4(_s),la.b.applyMatrix4(_s),la.c.applyMatrix4(_s),la.needsUpdate=!0;for(let _=0,v=d.count;_<v;_+=3)if(Pt(ha,_,d,p),ha.needsUpdate=!0,la.intersectsTriangle(ha))return!0}}else{let l=r+8,h=o[r+6];return yt(l,a,Yo),!!(n.intersectsBox(Yo)&&Cd(l,e,t,i,n)||(yt(h,a,Yo),n.intersectsBox(Yo)&&Cd(h,e,t,i,n)))}}var Zo=new ye,oh=new Yt,vs=new Yt,A1=new P,R1=new P,C1=new P,P1=new P;function I1(r,e,t,i={},n={},a=0,s=1/0){e.boundingBox||e.computeBoundingBox(),oh.set(e.boundingBox.min,e.boundingBox.max,t),oh.needsUpdate=!0;let o=r.geometry,c=o.attributes.position,l=o.index,h=e.attributes.position,u=e.index,d=Bi.getPrimitive(),p=Bi.getPrimitive(),b=A1,g=R1,f=null,m=null;n&&(f=C1,m=P1);let _=1/0,v=null,x=null;return Zo.copy(t).invert(),vs.matrix.copy(Zo),r.shapecast({boundsTraverseOrder:E=>oh.distanceToBox(E),intersectsBounds:(E,w,S)=>S<_&&S<s?(w&&(vs.min.copy(E.min),vs.max.copy(E.max),vs.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:S=>vs.distanceToBox(S),intersectsBounds:(S,A,M)=>M<_&&M<s,intersectsRange:(S,A)=>{for(let M=S,y=S+A;M<y;M++){Pt(p,3*M,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let C=E,D=E+w;C<D;C++){Pt(d,3*C,l,c),d.needsUpdate=!0;let L=d.distanceToTriangle(p,b,f);if(L<_&&(g.copy(b),m&&m.copy(f),_=L,v=C,x=M),L<a)return!0}}}});{let S=Ga(e);for(let A=0,M=S;A<M;A++){Pt(p,3*A,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let y=E,C=E+w;y<C;y++){Pt(d,3*y,l,c),d.needsUpdate=!0;let D=d.distanceToTriangle(p,b,f);if(D<_&&(g.copy(b),m&&m.copy(f),_=D,v=y,x=A),D<a)return!0}}}}}),Bi.releasePrimitive(d),Bi.releasePrimitive(p),_===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=_,i.faceIndex=v,n&&(n.point?n.point.copy(m):n.point=m.clone(),n.point.applyMatrix4(Zo),g.applyMatrix4(Zo),n.distance=g.sub(n.point).length(),n.faceIndex=x),i)}function L1(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=r.geometry,i=t.index?t.index.array:null,n=t.attributes.position,a,s,o,c,l=0,h=r._roots;for(let d=0,p=h.length;d<p;d++)a=h[d],s=new Uint32Array(a),o=new Uint16Array(a),c=new Float32Array(a),u(0,l),l+=a.byteLength;function u(d,p,b=!1){let g=d*2;if(o[g+15]===Gc){let f=s[d+6],m=o[g+14],_=1/0,v=1/0,x=1/0,E=-1/0,w=-1/0,S=-1/0;for(let A=f,M=f+m;A<M;A++){let y=3*r.resolveTriangleIndex(A);for(let C=0;C<3;C++){let D=y+C;D=i?i[D]:D;let L=n.getX(D),B=n.getY(D),j=n.getZ(D);L<_&&(_=L),L>E&&(E=L),B<v&&(v=B),B>w&&(w=B),j<x&&(x=j),j>S&&(S=j)}}return c[d+0]!==_||c[d+1]!==v||c[d+2]!==x||c[d+3]!==E||c[d+4]!==w||c[d+5]!==S?(c[d+0]=_,c[d+1]=v,c[d+2]=x,c[d+3]=E,c[d+4]=w,c[d+5]=S,!0):!1}else{let f=d+8,m=s[d+6],_=f+p,v=m+p,x=b,E=!1,w=!1;e?x||(E=e.has(_),w=e.has(v),x=!E&&!w):(E=!0,w=!0);let S=x||E,A=x||w,M=!1;S&&(M=u(f,p,x));let y=!1;A&&(y=u(m,p,x));let C=M||y;if(C)for(let D=0;D<3;D++){let L=f+D,B=m+D,j=c[L],z=c[L+3],q=c[B],W=c[B+3];c[d+D]=j<q?j:q,c[d+D+3]=z>W?z:W}return C}}}function D1(r,e,t,i,n,a,s){dt.setBuffer(r._roots[e]),Pd(0,r,t,i,n,a,s),dt.clearBuffer()}function Pd(r,e,t,i,n,a,s){let{float32Array:o,uint16Array:c,uint32Array:l}=dt,h=r*2;if(ui(h,c)){let u=xi(r,l),d=Ni(h,c);x1(e,t,i,u,d,n,a,s)}else{let u=Oi(r);pn(u,o,i,a,s)&&Pd(u,e,t,i,n,a,s);let d=ki(r,l);pn(d,o,i,a,s)&&Pd(d,e,t,i,n,a,s)}}var U1=["x","y","z"];function N1(r,e,t,i,n,a){dt.setBuffer(r._roots[e]);let s=Id(0,r,t,i,n,a);return dt.clearBuffer(),s}function Id(r,e,t,i,n,a){let{float32Array:s,uint16Array:o,uint32Array:c}=dt,l=r*2;if(ui(l,o)){let h=xi(r,c),u=Ni(l,o);return y1(e,t,i,h,u,n,a)}else{let h=bg(r,c),u=U1[h],d=i.direction[u]>=0,p,b;d?(p=Oi(r),b=ki(r,c)):(p=ki(r,c),b=Oi(r));let g=pn(p,s,i,n,a)?Id(p,e,t,i,n,a):null;if(g){let m=g.point[u];if(d?m<=s[b+h]:m>=s[b+h+3])return g}let f=pn(b,s,i,n,a)?Id(b,e,t,i,n,a):null;return g&&f?g.distance<=f.distance?g:f:g||f||null}}var Jo=new ot,ua=new Si,da=new Si,xs=new ye,Sm=new Yt,Qo=new Yt;function O1(r,e,t,i){dt.setBuffer(r._roots[e]);let n=Ld(0,r,t,i);return dt.clearBuffer(),n}function Ld(r,e,t,i,n=null){let{float32Array:a,uint16Array:s,uint32Array:o}=dt,c=r*2;if(n===null&&(t.boundingBox||t.computeBoundingBox(),Sm.set(t.boundingBox.min,t.boundingBox.max,i),n=Sm),ui(c,s)){let l=e.geometry,h=l.index,u=l.attributes.position,d=t.index,p=t.attributes.position,b=xi(r,o),g=Ni(c,s);if(xs.copy(i).invert(),t.boundsTree)return yt(r,a,Qo),Qo.matrix.copy(xs),Qo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:f=>Qo.intersectsBox(f),intersectsTriangle:f=>{f.a.applyMatrix4(i),f.b.applyMatrix4(i),f.c.applyMatrix4(i),f.needsUpdate=!0;for(let m=b,_=g+b;m<_;m++)if(Pt(da,3*e.resolveTriangleIndex(m),h,u),da.needsUpdate=!0,f.intersectsTriangle(da))return!0;return!1}});for(let f=b,m=g+b;f<m;f++){let _=e.resolveTriangleIndex(f);Pt(ua,3*_,h,u),ua.a.applyMatrix4(xs),ua.b.applyMatrix4(xs),ua.c.applyMatrix4(xs),ua.needsUpdate=!0;for(let v=0,x=d.count;v<x;v+=3)if(Pt(da,v,d,p),da.needsUpdate=!0,ua.intersectsTriangle(da))return!0}}else{let l=r+8,h=o[r+6];return yt(l,a,Jo),!!(n.intersectsBox(Jo)&&Ld(l,e,t,i,n)||(yt(h,a,Jo),n.intersectsBox(Jo)&&Ld(h,e,t,i,n)))}}var $o=new ye,ch=new Yt,ys=new Yt,k1=new P,B1=new P,F1=new P,z1=new P;function H1(r,e,t,i={},n={},a=0,s=1/0){e.boundingBox||e.computeBoundingBox(),ch.set(e.boundingBox.min,e.boundingBox.max,t),ch.needsUpdate=!0;let o=r.geometry,c=o.attributes.position,l=o.index,h=e.attributes.position,u=e.index,d=Bi.getPrimitive(),p=Bi.getPrimitive(),b=k1,g=B1,f=null,m=null;n&&(f=F1,m=z1);let _=1/0,v=null,x=null;return $o.copy(t).invert(),ys.matrix.copy($o),r.shapecast({boundsTraverseOrder:E=>ch.distanceToBox(E),intersectsBounds:(E,w,S)=>S<_&&S<s?(w&&(ys.min.copy(E.min),ys.max.copy(E.max),ys.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(e.boundsTree){let S=e.boundsTree;return S.shapecast({boundsTraverseOrder:A=>ys.distanceToBox(A),intersectsBounds:(A,M,y)=>y<_&&y<s,intersectsRange:(A,M)=>{for(let y=A,C=A+M;y<C;y++){let D=S.resolveTriangleIndex(y);Pt(p,3*D,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let L=E,B=E+w;L<B;L++){let j=r.resolveTriangleIndex(L);Pt(d,3*j,l,c),d.needsUpdate=!0;let z=d.distanceToTriangle(p,b,f);if(z<_&&(g.copy(b),m&&m.copy(f),_=z,v=L,x=y),z<a)return!0}}}})}else{let S=Ga(e);for(let A=0,M=S;A<M;A++){Pt(p,3*A,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let y=E,C=E+w;y<C;y++){let D=r.resolveTriangleIndex(y);Pt(d,3*D,l,c),d.needsUpdate=!0;let L=d.distanceToTriangle(p,b,f);if(L<_&&(g.copy(b),m&&m.copy(f),_=L,v=y,x=A),L<a)return!0}}}}}),Bi.releasePrimitive(d),Bi.releasePrimitive(p),_===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=_,i.faceIndex=v,n&&(n.point?n.point.copy(m):n.point=m.clone(),n.point.applyMatrix4($o),g.applyMatrix4($o),n.distance=g.sub(n.point).length(),n.faceIndex=x),i)}function V1(){return typeof SharedArrayBuffer<"u"}var Ls=new dt.constructor,Dc=new dt.constructor,Kr=new Ws(()=>new ot),pa=new ot,fa=new ot,lh=new ot,hh=new ot,uh=!1;function G1(r,e,t,i){if(uh)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");uh=!0;let n=r._roots,a=e._roots,s,o=0,c=0,l=new ye().copy(t).invert();for(let h=0,u=n.length;h<u;h++){Ls.setBuffer(n[h]),c=0;let d=Kr.getPrimitive();yt(0,Ls.float32Array,d),d.applyMatrix4(l);for(let p=0,b=a.length;p<b&&(Dc.setBuffer(a[p]),s=Ki(0,0,t,l,i,o,c,0,0,d),Dc.clearBuffer(),c+=a[p].length,!s);p++);if(Kr.releasePrimitive(d),Ls.clearBuffer(),o+=n[h].length,s)break}return uh=!1,s}function Ki(r,e,t,i,n,a=0,s=0,o=0,c=0,l=null,h=!1){let u,d;h?(u=Dc,d=Ls):(u=Ls,d=Dc);let p=u.float32Array,b=u.uint32Array,g=u.uint16Array,f=d.float32Array,m=d.uint32Array,_=d.uint16Array,v=r*2,x=e*2,E=ui(v,g),w=ui(x,_),S=!1;if(w&&E)h?S=n(xi(e,m),Ni(e*2,_),xi(r,b),Ni(r*2,g),c,s+e,o,a+r):S=n(xi(r,b),Ni(r*2,g),xi(e,m),Ni(e*2,_),o,a+r,c,s+e);else if(w){let A=Kr.getPrimitive();yt(e,f,A),A.applyMatrix4(t);let M=Oi(r),y=ki(r,b);yt(M,p,pa),yt(y,p,fa);let C=A.intersectsBox(pa),D=A.intersectsBox(fa);S=C&&Ki(e,M,i,t,n,s,a,c,o+1,A,!h)||D&&Ki(e,y,i,t,n,s,a,c,o+1,A,!h),Kr.releasePrimitive(A)}else{let A=Oi(e),M=ki(e,m);yt(A,f,lh),yt(M,f,hh);let y=l.intersectsBox(lh),C=l.intersectsBox(hh);if(y&&C)S=Ki(r,A,t,i,n,a,s,o,c+1,l,h)||Ki(r,M,t,i,n,a,s,o,c+1,l,h);else if(y)if(E)S=Ki(r,A,t,i,n,a,s,o,c+1,l,h);else{let D=Kr.getPrimitive();D.copy(lh).applyMatrix4(t);let L=Oi(r),B=ki(r,b);yt(L,p,pa),yt(B,p,fa);let j=D.intersectsBox(pa),z=D.intersectsBox(fa);S=j&&Ki(A,L,i,t,n,s,a,c,o+1,D,!h)||z&&Ki(A,B,i,t,n,s,a,c,o+1,D,!h),Kr.releasePrimitive(D)}else if(C)if(E)S=Ki(r,M,t,i,n,a,s,o,c+1,l,h);else{let D=Kr.getPrimitive();D.copy(hh).applyMatrix4(t);let L=Oi(r),B=ki(r,b);yt(L,p,pa),yt(B,p,fa);let j=D.intersectsBox(pa),z=D.intersectsBox(fa);S=j&&Ki(M,L,i,t,n,s,a,c,o+1,D,!h)||z&&Ki(M,B,i,t,n,s,a,c,o+1,D,!h),Kr.releasePrimitive(D)}}return S}var ec=new Yt,Em=new ot,j1={strategy:fg,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},Dd=class r{static serialize(e,t={}){t={cloneBuffers:!0,...t};let i=e.geometry,n=e._roots,a=e._indirectBuffer,s=i.getIndex(),o;return t.cloneBuffers?o={roots:n.map(c=>c.slice()),index:s?s.array.slice():null,indirectBuffer:a?a.slice():null}:o={roots:n,index:s?s.array:null,indirectBuffer:a},o}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};let{index:n,roots:a,indirectBuffer:s}=e,o=new r(t,{...i,[rh]:!0});if(o._roots=a,o._indirectBuffer=s||null,i.setIndex){let c=t.getIndex();if(c===null){let l=new st(e.index,1,!1);t.setIndex(l)}else c.array!==n&&(c.array.set(n),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...j1,[rh]:!1},t),t.useSharedArrayBuffer&&!V1())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[rh]||(o1(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ot))),this.resolveTriangleIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i}refit(e=null){return(this.indirect?L1:v1)(this,e)}traverse(e,t=0){let i=this._roots[t],n=new Uint32Array(i),a=new Uint16Array(i);s(0);function s(o,c=0){let l=o*2,h=a[l+15]===Gc;if(h){let u=n[o+6],d=a[l+14];e(c,h,new Float32Array(i,o*4,6),u,d)}else{let u=o+Ps/4,d=n[o+6],p=n[o+7];e(c,h,new Float32Array(i,o*4,6),p)||(s(u,c+1),s(d,c+1))}}}raycast(e,t=ir,i=0,n=1/0){let a=this._roots,s=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),h=s.groups,u=c?t.side:t,d=this.indirect?D1:S1;for(let p=0,b=a.length;p<b;p++){let g=l?t[h[p].materialIndex].side:u,f=o.length;if(d(this,p,g,e,o,i,n),l){let m=h[p].materialIndex;for(let _=f,v=o.length;_<v;_++)o[_].face.materialIndex=m}}return o}raycastFirst(e,t=ir,i=0,n=1/0){let a=this._roots,s=this.geometry,o=t.isMaterial,c=Array.isArray(t),l=null,h=s.groups,u=o?t.side:t,d=this.indirect?N1:T1;for(let p=0,b=a.length;p<b;p++){let g=c?t[h[p].materialIndex].side:u,f=d(this,p,g,e,i,n);f!=null&&(l==null||f.distance<l.distance)&&(l=f,c&&(f.face.materialIndex=h[p].materialIndex))}return l}intersectsGeometry(e,t){let i=!1,n=this._roots,a=this.indirect?O1:w1;for(let s=0,o=n.length;s<o&&(i=a(this,s,e,t),!i);s++);return i}shapecast(e){let t=Bi.getPrimitive(),i=this.indirect?M1:_1,{boundsTraverseOrder:n,intersectsBounds:a,intersectsRange:s,intersectsTriangle:o}=e;if(s&&o){let u=s;s=(d,p,b,g,f)=>u(d,p,b,g,f)?!0:i(d,p,this,o,b,g,t)}else s||(o?s=(u,d,p,b)=>i(u,d,this,o,p,b,t):s=(u,d,p)=>p);let c=!1,l=0,h=this._roots;for(let u=0,d=h.length;u<d;u++){let p=h[u];if(c=u1(this,u,a,s,n,l),c)break;l+=p.byteLength}return Bi.releasePrimitive(t),c}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:a}=i,s=Bi.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?b=>{let g=this.resolveTriangleIndex(b);Pt(s,g*3,o,c)}:b=>{Pt(s,b*3,o,c)},h=Bi.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,p=e.indirect?b=>{let g=e.resolveTriangleIndex(b);Pt(h,g*3,u,d)}:b=>{Pt(h,b*3,u,d)};if(a){let b=(g,f,m,_,v,x,E,w)=>{for(let S=m,A=m+_;S<A;S++){p(S),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=g,y=g+f;M<y;M++)if(l(M),s.needsUpdate=!0,a(s,h,M,S,v,x,E,w))return!0}return!1};if(n){let g=n;n=function(f,m,_,v,x,E,w,S){return g(f,m,_,v,x,E,w,S)?!0:b(f,m,_,v,x,E,w,S)}}else n=b}return G1(this,e,t,n)}intersectsBox(e,t){return ec.set(e.min,e.max,t),ec.needsUpdate=!0,this.shapecast({intersectsBounds:i=>ec.intersectsBox(i),intersectsTriangle:i=>ec.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},a=0,s=1/0){return(this.indirect?H1:I1)(this,e,t,i,n,a,s)}closestPointToPoint(e,t={},i=0,n=1/0){return d1(this,e,t,i,n)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{yt(0,new Float32Array(t),Em),e.union(Em)}),e}};function Tm(r,e,t){return r===null?null:(r.point.applyMatrix4(e.matrixWorld),r.distance=r.point.distanceTo(t.ray.origin),r.object=e,r)}var tc=new Ur,wm=new P,Am=new ye,W1=He.prototype.raycast,X1=Su.prototype.raycast,Rm=new P,Gt=new He,ic=[];function q1(r,e){this.isBatchedMesh?Y1.call(this,r,e):K1.call(this,r,e)}function Y1(r,e){if(this.boundsTrees){let t=this.boundsTrees,i=this._drawInfo||this._instanceInfo,n=this._drawRanges||this._geometryInfo,a=this.matrixWorld;Gt.material=this.material,Gt.geometry=this.geometry;let s=Gt.geometry.boundsTree,o=Gt.geometry.drawRange;Gt.geometry.boundingSphere===null&&(Gt.geometry.boundingSphere=new Dt);for(let c=0,l=i.length;c<l;c++){if(!this.getVisibleAt(c))continue;let h=i[c].geometryIndex;if(Gt.geometry.boundsTree=t[h],this.getMatrixAt(c,Gt.matrixWorld).premultiply(a),!Gt.geometry.boundsTree){this.getBoundingBoxAt(h,Gt.geometry.boundingBox),this.getBoundingSphereAt(h,Gt.geometry.boundingSphere);let u=n[h];Gt.geometry.setDrawRange(u.start,u.count)}Gt.raycast(r,ic);for(let u=0,d=ic.length;u<d;u++){let p=ic[u];p.object=this,p.batchId=c,e.push(p)}ic.length=0}Gt.geometry.boundsTree=s,Gt.geometry.drawRange=o,Gt.material=null,Gt.geometry=null}else X1.call(this,r,e)}function K1(r,e){if(this.geometry.boundsTree){if(this.material===void 0)return;Am.copy(this.matrixWorld).invert(),tc.copy(r.ray).applyMatrix4(Am),Rm.setFromMatrixScale(this.matrixWorld),wm.copy(tc.direction).multiply(Rm);let t=wm.length(),i=r.near/t,n=r.far/t,a=this.geometry.boundsTree;if(r.firstHitOnly===!0){let s=Tm(a.raycastFirst(tc,this.material,i,n),this,r);s&&e.push(s)}else{let s=a.raycast(tc,this.material,i,n);for(let o=0,c=s.length;o<c;o++){let l=Tm(s[o],this,r);l&&e.push(l)}}}else W1.call(this,r,e)}function Z1(r={}){return this.boundsTree=new Dd(this,r),this.boundsTree}var Ud=class{constructor(){this.k=new Float64Array(4096),this.v=new Int32Array(4096),this.size=0,this.top=0}clear(){this.size=0}push(e,t){if(this.size===this.k.length){let n=new Float64Array(this.size*2);n.set(this.k),this.k=n;let a=new Int32Array(this.size*2);a.set(this.v),this.v=a}let i=this.size++;for(;i>0;){let n=i-1>>1;if(this.k[n]<=e)break;this.k[i]=this.k[n],this.v[i]=this.v[n],i=n}this.k[i]=e,this.v[i]=t}pop(){let e=this.v[0];this.top=this.k[0];let t=--this.size,i=this.k[t],n=this.v[t],a=0;for(;;){let s=2*a+1;if(s>=t||(s+1<t&&this.k[s+1]<this.k[s]&&s++,this.k[s]>=i))break;this.k[a]=this.k[s],this.v[a]=this.v[s],a=s}return this.k[a]=i,this.v[a]=n,e}},Nd=class{constructor(e,t,i){let n=e.length/3,a=new Int32Array(n),s=new Map,o=0;for(let v=0;v<n;v++){let x=Math.round(e[3*v]*1e5)+","+Math.round(e[3*v+1]*1e5)+","+Math.round(e[3*v+2]*1e5),E=s.get(x);E===void 0&&(E=o++,s.set(x,E)),a[v]=E}this.canon=a,this.n=o;let c=new Float32Array(3*o),l=new Float32Array(3*o);for(let v=0;v<n;v++){let x=3*a[v];c[x]=e[3*v],c[x+1]=e[3*v+1],c[x+2]=e[3*v+2],l[x]+=t[3*v],l[x+1]+=t[3*v+1],l[x+2]+=t[3*v+2]}for(let v=0;v<o;v++){let x=Math.hypot(l[3*v],l[3*v+1],l[3*v+2])||1;l[3*v]/=x,l[3*v+1]/=x,l[3*v+2]/=x}this.P=c,this.N=l;let h=new Int32Array(i.length),u=0;for(let v=0;v<i.length;v+=3){let x=a[i[v]],E=a[i[v+1]],w=a[i[v+2]];x===E||E===w||x===w||(h[u++]=x,h[u++]=E,h[u++]=w)}this.T=h.subarray(0,u),this.nt=u/3;let d=new Int32Array(o+1);for(let v=0;v<u;v++)d[this.T[v]+1]++;for(let v=0;v<o;v++)d[v+1]+=d[v];let p=new Int32Array(u),b=d.slice(0,o);for(let v=0;v<u;v++)p[b[this.T[v]]++]=v/3|0;this.vtOff=d,this.vt=p;let g=new Int32Array(o).fill(-1),f=new Int32Array(o+1),m=new Int32Array(2*u),_=0;for(let v=0;v<o;v++){f[v]=_;for(let x=d[v];x<d[v+1];x++){let E=3*p[x];for(let w=0;w<3;w++){let S=this.T[E+w];S!==v&&g[S]!==v&&(g[S]=v,m[_++]=S)}}}f[o]=_,this.adjOff=f,this.adj=m.subarray(0,_),this.U=new Float32Array(2*o),this.F=new Float32Array(3*o),this.dist=new Float32Array(o),this.parent=new Int32Array(o),this.mark=new Int32Array(o),this.done=new Int32Array(o),this.uset=new Int32Array(o),this.triMark=new Int32Array(this.nt),this.local=new Int32Array(o),this.localMark=new Int32Array(o),this.reached=new Int32Array(o),this.count=0,this.stamp=0,this.heap=new Ud,this.seams=[],this.e=[0,0]}_transport(e,t,i,n,a,s,o){let c=this.N,l=c[n],h=c[n+1],u=c[n+2],d=c[a],p=c[a+1],b=c[a+2],g=l*d+h*p+u*b,f=e,m=t,_=i;if(g>-.95){let E=h*b-u*p,w=u*d-l*b,S=l*p-h*d,A=(E*e+w*t+S*i)/(1+g);f=e*g+(w*i-S*t)+E*A,m=t*g+(S*e-E*i)+w*A,_=i*g+(E*t-w*e)+S*A}let v=f*d+m*p+_*b;f-=d*v,m-=p*v,_-=b*v;let x=Math.hypot(f,m,_)||1;s[o]=f/x,s[o+1]=m/x,s[o+2]=_/x}_estimate(e,t){let i=this.P,n=this.N,a=this.F,s=this.U,o=3*e,c=3*t,l=i[c]-i[o],h=i[c+1]-i[o+1],u=i[c+2]-i[o+2],d=Math.hypot(l,h,u),p=n[o],b=n[o+1],g=n[o+2],f=l*p+h*b+u*g;l-=p*f,h-=b*f,u-=g*f;let m=Math.hypot(l,h,u),_=m>1e-12?d/m:0,v=a[o],x=a[o+1],E=a[o+2],w=b*E-g*x,S=g*v-p*E,A=p*x-b*v;return this.e[0]=s[2*e]+(l*v+h*x+u*E)*_,this.e[1]=s[2*e+1]+(l*w+h*S+u*A)*_,d}_solve(e,t){let i=this.parent[e],n=this._estimate(i,e),a=this.e[0],s=this.e[1],o=a/n,c=s/n,l=1/n,h=Math.max(.003,1.5*n),u=Math.max(.02,6*n);for(let b=this.adjOff[e];b<this.adjOff[e+1];b++){let g=this.adj[b];if(g===i||this.done[g]!==t||this.uset[g]!==t)continue;let f=this._estimate(g,e),m=this.e[0]-a,_=this.e[1]-s,v=Math.hypot(m,_);v<h?(o+=this.e[0]/f,c+=this.e[1]/f,l+=1/f):v>u&&this.seams.push(a,s,this.e[0],this.e[1])}this.U[2*e]=o/l,this.U[2*e+1]=c/l,this.uset[e]=t;let d=this.F,p=3*i;this._transport(d[p],d[p+1],d[p+2],p,3*e,d,3*e)}unfold(e,t,{stopAfterSeam:i=!1}={}){let n=++this.stamp,{P:a,N:s,U:o,F:c,heap:l}=this,h=e.tri.map(S=>this.canon[S]),u=[0,0,0],d=[0,0,0];for(let S=0;S<3;S++){let A=3*h[S],M=e.bary[S];for(let y=0;y<3;y++)u[y]+=a[A+y]*M,d[y]+=s[A+y]*M}let p=Math.hypot(d[0],d[1],d[2])||1;d[0]/=p,d[1]/=p,d[2]/=p;let[b,g,f]=e.tangent,m=b*d[0]+g*d[1]+f*d[2];b-=d[0]*m,g-=d[1]*m,f-=d[2]*m,p=Math.hypot(b,g,f),p<1e-6&&(b=d[1],g=-d[0],f=0,p=Math.hypot(b,g,f)||1,p<1e-6&&(b=1,g=0,f=0,p=1)),b/=p,g/=p,f/=p;let _=d[1]*f-d[2]*g,v=d[2]*b-d[0]*f,x=d[0]*g-d[1]*b;this.center=u,this.centerNormal=d;let E=this.N;l.clear(),this.seams.length=0,this.count=0;for(let S of h){if(this.mark[S]===n)continue;let A=3*S,M=a[A]-u[0],y=a[A+1]-u[1],C=a[A+2]-u[2],D=Math.hypot(M,y,C),L=M*d[0]+y*d[1]+C*d[2];M-=d[0]*L,y-=d[1]*L,C-=d[2]*L;let B=Math.hypot(M,y,C),j=B>1e-12?D/B:0;o[2*S]=(M*b+y*g+C*f)*j,o[2*S+1]=(M*_+y*v+C*x)*j;let z=d[0]*E[A]+d[1]*E[A+1]+d[2]*E[A+2],q=d[1]*E[A+2]-d[2]*E[A+1],W=d[2]*E[A]-d[0]*E[A+2],$=d[0]*E[A+1]-d[1]*E[A],ue=(q*b+W*g+$*f)/(1+z),Ee=b*z+(W*f-$*g)+q*ue,Ue=g*z+($*b-q*f)+W*ue,Je=f*z+(q*g-W*b)+$*ue,Y=Ee*E[A]+Ue*E[A+1]+Je*E[A+2];Ee-=E[A]*Y,Ue-=E[A+1]*Y,Je-=E[A+2]*Y;let te=Math.hypot(Ee,Ue,Je)||1;c[A]=Ee/te,c[A+1]=Ue/te,c[A+2]=Je/te,this.uset[S]=n,this.mark[S]=n,this.dist[S]=D,this.parent[S]=-1,l.push(D,S)}let w=-1;for(;l.size;){let S=l.pop(),A=l.top;if(this.done[S]===n)continue;if(this.done[S]=n,this.reached[this.count++]=S,this.uset[S]!==n&&this._solve(S,n),this.seams.length&&w<0&&(w=A),i&&w>0&&A>w*1.35)break;let M=3*S;for(let y=this.adjOff[S];y<this.adjOff[S+1];y++){let C=this.adj[y];if(this.done[C]===n)continue;let D=3*C,L=A+Math.hypot(a[D]-a[M],a[D+1]-a[M+1],a[D+2]-a[M+2]);L>t||(this.mark[C]!==n||L<this.dist[C])&&(this.mark[C]=n,this.dist[C]=L,this.parent[C]=S,l.push(L,C))}}return this}analyzeSeam(){let e=this.seams;if(e.length<8)return null;let t=1/0;for(let p=0;p<e.length;p+=2)t=Math.min(t,Math.hypot(e[p],e[p+1]));let i=0,n=0,a=0,s=0,o=[];for(let p=0;p<e.length;p+=4){let b=Math.hypot(e[p],e[p+1]),g=Math.hypot(e[p+2],e[p+3]);if(!(Math.min(b,g)>t*1.3)){o.push(p);for(let f of[0,2]){let m=e[p+f],_=e[p+f+1];i+=m*m,n+=m*_,a+=_*_,s++}}}if(s<4)return null;let c=.5*Math.atan2(2*n,i-a),l=Math.cos(c),h=Math.sin(c),u=o.map(p=>Math.abs((e[p]-e[p+2])*l+(e[p+1]-e[p+3])*h)).sort((p,b)=>p-b),d=u[u.length/2|0];return d>.03?{ax:l,ay:h,C:d}:null}cylinder(e){this.unfold(e,.6,{stopAfterSeam:!0});let t=this.analyzeSeam();if(!t)return null;let i=-t.ay,n=t.ax,a=this.P,s=this.U,o=[];for(let d=0;d<this.count;d++){let p=this.reached[d];Math.abs(s[2*p]*i+s[2*p+1]*n)<.004&&o.push(p)}if(o.length<16)return null;let c=[0,0,0];for(let d of o)for(let p=0;p<3;p++)c[p]+=a[3*d+p]/o.length;let l=[0,0,0,0,0,0,0,0,0];for(let d of o){let p=[a[3*d]-c[0],a[3*d+1]-c[1],a[3*d+2]-c[2]];for(let b=0;b<3;b++)for(let g=0;g<3;g++)l[3*b+g]+=p[b]*p[g]}let h=l[0]+l[4]+l[8],u=[.3,.9,.2];for(let d=0;d<80;d++){let p=[0,1,2].map(g=>h*u[g]-(l[3*g]*u[0]+l[3*g+1]*u[1]+l[3*g+2]*u[2])),b=Math.hypot(...p);u=p.map(g=>g/b)}return{center:c,axis:u,C:t.C}}wrapUnfold(e,t,i,n=0){let{C:a,axis:s,center:o}=t,c=a/(2*Math.PI),l=c*Math.tan(n);i+=Math.abs(l),this.unfold(e,Math.hypot(a/2,i)*1.2+.01);let h=this.P,u=this.N,d=this.U,p=this.center,b=[p[0]-o[0],p[1]-o[1],p[2]-o[2]],g=b[0]*s[0]+b[1]*s[1]+b[2]*s[2],f=[b[0]-s[0]*g,b[1]-s[1]*g,b[2]-s[2]*g],m=Math.hypot(...f)||1;f=f.map(v=>v/m);let _=[s[1]*f[2]-s[2]*f[1],s[2]*f[0]-s[0]*f[2],s[0]*f[1]-s[1]*f[0]];for(let v=0;v<this.count;v++){let x=this.reached[v],E=3*x,w=h[E]-o[0],S=h[E+1]-o[1],A=h[E+2]-o[2],M=w*s[0]+S*s[1]+A*s[2],y=w-s[0]*M,C=S-s[1]*M,D=A-s[2]*M,L=Math.hypot(y,C,D),B=(u[E]*y+u[E+1]*C+u[E+2]*D)/(L||1);if(L>2.2*c||B<.15||Math.abs(M-g)>i+.01){this.done[x]=0;continue}let j=Math.atan2(y*_[0]+C*_[1]+D*_[2],y*f[0]+C*f[1]+D*f[2]);d[2*x]=j/(2*Math.PI)*a,d[2*x+1]=M-g-l*Math.sin(j)}return{ax:1,ay:0,C:a}}buildPatch(e,t){let i=this.stamp,{P:n,N:a,U:s,T:o}=this,c=[],l=[],h=[],u=[],d=[],p=0,b=this.local,g=this.localMark,f=x=>{if(g[x]===i)return b[x];g[x]=i,b[x]=p;let E=3*x;return d.push(x),c.push(n[E]+a[E]*t,n[E+1]+a[E+1]*t,n[E+2]+a[E+2]*t),l.push(a[E],a[E+1],a[E+2]),h.push(s[2*x],s[2*x+1]),p++},m=(x,E,w)=>{let S=3*x;return d.push(x),c.push(n[S]+a[S]*t,n[S+1]+a[S+1]*t,n[S+2]+a[S+2]*t),l.push(a[S],a[S+1],a[S+2]),h.push(E,w),p++},_=[0,0,0,0,0,0],v=(x,E)=>Math.max(Math.hypot(_[0]-_[2],_[1]-_[3]),Math.hypot(_[2]-_[4],_[3]-_[5]),Math.hypot(_[0]-_[4],_[1]-_[5]))<=2.5*E+1e-4;for(let x=0;x<this.count;x++){let E=this.reached[x];for(let w=this.vtOff[E];w<this.vtOff[E+1];w++){let S=this.vt[w];if(this.triMark[S]===i)continue;this.triMark[S]=i;let A=o[3*S],M=o[3*S+1],y=o[3*S+2];if(this.done[A]!==i||this.done[M]!==i||this.done[y]!==i)continue;let C=[A,M,y],D=0;for(let L=0;L<3;L++){let B=3*C[L],j=3*C[(L+1)%3];D=Math.max(D,Math.hypot(n[B]-n[j],n[B+1]-n[j+1],n[B+2]-n[j+2])),_[2*L]=s[2*C[L]],_[2*L+1]=s[2*C[L]+1]}if(v(_,D)){u.push(f(A),f(M),f(y));continue}if(e)for(let L of[1,-1]){for(let B=0;B<3;B++){let j=s[2*C[B]],z=s[2*C[B]+1];(j*e.ax+z*e.ay)*L<0&&(j+=L*e.C*e.ax,z+=L*e.C*e.ay),_[2*B]=j,_[2*B+1]=z}v(_,D)&&u.push(m(A,_[0],_[1]),m(M,_[2],_[3]),m(y,_[4],_[5]))}}}return{position:new Float32Array(c),normal:new Float32Array(l),uv:new Float32Array(h),source:new Uint32Array(d),index:p>65535?new Uint32Array(u):new Uint16Array(u)}}};qt.prototype.computeBoundsTree=Z1;He.prototype.raycast=q1;var J1=new Ku().setMeshoptDecoder(GS),dh=new Map;function Q1(r){return dh.has(r)||dh.set(r,J1.loadAsync(r)),dh.get(r)}function Cm(r){let e=r.count,t=r.itemSize,i=new Float32Array(e*t);for(let n=0;n<e;n++)i[n*t]=r.getX(n),t>1&&(i[n*t+1]=r.getY(n)),t>2&&(i[n*t+2]=r.getZ(n));return new st(i,t)}var Od=class r{static async load(e,{axisTo:t=null,roll:i=0,mirror:n=!1,skinMat:a,capMat:s}){let o=await Q1(e),c=new r,l=[];o.scene.updateMatrixWorld(!0),o.scene.traverse(g=>{var f;if(!g.isMesh)return;let m=new qt;m.setAttribute("position",Cm(g.geometry.attributes.position)),m.setAttribute("normal",Cm(g.geometry.attributes.normal)),m.setIndex(new st(Uint32Array.from(g.geometry.index.array),1)),m.applyMatrix4(g.matrixWorld),l.push({g:m,cap:((f=g.material)==null?void 0:f.name)==="cap"})});let h=l.filter(g=>!g.cap).sort((g,f)=>f.g.attributes.position.count-g.g.attributes.position.count)[0],u=new ye;if(t){let g=$1(h.g.attributes.position.array),f=new P(...t);u.makeRotationFromQuaternion(new ni().setFromUnitVectors(g,f)),u.premultiply(new ye().makeRotationAxis(f,i))}for(let g of l)g.g.applyMatrix4(u);let d=new ot;for(let g of l)g.g.computeBoundingBox(),d.union(g.g.boundingBox);let p=d.getCenter(new P),b=new ye().makeTranslation(-p.x,t?-p.y:-d.min.y,-p.z);n&&b.premultiply(new ye().makeScale(-1,1,1));for(let g of l)if(g.g.applyMatrix4(b),n){let f=g.g.index.array;for(let m=0;m<f.length;m+=3){let _=f[m+1];f[m+1]=f[m+2],f[m+2]=_}}c.group=new Qi;for(let g of l){let f=new He(g.g,g.cap?s:a);f.castShadow=!0,c.group.add(f),g===h&&(c.skin=f)}return c.skin.geometry.computeBoundsTree(),c.graph=new Nd(c.skin.geometry.attributes.position.array,c.skin.geometry.attributes.normal.array,c.skin.geometry.index.array),c.box=new ot().setFromObject(c.group),c.sphere=c.box.getBoundingSphere(new Dt),c}seedFromHit(e){let t=this.skin.geometry.attributes.position,i=new P().fromBufferAttribute(t,e.face.a),n=new P().fromBufferAttribute(t,e.face.b),a=new P().fromBufferAttribute(t,e.face.c),s=hi.getBarycoord(e.point,i,n,a,new P);return{tri:[e.face.a,e.face.b,e.face.c],bary:[s.x,s.y,s.z]}}pointOf(e,t=new P,i){let n=this.skin.geometry.attributes.position,a=this.skin.geometry.attributes.normal;t.set(0,0,0),i&&i.set(0,0,0);let s=new P;for(let o=0;o<3;o++)t.addScaledVector(s.fromBufferAttribute(n,e.tri[o]),e.bary[o]),i&&i.addScaledVector(s.fromBufferAttribute(a,e.tri[o]),e.bary[o]);return i&&i.normalize(),t}dispose(){this.group.traverse(e=>e.isMesh&&e.geometry.dispose())}};function $1(r){let e=eE(r);e.y<0&&e.negate();let t=1/0,i=-1/0;for(let s=0;s<r.length;s+=9){let o=r[s]*e.x+r[s+1]*e.y+r[s+2]*e.z;t=Math.min(t,o),i=Math.max(i,o)}let n=i-t,a=(s,o)=>{let c=new P,l=0;for(let h=0;h<r.length;h+=9){let u=(r[h]*e.x+r[h+1]*e.y+r[h+2]*e.z-t)/n;u>=s&&u<=o&&(c.x+=r[h],c.y+=r[h+1],c.z+=r[h+2],l++)}return c.divideScalar(l)};return a(.62,.8).sub(a(.28,.45)).normalize()}function eE(r){let e=new P,t=0;for(let a=0;a<r.length;a+=21)e.x+=r[a],e.y+=r[a+1],e.z+=r[a+2],t++;e.divideScalar(t);let i=[0,0,0,0,0,0,0,0,0];for(let a=0;a<r.length;a+=21){let s=[r[a]-e.x,r[a+1]-e.y,r[a+2]-e.z];for(let o=0;o<3;o++)for(let c=0;c<3;c++)i[3*o+c]+=s[o]*s[c]}let n=new P(0,1,0);for(let a=0;a<50;a++)n=new P(i[0]*n.x+i[1]*n.y+i[2]*n.z,i[3]*n.x+i[4]*n.y+i[5]*n.z,i[6]*n.x+i[7]*n.y+i[8]*n.z).normalize();return n}var tE=`
  uniform mat3 uvMat;
  varying vec2 vUv;
  void main() {
    vUv = (uvMat * vec3(uv, 1.0)).xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,iE=`
  uniform sampler2D map;
  uniform float opacity;
  uniform float selected;
  uniform vec3 accent;
  varying vec2 vUv;
  void main() {
    if (vUv.x < 0.0 || vUv.y < 0.0 || vUv.x > 1.0 || vUv.y > 1.0) discard;
    vec4 t = texture2D(map, vUv);
    float a = t.a * opacity;
    vec3 col = mix(vec3(1.0), t.rgb, a);
    if (selected > 0.5) {
      vec2 fw = max(fwidth(vUv), vec2(1e-6));
      vec2 d = min(vUv, 1.0 - vUv) / fw;
      float edge = 1.0 - smoothstep(1.5, 3.0, min(d.x, d.y));
      vec2 along = vUv / fw;
      float dash = step(0.5, fract((d.x < d.y ? along.y : along.x) / 14.0));
      col = mix(col, accent, edge * mix(0.35, 1.0, dash));
    }
    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`,kd=class{constructor(e,t,i,n){this.model=e,this.rec=t,this.texture=new Oa(i),this.texture.colorSpace=Tt,this.texture.anisotropy=n.capabilities.getMaxAnisotropy(),this.aspect=i.height/i.width,this.canvas=i,this.uniforms={map:{value:this.texture},uvMat:{value:new Be},opacity:{value:t.opacity},selected:{value:0},accent:{value:new Re("#c8744f")}};let a=new Fi({uniforms:this.uniforms,vertexShader:tE,fragmentShader:iE,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,blending:Om,blendEquation:Zr,blendSrc:Bm,blendDst:km});this.mesh=new He(new qt,a),this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,this.builtRadius=0,this.dirty=!0,this.updateUv()}setCanvas(e){this.texture.dispose(),this.texture=new Oa(e),this.texture.colorSpace=Tt,this.texture.anisotropy=this.uniforms.map.value.anisotropy,this.uniforms.map.value=this.texture,this.canvas=e,this.aspect=e.height/e.width,this.updateUv()}get height(){return this.rec.width*this.aspect}wrapParts(){let e=Math.round(this.rec.rot/(Math.PI/2));return{q:e,tilt:this.rec.rot-e*Math.PI/2,sideways:Math.abs(e)%2===1}}get needRadius(){return .5*Math.hypot(this.rec.width,this.height)*1.08+.004}updateUv(){let{width:e,flip:t,opacity:i}=this.rec,n=this.rec.wrap?this.wrapParts().q*Math.PI/2:this.rec.rot,a=this.height,s=Math.cos(n),o=Math.sin(n),c=t?-1:1;this.uniforms.uvMat.value.set(c*s/e,c*o/e,.5,-o/a,s/a,.5,0,0,1),this.uniforms.opacity.value=i,this.needRadius>this.builtRadius&&(this.dirty=!0)}rebuild(){var e;let t=this.model.graph,i=this.rec,n=null;if(i.wrap){let c=t.cylinder(i);if(c){c.axis[0]*i.up[0]+c.axis[1]*i.up[1]+c.axis[2]*i.up[2]<0&&(c.axis=c.axis.map(d=>-d)),i.up=c.axis;let{tilt:l,sideways:h}=this.wrapParts();i.width=h?c.C/this.aspect:c.C,this.updateUv();let u=h?i.width:this.height;n=t.wrapUnfold(i,c,u/2+.004,l)}else i.wrap=!1,(e=this.onUnwrap)==null||e.call(this)}n||(t.unfold(i,this.needRadius*1.15),n=t.analyzeSeam());let a=this.needRadius*1.15,s=t.buildPatch(n,25e-5),o=new qt;o.setAttribute("position",new st(s.position,3)),o.setAttribute("normal",new st(s.normal,3)),o.setAttribute("uv",new st(s.uv,2)),o.setIndex(new st(s.index,1)),o.computeBoundingSphere(),this.mesh.geometry.dispose(),this.mesh.geometry=o,this.builtRadius=a,this.dirty=!1}contains(e){if(!e.uv)return!1;let t=new P(e.uv.x,e.uv.y,1).applyMatrix3(this.uniforms.uvMat.value);return t.x>-.04&&t.y>-.04&&t.x<1.04&&t.y<1.04}setSelected(e){this.uniforms.selected.value=e?1:0}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}},rE=2048;async function xg(r){var e;let t=await createImageBitmap(r,{imageOrientation:"from-image"}),i=Math.min(1,rE/Math.max(t.width,t.height)),n=document.createElement("canvas");return n.width=Math.max(1,Math.round(t.width*i)),n.height=Math.max(1,Math.round(t.height*i)),n.getContext("2d").drawImage(t,0,0,n.width,n.height),(e=t.close)==null||e.call(t),n}function Wc(r,e){let t=Math.min(1,e/Math.max(r.width,r.height));if(t===1)return r;let i=document.createElement("canvas");i.width=Math.round(r.width*t),i.height=Math.round(r.height*t);let n=i.getContext("2d");return n.imageSmoothingQuality="high",n.drawImage(r,0,0,i.width,i.height),i}function yg(r){let e=Wc(r,256),t=e.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data,i=0;for(let n=3;n<t.length;n+=4)t[n]<200&&i++;return i>t.length/4*.05}var nE=(r,e,t)=>{let i=Math.min(1,Math.max(0,(t-r)/(e-r)));return i*i*(3-2*i)};function aE(r){let e=parseInt(r.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function sE(r,e,t){let i=Math.max(8,Math.round(Math.max(e,t)/40)),n=Math.ceil(e/i),a=Math.ceil(t/i),s=new Float32Array(n*a),o=new Uint32Array(64);for(let l=0;l<a;l++)for(let h=0;h<n;h++){o.fill(0);let u=0,d=Math.min(e,(h+1)*i),p=Math.min(t,(l+1)*i);for(let m=l*i;m<p;m++)for(let _=h*i;_<d;_++)o[Math.min(63,r[m*e+_]*64|0)]++,u++;let b=0,g=63,f=u*.1;for(;g>0&&(b+=o[g],!(b>=f));g--);s[l*n+h]=(g+.5)/64}let c=l=>{let h=new Float32Array(s.length);for(let u=0;u<a;u++)for(let d=0;d<n;d++){let p=[];for(let b=-1;b<=1;b++)for(let g=-1;g<=1;g++){let f=d+g,m=u+b;f>=0&&m>=0&&f<n&&m<a&&p.push(s[m*n+f])}h[u*n+d]=l(p)}s=h};return c(l=>Math.max(...l)),c(l=>l.reduce((h,u)=>h+u,0)/l.length),c(l=>l.reduce((h,u)=>h+u,0)/l.length),{grid:s,gw:n,gh:a,cell:i}}function Ks(r,e){let t=r.width,i=r.height,n=r.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,t,i).data,a=new ImageData(t,i),s=a.data,o=aE(e.ink),c=e.mode==="ink";if(e.removeBg){let f=new Float32Array(t*i);for(let S=0,A=0;A<f.length;S+=4,A++)f[A]=(.299*n[S]+.587*n[S+1]+.114*n[S+2])/255;let{grid:m,gw:_,gh:v,cell:x}=sE(f,t,i),E=.05+.3*e.strength,w=E+.22;for(let S=0;S<i;S++){let A=Math.min(v-1,Math.max(0,(S+.5)/x-.5)),M=Math.floor(A),y=Math.min(v-1,M+1),C=A-M;for(let D=0;D<t;D++){let L=Math.min(_-1,Math.max(0,(D+.5)/x-.5)),B=Math.floor(L),j=Math.min(_-1,B+1),z=L-B,q=Math.max(.08,(m[M*_+B]*(1-z)+m[M*_+j]*z)*(1-C)+(m[y*_+B]*(1-z)+m[y*_+j]*z)*C),W=S*t+D,$=4*W,ue=nE(E,w,1-f[W]/q)*(n[$+3]/255);if(c)s[$]=o[0],s[$+1]=o[1],s[$+2]=o[2];else if(ue>.01)for(let Ee=0;Ee<3;Ee++){let Ue=Math.min(1,n[$+Ee]/255/q);s[$+Ee]=Math.round(255*Math.min(1,Math.max(0,1-(1-Ue)/ue)))}s[$+3]=Math.round(ue*255)}}}else for(let f=0;f<n.length;f+=4)c?(s[f]=o[0],s[f+1]=o[1],s[f+2]=o[2]):(s[f]=n[f],s[f+1]=n[f+1],s[f+2]=n[f+2]),s[f+3]=n[f+3];let l=t,h=i,u=-1,d=-1;for(let f=0;f<i;f++)for(let m=0;m<t;m++)s[4*(f*t+m)+3]>8&&(m<l&&(l=m),m>u&&(u=m),f<h&&(h=f),f>d&&(d=f));let p=document.createElement("canvas");if(u<0)return p.width=p.height=8,p;let b=6;p.width=u-l+1+2*b,p.height=d-h+1+2*b;let g=document.createElement("canvas");return g.width=t,g.height=i,g.getContext("2d").putImageData(a,0,0),p.getContext("2d").drawImage(g,l,h,u-l+1,d-h+1,b,b,u-l+1,d-h+1),p}function Mg(r,e="image/png",t){return new Promise(i=>r.toBlob(i,e,t))}IS({icons:{ImagePlus:SS,Camera:vS,Scan:AS,X:PS,RefreshCcw:wS,FlipHorizontal2:yS,WandSparkles:CS,Copy:xS,Trash2:RS,PersonStanding:TS,BicepsFlexed:_S,Footprints:MS,PanelLeft:ES}});var re=r=>document.getElementById(r),Uc=[{name:"\u0411\u0435\u043B\u044B\u0439",color:"#f3efe9"},{name:"\u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C",color:"#ede2d0"},{name:"\u0411\u0435\u0436\u0435\u0432\u044B\u0439",color:"#e2cbae"},{name:"\u0422\u0451\u043F\u043B\u044B\u0439",color:"#d2a88a"},{name:"\u0420\u043E\u0437\u043E\u0432\u044B\u0439",color:"#ebb4c0"}],ip=[{name:"\u0422\u0451\u043F\u043B\u044B\u0439",stops:["#f7f2ec","#ece4d9","#ddd2c4"]},{name:"\u0411\u0435\u043B\u044B\u0439",stops:["#ffffff","#f7f7f6","#e8e7e5"]},{name:"\u0421\u0435\u0440\u044B\u0439",stops:["#d6d5d3","#bcbbb9","#9f9e9c"]},{name:"\u0413\u0440\u0430\u0444\u0438\u0442",stops:["#4b4745","#343130","#211f1e"],dark:!0},{name:"\u0427\u0451\u0440\u043D\u044B\u0439",stops:["#161616","#080808","#000000"],dark:!0}],Sg=["#24262b","#3d4149","#25304a","#4e3426"],oE={body:.13,arm:.08,leg:.1},Xs=.01,rp=.8,cE={body:{},arm:{axisTo:[0,1,0],roll:-Math.PI/2},leg:{axisTo:[0,1,0],roll:0}},Eg=re("stage"),Cr=re("view"),lr=new yc({canvas:Cr,antialias:!0,alpha:!0});lr.setPixelRatio(Math.min(window.devicePixelRatio,2));lr.toneMapping=zm;lr.shadowMap.enabled=!0;lr.shadowMap.type=Nm;var hr=new Hs,lE=new zs(lr);hr.environment=lE.fromScene(new Yu,.04).texture;hr.environmentIntensity=.5;var At=new Ft(28,1,.01,40),bt=new qu(At,Cr);bt.enableDamping=!0;bt.dampingFactor=.09;bt.rotateSpeed=.75;bt.zoomSpeed=.9;bt.panSpeed=.8;bt.screenSpacePanning=!0;bt.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN};hr.add(new Bu(16777215,14075312,.55));var Pr=new Ba(16774118,1.8);Pr.castShadow=!0;Pr.shadow.mapSize.set(2048,2048);Pr.shadow.bias=-4e-4;Pr.shadow.normalBias=.02;hr.add(Pr,Pr.target);var Tg=new Ba(15659519,.45),wg=new Ba(16777215,.95);hr.add(Tg,wg);var Xc=new He(new Na(8,8),new Ru({opacity:.08}));Xc.rotation.x=-Math.PI/2;Xc.receiveShadow=!0;var ja=new He(new Na(1,1),new Ui({map:hE(),transparent:!0,depthWrite:!1,toneMapped:!1}));ja.rotation.x=-Math.PI/2;ja.position.y=.001;ja.scale.set(.95,.55,1);hr.add(Xc,ja);var Mt=new Qi;hr.add(Mt);var Bd=r=>r.applyQuaternion(Mt.quaternion.clone().invert()),Ag=new Mi({color:Uc[1].color,roughness:.55,specularIntensity:.35,sheen:.6,sheenRoughness:.5,sheenColor:new Re("#ffffff")}),Rg=new sn({color:"#c4b6a6",roughness:.95});function hE(){let r=document.createElement("canvas");r.width=r.height=128;let e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(70,50,30,0.30)"),t.addColorStop(.5,"rgba(70,50,30,0.12)"),t.addColorStop(1,"rgba(70,50,30,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let i=new Oa(r);return i.colorSpace=Tt,i}var Le={variant:"1",sex:"male",part:"body",side:"L",tone:1,bg:0,decals:{},counter:0},wt=null,pi=[],Qe=null,Di=null,ph=new Map,Ds=new Map,Fd=!0,gt=()=>{Fd=!0},zd=()=>`${Le.part}_${Le.sex}${Le.variant==="1"?"":Le.variant==="3"&&!Le.model3Legacy?"_3n":"_"+Le.variant}`,Fn=()=>Le.part==="body"?zd():`${zd()}_${Le.side}`,qc=()=>Math.random().toString(36).slice(2,10)+Date.now().toString(36);function uE(r){if(!ph.has(r)){let e={...cE[Le.part],mirror:Le.part!=="body"&&Le.side==="R",skinMat:Ag,capMat:Rg};ph.set(r,Od.load(`./models/${zd()}.glb`,e))}return ph.get(r)}async function Yc(r){if(Ds.has(r))return Ds.get(r);let e=await $d("img:"+r);if(!e)return null;let t=await xg(e);return Ds.set(r,t),t}var Ea=0;function Fa(){Ea&&(clearTimeout(Ea),Ea=0,ep("state",JSON.parse(JSON.stringify(Le))).catch(()=>{}))}function Ti(r=!1){clearTimeout(Ea),Ea=setTimeout(Fa,400),r&&Fa()}document.addEventListener("visibilitychange",()=>{document.hidden&&Fa()});window.addEventListener("pagehide",Fa);var kn=0,za=0,jt=null;function Cg(){let r=window.innerWidth,e=window.innerHeight;lr.setSize(r,e,!1),At.aspect=r/e,Kc(),kn=za,Zc(),gt()}function Kc(){za=window.innerWidth>760?((Le.panelHidden?0:254)-(re("inspector").classList.contains("open")?332:0))/2:0}function Zc(){let r=window.innerWidth,e=window.innerHeight;At.setViewOffset(r,e,-kn,22,r,e),At.updateProjectionMatrix()}function dE(r){let e=r.sphere,t=e.radius;Pr.target.position.copy(e.center),Pr.position.copy(e.center).add(new P(.55,1.2,.95).multiplyScalar(t*2.2)),Tg.position.copy(e.center).add(new P(-1.5,.6,.8).multiplyScalar(t*2)),wg.position.copy(e.center).add(new P(-.3,.9,-1.6).multiplyScalar(t*2));let i=Pr.shadow.camera;i.left=i.bottom=-t*1.1,i.right=i.top=t*1.1,i.near=t*.5,i.far=t*6,i.updateProjectionMatrix()}function Pg(){let r=wt.sphere,e=wt.box.getSize(new P),t=window.innerWidth,i=window.innerHeight,n=t>760&&!Le.panelHidden?t-300:t-48,a=i-190,s=Math.tan(zn.degToRad(At.fov)/2),o=s*At.aspect,c=Math.max(e.x/2/(o*n/t),e.y/2/(s*a/i))+e.z/2,l=wt.box.getCenter(new P),h=l.clone().add(new P(0,0,c));return bt.minDistance=r.radius*(Le.part==="body"?.12:.3),bt.maxDistance=c*2,{pos:h,target:l}}function Ig(r,e,t=650,i=!1){jt={p0:At.position.clone(),t0:bt.target.clone(),p1:r,t1:e,start:performance.now(),ms:t},i&&Object.assign(jt,{rq0:Mt.quaternion.clone(),rp0:Mt.position.clone()})}function Lg(r,e,t){let i=e?e.clone():At.position.clone().sub(bt.target).normalize();e&&(i.y=zn.clamp(i.y,-.5,.5)),i.normalize();let n=Math.max(bt.minDistance,t??At.position.distanceTo(bt.target)*.5);Ig(r.clone().addScaledVector(i,n),r.clone())}var Un=new Pc;Un.firstHitOnly=!0;var Pm=new Me;function Dg(r,e){let t=Cr.getBoundingClientRect();Pm.set((r-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Un.setFromCamera(Pm,At)}function Jc(r,e){if(!wt)return null;Dg(r,e);let t=Un.intersectObjects(wt.group.children,!1)[0];return t&&t.object===wt.skin?t:null}function pE(r,e){if(!wt)return null;Dg(r,e);let t=Un.intersectObjects(wt.group.children,!1)[0],i=t?t.distance+.004:1/0,n=Qe?[Qe,...pi.filter(a=>a!==Qe).reverse()]:[...pi].reverse();Un.firstHitOnly=!1;try{for(let a of n)for(let s of Un.intersectObject(a.mesh,!1)){if(s.distance>i)break;if(a.contains(s))return a}}finally{Un.firstHitOnly=!0}return null}function fE(r){let e=r.clone().project(At),t=Cr.getBoundingClientRect();return{x:t.left+(e.x+1)/2*t.width,y:t.top+(1-e.y)/2*t.height}}function mE(r){let e=Bd(new P(0,1,0).applyQuaternion(At.quaternion)),t=e.addScaledVector(r,-e.dot(r));return t.lengthSq()<1e-6&&t.copy(Bd(new P(1,0,0).applyQuaternion(At.quaternion))).cross(r),t.normalize(),new P().crossVectors(t,r).normalize().toArray()}function np(r){let e=wt.seedFromHit({face:r.face,point:Mt.worldToLocal(r.point.clone())}),t=new P;return wt.pointOf(e,new P,t),e.tangent=mE(t),e}var fh=0;async function ap(){sp(),window.dispatchEvent(new Event("primerka:model-before"));let r=Fn(),e=++fh,t=setTimeout(()=>re("loader").classList.add("show"),120),i=await uE(r);if(e!==fh)return;wt&&Mt.remove(wt.group);for(let a of pi)Mt.remove(a.mesh),a.dispose();pi=[],nr(null),wt=i,Mt.add(i.group),Mt.position.set(0,0,0),Mt.quaternion.identity(),Xc.visible=ja.visible=Le.part==="body",dE(i);let n=Pg();At.position.copy(n.pos),bt.target.copy(n.target),jt=null;for(let a of Le.decals[r]||[]){let s=await Yc(a.imageId);if(e!==fh)return;s&&Qc(a,Ks(s,a.params))}clearTimeout(t),re("loader").classList.remove("show"),Qs(),gt(),window.dispatchEvent(new Event("primerka:model-ready"))}function Qc(r,e){let t=new kd(wt,r,e,lr);return t.thumb=Wc(e,96).toDataURL(),t.onUnwrap=()=>{Qe===t&&Wa(),fn("\u0417\u0434\u0435\u0441\u044C \u043E\u0431\u0445\u0432\u0430\u0442 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u2014 \u044D\u0441\u043A\u0438\u0437 \u0441\u043D\u043E\u0432\u0430 \u043F\u043B\u043E\u0441\u043A\u0438\u0439")},Mt.add(t.mesh),pi.push(t),t}function nr(r){Qe&&Qe.setSelected(!1),Qe=r,r&&r.setSelected(!0),r||(re("inspector").classList.remove("open"),re("btnInsp").classList.remove("on")),re("btnInsp").hidden=!r,Kc(),Wa(),Qs(),gt()}function Ug(r){let e=Le.decals[Fn()];e.splice(e.indexOf(r.rec),1),Mt.remove(r.mesh),r.dispose(),pi.splice(pi.indexOf(r),1),Qe===r&&nr(null),Qs(),Ti()}var li=new Map,et=null,ws=null,ma=null;Eg.addEventListener("pointerdown",r=>{if(!window.__paintMode&&r.target===Cr){if(jt=null,li.set(r.pointerId,{x:r.clientX,y:r.clientY,sx:r.clientX,sy:r.clientY,t:performance.now()}),li.size===1){et={type:"camera",moved:!1};let e=Di?null:pE(r.clientX,r.clientY);if(e){e!==Qe&&nr(e);let t=fE(Mt.localToWorld(wt.pointOf(e.rec)));et={type:"drag",decal:e,ox:t.x-r.clientX,oy:t.y-r.clientY,moved:!1},bt.enabled=!1}}else if(li.size===2&&et?.type==="camera"&&Le.part!=="body"){let[e,t]=[...li.values()];et={type:"twist",moved:!0,a:Math.atan2(t.y-e.y,t.x-e.x)}}else if(li.size===2&&et?.type==="drag"){let[e,t]=[...li.values()],i=et.decal;et={type:"xform",decal:i,moved:!0,d0:Math.hypot(t.x-e.x,t.y-e.y),a0:Math.atan2(t.y-e.y,t.x-e.x),w0:i.rec.width,r0:i.rec.rot}}}},{capture:!0});window.addEventListener("pointermove",r=>{if(window.__paintMode)return;let e=li.get(r.pointerId);if(e&&(e.x=r.clientX,e.y=r.clientY,gt(),!!et)){if(Math.hypot(e.x-e.sx,e.y-e.sy)>8&&(et.moved=!0),et.type==="drag"&&et.moved&&(ws={x:e.x+et.ox,y:e.y+et.oy}),et.type==="twist"&&li.size===2){let[t,i]=[...li.values()],n=Math.atan2(i.y-t.y,i.x-t.x);Og(Im(n-et.a)),et.a=n}if(et.type==="xform"&&li.size===2){let[t,i]=[...li.values()],n=et.decal,a=Math.hypot(i.x-t.x,i.y-t.y),s=Math.atan2(i.y-t.y,i.x-t.x);n.rec.rot=Im(et.r0-(s-et.a0)),n.rec.wrap?n.dirty=!0:n.rec.width=zn.clamp(et.w0*a/et.d0,Xs,rp),n.updateUv(),Wa(),Ti()}}});function Ng(r){if(window.__paintMode)return;let e=li.get(r.pointerId);if(!e)return;li.delete(r.pointerId);let t=et;t?.type==="xform"&&Fa(),li.size===0?(t&&!t.moved&&performance.now()-e.t<380&&gE(e.x,e.y,t),t?.type==="drag"&&t.moved&&Ti(),et=null,bt.enabled=!0):(t?.type==="xform"||t?.type==="twist")&&(et={type:"hold",moved:!0}),gt()}window.addEventListener("pointerup",Ng);window.addEventListener("pointercancel",Ng);function gE(r,e,t){if(Di){kg(r,e)||fn("\u041A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u0441\u0430\u043C\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438");return}if(t.type==="drag")return;let i=performance.now(),n=Jc(r,e);if(n&&ma&&i-ma.t<320&&Math.hypot(r-ma.x,e-ma.y)<40){Lg(n.point),ma=null;return}ma={t:i,x:r,y:e},Qe&&nr(null)}var Im=r=>Math.atan2(Math.sin(r),Math.cos(r));function Og(r){let e=At.position.clone().sub(bt.target).normalize(),t=new ni().setFromAxisAngle(e,-r);Mt.position.sub(bt.target).applyQuaternion(t).add(bt.target),Mt.quaternion.premultiply(t),gt()}re("btnAdd").addEventListener("click",()=>re("file").click());re("file").addEventListener("change",async r=>{var e;let t=(e=r.target.files)==null?void 0:e[0];if(r.target.value="",!t)return;let i;try{i=await xg(t)}catch{fn("\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443");return}let n=yg(i);Fg({mode:"new",src:i,transparent:n,params:{removeBg:!n,strength:.5,mode:"ink",ink:Sg[0]},onDone:async a=>{let s=qc();Ds.set(s,i);let o=await Mg(i,n?"image/png":"image/jpeg",.93);ep("img:"+s,o).catch(()=>{}),Di={imageId:s,params:a,processed:Ks(i,a)},Xg("\u041A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u043C\u0435\u0441\u0442\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435, \u043A\u0443\u0434\u0430 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u044D\u0441\u043A\u0438\u0437",!0)}})});function kg(r,e){var t,i;let n=Jc(r,e);if(!n)return!1;let a=np(n),s=Di.processed.height/Di.processed.width,o=oE[Le.part],c={id:qc(),imageId:Di.imageId,n:++Le.counter,params:Di.params,...a,width:o/Math.max(1,s),rot:0,opacity:.92,flip:!1};((t=Le.decals)[i=Fn()]||(t[i]=[])).push(c);let l=Qc(c,Di.processed);return Di=null,op(),nr(l),Ti(),!0}var Wt=null,mh=!1,Bg=re("segMode");function Fg(r){Wt=r,r.params={...r.params},r.preview=Wc(r.src,900),re("sheetTitle").textContent=r.mode==="new"?"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u044D\u0441\u043A\u0438\u0437\u0430":"\u0424\u043E\u043D \u0438 \u0446\u0432\u0435\u0442",re("btnSheetOk").textContent=r.mode==="new"?"\u041D\u0430\u043D\u0435\u0441\u0442\u0438 \u043D\u0430 \u0442\u0435\u043B\u043E":"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",Zs(),re("sheet").classList.add("open"),Js()}function $c(){re("sheet").classList.remove("open"),Wt=null}function Zs(){let r=Wt.params;re("optRemove").checked=r.removeBg,uc(re("optStrength"),r.strength*100),re("outStrength").textContent=Math.round(r.strength*100)+"%";let e=r.removeBg||Wt.transparent;dc(Bg,e?r.mode:"original"),re("fieldStrength").classList.toggle("disabled",!r.removeBg),re("fieldMode").classList.toggle("disabled",!e),re("fieldInk").classList.toggle("disabled",!e||r.mode!=="ink");for(let t of re("inks").children)t.classList.toggle("on",t.dataset.v===r.ink)}function zg(){let r={...Wt.params};return!r.removeBg&&!Wt.transparent&&(r.mode="original"),r}function Js(){mh||!Wt||(mh=!0,requestAnimationFrame(()=>{if(mh=!1,!Wt)return;let r=Ks(Wt.preview,zg()),e=re("previewCanvas");e.width=r.width,e.height=r.height,e.getContext("2d").drawImage(r,0,0)}))}re("optRemove").addEventListener("change",r=>{Wt.params.removeBg=r.target.checked,Zs(),Js()});re("optStrength").addEventListener("input",r=>{Wt.params.strength=r.target.value/100,Zs(),Js()});Bg.addEventListener("click",r=>{let e=r.target.closest("button");e&&(Wt.params.mode=e.dataset.v,Zs(),Js())});for(let r of Sg){let e=document.createElement("button");e.className="swatch",e.dataset.v=r,e.style.background=r,e.addEventListener("click",()=>{Wt.params.ink=r,Zs(),Js()}),re("inks").append(e)}re("previewBg").addEventListener("click",r=>{let e=r.target.closest("button");if(e){for(let t of re("previewBg").children)t.classList.toggle("on",t===e);re("sheetPreview").className="sheet-preview bg-"+e.dataset.bg}});re("previewBg").children[0].classList.add("on");re("btnSheetCancel").addEventListener("click",$c);re("sheet").addEventListener("click",r=>{r.target===r.currentTarget&&Wt?.mode==="edit"&&$c()});re("btnSheetOk").addEventListener("click",()=>{let r=Wt,e=zg();$c(),r.onDone(e)});var qs=re("rngSize"),Nc=re("rngRot"),Oc=re("rngOpacity"),bE=r=>1e3*Math.log(r/Xs)/Math.log(rp/Xs),_E=r=>Xs*Math.pow(rp/Xs,r/1e3),hc=r=>(r*100).toFixed(r<.1?1:0).replace(".",",");function uc(r,e){r.value=e;let t=(r.value-r.min)/(r.max-r.min)*100;r.style.setProperty("--p",t+"%")}function Wa(){if(!Qe)return;let r=Qe.rec;re("inspThumb").src=Qe.thumb,re("inspTitle").textContent="\u042D\u0441\u043A\u0438\u0437 "+r.n,re("inspDims").textContent=`${hc(r.width)} \xD7 ${hc(Qe.height)} \u0441\u043C`,uc(qs,bE(r.width)),re("outSize").textContent=hc(r.width)+" \u0441\u043C";let e=Math.round(zn.radToDeg(r.rot));uc(Nc,e),re("outRot").textContent=e+"\xB0",uc(Oc,Math.round(r.opacity*100)),re("outOpacity").textContent=Math.round(r.opacity*100)+"%",qs.closest(".field").classList.toggle("disabled",!!r.wrap),r.wrap&&(re("outSize").textContent="\u043F\u043E \u043E\u0431\u0445\u0432\u0430\u0442\u0443"),re("actWrap").classList.toggle("accent",!!r.wrap),re("actWrap").querySelector("span").textContent=r.wrap?"\u0421\u043D\u044F\u0442\u044C \u043E\u0431\u0445\u0432\u0430\u0442":"\u041E\u0431\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043E\u043A\u0440\u0443\u0433"}function Ha(){Qe.updateUv(),Wa(),gt(),Ti()}qs.addEventListener("input",()=>{Qe.rec.width=_E(+qs.value),Ha()});Nc.addEventListener("input",()=>{Qe.rec.rot=zn.degToRad(+Nc.value),Qe.rec.wrap&&(Qe.dirty=!0),Ha()});Oc.addEventListener("input",()=>{Qe.rec.opacity=Oc.value/100,Ha()});for(let r of[qs,Nc,Oc])r.addEventListener("change",Fa);function Hg(r){re("inspector").classList.toggle("open",r),re("btnInsp").classList.toggle("on",r),Kc(),gt()}re("btnDeselect").addEventListener("click",()=>Hg(!1));re("btnInsp").addEventListener("click",()=>Hg(!re("inspector").classList.contains("open")));re("actFlip").addEventListener("click",()=>{Qe.rec.flip=!Qe.rec.flip,Ha()});re("actDelete").addEventListener("click",()=>Ug(Qe));re("actDup").addEventListener("click",()=>{let r=Qe.rec,e={...structuredClone(r),id:qc(),n:++Le.counter};Le.decals[Fn()].push(e);let t=Qc(e,Qe.canvas);nr(t),Ti(),fn("\u041A\u043E\u043F\u0438\u044F \u043B\u0435\u0436\u0438\u0442 \u043F\u043E\u0432\u0435\u0440\u0445 \u2014 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0435\u0451 \u043F\u0430\u043B\u044C\u0446\u0435\u043C")});re("actEdit").addEventListener("click",async()=>{let r=Qe,e=await Yc(r.rec.imageId);e&&Fg({mode:"edit",src:e,transparent:yg(e),params:r.rec.params,onDone:t=>{r.rec.params=t;let i=Ks(e,t);r.setCanvas(i),r.thumb=Wc(i,96).toDataURL(),Wa(),Qs(),gt(),Ti()}})});re("actWrap").addEventListener("click",()=>{let r=Qe,e=r.rec;if(e.wrap){e.wrap=!1,r.dirty=!0,Ha();return}if(!wt.graph.cylinder(e)){fn("\u0417\u0434\u0435\u0441\u044C \u043E\u0431\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u0435 \u0432\u044B\u0439\u0434\u0435\u0442 \u2014 \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0440\u0443\u043A\u0435, \u043D\u043E\u0433\u0435, \u0448\u0435\u0435");return}e.wrap=!0,e.rot=Math.round(e.rot/(Math.PI/2))*(Math.PI/2),e.up=Bd(new P(0,1,0).applyQuaternion(At.quaternion)).toArray(),r.rebuild(),Ha(),fn(`\u041E\u0431\u0445\u0432\u0430\u0442 ${hc(e.width)} \u0441\u043C \u2014 \u043A\u0440\u0430\u044F \u0441\u043E\u043C\u043A\u043D\u0443\u0442\u0441\u044F \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B`)});function Qs(){re("layers").replaceChildren(...pi.map(r=>{let e=document.createElement("button");e.className="layer"+(r===Qe?" on":"");let t=document.createElement("img");return t.src=r.thumb,e.append(t),e.addEventListener("click",()=>{nr(r);let i=new P,n=Mt.localToWorld(wt.pointOf(r.rec,new P,i));Lg(n,i.applyQuaternion(Mt.quaternion),Math.max(.28,r.rec.width*3.2))}),e}))}function dc(r,e){for(let t of r.children)t.classList.toggle("on",t.dataset.v===e)}function sp(){dc(re("segVariant"),Le.variant),dc(re("segSex"),Le.sex);for(let r of re("tilesPart").children)r.classList.toggle("on",r.dataset.v===Le.part);dc(re("segSide"),Le.side),re("segSide").hidden=Le.part==="body";for(let[r,e]of[...re("tones").children].entries())e.classList.toggle("on",r===Le.tone);for(let[r,e]of[...re("backgrounds").children].entries())e.classList.toggle("on",r===Le.bg)}var vE=({stops:[r,e,t],dark:i})=>`radial-gradient(60% 50% at 50% 42%, rgba(255,255,255,${i?.05:.85}), rgba(255,255,255,0) 70%), radial-gradient(120% 100% at 50% 30%, ${r} 0%, ${e} 55%, ${t} 100%)`;function Vg(r){Le.bg=r;let e=ip[r];Eg.style.background=vE(e),document.body.classList.toggle("dark-bg",!!e.dark),document.querySelector("meta[name=theme-color]").content=e.stops[1],ja.material.opacity=e.dark?.35:1,sp()}for(let[r,e]of ip.entries()){let t=document.createElement("button");t.className="swatch",t.title=e.name,t.style.background=`radial-gradient(circle at 40% 35%, ${e.stops[0]}, ${e.stops[2]})`,t.addEventListener("click",()=>{Vg(r),Ti()}),re("backgrounds").append(t)}function Gg(r){Le.tone=r,Ag.color.set(Uc[r].color),Rg.color.set(Uc[r].color).multiplyScalar(.84),sp(),gt()}for(let[r,e]of Uc.entries()){let t=document.createElement("button");t.className="swatch",t.title=e.name,t.style.background=e.color,t.addEventListener("click",()=>{Gg(r),Ti()}),re("tones").append(t)}var el=r=>e=>{let t=e.target.closest("button");!t||Le[r]===t.dataset.v||(Le[r]=t.dataset.v,Ti(!0),ap())};re("segVariant").addEventListener("click",el("variant"));re("segSex").addEventListener("click",el("sex"));re("tilesPart").addEventListener("click",el("part"));re("segSide").addEventListener("click",el("side"));function jg(r){Le.panelHidden=r,document.body.classList.toggle("panel-hidden",r),re("btnPanel").classList.toggle("on",!r),re("btnPanel").title=r?"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044E":"\u0421\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",Kc(),gt()}re("btnPanel").addEventListener("click",()=>{jg(!Le.panelHidden),Ti()});re("btnResetView").addEventListener("click",()=>{let r=Pg();Ig(r.pos,r.target,650,!0)});re("btnShot").addEventListener("click",Wg);async function Wg(){var r;let e=Qe;e?.setSelected(!1),lr.render(hr,At);let t=Cr.width,i=Cr.height,n=document.createElement("canvas");n.width=t,n.height=i;let a=n.getContext("2d"),s=a.createRadialGradient(t/2,i*.32,0,t/2,i*.32,Math.max(t,i)*.75),[o,c,l]=ip[Le.bg].stops;s.addColorStop(0,o),s.addColorStop(.55,c),s.addColorStop(1,l),a.fillStyle=s,a.fillRect(0,0,t,i),a.drawImage(Cr,0,0),e?.setSelected(!0),gt();let h=await Mg(n,"image/jpeg",.93),u=new Date().toISOString().slice(0,16).replace(/[-:T]/g,""),d=new File([h],`primerka-${u}.jpg`,{type:"image/jpeg"});if(await lo(h,d.name))return;if((r=navigator.canShare)!=null&&r.call(navigator,{files:[d]}))try{await navigator.share({files:[d],title:"\u041F\u0440\u0438\u043C\u0435\u0440\u043A\u0430 \u042E\u043B\u043A\u0438"});return}catch(b){if(b.name==="AbortError")return}let p=document.createElement("a");p.href=URL.createObjectURL(h),p.download=d.name,p.click(),setTimeout(()=>URL.revokeObjectURL(p.href),4e3),fn("\u0421\u043D\u0438\u043C\u043E\u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438\xBB")}var Lm=0;function fn(r){let e=re("toast");e.textContent=r,e.classList.add("show"),clearTimeout(Lm),Lm=setTimeout(()=>e.classList.remove("show"),2800)}var Dm=0;function Xg(r,e,t){re("hintText").textContent=r,re("hintCancel").hidden=!e,re("hint").classList.add("show"),clearTimeout(Dm),t&&(Dm=setTimeout(op,t))}function op(){re("hint").classList.remove("show")}re("hintCancel").addEventListener("click",()=>{Di=null,op()});window.addEventListener("keydown",r=>{window.__paintMode||(r.key==="Escape"&&(Wt?$c():nr(null)),(r.key==="Delete"||r.key==="Backspace")&&Qe&&!Wt&&Ug(Qe))});document.addEventListener("input",gt);document.addEventListener("click",gt);bt.addEventListener("change",gt);window.addEventListener("resize",Cg);var xE=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function qg(){if(requestAnimationFrame(qg),jt){let r=Math.min(1,(performance.now()-jt.start)/jt.ms),e=xE(r);At.position.lerpVectors(jt.p0,jt.p1,e),bt.target.lerpVectors(jt.t0,jt.t1,e),jt.rq0&&(Mt.quaternion.slerpQuaternions(jt.rq0,new ni,e),Mt.position.lerpVectors(jt.rp0,new P,e)),r===1&&(jt=null),gt()}if(Math.abs(za-kn)>.3&&(kn+=(za-kn)*.14,Zc(),gt()),ws&&et?.type==="drag"){let r=Jc(ws.x,ws.y);r&&(Object.assign(et.decal.rec,np(r)),et.decal.dirty=!0),ws=null}for(let r of pi)r.dirty&&(r.rebuild(),r===Qe&&r.rec.wrap&&Wa(),gt());bt.update()&&gt(),Fd&&(Fd=!1,lr.render(hr,At))}(async()=>{var r,e;(e=(r=navigator.storage)==null?void 0:r.persist)==null||e.call(r).catch(()=>{});let t=await $d("state").catch(()=>null);t&&Object.assign(Le,t),Cg(),Gg(Le.tone),Vg(Le.bg??0),jg(!0),await ap(),qg(),requestAnimationFrame(()=>document.body.classList.remove("preload")),pi.length||Xg("\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u044D\u0441\u043A\u0438\u0437 \u2014 \u0444\u043E\u0442\u043E \u0438\u043B\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0438\u0437 \u0433\u0430\u043B\u0435\u0440\u0435\u0438",!1,5e3)})();window.__app={st:Le,cancelMotion:()=>{jt=null},layout:r=>{kn=za=r&&innerWidth>760?-100:0,Zc(),gt()},get model(){return wt},get decals(){return pi},camera:At,controls:bt,root:Mt,twistModel:Og,select:nr,placeAt:(r,e)=>kg(r,e),invalidate:gt};Object.defineProperty(window.__app,"pending",{get:()=>Di,set:r=>{Di=r}});function Yg(r){return Qd()("readwrite",e=>{for(let[t,i]of r)e.put(i,t);return Vc(e.transaction)})}async function yE(r,e){let t=Fn(),i=wt,n=await Promise.all(r.map(async s=>{let o=await Yc(s.imageId);if(!o)throw Error("\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0444\u0430\u0439\u043B \u044D\u0441\u043A\u0438\u0437\u0430");return[s,Ks(o,s.params)]}));if(t!==Fn()||i!==wt)throw Error("\u041C\u043E\u0434\u0435\u043B\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C");clearTimeout(Ea);let a={...Le.decals,[t]:r};try{await Yg([["state",{...Le,decals:a}],...e])}catch(s){throw Ti(),s}Le.decals=a,nr(null);for(let s of pi)Mt.remove(s.mesh),s.dispose();pi=[];for(let[s,o]of n)Qc(s,o);Qs(),gt()}var G={cancelMotion:()=>{jt=null},layout:r=>{kn=za=r&&innerWidth>760?-100:0,Zc(),gt()},get model(){return wt},get decals(){return pi},state:Le,renderer:lr,scene:hr,camera:At,controls:bt,root:Mt,canvas:Cr,key:Fn,hit:Jc,seed:np,invalidate:gt,save:Ti,read:$d,write:ep,writeEntries:Yg,replaceDecals:yE,image:Yc,clearImages:()=>Ds.clear(),newId:qc,load:ap,notify:fn,screenshot:Wg,deselect:()=>nr(null)},It={ShaderMaterial:Fi,Scene:Hs,PerspectiveCamera:Ft,WebGLRenderer:yc,BufferGeometry:qt,BufferAttribute:st,Mesh:He,MeshBasicMaterial:Ui,CanvasTexture:Oa,Raycaster:Pc,Vector2:Me,Vector3:P,SRGBColorSpace:Tt};var tl=class{constructor(){this.drawing=null,this.navigation=new Set}begin(e,{onModel:t,navigate:i=!1,button:n=0}){return this.drawing!==null?"ignore":this.navigation.size||i||!t||n!==0&&n!==5?(this.navigation.add(e),"navigate"):(this.drawing=e,"draw")}end(e){this.navigation.delete(e),this.drawing===e&&(this.drawing=null)}clear(){this.drawing=null,this.navigation.clear()}},cp=r=>{let[e,t]=[...r.values()];return{x:(e.x+t.x)/2,y:(e.y+t.y)/2,distance:Math.max(1,Math.hypot(e.x-t.x,e.y-t.y))}},il=class{constructor(){this.clear()}clear(){this.points=new Map,this.multi=!1,this.moved=!1,this.cancelled=!1,this.tap=!1,this.previous=null}down(e,t,i,n){if(this.points.set(e,{x:t,y:i,sx:t,sy:i,time:n,travel:0}),this.points.size===1&&!this.multi)return{type:"single"};if(this.points.size===2){let[a,s]=[...this.points.values()];this.tap=!this.multi&&Math.abs(a.time-s.time)<=220&&a.travel<=8,this.multi=!0,this.started=n,this.previous=cp(this.points);for(let o of this.points.values())o.mx=o.x,o.my=o.y;return{type:"multi-start"}}return this.tap=!1,{type:"blocked"}}move(e,t,i){let n=this.points.get(e);if(!n)return{type:"blocked"};let a=t-n.x,s=i-n.y;if(n.x=t,n.y=i,n.travel=Math.max(n.travel,Math.hypot(t-n.sx,i-n.sy)),!this.multi)return{type:"single",dx:a,dy:s};if(this.points.size!==2)return Math.hypot(t-n.mx,i-n.my)>8&&(this.moved=!0),{type:"blocked"};let o=cp(this.points);if(!this.moved){if(Math.max(...[...this.points.values()].map(h=>Math.hypot(h.x-h.mx,h.y-h.my)))<=8&&Math.abs(o.distance-this.previous.distance)<=8)return{type:"blocked"};this.moved=!0}let c=this.previous;return this.previous=o,{type:"transform",dx:o.x-c.x,dy:o.y-c.y,scale:c.distance/o.distance}}up(e,t,i=!1){if(this.cancelled||=i,this.points.delete(e),this.multi&&this.points.size===2&&(this.previous=cp(this.points)),this.points.size)return{type:"blocked"};let n=this.multi&&this.tap&&!this.moved&&!this.cancelled&&t-this.started<=350?"undo":this.multi?"end-multi":"end-single";return this.clear(),{type:n}}};var Xa=[{id:"liner",name:"\u041B\u0430\u0439\u043D\u0435\u0440",icon:"\u2571",size:1.5,hardness:1,opacity:1,spacing:.16,pressureSize:!0},{id:"pencil",name:"\u041A\u0430\u0440\u0430\u043D\u0434\u0430\u0448",icon:"\u270E",size:2,hardness:.75,opacity:.65,spacing:.12,grain:!0,pressureSize:!0},{id:"pen",name:"\u041F\u0435\u0440\u043E",icon:"\u2756",size:3,hardness:1,opacity:1,spacing:.12,pressureSize:!0,ellipse:.35},{id:"marker",name:"\u041C\u0430\u0440\u043A\u0435\u0440",icon:"\u25B0",size:6,hardness:.9,opacity:.35,spacing:.13,pressureSize:!1},{id:"soft",name:"\u041C\u044F\u0433\u043A\u0430\u044F \u043A\u0438\u0441\u0442\u044C",icon:"\u25CF",size:8,hardness:.25,opacity:.3,spacing:.13,pressureSize:!0},{id:"airbrush",name:"\u0410\u044D\u0440\u043E\u0433\u0440\u0430\u0444",icon:"\u25CC",size:16,hardness:0,opacity:.1,spacing:.1,pressureSize:!1},{id:"stipple",name:"\u0422\u043E\u0447\u043A\u0438",icon:"\u283F",size:7,hardness:1,opacity:.7,spacing:.18,pressureSize:!0,stipple:!0},{id:"eraser",name:"\u041B\u0430\u0441\u0442\u0438\u043A",icon:"\u25B1",size:5,hardness:.8,opacity:1,spacing:.12,pressureSize:!0,eraser:!0}],Hn=(r,e,t)=>Math.max(e,Math.min(t,r));function Kg(r,e){return e&&r.pointerType==="pen"?Hn(r.pressure||.01,.01,1):1}function Zg(r,e,t,i){if(!e)return!1;if(!r)return!0;let a=.004+t*Math.min(r.distance,e.distance)*i*3;return r.point.distanceToSquared(e.point)<=a*a}function Jg(r,e,t){let i=Math.hypot(e.x-r.x,e.y-r.y),n=Math.max(1,Math.ceil(i/Math.max(.2,t)));return Array.from({length:n},(a,s)=>{let o=(s+1)/n;return{x:r.x+(e.x-r.x)*o,y:r.y+(e.y-r.y)*o,p:r.p+(e.p-r.p)*o}})}function nl(r){if(!r||r.version!==1||!Array.isArray(r.layers)||r.layers.length>16)throw Error("\u041D\u0435\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0440\u0438\u0441\u0443\u043D\u043A\u0430");let e=0,t=0;for(let i of r.layers){if(typeof i.id!="string"||typeof i.name!="string"||!Array.isArray(i.patches)||!Number.isFinite(i.opacity)||i.opacity<0||i.opacity>1)throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0439");for(let n of i.patches){if(t++,!n.seed||!Array.isArray(n.seed.tri)||n.seed.tri.length!==3||!n.seed.tri.every(a=>Number.isInteger(a)&&a>=0&&a<2e6)||!Array.isArray(n.seed.bary)||n.seed.bary.length!==3||!n.seed.bary.every(Number.isFinite)||Math.abs(n.seed.bary.reduce((a,s)=>a+s,0)-1)>.001||!Array.isArray(n.seed.tangent)||n.seed.tangent.length!==3||!n.seed.tangent.every(Number.isFinite)||!Number.isFinite(n.width)||n.width<.03||n.width>1||!Array.isArray(n.strokes))throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u043E\u043A");for(let a of n.strokes){if(!a.brush||!Xa.some(s=>s.id===a.brush.id)||!/^#[0-9a-f]{6}$/i.test(a.color)||!Number.isFinite(a.size)||a.size<.1||a.size>100||!Number.isFinite(a.opacity)||a.opacity<0||a.opacity>1||!Number.isFinite(a.hardness)||a.hardness<0||a.hardness>1||!Array.isArray(a.points))throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u044B\u0439 \u0448\u0442\u0440\u0438\u0445");a.brush={...Xa.find(s=>s.id===a.brush.id)};for(let s of[a.startCut,a.endCut])if(s!==void 0&&(!Array.isArray(s)||s.length!==4||!s.every(Number.isFinite)||Math.max(Math.abs(s[0]),Math.abs(s[1]))>8192||Math.abs(Math.hypot(s[2],s[3])-1)>.001))throw Error("Invalid stroke join");for(let s of a.points)if(e++,![s.x,s.y,s.p].every(Number.isFinite)||Math.abs(s.x)>8192||Math.abs(s.y)>8192||s.p<0||s.p>1)throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u044B\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B")}}}if(t>128||e>1e6)throw Error("\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439");return r}function al(r){let e=document.createElement("canvas");e.width=e.height=96;let t=e.getContext("2d"),{brush:i,color:n,hardness:a}=r,s=1234567,o=()=>(s=Math.imul(s,1664525)+1013904223|0,(s>>>0)/4294967296);if(i.stipple){t.fillStyle=n;for(let l=0;l<70;l++){let h=o()*Math.PI*2,u=Math.sqrt(o())*44;t.globalAlpha=.3+o()*.7,t.beginPath(),t.arc(48+Math.cos(h)*u,48+Math.sin(h)*u,.5+o()*1.1,0,Math.PI*2),t.fill()}return e}let c=t.createRadialGradient(48,48,Math.min(.98,a)*44,48,48,46);if(c.addColorStop(0,n),c.addColorStop(1,n+"00"),t.fillStyle=c,t.beginPath(),t.ellipse(48,48,46,46*(i.ellipse||1),-.65,0,Math.PI*2),t.fill(),i.grain){let l=t.getImageData(0,0,96,96);for(let h=3;h<l.data.length;h+=4)l.data[h]*=.15+o()*.85;t.putImageData(l,0,0)}return e}function rl(r,e,t,i,n){let a=t.size/1e3*n*(t.pressure&&t.brush.pressureSize?.12+.88*i.p:1);r.globalCompositeOperation=t.brush.eraser?"destination-out":"source-over",r.globalAlpha=t.opacity*(t.pressure?Math.max(.1,i.p):1),r.drawImage(e,i.x-a/2,i.y-a/2,a,a),r.globalAlpha=1,r.globalCompositeOperation="source-over"}function lp(r,e){let[t,i,n,a]=e,s=32768,o=-a*s,c=n*s;r.beginPath(),r.moveTo(t+o,i+c),r.lineTo(t-o,i-c),r.lineTo(t-o+n*s,i-c+a*s),r.lineTo(t+o+n*s,i+c+a*s),r.closePath(),r.clip()}function hp(r,e,t,i,n,a,s){if(!a&&!s){rl(r,e,t,i,n);return}r.save(),a&&lp(r,a),s&&lp(r,s),rl(r,e,t,i,n),r.restore()}function up(r,e,t,i,n){let{points:a}=i,s=i.size/1e3*n,o=a.length,c=0;if(i.localCuts&&i.endCut)for(o=a.length-1;o>0&&(c+=Math.hypot(a[o].x-a[o-1].x,a[o].y-a[o-1].y),!(c>s));o--);let l=i.localCuts&&i.startCut?s:-1;r.clearRect(0,0,r.canvas.width,r.canvas.height);for(let[h,u]of a.entries())h&&l>=0&&(l-=Math.hypot(u.x-a[h-1].x,u.y-a[h-1].y)),hp(r,e,t,u,n,l>=0?i.startCut:null,h>=o?i.endCut:null);return l}function Qg(r,e,t){if(r.save(),!t.localCuts)for(let i of[t.startCut,t.endCut])i&&lp(r,i);r.globalAlpha=t.opacity,r.globalCompositeOperation=t.brush.eraser?"destination-out":"source-over",r.drawImage(e,0,0),r.restore()}function $g(r,e,t,i){let n=r.getContext("2d");n.clearRect(0,0,r.width,r.height),n.drawImage(e,0,0),Qg(n,t,i)}function dp(r,e){let t=r.getContext("2d");t.clearRect(0,0,r.width,r.height);let i=document.createElement("canvas");i.width=r.width,i.height=r.height;let n=i.getContext("2d");for(let a of e.strokes){let s={...a,opacity:1,brush:{...a.brush,eraser:!1}},o=al(s);up(n,o,s,a,r.width/e.width),Qg(t,i,a)}}function pp(r){if(r?.format!=="primerka-project"||r.version!==2||!r.state||!r.sessions||!r.images||!["1","2","3"].includes(r.state.variant)||!["female","male"].includes(r.state.sex)||!["body","arm","leg"].includes(r.state.part)||!["L","R"].includes(r.state.side)||!r.state.decals)throw Error("\u042D\u0442\u043E \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u041F\u0440\u0438\u043C\u0435\u0440\u043A\u0438");for(let[t,i]of Object.entries(r.sessions)){if(!/^(body|arm|leg)_(female|male)(_(?:2|3n?))?(_[LR])?$/.test(t))throw Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430");nl(i)}let e=0;if(!Number.isInteger(r.state.tone)||r.state.tone<0||r.state.tone>4||!Number.isInteger(r.state.bg)||r.state.bg<0||r.state.bg>4||!Number.isInteger(r.state.counter)||r.state.counter<0||r.state.counter>1e6)throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u044B \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430");for(let[t,i]of Object.entries(r.state.decals)){if(!/^(body|arm|leg)_(female|male)(_(?:2|3n?))?(_[LR])?$/.test(t))throw Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u044D\u0441\u043A\u0438\u0437\u0430");if(!Array.isArray(i))throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437\u044B");for(let n of i)if(e++,!r.images[n.imageId]||typeof n.id!="string"||typeof n.imageId!="string"||!n.params||!["ink","original"].includes(n.params.mode)||!/^#[0-9a-f]{6}$/i.test(n.params.ink)||!Number.isFinite(n.params.strength)||n.params.strength<0||n.params.strength>1||!Array.isArray(n.tri)||n.tri.length!==3||!n.tri.every(a=>Number.isInteger(a)&&a>=0&&a<2e6)||!Array.isArray(n.bary)||n.bary.length!==3||!n.bary.every(Number.isFinite)||!Array.isArray(n.tangent)||n.tangent.length!==3||!n.tangent.every(Number.isFinite)||!Number.isFinite(n.width)||n.width<=0||n.width>2||!Number.isFinite(n.rot)||!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1)throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u044B\u0439 \u0444\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437")}if(e>500)throw Error("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0444\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437\u043E\u0432");for(let[t,i]of Object.entries(r.images))if(!/^[a-z0-9-]{1,100}$/i.test(t)||typeof i!="string"||!/^data:image\/(png|jpeg);base64,[a-z0-9+/=]+$/i.test(i))throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435");if(r.state.model3Legacy!==void 0&&typeof r.state.model3Legacy!="boolean")throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0430 \u0432\u0435\u0440\u0441\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438");return r.state.model3Legacy??=r.state.variant==="3"&&!Object.keys({...r.sessions,...r.state.decals}).some(t=>/_3n(?:_[LR])?$/.test(t)),r}var le=r=>document.getElementById(r),Ot=1024,Se=null,ar="",Gi=!1,fr=!1,Te=null,ro=[],no=[],ai=!1,cb,Br=Promise.resolve(),$s=0,Or=new tl,fi=new il,Hi=null,Vt=new Map,zt=new Set,fp=new It.Raycaster,eb=new It.Vector2;fp.firstHitOnly=!0;var Ht=Xa[0],jn="#27272a",dr=Ht.size,Ya=Ht.opacity,Ka=Ht.hardness,to=.35,ul=!0,Za=!1;function qa(r,e,t=""){let i=document.createElement("button");return i.type="button",i.textContent=r,i.className=t,i.onclick=e,i}var Ai=document.createElement("section");Ai.id="paintEditor";Ai.hidden=!0;Ai.setAttribute("aria-label","\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0440\u0438\u0441\u0443\u043D\u043A\u0430 \u043F\u043E \u043C\u043E\u0434\u0435\u043B\u0438");Ai.innerHTML=`
 <header class="paint-header"><button id="paintDone" class="paint-primary">\u2713 \u0413\u043E\u0442\u043E\u0432\u043E</button><div><strong>\u0420\u0438\u0441\u0443\u043D\u043E\u043A \u043F\u043E \u0442\u0435\u043B\u0443</strong><small id="paintSaveState">\u041D\u0430 \u044D\u0442\u043E\u043C \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0435</small></div><div class="paint-history"><button id="paintUndo" aria-label="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435">\u21B6</button><button id="paintRedo" aria-label="\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435">\u21B7</button></div><button id="paintFiles">\u041F\u0440\u043E\u0435\u043A\u0442 \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442</button></header>
 <nav class="paint-tools" aria-label="\u041A\u0438\u0441\u0442\u0438"><div id="brushes"></div><button id="paintNavigate" title="\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u0434\u0430\u0436\u0435 \u043F\u0440\u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u0438 \u0442\u0435\u043B\u0430">\u2725<small>\u041E\u0431\u0437\u043E\u0440</small></button></nav>
 <aside class="paint-panel"><div class="paint-section"><h2 id="brushName">\u041B\u0430\u0439\u043D\u0435\u0440</h2><div class="paint-preview"><canvas id="brushPreview" width="240" height="55"></canvas></div><label>\u0426\u0432\u0435\u0442 <input id="paintColor" type="color" value="#27272a"></label><div id="paintPalette"></div><button id="paintEyedropper">\u233E \u041F\u0438\u043F\u0435\u0442\u043A\u0430 \u0440\u0438\u0441\u0443\u043D\u043A\u0430</button>
 <label>\u0420\u0430\u0437\u043C\u0435\u0440 <output id="sizeValue"></output><input id="paintSize" type="range" min="0.3" max="60" step="0.1" value="1.5"></label><label>\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C <output id="opacityValue"></output><input id="paintOpacity" type="range" min="1" max="100" value="100"></label><label>\u0416\u0451\u0441\u0442\u043A\u043E\u0441\u0442\u044C <output id="hardnessValue"></output><input id="paintHardness" type="range" min="0" max="100" value="100"></label><label>\u0421\u0433\u043B\u0430\u0436\u0438\u0432\u0430\u043D\u0438\u0435 <output id="smoothValue"></output><input id="paintSmooth" type="range" min="0" max="85" value="35"></label><label class="paint-check"><input id="paintPressure" type="checkbox" checked> \u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u043D\u0430\u0436\u0438\u043C \u0441\u0442\u0438\u043B\u0443\u0441\u0430</label></div>
 <div class="paint-section"><div class="paint-layer-head"><h2>\u0421\u043B\u043E\u0438</h2><button id="paintAddLayer" aria-label="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043B\u043E\u0439">\uFF0B</button></div><div id="paintLayers"></div><div id="paintPhotos"></div></div><p class="paint-help">\u041F\u0430\u043B\u0435\u0446 \u0438 \u0441\u0442\u0438\u043B\u0443\u0441 \u0440\u0438\u0441\u0443\u044E\u0442 \u043F\u043E \u0442\u0435\u043B\u0443. \u041E\u0434\u0438\u043D \u043F\u0430\u043B\u0435\u0446 \u043D\u0430 \u0444\u043E\u043D\u0435 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u0414\u0432\u0430 \u043F\u0430\u043B\u044C\u0446\u0430: \u043A\u0430\u0441\u0430\u043D\u0438\u0435 \u2014 \u043E\u0442\u043C\u0435\u043D\u0430, \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u2014 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u0449\u0438\u043F\u043E\u043A \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431. \u041F\u0440\u0438 \u0432\u0442\u043E\u0440\u043E\u043C \u043F\u0430\u043B\u044C\u0446\u0435 \u043D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0439 \u0448\u0442\u0440\u0438\u0445 \u0443\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F. \u041B\u0430\u0441\u0442\u0438\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0439.</p></aside>
 <p class="paint-bottom" id="paintHint">\u0420\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u0438\u043B\u0438 \u0441\u0442\u0438\u043B\u0443\u0441\u043E\u043C \u043F\u043E \u043C\u043E\u0434\u0435\u043B\u0438</p><div class="paint-cursor" id="paintCursor" hidden></div>
 <dialog id="paintFileDialog"><form method="dialog"><button class="paint-close" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u044D\u043A\u0441\u043F\u043E\u0440\u0442">\xD7</button><h2>\u041F\u0440\u043E\u0435\u043A\u0442 \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442</h2><p>\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043C\u043E\u0434\u0435\u043B\u0438, \u0444\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437\u044B, \u0441\u043B\u043E\u0438 \u0438 \u0448\u0442\u0440\u0438\u0445\u0438. \u0415\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.</p><button type="button" id="paintExportProject">\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E \u0441\u043B\u043E\u044F\u043C\u0438</button><button type="button" id="paintImportProject">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 \u0438\u0437 \u0444\u0430\u0439\u043B\u0430</button><button type="button" id="paintRestoreBackup">\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0434\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0430</button><hr><button type="button" id="paintPNG">PNG \u0440\u0438\u0441\u0443\u043D\u043A\u0430 \u2014 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u0438\u0434</button><button type="button" id="paintFlatPNG">PNG \u0443\u0447\u0430\u0441\u0442\u043A\u0430 \u2014 \u0431\u0435\u0437 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B</button><small>\u0414\u043B\u044F \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0443\u0447\u0430\u0441\u0442\u043E\u043A, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0440\u0438\u0441\u043E\u0432\u0430\u043B\u0438; \u0432\u0438\u0434\u0438\u043C\u044B\u0435 \u0441\u043B\u043E\u0438 \u0441\u043E\u0432\u043C\u0435\u0449\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043D\u0451\u043C. \u041D\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u043C PNG \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0438\u0441\u0443\u043D\u043E\u043A, \u0444\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435.</small><button type="button" id="paintShot">\u0421\u043D\u0438\u043C\u043E\u043A \u043C\u043E\u0434\u0435\u043B\u0438 \u0441 \u0442\u0430\u0442\u0443 \u0438 \u0440\u0438\u0441\u0443\u043D\u043A\u043E\u043C</button><p id="paintExportStatus" role="status"></p><small>\u041F\u0440\u0438\u043C\u0435\u0440\u043A\u0430 2.3.7 \xB7 <span id="appOffline">\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043E\u0444\u043B\u0430\u0439\u043D-\u0440\u0435\u0436\u0438\u043C\u0430\u2026</span></small></form></dialog><input type="file" id="paintProjectFile" accept=".json,.primerka,application/json" hidden>`;document.body.append(Ai);var ol=le("paintProjectFile"),ur=le("paintFileDialog");function lb(){Ai.hidden=!1,ur.showModal(),fr||Ai.classList.add("files-only")}ur.addEventListener("close",()=>{fr||(Ai.hidden=!0,Ai.classList.remove("files-only"))});ur.addEventListener("click",r=>{if(fr||r.target!==ur)return;let{left:e,right:t,top:i,bottom:n}=ur.getBoundingClientRect();(r.clientX<e||r.clientX>t||r.clientY<i||r.clientY>n)&&ur.close()});le("paintFiles").onclick=lb;le("btnProjects").onclick=lb;function ll(){let r=G.newId();return{version:1,active:r,layers:[{id:r,name:"\u0420\u0430\u0437\u043C\u0435\u0442\u043A\u0430 1",visible:!0,opacity:1,patches:[]}]}}function bp(){return Se?.layers.find(r=>r.id===Se.active)||Se?.layers[0]}function Gn(r=Se){return{...r,layers:r.layers.map(e=>({...e,patches:e.patches.slice()}))}}function _p(r){ro.push(r),no=[]}function eo(){pr();let r=Gn(),e;_p({undo(){e=Gn(),Se=Gn(r)},redo(){Se=Gn(e)}})}function Vi(){le("paintUndo").disabled=ai||!ro.length,le("paintRedo").disabled=ai||!no.length,Ai.querySelector(".paint-panel").inert=ai,le("paintDone").disabled=le("paintFiles").disabled=ai}function Nr(){!Se||Gi||(location.hostname==="127.0.0.1"&&(le("paintSaveState").dataset.points=String(Se.layers.reduce((r,e)=>r+e.patches.reduce((t,i)=>t+i.strokes.reduce((n,a)=>n+a.points.length,0),0),0)),le("paintSaveState").dataset.patches=String(Vt.size)),clearTimeout(cb),le("paintSaveState").textContent="\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u2026",(()=>{let r=structuredClone(Se),e=ar;zt.add(e),Br=Br.catch(()=>{}).then(()=>G.write("paint:"+e,r)).then(()=>G.write("paint:catalog",[...zt])).then(()=>{le("paintSaveState").textContent="\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043D\u0430 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0435"}).catch(()=>{le("paintSaveState").textContent="\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u2014 \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442",G.notify("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0438\u0441\u0443\u043D\u043E\u043A. \u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442, \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.")})})())}async function Ja(){if(clearTimeout(cb),Se&&!Gi){let r=structuredClone(Se),e=ar;zt.add(e),Br=Br.catch(()=>{}).then(()=>G.write("paint:"+e,r)).then(()=>G.write("paint:catalog",[...zt])),await Br}}function hb(){for(let r of Vt.values())G.root.remove(r.mesh),r.texture.dispose(),r.mesh.material.dispose(),r.mesh.geometry.dispose();Vt.clear()}function ME(r){let e=G.model.graph;e.unfold(r.seed,r.width*.82);let t=e.buildPatch(null,5e-4),i=new It.BufferGeometry;i.setAttribute("position",new It.BufferAttribute(t.position,3)),i.setAttribute("normal",new It.BufferAttribute(t.normal,3));let n=t.uv;for(let a=0;a<n.length;a++)n[a]=n[a]/r.width+.5;return i.setAttribute("uv",new It.BufferAttribute(n,2)),i.setIndex(new It.BufferAttribute(t.index,1)),i.computeBoundingSphere(),i.computeBoundsTree(),{geometry:i,source:t.source}}function ub(r,e){let{geometry:t,source:i}=ME(r),n=document.createElement("canvas");n.width=n.height=Ot,dp(n,r);let a=new It.CanvasTexture(n);a.colorSpace=It.SRGBColorSpace,a.anisotropy=Math.min(8,G.renderer.capabilities.getMaxAnisotropy());let s=new It.ShaderMaterial({uniforms:{map:{value:a},opacity:{value:e.opacity}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D map;uniform float opacity;varying vec2 vUv;void main(){if(vUv.x<0.||vUv.y<0.||vUv.x>1.||vUv.y>1.)discard;vec4 c=texture2D(map,vUv);gl_FragColor=vec4(c.rgb,c.a*opacity);
#include <colorspace_fragment>
}`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),o=new It.Mesh(t,s);o.renderOrder=3+Se.layers.indexOf(e),o.visible=e.visible,G.root.add(o);let c={record:r,owner:e,canvas:n,texture:a,mesh:o,source:i};return Vt.set(r.id,c),c}function Qa(){let r=new Set(Se.layers.flatMap(e=>e.patches.map(t=>t.id)));for(let[e,t]of Vt)r.has(e)||(G.root.remove(t.mesh),t.texture.dispose(),t.mesh.material.dispose(),t.mesh.geometry.dispose(),Vt.delete(e));for(let e of Se.layers)for(let t of e.patches){let i=Vt.get(t.id);i?(i.record=t,i.owner=e,dp(i.canvas,t),i.texture.needsUpdate=!0,i.mesh.visible=e.visible,i.mesh.material.uniforms.opacity.value=e.opacity,i.mesh.renderOrder=3+Se.layers.indexOf(e)):ub(t,e)}mn(),G.invalidate()}async function db(){let r=++$s;Gi=!0,hb(),ar=G.key(),Se=null,ro=[],no=[];try{let e=ar;await Br.catch(()=>{});let t=await G.read("paint:"+e),i=await G.read("paint:catalog")||[];if(r!==$s)return;Se=t?nl(t):ll();for(let n of i)zt.add(n);Qa()}catch(e){r===$s&&(Se=ll(),G.notify("\u0420\u0438\u0441\u0443\u043D\u043E\u043A \u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442: "+e.message))}finally{r===$s&&(Gi=!1,fr&&G.layout(!0),mn(),Vi())}}window.addEventListener("primerka:model-before",()=>{if(Se&&!Gi){let r=structuredClone(Se),e=ar;zt.add(e),Br=Br.catch(()=>{}).then(()=>G.write("paint:"+e,r)).then(()=>G.write("paint:catalog",[...zt]))}++$s,Gi=!0,hb()});window.addEventListener("primerka:model-ready",()=>{db()});G.model&&db();function pb(){if(!G.model||Gi){G.notify("\u0414\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043C\u043E\u0434\u0435\u043B\u0438");return}fr=!0,window.__paintMode=!0,G.cancelMotion(),G.deselect(),Ai.hidden=!1,Ai.classList.remove("files-only"),document.body.classList.add("painting"),G.layout(!0),mn(),Fr()}function vp(){pr(),Or.clear(),fi.clear(),Hi=null,fr=!1,window.__paintMode=!1,Ai.hidden=!0,document.body.classList.remove("painting"),G.controls.enabled=!0,G.layout(!1),le("paintCursor").hidden=!0,Ja().catch(()=>G.notify("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u2014 \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442"))}le("btnPaint").onclick=pb;le("paintDone").onclick=vp;for(let r of Xa){let e=qa("",()=>{Ht=r,dr=Ht.size,Ya=Ht.opacity,Ka=Ht.hardness,Za=!1,Fr()});e.dataset.brush=r.id,e.title=r.name,e.innerHTML=`<span>${r.icon}</span><small>${r.name}</small>`,le("brushes").append(e)}function Fr(){for(let n of le("brushes").children)n.classList.toggle("on",n.dataset.brush===Ht.id);le("brushName").textContent=Ht.name,le("paintSize").value=dr,le("sizeValue").textContent=dr.toFixed(1)+" \u043C\u043C",le("paintOpacity").value=Ya*100,le("opacityValue").textContent=Math.round(Ya*100)+"%",le("paintHardness").value=Ka*100,le("hardnessValue").textContent=Math.round(Ka*100)+"%",le("smoothValue").textContent=Math.round(to*100)+"%",le("paintNavigate").classList.toggle("on",Za);let r=le("brushPreview"),e=r.getContext("2d");e.clearRect(0,0,r.width,r.height);let t={brush:{...Ht,eraser:!1},color:jn,size:6,opacity:1,hardness:Ka,pressure:!0},i=al(t);for(let n=10;n<230;n+=2)rl(e,i,t,{x:n,y:28+Math.sin(n/35)*9,p:.15+.85*Math.sin((n-10)/220*Math.PI)},3e3);e.globalCompositeOperation="destination-in",e.fillStyle="rgba(0,0,0,"+Ya+")",e.fillRect(0,0,r.width,r.height),e.globalCompositeOperation="source-over"}for(let[r,e]of[["paintSize",t=>dr=+t],["paintOpacity",t=>Ya=+t/100],["paintHardness",t=>Ka=+t/100],["paintSmooth",t=>to=+t/100]])le(r).oninput=t=>{e(t.target.value),Fr()};le("paintColor").oninput=r=>{jn=r.target.value,Fr()};le("paintPressure").onchange=r=>ul=r.target.checked;for(let r of["#27272a","#6b7280","#a1a1aa","#a24a3a","#28558b","#497659","#8b5ba8","#ffffff"]){let e=qa("",()=>{jn=r,le("paintColor").value=jn,Fr()},"paint-swatch");e.style.background=r,e.title=r,le("paintPalette").append(e)}le("paintNavigate").onclick=()=>{Za=!Za,Fr()};var hl=!1;le("paintEyedropper").onclick=()=>{hl=!0,le("paintHint").textContent="\u041A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u0446\u0432\u0435\u0442\u0430 \u043D\u0430 \u0440\u0438\u0441\u0443\u043D\u043A\u0435"};function mn(){if(!Se)return;let r=le("paintLayers");r.replaceChildren();for(let t of[...Se.layers].reverse()){let i=document.createElement("div");i.className="paint-layer"+(Se.active===t.id?" active":"");let n=qa(t.visible?"\u25C9":"\u25CB",()=>{eo(),t.visible=!t.visible;for(let c of Vt.values())c.owner===t&&(c.mesh.visible=t.visible);mn(),Nr(),Vi()});n.title="\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043B\u043E\u044F";let a=qa(t.name,()=>{pr(),Se.active=t.id,mn(),Nr()});a.title="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043B\u043E\u0439; \u0434\u0432\u043E\u0439\u043D\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u2014 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",a.ondblclick=()=>{let c=prompt("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043B\u043E\u044F",t.name);c?.trim()&&(eo(),t.name=c.trim().slice(0,50),mn(),Nr())};let s=qa("\xD7",()=>{if(confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439 \xAB"+t.name+"\xBB? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.")){if(eo(),Se.layers.splice(Se.layers.indexOf(t),1),Se.layers.length)Se.active===t.id&&(Se.active=Se.layers.at(-1).id);else{let c=ll();Se.layers=c.layers,Se.active=c.active}Qa(),Nr(),Vi()}});s.title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439";let o=document.createElement("input");o.type="range",o.min=0,o.max=100,o.value=t.opacity*100,o.setAttribute("aria-label","\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u043B\u043E\u044F "+t.name),o.onchange=()=>{eo(),t.opacity=o.value/100;for(let c of Vt.values())c.owner===t&&(c.mesh.material.uniforms.opacity.value=t.opacity);Nr(),Vi()},i.append(n,a,s,o),r.append(i)}let e=le("paintPhotos");e.replaceChildren();for(let t of G.decals){t.mesh.visible=t.rec.visible!==!1;let i=document.createElement("div");i.className="paint-photo";let n=qa(t.mesh.visible?"\u25C9":"\u25CB",()=>{t.rec.visible=t.rec.visible===!1,t.mesh.visible=t.rec.visible,G.save(),G.invalidate(),mn()});n.title="\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0444\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437\u0430";let a=document.createElement("img");a.src=t.thumb;let s=document.createElement("span");s.textContent="\u0424\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437 "+t.rec.n,i.append(n,a,s),e.append(i)}G.decals.length||(e.textContent="\u0424\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E \u0432\u0445\u043E\u0434\u0430 \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440.")}le("paintAddLayer").onclick=()=>{if(Se.layers.length>=8){G.notify("\u041C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u043E 8 \u0441\u043B\u043E\u0451\u0432");return}eo();let r=G.newId();Se.layers.push({id:r,name:"\u0420\u0430\u0437\u043C\u0435\u0442\u043A\u0430 "+(Se.layers.length+1),visible:!0,opacity:1,patches:[]}),Se.active=r,mn(),Nr(),Vi()};async function fb(r){if(ai||Gi)return;pr();let e=r?no:ro,t=r?ro:no,i=e.at(-1);if(i){ai=!0,Vi();try{await(r?i.redo():i.undo()),e.pop(),t.push(i),Qa(),i.persisted||Nr()}catch{G.notify("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}finally{ai=!1,Vi()}}}le("paintUndo").onclick=()=>{fb(!1)};le("paintRedo").onclick=()=>{fb(!0)};var wi=document.createElement("dialog");wi.id="clearViewerDialog";wi.setAttribute("aria-labelledby","clearViewerTitle");wi.innerHTML=`
 <h2 id="clearViewerTitle"></h2>
 <div id="clearViewerOptions">
  <button type="button" data-clear="drawing">\u0420\u0438\u0441\u0443\u043D\u043E\u043A</button>
  <button type="button" data-clear="sketches">\u042D\u0441\u043A\u0438\u0437\u044B</button>
  <button type="button" data-clear="all">\u0412\u0441\u0451</button>
 </div>
 <p id="clearViewerError" role="alert" hidden></p>
 <div class="clear-viewer-actions">
  <button type="button" id="clearViewerCancel">\u041E\u0442\u043C\u0435\u043D\u0430</button>
  <button type="button" id="clearViewerConfirm" hidden>\u0423\u0431\u0440\u0430\u0442\u044C</button>
 </div>`;document.body.append(wi);var mb=le("clearViewerTitle"),mp=le("clearViewerOptions"),io=le("clearViewerConfirm"),cl=le("clearViewerError"),SE={drawing:"\u0440\u0438\u0441\u0443\u043D\u043E\u043A",sketches:"\u0432\u0441\u0435 \u044D\u0441\u043A\u0438\u0437\u044B",all:"\u0440\u0438\u0441\u0443\u043D\u043E\u043A \u0438 \u0432\u0441\u0435 \u044D\u0441\u043A\u0438\u0437\u044B"},gp;le("btnClear").onclick=()=>{Gi||ai||!Se||(mb.textContent="\u0427\u0442\u043E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0431\u0440\u0430\u0442\u044C?",mp.hidden=!1,io.hidden=!0,cl.hidden=!0,wi.showModal())};mp.addEventListener("click",r=>{let e=r.target.closest("[data-clear]")?.dataset.clear;e&&(gp=e,mb.textContent="\u0423\u0431\u0440\u0430\u0442\u044C "+SE[e]+" \u0441 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u043C\u043E\u0434\u0435\u043B\u0438?",mp.hidden=!0,io.hidden=!1,le("clearViewerCancel").focus())});le("clearViewerCancel").onclick=()=>{ai||wi.close()};wi.addEventListener("cancel",r=>{ai&&r.preventDefault()});wi.addEventListener("click",r=>{if(ai||r.target!==wi)return;let{left:e,right:t,top:i,bottom:n}=wi.getBoundingClientRect();(r.clientX<e||r.clientX>t||r.clientY<i||r.clientY>n)&&wi.close()});function tb(r,e){return async()=>{await Br;let t=r?[["paint:"+ar,r],["paint:catalog",[...new Set([...zt,ar])]]]:[];e?await G.replaceDecals(e(G.state.decals[ar]||[]),t):await G.writeEntries(t),r&&(Se=Gn(r),zt.add(ar))}}io.onclick=async()=>{if(ai||Gi)return;pr();let r=Se.layers.some(l=>l.patches.some(h=>h.strokes.length)),e=!!G.state.decals[ar]?.length,t=gp!=="sketches"&&r?Gn():null,i=gp!=="drawing"&&e?structuredClone(G.state.decals[ar]):null;if(!t&&!i){wi.close(),G.notify("\u041D\u0430 \u044D\u0442\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u043D\u0435\u0447\u0435\u0433\u043E \u0443\u0431\u0440\u0430\u0442\u044C");return}let n=t?Gn():null;if(n){for(let l of n.layers)l.patches=[];delete n.lastPatch}let a=new Set(i?.map(l=>l.id)),s=i?l=>[...structuredClone(i.filter(h=>!l.some(u=>u.id===h.id))),...l]:null,o=i?l=>l.filter(h=>!a.has(h.id)):null,c={undo:tb(t,s),redo:tb(n,o),persisted:!0};ai=!0,io.disabled=le("clearViewerCancel").disabled=!0,Vi(),cl.hidden=!0;try{await c.redo(),_p(c),Qa(),wi.close(),G.notify("\u0423\u0431\u0440\u0430\u043D\u043E. \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F.")}catch{cl.textContent="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0431\u0440\u0430\u0442\u044C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",cl.hidden=!1}finally{ai=!1,io.disabled=le("clearViewerCancel").disabled=!1,Vi()}};function Vn(r,e,t,i){eb.set(e/innerWidth*2-1,-t/innerHeight*2+1),fp.setFromCamera(eb,G.camera),G.root.updateMatrixWorld(!0);let n=fp.intersectObject(r.mesh,!1)[0];return!n||Math.abs(n.distance-i.distance)>.006||!n.uv?null:{x:n.uv.x*Ot,y:(1-n.uv.y)*Ot}}function EE(r,e){let t=bp();if(!t||!t.visible)return G.notify("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0438\u043C\u044B\u0439 \u0441\u043B\u043E\u0439"),null;for(let a of[...Vt.values()].reverse()){if(a.owner!==t)continue;let s=Vn(a,r.clientX,r.clientY,e),o=Math.max(80,dr/1e3/a.record.width*Ot);if(s&&s.x>o&&s.y>o&&s.x<Ot-o&&s.y<Ot-o)return a}if([...Vt.values()].length>=24)return G.notify("\u042D\u0442\u043E\u0442 \u0432\u0438\u0434 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 24 \u0443\u0447\u0430\u0441\u0442\u043A\u0430. \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0442\u0435\u043B\u0430."),null;let i={id:G.newId(),seed:G.seed(e),width:Math.max(.16,dr/1e3*4),strokes:[]};t.patches.push(i);let n=ub(i,t);return G.invalidate(),n}function TE(r){let e=Te.records.get(r.record.id);if(!e){e={brush:{...Ht},color:jn,size:dr,opacity:Ya,hardness:Ka,pressure:ul,points:[],localCuts:!0},Te.patchLengths.has(r.record)||Te.patchLengths.set(r.record,r.record.strokes.length),r.record.strokes.push(e),Te.records.set(r.record.id,e);let t=document.createElement("canvas"),i=document.createElement("canvas");t.width=t.height=i.width=i.height=Ot,t.getContext("2d").drawImage(r.canvas,0,0);let n={...e,opacity:1,brush:{...e.brush,eraser:!1}};Te.stamps.set(e,{stamp:al(n),paint:n,base:t,scratch:i,runtime:r,dirty:!1,stroke:e,startRemaining:-1})}return e}function sl(r,e,t,i=!0,n=!1){let a=TE(r),s=a.points.at(-1),o={...e,p:t},c=Ot/r.record.width,l=s?Math.hypot(o.x-s.x,o.y-s.y):1/0,h=ul&&Ht.pressureSize?.12+.88*Math.min(t,s?.p??t):1,u=dr/1e3*c*h*Ht.spacing;if(i&&l<u*.65&&!n&&!Te.spraying)return a;let d=s&&i&&l<Ot*.5?Jg(s,o,u):[o],p=Te.stamps.get(a),b=p.scratch.getContext("2d");for(let g of d){if(p.startRemaining>=0){let f=a.points.at(-1);p.startRemaining-=Math.hypot(g.x-f.x,g.y-f.y)}a.points.push(g),hp(b,p.stamp,p.paint,g,c,p.startRemaining>=0?a.startCut:null)}return p.dirty=!0,Te.frame||(Te.frame=requestAnimationFrame(Mp)),a}function ib(r,e,t){if(!t)return;r[e]=t;let i=Te.stamps.get(r);i.startRemaining=up(i.scratch.getContext("2d"),i.stamp,i.paint,r,Ot/i.runtime.record.width),i.dirty=!0}function rb(r,e,t){let i=e.x-r.x,n=e.y-r.y,a=Math.hypot(i,n);return a>.01?[e.x,e.y,t*i/a,t*n/a]:void 0}function wE(r,e){let t=Kg(r,ul);if(Ht.eraser){for(let s of Vt.values()){if(s.owner!==bp())continue;let o=Vn(s,r.clientX,r.clientY,e);o&&o.x>=0&&o.x<=Ot&&o.y>=0&&o.y<=Ot&&sl(s,o,t)}return}let i=Te.current,n=i&&Vn(i,r.clientX,r.clientY,e),a=i?Math.max(50,dr/1e3/i.record.width*Ot*.6):0;if(!n||n.x<a||n.y<a||n.x>Ot-a||n.y>Ot-a){let s=EE(r,e),o=s&&Vn(s,r.clientX,r.clientY,e);o&&(i=s,n=o),Te.current=i}if(i&&n&&n.x>=0&&n.x<=Ot&&n.y>=0&&n.y<=Ot){let s=Te.lastSample,o=s?.runtime===i;if(s&&!o){let c=Vn(i,s.x,s.y,s.base),l=Vn(s.runtime,r.clientX,r.clientY,e),h=c&&l?sl(s.runtime,l,t,!0,!0):Te.records.get(s.runtime.record.id);if(c&&l&&ib(h,"endCut",rb(s.uv,l,-1)),Te.frame&&cancelAnimationFrame(Te.frame),Mp(),Te.records.delete(s.runtime.record.id),Te.stamps.delete(h),c&&l){let u=sl(i,c,s.p,!1);ib(u,"startCut",rb(c,n,1)),o=!0}}sl(i,n,t,o),Se.lastPatch=i.record.id,Te.lastSample={runtime:i,x:r.clientX,y:r.clientY,base:e,p:t,uv:n}}else Te.lastSample=null}function nb(r){let e=G.hit(r.clientX,r.clientY);if(e){for(let t of[...Vt.values()].reverse()){if(!t.owner.visible)continue;let i=Vn(t,r.clientX,r.clientY,e);if(!i||i.x<0||i.y<0||i.x>=Ot||i.y>=Ot)continue;let n=t.canvas.getContext("2d").getImageData(i.x,i.y,1,1).data;if(n[3]){jn="#"+[...n.slice(0,3)].map(a=>a.toString(16).padStart(2,"0")).join(""),le("paintColor").value=jn,Fr();break}}hl=!1,le("paintHint").textContent="\u0420\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u0438\u043B\u0438 \u0441\u0442\u0438\u043B\u0443\u0441\u043E\u043C \u043F\u043E \u043C\u043E\u0434\u0435\u043B\u0438"}}function kr(r){r.preventDefault(),r.stopImmediatePropagation()}function gb(r){try{G.canvas.setPointerCapture(r)}catch{}}function xp(r){try{G.canvas.releasePointerCapture(r)}catch{}}function ab(r){if(Gi||ai||!Se)return!1;let e=bp();return e?.visible?(G.cancelMotion(),G.controls.enableDamping=!1,G.controls.update(),G.controls.enabled=!1,Te={pointer:r.pointerId,ownerId:e.id,beforePatches:e.patches.slice(),beforeLast:Se.lastPatch,patchLengths:new Map,current:null,records:new Map,stamps:new Map},gb(r.pointerId),ao(r),Ht.id==="airbrush"&&(Te.hold=setInterval(()=>{Te?.event&&(Te.spraying=!0,ao(Te.event),Te.spraying=!1)},40)),!0):(G.notify("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0438\u043C\u044B\u0439 \u0441\u043B\u043E\u0439"),!1)}function yp({ownerId:r,beforePatches:e,beforeLast:t,patchLengths:i}){for(let[n,a]of i)n.strokes.length=a;Se.layers.find(n=>n.id===r).patches=e.slice(),Se.lastPatch=t}function AE({ownerId:r,beforePatches:e,beforeLast:t,patchLengths:i}){let n=Se.layers.find(o=>o.id===r).patches.slice(),a=Se.lastPatch,s=[...i].map(([o,c])=>[o,o.strokes.slice(c)]);_p({undo(){yp({ownerId:r,beforePatches:e,beforeLast:t,patchLengths:i})},redo(){for(let[o,c]of s)for(let l of c)o.strokes.push(l);Se.layers.find(o=>o.id===r).patches=n.slice(),Se.lastPatch=a}})}function RE(){if(!Te)return;let r=Te;clearInterval(r.hold),r.frame&&cancelAnimationFrame(r.frame),xp(r.pointer),Or.end(r.pointer),Te=null,yp(r),Qa(),Nr(),Vi()}function sb(){G.cancelMotion(),G.controls.enableDamping=!1,G.controls.update(),G.controls.enabled=!1,le("paintCursor").hidden=!0}function dl(){G.controls.enabled=!0,G.controls.enableDamping=!0}function CE(r,e){let t=G.controls,i=G.camera,n=i.position.clone().sub(t.target),a=n.length(),s=Math.atan2(n.x,n.z)-r*Math.PI*2/innerHeight*t.rotateSpeed,o=Math.acos(Hn(n.y/a,-1,1))-e*Math.PI*2/innerHeight*t.rotateSpeed;o=Hn(o,Math.max(.001,t.minPolarAngle),Math.min(Math.PI-.001,t.maxPolarAngle)),s=Hn(s,t.minAzimuthAngle,t.maxAzimuthAngle),n.set(a*Math.sin(o)*Math.sin(s),a*Math.cos(o),a*Math.sin(o)*Math.cos(s)),i.position.copy(t.target).add(n),t.update(),G.invalidate()}function PE({dx:r,dy:e,scale:t}){let i=G.controls,n=G.camera,a=n.position.distanceTo(i.target),s=2*a*Math.tan(n.fov*Math.PI/360)/innerHeight,o=n.matrixWorld.elements,c=new It.Vector3(o[0],o[1],o[2]).multiplyScalar(-r*s).addScaledVector(new It.Vector3(o[4],o[5],o[6]),e*s);n.position.add(c),i.target.add(c);let l=n.position.clone().sub(i.target),h=Hn(a*t,i.minDistance,i.maxDistance);n.position.copy(i.target).add(l.multiplyScalar(h/a)),i.update(),G.invalidate()}function ob(r){let e=r.getCoalescedEvents?.();return e?.length?e:[r]}window.addEventListener("pointerdown",r=>{if(!fr||r.target!==G.canvas)return;if(r.pointerType==="touch"){kr(r),gb(r.pointerId);let t=fi.down(r.pointerId,r.clientX,r.clientY,performance.now());if(t.type==="multi-start"){RE(),Or.clear(),Hi="multi",sb();return}if(t.type!=="single")return;if(Te){Hi="ignore";return}if(Za||!G.hit(r.clientX,r.clientY)){Hi="rotate",sb();return}if(hl){nb(r),Hi="ignore";return}Hi=ab(r)?"draw":"ignore";return}if(fi.multi||fi.points.size&&Hi!=="ignore"){kr(r);return}let e=Or.begin(r.pointerId,{onModel:!!G.hit(r.clientX,r.clientY),navigate:Za,button:r.button});if(e==="ignore"){kr(r);return}if(e==="navigate"){G.cancelMotion();return}if(kr(r),hl){nb(r),Or.end(r.pointerId);return}ab(r)||Or.end(r.pointerId)},{capture:!0,passive:!1});window.addEventListener("pointermove",r=>{if(!(!fr||r.target!==G.canvas&&!Te&&!fi.points.has(r.pointerId))){if(r.pointerType==="touch"&&fi.points.has(r.pointerId)){kr(r);let e=fi.move(r.pointerId,r.clientX,r.clientY);if(e.type==="transform")PE(e);else if(e.type==="single"){if(Hi==="rotate")CE(e.dx,e.dy);else if(Hi==="draw"&&Te?.pointer===r.pointerId)for(let t of ob(r))ao(t)}return}if(fi.multi){kr(r);return}if(!Te){if(r.pointerType!=="touch"){le("paintCursor").hidden=!1,le("paintCursor").style.left=r.clientX+"px",le("paintCursor").style.top=r.clientY+"px";let e=G.hit(r.clientX,r.clientY),t=e?dr/1e3*innerHeight/(2*Math.tan(G.camera.fov*Math.PI/360)*e.distance):8;le("paintCursor").style.width=le("paintCursor").style.height=Hn(t,4,220)+"px"}return}if(r.pointerId===Te.pointer){kr(r);for(let e of ob(r))ao(e)}}},{capture:!0,passive:!1});function Mp(){if(Te){Te.frame=0;for(let r of Te.stamps.values())r.dirty&&($g(r.runtime.canvas,r.base,r.scratch,r.stroke),r.runtime.texture.needsUpdate=!0,r.dirty=!1);G.invalidate()}}function ao(r,e=!1){let t=Te;if(t.blocked)return;let i=e?t.filtered:t.event,n=i?Math.max(1,Math.ceil(Math.hypot(r.clientX-i.clientX,r.clientY-i.clientY)/3)):1,a=2*Math.tan(G.camera.fov*Math.PI/360)/innerHeight,s=(o,c,l)=>Zg(o?.hit,l,o?Math.hypot(c.clientX-o.clientX,c.clientY-o.clientY):0,a);for(let o=1;o<=n;o++){let c=o/n,l={clientX:i?i.clientX+(r.clientX-i.clientX)*c:r.clientX,clientY:i?i.clientY+(r.clientY-i.clientY)*c:r.clientY,pressure:i?i.pressure+(r.pressure-i.pressure)*c:r.pressure,pointerType:r.pointerType};if(l.hit=G.hit(l.clientX,l.clientY),!s(e?t.filtered:t.raw,l,l.hit)){t.blocked=!0;return}e||(t.raw=l);let h=t.filtered,u=l;if(h&&!e&&to){let d={...l,clientX:l.clientX+(h.clientX-l.clientX)*to,clientY:l.clientY+(h.clientY-l.clientY)*to};d.hit=G.hit(d.clientX,d.clientY),s(h,d,d.hit)&&(u=d)}if(!s(h,u,u.hit)){t.blocked=!0;return}t.filtered=u,wE(u,u.hit)}t.event={clientX:r.clientX,clientY:r.clientY,pointerType:r.pointerType,pressure:r.pressure}}function pr(){Te&&(Or.end(Te.pointer),clearInterval(Te.hold),Te.event&&!Ht.eraser&&ao(Te.event,!0),Te.frame&&cancelAnimationFrame(Te.frame),Mp(),xp(Te.pointer),Te.patchLengths.size?AE(Te):(yp(Te),Qa()),Te=null,fi.points.size||dl(),Nr(),Vi())}function bb(r,e=!1){if(r.pointerType==="touch"&&fi.points.has(r.pointerId)){kr(r);let t=fi.up(r.pointerId,performance.now(),e);xp(r.pointerId),Te?.pointer===r.pointerId&&pr(),t.type==="undo"&&le("paintUndo").click(),fi.points.size||(Hi=null,dl());return}Or.end(r.pointerId),Te?.pointer===r.pointerId&&(kr(r),pr())}window.addEventListener("pointerup",r=>bb(r),{capture:!0,passive:!1});window.addEventListener("pointercancel",r=>bb(r,!0),{capture:!0,passive:!1});window.addEventListener("blur",()=>{Or.clear(),fi.clear(),Hi=null,pr(),dl()});G.canvas.addEventListener("pointerleave",()=>le("paintCursor").hidden=!0);window.addEventListener("keydown",r=>{if(ur.open){r.key==="Escape"&&(r.preventDefault(),ur.close());return}if(!(!fr||/INPUT|TEXTAREA/.test(r.target.tagName))){if(r.key==="Escape"){vp();return}(r.ctrlKey||r.metaKey)&&r.key.toLowerCase()==="z"&&(r.preventDefault(),(r.shiftKey?le("paintRedo"):le("paintUndo")).click()),r.key.toLowerCase()==="e"&&(Ht=Xa.find(e=>e.eraser),Fr())}});window.addEventListener("resize",()=>{fr&&G.layout(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(fi.clear(),Hi=null,pr(),dl(),Ja().catch(()=>{}))});async function Sp(r,e){if(await lo(r,e))return;let t=URL.createObjectURL(r),i=document.createElement("a");i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e4)}var Ep=()=>new Date().toISOString().slice(0,19).replaceAll(":","-");async function IE(){pr(),await Ja();let r=structuredClone(G.state),e={},t={};for(let n of zt){let a=await G.read("paint:"+n);a&&(t[n]=a)}for(let n of Object.values(r.decals))for(let a of n){if(e[a.imageId])continue;let s=await G.image(a.imageId);if(!s)throw Error("\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0444\u043E\u0442\u043E\u044D\u0441\u043A\u0438\u0437. \u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D.");e[a.imageId]=s.toDataURL("image/png")}let i={format:"primerka-project",version:2,savedAt:new Date().toISOString(),state:r,sessions:t,images:e};await Sp(new Blob([JSON.stringify(i)],{type:"application/json"}),"primerka-"+Ep()+".primerka.json")}async function $a(r){try{le("paintExportStatus").textContent="\u0413\u043E\u0442\u043E\u0432\u043B\u044E \u0444\u0430\u0439\u043B\u2026",await r(),le("paintExportStatus").textContent="\u0424\u0430\u0439\u043B \u0433\u043E\u0442\u043E\u0432. \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438\xBB."}catch(e){le("paintExportStatus").textContent=e.message,G.notify(e.message)}}le("paintExportProject").onclick=()=>$a(IE);le("paintImportProject").onclick=()=>ol.click();ol.onchange=async()=>{let r=ol.files?.[0];ol.value="",r&&await $a(async()=>{if(r.size>80*1024*1024)throw Error("\u041F\u0440\u043E\u0435\u043A\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 80 \u041C\u0411");let e=pp(JSON.parse(await r.text())),t={};for(let[i,n]of Object.entries(e.images)){let a=await(await fetch(n)).blob();await createImageBitmap(a).then(s=>{if(s.width>8192||s.height>8192)throw Error("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435");s.close()}),t[i]=a}if(confirm("\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0435\u043A\u0442? \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438; \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430 \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0435\u0451 \u043A\u0430\u043A \u043F\u0440\u043E\u0435\u043A\u0442.")){await Ja(),await _b();for(let[i,n]of Object.entries(t))await G.write("img:"+i,n);G.clearImages();for(let i of zt)e.sessions[i]||await G.write("paint:"+i,ll());for(let[i,n]of Object.entries(e.sessions))await G.write("paint:"+i,n);zt.clear();for(let i of Object.keys(e.sessions))zt.add(i);await G.write("paint:catalog",[...zt]),Se=null;for(let i of["variant","sex","part","side","tone","bg","counter","decals","panelHidden","model3Legacy"])i in e.state&&(G.state[i]=e.state[i]);await G.write("state",structuredClone(G.state)),G.save(),await G.load(),ur.close(),G.notify("\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0442\u043A\u0440\u044B\u0442")}})};async function _b(){let r={};for(let e of Object.values(G.state.decals))for(let t of e){let i=await G.read("img:"+t.imageId);i&&(r[t.imageId]=i)}await G.write("paint:backup",{state:structuredClone(G.state),sessions:Object.fromEntries(await Promise.all([...zt].map(async e=>[e,await G.read("paint:"+e)]))),images:r})}le("paintRestoreBackup").onclick=()=>$a(async()=>{let r=await G.read("paint:backup");if(!r)throw Error("\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 \u0434\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442");if(confirm("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0434\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0430? \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0437\u0430\u0439\u043C\u0451\u0442 \u0435\u0451 \u043C\u0435\u0441\u0442\u043E \u0432 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438.")){await Ja(),await _b();for(let[e,t]of Object.entries(r.images||{}))await G.write("img:"+e,t);G.clearImages();for(let[e,t]of Object.entries(r.sessions))await G.write("paint:"+e,t);zt.clear();for(let e of Object.keys(r.sessions))zt.add(e);await G.write("paint:catalog",[...zt]),Se=null,Object.assign(G.state,r.state),await G.write("state",structuredClone(G.state)),await G.load(),ur.close()}});le("paintShot").onclick=()=>$a(()=>G.screenshot());async function LE(){if(!Se)throw Error("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u0438");let r=[];G.scene.traverse(e=>{e.isMesh&&(r.push([e,e.visible]),e.visible=[...Vt.values()].some(t=>t.mesh===e&&t.owner.visible))});try{G.renderer.render(G.scene,G.camera);let e=await new Promise(t=>G.canvas.toBlob(t,"image/png"));await Sp(e,"primerka-drawing-"+Ep()+".png")}finally{for(let[e,t]of r)e.visible=t;G.invalidate()}}le("paintPNG").onclick=()=>$a(LE);async function DE(){let r=Vt.get(Se?.lastPatch)||[...Vt.values()].at(-1);if(!r)throw Error("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u043E\u043A");let e=G.model.graph;e.unfold(r.record.seed,r.record.width*.82);let t=e.stamp,i=e.U,n=[],a=new It.Scene,s=new It.PerspectiveCamera(90,1,.1,5);s.position.z=1,s.lookAt(0,0,0);for(let c of Vt.values()){if(!c.owner.visible)continue;let l=c.source,h=c.mesh.geometry,u=h.index.array,d=[];for(let f=0;f<u.length;f+=3)[u[f],u[f+1],u[f+2]].every(m=>e.done[l[m]]===t)&&d.push(u[f],u[f+1],u[f+2]);let p=new Float32Array(l.length*3);for(let f=0;f<l.length;f++)p[f*3]=i[l[f]*2]/r.record.width*2,p[f*3+1]=i[l[f]*2+1]/r.record.width*2;let b=new It.BufferGeometry;b.setAttribute("position",new It.BufferAttribute(p,3)),b.setAttribute("uv",h.attributes.uv.clone()),b.setIndex(d);let g=new It.Mesh(b,c.mesh.material);g.renderOrder=c.mesh.renderOrder,g.frustumCulled=!1,a.add(g),n.push(g)}let o=new It.WebGLRenderer({alpha:!0,antialias:!0});try{o.setSize(2048,2048),o.render(a,s);let c=await new Promise(l=>o.domElement.toBlob(l,"image/png"));await Sp(c,"primerka-flat-"+Math.round(r.record.width*100)+"cm-"+Ep()+".png")}finally{for(let c of n)c.geometry.dispose();o.dispose(),o.forceContextLoss()}}le("paintFlatPNG").onclick=()=>$a(DE);Fr();Vi();window.__paint={enter:pb,leave:vp,get session(){return Se},get patches(){return Vt},get brush(){return Ht},get loading(){return Gi},validateProject:pp,flush:Ja};var mr=document.createElement("button");mr.type="button";mr.className="pill-btn";mr.style.cssText="margin-top:8px;width:100%;font-size:11px";mr.hidden=!0;document.getElementById("segVariant").after(mr);var vb=0;async function Tp(){let r=++vb,e=await G.read("paint:catalog")||[],t=Object.entries(G.state.decals).some(([n,a])=>/_3(?:_[LR])?$/.test(n)&&a.length),i=!1;for(let n of e.filter(a=>/_3(?:_[LR])?$/.test(a)))if((await G.read("paint:"+n))?.layers?.some(s=>s.patches?.some(o=>o.strokes?.length))){i=!0;break}r===vb&&(mr.hidden=G.state.variant!=="3"||!G.state.model3Legacy&&!i&&!t,mr.textContent=G.state.model3Legacy?"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043D\u043E\u0432\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u044D\u0441\u043A\u0438\u0437\u044B \u043D\u0430 \u043F\u0440\u0435\u0436\u043D\u0435\u0439 \u043C\u043E\u0434\u0435\u043B\u0438")}mr.onclick=async()=>{mr.disabled=!0;try{await window.__paint.flush(),G.state.model3Legacy=!G.state.model3Legacy,await G.write("state",structuredClone(G.state)),await G.load()}catch{G.notify("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C. \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.")}finally{mr.disabled=!1,Tp()}};window.addEventListener("primerka:model-ready",()=>{Tp().catch(()=>{})});G.model&&Tp().catch(()=>{});var pl=document.getElementById("btnPanel"),yb=document.getElementById("modelProperties"),fl=document.getElementById("inspector"),UE=document.getElementById("btnInsp"),Mb=document.getElementById("dismissViewerMenu"),xb=document.querySelector(".dock");function Sb(){let r=!document.body.classList.contains("panel-hidden"),e=fl.classList.contains("open"),t=r?"\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u043C\u043E\u0434\u0435\u043B\u0438":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u043C\u043E\u0434\u0435\u043B\u0438";pl.setAttribute("aria-expanded",String(r)),pl.setAttribute("aria-label",t),pl.title=t,yb.inert=!r,UE.setAttribute("aria-expanded",String(e)),fl.inert=!e,Mb.hidden=document.body.classList.contains("painting")||!r&&!e}Mb.addEventListener("click",()=>{yb.inert||pl.click(),fl.inert||document.getElementById("btnDeselect").click()});var NE=new MutationObserver(Sb);for(let r of[document.body,fl])NE.observe(r,{attributes:!0,attributeFilter:["class"]});new ResizeObserver(()=>{let r=xb.offsetHeight;r&&document.documentElement.style.setProperty("--viewer-dock-height",r+"px")}).observe(xb);Sb();var OE=document.getElementById("btnSettings"),Tb="primerka:tour-seen",es=[{title:"\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u041F\u0440\u0438\u043C\u0435\u0440\u043A\u0443",text:"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043A\u0430\u043A \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437 \u043A \u0442\u0435\u043B\u0443, \u0434\u043E\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438 \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."},{title:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C",text:"\u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0437\u0443, \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0442\u0435\u043B\u043E \u0446\u0435\u043B\u0438\u043A\u043E\u043C, \u0440\u0443\u043A\u0443 \u0441 \u043F\u043B\u0435\u0447\u043E\u043C \u0438\u043B\u0438 \u043D\u043E\u0433\u0443 \u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0443.",target:"btnPanel"},{title:"\u041F\u0440\u0438\u043C\u0435\u0440\u044C\u0442\u0435 \u044D\u0441\u043A\u0438\u0437",text:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043E \u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u0438. \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u044D\u0441\u043A\u0438\u0437\u044B \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432 \u043D\u0438\u0436\u043D\u0435\u0439 \u043B\u0435\u043D\u0442\u0435.",target:"btnAdd"},{title:"\u0420\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u043E \u043C\u043E\u0434\u0435\u043B\u0438",text:"\u0412 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435 \u0435\u0441\u0442\u044C \u043A\u0438\u0441\u0442\u0438 \u0438 \u0441\u043B\u043E\u0438. \u041F\u0430\u043B\u0435\u0446 \u0438\u043B\u0438 \u0441\u0442\u0438\u043B\u0443\u0441 \u0440\u0438\u0441\u0443\u0435\u0442 \u043F\u043E \u043C\u043E\u0434\u0435\u043B\u0438, \u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u0441 \u0444\u043E\u043D\u0430 \u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0451. \u0429\u0438\u043F\u043E\u043A \u0434\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438 \u043C\u0435\u043D\u044F\u0435\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431.",target:"btnPaint"},{title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443",text:"\u0412 \xAB\u041F\u0440\u043E\u0435\u043A\u0442\u0430\u0445\xBB \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0444\u0430\u0439\u043B, \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0435\u0433\u043E \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0438\u043B\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C PNG \u0438 \u0441\u043D\u0438\u043C\u043E\u043A.",target:"btnProjects"},{title:"\u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043A \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C",text:"\u042D\u0442\u043E\u0442 \u043E\u0431\u0437\u043E\u0440 \u043C\u043E\u0436\u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u043D\u043E\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.",target:"btnSettings"}],gn=document.createElement("dialog");gn.className="primerka-settings";gn.setAttribute("aria-labelledby","primerkaSettingsTitle");gn.innerHTML=`
 <form method="dialog">
  <div class="guide-label"></div>
  <h2 id="primerkaSettingsTitle">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</h2>
  <button class="guide-restart" type="button"><span><strong>\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</strong><small>\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043E\u0431\u0437\u043E\u0440 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432</small></span><span aria-hidden="true">\u2197</span></button>
  <button class="guide-secondary">\u0413\u043E\u0442\u043E\u0432\u043E</button>
 </form>`;gn.querySelector(".guide-label").textContent=document.title;var vt=document.createElement("dialog");vt.className="primerka-tour";vt.setAttribute("aria-labelledby","primerkaTourTitle");vt.setAttribute("aria-describedby","primerkaTourText");vt.innerHTML=`
 <div class="guide-spot" aria-hidden="true" hidden></div>
 <section class="guide-card">
  <div class="guide-art" aria-hidden="true">
   <svg viewBox="0 0 360 120" fill="none">
    <path d="M-20 104C48 91 53 20 125 25s70 89 139 57 62-67 119-67" stroke="#ddad91" stroke-width="1.5" stroke-dasharray="4 6"/>
    <ellipse cx="180" cy="60" rx="88" ry="42" transform="rotate(-16 180 60)" stroke="#f4ceaa" opacity=".55"/>
    <path d="M180 21c5 23 16 34 39 39-23 5-34 16-39 39-5-23-16-34-39-39 23-5 34-16 39-39Z" fill="#f8dfc7"/>
    <path d="M244 28v18m-9-9h18M116 78v14m-7-7h14" stroke="#f8dfc7" stroke-width="2" stroke-linecap="round"/>
   </svg>
  </div>
  <div class="guide-content">
   <div class="guide-label" id="primerkaTourStep"></div>
   <h2 id="primerkaTourTitle" tabindex="-1"></h2>
   <p id="primerkaTourText"></p>
   <div class="guide-progress" aria-hidden="true"></div>
   <div class="guide-actions">
    <button type="button" class="guide-secondary" data-guide="skip">\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C</button>
    <button type="button" class="guide-secondary" data-guide="back">\u041D\u0430\u0437\u0430\u0434</button>
    <button type="button" class="guide-primary" data-guide="next"></button>
   </div>
  </div>
 </section>`;document.body.append(gn,vt);var Eb=vt.querySelector("h2"),so=vt.querySelector(".guide-spot"),wb=vt.querySelector("[data-guide=next]"),Ab=vt.querySelector("[data-guide=back]"),ts=document.querySelector(".tool-list"),Ri=0,Rb=0;function Cb(){let r=document.getElementById(es[Ri].target);if(so.hidden=!r,!r){delete vt.dataset.placement;return}let e=r.getBoundingClientRect();so.style.left=e.left-4+"px",so.style.top=e.top-4+"px",so.style.width=e.width+8+"px",so.style.height=e.height+8+"px",vt.dataset.placement=e.top>vt.clientHeight-e.bottom?"top":"bottom"}function wp(){let r=es[Ri],e=document.getElementById(r.target);if(e&&ts.contains(e)){let t=ts.getBoundingClientRect(),i=e.getBoundingClientRect();i.top<t.top&&(ts.scrollTop-=t.top-i.top),i.bottom>t.bottom&&(ts.scrollTop+=i.bottom-t.bottom)}vt.querySelector(".guide-art").hidden=Ri!==0,vt.querySelector("#primerkaTourStep").textContent=Ri===0?"\u041A\u0440\u0430\u0442\u043A\u0438\u0439 \u043E\u0431\u0437\u043E\u0440":`${Ri} / ${es.length-1}`,Eb.textContent=r.title,vt.querySelector("#primerkaTourText").textContent=r.text,vt.querySelector(".guide-progress").replaceChildren(...es.map((t,i)=>{let n=document.createElement("span");return n.classList.toggle("current",i===Ri),n})),Ab.hidden=Ri===0,wb.textContent=Ri===0?"\u041D\u0430\u0447\u0430\u0442\u044C":Ri===es.length-1?"\u0413\u043E\u0442\u043E\u0432\u043E":"\u0414\u0430\u043B\u0435\u0435",Cb(),Eb.focus({preventScroll:!0})}function Pb(){vt.open||(Ri=0,Rb=ts.scrollTop,vt.showModal(),wp())}function Ib(){try{localStorage.setItem(Tb,"1")}catch{}}function Lb(){Ib(),vt.close()}OE.addEventListener("click",()=>gn.showModal());gn.querySelector(".guide-restart").addEventListener("click",()=>{gn.close(),Pb()});wb.addEventListener("click",()=>{if(Ri===es.length-1){Lb();return}Ri++,wp()});Ab.addEventListener("click",()=>{Ri--,wp()});vt.querySelector("[data-guide=skip]").addEventListener("click",Lb);vt.addEventListener("cancel",Ib);vt.addEventListener("close",()=>{ts.scrollTop=Rb});window.addEventListener("resize",()=>{vt.open&&Cb()});window.addEventListener("load",()=>{let r=!1;try{r=localStorage.getItem(Tb)==="1"}catch{}!r&&!document.querySelector("dialog[open]")&&Pb()});var Ap=null;"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",r=>{r.data?.type==="CACHE_READY"&&(document.getElementById("appOffline").textContent="\u0413\u043E\u0442\u043E\u0432\u043E \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0431\u0435\u0437 \u0441\u0435\u0442\u0438",document.getElementById("appOffline").dataset.version=r.data.version)});if(!window.Capacitor?.isNativePlatform()&&"serviceWorker"in navigator&&(!["127.0.0.1","localhost"].includes(location.hostname)||new URLSearchParams(location.search).has("pwa"))){navigator.serviceWorker.ready.then(e=>e.active?.postMessage("STATUS")).catch(()=>{}),navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"}).then(e=>{let t=i=>{if(!i)return;Ap=i,G.model&&!document.querySelector("dialog[open]")&&!document.body.classList.contains("painting")&&!document.getElementById("sheet").classList.contains("open")&&!document.getElementById("hintCancel").offsetParent&&window.__paint.flush().then(()=>G.write("state",structuredClone(G.state))).then(()=>i.postMessage("SKIP_WAITING")).catch(()=>{});let n=document.getElementById("appUpdate");if(!n){n=document.createElement("div"),n.id="appUpdate",n.style.cssText="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:2000;background:#292724;color:white;border-radius:14px;padding:12px 16px;font:13px system-ui;display:flex;gap:14px;align-items:center;box-shadow:0 4px 24px #0003";let a=document.createElement("span");a.textContent="\u0413\u043E\u0442\u043E\u0432\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u041F\u0440\u0438\u043C\u0435\u0440\u043A\u0438";let s=document.createElement("button");s.textContent="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",s.style.cssText="background:#f0dfcb;color:#292724;border:0;border-radius:8px;padding:9px 12px;font:inherit",s.onclick=async()=>{try{await window.__paint?.flush(),await G.write("state",structuredClone(G.state)),Ap?.postMessage("SKIP_WAITING")}catch{alert("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443. \u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u043F\u0435\u0440\u0435\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C.")}},n.append(a,s),document.body.append(n)}};e.waiting&&t(e.waiting),e.addEventListener("updatefound",()=>{let i=e.installing;i?.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&t(i)})}),document.addEventListener("visibilitychange",()=>{!document.hidden&&e.active&&e.update().catch(()=>{})}),e.active&&e.update().catch(()=>{})}).catch(()=>{});let r=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!r&&Ap&&(r=!0,location.reload())})}
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
/**
* @license lucide v0.460.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/

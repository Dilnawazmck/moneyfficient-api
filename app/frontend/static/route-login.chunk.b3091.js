(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{l8WD:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function i(e){return e&&((e=r({},e)).__c=null,e.__k=e.__k&&e.__k.map(i)),e}function u(){this.__u=0,this.o=null,this.__b=null}function a(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function c(){this.i=null,this.l=null}function s(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}var l=n("QRet");n.d(t,"a",(function(){return l.b}));var p=n("hosL"),f=(function(e){function t(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,t.prototype.shouldComponentUpdate=function(e,t){return o(this.props,e)||o(this.state,t)}}(p.a),p.k.vnode);p.k.vnode=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),f&&f(e)};var h=p.k.__e;p.k.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(e,t.__c);h(e,t,n)},(u.prototype=new p.a).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var r=a(n.__v),o=!1,i=function(){o||(o=!0,r?r(u):u())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){i(),t.__c&&t.__c()};var u=function(){var e;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(i,i)},u.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=i(this.__b),this.__b=null),[Object(p.f)(p.a,null,t.u?null:e.children),t.u&&e.fallback]};var d=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(c.prototype=new p.a).u=function(e){var t=this,n=a(t.__v),r=t.l.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),d(t,e,r)):o()};n?n(i):i()}},c.prototype.render=function(e){this.i=null,this.l=new Map;var t=Object(p.m)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},c.prototype.componentDidUpdate=c.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){d(e,n,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var v=/^(?:accent|alignment|arabic|baseline|cap|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;p.a.prototype.isReactComponent={};var _="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,b=p.k.event;p.k.event=function(e){return b&&(e=b(e)),e.persist=function(){},e.nativeEvent=e};var m={configurable:!0,get:function(){return this.class}},y=p.k.vnode;p.k.vnode=function(e){e.$$typeof=_;var t=e.type,n=e.props;if(n.class!=n.className&&(m.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",m)),"function"!=typeof t){var r,o,i;for(i in n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(Object(p.m)(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),n)if(r=v.test(i))break;if(r)for(i in o=e.props={},n)o[v.test(i)?i.replace(/([A-Z0-9])/,"-$1").toLowerCase():i]=n[i]}!function(){var t=e.type,n=e.props;if(n&&"string"==typeof t){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(s(t.prototype,"componentWillMount"),s(t.prototype,"componentWillReceiveProps"),s(t.prototype,"componentWillUpdate"),t.m=!0),y&&y(e)}},n6wl:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var u=n("hosL"),a=n("QRet"),c=new(function(e){function t(){var t;return(t=e.call(this,document.location.protocol+"//"+document.location.hostname+":"+document.location.port+"/")||this).counter=0,t}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=t.prototype;return o.login=function(e){return new Promise(function(t,n){var r,o;return(r=new FormData).append("username",e.email),r.append("password",e.password),console.log(Array.from(r.entries())),Promise.resolve(fetch(this.baseUrl+"auth/login",{method:"POST",body:r})).then(function(e){try{return(o=e).ok?Promise.resolve(o.json()).then(t,n):n(new Error("Invalid Credentials"))}catch(e){return n(e)}}.bind(this),n)}.bind(this))},o.createUser=function(){return new Promise(function(e,t){return this.counter+=1,Promise.resolve(this.makeRequest("/users","POST",{id:this.counter,name:"User #"+this.counter,password:"fake-pw"})).then(e,t)}.bind(this))},o.getUserById=function(e){return new Promise(function(t,n){var r;return Promise.resolve(this.makeRequest("/users?orderKey=id&filterValue="+e)).then((function(e){try{return t((r=e).ok?r.result:null)}catch(e){return n(e)}}),n)}.bind(this))},t}(function(){function e(e){"/"!==e.charAt(e.length-1)&&(e+="/"),this.baseUrl=e}return e.prototype.makeRequest=function(e,t,n){return new Promise(function(r,o){return void 0===e&&(e=""),void 0===t&&(t="GET"),void 0===n&&(n=null),Promise.resolve(fetch(this.baseUrl+e,{method:t,headers:{Accept:"application/json","Content-Type":"application/json"},body:n})).then((function(e){try{return Promise.resolve(e.json()).then(r,o)}catch(e){return o(e)}}),o)}.bind(this))},e}())),s=n("l8WD"),l=n("QfWi");t.default=function(){function e(e){var t;e.preventDefault(),r(o({},n,((t={})[e.target.name]=e.target.value,t)))}var t=Object(a.j)({email:"",password:"",isSubmitting:!1,errorMessage:null}),n=t[0],r=t[1],i=Object(s.a)(l.AuthContext).dispatch;return Object(u.h)("form",null,Object(u.h)("h1",null," Sign In "),Object(u.h)("label",{htmlFor:"email"},"E-Mail",Object(u.h)("input",{type:"email",placeholder:"E-Mail",id:"email",name:"email",onChange:e})),Object(u.h)("label",{htmlFor:"password"},"Password",Object(u.h)("input",{type:"password",placeholder:"Password",id:"password",name:"password",onChange:e})),n.errorMessage&&Object(u.h)("span",null,n.errorMessage),Object(u.h)("button",{onClick:function(e){return new Promise((function(t){return e.preventDefault(),r(o({},n,{isSubmitting:!0,errorMessage:null})),c.login(n).then((function(e){console.log("Res",e),i({type:"login",payload:e})})).catch((function(e){console.log(e),console.log(e.message,e.statusText),r(o({},n,{errorMessage:e.message||e.statusText}))})),t()}))},disabled:n.isSubmitting},n.isSubmitting?"Logging in...":"Log In"))}}}]);
//# sourceMappingURL=route-login.chunk.b3091.js.map
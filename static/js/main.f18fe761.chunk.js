(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(63)},53:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a,r,o,c,i,l,s=n(1),u=n.n(s),m=n(35),f=n.n(m),h=n(0),p=n(16),d=n(17),v=d.a.header(a||(a=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 500px;\n    height: 370px;\n    border: 1px solid rgb(252, 252, 252);\n    box-shadow: 0px 0px 10px rgb(209, 208, 208);\n    margin:120px  auto;\n"]))),g=d.a.h1(r||(r=Object(p.a)(["\n    text-align: center;\n    font-size: 40px;\n    margin-top:20px;\n"]))),E=d.a.p(o||(o=Object(p.a)(['\n    font-size: 25px;\n    text-align: center;\n    font-weight:500;\n    color: rgb(124, 124, 124);\n    content: "\f1ea";\n'],['\n    font-size: 25px;\n    text-align: center;\n    font-weight:500;\n    color: rgb(124, 124, 124);\n    content: "\\f1ea";\n']))),y=d.a.a(c||(c=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    height: 50px;\n    margin: 160px 120px  0 120px;\n    background-color: black;\n    border-radius: 10px;\n    border: 1px solid black;\n    justify-content: space-around;\n    text-decoration: none;\n    font-family: initial;\n"]))),b=d.a.i(i||(i=Object(p.a)(["\n    font-size:50px;\n    color:white;\n"]))),w=d.a.span(l||(l=Object(p.a)(["\n    display: flex;\n    color:white;\n    align-items: center;\n    font-weight:600;\n    font-size: 17px;\n"])));var x=function(){var e=Object(h.l)();return Object(s.useEffect)(function(){window.location.href.match(/\?code=(.*)/)&&window.location.href.match(/\?code=(.*)/)[1]&&(localStorage.setItem("data","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"),e("/home"))}),u.a.createElement(v,null,u.a.createElement(g,null,"Welcome"),u.a.createElement(E,null,"GitHub API"),u.a.createElement(y,{href:"https://github.com/login/oauth/authorize?client_id=".concat("375fc25224e7d4cf342f","&scope=user&redirect_uri=").concat("https://bumlev.github.io/User-Stories/")},u.a.createElement(b,{className:"fa fa-github"}),u.a.createElement(w,null,"LOGIN WITH GITHUB")))},O=n(3),j=n(11),_=(n(53),n(4)),N=Object(s.createContext)(),S=function(e){var t=e.children,n=Object(s.useState)([]),a=Object(_.a)(n,2),r=a[0],o=a[1],c=Object(s.useState)(""),i=Object(_.a)(c,2),l=i[0],m=i[1];return u.a.createElement(N.Provider,{value:{users:r,saveUsers:function(e,t){m(e),document.getElementById("search_lists").style.display="flex";var n=t.filter(function(t){return t.login.substring(0,e.length)===e});o(n)},Input:l}},t)},k=Object(s.createContext)(),L=function(e){var t=e.children,n=Object(s.useState)(""),a=Object(_.a)(n,2),r=a[0],o=a[1],c=Object(s.useState)(!1),i=Object(_.a)(c,2),l=i[0],m=i[1];return u.a.createElement(k.Provider,{value:{User:r,saveUsername:function(e){o(e),document.getElementById("searchUser").value=e.login,document.getElementById("search_lists").style.display="none",m(!0)},isSearch:l,setIsSearch:m}},t)},I=Object(s.createContext)(),P=function(e){var t=e.children,n=Object(s.useState)([]),a=Object(_.a)(n,2),r=a[0],o=a[1],c=Object(s.useState)(""),i=Object(_.a)(c,2),l=i[0],m=i[1];return u.a.createElement(I.Provider,{value:{repositories:r,saveRepositories:function(e,t){m(e),document.getElementById("search_lists_repo").style.display="flex";var n=t.filter(function(t){return t.name.substring(0,e.length)===e});o(n)},Input:l}},t)},C=Object(s.createContext)(),U=function(e){var t=e.children,n=Object(s.useState)(""),a=Object(_.a)(n,2),r=a[0],o=a[1],c=Object(s.useState)(!1),i=Object(_.a)(c,2),l=i[0],m=i[1];return u.a.createElement(C.Provider,{value:{Repository:r,saveRepositoryname:function(e){o(e),document.getElementById("search_Repository").value=e.name,document.getElementById("search_lists_repo").style.display="none",m(!0)},isSearch:l,setIsSearch:m}},t)},G=(n(55),n(6)),F=n(29);function R(){R=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),i=new _(r||[]);return a(c,"_invoke",{value:w(e,n,i)}),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==t&&n.call(g,o)&&(d=g);var E=p.prototype=f.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;a(this,"_invoke",{value:function(a,o){function c(){return new t(function(r,c){!function a(r,o,c,i){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,c,i)},function(e){a("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return a("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var i=x(c,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,a(E,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(b.prototype),l(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var c=new b(s(t,n,a,r),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(E),l(E,i,"Generator"),l(E,o,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var B=function(){var e=function(e){var t=Object(s.useState)(!1),n=Object(_.a)(t,2),a=n[0],r=n[1],o=Object(s.useState)({}),c=Object(_.a)(o,2),i=c[0],l=c[1],u=Object(s.useState)(!0),m=Object(_.a)(u,2),f=m[0],h=m[1];return Object(s.useEffect)(function(){function t(){return(t=Object(G.a)(R().mark(function t(){return R().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get(e).then(function(e){var t=e.data;l(t)}).catch(function(e){r(!0)}).finally(function(){h(!1)});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}e&&(h(!0),function(){t.apply(this,arguments)}())},[e]),{data:i,Error:a,isLoading:f}}("https://api.github.com/users"),t=e.data,n=e.isLoading,a=Object(s.useContext)(N),r=a.users,o=a.saveUsers,c=a.Input,i=Object(s.useContext)(k),l=i.User,m=i.saveUsername,f=i.isSearch,h=i.setIsSearch;return n||0!==Object.keys(t).length?u.a.createElement("div",{id:"contain",className:"contain"},u.a.createElement("div",null,u.a.createElement("div",{className:"search_block"},u.a.createElement("input",{id:"searchUser",onChange:function(e){return o(e.target.value,t)},placeholder:"Search User ...",type:"text"}),u.a.createElement("button",null,"Search")),u.a.createElement("div",{id:"search_lists",className:"search_lists"},"[]"!==r&&""!==c?r.map(function(e,t){return u.a.createElement(j.b,{onClick:function(){return m(e)},id:"found_lists",className:"found_lists",key:"".concat(t)},u.a.createElement("img",{src:e.avatar_url,alt:""}),u.a.createElement("span",null,e.login))}):null),u.a.createElement("div",{className:"list_cards"},f?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"cards",key:"".concat(l.login,"-").concat(l.id)},u.a.createElement("img",{src:l.avatar_url,alt:""}),u.a.createElement("div",{className:"card_profile"},u.a.createElement("span",null,l.login),u.a.createElement(j.b,{to:"/profile/".concat(l.login)},"View Profile"))),u.a.createElement("div",{className:"search_block"},u.a.createElement("button",{className:"button_back",onClick:function(){return h(!1)}},"Back"))):n?u.a.createElement("div",{"data-testid":"loader"},"A Moment please ..."):t.map(function(e,t){return u.a.createElement("div",{className:"cards",key:"".concat(e.login,"-").concat(t)},u.a.createElement("img",{src:e.avatar_url,alt:""}),u.a.createElement("div",{className:"card_profile"},u.a.createElement("span",null,e.login),u.a.createElement(j.b,{to:"/profile/".concat(e.login)},"View Profile")))})))):u.a.createElement("div",null,"Problem with server !")};n(61);function A(e){var t=new Date(e),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()];return t.getDate()+" "+n+" "+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()}var T=function(){var e=Object(h.n)(),t=function(e,t){var n=Object(s.useState)(!1),a=Object(_.a)(n,2),r=a[0],o=a[1],c=Object(s.useState)([]),i=Object(_.a)(c,2),l=i[0],u=i[1],m=Object(s.useState)(!0),f=Object(_.a)(m,2),h=f[0],p=f[1];return Object(s.useEffect)(function(){function n(){return(n=Object(G.a)(R().mark(function n(){var a,r;return R().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.a.get(e);case 2:return a=n.sent,n.next=5,F.a.get(t);case 5:r=n.sent,Promise.all([a,r]).then(function(e){u(e)}).catch(function(e){o(!0)}).finally(function(){p(!1)});case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}(e||t)&&(p(!0),function(){n.apply(this,arguments)}())},[e,t]),{data:l,Error:r,isLoading:h}}("https://api.github.com/users/".concat(e.ProfileName),"https://api.github.com/users/".concat(e.ProfileName,"/repos")),n=t.data,a=t.isLoading,r=Object(s.useContext)(I),o=r.repositories,c=r.saveRepositories,i=r.Input,l=Object(s.useContext)(C),m=l.Repository,f=l.saveRepositoryname,p=l.isSearch,d=l.setIsSearch;return a||0!==Object.keys(n).length?u.a.createElement("div",{className:"contain"},u.a.createElement("div",{className:"contain_repo"},u.a.createElement("div",{className:"repo_profile"},u.a.createElement("div",{className:"back_repo"},u.a.createElement("img",{src:a?"":n[0].data.avatar_url,alt:""})),u.a.createElement("div",{className:"name_profile"},u.a.createElement("span",null," ",a?"":n[0].data.name),u.a.createElement("span",null,"@",a?"":n[0].data.login)),u.a.createElement("div",{className:"profile_follow"},u.a.createElement("i",{className:"fa fa-user"}),u.a.createElement("span",null,a?"":n[0].data.followers," followers . ",a?"":n[0].data.following," following"))),u.a.createElement("div",{className:"repo_git"},u.a.createElement("div",{className:"search_repo"},u.a.createElement("input",{id:"search_Repository",onChange:function(e){return c(e.target.value,n[1].data)},placeholder:"Search Repository ...",type:"text"})),u.a.createElement("div",{id:"search_lists_repo",className:"search_lists_repo"},"[]"!==o&&""!==i?o.map(function(e,t){return u.a.createElement(j.b,{onClick:function(){return f(e)},className:"found_lists_repo",key:"".concat(t)},u.a.createElement("span",null,e.full_name))}):null),u.a.createElement("div",{className:"list_repositories"},a?u.a.createElement("div",null,"A Moment please ..."):p?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"repositories",key:"".concat(m.id)},u.a.createElement("div",{className:"detail_repositories"},u.a.createElement("span",null,m.full_name),u.a.createElement("span",null,m.visibility)),u.a.createElement("div",{className:"skill_repositories"},u.a.createElement("span",null,m.language),u.a.createElement("span",null,"Updated at ",A(m.updated_at)))),u.a.createElement("div",{className:"search_repo"},u.a.createElement("button",{onClick:function(){return d(!1)}},"back"))):n[1].data.map(function(e,t){return u.a.createElement("div",{className:"repositories",key:"".concat(t)},u.a.createElement("div",{className:"detail_repositories"},u.a.createElement("span",null,e.full_name),u.a.createElement("span",null,e.visibility)),u.a.createElement("div",{className:"skill_repositories"},u.a.createElement("span",null,e.language),u.a.createElement("span",null,"Updated at ",A(e.updated_at))))}))))):u.a.createElement("div",null,"Problem with server !")};var J=function(){var e=Object(h.n)();console.log(e);var t=Object(h.l)();Object(s.useEffect)(function(){localStorage.getItem("data")||t("/")});var n=Object(s.useContext)(C);return n.isSearch,n.setIsSearch,u.a.createElement(u.a.Fragment,null,u.a.createElement("nav",null,u.a.createElement("ul",{className:"list_menu"},u.a.createElement("li",{className:"Name_project"},u.a.createElement(j.b,{onClick:function(){return console.log("hello"),Object(O.o)("/home")}},u.a.createElement("i",{className:"fa fa-github"}),u.a.createElement("span",{"data-testid":"git"},"GitHub API"))),u.a.createElement("li",{className:"logout"},u.a.createElement("a",{"data-testid":"logout",onClick:function(){localStorage.clear()},href:"#.html"},"Logout")))),e.ProfileName||e.repositoryname?u.a.createElement(T,null):u.a.createElement(B,null))};f.a.createRoot(document.getElementById("root")).render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(j.a,{basename:"/User-Stories"},u.a.createElement(S,null,u.a.createElement(L,null,u.a.createElement(P,null,u.a.createElement(U,null,u.a.createElement(h.c,null,u.a.createElement(h.a,{path:"/",element:u.a.createElement(x,null)}),u.a.createElement(h.a,{path:"/home",element:u.a.createElement(J,null)}),u.a.createElement(h.a,{path:"/user/:username",element:u.a.createElement(J,null)}),u.a.createElement(h.a,{path:"/profile/:ProfileName",element:u.a.createElement(J,null)})))))))))}},[[42,2,1]]]);
//# sourceMappingURL=main.f18fe761.chunk.js.map
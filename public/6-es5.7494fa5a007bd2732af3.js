function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"LK/Y":function(e,t,n){"use strict";n.r(t),n.d(t,"RootModule",(function(){return y}));var c=n("ofXK"),s=n("tyNb"),a=n("fXoL"),i=n("Jgta"),r=(n("6nsN"),n("6uu6"));function o(e,t){if(1&e){var n=a.Nb();a.Mb(0,"div"),a.Mb(1,"button",1),a.Ub("click",(function(){return a.ac(n),a.Wb().onSignOut()})),a.ec(2,"deconnexion"),a.Lb(),a.Lb()}}var u,l,f,p,h,b,d=((u=function(){function e(t){_classCallCheck(this,e),this.authService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.authStatus=this.authService.isAuth,i.a.auth().onAuthStateChanged((function(t){e.authStatus=!!t}))}},{key:"onSignOut",value:function(){this.authService.signOutUser()}}]),e}()).\u0275fac=function(e){return new(e||u)(a.Jb(r.a))},u.\u0275cmp=a.Db({type:u,selectors:[["app-shared"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&a.dc(0,o,3,0,"div",0),2&e&&a.Xb("ngIf",t.authStatus)},directives:[c.h],styles:[""]}),u),v=[{path:"home",component:(p=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=a.Db({type:p,selectors:[["app-home"]],decls:3,vars:0,template:function(e,t){1&e&&(a.Mb(0,"p"),a.ec(1,"home works!"),a.Lb(),a.Kb(2,"app-shared"))},directives:[d],styles:[""]}),p)},{path:"recip",component:(f=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=a.Db({type:f,selectors:[["app-recip"]],decls:2,vars:0,template:function(e,t){1&e&&(a.Mb(0,"p"),a.ec(1,"recip works!"),a.Lb())},styles:[""]}),f)},{path:"user",component:(l=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=a.Db({type:l,selectors:[["app-user"]],decls:2,vars:0,template:function(e,t){1&e&&(a.Mb(0,"p"),a.ec(1,"user works!"),a.Lb())},styles:[""]}),l)},{path:"",redirectTo:"home"},{path:"**",redirectTo:"home"}],m=((b=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:b}),b.\u0275inj=a.Gb({factory:function(e){return new(e||b)},imports:[[s.d.forChild(v)],s.d]}),b),y=((h=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:h}),h.\u0275inj=a.Gb({factory:function(e){return new(e||h)},imports:[[c.b,m]]}),h)}}]);
!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{cuX6:function(t,o,r){"use strict";r.r(o),r.d(o,"AppModule",function(){return T});var u,i,c,a,l=r("jhN1"),p=r("R1ws"),d=r("tyNb"),s=r("fXoL"),m=r("ZAlq"),b=[{path:"",redirectTo:"module-app-home",pathMatch:"full"},{path:"module-app-home",component:(u=function(){function t(n){e(this,t),this.tourService=n}return n(t,[{key:"ngOnInit",value:function(){this.tourService.initialize([{anchorId:"app-home",content:"This is a step from the eager loaded app module in the home component",title:"Home Component",route:""},{anchorId:"module-a",content:"This is a step from the lazy loaded module-a module in the module-a component",title:"Module-a Component",route:"module-a"},{anchorId:"module-b",content:"This is a step from the lazy loaded module-b module in the module-b component",title:"Module-b Component",route:"module-b"}]),this.tourService.start()}}]),t}(),u.\u0275fac=function(e){return new(e||u)(s.Nb(m.c))},u.\u0275cmp=s.Hb({type:u,selectors:[["app-home"]],decls:3,vars:0,consts:[["tourAnchor","app-home"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Tb(1,"p"),s.Cc(2," home works!\n"),s.Sb())},directives:[m.a],styles:[""]}),u)},{path:"module-a",loadChildren:function(){return r.e(12).then(r.bind(null,"kL/H")).then(function(e){return e.ModuleAModule})}},{path:"module-b",loadChildren:function(){return r.e(13).then(r.bind(null,"GqQb")).then(function(e){return e.ModuleBModule})}}],f=((i=function t(){e(this,t)}).\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.Lb({type:i}),i.\u0275inj=s.Kb({imports:[[d.e.forRoot(b)],d.e]}),i),h=function(){return["/"]},v=function(){return["module-a"]},w=function(){return["module-b"]},y=((a=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Hb({type:a,selectors:[["app-root"]],decls:11,vars:6,consts:[[3,"routerLink"]],template:function(e,t){1&e&&(s.Tb(0,"span"),s.Tb(1,"a",0),s.Cc(2,"HOME"),s.Sb(),s.Sb(),s.Tb(3,"span"),s.Tb(4,"a",0),s.Cc(5,"MODULE A"),s.Sb(),s.Sb(),s.Tb(6,"span"),s.Tb(7,"a",0),s.Cc(8,"MODULE B"),s.Sb(),s.Sb(),s.Ob(9,"router-outlet"),s.Ob(10,"tour-step-template")),2&e&&(s.Bb(1),s.mc("routerLink",s.pc(3,h)),s.Bb(3),s.mc("routerLink",s.pc(4,v)),s.Bb(3),s.mc("routerLink",s.pc(5,w)))},directives:[d.d,d.f,m.d],styles:[""]}),a),T=((c=function t(){e(this,t)}).\u0275fac=function(e){return new(e||c)},c.\u0275mod=s.Lb({type:c,bootstrap:[y]}),c.\u0275inj=s.Kb({providers:[],imports:[[l.a,f,p.b,m.b.forRoot()]]}),c)}}])}();
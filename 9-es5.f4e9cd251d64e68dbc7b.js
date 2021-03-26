!function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5M1D":function(t,e,o){"use strict";o.d(e,"a",function(){return a});var r=o("ofXK"),i=o("LXGm"),c=o("fXoL"),a=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({providers:[i.a],imports:[[r.b]]}),t}()},"8C0g":function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=function t(e,o,r,i){n(this,t),this.key=e,this.definition=o,this.return_type=r,this.description=i}},Jir8:function(t,o,r){"use strict";r.d(o,"a",function(){return a});var i=r("fXoL"),c=r("jhN1"),a=function(){var t=function(){function t(e){n(this,t),this.sanitizer=e}return e(t,[{key:"transform",value:function(t){return this.sanitizer.bypassSecurityTrustHtml(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Nb(c.b))},t.\u0275pipe=i.Mb({name:"keepHtml",type:t,pure:!1}),t}()},LXGm:function(t,o,r){"use strict";r.d(o,"a",function(){return u});var i=r("XNiG"),c=r("fXoL"),a=function(){function t(e){n(this,t),this._subscription=e}return e(t,[{key:"ignore",value:function(){this._subscription.unsubscribe()}}]),t}(),s=function(){function t(e){n(this,t),this.name=e,this._subject=new i.a}return e(t,[{key:"emit",value:function(t){this._subject.next(t)}},{key:"listen",value:function(t){return new a(this._subject.subscribe(t))}}]),t}(),u=function(){var t=function(){function t(){n(this,t),this._events={}}return e(t,[{key:"register",value:function(t){var e=this._events[t];return void 0===e&&(e=this._events[t]=new s(t)),e}},{key:"listen",value:function(t,e){return this.register(t).listen(e)}},{key:"emit",value:function(t,e){return this.register(t).emit(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Jb({token:t,factory:t.\u0275fac}),t}()},"WcU+":function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=function t(e,o,r){n(this,t),this.name=e,this.payload=o,this.description=r}},aSxX:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=function t(e,o,r,i){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];n(this,t),this.name=e,this.prop_type=o,this.default_value=r,this.description=i,this.anchor=c,this.del=a}},lBDK:function(t,o,r){"use strict";r.r(o),r.d(o,"MdMenuModule",function(){return z});var i=r("ofXK"),c=r("tyNb"),a=r("ZAlq"),s=r("OtPg"),u=r("5M1D"),b=r("LXGm"),l=r("8C0g"),h=r("aSxX"),d=r("WcU+"),p=r("fXoL"),S=r("Jir8");function T(t,e){if(1&t&&(p.Tb(0,"tr"),p.Tb(1,"td",32),p.Tb(2,"code"),p.Dc(3),p.Sb(),p.Sb(),p.Tb(4,"td",33),p.Tb(5,"p",34),p.Ob(6,"code",35),p.ic(7,"keepHtml"),p.Tb(8,"small",36),p.Dc(9),p.Sb(),p.Sb(),p.Tb(10,"p",37),p.Dc(11),p.Sb(),p.Sb(),p.Sb()),2&t){var n=e.$implicit;p.Bb(3),p.Ec(n.key),p.Bb(3),p.mc("innerHTML",p.jc(7,4,n.description),p.xc),p.Bb(3),p.Fc(" => ",n.return_type,""),p.Bb(2),p.Ec(n.description)}}function m(t,e){if(1&t&&(p.Rb(0),p.Tb(1,"del"),p.Tb(2,"code"),p.Dc(3),p.Sb(),p.Sb(),p.Qb()),2&t){var n=p.hc().$implicit;p.Bb(3),p.Ec(n.name)}}function f(t,e){if(1&t&&(p.Rb(0),p.Tb(1,"code"),p.Dc(2),p.Sb(),p.Qb()),2&t){var n=p.hc().$implicit;p.Bb(2),p.Ec(n.name)}}function v(t,e){if(1&t&&(p.Tb(0,"div",41),p.Tb(1,"i"),p.Dc(2,"Default: "),p.Sb(),p.Tb(3,"code"),p.Dc(4),p.Sb(),p.Sb()),2&t){var n=p.hc().$implicit;p.Bb(4),p.Ec(n.default_value)}}function g(t,e){if(1&t&&(p.Rb(0),p.Tb(1,"tr",38),p.Tb(2,"td",32),p.Bc(3,m,4,1,"ng-container",39),p.Bc(4,f,3,1,"ng-container",39),p.Sb(),p.Tb(5,"td",33),p.Ob(6,"p",40),p.ic(7,"keepHtml"),p.Tb(8,"div",41),p.Tb(9,"i"),p.Dc(10,"Type: "),p.Sb(),p.Tb(11,"code"),p.Dc(12),p.Sb(),p.Sb(),p.Bc(13,v,5,1,"div",42),p.Sb(),p.Sb(),p.Qb()),2&t){var n=e.$implicit;p.Bb(1),p.mc("tourAnchor",n.anchor),p.Bb(2),p.mc("ngIf",n.del),p.Bb(1),p.mc("ngIf",!n.del),p.Bb(2),p.mc("innerHTML",p.jc(7,6,n.description),p.xc),p.Bb(6),p.Ec(n.prop_type),p.Bb(1),p.mc("ngIf",n.default_value)}}function D(t,e){if(1&t&&(p.Rb(0),p.Tb(1,"tr"),p.Tb(2,"td",32),p.Tb(3,"code"),p.Dc(4),p.Sb(),p.Sb(),p.Tb(5,"td",33),p.Ob(6,"p",40),p.ic(7,"keepHtml"),p.Tb(8,"div",41),p.Tb(9,"i"),p.Dc(10,"Payload: "),p.Sb(),p.Tb(11,"code"),p.Dc(12),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Qb()),2&t){var n=e.$implicit;p.Bb(4),p.Ec(n.name),p.Bb(2),p.mc("innerHTML",p.jc(7,3,n.description),p.xc),p.Bb(6),p.Ec(n.payload)}}var y,w,k,I,B=function(){return["bash"]},x=function(){return["xml"]},A=function(){return["typescript"]},M=((I=function(){function t(e){n(this,t),this.eventBroker=e,this.codeInstall="npm install @ngx-tour/core @ngx-tour/md-menu @angular/animations @angular/cdk @angular/http @angular/material",this.codeTourAnchor='<div tourAnchor="some.anchor.id">...</div>',this.codeInitialize="this.tourService.initialize([{\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);",this.codeInitializeDefaults="this.tourService.initialize(steps, {\n  route: '',\n  preventScrolling: true,\n});",this.codeEventObservables="this.tourService.initialize$.subscribe((steps: IStepOption[]) => {\n  console.log('tour configured with these steps:', steps);\n});",this.codeTemplate='<tour-step-template>\n  <ng-template let-step="step">\n    <mat-card (click)="$event.stopPropagation()">\n      <mat-card-title>\n        {{step?.title}}\n      </mat-card-title>\n      <mat-card-content>\n        {{step?.content}}\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">\n          <mat-icon>chevron_left</mat-icon>\n        </button>\n        <button mat-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">\n          <mat-icon>chevron_right</mat-icon>\n        </button>\n        <button mat-button (click)="tourService.end()">{{step?.endBtnTitle}}</button>\n      </mat-card-actions>\n    </mat-card>\n  </ng-template>\n</tour-step-template>',this.tourServiceMethods=[new l.a("start","start()","void","Start the tour"),new l.a("startAt","startAt(stepId: number | string)","void","Start the tour at the step with stepId or at the specified index"),new l.a("end","end()","void","Ends the tour"),new l.a("pause","pause()","void","Pauses the tour"),new l.a("resume","resume()","void","Resumes the tour"),new l.a("next","next()","void","Goes to the next step"),new l.a("prev","prev()","void","Goes to the previous step")],this.stepConfigProperties=[new h.a("stepId","string",'""',"A unique identifier for the step"),new h.a("anchorId","string","","The anchor to which the step will be attached","config.anchorId"),new h.a("title","string",'""',"The title of the tour step"),new h.a("content","string",'""',"The content text of the tour step"),new h.a("enableBackdrop","boolean","false","Controls whether to enable active element highlighting","config.enableBackdrop"),new h.a("route","string | UrlSegment[]","undefined","The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted.","config.route"),new h.a("nextStep","number | string","undefined","The step index or stepId of the next step. If undefined, the next step in the steps array is used.","config.nextStep"),new h.a("prevStep","number | string","undefined","The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),new h.a("placement","N/A","","Ignored by <code>TourMatMenuModule</code>","",!0),new h.a("preventScrolling","boolean","false","Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to <code>true</code> will disable the scroll behavior."),new h.a("prevBtnTitle","string","Prev","Sets a custom prev button title for a given step.","config.buttons.custom"),new h.a("nextBtnTitle","string","Next","Sets a custom next button title for a given step."),new h.a("endBtnTitle","string","End","Sets a custom end button title for a given step.")],this.eventObservables=[new d.a("initialize$","IStepOption[]","The tour is configured with a set of steps"),new d.a("stepShow$","IStepOption","A step is shown"),new d.a("stepHide$","IStepOption","A step is hidden"),new d.a("start$","IStepOption","The tour begins"),new d.a("ends$","any","The tour ends"),new d.a("pause$","IStepOption","The tour is paused"),new d.a("resume$","IStepOption","The tour resumes"),new d.a("anchorRegister$","string","An anchor is registered with the tour"),new d.a("anchorUnregister$","string","An anchor is unregistered from the tour")]}return e(t,[{key:"scroll",value:function(t){t.scrollIntoView()}},{key:"startTour",value:function(){this.eventBroker.emit("start-tour",!0)}}]),t}()).\u0275fac=function(t){return new(t||I)(p.Nb(b.a))},I.\u0275cmp=p.Hb({type:I,selectors:[["docs"]],decls:252,vars:24,consts:[[1,"row","flex-xl-nowrap"],[1,"d-none","d-xl-block","col-xl-2"],[1,"d-none","d-xl-block","col-xl-2","bd-toc"],["id","TableOfContents"],["routerLink",".",3,"click"],[1,"col-md-9","col-xl-8","py-md-3","pl-md-5"],["href","https://badge.fury.io/js/%40ngx-tour%2Fmd-menu"],["src","https://badge.fury.io/js/%40ngx-tour%2Fmd-menu.svg","alt","npm version","height","18"],["href","http://material.angular.io"],["anchorDemo",""],["tourAnchor","start.tour",1,"btn","btn-primary",3,"click"],["anchorInstallation",""],["tourAnchor","installation"],[3,"highlight","languages"],["href","https://material.angular.io/guide/getting-started"],["anchorUsage",""],["tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/alvaro-octal/ngx-tour/tree/master/src/app/md-menu"],["href","https://github.com/alvaro-octal/ngx-tour/tree/master/src/app/md-menu/mat-lazy-menu"],["anchorTourservice",""],[1,"table","table-sm"],[4,"ngFor","ngForOf"],["anchorStepConfiguration",""],["anchorDefaults",""],["anchorHotkeys",""],["tourAnchor","hotkeys"],["anchorEventObservables",""],["tourAnchor","events"],["anchorCustomTemplate",""],["tourAnchor","template"],["anchorStylingActiveTourAnchor",""],[1,"label-cell"],[1,"content-cell"],[1,"signature"],[3,"innerHTML"],[1,"text-muted"],[1,"description"],[3,"tourAnchor"],[4,"ngIf"],[1,"description",3,"innerHTML"],[1,"meta"],["class","meta",4,"ngIf"]],template:function(t,e){if(1&t){var n=p.Ub();p.Tb(0,"div",0),p.Ob(1,"div",1),p.Tb(2,"nav",2),p.Tb(3,"nav",3),p.Tb(4,"ul"),p.Tb(5,"li"),p.Tb(6,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(48);return e.scroll(t)}),p.Dc(7,"Demo"),p.Sb(),p.Sb(),p.Tb(8,"li"),p.Tb(9,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(53);return e.scroll(t)}),p.Dc(10,"Installation"),p.Sb(),p.Sb(),p.Tb(11,"li"),p.Tb(12,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(76);return e.scroll(t)}),p.Dc(13,"Usage"),p.Sb(),p.Sb(),p.Tb(14,"li"),p.Tb(15,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(156);return e.scroll(t)}),p.Dc(16,"TourService"),p.Sb(),p.Sb(),p.Tb(17,"li"),p.Tb(18,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(166);return e.scroll(t)}),p.Dc(19,"Step Configuration"),p.Sb(),p.Sb(),p.Tb(20,"li"),p.Tb(21,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(173);return e.scroll(t)}),p.Dc(22,"Defaults"),p.Sb(),p.Sb(),p.Tb(23,"li"),p.Tb(24,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(185);return e.scroll(t)}),p.Dc(25,"Hotkeys"),p.Sb(),p.Sb(),p.Tb(26,"li"),p.Tb(27,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(217);return e.scroll(t)}),p.Dc(28,"Event Observables"),p.Sb(),p.Sb(),p.Tb(29,"li"),p.Tb(30,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(230);return e.scroll(t)}),p.Dc(31,"Custom template"),p.Sb(),p.Sb(),p.Tb(32,"li"),p.Tb(33,"a",4),p.dc("click",function(){p.wc(n);var t=p.uc(245);return e.scroll(t)}),p.Dc(34,"Styling Active Tour Anchor"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(35,"main",5),p.Tb(36,"h1"),p.Dc(37,"@ngx-tour/md-menu "),p.Tb(38,"a",6),p.Ob(39,"img",7),p.Sb(),p.Sb(),p.Tb(40,"p"),p.Tb(41,"code"),p.Dc(42,"TourMatMenuModule"),p.Sb(),p.Dc(43," is an implementation of the tour ui that uses "),p.Tb(44,"a",8),p.Dc(45,"Angular Material"),p.Sb(),p.Dc(46," MatMenu to display tour steps. "),p.Sb(),p.Tb(47,"h2",null,9),p.Dc(49,"Demo"),p.Sb(),p.Tb(50,"button",10),p.dc("click",function(){return e.startTour()}),p.Dc(51,"Start Demo Tour"),p.Sb(),p.Tb(52,"h2",null,11),p.Tb(54,"span",12),p.Dc(55,"Installation"),p.Sb(),p.Sb(),p.Tb(56,"ol"),p.Tb(57,"li"),p.Dc(58," Install: "),p.Tb(59,"pre"),p.Ob(60,"code",13),p.Sb(),p.Sb(),p.Tb(61,"li"),p.Dc(62,"Import "),p.Tb(63,"code"),p.Dc(64,"TourMatMenuModule.forRoot()"),p.Sb(),p.Dc(65," into your app module"),p.Sb(),p.Tb(66,"li"),p.Dc(67,"Make sure "),p.Tb(68,"code"),p.Dc(69,"RouterModule"),p.Sb(),p.Dc(70," is imported in your app module"),p.Sb(),p.Tb(71,"li"),p.Dc(72,"Make sure Angular Material is "),p.Tb(73,"a",14),p.Dc(74,"installed correctly"),p.Sb(),p.Sb(),p.Sb(),p.Tb(75,"h2",null,15),p.Tb(77,"span",16),p.Dc(78,"Usage"),p.Sb(),p.Sb(),p.Tb(79,"h4"),p.Dc(80,"Simple project"),p.Sb(),p.Tb(81,"ol"),p.Tb(82,"li"),p.Dc(83,"Add "),p.Tb(84,"code"),p.Dc(85,"<tour-step-template></tour-step-template>"),p.Sb(),p.Dc(86," to your root app component"),p.Sb(),p.Tb(87,"li"),p.Dc(88," Define anchor points for the tour steps by adding the "),p.Tb(89,"code"),p.Dc(90,"tourAnchor"),p.Sb(),p.Dc(91," directive throughout your app. "),p.Tb(92,"pre"),p.Ob(93,"code",13),p.Sb(),p.Sb(),p.Tb(94,"li"),p.Dc(95," Define your tour steps using "),p.Tb(96,"code"),p.Dc(97,"tourService.initialize(steps)"),p.Sb(),p.Tb(98,"pre"),p.Ob(99,"code",13),p.Sb(),p.Sb(),p.Tb(100,"li"),p.Dc(101,"Start the tour with "),p.Tb(102,"code",17),p.Dc(103,"tourService.start()"),p.Sb(),p.Sb(),p.Tb(104,"li"),p.Dc(105,"Check out the "),p.Tb(106,"a",18),p.Dc(107,"demo source code"),p.Sb(),p.Dc(108," for an example."),p.Sb(),p.Sb(),p.Tb(109,"h4"),p.Dc(110,"Lazy loaded modules"),p.Sb(),p.Tb(111,"ol"),p.Tb(112,"li"),p.Dc(113," Add "),p.Tb(114,"code"),p.Dc(115,"<tour-step-template></tour-step-template>"),p.Sb(),p.Dc(116," to your root app component. "),p.Sb(),p.Tb(117,"li"),p.Dc(118," Import "),p.Tb(119,"code"),p.Dc(120,"TourMatMenuModule.forRoot()"),p.Sb(),p.Dc(121," into your app module. "),p.Sb(),p.Tb(122,"li"),p.Dc(123," Import "),p.Tb(124,"code"),p.Dc(125,"TourMatMenuModule"),p.Sb(),p.Dc(126," into all lazy loaded modules needing the tour. "),p.Sb(),p.Tb(127,"li"),p.Dc(128," Import the "),p.Tb(129,"code"),p.Dc(130,"TourService"),p.Sb(),p.Dc(131," in your highest level eagerly loaded component and initialize all your steps there (even the ones in the lazy loaded modules). "),p.Tb(132,"strong"),p.Dc(133,"Note:"),p.Sb(),p.Dc(134," Make sure every step object contains its route. For example, if the route to a step is '/home' then your step object should have "),p.Tb(135,"code"),p.Dc(136,"route: '/home'"),p.Sb(),p.Dc(137," as a member. "),p.Sb(),p.Tb(138,"li"),p.Dc(139," Define anchor points for your steps by adding the "),p.Tb(140,"code"),p.Dc(141,"tourAnchor"),p.Sb(),p.Dc(142," directive throughout your modules (any component that requires it at any level). "),p.Tb(143,"pre"),p.Ob(144,"code",13),p.Sb(),p.Sb(),p.Tb(145,"li"),p.Dc(146," Start the tour with "),p.Tb(147,"code"),p.Dc(148,"tourService.start()"),p.Sb(),p.Dc(149," in the same component you initialized your steps. Call this right after the initialization. "),p.Sb(),p.Tb(150,"li"),p.Dc(151,"Check out the "),p.Tb(152,"a",19),p.Dc(153,"demo source code"),p.Sb(),p.Dc(154," for an example. "),p.Sb(),p.Sb(),p.Tb(155,"h2",null,20),p.Dc(157,"TourService"),p.Sb(),p.Tb(158,"p"),p.Dc(159,"The "),p.Tb(160,"code"),p.Dc(161,"TourService"),p.Sb(),p.Dc(162," controls the tour. Some key functions include:"),p.Sb(),p.Tb(163,"table",21),p.Bc(164,T,12,6,"tr",22),p.Sb(),p.Tb(165,"h2",null,23),p.Dc(167,"Step Configuration"),p.Sb(),p.Tb(168,"p"),p.Dc(169,"Each step can have the following properties."),p.Sb(),p.Tb(170,"table",21),p.Bc(171,g,14,8,"ng-container",22),p.Sb(),p.Tb(172,"h2",null,24),p.Dc(174,"Defaults"),p.Sb(),p.Tb(175,"p"),p.Dc(176,"You can set default values in the "),p.Tb(177,"code"),p.Dc(178,"TourService.initialize"),p.Sb(),p.Dc(179," function."),p.Sb(),p.Tb(180,"pre"),p.Ob(181,"code",13),p.Sb(),p.Tb(182,"p"),p.Dc(183,"Any value explicitly defined in a step will override the default value."),p.Sb(),p.Tb(184,"h2",null,25),p.Tb(186,"span",26),p.Dc(187,"Hotkeys"),p.Sb(),p.Sb(),p.Tb(188,"p"),p.Dc(189," Hotkeys are provided using Angular's "),p.Tb(190,"code"),p.Dc(191,"@HostListener"),p.Sb(),p.Dc(192," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends. "),p.Sb(),p.Tb(193,"ul"),p.Tb(194,"li"),p.Tb(195,"strong"),p.Dc(196,"left arrow"),p.Sb(),p.Tb(197,"span"),p.Dc(198," - previous step"),p.Sb(),p.Sb(),p.Tb(199,"li"),p.Tb(200,"strong"),p.Dc(201,"right arrow"),p.Sb(),p.Tb(202,"span"),p.Dc(203," - next step"),p.Sb(),p.Sb(),p.Tb(204,"li"),p.Tb(205,"strong"),p.Dc(206,"esc"),p.Sb(),p.Tb(207,"span"),p.Dc(208," - end tour"),p.Sb(),p.Sb(),p.Sb(),p.Tb(209,"p"),p.Dc(210," You can disable hotkeys by calling "),p.Tb(211,"code"),p.Dc(212,"tourService.disableHotkeys()"),p.Sb(),p.Dc(213," or re-enable with "),p.Tb(214,"code"),p.Dc(215,"tourService.enableHotkeys()"),p.Sb(),p.Sb(),p.Tb(216,"h2",null,27),p.Tb(218,"span",28),p.Dc(219,"Event Observables"),p.Sb(),p.Sb(),p.Tb(220,"p"),p.Dc(221,"The "),p.Tb(222,"code"),p.Dc(223,"TourService"),p.Sb(),p.Dc(224," emits events that can be subscribed to like this:"),p.Sb(),p.Tb(225,"pre"),p.Ob(226,"code",13),p.Sb(),p.Tb(227,"table",21),p.Bc(228,D,13,5,"ng-container",22),p.Sb(),p.Tb(229,"h2",null,29),p.Tb(231,"span",30),p.Dc(232,"Custom template"),p.Sb(),p.Sb(),p.Tb(233,"p"),p.Dc(234," You can also customize the tour step template by providing an "),p.Tb(235,"code"),p.Dc(236,'<ng-template let-step="step" >'),p.Sb(),p.Dc(237," inside the "),p.Tb(238,"code"),p.Dc(239,"<tour-step-template>"),p.Sb(),p.Sb(),p.Tb(240,"p"),p.Dc(241," The default template is equivalent to this: "),p.Sb(),p.Tb(242,"pre"),p.Ob(243,"code",13),p.Sb(),p.Tb(244,"h2",null,31),p.Dc(246,"Styling Active Tour Anchor"),p.Sb(),p.Tb(247,"p"),p.Dc(248," The currently active tour anchor element has a "),p.Tb(249,"code"),p.Dc(250,"touranchor--is-active"),p.Sb(),p.Dc(251," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced. "),p.Sb(),p.Sb(),p.Sb()}2&t&&(p.Bb(60),p.mc("highlight",e.codeInstall)("languages",p.pc(17,B)),p.Bb(33),p.mc("highlight",e.codeTourAnchor)("languages",p.pc(18,x)),p.Bb(6),p.mc("highlight",e.codeInitialize)("languages",p.pc(19,A)),p.Bb(45),p.mc("highlight",e.codeTourAnchor)("languages",p.pc(20,x)),p.Bb(20),p.mc("ngForOf",e.tourServiceMethods),p.Bb(7),p.mc("ngForOf",e.stepConfigProperties),p.Bb(10),p.mc("highlight",e.codeInitializeDefaults)("languages",p.pc(21,A)),p.Bb(45),p.mc("highlight",e.codeEventObservables)("languages",p.pc(22,A)),p.Bb(2),p.mc("ngForOf",e.eventObservables),p.Bb(15),p.mc("highlight",e.codeTemplate)("languages",p.pc(23,x)))},directives:[c.d,a.a,s.b,i.j,i.k],pipes:[S.a],encapsulation:2}),I),O=((k=function(){function t(e,o){var r=this;n(this,t),this.tourService=e,this.eventBroker=o,this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"below",title:"Welcome"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"md-menu/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"below",title:"Route Return"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"md-menu"}),this.startTourListener=this.eventBroker.listen("start-tour",function(t){r.tourService.start()})}return e(t,[{key:"ngOnDestroy",value:function(){this.startTourListener.ignore()}}]),t}()).\u0275fac=function(t){return new(t||k)(p.Nb(a.c),p.Nb(b.a))},k.\u0275cmp=p.Hb({type:k,selectors:[["md-menu-route"]],decls:2,vars:0,template:function(t,e){1&t&&(p.Ob(0,"router-outlet"),p.Ob(1,"tour-step-template"))},directives:[c.f,a.d],encapsulation:2}),k),H=((w=function t(){n(this,t)}).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=p.Hb({type:w,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(p.Tb(0,"p"),p.Dc(1,"This is the "),p.Tb(2,"strong",0),p.Dc(3,"another"),p.Sb(),p.Dc(4," route"),p.Sb())},directives:[a.a],encapsulation:2}),w),z=((y=function t(){n(this,t)}).\u0275fac=function(t){return new(t||y)},y.\u0275mod=p.Lb({type:y}),y.\u0275inj=p.Kb({imports:[[i.b,s.c,u.a,a.b.forRoot(),c.e.forChild([{component:O,path:"",children:[{component:M,path:""},{component:H,path:"other"}]}])]]}),y)}}])}();
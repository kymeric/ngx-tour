(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QFu5:function(t,e,o){var n,r;void 0===(r="function"==typeof(n=function(){var t="undefined"!=typeof window&&void 0!==window.innerHeight,e=function e(o,n){var r,c,i,b,s,a,l,u,p,d,h,S=!1,T={},f={},m=[0,0];if("undefined"!=typeof jQuery&&o instanceof jQuery&&(o=o.get(0)),"object"!=typeof o||1!==o.nodeType)throw new Error("First argument must be an element");for(o.getAttribute("data-withinviewport-settings")&&window.JSON&&(T=JSON.parse(o.getAttribute("data-withinviewport-settings"))),f.container=(r="string"==typeof n?{sides:n}:n||{}).container||T.container||e.defaults.container||window,f.sides=r.sides||T.sides||e.defaults.sides||"all",f.top=r.top||T.top||e.defaults.top||0,f.right=r.right||T.right||e.defaults.right||0,f.bottom=r.bottom||T.bottom||e.defaults.bottom||0,f.left=r.left||T.left||e.defaults.left||0,"undefined"!=typeof jQuery&&f.container instanceof jQuery&&(f.container=f.container.get(0)),f.container!==document.body&&1===f.container.nodeType||(f.container=window),i=f.container===window,c={top:function(){return i?b.top>=f.top:b.top>=a-(a-s.top)+f.top},right:function(){return i?b.right<=s.right+l-f.right:b.right<=s.right-m[0]-f.right},bottom:function(){var e=0;return i?t?e=f.container.innerHeight:document&&document.documentElement&&(e=document.documentElement.clientHeight):e=s.bottom,b.bottom<=e-m[1]-f.bottom},left:function(){return i?b.left>=f.left:b.left>=l-(l-s.left)+f.left},all:function(){return c.top()&&c.bottom()&&c.left()&&c.right()}},b=o.getBoundingClientRect(),i?(s=document.documentElement.getBoundingClientRect(),a=document.body.scrollTop,l=window.scrollX||document.body.scrollLeft):(s=f.container.getBoundingClientRect(),a=f.container.scrollTop,l=f.container.scrollLeft),l&&(m[0]=18),a&&(m[1]=16),u=/^top$|^right$|^bottom$|^left$|^all$/,h=(p=f.sides.split(" ")).length;h--;)if(d=p[h].toLowerCase(),u.test(d)){if(!c[d]()){S=!1;break}S=!0}return S};return e.prototype.defaults={container:"undefined"!=typeof document?document.body:{},sides:"all",top:0,right:0,bottom:0,left:0},e.defaults=e.prototype.defaults,e.prototype.top=function(t){return e(t,"top")},e.prototype.right=function(t){return e(t,"right")},e.prototype.bottom=function(t){return e(t,"bottom")},e.prototype.left=function(t){return e(t,"left")},e})?n.apply(e,[]):n)||(t.exports=r)},ssdw:function(t,e,o){"use strict";o.r(e),o.d(e,"NgBootstrapModule",function(){return A});var n=o("ofXK"),r=o("tyNb"),c=o("fXoL"),i=o("SUuR"),b=o("1kSV"),s=o("QFu5"),a=o.n(s);const l=["tourStep"];function u(t,e){if(1&t){const t=c.Ub();c.Tb(0,"button",4),c.dc("click",function(){return c.wc(t),c.hc(2).tourService.prev()}),c.Cc(1),c.Sb()}if(2&t){const t=c.hc().step;c.Bb(1),c.Ec(" \xab ",null==t?null:t.prevBtnTitle," ")}}function p(t,e){if(1&t){const t=c.Ub();c.Tb(0,"button",4),c.dc("click",function(){return c.wc(t),c.hc(2).tourService.next()}),c.Cc(1),c.Sb()}if(2&t){const t=c.hc().step;c.Bb(1),c.Ec(" ",null==t?null:t.nextBtnTitle," \xbb ")}}function d(t,e){if(1&t){const t=c.Ub();c.Tb(0,"p",1),c.Cc(1),c.Sb(),c.Tb(2,"div",2),c.Ac(3,u,2,1,"button",3),c.Ac(4,p,2,1,"button",3),c.Tb(5,"button",4),c.dc("click",function(){return c.wc(t),c.hc().tourService.end()}),c.Cc(6),c.Sb(),c.Sb()}if(2&t){const t=e.step,o=c.hc();c.Bb(1),c.Dc(null==t?null:t.content),c.Bb(2),c.mc("ngIf",o.tourService.hasPrev(t)),c.Bb(1),c.mc("ngIf",o.tourService.hasNext(t)),c.Bb(2),c.Ec(" ",null==t?null:t.endBtnTitle," ")}}let h=(()=>{class t extends i.c{}return t.\u0275fac=function(e){return S(e||t)},t.\u0275prov=Object(c.Jb)({factory:function(){return new t(Object(c.ac)(r.b))},token:t,providedIn:"root"}),t})();const S=c.Vb(h);let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Jb({token:t,factory:t.\u0275fac}),t})(),f=(()=>{class t{constructor(t){this.renderer=t.createRenderer(null,null)}show(t){const e=t.nativeElement.getBoundingClientRect();this.backdropElement||(this.backdropElement=this.renderer.createElement("div"),this.renderer.addClass(this.backdropElement,"ngx-tour_backdrop"),this.renderer.appendChild(document.body,this.backdropElement)),this.setStyles(e)}close(){this.backdropElement&&(this.renderer.removeChild(document.body,this.backdropElement),this.backdropElement=null)}setStyles(t){console.log({boundingRect:t});const e={position:"fixed",width:`${t.width}px`,height:`${t.height}px`,top:`${t.top}px`,left:`${t.left}px`,"box-shadow":"0 0 0 9999px rgba(0, 0, 0, 0.7)","z-index":"100"};for(const o of Object.keys(e))this.backdropElement.style.setProperty(o,e[o])}}return t.\u0275fac=function(e){return new(e||t)(c.ac(c.G))},t.\u0275prov=c.Jb({token:t,factory:t.\u0275fac}),t})(),m=(()=>{class t extends b.a{}return t.\u0275fac=function(e){return C(e||t)},t.\u0275dir=c.Ib({type:t,selectors:[["","tourAnchor",""]],features:[c.yb]}),t})();const C=c.Vb(m);let g=(()=>{class t{constructor(t,e,o,n,r){this.tourService=t,this.tourStepTemplate=e,this.element=o,this.popoverDirective=n,this.tourBackdrop=r,this.popoverDirective.autoClose=!1,this.popoverDirective.triggers="",this.popoverDirective.toggle=()=>{}}ngOnInit(){this.tourService.register(this.tourAnchor,this)}ngOnDestroy(){this.tourService.unregister(this.tourAnchor)}showTourStep(t){this.isActive=!0,this.popoverDirective.ngbPopover=this.tourStepTemplate.template,this.popoverDirective.popoverTitle=t.title,this.popoverDirective.container="body",this.popoverDirective.placement=(t.placement||"top").replace("before","left").replace("after","right").replace("below","bottom").replace("above","top"),t.prevBtnTitle=t.prevBtnTitle||"Prev",t.nextBtnTitle=t.nextBtnTitle||"Next",t.endBtnTitle=t.endBtnTitle||"End",this.popoverDirective.open({step:t}),t.preventScrolling||(a()(this.element.nativeElement,{sides:"bottom"})?a()(this.element.nativeElement,{sides:"left top right"})||this.element.nativeElement.scrollIntoView(!0):this.element.nativeElement.scrollIntoView(!1)),t.enableBackdrop?this.tourBackdrop.show(this.element):this.tourBackdrop.close()}hideTourStep(){this.isActive=!1,this.popoverDirective.close(),this.tourBackdrop.close()}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(h),c.Nb(T),c.Nb(c.l),c.Nb(m,1),c.Nb(f))},t.\u0275dir=c.Ib({type:t,selectors:[["","tourAnchor",""]],hostVars:2,hostBindings:function(t,e){2&t&&c.Fb("touranchor--is-active",e.isActive)},inputs:{tourAnchor:"tourAnchor"}}),t})(),v=(()=>{class t extends i.a{constructor(t,e){super(e),this.tourStepTemplateService=t,this.tourService=e}ngAfterContentInit(){this.tourStepTemplateService.template=this.stepTemplate||this.stepTemplateContent||this.defaultTourStepTemplate}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(T),c.Nb(h))},t.\u0275cmp=c.Hb({type:t,selectors:[["tour-step-template"]],contentQueries:function(t,e,o){if(1&t&&c.Gb(o,c.M,1),2&t){let t;c.tc(t=c.ec())&&(e.stepTemplateContent=t.first)}},viewQuery:function(t,e){if(1&t&&c.Ic(l,3,c.M),2&t){let t;c.tc(t=c.ec())&&(e.defaultTourStepTemplate=t.first)}},inputs:{stepTemplate:"stepTemplate"},features:[c.yb],decls:2,vars:0,consts:[["tourStep",""],[1,"tour-step-content"],[1,"tour-step-navigation"],["class","btn btn-sm btn-default",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-default",3,"click"]],template:function(t,e){1&t&&c.Ac(0,d,7,4,"ng-template",null,0,c.Bc)},directives:[n.k],encapsulation:2}),t})(),y=(()=>{class t{static forRoot(){return{ngModule:t,providers:[T,i.c,h,f]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[n.b,b.b]]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Hb({type:t,selectors:[["docs"]],decls:363,vars:8,consts:[["id","installation","tourAnchor","installation"],["id","usage","tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/alvaro-octal/ngx-tour/tree/master/src/app/ng-bootstrap"],["id","tourservice"],["id","step-configuration"],[1,"table"],["tourAnchor","config.anchorId"],["tourAnchor","config.route"],["tourAnchor","config.nextStep"],["tourAnchor","config.placement.default"],["href","https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover"],["tourAnchor","config.buttons.custom"],["id","defaults"],["id","hotkeys","tourAnchor","hotkeys"],["id","event-observables","tourAnchor","events"],["id","custom-template","tourAnchor","template"],["id","styling-active-tour-anchor"]],template:function(t,e){1&t&&(c.Tb(0,"h2",0),c.Cc(1,"Installation"),c.Sb(),c.Tb(2,"ol"),c.Tb(3,"li"),c.Tb(4,"code"),c.Cc(5,"npm install @ngx-tour/core @ngx-tour/ng-bootstrap @ng-bootstrap/ng-bootstrap"),c.Sb(),c.Sb(),c.Tb(6,"li"),c.Cc(7,"Import "),c.Tb(8,"code"),c.Cc(9,"TourNgBootstrapModule.forRoot()"),c.Sb(),c.Cc(10," into your app module"),c.Sb(),c.Tb(11,"li"),c.Cc(12,"Make sure "),c.Tb(13,"code"),c.Cc(14,"RouterModule"),c.Sb(),c.Cc(15," is imported in your app module"),c.Sb(),c.Tb(16,"li"),c.Cc(17,"Include bootstrap css somehow - i.e. in your "),c.Tb(18,"code"),c.Cc(19,"index.html"),c.Sb(),c.Cc(20," add this line: "),c.Ob(21,"br"),c.Tb(22,"code"),c.Cc(23,'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">'),c.Sb(),c.Sb(),c.Sb(),c.Tb(24,"h2",1),c.Cc(25,"Usage"),c.Sb(),c.Tb(26,"ol"),c.Tb(27,"li"),c.Cc(28,"Add "),c.Tb(29,"code"),c.Cc(30,"<tour-step-template></tour-step-template>"),c.Sb(),c.Cc(31," to your root app component"),c.Sb(),c.Tb(32,"li"),c.Cc(33," Define anchor points for the tour steps by adding the "),c.Tb(34,"code"),c.Cc(35,"tourAnchor"),c.Sb(),c.Cc(36," directive throughout your app. "),c.Tb(37,"pre"),c.Tb(38,"code"),c.Cc(39,'<div tourAnchor="some.anchor.id">...</div>'),c.Sb(),c.Sb(),c.Sb(),c.Tb(40,"li"),c.Cc(41," Define your tour steps using "),c.Tb(42,"code"),c.Cc(43,"tourService.initialize(steps)"),c.Sb(),c.Tb(44,"pre"),c.Cc(45),c.Sb(),c.Sb(),c.Tb(46,"li"),c.Cc(47,"Start the tour with "),c.Tb(48,"code",2),c.Cc(49,"tourService.start()"),c.Sb(),c.Sb(),c.Tb(50,"li"),c.Cc(51,"Check out the "),c.Tb(52,"a",3),c.Cc(53,"demo source code"),c.Sb(),c.Cc(54," for an example."),c.Sb(),c.Sb(),c.Tb(55,"h2",4),c.Cc(56,"TourService"),c.Sb(),c.Tb(57,"p"),c.Cc(58,"The "),c.Tb(59,"code"),c.Cc(60,"TourService"),c.Sb(),c.Cc(61," controls the tour. Some key functions include:"),c.Sb(),c.Tb(62,"dl"),c.Tb(63,"dt"),c.Cc(64,"start()"),c.Sb(),c.Tb(65,"dd"),c.Cc(66,"Starts the tour"),c.Sb(),c.Tb(67,"dt"),c.Cc(68,"startAt(stepId: number | string)"),c.Sb(),c.Tb(69,"dd"),c.Cc(70,"Start the tour at the step with stepId or at the specified index"),c.Sb(),c.Tb(71,"dt"),c.Cc(72,"end()"),c.Sb(),c.Tb(73,"dd"),c.Cc(74,"Ends the tour"),c.Sb(),c.Tb(75,"dt"),c.Cc(76,"pause()"),c.Sb(),c.Tb(77,"dd"),c.Cc(78,"Pauses the tour"),c.Sb(),c.Tb(79,"dt"),c.Cc(80,"resume()"),c.Sb(),c.Tb(81,"dd"),c.Cc(82,"Resumes the tour"),c.Sb(),c.Tb(83,"dt"),c.Cc(84,"next()"),c.Sb(),c.Tb(85,"dd"),c.Cc(86,"Goes to the next step"),c.Sb(),c.Tb(87,"dt"),c.Cc(88,"prev()"),c.Sb(),c.Tb(89,"dd"),c.Cc(90,"Goes to the previous step"),c.Sb(),c.Sb(),c.Tb(91,"h2",5),c.Cc(92,"Step Configuration"),c.Sb(),c.Tb(93,"p"),c.Cc(94,"Each step can have the following properties."),c.Sb(),c.Tb(95,"table",6),c.Tb(96,"thead"),c.Tb(97,"tr"),c.Tb(98,"th"),c.Cc(99,"Name"),c.Sb(),c.Tb(100,"th"),c.Cc(101,"Type"),c.Sb(),c.Tb(102,"th"),c.Cc(103,"Default"),c.Sb(),c.Tb(104,"th"),c.Cc(105,"Description"),c.Sb(),c.Sb(),c.Sb(),c.Tb(106,"tbody"),c.Tb(107,"tr"),c.Tb(108,"td"),c.Cc(109,"stepId"),c.Sb(),c.Tb(110,"td"),c.Cc(111,"string"),c.Sb(),c.Tb(112,"td"),c.Cc(113,'""'),c.Sb(),c.Tb(114,"td"),c.Cc(115,"A unique identifier for the step"),c.Sb(),c.Sb(),c.Tb(116,"tr",7),c.Tb(117,"td"),c.Cc(118,"anchorId"),c.Sb(),c.Tb(119,"td"),c.Cc(120,"string"),c.Sb(),c.Tb(121,"td"),c.Cc(122,"required"),c.Sb(),c.Tb(123,"td"),c.Cc(124,"The anchor to which the step will be attached"),c.Sb(),c.Sb(),c.Tb(125,"tr"),c.Tb(126,"td"),c.Cc(127,"title"),c.Sb(),c.Tb(128,"td"),c.Cc(129,"string"),c.Sb(),c.Tb(130,"td"),c.Cc(131,'""'),c.Sb(),c.Tb(132,"td"),c.Cc(133,"The title of the tour step"),c.Sb(),c.Sb(),c.Tb(134,"tr"),c.Tb(135,"td"),c.Cc(136,"content"),c.Sb(),c.Tb(137,"td"),c.Cc(138,"string"),c.Sb(),c.Tb(139,"td"),c.Cc(140,'""'),c.Sb(),c.Tb(141,"td"),c.Cc(142,"The content text of the tour step"),c.Sb(),c.Sb(),c.Tb(143,"tr",8),c.Tb(144,"td"),c.Cc(145,"route"),c.Sb(),c.Tb(146,"td"),c.Cc(147,"string | UrlSegment[]"),c.Sb(),c.Tb(148,"td"),c.Cc(149,"undefined"),c.Sb(),c.Tb(150,"td"),c.Cc(151," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),c.Sb(),c.Sb(),c.Tb(152,"tr",9),c.Tb(153,"td"),c.Cc(154,"nextStep"),c.Sb(),c.Tb(155,"td"),c.Cc(156,"number | string"),c.Sb(),c.Tb(157,"td"),c.Cc(158,"undefined"),c.Sb(),c.Tb(159,"td"),c.Cc(160,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),c.Sb(),c.Sb(),c.Tb(161,"tr"),c.Tb(162,"td"),c.Cc(163,"prevStep"),c.Sb(),c.Tb(164,"td"),c.Cc(165,"number | string"),c.Sb(),c.Tb(166,"td"),c.Cc(167,"undefined"),c.Sb(),c.Tb(168,"td"),c.Cc(169,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),c.Sb(),c.Sb(),c.Tb(170,"tr"),c.Tb(171,"td"),c.Cc(172,"placement"),c.Sb(),c.Tb(173,"td"),c.Cc(174,'Placement of a popover accepts: "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom" and array of above values.'),c.Sb(),c.Tb(175,"td"),c.Tb(176,"span",10),c.Cc(177,"'top'"),c.Sb(),c.Sb(),c.Tb(178,"td"),c.Cc(179," Where the tour step should placed with respect to the anchor. Supports all "),c.Tb(180,"a",11),c.Cc(181,"placement options of ng bootstrap"),c.Sb(),c.Cc(182,". "),c.Sb(),c.Sb(),c.Tb(183,"tr"),c.Tb(184,"td"),c.Cc(185,"preventScrolling"),c.Sb(),c.Tb(186,"td"),c.Cc(187,"boolean"),c.Sb(),c.Tb(188,"td"),c.Cc(189,"false"),c.Sb(),c.Tb(190,"td"),c.Cc(191," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),c.Sb(),c.Sb(),c.Tb(192,"tr",12),c.Tb(193,"td"),c.Cc(194,"prevBtnTitle"),c.Sb(),c.Tb(195,"td"),c.Cc(196,"string"),c.Sb(),c.Tb(197,"td"),c.Cc(198,"false"),c.Sb(),c.Tb(199,"td"),c.Cc(200,' Sets a custom prev button title for a given step. Default is "Prev" '),c.Sb(),c.Sb(),c.Tb(201,"tr"),c.Tb(202,"td"),c.Cc(203,"nextBtnTitle"),c.Sb(),c.Tb(204,"td"),c.Cc(205,"string"),c.Sb(),c.Tb(206,"td"),c.Cc(207,"false"),c.Sb(),c.Tb(208,"td"),c.Cc(209,' Sets a custom next button title for a given step. Default is "Next" '),c.Sb(),c.Sb(),c.Tb(210,"tr"),c.Tb(211,"td"),c.Cc(212,"endBtnTitle"),c.Sb(),c.Tb(213,"td"),c.Cc(214,"string"),c.Sb(),c.Tb(215,"td"),c.Cc(216,"false"),c.Sb(),c.Tb(217,"td"),c.Cc(218,' Sets a custom end button title for a given step. Default is "End" '),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(219,"h2",13),c.Cc(220,"Defaults"),c.Sb(),c.Tb(221,"p"),c.Cc(222,"You can set default values in the "),c.Tb(223,"code"),c.Cc(224,"TourService.initialize"),c.Sb(),c.Cc(225," function."),c.Sb(),c.Tb(226,"pre"),c.Cc(227),c.Sb(),c.Tb(228,"p"),c.Cc(229,"Any value explicitly defined in a step will override the default value."),c.Sb(),c.Tb(230,"h2",14),c.Cc(231,"Hotkeys"),c.Sb(),c.Tb(232,"p"),c.Cc(233," Hotkeys are provided using Angular's "),c.Tb(234,"code"),c.Cc(235,"@HostListener"),c.Sb(),c.Cc(236," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),c.Sb(),c.Tb(237,"ul"),c.Tb(238,"li"),c.Tb(239,"strong"),c.Cc(240,"left arrow"),c.Sb(),c.Tb(241,"span"),c.Cc(242," - previous step"),c.Sb(),c.Sb(),c.Tb(243,"li"),c.Tb(244,"strong"),c.Cc(245,"right arrow"),c.Sb(),c.Tb(246,"span"),c.Cc(247," - next step"),c.Sb(),c.Sb(),c.Tb(248,"li"),c.Tb(249,"strong"),c.Cc(250,"esc"),c.Sb(),c.Tb(251,"span"),c.Cc(252," - end tour"),c.Sb(),c.Sb(),c.Sb(),c.Tb(253,"p"),c.Cc(254," You can disable hotkeys by calling "),c.Tb(255,"code"),c.Cc(256,"tourService.disableHotkeys()"),c.Sb(),c.Cc(257," or re-enable with "),c.Tb(258,"code"),c.Cc(259,"tourService.enableHotkeys()"),c.Sb(),c.Sb(),c.Tb(260,"h2",15),c.Cc(261,"Event Observables"),c.Sb(),c.Tb(262,"p"),c.Cc(263,"The "),c.Tb(264,"code"),c.Cc(265,"TourService"),c.Sb(),c.Cc(266," emits events that can be subscribed to like this:"),c.Sb(),c.Tb(267,"pre"),c.Cc(268),c.Sb(),c.Tb(269,"table",6),c.Tb(270,"thead"),c.Tb(271,"tr"),c.Tb(272,"th"),c.Cc(273,"Name"),c.Sb(),c.Tb(274,"th"),c.Cc(275,"Payload"),c.Sb(),c.Tb(276,"th"),c.Cc(277,"Emitted When"),c.Sb(),c.Sb(),c.Sb(),c.Tb(278,"tbody"),c.Tb(279,"tr"),c.Tb(280,"td"),c.Cc(281,"stepShow$"),c.Sb(),c.Tb(282,"td"),c.Cc(283,"IStepOption"),c.Sb(),c.Tb(284,"td"),c.Cc(285,"A step is shown"),c.Sb(),c.Sb(),c.Tb(286,"tr"),c.Tb(287,"td"),c.Cc(288,"stepHide$"),c.Sb(),c.Tb(289,"td"),c.Cc(290,"IStepOption"),c.Sb(),c.Tb(291,"td"),c.Cc(292,"A step is hidden"),c.Sb(),c.Sb(),c.Tb(293,"tr"),c.Tb(294,"td"),c.Cc(295,"initialize$"),c.Sb(),c.Tb(296,"td"),c.Cc(297,"IStepOption[]"),c.Sb(),c.Tb(298,"td"),c.Cc(299,"The tour is configured with a set of steps"),c.Sb(),c.Sb(),c.Tb(300,"tr"),c.Tb(301,"td"),c.Cc(302,"start$"),c.Sb(),c.Tb(303,"td"),c.Cc(304,"IStepOption"),c.Sb(),c.Tb(305,"td"),c.Cc(306,"The tour begins"),c.Sb(),c.Sb(),c.Tb(307,"tr"),c.Tb(308,"td"),c.Cc(309,"end$"),c.Sb(),c.Tb(310,"td"),c.Cc(311,"any"),c.Sb(),c.Tb(312,"td"),c.Cc(313,"The tour ends"),c.Sb(),c.Sb(),c.Tb(314,"tr"),c.Tb(315,"td"),c.Cc(316,"pause$"),c.Sb(),c.Tb(317,"td"),c.Cc(318,"IStepOption"),c.Sb(),c.Tb(319,"td"),c.Cc(320,"The tour is paused"),c.Sb(),c.Sb(),c.Tb(321,"tr"),c.Tb(322,"td"),c.Cc(323,"resume$"),c.Sb(),c.Tb(324,"td"),c.Cc(325,"IStepOption"),c.Sb(),c.Tb(326,"td"),c.Cc(327,"The tour resumes"),c.Sb(),c.Sb(),c.Tb(328,"tr"),c.Tb(329,"td"),c.Cc(330,"anchorRegister$"),c.Sb(),c.Tb(331,"td"),c.Cc(332,"string"),c.Sb(),c.Tb(333,"td"),c.Cc(334,"An anchor is registered with the tour"),c.Sb(),c.Sb(),c.Tb(335,"tr"),c.Tb(336,"td"),c.Cc(337,"anchorUnregister$"),c.Sb(),c.Tb(338,"td"),c.Cc(339,"string"),c.Sb(),c.Tb(340,"td"),c.Cc(341,"An anchor is unregistered from the tour"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(342,"h2",16),c.Cc(343,"Custom template"),c.Sb(),c.Tb(344,"p"),c.Cc(345," You can also customize the tour step template by providing an "),c.Tb(346,"code"),c.Cc(347,'<ng-template let-step="step" >'),c.Sb(),c.Cc(348," inside the "),c.Tb(349,"code"),c.Cc(350,"<tour-step-template>"),c.Sb(),c.Sb(),c.Tb(351,"p"),c.Cc(352," The default template is equivalent to this:\n"),c.Sb(),c.Tb(353,"pre"),c.Tb(354,"code"),c.Cc(355),c.Sb(),c.Sb(),c.Tb(356,"h2",17),c.Cc(357,"Styling Active Tour Anchor"),c.Sb(),c.Tb(358,"p"),c.Cc(359," The currently active tour anchor element has a "),c.Tb(360,"code"),c.Cc(361,"touranchor--is-active"),c.Sb(),c.Cc(362," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n"),c.Sb()),2&t&&(c.Bb(45),c.Fc("this.tourService.initialize([","{","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","{","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"),c.Bb(182),c.Ec("this.tourService.initialize(steps, ","{","\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n"),c.Bb(41),c.Ec("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","{","\n  console.log('tour configured with these steps:', steps);\n});\n"),c.Bb(87),c.Hc('<tour-step-template>\n  <ng-template let-step="step">\n    <p class="tour-step-content">',"{{",'step?.content}}</p>\n    <div class="tour-step-navigation">\n      <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">\xab ',"{{",'step?.prevBtnTitle}}</button>\n      <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">',"{{",'step?.nextBtnTitle}} \xbb</button>\n      <button class="btn btn-sm btn-default" (click)="tourService.end()">',"{{","step?.endBtnTitle}}</button>\n    </div>\n  </ng-template>\n</tour-step-template>\n"))},directives:[g,m],encapsulation:2}),t})(),k=(()=>{class t{constructor(t){this.tourService=t,this.tourService.events$.subscribe(console.log),this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"ng-bootstrap/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"bottom",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-top",placement:"left-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-left",placement:"top-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-right",placement:"top-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-top",placement:"right-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-bottom",placement:"right-bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-right",placement:"bottom-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-left",placement:"bottom-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-bottom",placement:"left-bottom",title:"Placement"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"ng-bootstrap"})}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(h))},t.\u0275cmp=c.Hb({type:t,selectors:[["ng-bootstrap-route"]],decls:51,vars:0,consts:[[1,"row","flex-xl-nowrap"],[1,"d-none","d-xl-block","col-xl-2"],[1,"d-none","d-xl-block","col-xl-2","bd-toc"],["id","TableOfContents"],["routerLink","./","fragment","demo"],["routerLink","./","fragment","installation"],["routerLink","./","fragment","usage"],["routerLink","./","fragment","tourservice"],["routerLink","./","fragment","step-configuration"],["routerLink","./","fragment","defaults"],["routerLink","./","fragment","hotkeys"],["routerLink","./","fragment","event-observables"],["routerLink","./","fragment","custom-template"],["routerLink","./","fragment","styling-active-tour-anchor"],[1,"col-md-9","col-xl-8","py-md-3","pl-md-5"],["href","https://ng-bootstrap.github.io"],["id","demo"],["tourAnchor","start.tour",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(c.Tb(0,"div",0),c.Ob(1,"div",1),c.Tb(2,"nav",2),c.Tb(3,"nav",3),c.Tb(4,"ul"),c.Tb(5,"li"),c.Tb(6,"a",4),c.Cc(7,"Demo"),c.Sb(),c.Sb(),c.Tb(8,"li"),c.Tb(9,"a",5),c.Cc(10,"Installation"),c.Sb(),c.Sb(),c.Tb(11,"li"),c.Tb(12,"a",6),c.Cc(13,"Usage"),c.Sb(),c.Sb(),c.Tb(14,"li"),c.Tb(15,"a",7),c.Cc(16,"TourService"),c.Sb(),c.Sb(),c.Tb(17,"li"),c.Tb(18,"a",8),c.Cc(19,"Step Configuration"),c.Sb(),c.Sb(),c.Tb(20,"li"),c.Tb(21,"a",9),c.Cc(22,"Defaults"),c.Sb(),c.Sb(),c.Tb(23,"li"),c.Tb(24,"a",10),c.Cc(25,"Hotkeys"),c.Sb(),c.Sb(),c.Tb(26,"li"),c.Tb(27,"a",11),c.Cc(28,"Event Observables"),c.Sb(),c.Sb(),c.Tb(29,"li"),c.Tb(30,"a",12),c.Cc(31,"Custom template"),c.Sb(),c.Sb(),c.Tb(32,"li"),c.Tb(33,"a",13),c.Cc(34,"Styling Active Tour Anchor"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(35,"main",14),c.Tb(36,"h1"),c.Cc(37,"@ngx-tour/ng-bootstrap"),c.Sb(),c.Tb(38,"p"),c.Tb(39,"code"),c.Cc(40,"TourNgBootstrapModule"),c.Sb(),c.Cc(41," is an implementation of the tour ui that uses "),c.Tb(42,"a",15),c.Cc(43,"NgBootstrap"),c.Sb(),c.Cc(44," popovers to display tour steps. "),c.Sb(),c.Tb(45,"h2",16),c.Cc(46,"Demo"),c.Sb(),c.Tb(47,"button",17),c.dc("click",function(){return e.tourService.toggle()}),c.Cc(48,"Start Demo Tour"),c.Sb(),c.Ob(49,"router-outlet"),c.Ob(50,"tour-step-template"),c.Sb(),c.Sb())},directives:[r.d,g,m,r.f,v],encapsulation:2}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Hb({type:t,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(c.Tb(0,"p"),c.Cc(1,"This is the "),c.Tb(2,"strong",0),c.Cc(3,"another"),c.Sb(),c.Cc(4," route"),c.Sb())},directives:[g,m],encapsulation:2}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[n.b,r.e.forChild([{component:k,path:"",children:[{component:w,path:""},{component:I,path:"other"}]}]),y.forRoot()]]}),t})()}}]);
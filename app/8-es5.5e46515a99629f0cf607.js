!function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QFu5:function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){var t="undefined"!=typeof window&&void 0!==window.innerHeight,e=function e(n,o){var r,c,i,b,s,a,u,l,p,d,h,f=!1,S={},T={},m=[0,0];if("undefined"!=typeof jQuery&&n instanceof jQuery&&(n=n.get(0)),"object"!=typeof n||1!==n.nodeType)throw new Error("First argument must be an element");for(n.getAttribute("data-withinviewport-settings")&&window.JSON&&(S=JSON.parse(n.getAttribute("data-withinviewport-settings"))),T.container=(r="string"==typeof o?{sides:o}:o||{}).container||S.container||e.defaults.container||window,T.sides=r.sides||S.sides||e.defaults.sides||"all",T.top=r.top||S.top||e.defaults.top||0,T.right=r.right||S.right||e.defaults.right||0,T.bottom=r.bottom||S.bottom||e.defaults.bottom||0,T.left=r.left||S.left||e.defaults.left||0,"undefined"!=typeof jQuery&&T.container instanceof jQuery&&(T.container=T.container.get(0)),T.container!==document.body&&1===T.container.nodeType||(T.container=window),i=T.container===window,c={top:function(){return i?b.top>=T.top:b.top>=a-(a-s.top)+T.top},right:function(){return i?b.right<=s.right+u-T.right:b.right<=s.right-m[0]-T.right},bottom:function(){var e=0;return i?t?e=T.container.innerHeight:document&&document.documentElement&&(e=document.documentElement.clientHeight):e=s.bottom,b.bottom<=e-m[1]-T.bottom},left:function(){return i?b.left>=T.left:b.left>=u-(u-s.left)+T.left},all:function(){return c.top()&&c.bottom()&&c.left()&&c.right()}},b=n.getBoundingClientRect(),i?(s=document.documentElement.getBoundingClientRect(),a=document.body.scrollTop,u=window.scrollX||document.body.scrollLeft):(s=T.container.getBoundingClientRect(),a=T.container.scrollTop,u=T.container.scrollLeft),u&&(m[0]=18),a&&(m[1]=16),l=/^top$|^right$|^bottom$|^left$|^all$/,h=(p=T.sides.split(" ")).length;h--;)if(d=p[h].toLowerCase(),l.test(d)){if(!c[d]()){f=!1;break}f=!0}return f};return e.prototype.defaults={container:"undefined"!=typeof document?document.body:{},sides:"all",top:0,right:0,bottom:0,left:0},e.defaults=e.prototype.defaults,e.prototype.top=function(t){return e(t,"top")},e.prototype.right=function(t){return e(t,"right")},e.prototype.bottom=function(t){return e(t,"bottom")},e.prototype.left=function(t){return e(t,"left")},e})?o.apply(e,[]):o)||(t.exports=r)},ssdw:function(t,r,i){"use strict";i.r(r),i.d(r,"NgBootstrapModule",function(){return J});var b=i("ofXK"),s=i("tyNb"),a=i("fXoL"),u=i("SUuR"),l=i("1kSV"),p=i("QFu5"),d=i.n(p),h=["tourStep"];function f(t,e){if(1&t){var n=a.Ub();a.Tb(0,"button",4),a.dc("click",function(){return a.wc(n),a.hc(2).tourService.prev()}),a.Cc(1),a.Sb()}if(2&t){var o=a.hc().step;a.Bb(1),a.Ec(" \xab ",null==o?null:o.prevBtnTitle," ")}}function S(t,e){if(1&t){var n=a.Ub();a.Tb(0,"button",4),a.dc("click",function(){return a.wc(n),a.hc(2).tourService.next()}),a.Cc(1),a.Sb()}if(2&t){var o=a.hc().step;a.Bb(1),a.Ec(" ",null==o?null:o.nextBtnTitle," \xbb ")}}function T(t,e){if(1&t){var n=a.Ub();a.Tb(0,"p",1),a.Cc(1),a.Sb(),a.Tb(2,"div",2),a.Ac(3,f,2,1,"button",3),a.Ac(4,S,2,1,"button",3),a.Tb(5,"button",4),a.dc("click",function(){return a.wc(n),a.hc().tourService.end()}),a.Cc(6),a.Sb(),a.Sb()}if(2&t){var o=e.step,r=a.hc();a.Bb(1),a.Dc(null==o?null:o.content),a.Bb(2),a.mc("ngIf",r.tourService.hasPrev(o)),a.Bb(1),a.mc("ngIf",r.tourService.hasNext(o)),a.Bb(2),a.Ec(" ",null==o?null:o.endBtnTitle," ")}}var m,C,g,v,y,w,k,I,A,B,x,E=((m=function(t){o(r,t);var e=c(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(u.c)).\u0275fac=function(t){return O(t||m)},m.\u0275prov=Object(a.Jb)({factory:function(){return new m(Object(a.ac)(s.b))},token:m,providedIn:"root"}),m),O=a.Vb(E),P=((v=function t(){n(this,t)}).\u0275fac=function(t){return new(t||v)},v.\u0275prov=a.Jb({token:v,factory:v.\u0275fac}),v),N=((g=function(){function t(e){n(this,t),this.renderer=e.createRenderer(null,null)}return e(t,[{key:"show",value:function(t){var e=t.nativeElement.getBoundingClientRect();this.backdropElement||(this.backdropElement=this.renderer.createElement("div"),this.renderer.addClass(this.backdropElement,"ngx-tour_backdrop"),this.renderer.appendChild(document.body,this.backdropElement)),this.setStyles(e)}},{key:"close",value:function(){this.backdropElement&&(this.renderer.removeChild(document.body,this.backdropElement),this.backdropElement=null)}},{key:"setStyles",value:function(t){console.log({boundingRect:t});for(var e={position:"fixed",width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),top:"".concat(t.top,"px"),left:"".concat(t.left,"px"),"box-shadow":"0 0 0 9999px rgba(0, 0, 0, 0.7)","z-index":"100"},n=0,o=Object.keys(e);n<o.length;n++){var r=o[n];this.backdropElement.style.setProperty(r,e[r])}}}]),t}()).\u0275fac=function(t){return new(t||g)(a.ac(a.G))},g.\u0275prov=a.Jb({token:g,factory:g.\u0275fac}),g),D=((C=function(t){o(r,t);var e=c(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(l.a)).\u0275fac=function(t){return R(t||C)},C.\u0275dir=a.Ib({type:C,selectors:[["","tourAnchor",""]],features:[a.yb]}),C),R=a.Vb(D),j=((x=function(){function t(e,o,r,c,i){n(this,t),this.tourService=e,this.tourStepTemplate=o,this.element=r,this.popoverDirective=c,this.tourBackdrop=i,this.popoverDirective.autoClose=!1,this.popoverDirective.triggers="",this.popoverDirective.toggle=function(){}}return e(t,[{key:"ngOnInit",value:function(){this.tourService.register(this.tourAnchor,this)}},{key:"ngOnDestroy",value:function(){this.tourService.unregister(this.tourAnchor)}},{key:"showTourStep",value:function(t){this.isActive=!0,this.popoverDirective.ngbPopover=this.tourStepTemplate.template,this.popoverDirective.popoverTitle=t.title,this.popoverDirective.container="body",this.popoverDirective.placement=(t.placement||"top").replace("before","left").replace("after","right").replace("below","bottom").replace("above","top"),t.prevBtnTitle=t.prevBtnTitle||"Prev",t.nextBtnTitle=t.nextBtnTitle||"Next",t.endBtnTitle=t.endBtnTitle||"End",this.popoverDirective.open({step:t}),t.preventScrolling||(d()(this.element.nativeElement,{sides:"bottom"})?d()(this.element.nativeElement,{sides:"left top right"})||this.element.nativeElement.scrollIntoView(!0):this.element.nativeElement.scrollIntoView(!1)),t.enableBackdrop?this.tourBackdrop.show(this.element):this.tourBackdrop.close()}},{key:"hideTourStep",value:function(){this.isActive=!1,this.popoverDirective.close(),this.tourBackdrop.close()}}]),t}()).\u0275fac=function(t){return new(t||x)(a.Nb(E),a.Nb(P),a.Nb(a.l),a.Nb(D,1),a.Nb(N))},x.\u0275dir=a.Ib({type:x,selectors:[["","tourAnchor",""]],hostVars:2,hostBindings:function(t,e){2&t&&a.Fb("touranchor--is-active",e.isActive)},inputs:{tourAnchor:"tourAnchor"}}),x),H=((B=function(t){o(i,t);var r=c(i);function i(t,e){var o;return n(this,i),(o=r.call(this,e)).tourStepTemplateService=t,o.tourService=e,o}return e(i,[{key:"ngAfterContentInit",value:function(){this.tourStepTemplateService.template=this.stepTemplate||this.stepTemplateContent||this.defaultTourStepTemplate}}]),i}(u.a)).\u0275fac=function(t){return new(t||B)(a.Nb(P),a.Nb(E))},B.\u0275cmp=a.Hb({type:B,selectors:[["tour-step-template"]],contentQueries:function(t,e,n){var o;1&t&&a.Gb(n,a.M,1),2&t&&a.tc(o=a.ec())&&(e.stepTemplateContent=o.first)},viewQuery:function(t,e){var n;1&t&&a.Ic(h,3,a.M),2&t&&a.tc(n=a.ec())&&(e.defaultTourStepTemplate=n.first)},inputs:{stepTemplate:"stepTemplate"},features:[a.yb],decls:2,vars:0,consts:[["tourStep",""],[1,"tour-step-content"],[1,"tour-step-navigation"],["class","btn btn-sm btn-default",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-default",3,"click"]],template:function(t,e){1&t&&a.Ac(0,T,7,4,"ng-template",null,0,a.Bc)},directives:[b.k],encapsulation:2}),B),$=((A=function(){function t(){n(this,t)}return e(t,null,[{key:"forRoot",value:function(){return{ngModule:t,providers:[P,u.c,E,N]}}}]),t}()).\u0275fac=function(t){return new(t||A)},A.\u0275mod=a.Lb({type:A}),A.\u0275inj=a.Kb({imports:[[b.b,l.b]]}),A),M=((I=function t(){n(this,t)}).\u0275fac=function(t){return new(t||I)},I.\u0275cmp=a.Hb({type:I,selectors:[["docs"]],decls:363,vars:8,consts:[["tourAnchor","installation"],["tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/isaacplmann/ngx-tour/tree/master/src/app/ng-bootstrap"],[1,"table"],["tourAnchor","config.anchorId"],["tourAnchor","config.route"],["tourAnchor","config.nextStep"],["tourAnchor","config.placement.default"],["href","https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover"],["tourAnchor","config.buttons.custom"],["tourAnchor","hotkeys"],["tourAnchor","events"],["tourAnchor","template"]],template:function(t,e){1&t&&(a.Tb(0,"h2",0),a.Cc(1,"Installation"),a.Sb(),a.Tb(2,"ol"),a.Tb(3,"li"),a.Tb(4,"code"),a.Cc(5,"npm install ngx-tour-core ngx-tour-ng-bootstrap @ng-bootstrap/ng-bootstrap"),a.Sb(),a.Sb(),a.Tb(6,"li"),a.Cc(7,"Import "),a.Tb(8,"code"),a.Cc(9,"TourNgBootstrapModule.forRoot()"),a.Sb(),a.Cc(10," into your app module"),a.Sb(),a.Tb(11,"li"),a.Cc(12,"Make sure "),a.Tb(13,"code"),a.Cc(14,"RouterModule"),a.Sb(),a.Cc(15," is imported in your app module"),a.Sb(),a.Tb(16,"li"),a.Cc(17,"Include bootstrap css somehow - i.e. in your "),a.Tb(18,"code"),a.Cc(19,"index.html"),a.Sb(),a.Cc(20," add this line: "),a.Ob(21,"br"),a.Tb(22,"code"),a.Cc(23,'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">'),a.Sb(),a.Sb(),a.Sb(),a.Tb(24,"h2",1),a.Cc(25,"Usage"),a.Sb(),a.Tb(26,"ol"),a.Tb(27,"li"),a.Cc(28,"Add "),a.Tb(29,"code"),a.Cc(30,"<tour-step-template></tour-step-template>"),a.Sb(),a.Cc(31," to your root app component"),a.Sb(),a.Tb(32,"li"),a.Cc(33," Define anchor points for the tour steps by adding the "),a.Tb(34,"code"),a.Cc(35,"tourAnchor"),a.Sb(),a.Cc(36," directive throughout your app. "),a.Tb(37,"pre"),a.Tb(38,"code"),a.Cc(39,'<div tourAnchor="some.anchor.id">...</div>'),a.Sb(),a.Sb(),a.Sb(),a.Tb(40,"li"),a.Cc(41," Define your tour steps using "),a.Tb(42,"code"),a.Cc(43,"tourService.initialize(steps)"),a.Sb(),a.Tb(44,"pre"),a.Cc(45),a.Sb(),a.Sb(),a.Tb(46,"li"),a.Cc(47,"Start the tour with "),a.Tb(48,"code",2),a.Cc(49,"tourService.start()"),a.Sb(),a.Sb(),a.Tb(50,"li"),a.Cc(51,"Check out the "),a.Tb(52,"a",3),a.Cc(53,"demo source code"),a.Sb(),a.Cc(54," for an example."),a.Sb(),a.Sb(),a.Tb(55,"h2"),a.Cc(56,"TourService"),a.Sb(),a.Tb(57,"p"),a.Cc(58,"The "),a.Tb(59,"code"),a.Cc(60,"TourService"),a.Sb(),a.Cc(61," controls the tour. Some key functions include:"),a.Sb(),a.Tb(62,"dl"),a.Tb(63,"dt"),a.Cc(64,"start()"),a.Sb(),a.Tb(65,"dd"),a.Cc(66,"Starts the tour"),a.Sb(),a.Tb(67,"dt"),a.Cc(68,"startAt(stepId: number | string)"),a.Sb(),a.Tb(69,"dd"),a.Cc(70,"Start the tour at the step with stepId or at the specified index"),a.Sb(),a.Tb(71,"dt"),a.Cc(72,"end()"),a.Sb(),a.Tb(73,"dd"),a.Cc(74,"Ends the tour"),a.Sb(),a.Tb(75,"dt"),a.Cc(76,"pause()"),a.Sb(),a.Tb(77,"dd"),a.Cc(78,"Pauses the tour"),a.Sb(),a.Tb(79,"dt"),a.Cc(80,"resume()"),a.Sb(),a.Tb(81,"dd"),a.Cc(82,"Resumes the tour"),a.Sb(),a.Tb(83,"dt"),a.Cc(84,"next()"),a.Sb(),a.Tb(85,"dd"),a.Cc(86,"Goes to the next step"),a.Sb(),a.Tb(87,"dt"),a.Cc(88,"prev()"),a.Sb(),a.Tb(89,"dd"),a.Cc(90,"Goes to the previous step"),a.Sb(),a.Sb(),a.Tb(91,"h2"),a.Cc(92,"Step Configuration"),a.Sb(),a.Tb(93,"p"),a.Cc(94,"Each step can have the following properties."),a.Sb(),a.Tb(95,"table",4),a.Tb(96,"thead"),a.Tb(97,"tr"),a.Tb(98,"th"),a.Cc(99,"Name"),a.Sb(),a.Tb(100,"th"),a.Cc(101,"Type"),a.Sb(),a.Tb(102,"th"),a.Cc(103,"Default"),a.Sb(),a.Tb(104,"th"),a.Cc(105,"Description"),a.Sb(),a.Sb(),a.Sb(),a.Tb(106,"tbody"),a.Tb(107,"tr"),a.Tb(108,"td"),a.Cc(109,"stepId"),a.Sb(),a.Tb(110,"td"),a.Cc(111,"string"),a.Sb(),a.Tb(112,"td"),a.Cc(113,'""'),a.Sb(),a.Tb(114,"td"),a.Cc(115,"A unique identifier for the step"),a.Sb(),a.Sb(),a.Tb(116,"tr",5),a.Tb(117,"td"),a.Cc(118,"anchorId"),a.Sb(),a.Tb(119,"td"),a.Cc(120,"string"),a.Sb(),a.Tb(121,"td"),a.Cc(122,"required"),a.Sb(),a.Tb(123,"td"),a.Cc(124,"The anchor to which the step will be attached"),a.Sb(),a.Sb(),a.Tb(125,"tr"),a.Tb(126,"td"),a.Cc(127,"title"),a.Sb(),a.Tb(128,"td"),a.Cc(129,"string"),a.Sb(),a.Tb(130,"td"),a.Cc(131,'""'),a.Sb(),a.Tb(132,"td"),a.Cc(133,"The title of the tour step"),a.Sb(),a.Sb(),a.Tb(134,"tr"),a.Tb(135,"td"),a.Cc(136,"content"),a.Sb(),a.Tb(137,"td"),a.Cc(138,"string"),a.Sb(),a.Tb(139,"td"),a.Cc(140,'""'),a.Sb(),a.Tb(141,"td"),a.Cc(142,"The content text of the tour step"),a.Sb(),a.Sb(),a.Tb(143,"tr",6),a.Tb(144,"td"),a.Cc(145,"route"),a.Sb(),a.Tb(146,"td"),a.Cc(147,"string | UrlSegment[]"),a.Sb(),a.Tb(148,"td"),a.Cc(149,"undefined"),a.Sb(),a.Tb(150,"td"),a.Cc(151," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),a.Sb(),a.Sb(),a.Tb(152,"tr",7),a.Tb(153,"td"),a.Cc(154,"nextStep"),a.Sb(),a.Tb(155,"td"),a.Cc(156,"number | string"),a.Sb(),a.Tb(157,"td"),a.Cc(158,"undefined"),a.Sb(),a.Tb(159,"td"),a.Cc(160,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),a.Sb(),a.Sb(),a.Tb(161,"tr"),a.Tb(162,"td"),a.Cc(163,"prevStep"),a.Sb(),a.Tb(164,"td"),a.Cc(165,"number | string"),a.Sb(),a.Tb(166,"td"),a.Cc(167,"undefined"),a.Sb(),a.Tb(168,"td"),a.Cc(169,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),a.Sb(),a.Sb(),a.Tb(170,"tr"),a.Tb(171,"td"),a.Cc(172,"placement"),a.Sb(),a.Tb(173,"td"),a.Cc(174,'Placement of a popover accepts: "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom" and array of above values.'),a.Sb(),a.Tb(175,"td"),a.Tb(176,"span",8),a.Cc(177,"'top'"),a.Sb(),a.Sb(),a.Tb(178,"td"),a.Cc(179," Where the tour step should placed with respect to the anchor. Supports all "),a.Tb(180,"a",9),a.Cc(181,"placement options of ng bootstrap"),a.Sb(),a.Cc(182,". "),a.Sb(),a.Sb(),a.Tb(183,"tr"),a.Tb(184,"td"),a.Cc(185,"preventScrolling"),a.Sb(),a.Tb(186,"td"),a.Cc(187,"boolean"),a.Sb(),a.Tb(188,"td"),a.Cc(189,"false"),a.Sb(),a.Tb(190,"td"),a.Cc(191," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),a.Sb(),a.Sb(),a.Tb(192,"tr",10),a.Tb(193,"td"),a.Cc(194,"prevBtnTitle"),a.Sb(),a.Tb(195,"td"),a.Cc(196,"string"),a.Sb(),a.Tb(197,"td"),a.Cc(198,"false"),a.Sb(),a.Tb(199,"td"),a.Cc(200,' Sets a custom prev button title for a given step. Default is "Prev" '),a.Sb(),a.Sb(),a.Tb(201,"tr"),a.Tb(202,"td"),a.Cc(203,"nextBtnTitle"),a.Sb(),a.Tb(204,"td"),a.Cc(205,"string"),a.Sb(),a.Tb(206,"td"),a.Cc(207,"false"),a.Sb(),a.Tb(208,"td"),a.Cc(209,' Sets a custom next button title for a given step. Default is "Next" '),a.Sb(),a.Sb(),a.Tb(210,"tr"),a.Tb(211,"td"),a.Cc(212,"endBtnTitle"),a.Sb(),a.Tb(213,"td"),a.Cc(214,"string"),a.Sb(),a.Tb(215,"td"),a.Cc(216,"false"),a.Sb(),a.Tb(217,"td"),a.Cc(218,' Sets a custom end button title for a given step. Default is "End" '),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(219,"h2"),a.Cc(220,"Defaults"),a.Sb(),a.Tb(221,"p"),a.Cc(222,"You can set default values in the "),a.Tb(223,"code"),a.Cc(224,"TourService.initialize"),a.Sb(),a.Cc(225," function."),a.Sb(),a.Tb(226,"pre"),a.Cc(227),a.Sb(),a.Tb(228,"p"),a.Cc(229,"Any value explicitly defined in a step will override the default value."),a.Sb(),a.Tb(230,"h2",11),a.Cc(231,"Hotkeys"),a.Sb(),a.Tb(232,"p"),a.Cc(233," Hotkeys are provided using Angular's "),a.Tb(234,"code"),a.Cc(235,"@HostListener"),a.Sb(),a.Cc(236," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),a.Sb(),a.Tb(237,"ul"),a.Tb(238,"li"),a.Tb(239,"strong"),a.Cc(240,"left arrow"),a.Sb(),a.Tb(241,"span"),a.Cc(242," - previous step"),a.Sb(),a.Sb(),a.Tb(243,"li"),a.Tb(244,"strong"),a.Cc(245,"right arrow"),a.Sb(),a.Tb(246,"span"),a.Cc(247," - next step"),a.Sb(),a.Sb(),a.Tb(248,"li"),a.Tb(249,"strong"),a.Cc(250,"esc"),a.Sb(),a.Tb(251,"span"),a.Cc(252," - end tour"),a.Sb(),a.Sb(),a.Sb(),a.Tb(253,"p"),a.Cc(254," You can disable hotkeys by calling "),a.Tb(255,"code"),a.Cc(256,"tourService.disableHotkeys()"),a.Sb(),a.Cc(257," or re-enable with "),a.Tb(258,"code"),a.Cc(259,"tourService.enableHotkeys()"),a.Sb(),a.Sb(),a.Tb(260,"h2",12),a.Cc(261,"Event Observables"),a.Sb(),a.Tb(262,"p"),a.Cc(263,"The "),a.Tb(264,"code"),a.Cc(265,"TourService"),a.Sb(),a.Cc(266," emits events that can be subscribed to like this:"),a.Sb(),a.Tb(267,"pre"),a.Cc(268),a.Sb(),a.Tb(269,"table",4),a.Tb(270,"thead"),a.Tb(271,"tr"),a.Tb(272,"th"),a.Cc(273,"Name"),a.Sb(),a.Tb(274,"th"),a.Cc(275,"Payload"),a.Sb(),a.Tb(276,"th"),a.Cc(277,"Emitted When"),a.Sb(),a.Sb(),a.Sb(),a.Tb(278,"tbody"),a.Tb(279,"tr"),a.Tb(280,"td"),a.Cc(281,"stepShow$"),a.Sb(),a.Tb(282,"td"),a.Cc(283,"IStepOption"),a.Sb(),a.Tb(284,"td"),a.Cc(285,"A step is shown"),a.Sb(),a.Sb(),a.Tb(286,"tr"),a.Tb(287,"td"),a.Cc(288,"stepHide$"),a.Sb(),a.Tb(289,"td"),a.Cc(290,"IStepOption"),a.Sb(),a.Tb(291,"td"),a.Cc(292,"A step is hidden"),a.Sb(),a.Sb(),a.Tb(293,"tr"),a.Tb(294,"td"),a.Cc(295,"initialize$"),a.Sb(),a.Tb(296,"td"),a.Cc(297,"IStepOption[]"),a.Sb(),a.Tb(298,"td"),a.Cc(299,"The tour is configured with a set of steps"),a.Sb(),a.Sb(),a.Tb(300,"tr"),a.Tb(301,"td"),a.Cc(302,"start$"),a.Sb(),a.Tb(303,"td"),a.Cc(304,"IStepOption"),a.Sb(),a.Tb(305,"td"),a.Cc(306,"The tour begins"),a.Sb(),a.Sb(),a.Tb(307,"tr"),a.Tb(308,"td"),a.Cc(309,"end$"),a.Sb(),a.Tb(310,"td"),a.Cc(311,"any"),a.Sb(),a.Tb(312,"td"),a.Cc(313,"The tour ends"),a.Sb(),a.Sb(),a.Tb(314,"tr"),a.Tb(315,"td"),a.Cc(316,"pause$"),a.Sb(),a.Tb(317,"td"),a.Cc(318,"IStepOption"),a.Sb(),a.Tb(319,"td"),a.Cc(320,"The tour is paused"),a.Sb(),a.Sb(),a.Tb(321,"tr"),a.Tb(322,"td"),a.Cc(323,"resume$"),a.Sb(),a.Tb(324,"td"),a.Cc(325,"IStepOption"),a.Sb(),a.Tb(326,"td"),a.Cc(327,"The tour resumes"),a.Sb(),a.Sb(),a.Tb(328,"tr"),a.Tb(329,"td"),a.Cc(330,"anchorRegister$"),a.Sb(),a.Tb(331,"td"),a.Cc(332,"string"),a.Sb(),a.Tb(333,"td"),a.Cc(334,"An anchor is registered with the tour"),a.Sb(),a.Sb(),a.Tb(335,"tr"),a.Tb(336,"td"),a.Cc(337,"anchorUnregister$"),a.Sb(),a.Tb(338,"td"),a.Cc(339,"string"),a.Sb(),a.Tb(340,"td"),a.Cc(341,"An anchor is unregistered from the tour"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(342,"h2",13),a.Cc(343,"Custom template"),a.Sb(),a.Tb(344,"p"),a.Cc(345," You can also customize the tour step template by providing an "),a.Tb(346,"code"),a.Cc(347,'<ng-template let-step="step" >'),a.Sb(),a.Cc(348," inside the "),a.Tb(349,"code"),a.Cc(350,"<tour-step-template>"),a.Sb(),a.Sb(),a.Tb(351,"p"),a.Cc(352," The default template is equivalent to this:\n"),a.Sb(),a.Tb(353,"pre"),a.Tb(354,"code"),a.Cc(355),a.Sb(),a.Sb(),a.Tb(356,"h2"),a.Cc(357,"Styling Active Tour Anchor"),a.Sb(),a.Tb(358,"p"),a.Cc(359," The currently active tour anchor element has a "),a.Tb(360,"code"),a.Cc(361,"touranchor--is-active"),a.Sb(),a.Cc(362," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n"),a.Sb()),2&t&&(a.Bb(45),a.Fc("this.tourService.initialize([","{","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","{","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"),a.Bb(182),a.Ec("this.tourService.initialize(steps, ","{","\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n"),a.Bb(41),a.Ec("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","{","\n  console.log('tour configured with these steps:', steps);\n});\n"),a.Bb(87),a.Hc('<tour-step-template>\n  <ng-template let-step="step">\n    <p class="tour-step-content">',"{{",'step?.content}}</p>\n    <div class="tour-step-navigation">\n      <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">\xab ',"{{",'step?.prevBtnTitle}}</button>\n      <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">',"{{",'step?.nextBtnTitle}} \xbb</button>\n      <button class="btn btn-sm btn-default" (click)="tourService.end()">',"{{","step?.endBtnTitle}}</button>\n    </div>\n  </ng-template>\n</tour-step-template>\n"))},directives:[j,D],encapsulation:2}),I),z=((k=function t(e){n(this,t),this.tourService=e,this.tourService.events$.subscribe(console.log),this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"ng-bootstrap/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"bottom",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-top",placement:"left-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-left",placement:"top-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-right",placement:"top-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-top",placement:"right-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-bottom",placement:"right-bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-right",placement:"bottom-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-left",placement:"bottom-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-bottom",placement:"left-bottom",title:"Placement"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"ng-bootstrap"})}).\u0275fac=function(t){return new(t||k)(a.Nb(E))},k.\u0275cmp=a.Hb({type:k,selectors:[["ng-bootstrap-route"]],decls:15,vars:0,consts:[["href","https://ng-bootstrap.github.io"],["tourAnchor","start.tour",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(a.Tb(0,"h1"),a.Cc(1,"@ngx-tour/ng-bootstrap"),a.Sb(),a.Tb(2,"p"),a.Tb(3,"code"),a.Cc(4,"TourNgBootstrapModule"),a.Sb(),a.Cc(5," is an implementation of the tour ui that uses "),a.Tb(6,"a",0),a.Cc(7,"NgBootstrap"),a.Sb(),a.Cc(8," popovers to display tour steps.\n"),a.Sb(),a.Tb(9,"h2"),a.Cc(10,"Demo"),a.Sb(),a.Tb(11,"button",1),a.dc("click",function(){return e.tourService.toggle()}),a.Cc(12,"Start Demo Tour"),a.Sb(),a.Ob(13,"router-outlet"),a.Ob(14,"tour-step-template"))},directives:[j,D,s.f,H],encapsulation:2}),k),F=((w=function t(){n(this,t)}).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=a.Hb({type:w,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(a.Tb(0,"p"),a.Cc(1,"This is the "),a.Tb(2,"strong",0),a.Cc(3,"another"),a.Sb(),a.Cc(4," route"),a.Sb())},directives:[j,D],encapsulation:2}),w),J=((y=function t(){n(this,t)}).\u0275fac=function(t){return new(t||y)},y.\u0275mod=a.Lb({type:y}),y.\u0275inj=a.Kb({imports:[[b.b,s.e.forChild([{component:z,path:"",children:[{component:M,path:""},{component:F,path:"other"}]}]),$.forRoot()]]}),y)}}])}();
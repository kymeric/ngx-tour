!function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{QFu5:function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){var t="undefined"!=typeof window&&void 0!==window.innerHeight,e=function e(n,o){var r,c,i,b,s,a,l,u,p,d,h,f=!1,S={},T={},m=[0,0];if("undefined"!=typeof jQuery&&n instanceof jQuery&&(n=n.get(0)),"object"!=typeof n||1!==n.nodeType)throw new Error("First argument must be an element");for(n.getAttribute("data-withinviewport-settings")&&window.JSON&&(S=JSON.parse(n.getAttribute("data-withinviewport-settings"))),T.container=(r="string"==typeof o?{sides:o}:o||{}).container||S.container||e.defaults.container||window,T.sides=r.sides||S.sides||e.defaults.sides||"all",T.top=r.top||S.top||e.defaults.top||0,T.right=r.right||S.right||e.defaults.right||0,T.bottom=r.bottom||S.bottom||e.defaults.bottom||0,T.left=r.left||S.left||e.defaults.left||0,"undefined"!=typeof jQuery&&T.container instanceof jQuery&&(T.container=T.container.get(0)),T.container!==document.body&&1===T.container.nodeType||(T.container=window),i=T.container===window,c={top:function(){return i?b.top>=T.top:b.top>=a-(a-s.top)+T.top},right:function(){return i?b.right<=s.right+l-T.right:b.right<=s.right-m[0]-T.right},bottom:function(){var e=0;return i?t?e=T.container.innerHeight:document&&document.documentElement&&(e=document.documentElement.clientHeight):e=s.bottom,b.bottom<=e-m[1]-T.bottom},left:function(){return i?b.left>=T.left:b.left>=l-(l-s.left)+T.left},all:function(){return c.top()&&c.bottom()&&c.left()&&c.right()}},b=n.getBoundingClientRect(),i?(s=document.documentElement.getBoundingClientRect(),a=document.body.scrollTop,l=window.scrollX||document.body.scrollLeft):(s=T.container.getBoundingClientRect(),a=T.container.scrollTop,l=T.container.scrollLeft),l&&(m[0]=18),a&&(m[1]=16),u=/^top$|^right$|^bottom$|^left$|^all$/,h=(p=T.sides.split(" ")).length;h--;)if(d=p[h].toLowerCase(),u.test(d)){if(!c[d]()){f=!1;break}f=!0}return f};return e.prototype.defaults={container:"undefined"!=typeof document?document.body:{},sides:"all",top:0,right:0,bottom:0,left:0},e.defaults=e.prototype.defaults,e.prototype.top=function(t){return e(t,"top")},e.prototype.right=function(t){return e(t,"right")},e.prototype.bottom=function(t){return e(t,"bottom")},e.prototype.left=function(t){return e(t,"left")},e})?o.apply(e,[]):o)||(t.exports=r)},ssdw:function(t,r,i){"use strict";i.r(r),i.d(r,"NgBootstrapModule",function(){return _});var b=i("ofXK"),s=i("tyNb"),a=i("fXoL"),l=i("SUuR"),u=i("1kSV"),p=i("QFu5"),d=i.n(p),h=["tourStep"];function f(t,e){if(1&t){var n=a.Ub();a.Tb(0,"button",4),a.dc("click",function(){return a.wc(n),a.hc(2).tourService.prev()}),a.Dc(1),a.Sb()}if(2&t){var o=a.hc().step;a.Bb(1),a.Fc(" \xab ",null==o?null:o.prevBtnTitle," ")}}function S(t,e){if(1&t){var n=a.Ub();a.Tb(0,"button",4),a.dc("click",function(){return a.wc(n),a.hc(2).tourService.next()}),a.Dc(1),a.Sb()}if(2&t){var o=a.hc().step;a.Bb(1),a.Fc(" ",null==o?null:o.nextBtnTitle," \xbb ")}}function T(t,e){if(1&t){var n=a.Ub();a.Tb(0,"p",1),a.Dc(1),a.Sb(),a.Tb(2,"div",2),a.Bc(3,f,2,1,"button",3),a.Bc(4,S,2,1,"button",3),a.Tb(5,"button",4),a.dc("click",function(){return a.wc(n),a.hc().tourService.end()}),a.Dc(6),a.Sb(),a.Sb()}if(2&t){var o=e.step,r=a.hc();a.Bb(1),a.Ec(null==o?null:o.content),a.Bb(2),a.mc("ngIf",r.tourService.hasPrev(o)),a.Bb(1),a.mc("ngIf",r.tourService.hasNext(o)),a.Bb(2),a.Fc(" ",null==o?null:o.endBtnTitle," ")}}var m,g,v,D,y,w,k,I,x,A,B,O=((m=function(t){o(r,t);var e=c(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(l.c)).\u0275fac=function(t){return E(t||m)},m.\u0275prov=Object(a.Jb)({factory:function(){return new m(Object(a.ac)(s.b))},token:m,providedIn:"root"}),m),E=a.Vb(O),P=((D=function t(){n(this,t)}).\u0275fac=function(t){return new(t||D)},D.\u0275prov=a.Jb({token:D,factory:D.\u0275fac}),D),N=((v=function(){function t(e){n(this,t),this.renderer=e.createRenderer(null,null)}return e(t,[{key:"show",value:function(t){var e=t.nativeElement.getBoundingClientRect();this.backdropElement||(this.backdropElement=this.renderer.createElement("div"),this.renderer.addClass(this.backdropElement,"ngx-tour_backdrop"),this.renderer.appendChild(document.body,this.backdropElement)),this.setStyles(e)}},{key:"close",value:function(){this.backdropElement&&(this.renderer.removeChild(document.body,this.backdropElement),this.backdropElement=null)}},{key:"setStyles",value:function(t){console.log({boundingRect:t});for(var e={position:"fixed",width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),top:"".concat(t.top,"px"),left:"".concat(t.left,"px"),"box-shadow":"0 0 0 9999px rgba(0, 0, 0, 0.7)","z-index":"100"},n=0,o=Object.keys(e);n<o.length;n++){var r=o[n];this.backdropElement.style.setProperty(r,e[r])}}}]),t}()).\u0275fac=function(t){return new(t||v)(a.ac(a.G))},v.\u0275prov=a.Jb({token:v,factory:v.\u0275fac}),v),R=((g=function(t){o(r,t);var e=c(r);function r(){return n(this,r),e.apply(this,arguments)}return r}(u.a)).\u0275fac=function(t){return j(t||g)},g.\u0275dir=a.Ib({type:g,selectors:[["","tourAnchor",""]],features:[a.yb]}),g),j=a.Vb(R),C=((k=function(){function t(e,o,r,c,i){n(this,t),this.tourService=e,this.tourStepTemplate=o,this.element=r,this.popoverDirective=c,this.tourBackdrop=i,this.popoverDirective.autoClose=!1,this.popoverDirective.triggers="",this.popoverDirective.toggle=function(){}}return e(t,[{key:"ngOnInit",value:function(){this.tourService.register(this.tourAnchor,this)}},{key:"ngOnDestroy",value:function(){this.tourService.unregister(this.tourAnchor)}},{key:"showTourStep",value:function(t){this.isActive=!0,this.popoverDirective.ngbPopover=this.tourStepTemplate.template,this.popoverDirective.popoverTitle=t.title,this.popoverDirective.container="body",this.popoverDirective.placement=(t.placement||"top").replace("before","left").replace("after","right").replace("below","bottom").replace("above","top"),t.prevBtnTitle=t.prevBtnTitle||"Prev",t.nextBtnTitle=t.nextBtnTitle||"Next",t.endBtnTitle=t.endBtnTitle||"End",this.popoverDirective.open({step:t}),t.preventScrolling||(d()(this.element.nativeElement,{sides:"bottom"})?d()(this.element.nativeElement,{sides:"left top right"})||this.element.nativeElement.scrollIntoView(!0):this.element.nativeElement.scrollIntoView(!1)),t.enableBackdrop?this.tourBackdrop.show(this.element):this.tourBackdrop.close()}},{key:"hideTourStep",value:function(){this.isActive=!1,this.popoverDirective.close(),this.tourBackdrop.close()}}]),t}()).\u0275fac=function(t){return new(t||k)(a.Nb(O),a.Nb(P),a.Nb(a.l),a.Nb(R,1),a.Nb(N))},k.\u0275dir=a.Ib({type:k,selectors:[["","tourAnchor",""]],hostVars:2,hostBindings:function(t,e){2&t&&a.Fb("touranchor--is-active",e.isActive)},inputs:{tourAnchor:"tourAnchor"}}),k),H=((w=function(t){o(i,t);var r=c(i);function i(t,e){var o;return n(this,i),(o=r.call(this,e)).tourStepTemplateService=t,o.tourService=e,o}return e(i,[{key:"ngAfterContentInit",value:function(){this.tourStepTemplateService.template=this.stepTemplate||this.stepTemplateContent||this.defaultTourStepTemplate}}]),i}(l.a)).\u0275fac=function(t){return new(t||w)(a.Nb(P),a.Nb(O))},w.\u0275cmp=a.Hb({type:w,selectors:[["tour-step-template"]],contentQueries:function(t,e,n){var o;1&t&&a.Gb(n,a.M,1),2&t&&a.tc(o=a.ec())&&(e.stepTemplateContent=o.first)},viewQuery:function(t,e){var n;1&t&&a.Hc(h,3,a.M),2&t&&a.tc(n=a.ec())&&(e.defaultTourStepTemplate=n.first)},inputs:{stepTemplate:"stepTemplate"},features:[a.yb],decls:2,vars:0,consts:[["tourStep",""],[1,"tour-step-content"],[1,"tour-step-navigation"],["class","btn btn-sm btn-default",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-default",3,"click"]],template:function(t,e){1&t&&a.Bc(0,T,7,4,"ng-template",null,0,a.Cc)},directives:[b.k],encapsulation:2}),w),L=((y=function(){function t(){n(this,t)}return e(t,null,[{key:"forRoot",value:function(){return{ngModule:t,providers:[P,l.c,O,N]}}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275mod=a.Lb({type:y}),y.\u0275inj=a.Kb({imports:[[b.b,u.b]]}),y),$=i("OtPg"),z=function(){return["bash"]},F=function(){return["xml"]},M=function(){return["typescript"]},U=((B=function t(){n(this,t),this.codeInstall="npm install @ngx-tour/core @ngx-tour/ng-bootstrap @ng-bootstrap/ng-bootstrap",this.codeStyle='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">',this.codeTourAnchor='<div tourAnchor="some.anchor.id">...</div>',this.codeInitialize="this.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);",this.codeInitializeDefaults="this.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});",this.codeEventObservables="this.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});",this.codeTemplate='<tour-step-template>\n  <ng-template let-step="step">\n    <p class="tour-step-content">{{ \'{{\' }}step?.content}}</p>\n    <div class="tour-step-navigation">\n      <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">{{ \'{{\' }}step?.prevBtnTitle}}</button>&nbsp;\n      <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">{{ \'{{\' }}step?.nextBtnTitle}}</button>&nbsp;\n      <button class="btn btn-sm btn-default" (click)="tourService.end()">{{ \'{{\' }}step?.endBtnTitle}}</button>\n    </div>\n  </ng-template>\n</tour-step-template>'}).\u0275fac=function(t){return new(t||B)},B.\u0275cmp=a.Hb({type:B,selectors:[["docs"]],decls:362,vars:21,consts:[["id","installation","tourAnchor","installation"],[3,"highlight","languages"],["id","usage","tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/alvaro-octal/ngx-tour/tree/master/src/app/ng-bootstrap"],["id","tourservice"],["id","step-configuration"],[1,"table"],["tourAnchor","config.anchorId"],["tourAnchor","config.route"],["tourAnchor","config.nextStep"],["tourAnchor","config.placement.default"],["href","https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover"],["tourAnchor","config.buttons.custom"],["id","defaults"],["id","hotkeys","tourAnchor","hotkeys"],["id","event-observables","tourAnchor","events"],["id","custom-template","tourAnchor","template"],["id","styling-active-tour-anchor"]],template:function(t,e){1&t&&(a.Tb(0,"h2",0),a.Dc(1,"Installation"),a.Sb(),a.Tb(2,"ol"),a.Tb(3,"li"),a.Dc(4," Install: "),a.Tb(5,"pre"),a.Ob(6,"code",1),a.Sb(),a.Sb(),a.Tb(7,"li"),a.Dc(8,"Import "),a.Tb(9,"code"),a.Dc(10,"TourNgBootstrapModule.forRoot()"),a.Sb(),a.Dc(11," into your app module"),a.Sb(),a.Tb(12,"li"),a.Dc(13,"Make sure "),a.Tb(14,"code"),a.Dc(15,"RouterModule"),a.Sb(),a.Dc(16," is imported in your app module"),a.Sb(),a.Tb(17,"li"),a.Dc(18,"Include bootstrap css somehow - i.e. in your "),a.Tb(19,"code"),a.Dc(20,"index.html"),a.Sb(),a.Dc(21," add this line: "),a.Ob(22,"br"),a.Tb(23,"pre"),a.Ob(24,"code",1),a.Sb(),a.Sb(),a.Sb(),a.Tb(25,"h2",2),a.Dc(26,"Usage"),a.Sb(),a.Tb(27,"ol"),a.Tb(28,"li"),a.Dc(29,"Add "),a.Tb(30,"code"),a.Dc(31,"<tour-step-template></tour-step-template>"),a.Sb(),a.Dc(32," to your root app component"),a.Sb(),a.Tb(33,"li"),a.Dc(34," Define anchor points for the tour steps by adding the "),a.Tb(35,"code"),a.Dc(36,"tourAnchor"),a.Sb(),a.Dc(37," directive throughout your app. "),a.Tb(38,"pre"),a.Ob(39,"code",1),a.Sb(),a.Sb(),a.Tb(40,"li"),a.Dc(41," Define your tour steps using "),a.Tb(42,"code"),a.Dc(43,"tourService.initialize(steps)"),a.Sb(),a.Tb(44,"pre"),a.Ob(45,"code",1),a.Sb(),a.Sb(),a.Tb(46,"li"),a.Dc(47,"Start the tour with "),a.Tb(48,"code",3),a.Dc(49,"tourService.start()"),a.Sb(),a.Sb(),a.Tb(50,"li"),a.Dc(51,"Check out the "),a.Tb(52,"a",4),a.Dc(53,"demo source code"),a.Sb(),a.Dc(54," for an example."),a.Sb(),a.Sb(),a.Tb(55,"h2",5),a.Dc(56,"TourService"),a.Sb(),a.Tb(57,"p"),a.Dc(58,"The "),a.Tb(59,"code"),a.Dc(60,"TourService"),a.Sb(),a.Dc(61," controls the tour. Some key functions include:"),a.Sb(),a.Tb(62,"dl"),a.Tb(63,"dt"),a.Dc(64,"start()"),a.Sb(),a.Tb(65,"dd"),a.Dc(66,"Starts the tour"),a.Sb(),a.Tb(67,"dt"),a.Dc(68,"startAt(stepId: number | string)"),a.Sb(),a.Tb(69,"dd"),a.Dc(70,"Start the tour at the step with stepId or at the specified index"),a.Sb(),a.Tb(71,"dt"),a.Dc(72,"end()"),a.Sb(),a.Tb(73,"dd"),a.Dc(74,"Ends the tour"),a.Sb(),a.Tb(75,"dt"),a.Dc(76,"pause()"),a.Sb(),a.Tb(77,"dd"),a.Dc(78,"Pauses the tour"),a.Sb(),a.Tb(79,"dt"),a.Dc(80,"resume()"),a.Sb(),a.Tb(81,"dd"),a.Dc(82,"Resumes the tour"),a.Sb(),a.Tb(83,"dt"),a.Dc(84,"next()"),a.Sb(),a.Tb(85,"dd"),a.Dc(86,"Goes to the next step"),a.Sb(),a.Tb(87,"dt"),a.Dc(88,"prev()"),a.Sb(),a.Tb(89,"dd"),a.Dc(90,"Goes to the previous step"),a.Sb(),a.Sb(),a.Tb(91,"h2",6),a.Dc(92,"Step Configuration"),a.Sb(),a.Tb(93,"p"),a.Dc(94,"Each step can have the following properties."),a.Sb(),a.Tb(95,"table",7),a.Tb(96,"thead"),a.Tb(97,"tr"),a.Tb(98,"th"),a.Dc(99,"Name"),a.Sb(),a.Tb(100,"th"),a.Dc(101,"Type"),a.Sb(),a.Tb(102,"th"),a.Dc(103,"Default"),a.Sb(),a.Tb(104,"th"),a.Dc(105,"Description"),a.Sb(),a.Sb(),a.Sb(),a.Tb(106,"tbody"),a.Tb(107,"tr"),a.Tb(108,"td"),a.Dc(109,"stepId"),a.Sb(),a.Tb(110,"td"),a.Dc(111,"string"),a.Sb(),a.Tb(112,"td"),a.Dc(113,'""'),a.Sb(),a.Tb(114,"td"),a.Dc(115,"A unique identifier for the step"),a.Sb(),a.Sb(),a.Tb(116,"tr",8),a.Tb(117,"td"),a.Dc(118,"anchorId"),a.Sb(),a.Tb(119,"td"),a.Dc(120,"string"),a.Sb(),a.Tb(121,"td"),a.Dc(122,"required"),a.Sb(),a.Tb(123,"td"),a.Dc(124,"The anchor to which the step will be attached"),a.Sb(),a.Sb(),a.Tb(125,"tr"),a.Tb(126,"td"),a.Dc(127,"title"),a.Sb(),a.Tb(128,"td"),a.Dc(129,"string"),a.Sb(),a.Tb(130,"td"),a.Dc(131,'""'),a.Sb(),a.Tb(132,"td"),a.Dc(133,"The title of the tour step"),a.Sb(),a.Sb(),a.Tb(134,"tr"),a.Tb(135,"td"),a.Dc(136,"content"),a.Sb(),a.Tb(137,"td"),a.Dc(138,"string"),a.Sb(),a.Tb(139,"td"),a.Dc(140,'""'),a.Sb(),a.Tb(141,"td"),a.Dc(142,"The content text of the tour step"),a.Sb(),a.Sb(),a.Tb(143,"tr",9),a.Tb(144,"td"),a.Dc(145,"route"),a.Sb(),a.Tb(146,"td"),a.Dc(147,"string | UrlSegment[]"),a.Sb(),a.Tb(148,"td"),a.Dc(149,"undefined"),a.Sb(),a.Tb(150,"td"),a.Dc(151," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),a.Sb(),a.Sb(),a.Tb(152,"tr",10),a.Tb(153,"td"),a.Dc(154,"nextStep"),a.Sb(),a.Tb(155,"td"),a.Dc(156,"number | string"),a.Sb(),a.Tb(157,"td"),a.Dc(158,"undefined"),a.Sb(),a.Tb(159,"td"),a.Dc(160,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),a.Sb(),a.Sb(),a.Tb(161,"tr"),a.Tb(162,"td"),a.Dc(163,"prevStep"),a.Sb(),a.Tb(164,"td"),a.Dc(165,"number | string"),a.Sb(),a.Tb(166,"td"),a.Dc(167,"undefined"),a.Sb(),a.Tb(168,"td"),a.Dc(169,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),a.Sb(),a.Sb(),a.Tb(170,"tr"),a.Tb(171,"td"),a.Dc(172,"placement"),a.Sb(),a.Tb(173,"td"),a.Dc(174,'Placement of a popover accepts: "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom" and array of above values.'),a.Sb(),a.Tb(175,"td"),a.Tb(176,"span",11),a.Dc(177,"'top'"),a.Sb(),a.Sb(),a.Tb(178,"td"),a.Dc(179," Where the tour step should placed with respect to the anchor. Supports all "),a.Tb(180,"a",12),a.Dc(181,"placement options of ng bootstrap"),a.Sb(),a.Dc(182,". "),a.Sb(),a.Sb(),a.Tb(183,"tr"),a.Tb(184,"td"),a.Dc(185,"preventScrolling"),a.Sb(),a.Tb(186,"td"),a.Dc(187,"boolean"),a.Sb(),a.Tb(188,"td"),a.Dc(189,"false"),a.Sb(),a.Tb(190,"td"),a.Dc(191," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),a.Sb(),a.Sb(),a.Tb(192,"tr",13),a.Tb(193,"td"),a.Dc(194,"prevBtnTitle"),a.Sb(),a.Tb(195,"td"),a.Dc(196,"string"),a.Sb(),a.Tb(197,"td"),a.Dc(198,"false"),a.Sb(),a.Tb(199,"td"),a.Dc(200,' Sets a custom prev button title for a given step. Default is "Prev" '),a.Sb(),a.Sb(),a.Tb(201,"tr"),a.Tb(202,"td"),a.Dc(203,"nextBtnTitle"),a.Sb(),a.Tb(204,"td"),a.Dc(205,"string"),a.Sb(),a.Tb(206,"td"),a.Dc(207,"false"),a.Sb(),a.Tb(208,"td"),a.Dc(209,' Sets a custom next button title for a given step. Default is "Next" '),a.Sb(),a.Sb(),a.Tb(210,"tr"),a.Tb(211,"td"),a.Dc(212,"endBtnTitle"),a.Sb(),a.Tb(213,"td"),a.Dc(214,"string"),a.Sb(),a.Tb(215,"td"),a.Dc(216,"false"),a.Sb(),a.Tb(217,"td"),a.Dc(218,' Sets a custom end button title for a given step. Default is "End" '),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(219,"h2",14),a.Dc(220,"Defaults"),a.Sb(),a.Tb(221,"p"),a.Dc(222,"You can set default values in the "),a.Tb(223,"code"),a.Dc(224,"TourService.initialize"),a.Sb(),a.Dc(225," function."),a.Sb(),a.Tb(226,"pre"),a.Ob(227,"code",1),a.Sb(),a.Tb(228,"p"),a.Dc(229,"Any value explicitly defined in a step will override the default value."),a.Sb(),a.Tb(230,"h2",15),a.Dc(231,"Hotkeys"),a.Sb(),a.Tb(232,"p"),a.Dc(233," Hotkeys are provided using Angular's "),a.Tb(234,"code"),a.Dc(235,"@HostListener"),a.Sb(),a.Dc(236," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),a.Sb(),a.Tb(237,"ul"),a.Tb(238,"li"),a.Tb(239,"strong"),a.Dc(240,"left arrow"),a.Sb(),a.Tb(241,"span"),a.Dc(242," - previous step"),a.Sb(),a.Sb(),a.Tb(243,"li"),a.Tb(244,"strong"),a.Dc(245,"right arrow"),a.Sb(),a.Tb(246,"span"),a.Dc(247," - next step"),a.Sb(),a.Sb(),a.Tb(248,"li"),a.Tb(249,"strong"),a.Dc(250,"esc"),a.Sb(),a.Tb(251,"span"),a.Dc(252," - end tour"),a.Sb(),a.Sb(),a.Sb(),a.Tb(253,"p"),a.Dc(254," You can disable hotkeys by calling "),a.Tb(255,"code"),a.Dc(256,"tourService.disableHotkeys()"),a.Sb(),a.Dc(257," or re-enable with "),a.Tb(258,"code"),a.Dc(259,"tourService.enableHotkeys()"),a.Sb(),a.Sb(),a.Tb(260,"h2",16),a.Dc(261,"Event Observables"),a.Sb(),a.Tb(262,"p"),a.Dc(263,"The "),a.Tb(264,"code"),a.Dc(265,"TourService"),a.Sb(),a.Dc(266," emits events that can be subscribed to like this:"),a.Sb(),a.Tb(267,"pre"),a.Ob(268,"code",1),a.Sb(),a.Tb(269,"table",7),a.Tb(270,"thead"),a.Tb(271,"tr"),a.Tb(272,"th"),a.Dc(273,"Name"),a.Sb(),a.Tb(274,"th"),a.Dc(275,"Payload"),a.Sb(),a.Tb(276,"th"),a.Dc(277,"Emitted When"),a.Sb(),a.Sb(),a.Sb(),a.Tb(278,"tbody"),a.Tb(279,"tr"),a.Tb(280,"td"),a.Dc(281,"stepShow$"),a.Sb(),a.Tb(282,"td"),a.Dc(283,"IStepOption"),a.Sb(),a.Tb(284,"td"),a.Dc(285,"A step is shown"),a.Sb(),a.Sb(),a.Tb(286,"tr"),a.Tb(287,"td"),a.Dc(288,"stepHide$"),a.Sb(),a.Tb(289,"td"),a.Dc(290,"IStepOption"),a.Sb(),a.Tb(291,"td"),a.Dc(292,"A step is hidden"),a.Sb(),a.Sb(),a.Tb(293,"tr"),a.Tb(294,"td"),a.Dc(295,"initialize$"),a.Sb(),a.Tb(296,"td"),a.Dc(297,"IStepOption[]"),a.Sb(),a.Tb(298,"td"),a.Dc(299,"The tour is configured with a set of steps"),a.Sb(),a.Sb(),a.Tb(300,"tr"),a.Tb(301,"td"),a.Dc(302,"start$"),a.Sb(),a.Tb(303,"td"),a.Dc(304,"IStepOption"),a.Sb(),a.Tb(305,"td"),a.Dc(306,"The tour begins"),a.Sb(),a.Sb(),a.Tb(307,"tr"),a.Tb(308,"td"),a.Dc(309,"end$"),a.Sb(),a.Tb(310,"td"),a.Dc(311,"any"),a.Sb(),a.Tb(312,"td"),a.Dc(313,"The tour ends"),a.Sb(),a.Sb(),a.Tb(314,"tr"),a.Tb(315,"td"),a.Dc(316,"pause$"),a.Sb(),a.Tb(317,"td"),a.Dc(318,"IStepOption"),a.Sb(),a.Tb(319,"td"),a.Dc(320,"The tour is paused"),a.Sb(),a.Sb(),a.Tb(321,"tr"),a.Tb(322,"td"),a.Dc(323,"resume$"),a.Sb(),a.Tb(324,"td"),a.Dc(325,"IStepOption"),a.Sb(),a.Tb(326,"td"),a.Dc(327,"The tour resumes"),a.Sb(),a.Sb(),a.Tb(328,"tr"),a.Tb(329,"td"),a.Dc(330,"anchorRegister$"),a.Sb(),a.Tb(331,"td"),a.Dc(332,"string"),a.Sb(),a.Tb(333,"td"),a.Dc(334,"An anchor is registered with the tour"),a.Sb(),a.Sb(),a.Tb(335,"tr"),a.Tb(336,"td"),a.Dc(337,"anchorUnregister$"),a.Sb(),a.Tb(338,"td"),a.Dc(339,"string"),a.Sb(),a.Tb(340,"td"),a.Dc(341,"An anchor is unregistered from the tour"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(342,"h2",17),a.Dc(343,"Custom template"),a.Sb(),a.Tb(344,"p"),a.Dc(345," You can also customize the tour step template by providing an "),a.Tb(346,"code"),a.Dc(347,'<ng-template let-step="step" >'),a.Sb(),a.Dc(348," inside the "),a.Tb(349,"code"),a.Dc(350,"<tour-step-template>"),a.Sb(),a.Sb(),a.Tb(351,"p"),a.Dc(352," The default template is equivalent to this:\n"),a.Sb(),a.Tb(353,"pre"),a.Ob(354,"code",1),a.Sb(),a.Tb(355,"h2",18),a.Dc(356,"Styling Active Tour Anchor"),a.Sb(),a.Tb(357,"p"),a.Dc(358," The currently active tour anchor element has a "),a.Tb(359,"code"),a.Dc(360,"touranchor--is-active"),a.Sb(),a.Dc(361," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n"),a.Sb()),2&t&&(a.Bb(6),a.mc("highlight",e.codeInstall)("languages",a.pc(14,z)),a.Bb(18),a.mc("highlight",e.codeStyle)("languages",a.pc(15,F)),a.Bb(15),a.mc("highlight",e.codeTourAnchor)("languages",a.pc(16,F)),a.Bb(6),a.mc("highlight",e.codeInitialize)("languages",a.pc(17,M)),a.Bb(182),a.mc("highlight",e.codeInitializeDefaults)("languages",a.pc(18,M)),a.Bb(41),a.mc("highlight",e.codeEventObservables)("languages",a.pc(19,M)),a.Bb(86),a.mc("highlight",e.codeTemplate)("languages",a.pc(20,F)))},directives:[C,R,$.b],encapsulation:2}),B),J=((A=function t(e){n(this,t),this.tourService=e,this.tourService.events$.subscribe(console.log),this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"ng-bootstrap/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"bottom",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-top",placement:"left-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-left",placement:"top-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-right",placement:"top-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-top",placement:"right-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-bottom",placement:"right-bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-right",placement:"bottom-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-left",placement:"bottom-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-bottom",placement:"left-bottom",title:"Placement"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"ng-bootstrap"})}).\u0275fac=function(t){return new(t||A)(a.Nb(O))},A.\u0275cmp=a.Hb({type:A,selectors:[["ng-bootstrap-route"]],decls:53,vars:0,consts:[[1,"row","flex-xl-nowrap"],[1,"d-none","d-xl-block","col-xl-2"],[1,"d-none","d-xl-block","col-xl-2","bd-toc"],["id","TableOfContents"],["routerLink","./","fragment","demo"],["routerLink","./","fragment","installation"],["routerLink","./","fragment","usage"],["routerLink","./","fragment","tourservice"],["routerLink","./","fragment","step-configuration"],["routerLink","./","fragment","defaults"],["routerLink","./","fragment","hotkeys"],["routerLink","./","fragment","event-observables"],["routerLink","./","fragment","custom-template"],["routerLink","./","fragment","styling-active-tour-anchor"],[1,"col-md-9","col-xl-8","py-md-3","pl-md-5"],["href","https://badge.fury.io/js/%40ngx-tour%2Fng-bootstrap"],["src","https://badge.fury.io/js/%40ngx-tour%2Fng-bootstrap.svg","alt","npm version","height","18"],["href","https://ng-bootstrap.github.io"],["id","demo"],["tourAnchor","start.tour",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Ob(1,"div",1),a.Tb(2,"nav",2),a.Tb(3,"nav",3),a.Tb(4,"ul"),a.Tb(5,"li"),a.Tb(6,"a",4),a.Dc(7,"Demo"),a.Sb(),a.Sb(),a.Tb(8,"li"),a.Tb(9,"a",5),a.Dc(10,"Installation"),a.Sb(),a.Sb(),a.Tb(11,"li"),a.Tb(12,"a",6),a.Dc(13,"Usage"),a.Sb(),a.Sb(),a.Tb(14,"li"),a.Tb(15,"a",7),a.Dc(16,"TourService"),a.Sb(),a.Sb(),a.Tb(17,"li"),a.Tb(18,"a",8),a.Dc(19,"Step Configuration"),a.Sb(),a.Sb(),a.Tb(20,"li"),a.Tb(21,"a",9),a.Dc(22,"Defaults"),a.Sb(),a.Sb(),a.Tb(23,"li"),a.Tb(24,"a",10),a.Dc(25,"Hotkeys"),a.Sb(),a.Sb(),a.Tb(26,"li"),a.Tb(27,"a",11),a.Dc(28,"Event Observables"),a.Sb(),a.Sb(),a.Tb(29,"li"),a.Tb(30,"a",12),a.Dc(31,"Custom template"),a.Sb(),a.Sb(),a.Tb(32,"li"),a.Tb(33,"a",13),a.Dc(34,"Styling Active Tour Anchor"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(35,"main",14),a.Tb(36,"h1"),a.Dc(37,"@ngx-tour/ng-bootstrap "),a.Tb(38,"a",15),a.Ob(39,"img",16),a.Sb(),a.Sb(),a.Tb(40,"p"),a.Tb(41,"code"),a.Dc(42,"TourNgBootstrapModule"),a.Sb(),a.Dc(43," is an implementation of the tour ui that uses "),a.Tb(44,"a",17),a.Dc(45,"NgBootstrap"),a.Sb(),a.Dc(46," popovers to display tour steps. "),a.Sb(),a.Tb(47,"h2",18),a.Dc(48,"Demo"),a.Sb(),a.Tb(49,"button",19),a.dc("click",function(){return e.tourService.toggle()}),a.Dc(50,"Start Demo Tour"),a.Sb(),a.Ob(51,"router-outlet"),a.Ob(52,"tour-step-template"),a.Sb(),a.Sb())},directives:[s.d,C,R,s.f,H],encapsulation:2}),A),Q=((x=function t(){n(this,t)}).\u0275fac=function(t){return new(t||x)},x.\u0275cmp=a.Hb({type:x,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(a.Tb(0,"p"),a.Dc(1,"This is the "),a.Tb(2,"strong",0),a.Dc(3,"another"),a.Sb(),a.Dc(4," route"),a.Sb())},directives:[C,R],encapsulation:2}),x),_=((I=function t(){n(this,t)}).\u0275fac=function(t){return new(t||I)},I.\u0275mod=a.Lb({type:I}),I.\u0275inj=a.Kb({imports:[[b.b,$.c,L.forRoot(),s.e.forChild([{component:J,path:"",children:[{component:U,path:""},{component:Q,path:"other"}]}])]]}),I)}}])}();
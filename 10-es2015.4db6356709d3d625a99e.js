(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{QFu5:function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){var t="undefined"!=typeof window&&void 0!==window.innerHeight,e=function e(n,o){var r,i,c,s,a,l,b,p,u,h,d,f=!1,m={},g={},S=[0,0];if("undefined"!=typeof jQuery&&n instanceof jQuery&&(n=n.get(0)),"object"!=typeof n||1!==n.nodeType)throw new Error("First argument must be an element");for(n.getAttribute("data-withinviewport-settings")&&window.JSON&&(m=JSON.parse(n.getAttribute("data-withinviewport-settings"))),g.container=(r="string"==typeof o?{sides:o}:o||{}).container||m.container||e.defaults.container||window,g.sides=r.sides||m.sides||e.defaults.sides||"all",g.top=r.top||m.top||e.defaults.top||0,g.right=r.right||m.right||e.defaults.right||0,g.bottom=r.bottom||m.bottom||e.defaults.bottom||0,g.left=r.left||m.left||e.defaults.left||0,"undefined"!=typeof jQuery&&g.container instanceof jQuery&&(g.container=g.container.get(0)),g.container!==document.body&&1===g.container.nodeType||(g.container=window),c=g.container===window,i={top:function(){return c?s.top>=g.top:s.top>=l-(l-a.top)+g.top},right:function(){return c?s.right<=a.right+b-g.right:s.right<=a.right-S[0]-g.right},bottom:function(){var e=0;return c?t?e=g.container.innerHeight:document&&document.documentElement&&(e=document.documentElement.clientHeight):e=a.bottom,s.bottom<=e-S[1]-g.bottom},left:function(){return c?s.left>=g.left:s.left>=b-(b-a.left)+g.left},all:function(){return i.top()&&i.bottom()&&i.left()&&i.right()}},s=n.getBoundingClientRect(),c?(a=document.documentElement.getBoundingClientRect(),l=document.body.scrollTop,b=window.scrollX||document.body.scrollLeft):(a=g.container.getBoundingClientRect(),l=g.container.scrollTop,b=g.container.scrollLeft),b&&(S[0]=18),l&&(S[1]=16),p=/^top$|^right$|^bottom$|^left$|^all$/,d=(u=g.sides.split(" ")).length;d--;)if(h=u[d].toLowerCase(),p.test(h)){if(!i[h]()){f=!1;break}f=!0}return f};return e.prototype.defaults={container:"undefined"!=typeof document?document.body:{},sides:"all",top:0,right:0,bottom:0,left:0},e.defaults=e.prototype.defaults,e.prototype.top=function(t){return e(t,"top")},e.prototype.right=function(t){return e(t,"right")},e.prototype.bottom=function(t){return e(t,"bottom")},e.prototype.left=function(t){return e(t,"left")},e})?o.apply(e,[]):o)||(t.exports=r)},ssdw:function(t,e,n){"use strict";n.r(e),n.d(e,"NgBootstrapModule",function(){return z});var o=n("ofXK"),r=n("tyNb"),i=n("fXoL"),c=n("SUuR"),s=n("1kSV"),a=n("QFu5"),l=n.n(a);const b=["tourStep"];function p(t,e){if(1&t){const t=i.Ub();i.Tb(0,"button",4),i.dc("click",function(){return i.wc(t),i.hc(2).tourService.prev()}),i.Dc(1),i.Sb()}if(2&t){const t=i.hc().step;i.Bb(1),i.Fc(" ",null==t?null:t.prevBtnTitle," ")}}function u(t,e){if(1&t){const t=i.Ub();i.Tb(0,"button",4),i.dc("click",function(){return i.wc(t),i.hc(2).tourService.next()}),i.Dc(1),i.Sb()}if(2&t){const t=i.hc().step;i.Bb(1),i.Fc(" ",null==t?null:t.nextBtnTitle," ")}}function h(t,e){if(1&t){const t=i.Ub();i.Tb(0,"p",1),i.Dc(1),i.Sb(),i.Tb(2,"div",2),i.Bc(3,p,2,1,"button",3),i.Dc(4,"\xa0 "),i.Bc(5,u,2,1,"button",3),i.Dc(6,"\xa0 "),i.Tb(7,"button",4),i.dc("click",function(){return i.wc(t),i.hc().tourService.end()}),i.Dc(8),i.Sb(),i.Sb()}if(2&t){const t=e.step,n=i.hc();i.Bb(1),i.Ec(null==t?null:t.content),i.Bb(2),i.mc("ngIf",n.tourService.hasPrev(t)),i.Bb(2),i.mc("ngIf",n.tourService.hasNext(t)),i.Bb(3),i.Fc(" ",null==t?null:t.endBtnTitle," ")}}let d=(()=>{class t extends c.c{}return t.\u0275fac=function(e){return f(e||t)},t.\u0275prov=Object(i.Jb)({factory:function(){return new t(Object(i.ac)(r.b))},token:t,providedIn:"root"}),t})();const f=i.Vb(d);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac}),t})(),g=(()=>{class t{constructor(t){this.renderer=t.createRenderer(null,null)}show(t){const e=t.nativeElement.getBoundingClientRect();this.backdropElement||(this.backdropElement=this.renderer.createElement("div"),this.renderer.addClass(this.backdropElement,"ngx-tour_backdrop"),this.renderer.appendChild(document.body,this.backdropElement)),this.setStyles(e)}close(){this.backdropElement&&(this.renderer.removeChild(document.body,this.backdropElement),this.backdropElement=null)}setStyles(t){console.log({boundingRect:t});const e={position:"fixed",width:`${t.width}px`,height:`${t.height}px`,top:`${t.top}px`,left:`${t.left}px`,"box-shadow":"0 0 0 9999px rgba(0, 0, 0, 0.7)","z-index":"100"};for(const n of Object.keys(e))this.backdropElement.style.setProperty(n,e[n])}}return t.\u0275fac=function(e){return new(e||t)(i.ac(i.G))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac}),t})(),S=(()=>{class t extends s.a{}return t.\u0275fac=function(e){return T(e||t)},t.\u0275dir=i.Ib({type:t,selectors:[["","tourAnchor",""]],features:[i.yb]}),t})();const T=i.Vb(S);let v=(()=>{class t{constructor(t,e,n,o,r){this.tourService=t,this.tourStepTemplate=e,this.element=n,this.popoverDirective=o,this.tourBackdrop=r,this.popoverDirective.autoClose=!1,this.popoverDirective.animation=!1,this.popoverDirective.triggers="",this.popoverDirective.toggle=()=>{}}ngOnInit(){this.tourService.register(this.tourAnchor,this)}ngOnDestroy(){this.tourService.unregister(this.tourAnchor)}showTourStep(t){this.isActive=!0,this.popoverDirective.ngbPopover=this.tourStepTemplate.template,this.popoverDirective.popoverTitle=t.title,this.popoverDirective.container="body",this.popoverDirective.placement=(t.placement||"top").replace("before","left").replace("after","right").replace("below","bottom").replace("above","top"),t.prevBtnTitle=t.prevBtnTitle||"Prev",t.nextBtnTitle=t.nextBtnTitle||"Next",t.endBtnTitle=t.endBtnTitle||"End",this.popoverDirective.open({step:t}),t.preventScrolling||(l()(this.element.nativeElement,{sides:"bottom"})?l()(this.element.nativeElement,{sides:"left top right"})||this.element.nativeElement.scrollIntoView(!0):this.element.nativeElement.scrollIntoView(!1)),t.enableBackdrop?this.tourBackdrop.show(this.element):this.tourBackdrop.close()}hideTourStep(){this.isActive=!1,this.popoverDirective.close(),this.tourBackdrop.close()}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(d),i.Nb(m),i.Nb(i.l),i.Nb(S,1),i.Nb(g))},t.\u0275dir=i.Ib({type:t,selectors:[["","tourAnchor",""]],hostVars:2,hostBindings:function(t,e){2&t&&i.Fb("touranchor--is-active",e.isActive)},inputs:{tourAnchor:"tourAnchor"}}),t})(),D=(()=>{class t extends c.a{constructor(t,e){super(e),this.tourStepTemplateService=t,this.tourService=e}ngAfterContentInit(){this.tourStepTemplateService.template=this.stepTemplate||this.stepTemplateContent||this.defaultTourStepTemplate}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(m),i.Nb(d))},t.\u0275cmp=i.Hb({type:t,selectors:[["tour-step-template"]],contentQueries:function(t,e,n){if(1&t&&i.Gb(n,i.M,1),2&t){let t;i.tc(t=i.ec())&&(e.stepTemplateContent=t.first)}},viewQuery:function(t,e){if(1&t&&i.Hc(b,3,i.M),2&t){let t;i.tc(t=i.ec())&&(e.defaultTourStepTemplate=t.first)}},inputs:{stepTemplate:"stepTemplate"},features:[i.yb],decls:2,vars:0,consts:[["tourStep",""],[1,"tour-step-content"],[1,"tour-step-navigation"],["class","btn btn-sm btn-primary",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(t,e){1&t&&i.Bc(0,h,9,4,"ng-template",null,0,i.Cc)},directives:[o.k],encapsulation:2}),t})(),y=(()=>{class t{static forRoot(){return{ngModule:t,providers:[m,c.c,d,g]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[o.b,s.b]]}),t})();var w=n("OtPg"),B=n("5M1D"),k=n("8C0g"),I=n("aSxX"),x=n("WcU+"),A=n("Jir8");function O(t,e){if(1&t&&(i.Tb(0,"tr"),i.Tb(1,"td",19),i.Tb(2,"code"),i.Dc(3),i.Sb(),i.Sb(),i.Tb(4,"td",20),i.Tb(5,"p",21),i.Ob(6,"code",22),i.ic(7,"keepHtml"),i.Tb(8,"small",23),i.Dc(9),i.Sb(),i.Sb(),i.Tb(10,"p",24),i.Dc(11),i.Sb(),i.Sb(),i.Sb()),2&t){const t=e.$implicit;i.Bb(3),i.Ec(t.key),i.Bb(3),i.mc("innerHTML",i.jc(7,4,t.description),i.xc),i.Bb(3),i.Fc(" => ",t.return_type,""),i.Bb(2),i.Ec(t.description)}}function E(t,e){if(1&t&&(i.Rb(0),i.Tb(1,"del"),i.Tb(2,"code"),i.Dc(3),i.Sb(),i.Sb(),i.Qb()),2&t){const t=i.hc().$implicit;i.Bb(3),i.Ec(t.name)}}function H(t,e){if(1&t&&(i.Rb(0),i.Tb(1,"code"),i.Dc(2),i.Sb(),i.Qb()),2&t){const t=i.hc().$implicit;i.Bb(2),i.Ec(t.name)}}function P(t,e){if(1&t&&(i.Tb(0,"div",28),i.Tb(1,"i"),i.Dc(2,"Default: "),i.Sb(),i.Tb(3,"code"),i.Dc(4),i.Sb(),i.Sb()),2&t){const t=i.hc().$implicit;i.Bb(4),i.Ec(t.default_value)}}function $(t,e){if(1&t&&(i.Rb(0),i.Tb(1,"tr",25),i.Tb(2,"td",19),i.Bc(3,E,4,1,"ng-container",26),i.Bc(4,H,3,1,"ng-container",26),i.Sb(),i.Tb(5,"td",20),i.Ob(6,"p",27),i.ic(7,"keepHtml"),i.Tb(8,"div",28),i.Tb(9,"i"),i.Dc(10,"Type: "),i.Sb(),i.Tb(11,"code"),i.Dc(12),i.Sb(),i.Sb(),i.Bc(13,P,5,1,"div",29),i.Sb(),i.Sb(),i.Qb()),2&t){const t=e.$implicit;i.Bb(1),i.mc("tourAnchor",t.anchor),i.Bb(2),i.mc("ngIf",t.del),i.Bb(1),i.mc("ngIf",!t.del),i.Bb(2),i.mc("innerHTML",i.jc(7,6,t.description),i.xc),i.Bb(6),i.Ec(t.prop_type),i.Bb(1),i.mc("ngIf",t.default_value)}}function C(t,e){if(1&t&&(i.Rb(0),i.Tb(1,"tr"),i.Tb(2,"td",19),i.Tb(3,"code"),i.Dc(4),i.Sb(),i.Sb(),i.Tb(5,"td",20),i.Ob(6,"p",27),i.ic(7,"keepHtml"),i.Tb(8,"div",28),i.Tb(9,"i"),i.Dc(10,"Payload: "),i.Sb(),i.Tb(11,"code"),i.Dc(12),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Qb()),2&t){const t=e.$implicit;i.Bb(4),i.Ec(t.name),i.Bb(2),i.mc("innerHTML",i.jc(7,3,t.description),i.xc),i.Bb(6),i.Ec(t.payload)}}const L=function(){return["bash"]},N=function(){return["xml"]},R=function(){return["typescript"]};let F=(()=>{class t{constructor(){this.codeInstall="npm install @ngx-tour/core @ngx-tour/ng-bootstrap @ng-bootstrap/ng-bootstrap",this.codeStyle='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">',this.codeTourAnchor='<div tourAnchor="some.anchor.id">...</div>',this.codeInitialize="this.tourService.initialize([{\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);",this.codeInitializeDefaults="this.tourService.initialize(steps, {\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});",this.codeEventObservables="this.tourService.initialize$.subscribe((steps: IStepOption[]) => {\n  console.log('tour configured with these steps:', steps);\n});",this.codeTemplate='<tour-step-template>\n  <ng-template #tourStep let-step="step">\n    <p class="tour-step-content">{{ step?.content }}</p>\n    <div class="tour-step-navigation">\n        <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-primary" (click)="tourService.prev()">\n            {{ step?.prevBtnTitle }}\n        </button>&nbsp;\n        <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-primary" (click)="tourService.next()">\n            {{ step?.nextBtnTitle }}\n        </button>&nbsp;\n        <button class="btn btn-sm btn-primary" (click)="tourService.end()">\n            {{ step?.endBtnTitle }}\n        </button>\n    </div>\n  </ng-template>\n</tour-step-template>',this.tourServiceMethods=[new k.a("start","start()","void","Start the tour"),new k.a("startAt","startAt(stepId: number | string)","void","Start the tour at the step with stepId or at the specified index"),new k.a("end","end()","void","Ends the tour"),new k.a("pause","pause()","void","Pauses the tour"),new k.a("resume","resume()","void","Resumes the tour"),new k.a("next","next()","void","Goes to the next step"),new k.a("prev","prev()","void","Goes to the previous step")],this.stepConfigProperties=[new I.a("stepId","string",'""',"A unique identifier for the step"),new I.a("anchorId","string","","The anchor to which the step will be attached","config.anchorId"),new I.a("title","string",'""',"The title of the tour step"),new I.a("content","string",'""',"The content text of the tour step"),new I.a("route","string | UrlSegment[]","undefined","The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted.","config.route"),new I.a("nextStep","number | string","undefined","The step index or stepId of the next step. If undefined, the next step in the steps array is used.","config.nextStep"),new I.a("prevStep","number | string","undefined","The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),new I.a("placement","PlacementArray | 'after' | 'after-top' | 'after-bottom' | 'top-after' | 'top-before' | 'bottom-after' | 'bottom-before' | 'before' | 'before-top' | 'before-bottom' | 'below' | 'above'","top",'Where the tour step should placed with respect to the anchor. Supports all <a href="https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover">placement options of ng bootstrap</a>.',"config.placement.default"),new I.a("preventScrolling","boolean","false","Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to <code>true</code> will disable the scroll behavior."),new I.a("prevBtnTitle","string","Prev","Sets a custom prev button title for a given step.","config.buttons.custom"),new I.a("nextBtnTitle","string","Next","Sets a custom next button title for a given step."),new I.a("endBtnTitle","string","End","Sets a custom end button title for a given step.")],this.eventObservables=[new x.a("initialize$","IStepOption[]","The tour is configured with a set of steps"),new x.a("stepShow$","IStepOption","A step is shown"),new x.a("stepHide$","IStepOption","A step is hidden"),new x.a("start$","IStepOption","The tour begins"),new x.a("ends$","any","The tour ends"),new x.a("pause$","IStepOption","The tour is paused"),new x.a("resume$","IStepOption","The tour resumes"),new x.a("anchorRegister$","string","An anchor is registered with the tour"),new x.a("anchorUnregister$","string","An anchor is unregistered from the tour")]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["docs"]],decls:147,vars:24,consts:[["id","installation"],["tourAnchor","installation"],[3,"highlight","languages"],["id","usage"],["tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/alvaro-octal/ngx-tour/tree/master/src/app/ng-bootstrap"],["id","tourservice"],[1,"table","table-sm"],[4,"ngFor","ngForOf"],["id","step-configuration"],["id","defaults"],["id","hotkeys"],["tourAnchor","hotkeys"],["id","event-observables"],["tourAnchor","events"],["id","custom-template"],["tourAnchor","template"],["id","styling-active-tour-anchor"],[1,"label-cell"],[1,"content-cell"],[1,"signature"],[3,"innerHTML"],[1,"text-muted"],[1,"description"],[3,"tourAnchor"],[4,"ngIf"],[1,"description",3,"innerHTML"],[1,"meta"],["class","meta",4,"ngIf"]],template:function(t,e){1&t&&(i.Tb(0,"h2",0),i.Tb(1,"span",1),i.Dc(2,"Installation"),i.Sb(),i.Sb(),i.Tb(3,"ol"),i.Tb(4,"li"),i.Dc(5," Install: "),i.Tb(6,"pre"),i.Ob(7,"code",2),i.Sb(),i.Sb(),i.Tb(8,"li"),i.Dc(9,"Import "),i.Tb(10,"code"),i.Dc(11,"TourNgBootstrapModule.forRoot()"),i.Sb(),i.Dc(12," into your app module"),i.Sb(),i.Tb(13,"li"),i.Dc(14,"Make sure "),i.Tb(15,"code"),i.Dc(16,"RouterModule"),i.Sb(),i.Dc(17," is imported in your app module"),i.Sb(),i.Tb(18,"li"),i.Dc(19,"Include bootstrap css somehow - i.e. in your "),i.Tb(20,"code"),i.Dc(21,"index.html"),i.Sb(),i.Dc(22," add this line: "),i.Ob(23,"br"),i.Tb(24,"pre"),i.Ob(25,"code",2),i.Sb(),i.Sb(),i.Sb(),i.Tb(26,"h2",3),i.Tb(27,"span",4),i.Dc(28,"Usage"),i.Sb(),i.Sb(),i.Tb(29,"ol"),i.Tb(30,"li"),i.Dc(31,"Add "),i.Tb(32,"code"),i.Dc(33,"<tour-step-template></tour-step-template>"),i.Sb(),i.Dc(34," to your root app component"),i.Sb(),i.Tb(35,"li"),i.Dc(36," Define anchor points for the tour steps by adding the "),i.Tb(37,"code"),i.Dc(38,"tourAnchor"),i.Sb(),i.Dc(39," directive throughout your app. "),i.Tb(40,"pre"),i.Ob(41,"code",2),i.Sb(),i.Sb(),i.Tb(42,"li"),i.Dc(43," Define your tour steps using "),i.Tb(44,"code"),i.Dc(45,"tourService.initialize(steps)"),i.Sb(),i.Tb(46,"pre"),i.Ob(47,"code",2),i.Sb(),i.Sb(),i.Tb(48,"li"),i.Dc(49,"Start the tour with "),i.Tb(50,"code",5),i.Dc(51,"tourService.start()"),i.Sb(),i.Sb(),i.Tb(52,"li"),i.Dc(53,"Check out the "),i.Tb(54,"a",6),i.Dc(55,"demo source code"),i.Sb(),i.Dc(56," for an example."),i.Sb(),i.Sb(),i.Tb(57,"h2",7),i.Dc(58,"TourService"),i.Sb(),i.Tb(59,"p"),i.Dc(60,"The "),i.Tb(61,"code"),i.Dc(62,"TourService"),i.Sb(),i.Dc(63," controls the tour. Some key functions include:"),i.Sb(),i.Tb(64,"table",8),i.Bc(65,O,12,6,"tr",9),i.Sb(),i.Tb(66,"h2",10),i.Dc(67,"Step Configuration"),i.Sb(),i.Tb(68,"p"),i.Dc(69,"Each step can have the following properties."),i.Sb(),i.Tb(70,"table",8),i.Bc(71,$,14,8,"ng-container",9),i.Sb(),i.Tb(72,"h2",11),i.Dc(73,"Defaults"),i.Sb(),i.Tb(74,"p"),i.Dc(75,"You can set default values in the "),i.Tb(76,"code"),i.Dc(77,"TourService.initialize"),i.Sb(),i.Dc(78," function."),i.Sb(),i.Tb(79,"pre"),i.Ob(80,"code",2),i.Sb(),i.Tb(81,"p"),i.Dc(82,"Any value explicitly defined in a step will override the default value."),i.Sb(),i.Tb(83,"h2",12),i.Tb(84,"span",13),i.Dc(85,"Hotkeys"),i.Sb(),i.Sb(),i.Tb(86,"p"),i.Dc(87," Hotkeys are provided using Angular's "),i.Tb(88,"code"),i.Dc(89,"@HostListener"),i.Sb(),i.Dc(90," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),i.Sb(),i.Tb(91,"ul"),i.Tb(92,"li"),i.Tb(93,"strong"),i.Dc(94,"left arrow"),i.Sb(),i.Tb(95,"span"),i.Dc(96," - previous step"),i.Sb(),i.Sb(),i.Tb(97,"li"),i.Tb(98,"strong"),i.Dc(99,"right arrow"),i.Sb(),i.Tb(100,"span"),i.Dc(101," - next step"),i.Sb(),i.Sb(),i.Tb(102,"li"),i.Tb(103,"strong"),i.Dc(104,"esc"),i.Sb(),i.Tb(105,"span"),i.Dc(106," - end tour"),i.Sb(),i.Sb(),i.Sb(),i.Tb(107,"p"),i.Dc(108," You can disable hotkeys by calling "),i.Tb(109,"code"),i.Dc(110,"tourService.disableHotkeys()"),i.Sb(),i.Dc(111," or re-enable with "),i.Tb(112,"code"),i.Dc(113,"tourService.enableHotkeys()"),i.Sb(),i.Sb(),i.Tb(114,"h2",14),i.Tb(115,"span",15),i.Dc(116,"Event Observables"),i.Sb(),i.Sb(),i.Tb(117,"p"),i.Dc(118,"The "),i.Tb(119,"code"),i.Dc(120,"TourService"),i.Sb(),i.Dc(121," emits events that can be subscribed to like this:"),i.Sb(),i.Tb(122,"pre"),i.Ob(123,"code",2),i.Sb(),i.Tb(124,"table",8),i.Bc(125,C,13,5,"ng-container",9),i.Sb(),i.Tb(126,"h2",16),i.Tb(127,"span",17),i.Dc(128,"Custom template"),i.Sb(),i.Sb(),i.Tb(129,"p"),i.Dc(130," You can also customize the tour step template by providing an "),i.Tb(131,"code"),i.Dc(132,'<ng-template let-step="step" >'),i.Sb(),i.Dc(133," inside the "),i.Tb(134,"code"),i.Dc(135,"<tour-step-template>"),i.Sb(),i.Sb(),i.Tb(136,"p"),i.Dc(137," The default template is equivalent to this:\n"),i.Sb(),i.Tb(138,"pre"),i.Ob(139,"code",2),i.Sb(),i.Tb(140,"h2",18),i.Dc(141,"Styling Active Tour Anchor"),i.Sb(),i.Tb(142,"p"),i.Dc(143," The currently active tour anchor element has a "),i.Tb(144,"code"),i.Dc(145,"touranchor--is-active"),i.Sb(),i.Dc(146," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n"),i.Sb()),2&t&&(i.Bb(7),i.mc("highlight",e.codeInstall)("languages",i.pc(17,L)),i.Bb(18),i.mc("highlight",e.codeStyle)("languages",i.pc(18,N)),i.Bb(16),i.mc("highlight",e.codeTourAnchor)("languages",i.pc(19,N)),i.Bb(6),i.mc("highlight",e.codeInitialize)("languages",i.pc(20,R)),i.Bb(18),i.mc("ngForOf",e.tourServiceMethods),i.Bb(6),i.mc("ngForOf",e.stepConfigProperties),i.Bb(9),i.mc("highlight",e.codeInitializeDefaults)("languages",i.pc(21,R)),i.Bb(43),i.mc("highlight",e.codeEventObservables)("languages",i.pc(22,R)),i.Bb(2),i.mc("ngForOf",e.eventObservables),i.Bb(14),i.mc("highlight",e.codeTemplate)("languages",i.pc(23,N)))},directives:[v,S,w.b,o.j,o.k],pipes:[A.a],encapsulation:2}),t})(),M=(()=>{class t{constructor(t){this.tourService=t,this.tourService.events$.subscribe(console.log),this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"ng-bootstrap/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"bottom",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-top",placement:"left-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-left",placement:"top-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-right",placement:"top-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-top",placement:"right-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-bottom",placement:"right-bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-right",placement:"bottom-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-left",placement:"bottom-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-bottom",placement:"left-bottom",title:"Placement"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"ng-bootstrap"})}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(d))},t.\u0275cmp=i.Hb({type:t,selectors:[["ng-bootstrap-route"]],decls:53,vars:0,consts:[[1,"row","flex-xl-nowrap"],[1,"d-none","d-xl-block","col-xl-2"],[1,"d-none","d-xl-block","col-xl-2","bd-toc"],["id","TableOfContents"],["routerLink","./","fragment","demo"],["routerLink","./","fragment","installation"],["routerLink","./","fragment","usage"],["routerLink","./","fragment","tourservice"],["routerLink","./","fragment","step-configuration"],["routerLink","./","fragment","defaults"],["routerLink","./","fragment","hotkeys"],["routerLink","./","fragment","event-observables"],["routerLink","./","fragment","custom-template"],["routerLink","./","fragment","styling-active-tour-anchor"],[1,"col-md-9","col-xl-8","py-md-3","pl-md-5"],["href","https://badge.fury.io/js/%40ngx-tour%2Fng-bootstrap"],["src","https://badge.fury.io/js/%40ngx-tour%2Fng-bootstrap.svg","alt","npm version","height","18"],["href","https://ng-bootstrap.github.io"],["id","demo"],["tourAnchor","start.tour",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(i.Tb(0,"div",0),i.Ob(1,"div",1),i.Tb(2,"nav",2),i.Tb(3,"nav",3),i.Tb(4,"ul"),i.Tb(5,"li"),i.Tb(6,"a",4),i.Dc(7,"Demo"),i.Sb(),i.Sb(),i.Tb(8,"li"),i.Tb(9,"a",5),i.Dc(10,"Installation"),i.Sb(),i.Sb(),i.Tb(11,"li"),i.Tb(12,"a",6),i.Dc(13,"Usage"),i.Sb(),i.Sb(),i.Tb(14,"li"),i.Tb(15,"a",7),i.Dc(16,"TourService"),i.Sb(),i.Sb(),i.Tb(17,"li"),i.Tb(18,"a",8),i.Dc(19,"Step Configuration"),i.Sb(),i.Sb(),i.Tb(20,"li"),i.Tb(21,"a",9),i.Dc(22,"Defaults"),i.Sb(),i.Sb(),i.Tb(23,"li"),i.Tb(24,"a",10),i.Dc(25,"Hotkeys"),i.Sb(),i.Sb(),i.Tb(26,"li"),i.Tb(27,"a",11),i.Dc(28,"Event Observables"),i.Sb(),i.Sb(),i.Tb(29,"li"),i.Tb(30,"a",12),i.Dc(31,"Custom template"),i.Sb(),i.Sb(),i.Tb(32,"li"),i.Tb(33,"a",13),i.Dc(34,"Styling Active Tour Anchor"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(35,"main",14),i.Tb(36,"h1"),i.Dc(37,"@ngx-tour/ng-bootstrap "),i.Tb(38,"a",15),i.Ob(39,"img",16),i.Sb(),i.Sb(),i.Tb(40,"p"),i.Tb(41,"code"),i.Dc(42,"TourNgBootstrapModule"),i.Sb(),i.Dc(43," is an implementation of the tour ui that uses "),i.Tb(44,"a",17),i.Dc(45,"NgBootstrap"),i.Sb(),i.Dc(46," popovers to display tour steps. "),i.Sb(),i.Tb(47,"h2",18),i.Dc(48,"Demo"),i.Sb(),i.Tb(49,"button",19),i.dc("click",function(){return e.tourService.toggle()}),i.Dc(50,"Start Demo Tour"),i.Sb(),i.Ob(51,"router-outlet"),i.Ob(52,"tour-step-template"),i.Sb(),i.Sb())},directives:[r.d,v,S,r.f,D],encapsulation:2}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(i.Tb(0,"p"),i.Dc(1,"This is the "),i.Tb(2,"strong",0),i.Dc(3,"another"),i.Sb(),i.Dc(4," route"),i.Sb())},directives:[v,S],encapsulation:2}),t})(),z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[o.b,w.c,B.a,y.forRoot(),r.e.forChild([{component:M,path:"",children:[{component:F,path:""},{component:j,path:"other"}]}])]]}),t})()}}]);
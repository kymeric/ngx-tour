(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FWq7:function(t,e,o){"use strict";o.r(e),o.d(e,"ConsoleModule",function(){return S});var n=o("ofXK"),b=o("tyNb"),r=o("SUuR"),c=o("fXoL"),i=o("1kSV");let s=(()=>{class t{constructor(t){this.tourService=t}ngOnInit(){this.tourService.register(this.tourAnchor,this)}ngOnDestroy(){this.tourService.unregister(this.tourAnchor)}showTourStep(t){console.group(t.title),console.log(t.content),console.log(`${t.placement||"above"} ${this.tourAnchor}`),console.groupEnd()}hideTourStep(){}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(r.c))},t.\u0275dir=c.Ib({type:t,selectors:[["","tourAnchor",""]],inputs:{tourAnchor:"tourAnchor"}}),t})(),a=(()=>{class t{static forRoot(){return{ngModule:t,providers:[r.c]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[r.b,n.b,i.b]]}),t})(),d=(()=>{class t{constructor(t){this.tourService=t,this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"below",title:"Welcome"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"console/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"below",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"below",title:"Placement"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"console"})}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(r.c))},t.\u0275cmp=c.Hb({type:t,selectors:[["console-route"]],decls:48,vars:0,consts:[[1,"row","flex-xl-nowrap"],[1,"d-none","d-xl-block","col-xl-2"],[1,"d-none","d-xl-block","col-xl-2","bd-toc"],["id","TableOfContents"],["routerLink","./","fragment","demo"],["routerLink","./","fragment","installation"],["routerLink","./","fragment","usage"],["routerLink","./","fragment","tourservice"],["routerLink","./","fragment","step-configuration"],["routerLink","./","fragment","defaults"],["routerLink","./","fragment","hotkeys"],["routerLink","./","fragment","event-observables"],[1,"col-md-9","col-xl-8","py-md-3","pl-md-5"],["id","demo"],["tourAnchor","start.tour",1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(c.Tb(0,"div",0),c.Ob(1,"div",1),c.Tb(2,"nav",2),c.Tb(3,"nav",3),c.Tb(4,"ul"),c.Tb(5,"li"),c.Tb(6,"a",4),c.Dc(7,"Demo"),c.Sb(),c.Sb(),c.Tb(8,"li"),c.Tb(9,"a",5),c.Dc(10,"Installation"),c.Sb(),c.Sb(),c.Tb(11,"li"),c.Tb(12,"a",6),c.Dc(13,"Usage"),c.Sb(),c.Sb(),c.Tb(14,"li"),c.Tb(15,"a",7),c.Dc(16,"TourService"),c.Sb(),c.Sb(),c.Tb(17,"li"),c.Tb(18,"a",8),c.Dc(19,"Step Configuration"),c.Sb(),c.Sb(),c.Tb(20,"li"),c.Tb(21,"a",9),c.Dc(22,"Defaults"),c.Sb(),c.Sb(),c.Tb(23,"li"),c.Tb(24,"a",10),c.Dc(25,"Hotkeys"),c.Sb(),c.Sb(),c.Tb(26,"li"),c.Tb(27,"a",11),c.Dc(28,"Event Observables"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(29,"main",12),c.Tb(30,"h1"),c.Dc(31,"@ngx-tour/console"),c.Sb(),c.Tb(32,"p"),c.Tb(33,"code"),c.Dc(34,"TourConsoleModule"),c.Sb(),c.Dc(35," is a minimal implementation of the tour ui that uses only the browser's console to display tour steps. "),c.Sb(),c.Tb(36,"h2",13),c.Dc(37,"Demo"),c.Sb(),c.Tb(38,"button",14),c.dc("click",function(){return e.tourService.toggle()}),c.Dc(39,"Start Demo Tour"),c.Sb(),c.Dc(40,"\xa0 "),c.Tb(41,"button",15),c.dc("click",function(){return e.tourService.prev()}),c.Dc(42,"Prev"),c.Sb(),c.Dc(43,"\xa0 "),c.Tb(44,"button",15),c.dc("click",function(){return e.tourService.next()}),c.Dc(45,"Next"),c.Sb(),c.Ob(46,"router-outlet"),c.Ob(47,"tour-hotkey-listener"),c.Sb(),c.Sb())},directives:[b.d,s,b.f,r.a],encapsulation:2}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Hb({type:t,selectors:[["docs"]],decls:297,vars:4,consts:[["id","installation","tourAnchor","installation"],["id","usage","tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/alvaro-octal/ngx-tour/tree/master/src/app/console"],["id","tourservice"],["id","step-configuration"],[1,"table"],["tourAnchor","config.anchorId"],["tourAnchor","config.route"],["tourAnchor","config.nextStep"],["tourAnchor","config.placement.default"],["id","defaults"],["id","hotkeys","tourAnchor","hotkeys"],["id","event-observables","tourAnchor","events"]],template:function(t,e){1&t&&(c.Tb(0,"h2",0),c.Dc(1,"Installation"),c.Sb(),c.Tb(2,"ol"),c.Tb(3,"li"),c.Tb(4,"code"),c.Dc(5,"npm install @ngx-tour/core @ngx-tour/console"),c.Sb(),c.Sb(),c.Tb(6,"li"),c.Dc(7,"import "),c.Tb(8,"code"),c.Dc(9,"TourConsoleModule.forRoot()"),c.Sb(),c.Dc(10," into your app module"),c.Sb(),c.Sb(),c.Tb(11,"h2",1),c.Dc(12,"Usage"),c.Sb(),c.Tb(13,"ol"),c.Tb(14,"li"),c.Dc(15," Define anchor points for the tour steps by adding the "),c.Tb(16,"code"),c.Dc(17,"tourAnchor"),c.Sb(),c.Dc(18," directive throughout your app. "),c.Tb(19,"pre"),c.Tb(20,"code"),c.Dc(21,'<div tourAnchor="some.anchor.id">...</div>'),c.Sb(),c.Sb(),c.Sb(),c.Tb(22,"li"),c.Dc(23," Define your tour steps using "),c.Tb(24,"code"),c.Dc(25,"tourService.initialize(steps)"),c.Sb(),c.Tb(26,"pre"),c.Dc(27),c.Sb(),c.Sb(),c.Tb(28,"li"),c.Dc(29,"Start the tour with "),c.Tb(30,"code",2),c.Dc(31,"tourService.start()"),c.Sb(),c.Sb(),c.Tb(32,"li"),c.Dc(33,"Check out the "),c.Tb(34,"a",3),c.Dc(35,"demo source code"),c.Sb(),c.Dc(36," for an example."),c.Sb(),c.Sb(),c.Tb(37,"h2",4),c.Dc(38,"TourService"),c.Sb(),c.Tb(39,"p"),c.Dc(40,"The "),c.Tb(41,"code"),c.Dc(42,"TourService"),c.Sb(),c.Dc(43," controls the tour. Some key functions include:"),c.Sb(),c.Tb(44,"dl"),c.Tb(45,"dt"),c.Dc(46,"start()"),c.Sb(),c.Tb(47,"dd"),c.Dc(48,"Starts the tour"),c.Sb(),c.Tb(49,"dt"),c.Dc(50,"startAt(stepId: number | string)"),c.Sb(),c.Tb(51,"dd"),c.Dc(52,"Start the tour at the step with stepId or at the specified index"),c.Sb(),c.Tb(53,"dt"),c.Dc(54,"end()"),c.Sb(),c.Tb(55,"dd"),c.Dc(56,"Ends the tour"),c.Sb(),c.Tb(57,"dt"),c.Dc(58,"pause()"),c.Sb(),c.Tb(59,"dd"),c.Dc(60,"Pauses the tour"),c.Sb(),c.Tb(61,"dt"),c.Dc(62,"resume()"),c.Sb(),c.Tb(63,"dd"),c.Dc(64,"Resumes the tour"),c.Sb(),c.Tb(65,"dt"),c.Dc(66,"next()"),c.Sb(),c.Tb(67,"dd"),c.Dc(68,"Goes to the next step"),c.Sb(),c.Tb(69,"dt"),c.Dc(70,"prev()"),c.Sb(),c.Tb(71,"dd"),c.Dc(72,"Goes to the previous step"),c.Sb(),c.Sb(),c.Tb(73,"h2",5),c.Dc(74,"Step Configuration"),c.Sb(),c.Tb(75,"p"),c.Dc(76,"Each step can have the following properties."),c.Sb(),c.Tb(77,"table",6),c.Tb(78,"thead"),c.Tb(79,"tr"),c.Tb(80,"th"),c.Dc(81,"Name"),c.Sb(),c.Tb(82,"th"),c.Dc(83,"Type"),c.Sb(),c.Tb(84,"th"),c.Dc(85,"Default"),c.Sb(),c.Tb(86,"th"),c.Dc(87,"Description"),c.Sb(),c.Sb(),c.Sb(),c.Tb(88,"tbody"),c.Tb(89,"tr"),c.Tb(90,"td"),c.Dc(91,"stepId"),c.Sb(),c.Tb(92,"td"),c.Dc(93,"string"),c.Sb(),c.Tb(94,"td"),c.Dc(95,'""'),c.Sb(),c.Tb(96,"td"),c.Dc(97,"A unique identifier for the step"),c.Sb(),c.Sb(),c.Tb(98,"tr",7),c.Tb(99,"td"),c.Dc(100,"anchorId"),c.Sb(),c.Tb(101,"td"),c.Dc(102,"string"),c.Sb(),c.Tb(103,"td"),c.Dc(104,"required"),c.Sb(),c.Tb(105,"td"),c.Dc(106,"The anchor to which the step will be attached"),c.Sb(),c.Sb(),c.Tb(107,"tr"),c.Tb(108,"td"),c.Dc(109,"title"),c.Sb(),c.Tb(110,"td"),c.Dc(111,"string"),c.Sb(),c.Tb(112,"td"),c.Dc(113,'""'),c.Sb(),c.Tb(114,"td"),c.Dc(115,"The title of the tour step"),c.Sb(),c.Sb(),c.Tb(116,"tr"),c.Tb(117,"td"),c.Dc(118,"content"),c.Sb(),c.Tb(119,"td"),c.Dc(120,"string"),c.Sb(),c.Tb(121,"td"),c.Dc(122,'""'),c.Sb(),c.Tb(123,"td"),c.Dc(124,"The content text of the tour step"),c.Sb(),c.Sb(),c.Tb(125,"tr",8),c.Tb(126,"td"),c.Dc(127,"route"),c.Sb(),c.Tb(128,"td"),c.Dc(129,"string | UrlSegment[]"),c.Sb(),c.Tb(130,"td"),c.Dc(131,"undefined"),c.Sb(),c.Tb(132,"td"),c.Dc(133," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),c.Sb(),c.Sb(),c.Tb(134,"tr",9),c.Tb(135,"td"),c.Dc(136,"nextStep"),c.Sb(),c.Tb(137,"td"),c.Dc(138,"number | string"),c.Sb(),c.Tb(139,"td"),c.Dc(140,"undefined"),c.Sb(),c.Tb(141,"td"),c.Dc(142,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),c.Sb(),c.Sb(),c.Tb(143,"tr"),c.Tb(144,"td"),c.Dc(145,"prevStep"),c.Sb(),c.Tb(146,"td"),c.Dc(147,"number | string"),c.Sb(),c.Tb(148,"td"),c.Dc(149,"undefined"),c.Sb(),c.Tb(150,"td"),c.Dc(151,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),c.Sb(),c.Sb(),c.Tb(152,"tr"),c.Tb(153,"td"),c.Dc(154,"placement"),c.Sb(),c.Tb(155,"td"),c.Dc(156,"'above' | 'below' | 'after' | 'before' | 'left' | 'right'"),c.Sb(),c.Tb(157,"td"),c.Tb(158,"span",10),c.Dc(159,"'top'"),c.Sb(),c.Sb(),c.Tb(160,"td"),c.Dc(161," (* Ignored by "),c.Tb(162,"code"),c.Dc(163,"TourMdMenuModule"),c.Sb(),c.Dc(164,") Where the tour step should placed with respect to the anchor. 'before' and 'after' are synonyms for 'left' and 'right' respectively. When RTL support is implemented, 'before' and 'after' will swap directions when RTL mode is enabled. "),c.Sb(),c.Sb(),c.Tb(165,"tr"),c.Tb(166,"td"),c.Dc(167,"preventScrolling"),c.Sb(),c.Tb(168,"td"),c.Dc(169,"boolean"),c.Sb(),c.Tb(170,"td"),c.Dc(171,"false"),c.Sb(),c.Tb(172,"td"),c.Dc(173," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(174,"h2",11),c.Dc(175,"Defaults"),c.Sb(),c.Tb(176,"p"),c.Dc(177,"You can set default values in the "),c.Tb(178,"code"),c.Dc(179,"TourService.initialize"),c.Sb(),c.Dc(180," function."),c.Sb(),c.Tb(181,"pre"),c.Dc(182),c.Sb(),c.Tb(183,"p"),c.Dc(184,"Any value explicitly defined in a step will override the default value."),c.Sb(),c.Tb(185,"h2",12),c.Dc(186,"Hotkeys"),c.Sb(),c.Tb(187,"p"),c.Dc(188," Hotkeys are provided using Angular's "),c.Tb(189,"code"),c.Dc(190,"@HostListener"),c.Sb(),c.Dc(191," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),c.Sb(),c.Tb(192,"ul"),c.Tb(193,"li"),c.Tb(194,"strong"),c.Dc(195,"left arrow"),c.Sb(),c.Tb(196,"span"),c.Dc(197," - previous step"),c.Sb(),c.Sb(),c.Tb(198,"li"),c.Tb(199,"strong"),c.Dc(200,"right arrow"),c.Sb(),c.Tb(201,"span"),c.Dc(202," - next step"),c.Sb(),c.Sb(),c.Tb(203,"li"),c.Tb(204,"strong"),c.Dc(205,"esc"),c.Sb(),c.Tb(206,"span"),c.Dc(207," - end tour"),c.Sb(),c.Sb(),c.Sb(),c.Tb(208,"p"),c.Dc(209," You can disable hotkeys by calling "),c.Tb(210,"code"),c.Dc(211,"tourService.disableHotkeys()"),c.Sb(),c.Dc(212," or re-enable with "),c.Tb(213,"code"),c.Dc(214,"tourService.enableHotkeys()"),c.Sb(),c.Sb(),c.Tb(215,"h2",13),c.Dc(216,"Event Observables"),c.Sb(),c.Tb(217,"p"),c.Dc(218,"The "),c.Tb(219,"code"),c.Dc(220,"TourService"),c.Sb(),c.Dc(221," emits events that can be subscribed to like this:"),c.Sb(),c.Tb(222,"pre"),c.Dc(223),c.Sb(),c.Tb(224,"table",6),c.Tb(225,"thead"),c.Tb(226,"tr"),c.Tb(227,"th"),c.Dc(228,"Name"),c.Sb(),c.Tb(229,"th"),c.Dc(230,"Payload"),c.Sb(),c.Tb(231,"th"),c.Dc(232,"Emitted When"),c.Sb(),c.Sb(),c.Sb(),c.Tb(233,"tbody"),c.Tb(234,"tr"),c.Tb(235,"td"),c.Dc(236,"stepShow$"),c.Sb(),c.Tb(237,"td"),c.Dc(238,"IStepOption"),c.Sb(),c.Tb(239,"td"),c.Dc(240,"A step is shown"),c.Sb(),c.Sb(),c.Tb(241,"tr"),c.Tb(242,"td"),c.Dc(243,"stepHide$"),c.Sb(),c.Tb(244,"td"),c.Dc(245,"IStepOption"),c.Sb(),c.Tb(246,"td"),c.Dc(247,"A step is hidden"),c.Sb(),c.Sb(),c.Tb(248,"tr"),c.Tb(249,"td"),c.Dc(250,"initialize$"),c.Sb(),c.Tb(251,"td"),c.Dc(252,"IStepOption[]"),c.Sb(),c.Tb(253,"td"),c.Dc(254,"The tour is configured with a set of steps"),c.Sb(),c.Sb(),c.Tb(255,"tr"),c.Tb(256,"td"),c.Dc(257,"start$"),c.Sb(),c.Tb(258,"td"),c.Dc(259,"IStepOption"),c.Sb(),c.Tb(260,"td"),c.Dc(261,"The tour begins"),c.Sb(),c.Sb(),c.Tb(262,"tr"),c.Tb(263,"td"),c.Dc(264,"end$"),c.Sb(),c.Tb(265,"td"),c.Dc(266,"any"),c.Sb(),c.Tb(267,"td"),c.Dc(268,"The tour ends"),c.Sb(),c.Sb(),c.Tb(269,"tr"),c.Tb(270,"td"),c.Dc(271,"pause$"),c.Sb(),c.Tb(272,"td"),c.Dc(273,"IStepOption"),c.Sb(),c.Tb(274,"td"),c.Dc(275,"The tour is paused"),c.Sb(),c.Sb(),c.Tb(276,"tr"),c.Tb(277,"td"),c.Dc(278,"resume$"),c.Sb(),c.Tb(279,"td"),c.Dc(280,"IStepOption"),c.Sb(),c.Tb(281,"td"),c.Dc(282,"The tour resumes"),c.Sb(),c.Sb(),c.Tb(283,"tr"),c.Tb(284,"td"),c.Dc(285,"anchorRegister$"),c.Sb(),c.Tb(286,"td"),c.Dc(287,"string"),c.Sb(),c.Tb(288,"td"),c.Dc(289,"An anchor is registered with the tour"),c.Sb(),c.Sb(),c.Tb(290,"tr"),c.Tb(291,"td"),c.Dc(292,"anchorUnregister$"),c.Sb(),c.Tb(293,"td"),c.Dc(294,"string"),c.Sb(),c.Tb(295,"td"),c.Dc(296,"An anchor is unregistered from the tour"),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(27),c.Gc("this.tourService.initialize([","{","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","{","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"),c.Bb(155),c.Fc("this.tourService.initialize(steps, ","{","\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n"),c.Bb(41),c.Fc("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","{","\n  console.log('tour configured with these steps:', steps);\n});\n"))},directives:[s],encapsulation:2}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Hb({type:t,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(c.Tb(0,"p"),c.Dc(1,"This is the "),c.Tb(2,"strong",0),c.Dc(3,"another"),c.Sb(),c.Dc(4," route"),c.Sb())},directives:[s],encapsulation:2}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[n.b,b.e.forChild([{component:d,path:"",children:[{component:u,path:""},{component:l,path:"other"}]}]),a.forRoot()]]}),t})()}}]);
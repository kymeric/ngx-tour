(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FWq7:function(t,e,o){"use strict";o.r(e),o.d(e,"ConsoleModule",function(){return S});var n=o("ofXK"),r=o("tyNb"),c=o("SUuR"),b=o("fXoL"),i=o("1kSV");let s=(()=>{class t{constructor(t){this.tourService=t}ngOnInit(){this.tourService.register(this.tourAnchor,this)}ngOnDestroy(){this.tourService.unregister(this.tourAnchor)}showTourStep(t){console.group(t.title),console.log(t.content),console.log(`${t.placement||"above"} ${this.tourAnchor}`),console.groupEnd()}hideTourStep(){}}return t.\u0275fac=function(e){return new(e||t)(b.Nb(c.c))},t.\u0275dir=b.Ib({type:t,selectors:[["","tourAnchor",""]],inputs:{tourAnchor:"tourAnchor"}}),t})(),a=(()=>{class t{static forRoot(){return{ngModule:t,providers:[c.c]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({imports:[[c.b,n.b,i.b]]}),t})(),d=(()=>{class t{constructor(t){this.tourService=t,this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"below",title:"Welcome"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"console/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"below",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"below",title:"Placement"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"console"})}}return t.\u0275fac=function(e){return new(e||t)(b.Nb(c.c))},t.\u0275cmp=b.Hb({type:t,selectors:[["console-route"]],decls:18,vars:0,consts:[["tourAnchor","start.tour",1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(b.Tb(0,"h1"),b.Cc(1,"@ngx-tour/console"),b.Sb(),b.Tb(2,"p"),b.Tb(3,"code"),b.Cc(4,"TourConsoleModule"),b.Sb(),b.Cc(5," is a minimal implementation of the tour ui that uses only the browser's console to display tour steps.\n"),b.Sb(),b.Tb(6,"h2"),b.Cc(7,"Demo"),b.Sb(),b.Tb(8,"button",0),b.dc("click",function(){return e.tourService.toggle()}),b.Cc(9,"Start Demo Tour"),b.Sb(),b.Cc(10,"\xa0\n"),b.Tb(11,"button",1),b.dc("click",function(){return e.tourService.prev()}),b.Cc(12,"Prev"),b.Sb(),b.Cc(13,"\xa0\n"),b.Tb(14,"button",1),b.dc("click",function(){return e.tourService.next()}),b.Cc(15,"Next"),b.Sb(),b.Ob(16,"router-outlet"),b.Ob(17,"tour-hotkey-listener"))},directives:[s,r.f,c.a],encapsulation:2}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Hb({type:t,selectors:[["docs"]],decls:297,vars:4,consts:[["tourAnchor","installation"],["tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/alvaro-octal/ngx-tour/tree/master/src/app/console"],[1,"table"],["tourAnchor","config.anchorId"],["tourAnchor","config.route"],["tourAnchor","config.nextStep"],["tourAnchor","config.placement.default"],["tourAnchor","hotkeys"],["tourAnchor","events"]],template:function(t,e){1&t&&(b.Tb(0,"h2",0),b.Cc(1,"Installation"),b.Sb(),b.Tb(2,"ol"),b.Tb(3,"li"),b.Tb(4,"code"),b.Cc(5,"npm install @ngx-tour/core @ngx-tour/console"),b.Sb(),b.Sb(),b.Tb(6,"li"),b.Cc(7,"import "),b.Tb(8,"code"),b.Cc(9,"TourConsoleModule.forRoot()"),b.Sb(),b.Cc(10," into your app module"),b.Sb(),b.Sb(),b.Tb(11,"h2",1),b.Cc(12,"Usage"),b.Sb(),b.Tb(13,"ol"),b.Tb(14,"li"),b.Cc(15," Define anchor points for the tour steps by adding the "),b.Tb(16,"code"),b.Cc(17,"tourAnchor"),b.Sb(),b.Cc(18," directive throughout your app. "),b.Tb(19,"pre"),b.Tb(20,"code"),b.Cc(21,'<div tourAnchor="some.anchor.id">...</div>'),b.Sb(),b.Sb(),b.Sb(),b.Tb(22,"li"),b.Cc(23," Define your tour steps using "),b.Tb(24,"code"),b.Cc(25,"tourService.initialize(steps)"),b.Sb(),b.Tb(26,"pre"),b.Cc(27),b.Sb(),b.Sb(),b.Tb(28,"li"),b.Cc(29,"Start the tour with "),b.Tb(30,"code",2),b.Cc(31,"tourService.start()"),b.Sb(),b.Sb(),b.Tb(32,"li"),b.Cc(33,"Check out the "),b.Tb(34,"a",3),b.Cc(35,"demo source code"),b.Sb(),b.Cc(36," for an example."),b.Sb(),b.Sb(),b.Tb(37,"h2"),b.Cc(38,"TourService"),b.Sb(),b.Tb(39,"p"),b.Cc(40,"The "),b.Tb(41,"code"),b.Cc(42,"TourService"),b.Sb(),b.Cc(43," controls the tour. Some key functions include:"),b.Sb(),b.Tb(44,"dl"),b.Tb(45,"dt"),b.Cc(46,"start()"),b.Sb(),b.Tb(47,"dd"),b.Cc(48,"Starts the tour"),b.Sb(),b.Tb(49,"dt"),b.Cc(50,"startAt(stepId: number | string)"),b.Sb(),b.Tb(51,"dd"),b.Cc(52,"Start the tour at the step with stepId or at the specified index"),b.Sb(),b.Tb(53,"dt"),b.Cc(54,"end()"),b.Sb(),b.Tb(55,"dd"),b.Cc(56,"Ends the tour"),b.Sb(),b.Tb(57,"dt"),b.Cc(58,"pause()"),b.Sb(),b.Tb(59,"dd"),b.Cc(60,"Pauses the tour"),b.Sb(),b.Tb(61,"dt"),b.Cc(62,"resume()"),b.Sb(),b.Tb(63,"dd"),b.Cc(64,"Resumes the tour"),b.Sb(),b.Tb(65,"dt"),b.Cc(66,"next()"),b.Sb(),b.Tb(67,"dd"),b.Cc(68,"Goes to the next step"),b.Sb(),b.Tb(69,"dt"),b.Cc(70,"prev()"),b.Sb(),b.Tb(71,"dd"),b.Cc(72,"Goes to the previous step"),b.Sb(),b.Sb(),b.Tb(73,"h2"),b.Cc(74,"Step Configuration"),b.Sb(),b.Tb(75,"p"),b.Cc(76,"Each step can have the following properties."),b.Sb(),b.Tb(77,"table",4),b.Tb(78,"thead"),b.Tb(79,"tr"),b.Tb(80,"th"),b.Cc(81,"Name"),b.Sb(),b.Tb(82,"th"),b.Cc(83,"Type"),b.Sb(),b.Tb(84,"th"),b.Cc(85,"Default"),b.Sb(),b.Tb(86,"th"),b.Cc(87,"Description"),b.Sb(),b.Sb(),b.Sb(),b.Tb(88,"tbody"),b.Tb(89,"tr"),b.Tb(90,"td"),b.Cc(91,"stepId"),b.Sb(),b.Tb(92,"td"),b.Cc(93,"string"),b.Sb(),b.Tb(94,"td"),b.Cc(95,'""'),b.Sb(),b.Tb(96,"td"),b.Cc(97,"A unique identifier for the step"),b.Sb(),b.Sb(),b.Tb(98,"tr",5),b.Tb(99,"td"),b.Cc(100,"anchorId"),b.Sb(),b.Tb(101,"td"),b.Cc(102,"string"),b.Sb(),b.Tb(103,"td"),b.Cc(104,"required"),b.Sb(),b.Tb(105,"td"),b.Cc(106,"The anchor to which the step will be attached"),b.Sb(),b.Sb(),b.Tb(107,"tr"),b.Tb(108,"td"),b.Cc(109,"title"),b.Sb(),b.Tb(110,"td"),b.Cc(111,"string"),b.Sb(),b.Tb(112,"td"),b.Cc(113,'""'),b.Sb(),b.Tb(114,"td"),b.Cc(115,"The title of the tour step"),b.Sb(),b.Sb(),b.Tb(116,"tr"),b.Tb(117,"td"),b.Cc(118,"content"),b.Sb(),b.Tb(119,"td"),b.Cc(120,"string"),b.Sb(),b.Tb(121,"td"),b.Cc(122,'""'),b.Sb(),b.Tb(123,"td"),b.Cc(124,"The content text of the tour step"),b.Sb(),b.Sb(),b.Tb(125,"tr",6),b.Tb(126,"td"),b.Cc(127,"route"),b.Sb(),b.Tb(128,"td"),b.Cc(129,"string | UrlSegment[]"),b.Sb(),b.Tb(130,"td"),b.Cc(131,"undefined"),b.Sb(),b.Tb(132,"td"),b.Cc(133," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),b.Sb(),b.Sb(),b.Tb(134,"tr",7),b.Tb(135,"td"),b.Cc(136,"nextStep"),b.Sb(),b.Tb(137,"td"),b.Cc(138,"number | string"),b.Sb(),b.Tb(139,"td"),b.Cc(140,"undefined"),b.Sb(),b.Tb(141,"td"),b.Cc(142,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),b.Sb(),b.Sb(),b.Tb(143,"tr"),b.Tb(144,"td"),b.Cc(145,"prevStep"),b.Sb(),b.Tb(146,"td"),b.Cc(147,"number | string"),b.Sb(),b.Tb(148,"td"),b.Cc(149,"undefined"),b.Sb(),b.Tb(150,"td"),b.Cc(151,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),b.Sb(),b.Sb(),b.Tb(152,"tr"),b.Tb(153,"td"),b.Cc(154,"placement"),b.Sb(),b.Tb(155,"td"),b.Cc(156,"'above' | 'below' | 'after' | 'before' | 'left' | 'right'"),b.Sb(),b.Tb(157,"td"),b.Tb(158,"span",8),b.Cc(159,"'top'"),b.Sb(),b.Sb(),b.Tb(160,"td"),b.Cc(161," (* Ignored by "),b.Tb(162,"code"),b.Cc(163,"TourMdMenuModule"),b.Sb(),b.Cc(164,") Where the tour step should placed with respect to the anchor. 'before' and 'after' are synonyms for 'left' and 'right' respectively. When RTL support is implemented, 'before' and 'after' will swap directions when RTL mode is enabled. "),b.Sb(),b.Sb(),b.Tb(165,"tr"),b.Tb(166,"td"),b.Cc(167,"preventScrolling"),b.Sb(),b.Tb(168,"td"),b.Cc(169,"boolean"),b.Sb(),b.Tb(170,"td"),b.Cc(171,"false"),b.Sb(),b.Tb(172,"td"),b.Cc(173," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(174,"h2"),b.Cc(175,"Defaults"),b.Sb(),b.Tb(176,"p"),b.Cc(177,"You can set default values in the "),b.Tb(178,"code"),b.Cc(179,"TourService.initialize"),b.Sb(),b.Cc(180," function."),b.Sb(),b.Tb(181,"pre"),b.Cc(182),b.Sb(),b.Tb(183,"p"),b.Cc(184,"Any value explicitly defined in a step will override the default value."),b.Sb(),b.Tb(185,"h2",9),b.Cc(186,"Hotkeys"),b.Sb(),b.Tb(187,"p"),b.Cc(188," Hotkeys are provided using Angular's "),b.Tb(189,"code"),b.Cc(190,"@HostListener"),b.Sb(),b.Cc(191," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),b.Sb(),b.Tb(192,"ul"),b.Tb(193,"li"),b.Tb(194,"strong"),b.Cc(195,"left arrow"),b.Sb(),b.Tb(196,"span"),b.Cc(197," - previous step"),b.Sb(),b.Sb(),b.Tb(198,"li"),b.Tb(199,"strong"),b.Cc(200,"right arrow"),b.Sb(),b.Tb(201,"span"),b.Cc(202," - next step"),b.Sb(),b.Sb(),b.Tb(203,"li"),b.Tb(204,"strong"),b.Cc(205,"esc"),b.Sb(),b.Tb(206,"span"),b.Cc(207," - end tour"),b.Sb(),b.Sb(),b.Sb(),b.Tb(208,"p"),b.Cc(209," You can disable hotkeys by calling "),b.Tb(210,"code"),b.Cc(211,"tourService.disableHotkeys()"),b.Sb(),b.Cc(212," or re-enable with "),b.Tb(213,"code"),b.Cc(214,"tourService.enableHotkeys()"),b.Sb(),b.Sb(),b.Tb(215,"h2",10),b.Cc(216,"Event Observables"),b.Sb(),b.Tb(217,"p"),b.Cc(218,"The "),b.Tb(219,"code"),b.Cc(220,"TourService"),b.Sb(),b.Cc(221," emits events that can be subscribed to like this:"),b.Sb(),b.Tb(222,"pre"),b.Cc(223),b.Sb(),b.Tb(224,"table",4),b.Tb(225,"thead"),b.Tb(226,"tr"),b.Tb(227,"th"),b.Cc(228,"Name"),b.Sb(),b.Tb(229,"th"),b.Cc(230,"Payload"),b.Sb(),b.Tb(231,"th"),b.Cc(232,"Emitted When"),b.Sb(),b.Sb(),b.Sb(),b.Tb(233,"tbody"),b.Tb(234,"tr"),b.Tb(235,"td"),b.Cc(236,"stepShow$"),b.Sb(),b.Tb(237,"td"),b.Cc(238,"IStepOption"),b.Sb(),b.Tb(239,"td"),b.Cc(240,"A step is shown"),b.Sb(),b.Sb(),b.Tb(241,"tr"),b.Tb(242,"td"),b.Cc(243,"stepHide$"),b.Sb(),b.Tb(244,"td"),b.Cc(245,"IStepOption"),b.Sb(),b.Tb(246,"td"),b.Cc(247,"A step is hidden"),b.Sb(),b.Sb(),b.Tb(248,"tr"),b.Tb(249,"td"),b.Cc(250,"initialize$"),b.Sb(),b.Tb(251,"td"),b.Cc(252,"IStepOption[]"),b.Sb(),b.Tb(253,"td"),b.Cc(254,"The tour is configured with a set of steps"),b.Sb(),b.Sb(),b.Tb(255,"tr"),b.Tb(256,"td"),b.Cc(257,"start$"),b.Sb(),b.Tb(258,"td"),b.Cc(259,"IStepOption"),b.Sb(),b.Tb(260,"td"),b.Cc(261,"The tour begins"),b.Sb(),b.Sb(),b.Tb(262,"tr"),b.Tb(263,"td"),b.Cc(264,"end$"),b.Sb(),b.Tb(265,"td"),b.Cc(266,"any"),b.Sb(),b.Tb(267,"td"),b.Cc(268,"The tour ends"),b.Sb(),b.Sb(),b.Tb(269,"tr"),b.Tb(270,"td"),b.Cc(271,"pause$"),b.Sb(),b.Tb(272,"td"),b.Cc(273,"IStepOption"),b.Sb(),b.Tb(274,"td"),b.Cc(275,"The tour is paused"),b.Sb(),b.Sb(),b.Tb(276,"tr"),b.Tb(277,"td"),b.Cc(278,"resume$"),b.Sb(),b.Tb(279,"td"),b.Cc(280,"IStepOption"),b.Sb(),b.Tb(281,"td"),b.Cc(282,"The tour resumes"),b.Sb(),b.Sb(),b.Tb(283,"tr"),b.Tb(284,"td"),b.Cc(285,"anchorRegister$"),b.Sb(),b.Tb(286,"td"),b.Cc(287,"string"),b.Sb(),b.Tb(288,"td"),b.Cc(289,"An anchor is registered with the tour"),b.Sb(),b.Sb(),b.Tb(290,"tr"),b.Tb(291,"td"),b.Cc(292,"anchorUnregister$"),b.Sb(),b.Tb(293,"td"),b.Cc(294,"string"),b.Sb(),b.Tb(295,"td"),b.Cc(296,"An anchor is unregistered from the tour"),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t&&(b.Bb(27),b.Fc("this.tourService.initialize([","{","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","{","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"),b.Bb(155),b.Ec("this.tourService.initialize(steps, ","{","\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n"),b.Bb(41),b.Ec("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","{","\n  console.log('tour configured with these steps:', steps);\n});\n"))},directives:[s],encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Hb({type:t,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(b.Tb(0,"p"),b.Cc(1,"This is the "),b.Tb(2,"strong",0),b.Cc(3,"another"),b.Sb(),b.Cc(4," route"),b.Sb())},directives:[s],encapsulation:2}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({imports:[[n.b,r.e.forChild([{component:d,path:"",children:[{component:u,path:""},{component:h,path:"other"}]}]),a.forRoot()]]}),t})()}}]);
"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[667],{6667:(A,b,r)=>{r.r(b),r.d(b,{AppliedJobsModule:()=>c});var m=r(6814),i=r(846),e=r(9291),h=r(4429),C=r(9540),M=r(5219),B=r(2892),w=r(7338),y=r(3999);function x(s,d){if(1&s&&(e.TgZ(0,"div",9)(1,"div",10)(2,"span",11),e._uU(3),e.qZA(),e.TgZ(4,"span",12),e._uU(5),e.qZA(),e.TgZ(6,"div",13)(7,"span"),e._uU(8),e.qZA()()()()),2&s){const o=d.$implicit;e.xp6(3),e.Oqu(o.user.fullname),e.xp6(2),e.Oqu(o.job.title),e.xp6(3),e.Oqu(o.job.companyName)}}function D(s,d){1&s&&(e.TgZ(0,"div")(1,"p-image",14),e._uU(2,">"),e.qZA()())}function L(s,d){if(1&s&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&s){const o=d.$implicit;e.xp6(1),e.hij(" ",o," ")}}function p(s,d){if(1&s&&(e.TgZ(0,"h3",15),e._uU(1),e.qZA(),e.TgZ(2,"div",16),e._UZ(3,"i",17),e.TgZ(4,"span",15),e._uU(5),e.qZA(),e._UZ(6,"i",18),e.TgZ(7,"span",15),e._uU(8),e.qZA()(),e.TgZ(9,"h3",15),e._uU(10),e.qZA(),e.TgZ(11,"div",19),e._UZ(12,"i",20),e.TgZ(13,"span",15),e._uU(14),e.qZA()(),e.TgZ(15,"h5",15),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.YNc(18,L,2,1,"p",21)),2&s){const o=e.oxw();e.xp6(1),e.Oqu(o.selectedUserName),e.xp6(4),e.Oqu(o.selectedUserEmail),e.xp6(3),e.Oqu(o.selectedUserMobilPhone),e.xp6(2),e.Oqu(o.selectedJobName),e.xp6(4),e.Oqu(o.selectedJobCompany),e.xp6(2),e.Oqu(e.lcZ(17,7,"JOB_DESCRIPTION")),e.xp6(2),e.Q6J("ngForOf",o.selectedJobDescription)}}const T=function(){return{height:"43rem"}},t=function(){return{height:"42rem"}};let n=(()=>{class s{constructor(o){this.jobService=o,this.selectedJobCompany="",this.selectedJobName="",this.selectedUserName="",this.selectedUserEmail="",this.selectedUserMobilPhone="",this.isFirstCall=!0}ngOnInit(){this.jobService.getJobTransactionByJobStatus("APPLIED").subscribe(o=>this.jobsTransaction=o.result)}onChange(o){this.isFirstCall=!1,this.selectedJobName=o.value.job.title,this.selectedJobCompany=o.value.job.company.name,this.selectedJobDescription=o.value.job.description.split("\n"),this.selectedUserName=o.value.user.fullName,this.selectedUserEmail=o.value.user.email,this.selectedUserMobilPhone=o.value.user.mobilePhone}static#e=this.\u0275fac=function(u){return new(u||s)(e.Y36(h.O))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-admin-appliedJobs"]],decls:13,vars:11,consts:[[1,"grid","p-fluid"],[1,"col-3"],[3,"options","listStyle","onChange"],["pTemplate","item"],[1,"col-9"],[1,"card"],[1,"job","detail"],[4,"ngIf","ngIfElse"],["other_content",""],[1,"flex","flex-wrap","p-2","align-items-center","gap-3"],[1,"flex-1","flex","flex-column","gap-2"],[1,"font-italic","font-bold"],[1,"font-medium"],[1,"flex","align-items-center","gap-2","font-medium"],["src","assets/layout/images/jobs/jobs.jpg","alt","Image","width","95%"],[2,"color","darkblue"],[1,"flex","justify-content-left","gap-2","align-items-center",2,"margin-bottom","10px"],[1,"pi","pi-inbox"],[1,"pi","pi-phone"],[1,"flex","justify-content-left","gap-2","align-items-center"],[1,"pi","pi-building"],[4,"ngFor","ngForOf"]],template:function(u,f){if(1&u&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-listbox",2),e.NdJ("onChange",function(v){return f.onChange(v)}),e.TgZ(3,"p-header"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,x,9,3,"ng-template",3),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5)(9,"p-scrollPanel",6),e.YNc(10,D,3,0,"div",7),e.YNc(11,p,19,9,"ng-template",null,8,e.W1O),e.qZA()()()()),2&u){const g=e.MAs(12);e.xp6(2),e.Q6J("options",f.jobsTransaction)("listStyle",e.DdM(9,T)),e.xp6(2),e.Oqu(e.lcZ(5,7,"APPLIED_JOBS")),e.xp6(5),e.Akn(e.DdM(10,t)),e.xp6(1),e.Q6J("ngIf",f.isFirstCall)("ngIfElse",g)}},dependencies:[m.sg,m.O5,C.Ri,M.h4,M.jx,B.E,w.P,y.X$],encapsulation:2})}return s})(),l=(()=>{class s{static#e=this.\u0275fac=function(u){return new(u||s)};static#t=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[i.Bz.forChild([{path:"",component:n}]),i.Bz]})}return s})();var a=r(707);let c=(()=>{class s{static#e=this.\u0275fac=function(u){return new(u||s)};static#t=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({providers:[h.O],imports:[m.ez,l,C.ON,a.hJ,B.$,w._,y.aw]})}return s})()},7338:(A,b,r)=>{r.d(b,{P:()=>D,_:()=>L});var m=r(6814),i=r(9291),e=r(5219),h=r(2076);const C=["container"],M=["content"],B=["xBar"],w=["yBar"];function y(p,T){1&p&&i.GkF(0)}const x=["*"];let D=(()=>{class p{platformId;el;zone;cd;document;renderer;style;styleClass;containerViewChild;contentViewChild;xBarViewChild;yBarViewChild;templates;scrollYRatio;scrollXRatio;timeoutFrame=t=>setTimeout(t,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;contentTemplate;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;constructor(t,n,l,a,c,s){this.platformId=t,this.el=n,this.zone=l,this.cd=a,this.document=c,this.renderer=s}ngAfterViewInit(){(0,m.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template})}calculateContainerHeight(){let t=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,l=this.xBarViewChild.nativeElement;const a=this.document.defaultView;let c=a.getComputedStyle(t),s=a.getComputedStyle(l),d=h.p.getHeight(t)-parseInt(s.height,10);"none"!=c["max-height"]&&0==d&&(t.style.height=n.offsetHeight+parseInt(s.height,10)>parseInt(c["max-height"],10)?c["max-height"]:n.offsetHeight+parseFloat(c.paddingTop)+parseFloat(c.paddingBottom)+parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth)+"px")}moveBar(){let t=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,l=this.xBarViewChild.nativeElement,a=n.scrollWidth,c=n.clientWidth,s=-1*(t.clientHeight-l.clientHeight);this.scrollXRatio=c/a;let d=this.yBarViewChild.nativeElement,o=n.scrollHeight,u=n.clientHeight,f=-1*(t.clientWidth-d.clientWidth);this.scrollYRatio=u/o,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)h.p.addClass(l,"p-scrollpanel-hidden");else{h.p.removeClass(l,"p-scrollpanel-hidden");const g=Math.max(100*this.scrollXRatio,10);l.style.cssText="width:"+g+"%; left:"+n.scrollLeft*(100-g)/(a-c)+"%;bottom:"+s+"px;"}if(this.scrollYRatio>=1)h.p.addClass(d,"p-scrollpanel-hidden");else{h.p.removeClass(d,"p-scrollpanel-hidden");const g=Math.max(100*this.scrollYRatio,10);d.style.cssText="height:"+g+"%; top: calc("+n.scrollTop*(100-g)/(o-u)+"% - "+l.clientHeight+"px);right:"+f+"px;"}}),this.cd.markForCheck()}onYBarMouseDown(t){this.isYBarClicked=!0,this.lastPageY=t.pageY,h.p.addClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),h.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}bindDocumentMouseListeners(){this.documentMouseMoveListener=this.renderer.listen(this.document,"mousemove",this.onDocumentMouseMove.bind(this)),this.documentMouseUpListener=this.renderer.listen(this.document,"mouseup",this.onDocumentMouseUp.bind(this))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.documentMouseMoveListener(),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(this.documentMouseUpListener(),this.documentMouseUpListener=null)}onXBarMouseDown(t){this.isXBarClicked=!0,this.lastPageX=t.pageX,h.p.addClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),h.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}onDocumentMouseMove(t){this.isXBarClicked?this.onMouseMoveForXBar(t):(this.isYBarClicked||this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))}onMouseMoveForXBar(t){let n=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=n/this.scrollXRatio})}onMouseMoveForYBar(t){let n=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=n/this.scrollYRatio})}scrollTop(t){let n=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;this.contentViewChild.nativeElement.scrollTop=t=t>n?n:t>0?t:0}onDocumentMouseUp(t){h.p.removeClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),h.p.removeClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),h.p.removeClass(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(t){(window.requestAnimationFrame||this.timeoutFrame)(t)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}ngOnDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=function(n){return new(n||p)(i.Y36(i.Lbi),i.Y36(i.SBq),i.Y36(i.R0b),i.Y36(i.sBO),i.Y36(m.K0),i.Y36(i.Qsj))};static \u0275cmp=i.Xpm({type:p,selectors:[["p-scrollPanel"]],contentQueries:function(n,l,a){if(1&n&&i.Suo(a,e.jx,4),2&n){let c;i.iGM(c=i.CRH())&&(l.templates=c)}},viewQuery:function(n,l){if(1&n&&(i.Gf(C,5),i.Gf(M,5),i.Gf(B,5),i.Gf(w,5)),2&n){let a;i.iGM(a=i.CRH())&&(l.containerViewChild=a.first),i.iGM(a=i.CRH())&&(l.contentViewChild=a.first),i.iGM(a=i.CRH())&&(l.xBarViewChild=a.first),i.iGM(a=i.CRH())&&(l.yBarViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:x,decls:11,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[1,"p-scrollpanel-wrapper"],[1,"p-scrollpanel-content"],["content",""],[4,"ngTemplateOutlet"],[1,"p-scrollpanel-bar","p-scrollpanel-bar-x"],["xBar",""],[1,"p-scrollpanel-bar","p-scrollpanel-bar-y"],["yBar",""]],template:function(n,l){1&n&&(i.F$t(),i.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3,4),i.Hsn(5),i.YNc(6,y,1,0,"ng-container",5),i.qZA()(),i._UZ(7,"div",6,7)(9,"div",8,9),i.qZA()),2&n&&(i.Tol(l.styleClass),i.Q6J("ngClass","p-scrollpanel p-component")("ngStyle",l.style),i.xp6(6),i.Q6J("ngTemplateOutlet",l.contentTemplate))},dependencies:[m.mk,m.tP,m.PC],styles:[".p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}\n"],encapsulation:2,changeDetection:0})}return p})(),L=(()=>{class p{static \u0275fac=function(n){return new(n||p)};static \u0275mod=i.oAB({type:p});static \u0275inj=i.cJS({imports:[m.ez]})}return p})()}}]);
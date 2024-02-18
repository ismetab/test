"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[618],{8618:(T,B,s)=>{s.r(B),s.d(B,{FetchNewJobsModule:()=>w});var p=s(6814),i=s(846),e=s(9291),c=s(6382),M=s(3999),b=s(707),y=s(7338),C=s(6223),L=s(3965);const E=function(){return{width:"100%"}};function P(a,H){if(1&a&&(e.TgZ(0,"p-scrollPanel"),e._UZ(1,"div",11),e.qZA()),2&a){const h=e.oxw();e.Akn(e.DdM(3,E)),e.xp6(1),e.Q6J("innerHtml",h.fetchResponse,e.oJD)}}const F=function(){return{width:"25rem"}};let d=(()=>{class a{constructor(h,u){this.jobFetcherService=h,this.translate=u,this.loading=!1}ngOnInit(){this.fetchAllProviders()}fetchNewJobs(){this.loading=!0,this.jobFetcherService.fetchNewJobs(this.selectedProvider).subscribe({next:h=>{this.fetchResponse=h.result,this.loading=!1},error:h=>{console.error(h),this.loading=!1}})}fetchAllProviders(){this.loading=!0,this.jobFetcherService.fetchAllProviders().subscribe({next:h=>{this.providers=h.result,this.loading=!1},error:h=>{console.error(h),this.loading=!1}})}static#e=this.\u0275fac=function(u){return new(u||a)(e.Y36(c.M),e.Y36(M.sK))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-admin-add-job"]],decls:15,vars:18,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[2,"color","darkblue"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12"],[3,"placeholder","options","dropdownIcon","emptyMessage","ngModel","ngModelChange"],[1,"flex","col-12","justify-content-end"],["icon","pi pi-plus","iconPos","right",3,"label","disabled","click"],[1,"flex","col-12"],[3,"style",4,"ngIf"],[3,"innerHtml"]],template:function(u,m){1&u&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",4)(7,"div",5)(8,"p-dropdown",6),e.NdJ("ngModelChange",function(V){return m.selectedProvider=V}),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"div",7)(11,"p-button",8),e.NdJ("click",function(){return m.fetchNewJobs()}),e.ALo(12,"translate"),e.qZA()(),e.TgZ(13,"div",9),e.YNc(14,P,2,4,"p-scrollPanel",10),e.qZA()()()()()),2&u&&(e.xp6(4),e.Oqu(e.lcZ(5,11,"FETCH_NEW_JOBS")),e.xp6(4),e.Akn(e.DdM(17,F)),e.s9C("placeholder",e.lcZ(9,13,"PROVIDER")),e.Q6J("options",m.providers)("dropdownIcon",m.loading?"pi pi-fw pi-spinner pi-spin":"pi pi-fw pi-angle-down")("emptyMessage",m.loading?"Providers are loading!":"Any provider could not be found!")("ngModel",m.selectedProvider),e.xp6(3),e.s9C("label",e.lcZ(12,15,"FETCH")),e.Q6J("disabled",!m.selectedProvider||m.loading),e.xp6(3),e.Q6J("ngIf",m.fetchResponse))},dependencies:[p.O5,b.zx,y.P,C.JJ,C.On,L.Lt,M.X$],encapsulation:2})}return a})(),A=(()=>{class a{static#e=this.\u0275fac=function(u){return new(u||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[i.Bz.forChild([{path:"",component:d}]),i.Bz]})}return a})();var t=s(9540),n=s(2892),o=s(3714),l=s(1480),r=s(7327),g=s(9663),v=s(354),D=s(8062),x=s(4055),Y=s(6218),f=s(6128);let w=(()=>{class a{static#e=this.\u0275fac=function(u){return new(u||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({providers:[c.M],imports:[p.ez,A,t.ON,b.hJ,n.$,y._,p.ez,C.u5,r.WN,l.Gg,L.kW,g.zz,v.L$,D.XH,x.q4,Y.A,o.j,f.Qy,M.aw]})}return a})()},7338:(T,B,s)=>{s.d(B,{P:()=>P,_:()=>F});var p=s(6814),i=s(9291),e=s(5219),c=s(2076);const M=["container"],b=["content"],y=["xBar"],C=["yBar"];function L(d,A){1&d&&i.GkF(0)}const E=["*"];let P=(()=>{class d{platformId;el;zone;cd;document;renderer;style;styleClass;containerViewChild;contentViewChild;xBarViewChild;yBarViewChild;templates;scrollYRatio;scrollXRatio;timeoutFrame=t=>setTimeout(t,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;contentTemplate;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;constructor(t,n,o,l,r,g){this.platformId=t,this.el=n,this.zone=o,this.cd=l,this.document=r,this.renderer=g}ngAfterViewInit(){(0,p.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template})}calculateContainerHeight(){let t=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement;const l=this.document.defaultView;let r=l.getComputedStyle(t),g=l.getComputedStyle(o),v=c.p.getHeight(t)-parseInt(g.height,10);"none"!=r["max-height"]&&0==v&&(t.style.height=n.offsetHeight+parseInt(g.height,10)>parseInt(r["max-height"],10)?r["max-height"]:n.offsetHeight+parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth)+"px")}moveBar(){let t=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement,l=n.scrollWidth,r=n.clientWidth,g=-1*(t.clientHeight-o.clientHeight);this.scrollXRatio=r/l;let v=this.yBarViewChild.nativeElement,D=n.scrollHeight,x=n.clientHeight,Y=-1*(t.clientWidth-v.clientWidth);this.scrollYRatio=x/D,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)c.p.addClass(o,"p-scrollpanel-hidden");else{c.p.removeClass(o,"p-scrollpanel-hidden");const f=Math.max(100*this.scrollXRatio,10);o.style.cssText="width:"+f+"%; left:"+n.scrollLeft*(100-f)/(l-r)+"%;bottom:"+g+"px;"}if(this.scrollYRatio>=1)c.p.addClass(v,"p-scrollpanel-hidden");else{c.p.removeClass(v,"p-scrollpanel-hidden");const f=Math.max(100*this.scrollYRatio,10);v.style.cssText="height:"+f+"%; top: calc("+n.scrollTop*(100-f)/(D-x)+"% - "+o.clientHeight+"px);right:"+Y+"px;"}}),this.cd.markForCheck()}onYBarMouseDown(t){this.isYBarClicked=!0,this.lastPageY=t.pageY,c.p.addClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),c.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}bindDocumentMouseListeners(){this.documentMouseMoveListener=this.renderer.listen(this.document,"mousemove",this.onDocumentMouseMove.bind(this)),this.documentMouseUpListener=this.renderer.listen(this.document,"mouseup",this.onDocumentMouseUp.bind(this))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.documentMouseMoveListener(),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(this.documentMouseUpListener(),this.documentMouseUpListener=null)}onXBarMouseDown(t){this.isXBarClicked=!0,this.lastPageX=t.pageX,c.p.addClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),c.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}onDocumentMouseMove(t){this.isXBarClicked?this.onMouseMoveForXBar(t):(this.isYBarClicked||this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))}onMouseMoveForXBar(t){let n=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=n/this.scrollXRatio})}onMouseMoveForYBar(t){let n=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=n/this.scrollYRatio})}scrollTop(t){let n=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;this.contentViewChild.nativeElement.scrollTop=t=t>n?n:t>0?t:0}onDocumentMouseUp(t){c.p.removeClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),c.p.removeClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),c.p.removeClass(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(t){(window.requestAnimationFrame||this.timeoutFrame)(t)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}ngOnDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=function(n){return new(n||d)(i.Y36(i.Lbi),i.Y36(i.SBq),i.Y36(i.R0b),i.Y36(i.sBO),i.Y36(p.K0),i.Y36(i.Qsj))};static \u0275cmp=i.Xpm({type:d,selectors:[["p-scrollPanel"]],contentQueries:function(n,o,l){if(1&n&&i.Suo(l,e.jx,4),2&n){let r;i.iGM(r=i.CRH())&&(o.templates=r)}},viewQuery:function(n,o){if(1&n&&(i.Gf(M,5),i.Gf(b,5),i.Gf(y,5),i.Gf(C,5)),2&n){let l;i.iGM(l=i.CRH())&&(o.containerViewChild=l.first),i.iGM(l=i.CRH())&&(o.contentViewChild=l.first),i.iGM(l=i.CRH())&&(o.xBarViewChild=l.first),i.iGM(l=i.CRH())&&(o.yBarViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:E,decls:11,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[1,"p-scrollpanel-wrapper"],[1,"p-scrollpanel-content"],["content",""],[4,"ngTemplateOutlet"],[1,"p-scrollpanel-bar","p-scrollpanel-bar-x"],["xBar",""],[1,"p-scrollpanel-bar","p-scrollpanel-bar-y"],["yBar",""]],template:function(n,o){1&n&&(i.F$t(),i.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3,4),i.Hsn(5),i.YNc(6,L,1,0,"ng-container",5),i.qZA()(),i._UZ(7,"div",6,7)(9,"div",8,9),i.qZA()),2&n&&(i.Tol(o.styleClass),i.Q6J("ngClass","p-scrollpanel p-component")("ngStyle",o.style),i.xp6(6),i.Q6J("ngTemplateOutlet",o.contentTemplate))},dependencies:[p.mk,p.tP,p.PC],styles:[".p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}\n"],encapsulation:2,changeDetection:0})}return d})(),F=(()=>{class d{static \u0275fac=function(n){return new(n||d)};static \u0275mod=i.oAB({type:d});static \u0275inj=i.cJS({imports:[p.ez]})}return d})()}}]);
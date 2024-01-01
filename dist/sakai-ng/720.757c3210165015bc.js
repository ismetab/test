"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[720],{2720:(O,r,o)=>{o.r(r),o.d(r,{JobSeekersModule:()=>F});var a=o(6814),c=o(2253),e=o(4946),S=o(6362),b=o(9397),x=o(6306),Z=o(2096),p=o(9862),h=o(553),J=o(1682);let m=(()=>{class t{constructor(s,n){this.http=s,this.messageService=n,this.jobSeekerUrl=h.N.apiUrl+h.N.user,this.httpOptions={headers:new p.WM({"Content-Type":"application/json"})}}getJobSeekers(){return this.http.get(this.jobSeekerUrl).pipe((0,b.b)(s=>this.log("Info","fetched jobSeekers")),(0,x.K)(this.handleError("getJobSeekers",[])))}handleError(s="operation",n){return i=>(console.error(i),this.log("Error",`${s} failed: ${i.message}`),(0,Z.of)(n))}log(s,n){this.messageService.add(`JobService: ${n}`)}static#e=this.\u0275fac=function(n){return new(n||t)(e.LFG(p.eN),e.LFG(J.e))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac})}return t})();var g=o(9540),u=o(5219),d=o(2892),f=o(7338);function C(t,l){if(1&t&&(e.TgZ(0,"div",9)(1,"div",10)(2,"span",11),e._uU(3),e.qZA(),e.TgZ(4,"div",12)(5,"span"),e._uU(6),e.qZA()()()()),2&t){const s=l.$implicit;e.xp6(3),e.Oqu(s.fullname),e.xp6(3),e.Oqu(s.username)}}function j(t,l){1&t&&(e.TgZ(0,"div"),e._UZ(1,"p-image",13),e.qZA())}function T(t,l){if(1&t&&(e.TgZ(0,"h3",14),e._uU(1),e.qZA(),e.TgZ(2,"div",15),e._UZ(3,"i",16),e.TgZ(4,"span",14),e._uU(5),e.qZA(),e._UZ(6,"i",17),e.TgZ(7,"span",14),e._uU(8),e.qZA()()),2&t){const s=e.oxw();e.xp6(1),e.Oqu(s.selectedFullName),e.xp6(4),e.Oqu(s.selectedUserName),e.xp6(3),e.Oqu(s.selectedMobilPhone)}}const U=function(){return{height:"43rem"}},k=function(){return{height:"42rem"}};let A=(()=>{class t{constructor(s,n){this.authService=s,this.jobSeekerService=n,this.selectedUserName="",this.selectedFullName="",this.selectedMobilPhone="",this.isFirstCall=!0}ngOnInit(){this.jobSeekerService.getJobSeekers().subscribe(s=>this.jobSeekers=s)}onChange(s){this.isFirstCall=!1,this.selectedUserName=s.value.username,this.selectedFullName=s.value.fullname,this.selectedMobilPhone=s.value.mobilPhone}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(S.$),e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-appliedJobs"]],decls:12,vars:8,consts:[[1,"grid","p-fluid"],[1,"col-3"],[3,"options","listStyle","onChange"],["pTemplate","item"],[1,"col-9"],[1,"card"],[1,"job","detail"],[4,"ngIf","ngIfElse"],["other_content",""],[1,"flex","flex-wrap","p-2","align-items-center","gap-3"],[1,"flex-1","flex","flex-column","gap-2"],[1,"font-bold"],[1,"flex","align-items-center","gap-2"],["src","assets/demo/images/jobs/jobs.jpg","alt","Image","width","95%"],[2,"color","darkblue"],[1,"flex","justify-content-left","gap-2","align-items-center",2,"margin-bottom","10px"],[1,"pi","pi-inbox"],[1,"pi","pi-phone"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-listbox",2),e.NdJ("onChange",function(M){return i.onChange(M)}),e.TgZ(3,"p-header"),e._uU(4,"All Job Seekers"),e.qZA(),e.YNc(5,C,7,2,"ng-template",3),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"p-scrollPanel",6),e.YNc(9,j,2,0,"div",7),e.YNc(10,T,9,3,"ng-template",null,8,e.W1O),e.qZA()()()()),2&n){const v=e.MAs(11);e.xp6(2),e.Q6J("options",i.jobSeekers)("listStyle",e.DdM(6,U)),e.xp6(6),e.Akn(e.DdM(7,k)),e.xp6(1),e.Q6J("ngIf",i.isFirstCall)("ngIfElse",v)}},dependencies:[a.O5,g.Ri,u.h4,u.jx,d.E,f.P],encapsulation:2})}return t})(),N=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:A}]),c.Bz]})}return t})();var y=o(707);let F=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({providers:[m],imports:[a.ez,N,g.ON,y.hJ,d.$,f._]})}return t})()}}]);
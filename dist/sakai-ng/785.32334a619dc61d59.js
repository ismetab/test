"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[785],{2785:(y,c,i)=>{i.r(c),i.d(c,{DeniedJobsModule:()=>A});var l=i(6814),p=i(846),e=i(9291),r=i(4429),m=i(9540),u=i(5219),d=i(2892),g=i(7338),h=i(3999);function b(n,o){if(1&n&&(e.TgZ(0,"div",9)(1,"div",10)(2,"span",11),e._uU(3),e.qZA(),e.TgZ(4,"span",12),e._uU(5),e.qZA(),e.TgZ(6,"div",13)(7,"span"),e._uU(8),e.qZA()()()()),2&n){const t=o.$implicit;e.xp6(3),e.Oqu(t.user.fullname),e.xp6(2),e.Oqu(t.job.title),e.xp6(3),e.Oqu(t.job.companyName)}}function Z(n,o){1&n&&(e.TgZ(0,"div")(1,"p-image",14),e._uU(2,">"),e.qZA()())}function x(n,o){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.hij(" ",t," ")}}function J(n,o){if(1&n&&(e.TgZ(0,"h3",15),e._uU(1),e.qZA(),e.TgZ(2,"div",16),e._UZ(3,"i",17),e.TgZ(4,"span",15),e._uU(5),e.qZA(),e._UZ(6,"i",18),e.TgZ(7,"span",15),e._uU(8),e.qZA()(),e.TgZ(9,"h3",15),e._uU(10),e.qZA(),e.TgZ(11,"div",19),e._UZ(12,"i",20),e.TgZ(13,"span",15),e._uU(14),e.qZA()(),e.TgZ(15,"h5",15),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.YNc(18,x,2,1,"p",21)),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.selectedUserName),e.xp6(4),e.Oqu(t.selectedUserEmail),e.xp6(3),e.Oqu(t.selectedUserMobilPhone),e.xp6(2),e.Oqu(t.selectedJobName),e.xp6(4),e.Oqu(t.selectedJobCompany),e.xp6(2),e.Oqu(e.lcZ(17,7,"JOB_DESCRIPTION")),e.xp6(2),e.Q6J("ngForOf",t.selectedJobDescription)}}const v=function(){return{height:"43rem"}},T=function(){return{height:"42rem"}};let U=(()=>{class n{constructor(t){this.jobService=t,this.selectedJobCompany="",this.selectedJobName="",this.selectedUserName="",this.selectedUserEmail="",this.selectedUserMobilPhone="",this.isFirstCall=!0}ngOnInit(){this.jobService.getJobTransactionByJobStatus("DENIED").subscribe(t=>this.jobsTransaction=t.result)}onChange(t){this.isFirstCall=!1,this.selectedJobName=t.value.job.title,this.selectedJobCompany=t.value.job.company.name,this.selectedJobDescription=t.value.job.description.split("\n"),this.selectedUserName=t.value.user.fullName,this.selectedUserEmail=t.value.user.email,this.selectedUserMobilPhone=t.value.user.mobilePhone}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(r.O))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-deniedJobs"]],decls:13,vars:11,consts:[[1,"grid","p-fluid"],[1,"col-3"],[3,"options","listStyle","onChange"],["pTemplate","item"],[1,"col-9"],[1,"card"],[1,"job","detail"],[4,"ngIf","ngIfElse"],["other_content",""],[1,"flex","flex-wrap","p-2","align-items-center","gap-3"],[1,"flex-1","flex","flex-column","gap-2"],[1,"font-italic","font-bold"],[1,"font-medium"],[1,"flex","align-items-center","gap-2","font-medium"],["src","assets/layout/images/jobs/jobs.jpg","alt","Image","width","95%"],[2,"color","darkblue"],[1,"flex","justify-content-left","gap-2","align-items-center",2,"margin-bottom","10px"],[1,"pi","pi-inbox"],[1,"pi","pi-phone"],[1,"flex","justify-content-left","gap-2","align-items-center"],[1,"pi","pi-building"],[4,"ngFor","ngForOf"]],template:function(s,a){if(1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-listbox",2),e.NdJ("onChange",function(D){return a.onChange(D)}),e.TgZ(3,"p-header"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,b,9,3,"ng-template",3),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5)(9,"p-scrollPanel",6),e.YNc(10,Z,3,0,"div",7),e.YNc(11,J,19,9,"ng-template",null,8,e.W1O),e.qZA()()()()),2&s){const f=e.MAs(12);e.xp6(2),e.Q6J("options",a.jobsTransaction)("listStyle",e.DdM(9,v)),e.xp6(2),e.Oqu(e.lcZ(5,7,"DENIED_JOBS")),e.xp6(5),e.Akn(e.DdM(10,T)),e.xp6(1),e.Q6J("ngIf",a.isFirstCall)("ngIfElse",f)}},dependencies:[l.sg,l.O5,m.Ri,u.h4,u.jx,d.E,g.P,h.X$],encapsulation:2})}return n})(),C=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:U}]),p.Bz]})}return n})();var j=i(707),O=i(1913);let A=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({providers:[r.O],imports:[l.ez,C,m.ON,j.hJ,d.$,g._,O.l,h.aw]})}return n})()}}]);
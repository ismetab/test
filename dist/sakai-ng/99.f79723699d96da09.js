"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[99],{2105:(b,u,t)=>{t.r(u),t.d(u,{LoginModule:()=>k});var o=t(6814),c=t(2253),p=t(553),l=t(1206),e=t(4946),g=t(3859),d=t(6362),s=t(707),f=t(8057),v=t(3714),m=t(95),C=t(7853),y=t(4480);function M(n,A){if(1&n&&(e.TgZ(0,"div",21),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.hij(" ",i.errorMessage," ")}}const x=function(){return["/auth/login"]},L=function(n){return[n]};let T=(()=>{class n{constructor(i,r,a){this.layoutService=i,this.router=r,this.authService=a,this.valCheck=["remember"],this.errorMessage="",this.environment=p.N}onSubmit(){this.authService.login(this.email,this.password).subscribe({next:i=>{console.log("Login successful",i),this.router.navigate([l.c.getDashboardURL(this.authService.getUserRoles())])},error:i=>{console.error("Login failed",i),this.errorMessage="Login failed. Please check your credentials and try again."}})}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(g.P),e.Y36(c.F0),e.Y36(d.$))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:31,vars:12,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0",3,"src"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[1,"p-float-label"],["id","email1","type","text","pInputText","",1,"w-full","md:w-30rem","mb-4",2,"padding","1rem",3,"ngModel","ngModelChange"],["for","email1"],["id","password1","styleClass","mb-4","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModel","toggleMask","feedback","ngModelChange"],["for","password1"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["label","Forgot password?","styleClass","p-button-link",3,"routerLink"],["class","error-message",4,"ngIf"],["pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl",3,"click"],[1,"text-center"],["label","Don't have an account? Sign up","styleClass","p-button-link",3,"routerLink"],[1,"error-message"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._uU(7,"Welcome to Permitta AG"),e.qZA(),e.TgZ(8,"span",7),e._uU(9,"Sign in to continue"),e.qZA()(),e.TgZ(10,"div")(11,"div")(12,"span",8)(13,"input",9),e.NdJ("ngModelChange",function(h){return a.email=h}),e.qZA(),e.TgZ(14,"label",10),e._uU(15,"Email address"),e.qZA()()(),e.TgZ(16,"div")(17,"span",8)(18,"p-password",11),e.NdJ("ngModelChange",function(h){return a.password=h}),e.qZA(),e.TgZ(19,"label",12),e._uU(20,"Password"),e.qZA()()(),e.TgZ(21,"div",13)(22,"div",14),e._UZ(23,"p-checkbox",15),e.TgZ(24,"label"),e._uU(25,"Remember me"),e.qZA()(),e._UZ(26,"p-button",16),e.qZA(),e.YNc(27,M,2,1,"div",17),e.TgZ(28,"button",18),e.NdJ("click",function(){return a.onSubmit()}),e.qZA(),e.TgZ(29,"div",19),e._UZ(30,"p-button",20),e.qZA()()()()()()),2&r&&(e.xp6(2),e.MGl("src","assets/layout/images/","light"===a.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(11),e.Q6J("ngModel",a.email),e.xp6(5),e.Q6J("ngModel",a.password)("toggleMask",!0)("feedback",!1),e.xp6(5),e.Q6J("binary",!0),e.xp6(3),e.Q6J("routerLink",e.DdM(9,x)),e.xp6(1),e.Q6J("ngIf",a.errorMessage),e.xp6(3),e.Q6J("routerLink",e.VKq(10,L,a.environment.registerPage)))},dependencies:[o.O5,c.rH,s.Hq,s.zx,f.XZ,v.o,m.Fj,m.JJ,m.On,C.ro,y.H],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}return n})(),w=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:T}]),c.Bz]})}return n})(),k=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[o.ez,w,s.hJ,f.nD,v.j,m.u5,C.gz,y.T]})}return n})()},2591:(b,u,t)=>{t.d(u,{n:()=>p});var o=t(4946),c=t(4713);let p=(()=>{class l extends c.s{static \u0275fac=function(){let g;return function(s){return(g||(g=o.n5z(l)))(s||l)}}();static \u0275cmp=o.Xpm({type:l,selectors:[["CheckIcon"]],standalone:!0,features:[o.qOj,o.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(d,s){1&d&&(o.O4$(),o.TgZ(0,"svg",0),o._UZ(1,"path",1),o.qZA()),2&d&&(o.Tol(s.getClassNames()),o.uIk("aria-label",s.ariaLabel)("aria-hidden",s.ariaHidden)("role",s.role))},encapsulation:2})}return l})()}}]);
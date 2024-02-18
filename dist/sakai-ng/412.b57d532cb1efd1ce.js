"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[412],{3598:(O,C,l)=>{l.r(C),l.d(C,{LoginModule:()=>u});var c=l(6814),n=l(846),_=l(553),d=l(845),e=l(9291),h=l(3859),f=l(5777),p=l(9770),x=l(3999),v=l(8672),k=l(707),M=l(8057),T=l(3714),b=l(6223),Z=l(7853),E=l(4480),A=l(7161);function I(t,i){if(1&t&&e._UZ(0,"p-message",26),2&t){const o=e.oxw();e.s9C("text",o.errorMessage)}}const L=function(){return["/auth/login"]},y=function(t){return[t]};let S=(()=>{class t{constructor(o,r,s,g,m,D){this.layoutService=o,this.router=r,this.authService=s,this.languageService=g,this.translate=m,this.spinner=D,this.valCheck=["remember"],this.errorMessage="",this.environment=_.N,this.languageService.currentLanguage.subscribe(J=>{this.translate.use(J)})}onSubmit(){this.spinner.show(),this.authService.login(this.email,this.password).subscribe({next:o=>{console.log("Login successful",o),this.spinner.hide(),this.router.navigate([d.c.getDashboardURL(this.authService.getUserRoles())])},error:o=>{console.error("Login failed",o),this.spinner.hide(),this.errorMessage="Login failed. Please check your credentials and try again."}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(h.P),e.Y36(n.F0),e.Y36(f.$),e.Y36(p.T),e.Y36(x.sK),e.Y36(v.t2))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:49,vars:42,consts:[["bdColor","rgba(51, 51, 51, 0.8)","size","large","color","#fff","fullScreen","true"],[1,"loading"],[1,"box1"],[1,"box2"],[1,"box3"],[1,"box4"],[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0",3,"src"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[1,"p-float-label"],["id","email1","type","text","pInputText","",1,"w-full","md:w-30rem","mb-4",2,"padding","1rem",3,"ngModel","ngModelChange"],["for","email1"],["id","password1","styleClass","mb-4","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModel","toggleMask","feedback","ngModelChange"],["for","password1"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["styleClass","p-button-link",3,"label","routerLink"],["pButton","","pRipple","",1,"w-full","p-3","text-xl",3,"label","click"],[1,"text-center"],["severity","error",3,"text",4,"ngIf"],["severity","error",3,"text"]],template:function(r,s){1&r&&(e.TgZ(0,"ngx-spinner",0)(1,"div",1),e._UZ(2,"span",2)(3,"span",3)(4,"span",4)(5,"span",5),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7),e._UZ(8,"img",8),e.TgZ(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"span",13),e._uU(16),e.ALo(17,"translate"),e.qZA()(),e.TgZ(18,"div")(19,"div")(20,"span",14)(21,"input",15),e.NdJ("ngModelChange",function(m){return s.email=m}),e.qZA(),e.TgZ(22,"label",16),e._uU(23),e.ALo(24,"translate"),e.qZA()()(),e.TgZ(25,"div")(26,"span",14)(27,"p-password",17),e.NdJ("ngModelChange",function(m){return s.password=m}),e.qZA(),e.TgZ(28,"label",18),e._uU(29),e.ALo(30,"translate"),e.qZA()()(),e.TgZ(31,"div",19)(32,"div",20),e._UZ(33,"p-checkbox",21),e.TgZ(34,"label"),e._uU(35),e.ALo(36,"translate"),e.qZA()(),e._UZ(37,"p-button",22),e.ALo(38,"translate"),e.qZA(),e.TgZ(39,"button",23),e.NdJ("click",function(){return s.onSubmit()}),e.ALo(40,"translate"),e.qZA(),e.TgZ(41,"div",24),e._UZ(42,"p-button",22),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"div",24),e._UZ(45,"p-button",22),e.ALo(46,"translate"),e.qZA(),e.TgZ(47,"div",24),e.YNc(48,I,1,1,"p-message",25),e.qZA()()()()()()),2&r&&(e.xp6(8),e.MGl("src","assets/layout/images/","light"===s.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(5),e.Oqu(e.lcZ(14,19,"WELCOME_MESSAGE")),e.xp6(3),e.Oqu(e.lcZ(17,21,"SIGN_IN_MESSAGE")),e.xp6(5),e.Q6J("ngModel",s.email),e.xp6(2),e.Oqu(e.lcZ(24,23,"EMAIL_ADDRESS_LABEL")),e.xp6(4),e.Q6J("ngModel",s.password)("toggleMask",!0)("feedback",!1),e.xp6(2),e.Oqu(e.lcZ(30,25,"PASSWORD_LABEL")),e.xp6(4),e.Q6J("binary",!0),e.xp6(2),e.Oqu(e.lcZ(36,27,"REMEMBER_ME_MESSAGE")),e.xp6(2),e.s9C("label",e.lcZ(38,29,"FORGOT_PASSWORD_MESSAGE")),e.Q6J("routerLink",e.DdM(37,L)),e.xp6(2),e.s9C("label",e.lcZ(40,31,"SIGN_IN_LABEL")),e.xp6(3),e.s9C("label",e.lcZ(43,33,"DONT_HAVE_ACCOUNT_MESSAGE")),e.Q6J("routerLink",e.VKq(38,y,s.environment.registerPage)),e.xp6(3),e.s9C("label",e.lcZ(46,35,"JOB_LISTING_TEXT")),e.Q6J("routerLink",e.VKq(40,y,s.environment.public)),e.xp6(3),e.Q6J("ngIf",s.errorMessage))},dependencies:[c.O5,n.rH,k.Hq,k.zx,M.XZ,T.o,b.Fj,b.JJ,b.On,Z.ro,E.H,A.q,v.Ro,x.X$],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}return t})(),a=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[n.Bz.forChild([{path:"",component:S}]),n.Bz]})}return t})(),u=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[c.ez,a,k.hJ,M.nD,T.j,b.u5,Z.gz,E.T,x.aw,A.O,v.ef]})}return t})()},8057:(O,C,l)=>{l.d(C,{XZ:()=>y,nD:()=>S});var c=l(6814),n=l(9291),_=l(6223),d=l(2332),e=l(5219),h=l(2591);const f=["cb"];function p(a,u){if(1&a&&n._UZ(0,"span",10),2&a){const t=n.oxw(3);n.Q6J("ngClass",t.checkboxIcon)}}function x(a,u){1&a&&n._UZ(0,"CheckIcon",11),2&a&&n.Q6J("styleClass","p-checkbox-icon")}function v(a,u){if(1&a&&(n.ynx(0),n.YNc(1,p,1,1,"span",8),n.YNc(2,x,1,1,"CheckIcon",9),n.BQk()),2&a){const t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",t.checkboxIcon),n.xp6(1),n.Q6J("ngIf",!t.checkboxIcon)}}function k(a,u){}function M(a,u){1&a&&n.YNc(0,k,0,0,"ng-template")}function T(a,u){if(1&a&&(n.TgZ(0,"span",12),n.YNc(1,M,1,0,null,13),n.qZA()),2&a){const t=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",t.checkboxIconTemplate)}}function b(a,u){if(1&a&&(n.ynx(0),n.YNc(1,v,3,2,"ng-container",5),n.YNc(2,T,2,1,"span",7),n.BQk()),2&a){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",!t.checkboxIconTemplate),n.xp6(1),n.Q6J("ngIf",t.checkboxIconTemplate)}}const Z=function(a,u,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":a,"p-disabled":u,"p-checkbox-label-focus":t}};function E(a,u){if(1&a){const t=n.EpF();n.TgZ(0,"label",14),n.NdJ("click",function(o){n.CHM(t);const r=n.oxw(),s=n.MAs(3);return n.KtG(r.onClick(o,s,!0))}),n._uU(1),n.qZA()}if(2&a){const t=n.oxw();n.Tol(t.labelStyleClass),n.Q6J("ngClass",n.kEZ(5,Z,t.checked(),t.disabled,t.focused)),n.uIk("for",t.inputId),n.xp6(1),n.Oqu(t.label)}}const A=function(a,u,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":a,"p-checkbox-disabled":u,"p-checkbox-focused":t}},I=function(a,u,t){return{"p-highlight":a,"p-disabled":u,"p-focus":t}},L={provide:_.JU,useExisting:(0,n.Gpc)(()=>y),multi:!0};let y=(()=>{class a{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new n.vpe;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{"icon"===t.getType()&&(this.checkboxIconTemplate=t.template)})}onClick(t,i,o){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),o&&i.focus())}updateModel(t){let i;this.binary?(i=this.checked()?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(i=this.checked()?this.model.filter(o=>!d.gb.equals(o,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this.onChange.emit({checked:i,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:d.gb.contains(this.value,this.model)}static \u0275fac=function(i){return new(i||a)(n.Y36(n.sBO))};static \u0275cmp=n.Xpm({type:a,selectors:[["p-checkbox"]],contentQueries:function(i,o,r){if(1&i&&n.Suo(r,e.jx,4),2&i){let s;n.iGM(s=n.CRH())&&(o.templates=s)}},viewQuery:function(i,o){if(1&i&&n.Gf(f,5),2&i){let r;n.iGM(r=n.CRH())&&(o.inputViewChild=r.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[n._Bn([L])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(i,o){if(1&i){const r=n.EpF();n.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),n.NdJ("focus",function(){return o.onFocus()})("blur",function(){return o.onBlur()})("change",function(g){return o.handleChange(g)}),n.qZA()(),n.TgZ(4,"div",4),n.NdJ("click",function(g){n.CHM(r);const m=n.MAs(3);return n.KtG(o.onClick(g,m,!0))}),n.YNc(5,b,3,2,"ng-container",5),n.qZA()(),n.YNc(6,E,2,9,"label",6)}2&i&&(n.Tol(o.styleClass),n.Q6J("ngStyle",o.style)("ngClass",n.kEZ(18,A,o.checked(),o.disabled,o.focused)),n.xp6(2),n.Q6J("readonly",o.readonly)("value",o.value)("checked",o.checked())("disabled",o.disabled),n.uIk("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-checked",o.checked())("required",o.required),n.xp6(2),n.Q6J("ngClass",n.kEZ(22,I,o.checked(),o.disabled,o.focused)),n.xp6(1),n.Q6J("ngIf",o.checked()),n.xp6(1),n.Q6J("ngIf",o.label))},dependencies:function(){return[c.mk,c.O5,c.tP,c.PC,h.n]},styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0})}return a})(),S=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=n.oAB({type:a});static \u0275inj=n.cJS({imports:[c.ez,h.n,e.m8]})}return a})()},5865:(O,C,l)=>{l.d(C,{t:()=>_});var c=l(9291),n=l(4713);let _=(()=>{class d extends n.s{static \u0275fac=function(){let h;return function(p){return(h||(h=c.n5z(d)))(p||d)}}();static \u0275cmp=c.Xpm({type:d,selectors:[["EyeIcon"]],standalone:!0,features:[c.qOj,c.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(f,p){1&f&&(c.O4$(),c.TgZ(0,"svg",0),c._UZ(1,"path",1),c.qZA()),2&f&&(c.Tol(p.getClassNames()),c.uIk("aria-label",p.ariaLabel)("aria-hidden",p.ariaHidden)("role",p.role))},encapsulation:2})}return d})()}}]);
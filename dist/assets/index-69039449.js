import{b as q,d as E,u as j,c as _,i as k,o as y,a as B,r as K,e as d,w as f,f as W,g as p,n as h,h as t,t as Z,v as G,T as J,_ as Q,j as le,k as ie,l as P,m as X,s as re,p as N,q as H,x as ce,y as ue,z as de,A as pe,B as w,C as me,D as I,E as $,F as fe,G as ge,H as ye,I as ve,J as _e,K as F,L as Y,M as L,N as V,O as he,P as Ce,Q as b,R,S as be,U as Te,V as we,W as Ee,X as xe,Y as Me}from"./index-41bbc3ae.js";import{m as Ie,E as Be,a as A,u as Se,b as Ne}from"./overlay-4a18f9f2.js";const ke=q({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),$e=["textContent"],Le=E({name:"ElBadge"}),ze=E({...Le,props:ke,setup(s,{expose:n}){const e=s,a=j("badge"),o=_(()=>e.isDot?"":k(e.value)&&k(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:o}),(i,r)=>(y(),B("div",{class:h(t(a).b())},[K(i.$slots,"default"),d(J,{name:`${t(a).namespace.value}-zoom-in-center`,persisted:""},{default:f(()=>[W(p("sup",{class:h([t(a).e("content"),t(a).em("content",i.type),t(a).is("fixed",!!i.$slots.default),t(a).is("dot",i.isDot)]),textContent:Z(t(o))},null,10,$e),[[G,!i.hidden&&(t(o)||i.isDot)]])]),_:1},8,["name"])],2))}});var De=Q(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Oe=le(De),ee=["success","info","warning","error"],c=Ie({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:X?document.body:void 0}),Pe=q({customClass:{type:String,default:c.customClass},center:{type:Boolean,default:c.center},dangerouslyUseHTMLString:{type:Boolean,default:c.dangerouslyUseHTMLString},duration:{type:Number,default:c.duration},icon:{type:ie,default:c.icon},id:{type:String,default:c.id},message:{type:P([String,Object,Function]),default:c.message},onClose:{type:P(Function),required:!1},showClose:{type:Boolean,default:c.showClose},type:{type:String,values:ee,default:c.type},offset:{type:Number,default:c.offset},zIndex:{type:Number,default:c.zIndex},grouping:{type:Boolean,default:c.grouping},repeatNum:{type:Number,default:c.repeatNum}}),He={destroy:()=>!0},g=re([]),Fe=s=>{const n=g.findIndex(o=>o.id===s),e=g[n];let a;return n>0&&(a=g[n-1]),{current:e,prev:a}},Ve=s=>{const{prev:n}=Fe(s);return n?n.vm.exposed.bottom.value:0},Re=["id"],Ae=["innerHTML"],Ue=E({name:"ElMessage"}),qe=E({...Ue,props:Pe,emits:He,setup(s,{expose:n}){const e=s,{Close:a}=ve,o=j("message"),i=N(),r=N(!1),u=N(0);let m;const v=_(()=>e.type?e.type==="error"?"danger":e.type:"info"),x=_(()=>{const l=e.type;return{[o.bm("icon",l)]:l&&H[l]}}),C=_(()=>e.icon||H[e.type]||""),ne=_(()=>Ve(e.id)),z=_(()=>e.offset+ne.value),te=_(()=>u.value+z.value),oe=_(()=>({top:`${z.value}px`,zIndex:e.zIndex}));function S(){e.duration!==0&&({stop:m}=_e(()=>{M()},e.duration))}function D(){m==null||m()}function M(){r.value=!1}function ae({code:l}){l===Be.esc&&M()}return ce(()=>{S(),r.value=!0}),ue(()=>e.repeatNum,()=>{D(),S()}),de(document,"keydown",ae),pe(i,()=>{u.value=i.value.getBoundingClientRect().height}),n({visible:r,bottom:te,close:M}),(l,O)=>(y(),w(J,{name:t(o).b("fade"),onBeforeLeave:l.onClose,onAfterLeave:O[0]||(O[0]=os=>l.$emit("destroy")),persisted:""},{default:f(()=>[W(p("div",{id:l.id,ref_key:"messageRef",ref:i,class:h([t(o).b(),{[t(o).m(l.type)]:l.type&&!l.icon},t(o).is("center",l.center),t(o).is("closable",l.showClose),l.customClass]),style:me(t(oe)),role:"alert",onMouseenter:D,onMouseleave:S},[l.repeatNum>1?(y(),w(t(Oe),{key:0,value:l.repeatNum,type:t(v),class:h(t(o).e("badge"))},null,8,["value","type","class"])):I("v-if",!0),t(C)?(y(),w(t($),{key:1,class:h([t(o).e("icon"),t(x)])},{default:f(()=>[(y(),w(fe(t(C))))]),_:1},8,["class"])):I("v-if",!0),K(l.$slots,"default",{},()=>[l.dangerouslyUseHTMLString?(y(),B(ge,{key:1},[I(" Caution here, message could've been compromised, never use user's input as message "),p("p",{class:h(t(o).e("content")),innerHTML:l.message},null,10,Ae)],2112)):(y(),B("p",{key:0,class:h(t(o).e("content"))},Z(l.message),3))]),l.showClose?(y(),w(t($),{key:2,class:h(t(o).e("closeBtn")),onClick:ye(M,["stop"])},{default:f(()=>[d(t(a))]),_:1},8,["class","onClick"])):I("v-if",!0)],46,Re),[[G,r.value]])]),_:3},8,["name","onBeforeLeave"]))}});var je=Q(qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ke=1;const se=s=>{const n=!s||F(s)||Y(s)||L(s)?{message:s}:s,e={...c,...n};if(!e.appendTo)e.appendTo=document.body;else if(F(e.appendTo)){let a=document.querySelector(e.appendTo);he(a)||(a=document.body),e.appendTo=a}return e},We=s=>{const n=g.indexOf(s);if(n===-1)return;g.splice(n,1);const{handler:e}=s;e.close()},Ze=({appendTo:s,...n},e)=>{const{nextZIndex:a}=Se(),o=`message_${Ke++}`,i=n.onClose,r=document.createElement("div"),u={...n,zIndex:a()+n.zIndex,id:o,onClose:()=>{i==null||i(),We(C)},onDestroy:()=>{V(null,r)}},m=d(je,u,L(u.message)||Y(u.message)?{default:L(u.message)?u.message:()=>u.message}:null);m.appContext=e||T._context,V(m,r),s.appendChild(r.firstElementChild);const v=m.component,C={id:o,vnode:m,vm:v,handler:{close:()=>{v.exposed.visible.value=!1}},props:m.component.props};return C},T=(s={},n)=>{if(!X)return{close:()=>{}};if(k(A.max)&&g.length>=A.max)return{close:()=>{}};const e=se(s);if(e.grouping&&g.length){const o=g.find(({vnode:i})=>{var r;return((r=i.props)==null?void 0:r.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Ze(e,n);return g.push(a),a.handler};ee.forEach(s=>{T[s]=(n={},e)=>{const a=se(n);return T({...a,type:s},e)}});function Ge(s){for(const n of g)(!s||s===n.props.type)&&n.handler.close()}T.closeAll=Ge;T._context=null;const U=Ce(T,"$message");const Je=p("p",{class:"text-white text-5xl bg-primary-default py-28 text-center"},"This is Home view",-1),Qe={class:"p-10"},Xe={class:"py-6 border-b"},Ye={class:"py-6 border-b"},es={class:"py-6 border-b"},ss={class:"py-6 border-b"},ns=p("p",null,"Element Icons Auto Import",-1),ts=p("pre",{class:"bg-gray-700 text-gray-200 rounded-lg"},[b("                    "),p("code",null,`
                        <el-icon><ElIconPlus /></el-icon>
                        <el-icon><ElIconMinus /></el-icon>
                        <el-icon><ElIconCirclePlus /></el-icon>
                    `),b(`
                `)],-1),is=E({__name:"index",setup(s){const n=()=>{R.showLoading("加载中，请稍后..."),setTimeout(()=>{R.hideLoading()},3e3)},e=()=>{be.info("自定义提示消息")},a=()=>{Ne.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{U({type:"success",message:"Delete completed"})}).catch(()=>{U({type:"info",message:"Delete canceled"})})};return(o,i)=>{const r=Te,u=we,m=Ee,v=$,x=xe,C=Me;return y(),B("div",null,[Je,p("div",Qe,[p("div",Xe,[b("svgIcon: "),d(r,{"icon-class":"loading"})]),p("div",Ye,[d(u,{onClick:n},{default:f(()=>[b(" Show Loading ")]),_:1})]),p("div",es,[d(u,{onClick:e},{default:f(()=>[b(" Show Message ")]),_:1})]),p("div",ss,[d(u,{onClick:a},{default:f(()=>[b(" Element MessageBox ")]),_:1})]),p("div",null,[ns,d(v,null,{default:f(()=>[d(m)]),_:1}),d(v,null,{default:f(()=>[d(x)]),_:1}),d(v,null,{default:f(()=>[d(C)]),_:1}),ts])])])}}});export{is as default};

import{b as q,d as w,u as j,c as v,i as I,o as y,a as x,r as K,e as d,w as f,f as Z,g as p,n as h,h as t,t as G,v as J,T as Q,_ as W,j as le,k as P,l as X,s as re,m as k,p as ce,q as ie,x as ue,y as de,z as T,A as pe,B,E as $,C as me,F as fe,D as ge,G as ye,H as F,I as Y,J as L,K as H,L as _e,M as ve,N as S,O as R,P as he,Q as Ce,R as be,S as Te,U as we}from"./index-734d2655.js";import{i as Ee,T as V,a as Me,E as Be}from"./button-5aad4e95.js";import{m as Se,E as xe,a as A,u as Ne,b as ke}from"./overlay-a3e2a9c5.js";const Ie=q({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),$e=["textContent"],Le=w({name:"ElBadge"}),ze=w({...Le,props:Ie,setup(s,{expose:n}){const e=s,a=j("badge"),o=v(()=>e.isDot?"":I(e.value)&&I(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:o}),(r,c)=>(y(),x("div",{class:h(t(a).b())},[K(r.$slots,"default"),d(Q,{name:`${t(a).namespace.value}-zoom-in-center`,persisted:""},{default:f(()=>[Z(p("sup",{class:h([t(a).e("content"),t(a).em("content",r.type),t(a).is("fixed",!!r.$slots.default),t(a).is("dot",r.isDot)]),textContent:G(t(o))},null,10,$e),[[J,!r.hidden&&(t(o)||r.isDot)]])]),_:1},8,["name"])],2))}});var De=W(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Oe=le(De),ee=["success","info","warning","error"],i=Se({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:X?document.body:void 0}),Pe=q({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:Ee,default:i.icon},id:{type:String,default:i.id},message:{type:P([String,Object,Function]),default:i.message},onClose:{type:P(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:ee,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Fe={destroy:()=>!0},g=re([]),He=s=>{const n=g.findIndex(o=>o.id===s),e=g[n];let a;return n>0&&(a=g[n-1]),{current:e,prev:a}},Re=s=>{const{prev:n}=He(s);return n?n.vm.exposed.bottom.value:0},Ve=["id"],Ae=["innerHTML"],Ue=w({name:"ElMessage"}),qe=w({...Ue,props:Pe,emits:Fe,setup(s,{expose:n}){const e=s,{Close:a}=Me,o=j("message"),r=k(),c=k(!1),u=k(0);let m;const _=v(()=>e.type?e.type==="error"?"danger":e.type:"info"),E=v(()=>{const l=e.type;return{[o.bm("icon",l)]:l&&V[l]}}),C=v(()=>e.icon||V[e.type]||""),ne=v(()=>Re(e.id)),z=v(()=>e.offset+ne.value),te=v(()=>u.value+z.value),oe=v(()=>({top:`${z.value}px`,zIndex:e.zIndex}));function N(){e.duration!==0&&({stop:m}=ye(()=>{M()},e.duration))}function D(){m==null||m()}function M(){c.value=!1}function ae({code:l}){l===xe.esc&&M()}return ce(()=>{N(),c.value=!0}),ie(()=>e.repeatNum,()=>{D(),N()}),ue(document,"keydown",ae),de(r,()=>{u.value=r.value.getBoundingClientRect().height}),n({visible:c,bottom:te,close:M}),(l,O)=>(y(),T(Q,{name:t(o).b("fade"),onBeforeLeave:l.onClose,onAfterLeave:O[0]||(O[0]=os=>l.$emit("destroy")),persisted:""},{default:f(()=>[Z(p("div",{id:l.id,ref_key:"messageRef",ref:r,class:h([t(o).b(),{[t(o).m(l.type)]:l.type&&!l.icon},t(o).is("center",l.center),t(o).is("closable",l.showClose),l.customClass]),style:pe(t(oe)),role:"alert",onMouseenter:D,onMouseleave:N},[l.repeatNum>1?(y(),T(t(Oe),{key:0,value:l.repeatNum,type:t(_),class:h(t(o).e("badge"))},null,8,["value","type","class"])):B("v-if",!0),t(C)?(y(),T(t($),{key:1,class:h([t(o).e("icon"),t(E)])},{default:f(()=>[(y(),T(me(t(C))))]),_:1},8,["class"])):B("v-if",!0),K(l.$slots,"default",{},()=>[l.dangerouslyUseHTMLString?(y(),x(fe,{key:1},[B(" Caution here, message could've been compromised, never use user's input as message "),p("p",{class:h(t(o).e("content")),innerHTML:l.message},null,10,Ae)],2112)):(y(),x("p",{key:0,class:h(t(o).e("content"))},G(l.message),3))]),l.showClose?(y(),T(t($),{key:2,class:h(t(o).e("closeBtn")),onClick:ge(M,["stop"])},{default:f(()=>[d(t(a))]),_:1},8,["class","onClick"])):B("v-if",!0)],46,Ve),[[J,c.value]])]),_:3},8,["name","onBeforeLeave"]))}});var je=W(qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ke=1;const se=s=>{const n=!s||F(s)||Y(s)||L(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(F(e.appendTo)){let a=document.querySelector(e.appendTo);_e(a)||(a=document.body),e.appendTo=a}return e},Ze=s=>{const n=g.indexOf(s);if(n===-1)return;g.splice(n,1);const{handler:e}=s;e.close()},Ge=({appendTo:s,...n},e)=>{const{nextZIndex:a}=Ne(),o=`message_${Ke++}`,r=n.onClose,c=document.createElement("div"),u={...n,zIndex:a()+n.zIndex,id:o,onClose:()=>{r==null||r(),Ze(C)},onDestroy:()=>{H(null,c)}},m=d(je,u,L(u.message)||Y(u.message)?{default:L(u.message)?u.message:()=>u.message}:null);m.appContext=e||b._context,H(m,c),s.appendChild(c.firstElementChild);const _=m.component,C={id:o,vnode:m,vm:_,handler:{close:()=>{_.exposed.visible.value=!1}},props:m.component.props};return C},b=(s={},n)=>{if(!X)return{close:()=>{}};if(I(A.max)&&g.length>=A.max)return{close:()=>{}};const e=se(s);if(e.grouping&&g.length){const o=g.find(({vnode:r})=>{var c;return((c=r.props)==null?void 0:c.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Ge(e,n);return g.push(a),a.handler};ee.forEach(s=>{b[s]=(n={},e)=>{const a=se(n);return b({...a,type:s},e)}});function Je(s){for(const n of g)(!s||s===n.props.type)&&n.handler.close()}b.closeAll=Je;b._context=null;const U=ve(b,"$message");const Qe={class:"h-[500px]"},We=p("p",{class:"bg-primary-default"},"首页",-1),Xe=p("hr",{class:"py-4"},null,-1),Ye=p("hr",{class:"py-4"},null,-1),es=p("hr",{class:"py-4"},null,-1),ss=p("hr",{class:"py-4"},null,-1),ns=p("hr",{class:"py-4"},null,-1),ts=p("p",null,"Element Icons Auto Import",-1),cs=w({__name:"index",setup(s){const n=()=>{R.showLoading("加载中，请稍后..."),setTimeout(()=>{R.hideLoading()},3e3)},e=()=>{he.info("自定义提示消息")},a=()=>{ke.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{U({type:"success",message:"Delete completed"})}).catch(()=>{U({type:"info",message:"Delete canceled"})})};return(o,r)=>{const c=Ce,u=Be,m=be,_=$,E=Te,C=we;return y(),x("div",Qe,[We,Xe,p("p",null,[S("svgIcon: "),d(c,{"icon-class":"loading"})]),Ye,d(u,{onClick:n},{default:f(()=>[S(" Show Loading ")]),_:1}),es,d(u,{onClick:e},{default:f(()=>[S(" Show Message ")]),_:1}),ss,d(u,{onClick:a},{default:f(()=>[S(" Element MessageBox ")]),_:1}),ns,p("div",null,[ts,d(_,null,{default:f(()=>[d(m)]),_:1}),d(_,null,{default:f(()=>[d(E)]),_:1}),d(_,null,{default:f(()=>[d(C)]),_:1})])])}}});export{cs as default};
import{o as Ee,w as $e,a as we,b as ie,i as Pe,u as Me,c as ze,d as Be,h as ue,e as te,g as Re,f as Ve,j as De,r as He,N as x,n as H,k as Ne,l as de,m as ae,p as g,q as oe,s as Fe,_ as Ue,E as Te,t as Ye,T as Ke,v as Xe,x as I,y as O,z as We,A as ce,B as fe,C as je,D as A,F as p,G as C,H as v,I as _,J as f,K as c,L as me,M as j,O as Z,P as q,Q as $,R as D,S as G,U as P,V as ee,W as qe,X as Se,Y as ke,Z as Le,$ as pe,a0 as Ge,a1 as Ze,a2 as ve,a3 as ge,a4 as ye,a5 as Je}from"./index-13efeb1f.js";import{g as Qe,E as xe,a as _e,i as en}from"./input-0f4350cf.js";import{E as he}from"./message-c0cc2201.js";import{P as ne}from"./vnode-7de44134.js";import{t as nn,E as tn}from"./typescript-0560ab07.js";import"./config-provider-bc894cf8.js";const on='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',sn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,be=e=>Array.from(e.querySelectorAll(on)).filter(n=>an(n)&&sn(n)),an=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},ln=(e,n,o)=>{let l={offsetX:0,offsetY:0};const r=d=>{const m=d.clientX,t=d.clientY,{offsetX:y,offsetY:w}=l,i=e.value.getBoundingClientRect(),F=i.left,U=i.top,h=i.width,Y=i.height,M=document.documentElement.clientWidth,k=document.documentElement.clientHeight,K=-F+y,J=-U+w,Q=M-F-h+y,B=k-U-Y+w,R=W=>{const T=Math.min(Math.max(y+W.clientX-m,K),Q),V=Math.min(Math.max(w+W.clientY-t,J),B);l={offsetX:T,offsetY:V},e.value.style.transform=`translate(${ie(T)}, ${ie(V)})`},X=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",X)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",X)},s=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",r)},a=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",r)};Ee(()=>{$e(()=>{o.value?s():a()})}),we(()=>{a()})},rn=(e,n={})=>{Pe(e)||nn("[useLockscreen]","You need to pass a ref param to this function");const o=n.ns||Me("popup"),l=ze(()=>o.bm("parent","hidden"));if(!Be||ue(document.body,l.value))return;let r=0,s=!1,a="0";const d=()=>{setTimeout(()=>{He(document==null?void 0:document.body,l.value),s&&document&&(document.body.style.width=a)},200)};te(e,m=>{if(!m){d();return}s=!ue(document.body,l.value),s&&(a=document.body.style.width),r=Qe(o.namespace.value);const t=document.documentElement.clientHeight<document.body.scrollHeight,y=Re(document.body,"overflowY");r>0&&(t||y==="scroll")&&s&&(document.body.style.width=`calc(100% - ${r}px)`),Ve(document.body,l.value)}),De(()=>d())},Ie=e=>{if(!e)return{onClick:x,onMousedown:x,onMouseup:x};let n=!1,o=!1;return{onClick:a=>{n&&o&&e(a),n=o=!1},onMousedown:a=>{n=a.target===a.currentTarget},onMouseup:a=>{o=a.target===a.currentTarget}}},se="_trap-focus-children",S=[],Ce=e=>{if(S.length===0)return;const n=S[S.length-1][se];if(n.length>0&&e.code===tn.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const o=e.shiftKey,l=e.target===n[0],r=e.target===n[n.length-1];l&&o&&(e.preventDefault(),n[n.length-1].focus()),r&&!o&&(e.preventDefault(),n[0].focus())}},un={beforeMount(e){e[se]=be(e),S.push(e),S.length<=1&&document.addEventListener("keydown",Ce)},updated(e){H(()=>{e[se]=be(e)})},unmounted(){S.shift(),S.length===0&&document.removeEventListener("keydown",Ce)}},dn=Ne({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:de([String,Array,Object])},zIndex:{type:de([String,Number])}}),cn={click:e=>e instanceof MouseEvent},fn="overlay";var mn=ae({name:"ElOverlay",props:dn,emits:cn,setup(e,{slots:n,emit:o}){const l=Me(fn),r=m=>{o("click",m)},{onClick:s,onMousedown:a,onMouseup:d}=Ie(e.customMaskEvent?void 0:r);return()=>e.mask?g("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:a,onMouseup:d},[oe(n,"default")],ne.STYLE|ne.CLASS|ne.PROPS,["onClick","onMouseup","onMousedown"]):Fe("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[oe(n,"default")])}});const pn=mn,vn=ae({name:"ElMessageBox",directives:{TrapFocus:un},components:{ElButton:Te,ElFocusTrap:xe,ElInput:_e,ElOverlay:pn,ElIcon:Ye,...Ke},inheritAttrs:!1,props:{buttonSize:{type:String,validator:en},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:o,zIndex:l,ns:r,size:s}=Xe("message-box",I(()=>e.buttonSize)),{t:a}=o,{nextZIndex:d}=l,m=O(!1),t=We({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),y=I(()=>{const u=t.type;return{[r.bm("icon",u)]:u&&ce[u]}}),w=fe(),i=fe(),F=I(()=>t.icon||ce[t.type]||""),U=I(()=>!!t.message),h=O(),Y=O(),M=O(),k=O(),K=O(),J=I(()=>t.confirmButtonClass);te(()=>t.inputValue,async u=>{await H(),e.boxType==="prompt"&&u!==null&&V()},{immediate:!0}),te(()=>m.value,u=>{var b,L;u&&(e.boxType!=="prompt"&&(t.autofocus?M.value=(L=(b=K.value)==null?void 0:b.$el)!=null?L:h.value:M.value=h.value),t.zIndex=d()),e.boxType==="prompt"&&(u?H().then(()=>{var re;k.value&&k.value.$el&&(t.autofocus?M.value=(re=Oe())!=null?re:h.value:M.value=h.value)}):(t.editorErrorMessage="",t.validateError=!1))});const Q=I(()=>e.draggable);ln(h,Y,Q),Ee(async()=>{await H(),e.closeOnHashChange&&window.addEventListener("hashchange",B)}),we(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",B)});function B(){m.value&&(m.value=!1,H(()=>{t.action&&n("action",t.action)}))}const R=()=>{e.closeOnClickModal&&T(t.distinguishCancelAndClose?"close":"cancel")},X=Ie(R),W=u=>{if(t.inputType!=="textarea")return u.preventDefault(),T("confirm")},T=u=>{var b;e.boxType==="prompt"&&u==="confirm"&&!V()||(t.action=u,t.beforeClose?(b=t.beforeClose)==null||b.call(t,u,t,B):B())},V=()=>{if(e.boxType==="prompt"){const u=t.inputPattern;if(u&&!u.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||a("el.messagebox.error"),t.validateError=!0,!1;const b=t.inputValidator;if(typeof b=="function"){const L=b(t.inputValue);if(L===!1)return t.editorErrorMessage=t.inputErrorMessage||a("el.messagebox.error"),t.validateError=!0,!1;if(typeof L=="string")return t.editorErrorMessage=L,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Oe=()=>{const u=k.value.$refs;return u.input||u.textarea},le=()=>{T("close")},Ae=()=>{e.closeOnPressEscape&&le()};return e.lockScroll&&rn(m),{...je(t),ns:r,overlayEvent:X,visible:m,hasMessage:U,typeClass:y,contentId:w,inputId:i,btnSize:s,iconComponent:F,confirmButtonClasses:J,rootRef:h,focusStartRef:M,headerRef:Y,inputRef:k,confirmRef:K,doClose:B,handleClose:le,onCloseRequested:Ae,handleWrapperClick:R,handleInputEnter:W,handleAction:T,t:a}}}),gn=["aria-label","aria-describedby"],yn=["aria-label"],hn=["id"];function bn(e,n,o,l,r,s){const a=A("el-icon"),d=A("close"),m=A("el-input"),t=A("el-button"),y=A("el-focus-trap"),w=A("el-overlay");return p(),C(qe,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=i=>e.$emit("vanish")),persisted:""},{default:v(()=>[_(g(w,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:v(()=>[f("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:c(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...i)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...i)),onMousedown:n[9]||(n[9]=(...i)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...i)),onMouseup:n[10]||(n[10]=(...i)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...i))},[g(y,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v(()=>[f("div",{ref:"rootRef",class:c([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:me(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=j(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(p(),Z("div",{key:0,ref:"headerRef",class:c(e.ns.e("header"))},[f("div",{class:c(e.ns.e("title"))},[e.iconComponent&&e.center?(p(),C(a,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:v(()=>[(p(),C(q(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),f("span",null,D(e.title),1)],2),e.showClose?(p(),Z("button",{key:0,type:"button",class:c(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=G(j(i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[g(a,{class:c(e.ns.e("close"))},{default:v(()=>[g(d)]),_:1},8,["class"])],42,yn)):$("v-if",!0)],2)):$("v-if",!0),f("div",{id:e.contentId,class:c(e.ns.e("content"))},[f("div",{class:c(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(p(),C(a,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:v(()=>[(p(),C(q(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.hasMessage?(p(),Z("div",{key:1,class:c(e.ns.e("message"))},[oe(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(p(),C(q(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(p(),C(q(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:v(()=>[P(D(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):$("v-if",!0)],2),_(f("div",{class:c(e.ns.e("input"))},[g(m,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=i=>e.inputValue=i),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:c({invalid:e.validateError}),onKeydown:G(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),f("div",{class:c(e.ns.e("errormsg")),style:me({visibility:e.editorErrorMessage?"visible":"hidden"})},D(e.editorErrorMessage),7)],2),[[ee,e.showInput]])],10,hn),f("div",{class:c(e.ns.e("btns"))},[e.showCancelButton?(p(),C(t,{key:0,loading:e.cancelButtonLoading,class:c([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=i=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=G(j(i=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:v(()=>[P(D(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):$("v-if",!0),_(g(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:c([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=i=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=G(j(i=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:v(()=>[P(D(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ee,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,gn)]),_:3},8,["z-index","overlay-class","mask"]),[[ee,e.visible]])]),_:3})}var Cn=Ue(vn,[["render",bn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const N=new Map,En=e=>{let n=document.body;return e.appendTo&&(Se(e.appendTo)&&(n=document.querySelector(e.appendTo)),ge(e.appendTo)&&(n=e.appendTo),ge(n)||(n=document.body)),n},wn=(e,n,o=null)=>{const l=g(Cn,e,ve(e.message)||ke(e.message)?{default:ve(e.message)?e.message:()=>e.message}:null);return l.appContext=o,Le(l,n),En(e).appendChild(n.firstElementChild),l.component},Mn=()=>document.createElement("div"),Bn=(e,n)=>{const o=Mn();e.onVanish=()=>{Le(null,o),N.delete(r)},e.onAction=s=>{const a=N.get(r);let d;e.showInput?d={value:r.inputValue,action:s}:d=s,e.callback?e.callback(d,l.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?a.reject("close"):a.reject("cancel"):a.resolve(d)};const l=wn(e,o,n),r=l.proxy;for(const s in e)pe(e,s)&&!pe(r.$props,s)&&(r[s]=e[s]);return r.visible=!0,r};function z(e,n=null){if(!Be)return Promise.reject();let o;return Se(e)||ke(e)?e={message:e}:o=e.callback,new Promise((l,r)=>{const s=Bn(e,n??z._context);N.set(s,{options:e,callback:o,resolve:l,reject:r})})}const Tn=["alert","confirm","prompt"],Sn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};Tn.forEach(e=>{z[e]=kn(e)});function kn(e){return(n,o,l,r)=>{let s="";return Ge(o)?(l=o,s=""):Ze(o)?s="":s=o,z(Object.assign({title:s,message:n,type:"",...Sn[e]},l,{boxType:e}),r)}}z.close=()=>{N.forEach((e,n)=>{n.doClose()}),N.clear()};z._context=null;const E=z;E.install=e=>{E._context=e._context,e.config.globalProperties.$msgbox=E,e.config.globalProperties.$messageBox=E,e.config.globalProperties.$alert=E.alert,e.config.globalProperties.$confirm=E.confirm,e.config.globalProperties.$prompt=E.prompt};const Ln=E;const In=f("p",{class:"text-white text-5xl bg-primary-default py-28 text-center"},"This is Home view",-1),On={class:"p-10"},An={class:"py-6 border-b"},$n={class:"py-6 border-b"},Pn={class:"py-6 border-b"},Fn=ae({__name:"index",setup(e){const n=()=>{ye.showLoading("加载中，请稍后..."),setTimeout(()=>{ye.hideLoading()},3e3)},o=()=>{Je.info("自定义提示消息")},l=()=>{Ln.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{he({type:"success",message:"Delete completed"})}).catch(()=>{he({type:"info",message:"Delete canceled"})})};return(r,s)=>{const a=Te;return p(),Z("div",null,[In,f("div",On,[f("div",An,[g(a,{onClick:n},{default:v(()=>[P(" Show Loading ")]),_:1})]),f("div",$n,[g(a,{onClick:o},{default:v(()=>[P(" Show Message ")]),_:1})]),f("div",Pn,[g(a,{onClick:l},{default:v(()=>[P(" Element MessageBox ")]),_:1})])])])}}});export{Fn as default};
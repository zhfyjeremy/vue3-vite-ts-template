import{m as c,F as l,O as p,p as a,H as t,U as m,a5 as i}from"./index-13efeb1f.js";import{E as h}from"./card-d07a188a.js";import{_}from"./index-b690c248.js";import"./input-0f4350cf.js";import"./typescript-0560ab07.js";import"./form-item-2f546e53.js";import"./strings-69e3f623.js";import"./config-provider-bc894cf8.js";const u={class:"p-5"},F=c({__name:"search",setup(b){const s=[{date:1660737564e3,name:"佘太君",address:"上海市普陀区金沙江路 1516 弄"},{date:14622912e5,name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:1462032e6,name:"王小帅",address:"上海市普陀区金沙江路 1519 弄"},{date:14622048e5,name:"王小呆",address:"上海市普陀区金沙江路 1516 弄"}],o=[{type:"selection",width:"50"},{type:"index",width:"50",label:"No."},{prop:"name",label:"名字",search:!0},{prop:"date",label:"日期",type:"date",search:!0,searchFiledType:"DatePicker",searchFieldOptions:{placeholder:"请选择日期",valueFormat:"x",type:"daterange","start-placeholder":"Start Date","end-placeholder":"End Date"}},{prop:"address",label:"地址",showOverflowTooltip:!0,search:!0},{width:"180",label:"操作",buttons:[{name:"编辑",type:"success",command:"edit"},{name:"删除",type:"danger",command:"delete"}]}],r=e=>{i.success(JSON.stringify(e))};return(e,y)=>{const n=_,d=h;return l(),p("div",u,[a(d,null,{header:t(()=>[m("开启表格搜索")]),default:t(()=>[a(n,{columns:o,"table-data":s,options:{showSearch:!0},onSearch:r})]),_:1})])}}});export{F as default};
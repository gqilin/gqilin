"use strict";(self["webpackChunkvue3_test"]=self["webpackChunkvue3_test"]||[]).push([[3816],{53816:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[t.digitalTeaching?e("xml-digital-teaching",{ref:"xmlDigitalTeaching",attrs:{textBookData:t.textBookData,catalogList:t.catalogList,looseLeafData:t.looseLeafData,location:t.location,notesList:t.notesList,bookmarkList:t.bookmarkList,textDomList:t.contentList,continueReading:!0,isTrial:t.isTrial,isTrialIndex:t.isTrialIndex,basisPath:t.basisPath,pageType:t.pageType,trialText:t.trialText,trialPrompt:t.trialPrompt,officePreviewPath:"https://idocview.cmpjjj.com/view/url?url="},on:{updateReadLocation:t.updateReadLocation,confirm:t.confirm,updateNotes:t.updateNotes,deleteNotes:t.deleteNotes,addBookmark:t.addBookmark,deleteBookmark:t.deleteBookmark,downloadFile:t.downloadFile,addTextDom:t.addTextDom,updateTextDom:t.updateTextDom,deleteTextDom:t.deleteTextDom}}):t._e()],1)},i=[],a=(o(57658),o(28267)),n={data(){return{digitalTeaching:!1,textBookData:{},catalogList:[],looseLeafData:{},trialText:"<p>该处已超出试读范围</p><p>请购买后阅读</p>",trialPrompt:"<p>该处已超出试读范围</p><p>请购买后阅读</p>",location:"",basisPath:"",notesList:[],bookmarkList:[],pageType:"pc",contentList:[],isTrial:!1,isTrialIndex:10,textBookId:"1660446560604454912",isShow:""}},created(){let t=this.$route.query;t.textBookId&&(this.textBookId=t.textBookId),t.pageType&&(this.pageType=t.pageType),(0,a.fp)(this.textBookId).then((t=>{this.textBookData=t.data})),(0,a.FA)(this.textBookId,"0").then((t=>{this.catalogList=t.data})),(0,a.kU)(this.textBookId).then((t=>{this.looseLeafData=JSON.parse(t.msg),setTimeout((()=>{this.digitalTeaching=!0}),500)})),this.location=localStorage.getItem(this.textBookData.id),this.notesList=JSON.parse(localStorage.getItem("notesList"))||[],this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))||[],this.contentList=JSON.parse(localStorage.getItem("contentList"))||[],this.location=localStorage.getItem(this.textBookId)},methods:{confirm(t){this.notesList.push(t);let e=JSON.stringify(this.notesList);localStorage.setItem("notesList",e),this.notesList=JSON.parse(localStorage.getItem("notesList"))||[],this.$refs.xmlDigitalTeaching.addNotesSign(t.location,"notes")},updateNotes(t){this.notesList.map(((e,o)=>{e.notesId===t.notesId&&(this.notesList[o].notesContent=e.notesContent,localStorage.setItem("notesList",JSON.stringify(this.notesList)),this.notesList=JSON.parse(localStorage.getItem("notesList"))||[])}))},deleteNotes(t){this.notesList.map(((e,o)=>{e.notesId===t.notesId&&(this.notesList.splice(o,1),localStorage.setItem("notesList",JSON.stringify(this.notesList)),this.notesList=JSON.parse(localStorage.getItem("notesList"))||[],this.$refs.xmlDigitalTeaching.deleteNotesSign(t.location,"notes"))}))},addTextDom(t){this.contentList=JSON.parse(localStorage.getItem("contentList"))||[],this.contentList.push({id:t.id,contentDom:t.contentDom,domId:t.domId});let e=JSON.stringify(this.contentList);localStorage.setItem("contentList",e),this.contentList=JSON.parse(localStorage.getItem("contentList"))||[]},updateTextDom(t){this.contentList=JSON.parse(localStorage.getItem("contentList"))||[];const e=this.contentList.findIndex((e=>e.domId==t.domId));this.contentList[e].contentDom=t.contentDom;let o=JSON.stringify(this.contentList);localStorage.setItem("contentList",o),this.contentList=JSON.parse(localStorage.getItem("contentList"))||[]},deleteTextDom(t){this.contentList=JSON.parse(localStorage.getItem("contentList"))||[];const e=this.contentList.findIndex((e=>e.domId==t.domId));this.contentList.splice(e,1);let o=JSON.stringify(this.contentList);localStorage.setItem("contentList",o),this.contentList=JSON.parse(localStorage.getItem("contentList"))||[]},addBookmark(t){this.bookmarkList.push(t);let e=JSON.stringify(this.bookmarkList);localStorage.setItem("bookmarkList",e),this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))||[],this.$refs.xmlDigitalTeaching.addNotesSign(t.location,"bookmark")},deleteBookmark(t){this.bookmarkList.map(((e,o)=>{e.bookmarkId===t.bookmarkId&&(this.bookmarkList.splice(o,1),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList)),this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))||[],this.$refs.xmlDigitalTeaching.deleteNotesSign(t.location,"bookmark"))}))},downloadFile(t){},updateReadLocation(t){localStorage.setItem(this.textBookData.id,t)}}},r=n,l=o(1001),c=(0,l.Z)(r,s,i,!1,null,null,null),d=c.exports},28267:function(t,e,o){o.d(e,{vG:function(){return k},FA:function(){return S},fp:function(){return f},kU:function(){return I}});o(21703);var s=o(6154),i=o(64720),a=o(56056),n=o(51836),r=o(72382),l=o(37499),c=o(66028);o(52876),o(31955);const d={401:"认证失败，无法访问系统资源",403:"当前操作没有权限",404:"访问资源不存在",default:"系统未知错误，请反馈给管理员"};let m=null,u=!1,g=null;s.Z.defaults.headers["Content-Type"]="application/json;charset=utf-8";const h=s.Z.create({baseURL:c.leafletApiURL,timeout:1e5});h.interceptors.request.use((t=>{const e=!1===(t.headers||{}).isToken,o=!1===(t.headers||{}).repeatSubmit;if((0,n.LP)()&&!e&&(t.headers["Authorization"]="Bearer "+(0,n.LP)()),"get"===t.method&&t.params){let e=t.url+"?"+(0,r.tansParams)(t.params);e=e.slice(0,-1),t.params={},t.url=e}if(!o&&("post"===t.method||"put"===t.method)){const e={url:t.url,data:"object"===typeof t.data?JSON.stringify(t.data):t.data,time:(new Date).getTime()},o=l["default"].session.getJSON("sessionObj");if(void 0===o||null===o||""===o)l["default"].session.setJSON("sessionObj",e);else{const t=o.url,s=o.data,i=o.time,a=2e3;if(p.includes(o.url),s===e.data&&e.time-i<a&&t===e.url){const e="数据正在处理，请勿重复提交";return console.warn(`[${t}]: `+e),Promise.reject(new Error(e))}l["default"].session.setJSON("sessionObj",e)}}return t}),(t=>{console.log(t),Promise.reject(t)})),h.interceptors.response.use((t=>{clearTimeout(g),u&&(u=!1,m.close());const e=t.config||{},o=t.data.code||200,s=d[o]||t.data.msg||d["default"];if("blob"===t.request.responseType||"arraybuffer"===t.request.responseType)return t.data;if(401===o)return a.Z.dispatch("FedLogOut"),Promise.reject("无效的会话，或者会话已过期，请重新登录。");if(500!==o||p.includes(t.config.url.split("?")[0]))return 200!==o?(p.includes(t.config.url.split("?")[0])||(0,i.Message)({message:s,type:"error"}),Promise.reject(t.data)):t.data;{console.log(123,p.includes(t.config.url)),console.log(1234,t.config.url.split("?")[0]);let o=!0;return(e.isSilence||e.isFocusPassCode)&&(o=!1),o&&(0,i.Message)({message:s,type:"error"}),e.isFocusPassCode?t.data:Promise.reject(new Error(s))}}),(t=>{clearTimeout(g),u&&(u=!1,m.close()),console.log("err: "+t);let{message:e}=t;return"Network Error"==e?e="后端接口连接异常":e.includes("timeout")?e="系统接口请求超时":e.includes("Request failed with status code")&&(e="系统接口"+e.substr(e.length-3)+"异常"),"数据正在处理，请勿重复提交"!==e&&(0,i.Message)({message:e,type:"error",duration:5e3}),Promise.reject(t)}),(()=>{}));const p=["/ouchn-customapi/web/read/updateOcDownloadReading","/ouchn-customapi/getImagePathList?filePath=","/ouchn-customapi/web/tbOrderAuthCard/selectCardBuCardNo"];var L=h;function k(t){return L({url:"/textBook/createPreviewSrc?businessType="+t.businessType+"&looseLeafId="+t.looseLeafId+"&pageType="+t.pageType+"&textBookId="+t.textBookId+"&tyleType=B&isTrial="+t.isTrial,method:"POST",data:t})}function f(t){return L({url:"/business/textBooks/getById?id="+t,method:"GET"})}function S(t,e){return L({url:"/business/catalog/list?textBookId="+t+"&hiddenFlag="+e,method:"GET"})}function I(t){return L({url:"/business/textBooks/getTextBookLooseLeaf?textBookId="+t,method:"GET"})}}}]);
//# sourceMappingURL=3816.bc216c44.js.map
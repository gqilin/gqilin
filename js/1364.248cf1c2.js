(self["webpackChunkvue3_test"]=self["webpackChunkvue3_test"]||[]).push([[1364],{21364:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"resource-list"},e._l(e.resourceList,(function(n,o){return t("div",{key:o,staticClass:"item",on:{click:function(t){return e.lookOver(n)}}},[t("img",{attrs:{src:r(62298)("./"+e.resourceType(n.filePath)+"_icon.png"),alt:""}}),t("div",{staticClass:"title"},[t("span",[e._v(e._s(n.title))]),t("span",{staticClass:"tag-box"},[e._v(e._s(n.fileType?n.fileType:"url"))])])])})),0)},o=[],u=(r(57658),r(35220)),i={data(){return{resourceList:[]}},created(){this.getResourceList()},methods:{getResourceList(){(0,u.oF)(this.$route.query.onlineCodeId).then((e=>{this.resourceList=e.data}))},lookOver(e){e.filePath?(console.log(this.$route.query.isApp),void 0!==this.$route.query.isApp?((0,u.mz)(e.id,this.$route.query.remoteAddr,this.$route.query.userAgent,this.$route.query.userName),this.$route.query.userName||"N"==e.isEncryption?this.$router.push({path:"/app/read",query:{filePath:e.filePath,title:e.title,remark:e.remark}}):alert("请先登录App")):("N"==e.isEncryption&&(0,u.mz)(e.id,this.$route.query.remoteAddr,this.$route.query.userAgent,this.$route.query.userName),this.$router.push({path:"/app/read",query:{filePath:"N"==e.isEncryption?e.filePath:e.messageLink,title:"N"==e.isEncryption?e.title:"",remark:"N"==e.isEncryption?e.remark:""}}))):alert("资源文件不存在")},resourceType(e){let t=e?e.split("?")[0].substr(-3).toUpperCase():"",r="";return r="MP3"==t?"audio":"MP4"==t?"video":"PDF"==t?"pdf":"PNG"==t||"JPG"==t||"PEG"==t||"GIF"==t?"image":"link",r}}},a=i,s=r(1001),d=(0,s.Z)(a,n,o,!1,null,"3a7d61cd",null),c=d.exports},35220:function(e,t,r){"use strict";r.d(t,{Bi:function(){return d},IM:function(){return l},Lr:function(){return m},Nl:function(){return c},Nu:function(){return u},T8:function(){return a},V$:function(){return s},Vx:function(){return i},j2:function(){return h},mz:function(){return g},n3:function(){return f},oF:function(){return k},sS:function(){return p}});var n=r(84471),o=r(37182);function u(e){return(0,n.ZP)({url:o.V+"/web/api/note/addNote",method:"post",data:e,header:{token:!0}})}function i(e){return(0,n.ZP)({url:o.V+"/web/api/note/updateNote",method:"post",data:e,header:{token:!0}})}function a(e){return(0,n.ZP)({url:o.V+"/web/api/note/deleteNote",method:"post",params:{noteId:e},header:{token:!0}})}function s(e){return(0,n.ZP)({url:o.V+"/web/api/note/getNoteInfo",method:"get",params:{filesId:e},header:{token:!0}})}function d(e){return(0,n.ZP)({url:o.V+"/web/read/selectFileLinkAndReadingLocation",method:"post",data:e,header:{token:!0}})}function c(e){return(0,n.ZP)({url:o.V+"/web/read/selectTimeParameter",method:"get",params:e,header:{token:!0}})}function l(e){return(0,n.ZP)({url:o.V+"/web/read/updateOcDownloadReading",method:"post",data:e,header:{token:!0}})}function p(e){return(0,n.ZP)({url:o.V+"/web/read/updateOcReadSchedule",method:"post",data:e,header:{token:!0}})}function h(e){return(0,n.ZP)({url:o.V+"/device/api/bookMark/addBookMark",method:"post",data:e,header:{token:!0}})}function f(e){return(0,n.ZP)({url:o.V+"/device/api/bookMark/selectBookMarkList",method:"get",params:e,header:{token:!0}})}function m(e){return(0,n.ZP)({url:o.V+"/getSource?codeId="+e,method:"get"})}function k(e){return(0,n.ZP)({url:o.V+"/getOnlineCodeResource/"+e,method:"get"})}function g(e,t,r,u){return(0,n.ZP)({url:o.V+"/onlineResourceId/"+e+"?remoteAddr="+t+"&userAgent="+r+"&userName="+u,method:"get"})}},62298:function(e,t,r){var n={"./audio_icon.png":60180,"./bookmarks_icon.png":25078,"./image_icon.png":38790,"./link_icon.png":18283,"./notes_icon.png":19540,"./pdf_icon.png":23150,"./video_icon.png":95788};function o(e){var t=u(e);return r(t)}function u(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=u,e.exports=o,o.id=62298}}]);
//# sourceMappingURL=1364.248cf1c2.js.map
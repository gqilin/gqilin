"use strict";(self["webpackChunkvue3_test"]=self["webpackChunkvue3_test"]||[]).push([[3008],{90176:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"answer_box"},[e("div",{staticClass:"answer_card"},[e("div",{staticClass:"card_top"},[e("p",{staticClass:"title"},[t._v("答题卡")]),e("div",{staticClass:"judg_box"},[e("div",[e("img",{attrs:{src:r(19209),alt:""}}),e("span",[t._v(t._s(t.correctNumber))])]),e("div",[e("img",{attrs:{src:r(89621),alt:""}}),e("span",[t._v(t._s(t.errorNumber))])])])]),t._l(t.testPaperModuleList,(function(r,s){return e("div",{key:s},[e("div",{staticClass:"card_title"},[t._v(" "+t._s(t.toCapital(s))+"、"+t._s(r.moduleName)+" ")]),e("div",{staticClass:"topic_list"},t._l(r.questionList,(function(r,s){return e("div",{key:s,class:r.userAnswer&&r.isSubmit&&r.isCorrect?"correct_box":r.userAnswer&&r.isSubmit&&!r.isCorrect?"error_box":"",staticStyle:{cursor:"pointer"},on:{click:function(e){t.current=s}}},[t._v(" "+t._s(s+1)+" ")])})),0)])})),e("div",{staticClass:"btn_box"},[e("el-button",{staticClass:"btn1",on:{click:function(e){return t.exeClose()}}},[t._v("暂时退出")]),e("el-button",{staticClass:"btn2",attrs:{type:"primary"},on:{click:function(e){return t.exeSubmit()}}},[t._v("结束练习")])],1)],2),e("div",{staticClass:"answer_info"},[e("div",{staticClass:"watermark-box"},[e("div",{staticClass:"watermark-item"},[t._v(" "+t._s(t.getTreeType(this.$route.query.teachProperty)+this.$store.state.user.name)+" ")]),e("div",{staticClass:"watermark-item right"},[t._v(" "+t._s(t.getTreeType(this.$route.query.teachProperty)+this.$store.state.user.name)+" ")]),e("div",{staticClass:"watermark-item"},[t._v(" "+t._s(t.getTreeType(this.$route.query.teachProperty)+this.$store.state.user.name)+" ")]),e("div",{staticClass:"watermark-item right"},[t._v(" "+t._s(t.getTreeType(this.$route.query.teachProperty)+this.$store.state.user.name)+" ")]),e("div",{staticClass:"watermark-item"},[t._v(" "+t._s(t.getTreeType(this.$route.query.teachProperty)+this.$store.state.user.name)+" ")]),e("div",{staticClass:"watermark-item right"},[t._v(" "+t._s(t.getTreeType(this.$route.query.teachProperty)+this.$store.state.user.name)+" ")])]),e("div",t._l(t.paperList,(function(r,s){return e("multiple-choice",{key:s,staticClass:"multiple_choice",attrs:{"paper-data":t.paperList[s],current:t.current,total:t.total,index:s,paperName:t.paperName},on:{selected:t.selected,prev:t.prev,next:t.next}})})),1)])])])},i=[],a=(r(57658),r(85837)),n=r(54526),o=r(65142),u=r(63683),d=r(17117),h={components:{multipleChoice:d.Z},data(){return{testPaperId:"",paperPlatform:"out",aprId:"",paperList:[],testPaperModuleList:[],total:0,current:0,errorNumber:0,correctNumber:0,atNumber:0,answerResults:"",questionId:"",testPaperModuleCurrent:0,testPaperModuleTotal:0,paperName:"",goodsId:"",teachingAttribute:""}},mounted(){this.testPaperId=this.$route.query.id,this.goodsId=this.$route.query.goodsId,this.getAnswerQuestions();let t="train_property";(0,a.Cn)(t).then((t=>{200==t.code&&(this.teachingAttribute=t.data)}))},computed:{...(0,n.Se)(["name","userId"])},methods:{getTreeType(t){for(let e=0;e<this.teachingAttribute.length;e++)if(this.teachingAttribute[e].id==t)return this.teachingAttribute[e].label},getAnswerQuestions(){(0,u.AQ)().then((t=>{let e={userId:this.userId,paperId:this.testPaperId,token:t.data};(0,o.kS)(e).then((t=>{200===t.code?(this.paperName=t.data.tTestPaperDetailInfoVo.paperName,this.aprId=t.data.answerQuestionRecordList.length>0?t.data.answerQuestionRecordList[0].aprId:"",this.testPaperModuleList=t.data.tTestPaperDetailInfoVo.testPaperModuleList,console.log(this.testPaperModuleList),this.testPaperModuleTotal=this.testPaperModuleList.length,this.paperList=t.data.tTestPaperDetailInfoVo.testPaperModuleList[this.testPaperModuleCurrent].questionList||[],this.paperList.map(((e,r)=>{if(this.$set(e,"isCorrect",!1),1==e.questionType||2==e.questionType){let t=[];JSON.parse(e.standardAnswer).map((e=>{t.push(e.title)})),this.$set(e,"correctAnswer",t.toString())}else 3==e.questionType&&this.$set(e,"correctAnswer",JSON.parse(e.standardAnswer)[0]);t.data.answerQuestionRecordList.length>0&&t.data.answerQuestionRecordList[r].answerResults?(this.$set(e,"userAnswer",t.data.answerQuestionRecordList[r].answerResults),this.$set(e,"isSubmit",!0),t.data.answerQuestionRecordList[r].answerResults==e.correctAnswer?(this.paperList[this.current].isCorrect=!0,this.correctNumber++):(this.paperList[this.current].isCorrect=!1,this.errorNumber++)):(this.$set(e,"userAnswer",""),this.$set(e,"isSubmit",!1))})),this.total=this.paperList.length):205==t.code?this.createAnswerPaperRecord():this.$message.error(t.msg)}))}))},createAnswerPaperRecord(){(0,u.AQ)().then((t=>{let e={userId:this.userId,paperId:this.testPaperId,userName:this.name,testDate:this.GET_CURRENT_TIME(),token:t.data};(0,o.Qe)(e).then((t=>{this.aprId=t.msg,this.getTestPaperDetail()}))}))},getTestPaperDetail(){(0,u.AQ)().then((t=>{let e={paperId:this.testPaperId,ansRecordId:this.aprId,token:t.data};(0,o.mN)(e).then((t=>{this.paperName=t.data.paperName,this.testPaperModuleList=t.data.testPaperModuleList,this.paperList=t.data.testPaperModuleList[0].questionList||[],this.paperList.map((t=>{this.$set(t,"correctAnswer",""),this.$set(t,"userAnswer",""),this.$set(t,"isSubmit",!1),this.$set(t,"isCorrect",!1)})),this.total=this.paperList.length}))}))},GET_CURRENT_TIME(){let t=new Date,e=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),i=t.getHours(),a=t.getMinutes(),n=t.getSeconds(),o=e+"-"+(r>9?r:"0"+r)+"-"+(s>9?s:"0"+s)+" "+(i>9?i:"0"+i)+":"+(a>9?a:"0"+a)+":"+(n>9?n:"0"+n);return o},selected(t){this.paperList[this.current].userAnswer=t,this.answerResults=t},prev(){this.current>0&&this.current--},next(){this.paperList[this.current].userAnswer&&!this.paperList[this.current].isSubmit?this.createAnswerRecord():this.current!=this.total-1?this.current<this.total-1&&this.current++:this.current==this.total-1&&this.exeSubmit()},judgmentAnswer(t,e){let r=[],s=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i));for(let i=0;i<e.length;i++)s.push(e.charAt(i));return r.sort().toString()==s.sort().toString()},judgmentAnswer(t,e){let r=[],s=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i));for(let i=0;i<e.length;i++)s.push(e.charAt(i));return r.sort().toString()==s.sort().toString()},judgmentAnswer(t,e){let r=[],s=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i));for(let i=0;i<e.length;i++)s.push(e.charAt(i));return r.sort().toString()==s.sort().toString()},toCapital(t){let e=["一","二","三","四","五","六","七","八","九","十"];return e[t]},createAnswerRecord(){(0,u.AQ)().then((t=>{(0,o.gQ)({questionId:this.paperList[this.current].id,answerPlatform:this.paperPlatform,userId:this.userId,userName:this.name,paperId:this.testPaperId,answerDate:this.GET_CURRENT_TIME(),answerResults:this.answerResults,aprId:this.aprId,token:t.data}).then((t=>{if(1==t.data.questionType||2==t.data.questionType){let e=[];JSON.parse(t.data.standardAnswer).map((t=>{e.push(t.title)})),this.paperList[this.current].correctAnswer=e.toString()}else 3==t.data.questionType&&(this.paperList[this.current].correctAnswer=JSON.parse(t.data.standardAnswer)[0]);this.paperList[this.current].analysis=t.data.analysis,this.paperList[this.current].isSubmit=!0,this.judgmentAnswer(this.paperList[this.current].userAnswer,this.paperList[this.current].correctAnswer)?(this.paperList[this.current].isCorrect=!0,this.correctNumber++):(this.paperList[this.current].isCorrect=!1,this.errorNumber++)}))}))},exeClose(){this.$confirm("是否要暂时退出?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$router.push({path:"/willingLearn/courseQuestions",query:{goodsId:this.goodsId}})}))},exeSubmit(){this.$confirm("是否要结束练习?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,u.AQ)().then((t=>{(0,o.jB)({paperId:this.testPaperId,answerPlatform:this.paperPlatform,userId:this.userId,id:this.aprId,userName:this.name,testDate:this.GET_CURRENT_TIME(),token:t.data}).then((t=>{this.$message({type:"success",message:"提交成功!",duration:1500}),setTimeout((()=>{this.$router.push({path:"/willingLearn/courseQuestions",query:{goodsId:this.goodsId}})}),1500)}))}))}))}}},c=h,p=r(1001),l=(0,p.Z)(c,s,i,!1,null,"1e27e7cc",null),m=l.exports},85837:function(t,e,r){r.d(e,{Cn:function(){return n},GC:function(){return _},KR:function(){return a},Mt:function(){return C},Qn:function(){return g},Uw:function(){return b},V2:function(){return T},Zt:function(){return I},_r:function(){return w},cC:function(){return f},hE:function(){return h},iG:function(){return c},kx:function(){return P},m8:function(){return d},nC:function(){return u},qH:function(){return l},sz:function(){return m},t5:function(){return o},yh:function(){return p}});var s=r(84471),i=r(37182);function a(t){return(0,s.ZP)({url:i.V+"/web/goods/getDictListByDictType?dictType="+t,method:"get"})}function n(t){return(0,s.ZP)({url:i.V+"/web/goods/getTreeSelectByType?catalogType="+t,method:"get"})}function o(t){return(0,s.ZP)({url:i.V+"/web/goods/selGoodsList",method:"post",data:t})}function u(t){return(0,s.ZP)({url:i.V+"/web/goods/selGoodsById?goodsId="+t,method:"get"})}function d(t){return(0,s.ZP)({url:i.V+"/web/goods/getRecomGoodsList?goodsId="+t,method:"get"})}function h(t){return(0,s.ZP)({url:i.V+"/web/goods/getRecomSubjectList?goodsId="+t,method:"get"})}function c(t){return(0,s.ZP)({url:i.V+"/web/goods/getEvaluateListByGoodsId",method:"get",params:t})}function p(t,e){return(0,s.ZP)({url:i.V+"/web/api/ocShoppingCart/addShoppingCart?goodsId="+t+"&userId="+e,method:"get"})}function l(t){return(0,s.ZP)({url:i.V+"/web/api/ocShoppingCart/isAddShoppingCart?goodsId="+t,method:"get"})}function m(t){return(0,s.ZP)({url:i.V+"/web/goods/addBookshelf",method:"get",params:t})}function g(t){return(0,s.ZP)({url:i.V+"/web/goods/isAddBookshelf",method:"get",params:t})}function w(t){return(0,s.ZP)({url:i.V+"/web/goods/delBookshelf",method:"get",params:t})}function f(t){return(0,s.ZP)({url:i.V+"/web/api/ocEvaluate/addReport",method:"post",data:t})}function P(t){return(0,s.ZP)({url:i.V+"/web/read/selectIsBuy",method:"get",params:t})}function b(t){return(0,s.ZP)({url:i.V+"/web/api/ocShoppingCart/selGoodsStatus?goodsId="+t,method:"get"})}function I(t){return(0,s.ZP)({url:i.V+"/web/api/ocShoppingCart/selSubjectStatus?id="+t,method:"get"})}function C(t){return(0,s.ZP)({url:i.V+"/web/read/isHavingPermissions",method:"POST",data:t})}function T(t){return(0,s.ZP)({url:i.V+"/web/otherRead/updateRecordAndSchedule",method:"POST",data:t})}function _(t){return(0,s.ZP)({url:i.V+"/web/otherRead/selectReadSchedule?goodsFileId="+t.goodsFileId+"&platformCode="+t.platformCode+"&stuNum="+t.stuNum,method:"GET"})}}}]);
//# sourceMappingURL=3008.7f8bf908.js.map
"use strict";(self["webpackChunkvue3_test"]=self["webpackChunkvue3_test"]||[]).push([[435],{70435:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"news_box"},[e("div",{staticClass:"news_box_left"},[e("div",{staticClass:"news_box_left1"},[e("h2",{staticClass:"ellipsis-aRow"},[t._v(t._s(t.newsdata.title))]),e("div",{staticClass:"news_box_left1l"},[e("img",{attrs:{src:n(14842)}}),e("span",[t._v("发布时间："+t._s(t._f("filterDate")(t.newsdata.createTime)))])]),e("div",{staticClass:"share-img"},[t._v(" 分享到 "),e("share",{attrs:{config:t.$store.state.read.config}})],1)]),e("div",{staticClass:"news_box_left2",domProps:{innerHTML:t._s(t.newsdata.content)}},[t._v("富文本编辑器")])]),e("div",{staticClass:"news_box_right"},[e("div",{staticClass:"title theme-title"},[t._v("推荐商品")]),e("div",{staticClass:"news_box_right1"},[e("div",{staticStyle:{display:"table",margin:"0 auto"}},[e("el-image",{staticClass:"news_box_right1_img",attrs:{fit:"contain",src:t.GuessFavourite[0].cover},on:{click:function(e){return t.tobookDetail(t.GuessFavourite[0].goodsId)}}})],1),e("div",{staticClass:"news_box_right1b",on:{click:function(e){return t.tobookDetail(t.GuessFavourite[0].goodsId)}}},[e("img",{attrs:{src:n(14802)}}),e("p",{staticClass:"ellipsis-aRow"},[t._v(t._s(t.GuessFavourite[0].goodsTitle))])])]),e("div",{staticClass:"news_box_right2"},t._l(t.GuessFavourite,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:0!==s,expression:"index !== 0"}],key:s,on:{click:function(e){return t.tobookDetail(n.goodsId)}}},[t._v(" "+t._s(n.goodsTitle)+" ")])})),0)])])},r=[],o=n(63683),i={data(){return{newsdata:{},GuessFavourite:[]}},created(){this.selectNewsById(),this.getGuessFavouriteNoLogin()},methods:{selectNewsById(){(0,o.NB)({id:this.$route.query.newsId}).then((t=>{this.newsdata=t.data}))},getGuessFavouriteNoLogin(){(0,o.E_)({}).then((t=>{this.GuessFavourite=t.data.slice(0,5)}))},tobookDetail(t){let e=this.$router.resolve({path:"/bookstore/bookstoreDetail",query:{goodsId:t}});window.open(e.href,"_blank")},share(){this.$alert("此功能正在开发中，敬请期待","提示信息")}}},a=i,u=n(1001),A=(0,u.Z)(a,s,r,!1,null,"c0dfd688",null),c=A.exports},63683:function(t,e,n){n.d(e,{$A:function(){return h},AQ:function(){return p},BF:function(){return C},E_:function(){return u},Ex:function(){return o},Hp:function(){return b},NB:function(){return f},Pw:function(){return E},Wn:function(){return w},bQ:function(){return l},hH:function(){return a},jv:function(){return d},l3:function(){return i},nC:function(){return A},nG:function(){return c},nq:function(){return v},s$:function(){return g},t5:function(){return R},wh:function(){return B},xk:function(){return m}});var s=n(84471),r=n(37182);function o(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/bannerList",method:"get",params:t})}function i(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/goodsList",method:"get",params:t})}function a(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/goodBookList",method:"get",params:t})}function u(t){return(0,s.ZP)({url:r.V+"/web/goods/getGuessFavouriteNoLogin",method:"get",params:t})}function A(t){return(0,s.ZP)({url:r.V+"/web/goods/getGuessFavouriteForLogin",method:"get",params:t})}function c(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/selHotBookList",method:"get",params:t})}function l(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/selSubjectList",method:"get",params:t})}function d(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/selAuthorList",method:"get",params:t})}function g(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/selDeptList",method:"get",params:t})}function f(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/selectNewsById",method:"get",params:t})}function m(t){return(0,s.ZP)({url:r.V+"/web/serch/selectBooks",method:"get",params:t})}function b(t){return(0,s.ZP)({url:r.V+"/web/serch/selectSubjects",method:"get",params:t})}function w(t){return(0,s.ZP)({url:r.V+"/web/serch/selectAuthors",method:"get",params:t})}function v(t){return(0,s.ZP)({url:r.V+"/web/serch/selectInst",method:"get",params:t})}function h(t){return(0,s.ZP)({url:r.V+"/web/api/homePage/selectNewsByType?type="+t,method:"get"})}function p(){return(0,s.ZP)({url:r.V+"/web/paper/getToken",method:"get"})}function C(){return(0,s.ZP)({url:r.V+"/web/looseleaf/getToken",method:"get"})}function B(){return(0,s.ZP)({url:r.V+"/web/config/getConfigKey",method:"get"})}function R(t){return(0,s.ZP)({url:r.V+"/Integral/insertIntegralsg",method:"get",params:t})}function E(t){return(0,s.ZP)({url:r.V+"/Integral/insertIntegrals",method:"get",params:t})}},14802:function(t){t.exports="data:image/png;base64,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"},14842:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgBJREFUSEu1lr+LE1EQx7/zAgYRDhRbEcXD5jiwsRe7nSUW51kKJ9dcLQgHRlARtLERKxH8USgihyQ7L6kW/A+0OO8af2AlnK0ngbyMvJiENe5u9qF55b6Z+bw3s/OdRyhZ3W73lHPuIoDzAJYAHAFQA/AdwLaqpsaYl1EUfSwKQ3kbSZKcBHCPiFYA5Npk/BTAlqpei+P403S8v5xFZA3AQwAHy26Xs/dTVTfiOH6a3fsDYK1tquqtwMDT5pvMfHf8cQIQkXUAjwpzSXRHVd8C6IzqUHaONWZ+4g2GgHa7vWiMeT8jLWeY+Z2IfAVwbMYt94lo2Rd/CBCRNwAuzHAaA74AOF4hjVvMvEKdTuf0YDDYreAQClAiWqQkSW4Q0c05AHzIJolICuDcnACpB+wBODonwDcP8J1YZYXWwMccBAOstQu9Xs9kT1Sv18+qqs3pjyGgaoquMvP9Iu0ioh0AB6b2hymqWmTv+wNAPweyUCCKKf0n/SmqYTOk0ar8CFmb340WIBVBAFV9HcfxaojYhQD2nXNLjUbj80SurbVXVPVxSJQS28vM/Hwi12NDEbkO4PY/QvIHTgbiR+YDAIcCQX4GbERR9CzrlzvQW63WiVqt5sfeasWh/8o5t+lzPn2o0heDf10Q0aWR2i4DODySgz1V/WCMSfv9/ou8wGPQL8SB39V2wk1PAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=435.9fbebde8.js.map
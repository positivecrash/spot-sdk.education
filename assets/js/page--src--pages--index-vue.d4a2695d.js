(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{UF0d:function(t,e,s){"use strict";s("ppb2")},iyQ6:function(t,e,s){"use strict";s.r(e);s("07d7"),s("PKPk"),s("3bBZ");var a={components:{VueRecaptcha:function(){return s.e(5).then(s.bind(null,"4JY7"))}},metaInfo:{title:"Become a certified Boston Dynamics Spot developer",description:"test",script:[{src:"https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",body:!0}]},data:function(){return{email:null,status:"none",recaptchaSitekey:"6LfTAb0aAAAAAL7-_cRGrV-UjP_8LbfGVySWGggr"}},methods:{onSubmit:function(){this.$refs.invisibleRecaptcha.execute()},onVerify:function(t){var e=this;if(t){this.status="wait";var s="";this.email&&(s="email="+encodeURIComponent(this.email)+"&tags=spot-sdk.education,request for education"),fetch("https://script.google.com/macros/s/AKfycbw_6SXyYy0agNpwCbPwBszreRy7h3Kzc4FIg6PFG0higNVJ2jsUyNdbL2Symb2AFwzP/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s}).then((function(){return e.status="load"})).catch((function(t){return e.status="error"}))}}}},o=(s("UF0d"),s("KHd+")),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"screen screen-dark screen-video"},[s("div",{staticClass:"screen-content intro"},[s("div",{staticClass:"part-1"},[s("h2",[t._v("Educational program based on Boston Dynamics SDK")])]),s("div",{staticClass:"part-2"},[s("h1",[s("span",[t._v("Become a certified")]),t._v(" Spot developer")]),"load"!=t.status?s("form",{staticClass:"content-narrow",class:"status-"+t.status,on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Your email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",[s("label",[s("input",{attrs:{type:"checkbox",name:"agreement",required:""}}),t._v(" Accept "),s("a",{attrs:{href:"/privacy-agreement",target:"_blank"}},[t._v("privacy agreement")])])]),s("vue-recaptcha",{ref:"invisibleRecaptcha",attrs:{size:"invisible",sitekey:t.recaptchaSitekey},on:{verify:t.onVerify}}),s("div",[s("input",{attrs:{type:"submit",value:"Start"}})])],1):t._e(),"load"==t.status?s("div",{staticClass:"submition-complete"},[s("div",{staticClass:"spot animated"},[s("img",{staticClass:"spot-body",attrs:{src:"/media/spot-body.png"}}),s("img",{staticClass:"spot-leg1-top",attrs:{src:"/media/spot-leg1-top.png"}}),s("img",{staticClass:"spot-leg1-bottom",attrs:{src:"/media/spot-leg1-bottom.png"}}),s("img",{staticClass:"spot-leg2-top",attrs:{src:"/media/spot-leg2-top.png"}}),s("img",{staticClass:"spot-leg2-bottom",attrs:{src:"/media/spot-leg2-bottom.png"}}),s("img",{staticClass:"spot-leg3-top",attrs:{src:"/media/spot-leg3-top.png"}}),s("img",{staticClass:"spot-leg3-bottom",attrs:{src:"/media/spot-leg3-bottom.png"}}),s("img",{staticClass:"spot-leg4-top",attrs:{src:"/media/spot-leg4-top.png"}}),s("img",{staticClass:"spot-leg4-bottom",attrs:{src:"/media/spot-leg4-bottom.png"}})]),s("h3",[t._v("I'll be ready to help you study robotics soon!")]),t._v("\n            We received your contact email "+t._s(t.email)+"\n          ")]):t._e()]),s("div",{staticClass:"part-3"},[s("ul",{staticClass:"highlights content-narrow"},[s("li",[s("span",[t._v("Lessons "),s("g-link",{attrs:{to:"https://multi-agent.io"}},[t._v("from PhD")]),t._v(" &")],1),t._v(" Master degrees in robotics")]),s("li",[s("span",[t._v("Blockchain proofed")]),t._v(" certification provided")]),s("li",[s("span",[t._v("Powered by")]),s("g-link",{attrs:{to:"https://robonomics.network"}},[t._v("Robonomics")]),t._v(" & "),s("g-link",{attrs:{to:"https://polkadot.network"}},[t._v("Polkadot")])],1)])])]),s("video",{attrs:{autoplay:"",loop:"",muted:"",poster:"/media/spot-yoga.jpg"},domProps:{muted:!0}},[s("source",{attrs:{src:"/media/spot-yoga-web-3.mp4",type:"video/mp4"}})])])])}),[],!1,null,"71fdd71c",null);e.default=i.exports},ppb2:function(t,e,s){}}]);
(function(t){function e(e){for(var s,o,l=e[0],n=e[1],c=e[2],d=0,u=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var n=a[o];0!==i[n]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},r=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a84322fe"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var r,n=document.createElement("script");n.charset="utf-8",n.timeout=120,l.nc&&n.setAttribute("nonce",l.nc),n.src=o(t);var c=new Error;r=function(e){n.onerror=n.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,a[1](c)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:n})}),12e4);n.onerror=n.onload=r,document.head.appendChild(n)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var h=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=a("7496"),r=a("f6c4"),o=function(){var t=this,e=t._self._c;return e(i["a"],{style:["LiveRecord"==t.$route.name?{background:t.$vuetify.theme.themes[t.theme].background}:""]},[e("Navbar"),e(r["a"],{staticClass:"mx-4 mb-4"},[e("router-view")],1)],1)},l=[],n=a("40dc"),c=a("8212"),d=a("8336"),h=a("a523"),u=a("ce7e"),p=a("adda"),v=a("8860"),m=a("da13"),g=a("5d23"),f=a("34c3"),_=a("e449"),b=a("f774"),w=a("0fd9"),x=a("2fa4"),C=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"pa-0"},[e(n["a"],{attrs:{dense:"",flat:"","clipped-left":"",color:"appbar_color accent-4",app:""}},[e(h["a"],{staticClass:"ml-5"},[e(w["a"],{attrs:{align:"center"}},[e("router-link",{attrs:{to:"/"}},[e(c["a"],{staticClass:"mr-2",attrs:{color:"adilo_bg",rounded:"lg",height:"30"}},[e(p["a"],{attrs:{src:"/images/svg/swarm.svg","max-width":"20","max-height":"20"}})],1),e("v-appbar-title",{staticClass:"grey--text pr-3 font-weight-bold company_name"},[t._v("Adilo")])],1),e(x["a"],{staticClass:"mr-15"}),e("div",[e(d["a"],{staticClass:"text-none mr-3 appbar_menur_color--text",attrs:{plain:"",small:""}},[t._v("Projects")]),e(_["a"],{attrs:{transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(d["a"],t._g(t._b({staticClass:"text-none toolbar_active--text mr-3 font-weight-bold navbar_link_active mr-3",attrs:{outlined:"",small:""}},"v-btn",s,!1),a),[t._v(" Tools & App ")])]}}])},[e(v["a"],[e(m["a"],{attrs:{link:""}},[e(g["b"],[e("h6",{staticClass:"font-weight-light"},[t._v("Snapbyte Recorder")])])],1),e(u["a"]),e(m["a"],{attrs:{link:""}},[e(g["b"],[e("h6",{staticClass:"font-weight-light"},[t._v("Audio Bounce")])])],1),e(u["a"]),e(m["a"],{attrs:{link:""}},[e(g["b"],[e("h6",{staticClass:"font-weight-light"},[t._v("Sugar Voice")])])],1)],1)],1),e(d["a"],{staticClass:"text-none mr-3 appbar_menur_color--text",attrs:{plain:"",small:""}},[t._v("Channels")]),e(d["a"],{staticClass:"text-none mr-3 appbar_menur_color--text",attrs:{plain:"",small:""}},[t._v("Contacts")]),e(d["a"],{staticClass:"text-none mr-3 appbar_menur_color--text",attrs:{plain:"",small:""}},[t._v("Analytics")]),e(d["a"],{staticClass:"text-none mr-3 appbar_menur_color--text",attrs:{plain:"",small:""}},[t._v("Settings")])],1),e(x["a"]),e("div",[e(d["a"],{staticClass:"text-none toolbar_active--text mr-3 font-weight-bold",attrs:{plain:"",small:""}},[t._v("Help")])],1),e(u["a"],{staticClass:"mr-3 divider_color",attrs:{inset:"",vertical:""}}),e("div",[e(c["a"],{attrs:{rounded:"lg",height:"30",width:"30"}},[e("img",{attrs:{src:"/images/avatar.jpg"}})])],1),e("div",{staticClass:"mr-6"},[e("h5",{staticClass:"text-title"},[t._v("Cody Fisher")]),e("h6",{staticClass:"text-title grey--text font-weight-medium"},[t._v("CodyFisher@gmail.com")])])],1)],1)],1),e(u["a"]),"LiveRecord"!=t.$route.name?e(b["a"],{staticClass:"secondary",attrs:{clipped:"",permanent:"",app:""}},[e(v["a"],{attrs:{dense:"",rounded:""}},t._l(t.links,(function(a){return e(m["a"],{key:a.text,attrs:{to:a.route},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[e(f["a"],{staticClass:"ml-5 mr-4"},[e(p["a"],{attrs:{src:"/images/svg/"+a.icon+".svg",width:"25"}})],1),e(g["a"],[e(g["b"],{staticClass:"def_text--text"},[t._v(t._s(a.text))])],1)],1)})),1)],1):t._e()],1)},y=[],k={data(){return{selected:"My Recordings",links:[{icon:"video-player",text:"My Recordings",route:"/recordings"},{icon:"share",text:"Requested",route:"/requested"}]}}},R=k,j=a("2877"),S=Object(j["a"])(R,C,y,!1,null,null,null),A=S.exports,B={name:"App",components:{Navbar:A},computed:{theme(){return"dark"}},data:()=>({})},E=B,F=Object(j["a"])(E,o,l,!1,null,null,null),O=F.exports,M=a("8c4f"),P=a("b0af"),D=a("99d9"),T=a("62ad"),z=a("169a"),N=a("132d"),q=a("b974"),L=a("8dd9"),G=a("b73d"),K=function(){var t=this,e=t._self._c;return e(h["a"],[e(w["a"],[e(T["a"],{attrs:{cols:"1"}}),e(T["a"],{attrs:{cols:"10"}},[e(h["a"],{attrs:{fluid:""}},[e(w["a"],{staticClass:"grey--text"},[e(T["a"],{attrs:{cols:"12"}},[e("h5",{staticClass:"font-weight-light"},[t._v("Snapbyte   "),e("span",{staticClass:"text-h6"},[t._v(">")]),t._v("   My Recordings")])])],1),e(w["a"],[e(T["a"],{attrs:{cols:"3"}},[e("div",[e("span",{staticClass:"mr-3"},[t._v("My Recordings")]),e("span",{staticClass:"text-h6 grey--text font-weight-medium"},[t._v("0")])])]),e(T["a"],{attrs:{cols:"9"}},[e(d["a"],{staticClass:"text-none grey--text mr-2",attrs:{color:"primary",outlined:"",depressed:"",rounded:""}},[e(N["a"],{attrs:{left:"",dark:""}},[t._v(" mdi-swap-vertical ")]),e("h5",{staticClass:"font-weight-light"},[t._v("By Date")])],1),e(d["a"],{staticClass:"text-none grey--text mr-2",attrs:{color:"white",outlined:"",depressed:"",rounded:""}},[e(N["a"],{attrs:{left:"",dark:""}},[t._v(" mdi-filter-outline ")]),e("h5",{staticClass:"font-weight-light"},[t._v("Add Filter "),e("span",{staticClass:"arrow_down"},[t._v(">")])])],1),e(d["a"],{staticClass:"text-none white--text mr-2",attrs:{color:"blue_button",depressed:"",rounded:""}},[e(N["a"],{attrs:{left:"",dark:""}},[t._v(" mdi-video-outline ")]),e("h5",{staticClass:"font-weight-light"},[t._v("New Request")])],1),e(d["a"],{staticClass:"text-none white--text",attrs:{color:"red_button",depressed:"",rounded:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[e(N["a"],{attrs:{left:"",dark:"",color:"black"}},[t._v(" mdi-record-rec ")]),e("h5",{staticClass:"font-weight-light"},[t._v("Start Recording")])],1)],1)],1),e(w["a"],{attrs:{justify:"center"}},[e(z["a"],{attrs:{scrollable:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(P["a"],[e(D["b"],[e("h5",[t._v("New Recording")]),t._v(" "),e(x["a"]),e(d["a"],{attrs:{plain:""},on:{click:function(e){t.dialog=!1}}},[e("span",{staticClass:"font-weight-light text-h4 black--text"},[t._v("×")])])],1),e(u["a"]),e(D["a"],[e("div",{staticClass:"pt-5"},[e("span",{staticClass:"black--text"},[t._v("Save the record in")]),e(q["a"],{staticClass:"pt-3",attrs:{dense:"",items:t.items,filled:"","solo-inverted":"",label:"Select a project"}})],1),e("div",[e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Screen",inset:"",color:"switch_color"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Camera",inset:"",color:"switch_color"},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}}),e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Mic",inset:"",color:"switch_color"},model:{value:t.switch3,callback:function(e){t.switch3=e},expression:"switch3"}})],1),e("div",{staticClass:"pt-3",attrs:{align:"center"}},[e("router-link",{attrs:{to:"/live-record"}},[e(d["a"],{staticClass:"text-none white--text",attrs:{bottom:"",color:"blue_button",depressed:"",rounded:"",width:"250"},on:{click:function(e){t.dialog=!1}}},[e("h5",{staticClass:"font-weight-light"},[t._v("Start Recording")])])],1)],1)])],1)],1)],1),e(w["a"],{staticClass:"pt-2"},[e(L["a"],{staticClass:"mx-auto welcome_sheet lighten-2",attrs:{height:"500",width:"850"}},[e(h["a"],{attrs:{"fill-height":"",fluid:""}},[e(w["a"],[e(T["a"],{attrs:{cols:"12"}},[e("div",{attrs:{align:"center"}},[e(p["a"],{attrs:{src:"/images/envelope.png",width:"250"}})],1)]),e(T["a"],{attrs:{cols:"2"}}),e(T["a"],{attrs:{cols:"8"}},[e("h4",{staticClass:"font-weight-medium text-center"},[t._v(" Say hello to the World!")]),e("h6",{staticClass:"font-weight-medium grey--text text-center"},[t._v(" Record your first video/audio and share it what your team, friends, followers and customers.")]),e("div",{staticClass:"pt-5",attrs:{align:"center"}},[e(d["a"],{staticClass:"text-none white--text mr-2",attrs:{color:"red_button",depressed:"",rounded:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[e(N["a"],{attrs:{left:"",dark:"",color:"black"}},[t._v(" mdi-record-rec ")]),e("h5",{staticClass:"font-weight-light"},[t._v("Start Recording")])],1),e(d["a"],{staticClass:"text-none white--text",attrs:{color:"blue_button",depressed:"",rounded:""}},[e(N["a"],{attrs:{left:"",dark:""}},[t._v(" mdi-video-outline ")]),e("h5",{staticClass:"font-weight-light"},[t._v("New Request")])],1)],1)]),e(T["a"],{attrs:{cols:"2"}})],1)],1)],1)],1)],1)],1),e(T["a"],{attrs:{cols:"1"}})],1),e(w["a"],{attrs:{justify:"center"}},[e(z["a"],{attrs:{scrollable:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(P["a"],[e(D["b"],[e("h5",[t._v("New Recording")]),t._v(" "),e(x["a"]),e(d["a"],{attrs:{plain:""},on:{click:function(e){t.dialog=!1}}},[e("span",{staticClass:"font-weight-light text-h4 black--text"},[t._v("×")])])],1),e(u["a"]),e(D["a"],[e("div",{staticClass:"pt-5"},[e("span",{staticClass:"black--text"},[t._v("Save the record in")]),e(q["a"],{staticClass:"pt-3",attrs:{dense:"",items:t.items,filled:"","solo-inverted":"",label:"Select a project"}})],1),e("div",[e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Screen",inset:"",color:"switch_color"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Camera",inset:"",color:"switch_color"},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}}),e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Mic",inset:"",color:"switch_color"},model:{value:t.switch3,callback:function(e){t.switch3=e},expression:"switch3"}})],1),e("div",{staticClass:"pt-3",attrs:{align:"center"}},[e("router-link",{attrs:{to:"/live-record"}},[e(d["a"],{staticClass:"text-none white--text",attrs:{bottom:"",color:"blue_button",depressed:"",rounded:"",width:"250"},on:{click:function(e){t.dialog=!1}}},[e("h5",{staticClass:"font-weight-light"},[t._v("Start Recording")])])],1)],1)])],1)],1)],1),e(w["a"],[e(T["a"],{attrs:{cols:"1"}}),e(T["a"],{attrs:{cols:"10"}},[e(h["a"],{attrs:{fluid:""}},[e(w["a"],[e(T["a"],{attrs:{cols:"6"}},[e(p["a"],{attrs:{src:"/images/demo.png","max-width":"350"}})],1),e(T["a"],{staticClass:"pt-12",attrs:{cols:"6"}},[e("p",{staticClass:"def_text--text font-weight-medium text-h5"},[t._v(" Want more controls & better qality recording?")]),e(d["a"],{staticClass:"text-none white--text mr-2",attrs:{color:"blue_button",depressed:"",rounded:""}},[e("h5",{staticClass:"font-weight-light"},[t._v("Download the desktop recorder")])])],1)],1)],1)],1),e(T["a"],{attrs:{cols:"1"}})],1)],1)},$=[],H={data(){return{switch1:!0,switch2:!0,switch3:!1,dialog:!1}}},J=H,V=Object(j["a"])(J,K,$,!1,null,null,null),W=V.exports,I=a("a75b"),Q=function(){var t=this,e=t._self._c;return e(I["a"],[e(h["a"],[e(w["a"],[e(T["a"],{attrs:{cols:"2"}}),e(T["a"],{staticClass:"8"},[e("span",{staticClass:"pl-6 font-weight-light live_preview grey--text"},[e(N["a"],{attrs:{color:"record_icon",right:"",dense:"",small:""}},[t._v(" mdi-radiobox-marked ")]),t._v(" Live Preview")],1),e("p"),e(L["a"],{staticClass:"mx-auto live_prev_bg",attrs:{rounded:"",height:"350",width:"700"}})],1),e(T["a"],{attrs:{cols:"2"}})],1),e("div",{staticClass:"pt-10",attrs:{align:"center"}},[e(d["a"],{staticClass:"text-none white--text",attrs:{bottom:"",color:"blue_button",depressed:"",rounded:""},on:{click:function(e){t.dialog=!1}}},[e("h5",{staticClass:"font-weight-light"},[t._v("Start recording")])])],1)],1)],1)},U=[],X={computed:{theme(){return"dark"}}},Y=X,Z=Object(j["a"])(Y,Q,U,!1,null,null,null),tt=Z.exports,et=a("1f4f"),at=function(){var t=this,e=t._self._c;return e(h["a"],{attrs:{fluid:""}},[e(w["a"],[e(T["a"],{attrs:{cols:"1"}}),e(T["a"],{attrs:{cols:"10"}},[e(h["a"],{attrs:{fluid:""}},[e(w["a"],{staticClass:"grey--text"},[e(T["a"],{attrs:{cols:"12"}},[e("h5",{staticClass:"font-weight-light"},[t._v("Snapbyte   "),e("span",{staticClass:"text-h6"},[t._v(">")]),t._v("   My Recordings")])])],1),e(w["a"],[e(T["a"],{attrs:{cols:"3"}},[e("div",[e("span",{staticClass:"mr-3"},[t._v("My Recordings")]),e("span",{staticClass:"text-h6 grey--text font-weight-medium"},[t._v("25")])])]),e(T["a"],{attrs:{cols:"9"}},[e(d["a"],{staticClass:"text-none grey--text mr-2",attrs:{color:"primary",outlined:"",depressed:"",rounded:""}},[e(N["a"],{attrs:{left:"",dark:""}},[t._v(" mdi-swap-vertical ")]),e("h5",{staticClass:"font-weight-light"},[t._v("By Date")])],1),e(d["a"],{staticClass:"text-none grey--text mr-2",attrs:{color:"white",outlined:"",depressed:"",rounded:""}},[e(N["a"],{attrs:{left:"",dark:""}},[t._v(" mdi-filter-outline ")]),e("h5",{staticClass:"font-weight-light"},[t._v("Add Filter "),e("span",{staticClass:"arrow_down"},[t._v(">")])])],1),e(d["a"],{staticClass:"text-none white--text mr-2",attrs:{color:"blue_button",depressed:"",rounded:""}},[e(N["a"],{attrs:{left:"",dark:""}},[t._v(" mdi-video-outline ")]),e("h5",{staticClass:"font-weight-light"},[t._v("New Request")])],1),e(d["a"],{staticClass:"text-none white--text",attrs:{color:"red_button",depressed:"",rounded:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[e(N["a"],{attrs:{left:"",dark:"",color:"black"}},[t._v(" mdi-record-rec ")]),e("h5",{staticClass:"font-weight-light"},[t._v("Start Recording")])],1)],1)],1),e(w["a"],{attrs:{justify:"center"}},[e(z["a"],{attrs:{scrollable:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(P["a"],[e(D["b"],[e("h5",[t._v("New Recording")]),t._v(" "),e(x["a"]),e(d["a"],{attrs:{plain:""},on:{click:function(e){t.dialog=!1}}},[e("span",{staticClass:"font-weight-light text-h4 black--text"},[t._v("×")])])],1),e(u["a"]),e(D["a"],[e("div",{staticClass:"pt-5"},[e("span",{staticClass:"black--text"},[t._v("Save the record in")]),e(q["a"],{staticClass:"pt-3",attrs:{dense:"",items:t.items,filled:"","solo-inverted":"",label:"Select a project"}})],1),e("div",[e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Screen",inset:"",color:"switch_color"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Camera",inset:"",color:"switch_color"},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}}),e(G["a"],{staticClass:"v-input--reverse v-input--expand mt-1",attrs:{dense:"",label:"Record Mic",inset:"",color:"switch_color"},model:{value:t.switch3,callback:function(e){t.switch3=e},expression:"switch3"}})],1),e("div",{staticClass:"pt-3",attrs:{align:"center"}},[e("router-link",{attrs:{to:"/live-record"}},[e(d["a"],{staticClass:"text-none white--text",attrs:{bottom:"",color:"blue_button",depressed:"",rounded:"",width:"250"},on:{click:function(e){t.dialog=!1}}},[e("h5",{staticClass:"font-weight-light"},[t._v("Start Recording")])])],1)],1)])],1)],1)],1),e(w["a"],[e(et["a"],[e("thead",[e("tr",[e("th",{staticClass:"toolbar_active--text"},[e("h3",{staticClass:"font-weight-medium"},[t._v("Recordings")])]),e("th",{staticClass:"toolbar_active--text"},[e("h3",{staticClass:"font-weight-medium"},[t._v("Title")])]),e("th",{staticClass:"toolbar_active--text"},[e("h3",{staticClass:"font-weight-medium"},[t._v("Views")])]),e("th",{staticClass:"toolbar_active--text"},[e("h3",{staticClass:"font-weight-medium"},[t._v("Size")])]),e("th",{staticClass:"toolbar_active--text",attrs:{colspan:"2"}},[e("h3",{staticClass:"font-weight-medium"},[t._v("Last Modified")])])])]),e("tbody",t._l(t.recordings,(function(a){return e("tr",{key:a.thumbnail,staticClass:"toolbar_active--text mb-5"},[e("td",[e(p["a"],{attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-height":"80","max-width":"80",src:a.thumbnail,contain:""}})],1),e("td",[e("h4",{staticClass:"font-weight-light toolbar_active--text text-sm-left"},[t._v(" "+t._s(a.title)+" ")]),e("h5",{staticClass:"table_content--text text-sm-left font-weight-light"},[t._v(" "+t._s(a.subtitle)+" ")])]),e("td",[t._v(t._s(a.views))]),e("td",[t._v(t._s(a.size))]),e("td",[t._v(t._s(a.last_modified))]),e("td",[e(d["a"],{attrs:{icon:""}},[e(N["a"],{staticClass:"grey--text"},[t._v("mdi-dots-horizontal")])],1)],1)])})),0)])],1)],1)],1),e(T["a"],{attrs:{cols:"1"}})],1)],1)},st=[],it={data(){return{switch1:!0,switch2:!0,switch3:!1,dialog:!1,recordings:[{thumbnail:"/images/thumbnail.jpg",title:"Getting it rigt the first time",subtitle:"The video description is shown here if the user has added it.",views:"324",size:"923KB",last_modified:"3 months ago"},{thumbnail:"/images/thumbnail1.jpg",title:"Getting it rigt the first time",subtitle:"The video description is shown here if the user has added it.",views:"324",size:"923KB",last_modified:"3 months ago"},{thumbnail:"/images/thumbnail2.jpg",title:"Getting it rigt the first time",subtitle:"The video description is shown here if the user has added it.",views:"324",size:"923KB",last_modified:"3 months ago"},{thumbnail:"/images/thumbnail3.jpg",title:"Getting it rigt the first time",subtitle:"The video description is shown here if the user has added it.",views:"324",size:"923KB",last_modified:"3 months ago"},{thumbnail:"/images/thumbnail4.jpg",title:"Getting it rigt the first time",subtitle:"The video description is shown here if the user has added it.",views:"324",size:"923KB",last_modified:"3 months ago"}]}}},rt=it,ot=Object(j["a"])(rt,at,st,!1,null,null,null),lt=ot.exports;s["a"].use(M["a"]);const nt=[{path:"/",name:"Home",component:W},{path:"/recordings",name:"Recordings",component:lt},{path:"/live-record",name:"LiveRecord",component:tt},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))}],ct=new M["a"]({mode:"history",base:"/",routes:nt});var dt=ct,ht=a("f309"),ut=a("fcf4");s["a"].use(ht["a"]);var pt=new ht["a"]({theme:{themes:{light:{primary:"#0DABD8",secondary:"#EBF2F6",accent:"#8c9eff",error:"#b71c1c",def_text:"#21455E",appbar_background:"red",appbar_menur_color:"#707070",toolbar_active:"#21455E",grey:"#63768E",red_button:"#EF5350",blue_button:"#0DABDB",table_content:"#A3BAC6",switch_color:"0AD688",live_rec_bg1:"#0DABD8",live_prev_bg:"#21455E",record_icon:"#EE5951",divider_color:"#A3BAC6",appbar_color:"#FFFFFF",adilo_bg:"#FBBD71",nav_drawer_active:"#E2E5ED",envelope:"#4EC5E7"},dark:{primary:ut["a"].blue.lighten3,background:"#EAFAFF"}}}});s["a"].config.productionTip=!1,new s["a"]({router:dt,vuetify:pt,render:t=>t(O)}).$mount("#app")}});
//# sourceMappingURL=app.98a28998.js.map
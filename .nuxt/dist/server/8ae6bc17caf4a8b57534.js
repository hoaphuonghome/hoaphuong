exports.ids=[2],exports.modules={76:function(e,t,l){"use strict";l.r(t);var n={data:()=>({running:[],success:[],cookie:"",link:"",loading:!1,data_link:[],origins:[]}),computed:{table_status(){return this.running.concat(this.success)},data(){let e=this.link.split("\n").filter(e=>e.includes("http"));if(0===e.length)return[];let t=this;return e.map(e=>{let{origin:l}=new URL(e.trim());return{url:e,status:this.success.map(({url:e})=>e).includes(e)?2:this.running.map(({url:e})=>e).includes(e)?1:0,origin:l,cookie:(t.origins.find(e=>e.origin===l)||{cookie:""}).cookie}})}},watch:{link:function(){let e=this.link.split("\n").filter(e=>e.includes("http"));if(0===e.length)return[];let t=this,data=e.map(e=>{let{origin:l}=new URL(e.trim()),{cookie:n}=t.origins.find(e=>e.origin===l)||{cookie:""};return{origin:l,cookie:n}});this.origins=Object.values(data.reduce((e,t)=>Object.assign(e,{[t.origin]:t}),{}))}},methods:{async submit(){if(0===this.data)return this.$message({message:"Vui lòng nhập ít nhất 1 link",type:"error"});this.loading=!0;for(let{url:e,cookie:t}of this.data){this.running.push({url:e,cookie:t,status:1,id:null});let{data:data}=await this.$axios.post("http://localhost/api/save/add",{url:e,cookie:t});if(e.includes("facebook.com")){let l=this.filter_facebook_link(e);l&&await this.facebook_post(l,t)}this.running=this.running.filter(t=>t.url!==e),this.success.push(data),this.link=this.link.replace(e+"\n","").replace(e,"")}this.loading=!1},async facebook_post(e,t){await this.$axios.post("http://localhost/api/post/info",{id_post:e,cookie:t})},filter_facebook_link(e){let t=null,l=e.includes("facebook.com/groups")&&e.includes("permalink"),n=e.includes("facebook.com")&&e.includes("/posts/");e.includes("facebook.com/permalink.php?story_fbid=")||e.includes("facebook.com/photo.php?fbid=")||e.includes("facebook.com")&&e.includes("/posts/");return l&&(t=e.match(/(?<=\/permalink\/+).*?(?=\/)/gs)[0]),n&&(t=e.match(/(?<=\/posts\/+).*?(?=\?)/gs)[0]),t},remove_origin(e){this.link=this.link.split("\n").filter(t=>!t.includes(e)).join("\n")}}},o=l(3),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._ssrNode("<div"+e._ssrStyle(null,null,{display:e.origins.length>0?"":"none"})+">","</div>",[l("el-tag",{attrs:{type:"primary",closable:!1,effect:"dark",size:"medium","disable-transitions":!1}},[e._v("Thiết lập Cookie")]),e._ssrNode(" <br><br> "),e._l(e.origins,(function(data,t){return l("el-row",{key:t},[l("el-col",{attrs:{align:"left",span:6}},[l("el-tag",{attrs:{type:"info",closable:!0,effect:"plain",size:"medium","disable-transitions":!1},on:{close:function(t){return e.remove_origin(data.origin)}}},[e._v(e._s(data.origin))])],1),e._v(" "),l("el-col",{attrs:{align:"center",span:2}},[l("el-divider",{attrs:{direction:"vertical"}})],1),e._v(" "),l("el-col",{attrs:{align:"right",span:16}},[l("el-input",{attrs:{placeholder:"Cookie rỗng",size:"small","prefix-icon":"","suffix-icon":"",maxlength:"null",clearable:"",type:"text",autosize:!1,disabled:!1,autocomplete:"off"},model:{value:data.cookie,callback:function(t){e.$set(data,"cookie",t)},expression:"data.cookie"}})],1),e._v(" "),l("br"),l("br")],1)})),e._ssrNode(" "),l("el-divider",{attrs:{direction:"horizontal"}})],2),e._ssrNode(" "),l("el-input",{attrs:{type:"textarea",rows:6,autosize:!1,placeholder:"Nhập Link,mỗi Link một dòng"},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}}),e._ssrNode(" <br><br> "),l("center",[l("el-button",{attrs:{type:"primary",icon:"",loading:e.loading,plain:!1,round:!1,circle:!1,autofocus:!1,size:"small",disabled:!1},on:{click:e.submit}},[e._v("Quét")])],1),e._ssrNode(" "),e._ssrNode("<div"+e._ssrStyle(null,null,{display:e.table_status.length>0?"":"none"})+">","</div>",[l("el-divider",{attrs:{direction:"horizontal"}}),e._ssrNode(" "),l("el-row",[l("el-col",{attrs:{span:20}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.table_status,height:"500",border:!1,"highlight-current-row":!1,stripe:!1,lazy:!1,"show-summary":!1,"tooltip-effect":"light"}},[l("el-table-column",{attrs:{type:"index",align:"left",sortable:!1,fixed:!1,width:"60"}}),e._v(" "),l("el-table-column",{attrs:{label:"URL",prop:"url",align:"left",sortable:!1,fixed:!1,width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-link",{attrs:{href:t.row.url,icon:"",type:"primary",underline:!1,disabled:!1}},[e._v(e._s(t.row.url.slice(0,45)+"..."))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Trạng thái",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",{attrs:{type:1===t.row.status?"warning":"success","disable-transitions":""}},[e._v(e._s(1===t.row.status?"Đang quét":"Thành công"))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-link",{attrs:{target:"_blank",href:"/api/save/view?id="+t.row.id,icon:"el-icon-view",type:"primary",underline:!1,disabled:!1}},[e._v("Vỉew")])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-link",{attrs:{target:"_blank",href:"/api/save/download?id="+t.row.id,icon:"el-icon-download",type:"primary",underline:!1,disabled:!1}},[e._v("Download")])]}}])})],1)],1)],1)],2)],2)}),[],!1,null,null,"d89be048");t.default=component.exports}};
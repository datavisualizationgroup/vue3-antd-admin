(window.webpackJsonp=window.webpackJsonp||[]).push([["layout~31ecd969"],{"15ba":function(e,t,n){"use strict";n("e9f8")},"2e2f":function(e,t,n){"use strict";n("32d2")},"32d2":function(e,t,n){},"7da8":function(e,t,n){"use strict";n("a6a6")},a6a6:function(e,t,n){},c1f7:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o.withScopeId)("data-v-a52e7e6a"),a=c((function(e,t,n,a,r,l){var i=Object(o.resolveComponent)("sider-menu"),u=Object(o.resolveComponent)("a-layout-sider"),d=Object(o.resolveComponent)("page-header"),s=Object(o.resolveComponent)("tabs-view"),b=Object(o.resolveComponent)("a-layout-content"),p=Object(o.resolveComponent)("a-layout");return Object(o.openBlock)(),Object(o.createBlock)(p,{class:"layout"},{default:c((function(){return[Object(o.createVNode)(u,{collapsed:e.collapsed,"onUpdate:collapsed":t[1]||(t[1]=function(t){return e.collapsed=t}),trigger:null,collapsible:"",class:"layout-sider"},{default:c((function(){return[Object(o.createVNode)(i,{collapsed:e.collapsed},null,8,["collapsed"])]})),_:1},8,["collapsed"]),Object(o.createVNode)(p,null,{default:c((function(){return[Object(o.createVNode)(d,{collapsed:e.collapsed,"onUpdate:collapsed":t[2]||(t[2]=function(t){return e.collapsed=t})},null,8,["collapsed"]),Object(o.createVNode)(b,{class:"layout-content"},{default:c((function(){return[Object(o.createVNode)(s)]})),_:1})]})),_:1})]})),_:1})})),r=(n("b0c0"),n("ade3")),l=n("4d91"),i=n("1d19"),u=n("daa3"),d=n("4df5");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={prefixCls:l.a.string,hasSider:l.a.boolean,tagName:l.a.string};function j(e){var t=e.suffixCls,n=e.tagName,c=e.name;return function(e){return{name:c,props:e.props,setup:function(){return{configProvider:Object(o.inject)("configProvider",d.a)}},render:function(){var c=this,a=this.$props.prefixCls,r=p(p({prefixCls:(0,this.configProvider.getPrefixCls)(t,a)},Object(u.h)(this)),{},{tagName:n});return Object(o.createVNode)(e,r,{default:function(){return[Object(u.j)(c)]}})}}}}var m={props:f,render:function(){var e=this,t=this.prefixCls,n=this.tagName,c={class:t};return Object(o.createVNode)(n,c,{default:function(){return[Object(u.j)(e)]}})}},h={props:f,data:function(){return{siders:[]}},created:function(){var e=this;Object(o.provide)("siderHook",{addSider:function(t){e.siders=[].concat(function(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e.siders),[t])},removeSider:function(t){e.siders=e.siders.filter((function(e){return e!==t}))}})},render:function(){var e=this,t=this.prefixCls,n=this.hasSider,c=this.tagName,a={class:Object(i.a)(t,O({},"".concat(t,"-has-sider"),"boolean"==typeof n?n:this.siders.length>0))};return Object(o.createVNode)(c,a,{default:function(){return[Object(u.j)(e)]}})}},v=j({suffixCls:"layout",tagName:"section",name:"ALayout"})(h),g=j({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(m),y=j({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(m),k=j({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(m);v.Header=g,v.Footer=y,v.Content=k;var C=v,N=n("b488"),V=n("a2e5"),w=n.n(V),S=n("c6a9"),x=n.n(S),P=n("89fd"),B=n.n(P),_=n("0464");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F,D={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},K={prefixCls:l.a.string,collapsible:l.a.bool,collapsed:l.a.bool,defaultCollapsed:l.a.bool,reverseArrow:l.a.bool,zeroWidthTriggerStyle:l.a.object,trigger:l.a.any,width:l.a.oneOfType([l.a.number,l.a.string]),collapsedWidth:l.a.oneOfType([l.a.number,l.a.string]),breakpoint:l.a.oneOf(["xs","sm","md","lg","xl","xxl"]),theme:l.a.oneOf(["light","dark"]).def("dark"),onBreakpoint:l.a.func,onCollapse:l.a.func,"onUpdate:collapsed":l.a.func},A=(F=0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return F+=1,"".concat(e).concat(F)}),H={name:"ALayoutSider",__ANT_LAYOUT_SIDER:!0,mixins:[N.a],props:Object(u.n)(K,{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),data:function(){var e;this.uniqueId=A("ant-sider-"),"undefined"!=typeof window&&(e=window.matchMedia);var t=Object(u.h)(this);return e&&t.breakpoint&&t.breakpoint in D&&(this.mql=e("(max-width: ".concat(D[t.breakpoint],")"))),{sCollapsed:"collapsed"in t?t.collapsed:t.defaultCollapsed,below:!1,belowShow:!1}},watch:{collapsed:function(e){this.setState({sCollapsed:e})}},created:function(){Object(o.provide)("layoutSiderContext",this)},setup:function(){return{siderHook:Object(o.inject)("siderHook",{}),configProvider:Object(o.inject)("configProvider",d.a)}},mounted:function(){var e=this;this.$nextTick((function(){e.mql&&(e.mql.addListener(e.responsiveHandler),e.responsiveHandler(e.mql)),e.siderHook.addSider&&e.siderHook.addSider(e.uniqueId)}))},beforeUnmount:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.siderHook.removeSider&&this.siderHook.removeSider(this.uniqueId)},methods:{responsiveHandler:function(e){this.setState({below:e.matches}),this.$emit("breakpoint",e.matches),this.sCollapsed!==e.matches&&this.setCollapsed(e.matches,"responsive")},setCollapsed:function(e,t){Object(u.m)(this,"collapsed")||this.setState({sCollapsed:e}),this.$emit("update:collapsed",e),this.$emit("collapse",e,t)},toggle:function(){var e=!this.sCollapsed;this.setCollapsed(e,"clickTrigger")},belowShowChange:function(){this.setState({belowShow:!this.belowShow})}},render:function(){var e,t=I(I({},Object(u.h)(this)),this.$attrs),n=t.prefixCls,c=t.class,a=t.theme,r=t.collapsible,l=t.reverseArrow,d=t.style,s=t.width,b=t.collapsedWidth,p=t.zeroWidthTriggerStyle,O=function(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}(t,["prefixCls","class","theme","collapsible","reverseArrow","style","width","collapsedWidth","zeroWidthTriggerStyle"]),f=(0,this.configProvider.getPrefixCls)("layout-sider",n),j=Object(_.a)(O,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook","zeroWidthTriggerStyle","trigger","onUpdate:collapse"]),m=Object(u.e)(this,"trigger"),h=this.sCollapsed?b:s,v=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}(h)?"".concat(h,"px"):String(h),g=0===parseFloat(String(b||0))?Object(o.createVNode)("span",{onClick:this.toggle,class:"".concat(f,"-zero-width-trigger ").concat(f,"-zero-width-trigger-").concat(l?"right":"left"),style:p},[Object(o.createVNode)(w.a,null,null)]):null,y={expanded:l?Object(o.createVNode)(x.a,null,null):Object(o.createVNode)(B.a,null,null),collapsed:l?Object(o.createVNode)(B.a,null,null):Object(o.createVNode)(x.a,null,null)}[this.sCollapsed?"collapsed":"expanded"],k=null!==m?g||Object(o.createVNode)("div",{class:"".concat(f,"-trigger"),onClick:this.toggle,style:{width:v}},[m||y]):null,C=I(I({},d),{},{flex:"0 0 ".concat(v),maxWidth:v,minWidth:v,width:v}),N=Object(i.a)(c,f,"".concat(f,"-").concat(a),(T(e={},"".concat(f,"-collapsed"),!!this.sCollapsed),T(e,"".concat(f,"-has-trigger"),r&&null!==m&&!g),T(e,"".concat(f,"-below"),!!this.below),T(e,"".concat(f,"-zero-width"),0===parseFloat(v)),e));return Object(o.createVNode)("aside",Object(o.mergeProps)({class:N},j,{style:C}),[Object(o.createVNode)("div",{class:"".concat(f,"-children")},[Object(u.j)(this)]),r||this.below&&g?k:null])}};C.Sider=H,C.install=function(e){e.component(C.name,C),e.component(C.Header.name,C.Header),e.component(C.Footer.name,C.Footer),e.component(C.Sider.name,C.Sider),e.component(C.Content.name,C.Content)};var E=C,q=n("f64c"),M=Object(o.withScopeId)("data-v-f1fe03f2");Object(o.pushScopeId)("data-v-f1fe03f2");var U={class:"tabs-view"},W={style:{display:"inline-block"}},R=Object(o.createTextVNode)(" 刷新 "),z=Object(o.createTextVNode)(" 关闭 "),$=Object(o.createTextVNode)(" 关闭左侧 "),J=Object(o.createTextVNode)(" 关闭右侧 "),G=Object(o.createTextVNode)(" 关闭其他 "),Y=Object(o.createTextVNode)(" 关闭全部 "),Q=Object(o.createTextVNode)(" 刷新 "),X=Object(o.createTextVNode)(" 关闭 "),Z=Object(o.createTextVNode)(" 关闭其他 "),ee=Object(o.createTextVNode)(" 关闭全部 "),te={class:"tabs-view-content"};Object(o.popScopeId)();var ne,oe=M((function(e,t,n,c,a,r){var l=Object(o.resolveComponent)("reload-outlined"),i=Object(o.resolveComponent)("a-menu-item"),u=Object(o.resolveComponent)("close-outlined"),d=Object(o.resolveComponent)("a-menu-divider"),s=Object(o.resolveComponent)("vertical-right-outlined"),b=Object(o.resolveComponent)("vertical-left-outlined"),p=Object(o.resolveComponent)("column-width-outlined"),O=Object(o.resolveComponent)("minus-outlined"),f=Object(o.resolveComponent)("a-menu"),j=Object(o.resolveComponent)("a-dropdown"),m=Object(o.resolveComponent)("a-tab-pane"),h=Object(o.resolveComponent)("down-outlined"),v=Object(o.resolveComponent)("a-tabs"),g=Object(o.resolveComponent)("router-transition");return Object(o.openBlock)(),Object(o.createBlock)("div",U,[Object(o.createVNode)(v,{activeKey:e.activeKey,"onUpdate:activeKey":t[4]||(t[4]=function(t){return e.activeKey=t}),onChange:e.changePage,"hide-add":"",type:"editable-card",onEdit:e.editTabItem,class:"tabs"},{tabBarExtraContent:M((function(){return[Object(o.createVNode)(j,{trigger:["click"]},{overlay:M((function(){return[Object(o.createVNode)(f,{style:{"user-select":"none"}},{default:M((function(){return[Object(o.createVNode)(i,{onClick:e.reloadPage,disabled:e.activeKey!==e.route.fullPath,key:"1"},{default:M((function(){return[Object(o.createVNode)(l),Q]})),_:1},8,["onClick","disabled"]),Object(o.createVNode)(i,{onClick:t[2]||(t[2]=function(t){return e.removeTab(e.route.fullPath)}),key:"2"},{default:M((function(){return[Object(o.createVNode)(u),X]})),_:1}),Object(o.createVNode)(d),Object(o.createVNode)(i,{onClick:t[3]||(t[3]=function(t){return e.closeOther(e.route.fullPath)}),key:"5"},{default:M((function(){return[Object(o.createVNode)(p),Z]})),_:1}),Object(o.createVNode)(i,{onClick:e.closeAll,key:"6"},{default:M((function(){return[Object(o.createVNode)(O),ee]})),_:1},8,["onClick"])]})),_:1})]})),default:M((function(){return[Object(o.createVNode)("a",{class:"ant-dropdown-link",onClick:t[1]||(t[1]=function(e){return e.preventDefault()})},[Object(o.createVNode)(h,{style:{fontSize:"20px"}})])]})),_:1})]})),default:M((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.pageList,(function(t,n){return Object(o.openBlock)(),Object(o.createBlock)(m,{key:t.fullPath,closable:t.closable},{tab:M((function(){return[Object(o.createVNode)(j,{trigger:["contextmenu"]},{overlay:M((function(){return[Object(o.createVNode)(f,{style:{"user-select":"none"}},{default:M((function(){return[Object(o.createVNode)(i,{onClick:e.reloadPage,disabled:e.activeKey!==t.fullPath,key:"1"},{default:M((function(){return[Object(o.createVNode)(l),R]})),_:2},1032,["onClick","disabled"]),Object(o.createVNode)(i,{onClick:function(n){return e.removeTab(t.fullPath)},key:"2"},{default:M((function(){return[Object(o.createVNode)(u),z]})),_:1},8,["onClick"]),Object(o.createVNode)(d),Object(o.createVNode)(i,{onClick:function(o){return e.closeLeft(t.fullPath,n)},key:"3"},{default:M((function(){return[Object(o.createVNode)(s),$]})),_:1},8,["onClick"]),Object(o.createVNode)(i,{onClick:function(o){return e.closeRight(t.fullPath,n)},key:"4"},{default:M((function(){return[Object(o.createVNode)(b),J]})),_:1},8,["onClick"]),Object(o.createVNode)(d),Object(o.createVNode)(i,{onClick:function(n){return e.closeOther(t.fullPath)},key:"5"},{default:M((function(){return[Object(o.createVNode)(p),G]})),_:1},8,["onClick"]),Object(o.createVNode)(i,{onClick:e.closeAll,key:"6"},{default:M((function(){return[Object(o.createVNode)(O),Y]})),_:1},8,["onClick"])]})),_:2},1024)]})),default:M((function(){return[Object(o.createVNode)("div",W,Object(o.toDisplayString)(t.meta.title),1)]})),_:2},1024)]})),_:2},1032,["closable"])})),128))]})),_:1},8,["activeKey","onChange","onEdit"]),Object(o.createVNode)("div",te,[Object(o.createVNode)(g,{"not-need-key":!0,animate:!1})])])})),ce=(n("4de4"),n("7db0"),n("c740"),n("caad"),n("a434"),n("ac1f"),n("5319"),n("5530")),ae=n("6c02"),re=n("6afa"),le=n("35c8"),ie=n("1ebd"),ue=n("a878"),de=n("b466"),se=n("ef23"),be=n("d825"),pe=n("ccb9"),Oe=n("a600"),fe=(ne={},Object(r.a)(ne,pe.a.name,pe.a),Object(r.a)(ne,pe.a.TabPane.name,pe.a.TabPane),Object(r.a)(ne,Oe.a.name,Oe.a),Object(r.a)(ne,"MinusOutlined",re.a),Object(r.a)(ne,"DownOutlined",le.a),Object(r.a)(ne,"ReloadOutlined",ie.a),Object(r.a)(ne,"CloseOutlined",ue.a),Object(r.a)(ne,"VerticalRightOutlined",de.a),Object(r.a)(ne,"VerticalLeftOutlined",se.a),Object(r.a)(ne,"ColumnWidthOutlined",be.a),ne),je=n("a161"),me=Object(o.defineComponent)({name:"tabs-view",components:Object(ce.a)(Object(ce.a)({},fe),{},{RouterTransition:je.a}),setup:function(){var e=Object(ae.c)(),t=Object(ae.d)(),n=function(e){return{fullPath:e.fullPath,hash:e.hash,meta:e.meta,name:e.name,params:e.params,path:e.path,query:e.query}},c=[];try{var a=localStorage.getItem("routes");c=a?JSON.parse(a):[n(e)]}catch(t){c=[n(e)]}var r=Object(o.reactive)({pageList:c,activeKey:e.fullPath}),l=["Redirect","login"];Object(o.watch)((function(){return e.fullPath}),(function(t,c){l.includes(e.name)||(r.activeKey=t,r.pageList.find((function(e){return Object(o.unref)(e).fullPath==t}))||r.pageList.push(n(e)))}),{immediate:!0}),window.addEventListener("beforeunload",(function(){localStorage.setItem("routes",JSON.stringify(r.pageList))}));var i=function(e){if(1===r.pageList.length)return q.a.warning("这已经是最后一页，不能再关闭了！");var n=r.pageList.findIndex((function(t){return t.fullPath==e}));if(r.pageList.splice(n,1),r.activeKey===e){var o=r.pageList[Math.max(0,r.pageList.length-1)];r.activeKey=o.fullPath,t.push(o)}};return Object(ce.a)(Object(ce.a)({},Object(o.toRefs)(r)),{},{route:e,changePage:function(e){r.activeKey=e,t.push(e)},editTabItem:function(e,t){"remove"==t&&i(e)},removeTab:i,closeLeft:function(e,n){r.pageList.splice(0,n),r.activeKey=e,t.replace(e)},closeRight:function(e,n){r.pageList.splice(n+1),r.activeKey=e,t.replace(e)},closeOther:function(e){r.pageList=r.pageList.filter((function(t){return t.fullPath==e})),r.activeKey=e,t.replace(e)},closeAll:function(){localStorage.removeItem("routes"),r.pageList=[],t.replace("/")},reloadPage:function(){t.push({path:"/redirect"+Object(o.unref)(e).fullPath})}})}});n("f0a9"),me.render=oe,me.__scopeId="data-v-f1fe03f2";var he=me,ve=(n("a15b"),Object(o.withScopeId)("data-v-a8ee2bbc"));Object(o.pushScopeId)("data-v-a8ee2bbc");var ge={class:"logo"},ye={class:"nav-text"},ke={class:"nav-text"},Ce={class:"nav-text"};Object(o.popScopeId)();var Ne=ve((function(e,t,n,c,a,r){var l=Object(o.resolveComponent)("svg-icon"),i=Object(o.resolveComponent)("a-menu-item"),u=Object(o.resolveComponent)("a-sub-menu"),d=Object(o.resolveComponent)("a-menu");return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[Object(o.createVNode)("div",ge,[Object(o.createVNode)(l,{"icon-class":"logo"}),Object(o.withDirectives)(Object(o.createVNode)("h1",null,"黑匣子控制中心",512),[[o.vShow,!e.collapsed]])]),Object(o.createVNode)(d,{onClick:e.clickMenuItem,theme:"dark",mode:"inline",inlineCollapsed:e.collapsed,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=function(t){return e.selectedKeys=t}),openKeys:e.openKeys,"onUpdate:openKeys":t[2]||(t[2]=function(t){return e.openKeys=t}),onOpenChange:e.onOpenChange},{default:ve((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.routes,(function(e){return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[e.meta.hidden?Object(o.createCommentVNode)("",!0):(Object(o.openBlock)(),Object(o.createBlock)(u,{key:e.path},{title:ve((function(){var t;return[(Object(o.openBlock)(),Object(o.createBlock)(Object(o.resolveDynamicComponent)(null===(t=e.meta)||void 0===t?void 0:t.icon))),Object(o.createVNode)("span",null,Object(o.toDisplayString)(e.meta.title),1)]})),default:ve((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.children,(function(t){return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[t.meta.isGroup?(Object(o.openBlock)(),Object(o.createBlock)(u,{key:[e.path,t.path].join("/")},{title:ve((function(){var e;return[(Object(o.openBlock)(),Object(o.createBlock)(Object(o.resolveDynamicComponent)(null===(e=t.meta)||void 0===e?void 0:e.icon))),Object(o.createVNode)("span",ye,Object(o.toDisplayString)(t.meta.title),1)]})),default:ve((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(t.children,(function(n){return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[n.meta.hidden?Object(o.createCommentVNode)("",!0):(Object(o.openBlock)(),Object(o.createBlock)(i,{key:[e.path,t.path,n.path].join("/")},{default:ve((function(){return[Object(o.createVNode)("span",ke,Object(o.toDisplayString)(n.meta.title),1)]})),_:2},1024))],64)})),256))]})),_:2},1024)):Object(o.createCommentVNode)("",!0),t.meta.hidden||t.meta.isGroup?Object(o.createCommentVNode)("",!0):(Object(o.openBlock)(),Object(o.createBlock)(i,{key:[e.path,t.path].join("/")},{default:ve((function(){var e;return[(Object(o.openBlock)(),Object(o.createBlock)(Object(o.resolveDynamicComponent)(null===(e=t.meta)||void 0===e?void 0:e.icon))),Object(o.createVNode)("span",Ce,Object(o.toDisplayString)(t.meta.title),1)]})),_:2},1024))],64)})),256))]})),_:2},1024))],64)})),256))]})),_:1},8,["onClick","inlineCollapsed","selectedKeys","openKeys","onOpenChange"])],64)})),Ve=(n("d81d"),n("fb6a"),n("fdf4")),we=n("816a"),Se=n("edc4"),xe=n("8ede"),Pe=n("ca44"),Be=n("0791"),_e=n("5683"),Le=n("f014"),Ie=n("fa23"),Te=n("ba98"),Fe={MenuFoldOutlined:Ve.a,DesktopOutlined:we.a,UserOutlined:Se.a,TeamOutlined:xe.a,ToolOutlined:Pe.a,HomeOutlined:Be.a,FileProtectOutlined:_e.a,SettingOutlined:Le.a,ApartmentOutlined:Ie.a,EditOutlined:Te.a},De=n("afbc"),Ke=n("afa5"),Ae=Object(o.defineComponent)({name:"menu",props:{collapsed:{type:Boolean}},components:Object(ce.a)(Object(ce.a)({},Fe),{},{SvgIcon:Ke.a}),setup:function(e,t){var n,c=Object(ae.c)(),a=function(){return c.meta.isGroup?c.matched.slice(1,3).map((function(e){return e.path})):[c.matched[1].path]},r=(null===(n=De.a.getRoutes().find((function(e){return"/"===e.path})))||void 0===n?void 0:n.children)||[],l=Object(o.ref)(a()),i=Object(o.ref)(Object(o.unref)(l)),u=Object(o.ref)([c.path]);return Object(o.watch)((function(){return e.collapsed}),(function(e){l.value=e?[]:a(),u.value=[c.path]})),Object(o.watch)((function(){return c.fullPath}),(function(){"login"==c.name||e.collapsed||(l.value=a(),u.value=[c.path])})),Object(o.watch)((function(){return l.value}),(function(e,t){i.value=t})),{routes:r,openKeys:l,selectedKeys:u,clickMenuItem:function(e){De.a.push(e.key)},onOpenChange:function(e){}}}});n("2e2f"),Ae.render=Ne,Ae.__scopeId="data-v-a8ee2bbc";var He=Ae,Ee=Object(o.withScopeId)("data-v-750566fd");Object(o.pushScopeId)("data-v-750566fd");var qe={class:"left-options"},Me={class:"right-options"},Ue=Object(o.createTextVNode)(" 退出登录");Object(o.popScopeId)();var We,Re=Ee((function(e,t,n,c,a,r){var l=Object(o.resolveComponent)("router-link"),i=Object(o.resolveComponent)("a-menu-item"),u=Object(o.resolveComponent)("a-menu"),d=Object(o.resolveComponent)("a-breadcrumb-item"),s=Object(o.resolveComponent)("a-breadcrumb"),b=Object(o.resolveComponent)("a-avatar"),p=Object(o.resolveComponent)("poweroff-outlined"),O=Object(o.resolveComponent)("Dropdown"),f=Object(o.resolveComponent)("ALayoutHeader");return Object(o.openBlock)(),Object(o.createBlock)(f,{class:"layout-header"},{default:Ee((function(){return[Object(o.createVNode)("div",qe,[Object(o.createVNode)("span",{onClick:t[1]||(t[1]=function(){return e.$emit("update:collapsed",!e.collapsed)}),class:"menu-fold"},[(Object(o.openBlock)(),Object(o.createBlock)(Object(o.resolveDynamicComponent)(e.collapsed?"menu-unfold-outlined":"menu-fold-outlined")))]),Object(o.createVNode)(s,null,{default:Ee((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.route.matched,(function(e){return Object(o.openBlock)(),Object(o.createBlock)(d,{key:e.name},{overlay:Ee((function(){return[e.children.length?(Object(o.openBlock)(),Object(o.createBlock)(u,{key:0},{default:Ee((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.children,(function(t){return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[t.meta.hidden?Object(o.createCommentVNode)("",!0):(Object(o.openBlock)(),Object(o.createBlock)(i,{key:t.path},{default:Ee((function(){return[Object(o.createVNode)(l,{to:"/"==e.path?t.path:e.path+"/"+t.path},{default:Ee((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(t.meta.title),1)]})),_:2},1032,["to"])]})),_:2},1024))],64)})),256))]})),_:2},1024)):Object(o.createCommentVNode)("",!0)]})),default:Ee((function(){return[Object(o.createVNode)("a",null,Object(o.toDisplayString)(e.meta.title),1)]})),_:2},1024)})),128))]})),_:1})]),Object(o.createVNode)("div",Me,[(Object(o.openBlock)(),Object(o.createBlock)(Object(o.resolveDynamicComponent)(e.fullscreenIcon),{onClick:e.toggleFullScreen},null,8,["onClick"])),Object(o.createVNode)(O,null,{overlay:Ee((function(){return[Object(o.createVNode)(u,null,{default:Ee((function(){return[Object(o.createVNode)(i,null,{default:Ee((function(){return[Object(o.createVNode)("a",{onClick:t[2]||(t[2]=Object(o.withModifiers)((function(){return e.doLogout.apply(e,arguments)}),["prevent"]))},[Object(o.createVNode)(p),Ue])]})),_:1})]})),_:1})]})),default:Ee((function(){return[Object(o.createVNode)(b,null,{default:Ee((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.username),1)]})),_:1})]})),_:1})])]})),_:1})})),ze=n("27fd"),$e=n("55f1"),Je=n("2fc4"),Ge=n("e9d5"),Ye=n("3e17"),Qe=n("2023"),Xe=n("1736"),Ze=n("87eb"),et=(We={},Object(r.a)(We,E.Header.name,E.Header),Object(r.a)(We,ze.a.name,ze.a),Object(r.a)(We,$e.a.name,$e.a),Object(r.a)(We,$e.a.Divider.name,$e.a.Divider),Object(r.a)(We,"SettingOutlined",Le.a),Object(r.a)(We,"Dropdown",Oe.a),Object(r.a)(We,"SearchOutlined",Ge.a),Object(r.a)(We,Je.a.name,Je.a),Object(r.a)(We,Je.a.Item.name,Je.a.Item),Object(r.a)(We,"MenuFoldOutlined",Ve.a),Object(r.a)(We,"MenuUnfoldOutlined",Ye.a),Object(r.a)(We,"FullscreenOutlined",Qe.a),Object(r.a)(We,"FullscreenExitOutlined",Xe.a),Object(r.a)(We,"PoweroffOutlined",Ze.a),We),tt=n("1947"),nt=Object(o.defineComponent)({name:"PageHeader",components:Object(ce.a)({},et),props:{collapsed:{type:Boolean}},setup:function(){var e=Object(o.reactive)({username:localStorage.getItem("username")||"",fullscreenIcon:"FullscreenOutlined"}),t=Object(ae.d)(),n=Object(ae.c)();return document.addEventListener("fullscreenchange",(function(){return e.fullscreenIcon=null!==document.fullscreenElement?"FullscreenExitOutlined":"FullscreenOutlined"})),Object(ce.a)(Object(ce.a)({},Object(o.toRefs)(e)),{},{toggleFullScreen:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()},doLogout:function(){Object(tt.c)({}),t.replace({name:"login",query:{redirect:n.fullPath}})},route:n})}});n("7da8"),nt.render=Re,nt.__scopeId="data-v-750566fd";var ot,ct=nt,at=Object(o.defineComponent)({name:"Layout",components:(ot={TabsView:he,PageHeader:ct,SiderMenu:He},Object(r.a)(ot,E.name,E),Object(r.a)(ot,E.Content.name,E.Content),Object(r.a)(ot,E.Sider.name,E.Sider),ot),setup:function(){var e=Object(o.ref)(!1),t=Object(o.computed)((function(){return e.value?"80px":"256px"}));return{collapsed:e,testMsg:function(){q.a.success(Object(o.h)("span","啥子"),2)},asiderWidth:t}}});n("15ba"),at.render=a,at.__scopeId="data-v-a52e7e6a",t.default=at},d1db:function(e,t,n){},e9f8:function(e,t,n){},f0a9:function(e,t,n){"use strict";n("d1db")}}]);
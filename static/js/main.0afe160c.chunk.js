(this.webpackJsonptechart=this.webpackJsonptechart||[]).push([[0],{11:function(t,e,n){t.exports={wrapper:"CalculatorBoxes_wrapper__2Ux7l",wrapper_template:"CalculatorBoxes_wrapper_template__2udgG",wrapper_buttons:"CalculatorBoxes_wrapper_buttons__ko5me",step:"CalculatorBoxes_step__3-wK2",title:"CalculatorBoxes_title__3cWbe",content:"CalculatorBoxes_content__xpWgP",left:"CalculatorBoxes_left__38UkJ",center:"CalculatorBoxes_center__2iGTf",right:"CalculatorBoxes_right__up8PD"}},14:function(t,e,n){t.exports={wrapper_template:"CalculatorSteps_wrapper_template__B7ZGC",title:"CalculatorSteps_title__1uwMc",content:"CalculatorSteps_content__dva7O",input_wrapper:"CalculatorSteps_input_wrapper__XueV1",result_message:"CalculatorSteps_result_message__2uq3p",result_message_error:"CalculatorSteps_result_message_error__3HL5T",input_divider:"CalculatorSteps_input_divider__4vUl7"}},22:function(t,e,n){t.exports={wrapper:"Calculator_wrapper__2M2jZ",title:"Calculator_title__33co2",step_count:"Calculator_step_count__2QQ_w"}},33:function(t,e,n){t.exports={App:"App_App__2SJSw"}},34:function(t,e,n){t.exports={common_button:"Button_common_button__3Fy5v"}},35:function(t,e,n){t.exports={link_button:"LinkButton_link_button__1NgZX"}},36:function(t,e,n){t.exports={input:"Input_input__1xCGT"}},72:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c,a,r,s,u=n(1),l=n(2),i=n.n(l),o=n(16),j=n.n(o),p=n(5),_=n(33),b=n.n(_),O=function(t){return t.calculator.currentStep},d=function(t){return t.calculator.step},x=function(t){return t.calculator.data.building},h=function(t){return t.calculator.data},E=function(t){return t.calculator.result};!function(t){t.RESET_CALCULATOR="@calculator/RESET_CALCULATOR",t.ALL_SETS="@calculator/SET_*",t.SET_RESULT="@calculator/SHOW_RESULT",t.SET_WALL_SIZE="@calculator/SET_WALL_SIZE",t.SET_BUILD_TYPE="@calculator/SET_BUILD_TYPE",t.SET_MATERIAL="@calculator/SET_MATERIAL",t.SET_HEIGHT="@calculator/SET_HEIGHT"}(c||(c={})),function(t){t.BUILD="BUILD",t.HEIGHT="HEIGHT",t.MATERIAL="MATERIAL",t.SIZE="SIZE",t.RESULT="RESULT"}(a||(a={})),function(t){t.HOUSE="1",t.GARAGE="2"}(r||(r={})),function(t){t.BRICK="1",t.CINDER_BLOCK="2",t.WOODEN_BEAM="3",t.METAL="4",t.SANDWICH_PANEL="5"}(s||(s={}));var S=function(t){return{type:c.SET_BUILD_TYPE,payload:t}},f=function(t){return{type:c.SET_MATERIAL,payload:t}},v=n(34),T=n.n(v),m=function(t){var e=t.onClick,n=t.children,c=t.className;return Object(u.jsx)("button",{type:"button",onClick:e,className:"".concat(T.a.common_button," ").concat(c),children:n})},C=n(11),L=n.n(C),A=function(t){var e=t.children,n=t.align,c=t.title;return Object(u.jsxs)("div",{className:L.a.wrapper_template,children:[Object(u.jsx)("div",{className:L.a.title,children:c}),Object(u.jsx)("div",{className:"".concat(L.a.content," ").concat(n&&L.a[n]),children:e})]})},I=function(t){var e=t.children;return Object(u.jsx)("div",{className:L.a.wrapper_buttons,children:e})},g=function(t){var e=t.children,n=t.stepTitle,c=Object(p.c)(d);return Object(u.jsxs)("div",{className:L.a.wrapper,children:[Object(u.jsx)("p",{className:L.a.step,children:n||"\u0428\u0430\u0433 ".concat(c)}),e]})},R=function(t){var e=t.children,n=Object(p.b)();return Object(u.jsx)(m,{onClick:function(){return n({type:c.RESET_CALCULATOR})},children:e})},w=n(35),y=n.n(w),U=function(t){var e=t.children,n=t.className,c=t.onClick;return Object(u.jsx)("button",{type:"button",onClick:c,className:"".concat(y.a.link_button," ").concat(n),children:"\u2022 ".concat(e)})},B=function(){var t=Object(p.b)();return Object(u.jsxs)(g,{children:[Object(u.jsxs)(A,{title:"\u0427\u0442\u043e \u0431\u0443\u0434\u0435\u043c \u0441\u0442\u0440\u043e\u0438\u0442\u044c?",align:"left",children:[Object(u.jsx)(U,{onClick:function(){return t(S(r.HOUSE))},children:"\u0416\u0438\u043b\u043e\u0439 \u0434\u043e\u043c"}),Object(u.jsx)(U,{onClick:function(){return t(S(r.GARAGE))},children:"\u0413\u0430\u0440\u0430\u0436"})]}),Object(u.jsxs)(I,{children:[Object(u.jsx)(R,{children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(u.jsx)(m,{onClick:function(){return t(S(r.HOUSE))},children:"\u0414\u0430\u043b\u0435\u0435"})]})]})},k=n(15),N=n(36),H=n.n(N),G=function(t){var e=t.value,n=t.onChange,c=t.type;return Object(u.jsx)("input",{className:H.a.input,min:0,type:c||"number",onChange:function(t){n(t.target.value)},value:e})},D=function(){var t=Object(l.useState)("0"),e=Object(k.a)(t,2),n=e[0],a=e[1],r=Object(p.b)();return Object(u.jsxs)(g,{children:[Object(u.jsx)(A,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u0442\u0430\u0436\u0435\u0439(\u0447\u0438\u0441\u043b\u043e):",align:"center",children:Object(u.jsx)(G,{value:n,onChange:a})}),Object(u.jsxs)(I,{children:[Object(u.jsx)(R,{children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(u.jsx)(m,{onClick:function(){r(function(t){return{type:c.SET_HEIGHT,payload:t}}(n))},children:"\u0414\u0430\u043b\u0435\u0435"})]})]})},M=[{name:"\u041a\u0438\u0440\u043f\u0438\u0447",value:s.BRICK},{name:"\u0428\u043b\u0430\u043a\u043e\u0431\u043b\u043e\u043a",value:s.CINDER_BLOCK},{name:"\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u0431\u0440\u0443\u0441",value:s.WOODEN_BEAM}],W=[{name:"\u0428\u043b\u0430\u043a\u043e\u0431\u043b\u043e\u043a",value:s.CINDER_BLOCK},{name:"\u041c\u0435\u0442\u0430\u043b\u043b",value:s.METAL},{name:"C\u0435\u043d\u0434\u0432\u0438\u0447-\u043f\u0430\u043d\u0435\u043b\u0438",value:s.SANDWICH_PANEL}],Z=function(){var t=Object(p.c)(x),e=Object(p.b)(),n=t===r.GARAGE?W:M;return Object(u.jsxs)(g,{children:[Object(u.jsx)(A,{title:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0441\u0442\u0435\u043d:",align:"left",children:n.map((function(t){return Object(u.jsx)(U,{onClick:function(){return e(f(t.value))},children:t.name},t.name)}))}),Object(u.jsxs)(I,{children:[Object(u.jsx)(R,{children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(u.jsx)(m,{onClick:function(){return e(f(n[0].value))},children:"\u0414\u0430\u043b\u0435\u0435"})]})]})},P=n(14),z=n.n(P),K=function(){var t=function(t){var e={status:"\u041e\u0448\u0438\u0431\u043a\u0430",message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430!"};return t?("ok"===t.result&&(e.status="\u0423\u0441\u043f\u0435\u0448\u043d\u043e"),e.message=t.message,e):e}(Object(p.c)(E));return Object(u.jsxs)(g,{stepTitle:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0441\u0441\u0447\u0435\u0442\u0430",children:[Object(u.jsx)(A,{title:t.status,align:"center",children:Object(u.jsx)("p",{className:"".concat(z.a.result_message," ").concat("\u041e\u0448\u0438\u0431\u043a\u0430"===t.status?z.a.result_message_error:""," "),children:t.message})}),Object(u.jsx)(I,{children:Object(u.jsx)(R,{children:"\u041d\u043e\u0432\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442"})})]})},J=function(){var t=Object(l.useState)("0"),e=Object(k.a)(t,2),n=e[0],a=e[1],r=Object(l.useState)("0"),s=Object(k.a)(r,2),i=s[0],o=s[1],j=Object(p.b)();return Object(u.jsxs)(g,{children:[Object(u.jsx)(A,{title:"\u0414\u043b\u0438\u043d\u0430 \u0441\u0442\u0435\u043d (\u0432 \u043c\u0435\u0442\u0440\u0430\u0445):",align:"center",children:Object(u.jsxs)("div",{className:z.a.input_wrapper,children:[Object(u.jsx)(G,{value:n,onChange:a}),Object(u.jsx)("p",{className:z.a.input_divider,children:"X"}),Object(u.jsx)(G,{value:i,onChange:o})]})}),Object(u.jsxs)(I,{children:[Object(u.jsx)(R,{children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(u.jsx)(m,{onClick:function(){var t;j((t={xSize:n,ySize:i},{type:c.SET_WALL_SIZE,payload:t}))},children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})]})},Y=function(t){switch(t.step){case a.BUILD:return Object(u.jsx)(B,{});case a.HEIGHT:return Object(u.jsx)(D,{});case a.MATERIAL:return Object(u.jsx)(Z,{});case a.SIZE:return Object(u.jsx)(J,{});case a.RESULT:return Object(u.jsx)(K,{});default:return null}},X=n(22),Q=n.n(X),q=function(){var t=Object(p.c)(O);return Object(u.jsxs)("div",{className:Q.a.wrapper,children:[Object(u.jsx)("h2",{className:Q.a.title,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0446\u0435\u043d\u044b \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439"}),Object(u.jsx)(Y,{step:t})]})},F=function(){return Object(u.jsx)("div",{className:b.a.App,children:Object(u.jsx)(q,{})})},V=n(10),$=n(41),tt=n(37),et=n(6),nt={step:1,currentStep:a.BUILD,result:null,data:{building:null,height:null,material:null,sizex:null,sizey:null}},ct=Object(V.combineReducers)({calculator:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.RESET_CALCULATOR:return nt;case c.SET_BUILD_TYPE:return Object(et.a)(Object(et.a)({},t),{},{data:Object(et.a)(Object(et.a)({},t.data),{},{building:e.payload}),step:t.step+1,currentStep:e.payload===r.HOUSE?a.HEIGHT:a.MATERIAL});case c.SET_HEIGHT:return Object(et.a)(Object(et.a)({},t),{},{step:t.step+1,data:Object(et.a)(Object(et.a)({},t.data),{},{height:e.payload}),currentStep:a.MATERIAL});case c.SET_MATERIAL:return Object(et.a)(Object(et.a)({},t),{},{step:t.step+1,data:Object(et.a)(Object(et.a)({},t.data),{},{material:e.payload}),currentStep:a.SIZE});case c.SET_WALL_SIZE:return Object(et.a)(Object(et.a)({},t),{},{data:Object(et.a)(Object(et.a)({},t.data),{},{sizex:e.payload.xSize,sizey:e.payload.ySize})});case c.SET_RESULT:return Object(et.a)(Object(et.a)({},t),{},{currentStep:a.RESULT,result:e.payload});default:return t}}}),at=n(9),rt=n.n(at),st=n(13),ut=n(23),lt=n(38),it=n(39),ot=n(40),jt=n.n(ot),pt=new(function(){function t(e){var n=this;Object(lt.a)(this,t),this.BASE_URL=void 0,this.axiosOption=void 0,this.getCalcResult=function(){var e=Object(ut.a)(rt.a.mark((function e(c){var a;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(c,n.axiosOption);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.BASE_URL=e,this.axiosOption={baseURL:this.BASE_URL,timeout:2e3}}return Object(it.a)(t,null,[{key:"get",value:function(){var t=Object(ut.a)(rt.a.mark((function t(e,n){var c,a;return rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,jt()(e,n);case 2:return c=t.sent,a=c.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}]),t}())("https://data.techart.ru/lab/json/"),_t=function(t){var e=new URLSearchParams;return Object.keys(t).forEach((function(n){var c=t[n];c&&e.set(n,c)})),"?".concat(e.toString())},bt=rt.a.mark(dt),Ot=rt.a.mark(xt);function dt(){var t,e,n;return rt.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(st.d)(h);case 3:return t=a.sent,a.next=6,_t(t);case 6:return e=a.sent,a.next=9,Object(st.b)(pt.getCalcResult,e);case 9:return n=a.sent,a.next=12,Object(st.c)((r=n,{type:c.SET_RESULT,payload:r}));case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),console.log("error");case 17:case"end":return a.stop()}var r}),bt,null,[[0,14]])}function xt(){return rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(st.e)(c.SET_WALL_SIZE,dt);case 2:case"end":return t.stop()}}),Ot)}var ht=rt.a.mark(Et);function Et(){return rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(st.a)([xt()]);case 2:case"end":return t.stop()}}),ht)}var St=Object($.a)(),ft=Object(V.createStore)(ct,Object(tt.composeWithDevTools)(Object(V.applyMiddleware)(St)));St.run(Et);n(72);j.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p.a,{store:ft,children:Object(u.jsx)(F,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.0afe160c.chunk.js.map
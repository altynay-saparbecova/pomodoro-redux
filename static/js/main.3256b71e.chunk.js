(this.webpackJsonppomodaro=this.webpackJsonppomodaro||[]).push([[0],{30:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(9),o=n.n(i),s=(n(30),n(5)),a=(n(34),n(11)),u=(n(35),n(36),n(37),"SAVE_TIME"),j="START_TIME",b="DECREASE_TIME",l="SWITCH_SESSION",d="SHORT_BREAK",O="LONG_BREAK",h="STOP_TIME",m="RESET_TIME",x=function(){return{type:j}},f=function(){return{type:b}},g=function(){return{type:l}},v=function(){return{type:d}},p=function(){return{type:O}},S=n(2);var k=function(e){Object(s.b)(),Object(s.c)((function(e){return e.sessionLength}));var t=Object(s.c)((function(e){return e.minuteSecond})),n=(Object(s.c)((function(e){return e.timerRunning})),Math.floor(t/60)),c=t-60*n,r=Object(s.c)((function(e){return e.interval})),i=150,o=130;console.log(o);var a=260*Math.PI,u=a-t/60*a;return console.log(u),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"TimeDisplay",children:[Object(S.jsxs)("svg",{width:"100%",viewBox:"0 0 ".concat(300," ").concat(300),children:[Object(S.jsx)("circle",{stroke:"#ddd",fill:"#fff",strokeWidth:5,r:o,cx:i,cy:i}),Object(S.jsx)("circle",{stroke:"#D9534F",fill:"transparent",strokeWidth:5,strokeDasharray:a+" "+a,r:o,cx:i,cy:i})]}),Object(S.jsxs)("div",{class:"mainNumber",children:[n<10?("0"+n).slice(-2):n," : ",c<10?("0"+c).slice(-2):c,Object(S.jsx)("p",{children:"Pomodoro Technique"}),Object(S.jsx)("p",{children:r})]})]})})},y=(n(39),n(12)),B=n(13),E=n(23);var _=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],o=function(){return i(!1)},j=Object(c.useState)(e.shortBreak),b=Object(a.a)(j,2),l=b[0],d=b[1],O=Object(c.useState)(e.longBreak),h=Object(a.a)(O,2),m=h[0],x=h[1],f=Object(c.useState)(e.countFromStore),g=Object(a.a)(f,2),v=g[0],p=g[1],k=Object(s.b)();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(y.a,{style:{width:50,height:50},onClick:function(){return i(!0)},children:Object(S.jsx)(E.a,{})}),Object(S.jsx)(B.a,{className:"settings_main",show:r,onHide:o,children:Object(S.jsxs)("div",{className:"settings__container",children:[Object(S.jsx)("h3",{children:"Settings"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{children:"Pomodoro"}),Object(S.jsx)("input",{type:"number",value:e.minute,onChange:function(t){return e.setMinute(t.target.value)}})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{children:"Short Break"}),Object(S.jsx)("input",{type:"number",value:l,onChange:function(e){return d(e.target.value)}})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{children:"Long Break"}),Object(S.jsx)("input",{type:"number",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{children:"Pomodoro Count"}),Object(S.jsx)("input",{type:"number",value:v,onChange:function(e){return p(e.target.value)}})]}),Object(S.jsx)("div",{className:"text",children:"Auto Play without push notifications"}),Object(S.jsx)("div",{children:Object(S.jsx)("input",{className:"checked",type:"checkbox"})}),Object(S.jsx)(B.a.Footer,{children:Object(S.jsx)(y.a,{style:{marginTop:15,textAlign:"center"},type:"primary",onClick:function(){var t;o(),k((t=e.obj,{type:u,obj:t}))},children:"all ok"})})]})})]})},N=(n(41),n(24));var T=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=function(){return r(!1)};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(y.a,{style:{width:50,height:50,marginRight:100},onClick:function(){return r(!0)},children:Object(S.jsx)(N.a,{})}),Object(S.jsx)(B.a,{className:"settings_main",show:n,onHide:i,children:Object(S.jsxs)("div",{className:"settings__container",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"About Pomodoro Technique"}),Object(S.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil labore sit quas nam repellat perspiciatis autem, distinctio suscipit ex, quae in fuga?"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Use Experience"}),Object(S.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid cupiditate fugiat velit? Quam explicabo consequuntur, odio non qui recusandae vitae dolore nam odit eius maxime maiores voluptate quaerat provident?"})]}),Object(S.jsx)(y.a,{style:{marginTop:15},type:"primary",onClick:i,children:"close"})]})})]})},R=(n(42),n(20)),I=n.n(R),w=n.p+"static/media/ride.44e63854.wav";var L=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.timerRunning}));return Object(s.c)((function(e){return e.minuteSecond})),Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{className:"button",onClick:function(){t(n?{type:h}:x())},children:n?"stop":"continue"}),Object(S.jsx)("button",{className:"button",onClick:function(){var n;t((n=e.obj,{type:m,obj:n}))},children:"reset"})]})};var C=function(){var e=Object(s.c)((function(e){return e.button})),t=Object(s.c)((function(e){return e.interval})),n=Object(s.c)((function(e){return e.timerRunning})),r=Object(s.c)((function(e){return e.minuteSecond})),i=Object(s.c)((function(e){return e.longBreak})),o=Object(s.c)((function(e){return e.shortBreak})),u=(Object(s.c)((function(e){return e.sessionLength})),Object(s.c)((function(e){return e.count}))),j=Math.floor(r/60),b=Object(c.useState)(j),l=Object(a.a)(b,2),d=l[0],O=l[1],h=Object(s.b)(),m=new Audio(w);Object(c.useEffect)((function(){var e=null;return n&&r>0?e=setInterval((function(){h(f())}),100):n&&0===r?(e=setInterval((function(){h(f())}),100),m.play(),"Session"===t?(I.a.fire("Time to Rest!"),h(v())):"Break"===t&&(I.a.fire("Time to Work!"),m.play(),h(g()))):clearInterval(e),function(){return clearInterval(e)}}),[m,n,r,t,g,f,v,p]);var y={shortBreak:o,longBreak:i,minuteSecond:d,sessionLength:d,countFromStore:u};return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("div",{className:"header",children:Object(S.jsxs)("div",{children:[Object(S.jsxs)("span",{children:[Object(S.jsx)(T,{})," "]}),Object(S.jsx)("span",{children:Object(S.jsx)(_,{minuteSecond:r,longBreak:i,shortBreak:o,countFromStore:u,minute:d,minutes:j,setMinute:O,obj:y})})]})}),Object(S.jsx)("div",{children:Object(S.jsx)(k,{minuteSecond:r})}),e?Object(S.jsx)(L,{obj:y}):Object(S.jsx)("button",{className:"button",onClick:function(){h(x())},children:"start"})]})})};var M=function(){var e=Object(s.c)((function(e){return e}));return Object(c.useEffect)((function(){localStorage.setItem("time",JSON.stringify(e))}),[e]),Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(C,{})})},A=n(25),F=n(8),q=(JSON.parse(localStorage.getItem("time")),{shortBreak:5,longBreak:10,count:4,minuteSecond:1500,sessionLength:25,timerRunning:!1,interval:"Session",button:!1}),D=Object(A.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(F.a)(Object(F.a)({},e),{},{shortBreak:t.obj.shortBreak,longBreak:t.obj.longBreak,minuteSecond:60*t.obj.minuteSecond,sessionLength:t.obj.sessionLength,count:t.obj.count});case j:return Object(F.a)(Object(F.a)({},e),{},{timerRunning:!0,button:!0,interval:"Session"});case b:return Object(F.a)(Object(F.a)({},e),{},{minuteSecond:e.minuteSecond-1});case h:return Object(F.a)(Object(F.a)({},e),{},{timerRunning:!1});case m:return Object(F.a)(Object(F.a)({},e),{},{shortBreak:t.obj.shortBreak,longBreak:t.obj.longBreak,minuteSecond:60*t.obj.minuteSecond,sessionLength:t.obj.sessionLength,count:t.obj.count,timerRunning:!1,interval:"Session",button:!1});case d:return Object(F.a)(Object(F.a)({},e),{},{interval:"Break",minuteSecond:60*e.shortBreak});case O:return Object(F.a)(Object(F.a)({},e),{},{interval:"LongBreak",minuteSecond:60*e.longBreak});case l:return Object(F.a)(Object(F.a)({},e),{},{interval:"Session",minuteSecond:60*e.sessionLength});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(s.a,{store:D,children:Object(S.jsx)(M,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3256b71e.chunk.js.map
(this["webpackJsonpreact-firebase-chat"]=this["webpackJsonpreact-firebase-chat"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(11),c=t.n(r),o=(t(23),t(24),t(12)),i=t(1),l=t.n(i),m=t(5),u=t(3),d=t(13),p=t(14),h=t(17),g=t(16),b=t(15),f=t.n(b),v=(t(26),f.a.initializeApp({apiKey:"AIzaSyD_3br-cno6y9prgBKxn9pwmHVholZ92Nc",authDomain:"react-chat-57805.firebaseapp.com",databaseURL:"https://react-chat-57805.firebaseio.com",projectId:"react-chat-57805",storageBucket:"react-chat-57805.appspot.com",messagingSenderId:"760181152117",appId:"1:760181152117:web:44a17e54164daf6a629b3c"}).firestore()),E=function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).updateData=function(a){e.setState(Object(u.a)({},a.target.name,a.target.value))},e.submitMessage=Object(m.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={id:e.state.messages.length+1,user:e.state.user,text:e.state.message},a.next=3,v.collection("messages").doc("".concat(t.id)).set(t);case 3:e.setState({message:""});case 4:case"end":return a.stop()}}),a)}))),e.disabledInput=function(e){e.target.disabled=!0},e.state={user:"",message:"",messages:[]},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(l.a.mark((function e(){var a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("messages").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(o.a)({},e.data()))})),null!=t&&a.setState({messages:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.messages.map((function(e,a){return s.a.createElement("li",{key:e.id,className:"list-group-item list-group-item-action border-warning"},s.a.createElement("p",{className:"mb-1"},e.text),s.a.createElement("p",{className:"text-right text-white-50 m-0"},e.user))}));return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h1",{className:"h3 text-center text-success"},"Comunicate")),s.a.createElement("div",{className:"card-body px-5"},s.a.createElement("ul",{className:"list-group px-3",style:{width:"100%",height:"230px",overflowY:"auto"}},e)),s.a.createElement("div",{className:"card-footer px-5"},s.a.createElement("input",{name:"user",id:"user",type:"text",placeholder:"Write an username",className:"form-control",onChange:this.updateData,value:this.state.user,onBlur:this.disabledInput}),s.a.createElement("input",{name:"message",id:"message",type:"text",placeholder:"Write a message",className:"form-control",onChange:this.updateData,value:this.state.message}),s.a.createElement("button",{className:"btn-block btn btn-success",onClick:this.submitMessage},"Send Mesage")))}}]),t}(n.Component);var w=function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{href:"/",className:"navbar-brand"},"Chat React"))),s.a.createElement("div",{className:"container p-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 mx-auto"},s.a.createElement(E,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d737cc6f.chunk.js.map
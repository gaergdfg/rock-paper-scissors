(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{24:function(e,t,n){"use strict";n.r(t),n.d(t,"socket",(function(){return o})),n.d(t,"mySocketId",(function(){return i}));var i,s=n(47),r=n.n(s),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8e3,c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL||"localhost:".concat(a),o=r()(c);o.on("createNewGame",(function(e){console.log("A new game has been created! Username: "+e.userName+", Game id: "+e.gameId+" Socket id: "+e.mySocketId),i=e.mySocketId}))},54:function(e,t,n){},81:function(e,t){},95:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),r=n(46),a=n.n(r),c=(n(54),n(7)),o=n(15),d=n(2),u=n(11),l=n(12),j=n(14),m=n(13),h=n(1),p=n(24).socket,O=function(e){return function(e,t,n){var i={gameId:e,userName:t,isHost:n};p.emit("playerJoinGame",i)}(Object(d.g)().gameid,e.userName,e.isHost),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Rock, paper, scissors"})})},x=n(24).socket,b=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8e3,g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL||"localhost:".concat(b),S=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={host:e.props.isHost,choiceHost:-1,choiceGuest:-1,scoreHost:0,scoreGuest:0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("props:",this.props),console.log(this.state)}},{key:"choose",value:function(e,t){e?this.choiceHost=t:this.choiceGuest=t}},{key:"render",value:function(){return Object(h.jsx)("div",{children:"Such game, much wow."})}}]),n}(s.a.Component),f=function(e){var t=Object(d.g)().gameid,n=s.a.useState(""),i=Object(c.a)(n,2),r=(i[0],i[1]),a=s.a.useState(!1),o=Object(c.a)(a,2),u=o[0],l=o[1],j=s.a.useState(""),m=Object(c.a)(j,2),p=m[0],O=m[1],b=s.a.useState(!1),f=Object(c.a)(b,2),y=f[0],T=f[1];return s.a.useEffect((function(){x.on("playerJoinedRoom",(function(e){console.log("A new player has joined the room! Username: "+e.userName+", Game id: "+e.gameId+" Socket id: "+e.mySocketId),x.id!==e.mySocketId&&r(e.mySocketId)})),x.on("status",(function(e){console.log(e),alert(e),"This game session does not exist."!==e&&"There are already 2 people playing in this room."!==e||T(!0)})),x.on("start game",(function(n){console.log("START!"),n!==e.myUserName?(O(n),l(!0)):x.emit("request username",t)})),x.on("give userName",(function(n){x.id!==n&&(console.log("give userName stage: "+e.myUserName),x.emit("recieved userName",{userName:e.myUserName,gameId:t}))})),x.on("get Opponent UserName",(function(e){x.id!==e.socketId&&(O(e.userName),console.log("data.socketId: data.socketId"),r(e.socketId),l(!0))}))}),[]),Object(h.jsx)(s.a.Fragment,{children:u?Object(h.jsxs)("div",{children:[Object(h.jsxs)("h4",{children:[" Opponent: ",p," "]}),Object(h.jsx)("div",{style:{display:"flex"},children:Object(h.jsx)(S,{gameId:t})}),Object(h.jsxs)("h4",{children:[" You: ",e.myUserName," "]})]}):y?Object(h.jsx)("div",{children:Object(h.jsx)("h1",{style:{textAlign:"center",marginTop:"200px"},children:" :( "})}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/8)+"px"},children:["Hey ",Object(h.jsx)("strong",{children:e.myUserName}),", copy and paste the URL below to send to your friend:"]}),Object(h.jsx)("textarea",{style:{marginLeft:String(window.innerWidth/2-290)+"px",marginTop:"30px",width:"580px",height:"30px"},onFocus:function(e){e.target.select()},value:g+"/game/"+t,type:"text",readOnly:!0}),Object(h.jsx)("br",{}),Object(h.jsxs)("h1",{style:{textAlign:"center",marginTop:"100px"},children:[" ","Waiting for other opponent to join the game..."," "]})]})})},y=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={didGetUserName:!1,inputText:""},i.typingUserName=function(){var e=i.textArea.current.value;i.setState({inputText:e})},i.textArea=s.a.createRef(),i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(s.a.Fragment,{children:this.state.didGetUserName?Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)(O,{userName:this.state.inputText,isHost:!1}),Object(h.jsx)(f,{myUserName:this.state.inputText,isHost:!1})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Your Username:"}),Object(h.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.textArea,onInput:this.typingUserName}),Object(h.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputText.length>0),onClick:function(){e.setState({didGetUserName:!0})},children:"Submit"})]})})}}]),n}(s.a.Component),T=Object(i.createContext)({didRedirect:!1,playerDidRedirect:function(){},playerDidNotRedirect:function(){}}),v=n(49),N=n.n(v),U=n(24).socket,_=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={didGetUserName:!1,inputText:"",gameId:""},i.send=function(){var e=N()();i.setState({gameId:e}),U.emit("createNewGame",e)},i.typingUserName=function(){var e=i.textArea.current.value;i.setState({inputText:e})},i.textArea=s.a.createRef(),i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(s.a.Fragment,{children:this.state.didGetUserName?Object(h.jsx)(d.a,{to:"/game/"+this.state.gameId,children:Object(h.jsx)("button",{className:"btn btn-success",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px"},children:"Start Game"})}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Your Username:"}),Object(h.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.textArea,onInput:this.typingUserName}),Object(h.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputText.length>0),onClick:function(){e.props.didRedirect(),e.props.setUserName(e.state.inputText),e.setState({didGetUserName:!0}),e.send()},children:"Submit"})]})})}}]),n}(s.a.Component),R=function(e){var t=s.a.useContext(T);return Object(h.jsx)(_,{didRedirect:t.playerDidRedirect,setUserName:e.setUserName})};var w=function(){var e=s.a.useState(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],r=s.a.useCallback((function(){i(!0)}),[]),a=s.a.useCallback((function(){i(!1)}),[]),u=s.a.useState(""),l=Object(c.a)(u,2),j=l[0],m=l[1];return Object(h.jsx)(T.Provider,{value:{didRedirect:n,playerDidRedirect:r,playerDidNotRedirect:a},children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{path:"/",exact:!0,children:Object(h.jsx)(R,{setUserName:m})}),Object(h.jsx)(d.b,{path:"/game/:gameid",exact:!0,children:n?Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)(O,{userName:j,isHost:!0}),Object(h.jsx)(f,{myUserName:j,isHost:!0})]}):Object(h.jsx)(y,{})}),Object(h.jsx)(d.a,{to:"/"})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),k()}},[[95,1,2]]]);
//# sourceMappingURL=main.be14a0b3.chunk.js.map
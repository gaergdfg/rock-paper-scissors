(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{130:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),o=s(60),a=s.n(o),c=(s(70),s(8)),r=s(12),d=s(2),l=s(13),u=s(14),h=s(16),p=s(15),m=s(1),g=s(30).socket,j=function(e){return function(e,t,s){var n={gameId:e,userName:t,isHost:s};g.emit("playerJoinGame",n)}(Object(d.g)().gameid,e.userName,e.isHost),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{style:{textAlign:"center"},children:"Rock, paper, scissors"})})},x=s(21),b=s.n(x),O=s(20),S=s.n(O),w=new(s(65).a),f=s(30).socket,v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8e3,H=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL||"localhost:".concat(v),y="https://game-nexus.herokuapp.com/",T=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={host:e.props.isHost,choiceHost:-1,choiceGuest:-1,scoreHost:0,scoreGuest:0,winner:"nobody",endOfGame:!1},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;function t(){if(console.log("MAMY TO"),alert("winner: "+this.state.winner),3==this.state.scoreGuest){var e=w.get("username");e&&(S.a.post(y+"api/v1/stats",{game:"rps",username:e,result:this.stats.isHost?1:0}),w.get("username",{path:"/"})),console.log("WESZLO GUEST"),window.location.href="/guestWin.html"}else if(3==this.state.scoreHost){var t=w.get("username");t&&(S.a.post(y+"api/v1/stats",{game:"rps",username:t,result:this.stats.isHost?1:0}),w.get("username",{path:"/"})),console.log("WESZLO HOST"),window.location.href="/hostWin.html"}this.setState({winner:"nobody",choiceGuest:-1,choiceHost:-1})}console.log("props:",this.props),console.log(this.state),this.setState({isHost:this.props.isHost}),f.on("hostMove",(function(s){console.log("hostMoveEvent",s),console.log(e.state.isHost),e.state.isHost||e.setState({choiceHost:s}),-1!=e.state.choiceGuest&&-1!=e.state.choiceHost&&(e.state.choiceGuest==e.state.choiceHost?(e.setState({winner:"draw"}),console.log("sc: "+e.state.scoreGuest)):1==e.state.choiceGuest&&0==e.state.choiceHost||2==e.state.choiceGuest&&1==e.state.choiceHost||0==e.state.choiceGuest&&2==e.state.choiceHost?(e.setState({winner:"Guest"}),e.setState({scoreGuest:e.state.scoreGuest+1}),console.log("sc: "+e.state.scoreGuest)):(0==e.state.choiceGuest&&1==e.state.choiceHost||1==e.state.choiceGuest&&2==e.state.choiceHost||2==e.state.choiceGuest&&0==e.state.choiceHost)&&(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scoreHost+1})),window.alert("the winner is "+e.state.winner),console.log(e.state.scoreHost),3==e.state.scoreHost&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),console.log(e.state.scoreGuest),3==e.state.scoreGuest&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),e.setState({winner:"nobody",choiceGuest:-1,choiceHost:-1}))})),f.on("guestMove",(function(s){console.log("guestMoveEvent",s),console.log(e.state.isHost),e.state.isHost&&e.setState({choiceGuest:s}),-1!=e.state.choiceGuest&&-1!=e.state.choiceHost&&(e.state.choiceGuest==e.state.choiceHost?e.setState({winner:"draw"}):1==e.state.choiceGuest&&0==e.state.choiceHost||2==e.state.choiceGuest&&1==e.state.choiceHost||0==e.state.choiceGuest&&2==e.state.choiceHost?(e.setState({winner:"Guest"}),e.setState({scoreGuest:e.state.scoreGuest+1}),console.log("sc: "+e.state.scoreGuest)):0==e.state.choiceGuest&&1==e.state.choiceHost?(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scoreHost+1})):1==e.state.choiceGuest&&2==e.state.choiceHost?(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scorHost+1})):2==e.state.choiceGuest&&0==e.state.choiceHost&&(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scoreHost+1})),window.alert("the winner is "+e.state.winner),console.log(e.state.scoreHost),3==e.state.scoreHost&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),console.log(e.state.scoreGuest),3==e.state.scoreGuest&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),e.setState({winner:"nobody",choiceGuest:-1,choiceHost:-1}))}))}},{key:"render",value:function(){return Object(m.jsx)(i.a.Fragment,{children:this.state.endOfGame?Object(m.jsx)(d.a,{to:"https://game-nexus.herokuapp.com/"}):Object(m.jsxs)("div",{className:b.a.box,children:[Object(m.jsx)("div",{className:b.a.row,children:Object(m.jsx)("button",{onClick:this.choose.bind(this,this.state.host,0),children:"rock"})}),Object(m.jsx)("div",{className:b.a.row,children:Object(m.jsx)("button",{onClick:this.choose.bind(this,this.state.host,1),children:"paper"})}),Object(m.jsx)("div",{className:b.a.row,children:Object(m.jsx)("button",{onClick:this.choose.bind(this,this.state.host,2),children:"scissors"})}),"Host:",Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:"Score:"}),Object(m.jsx)("output",{children:this.state.scoreHost})]}),"Guest:",Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:"Score:"}),Object(m.jsx)("output",{children:this.state.scoreGuest})]})]})})}},{key:"choose",value:function(e,t){1==this.state.endOfGame?console.log("koniec"):e?(this.setState({choiceHost:t}),f.emit("new host move",{choice:t,gameId:this.props.gameId}),console.log("inH")):(this.setState({choiceGuest:t}),f.emit("new guest move",{choice:t,gameId:this.props.gameId}),console.log("inG"))}}]),s}(i.a.Component),G=function(e){var t=Object(d.g)().gameid,s=i.a.useState(""),n=Object(c.a)(s,2),o=(n[0],n[1]),a=i.a.useState(!1),r=Object(c.a)(a,2),l=r[0],u=r[1],h=i.a.useState(""),p=Object(c.a)(h,2),g=p[0],j=p[1],x=i.a.useState(!1),b=Object(c.a)(x,2),O=b[0],S=b[1];return console.log(e.isHost),i.a.useEffect((function(){f.on("playerJoinedRoom",(function(e){console.log("A new player has joined the room! Username: "+e.userName+", Game id: "+e.gameId+" Socket id: "+e.mySocketId),f.id!==e.mySocketId&&o(e.mySocketId)})),f.on("status",(function(e){console.log(e),alert(e),"This game session does not exist."!==e&&"There are already 2 people playing in this room."!==e||S(!0)})),f.on("start game",(function(s){console.log("START!"),s!==e.myUserName?(j(s),u(!0)):f.emit("request username",t)})),f.on("give userName",(function(s){f.id!==s&&(console.log("give userName stage: "+e.myUserName),f.emit("recieved userName",{userName:e.myUserName,gameId:t}))})),f.on("get Opponent UserName",(function(e){f.id!==e.socketId&&(j(e.userName),console.log("data.socketId: data.socketId"),o(e.socketId),u(!0))}))}),[]),Object(m.jsx)(i.a.Fragment,{children:l?Object(m.jsxs)("div",{children:[Object(m.jsxs)("h4",{children:[" Opponent: ",g," "]}),Object(m.jsx)("div",{style:{display:"flex"},children:Object(m.jsx)(T,{gameId:t,isHost:e.isHost})}),Object(m.jsxs)("h4",{children:[" You: ",e.myUserName," "]})]}):O?Object(m.jsx)("div",{children:Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:"200px"},children:" :( "})}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/8)+"px"},children:["Hey ",Object(m.jsx)("strong",{children:e.myUserName}),", copy and paste the URL below to send to your friend:"]}),Object(m.jsx)("textarea",{style:{marginLeft:String(window.innerWidth/2-290)+"px",marginTop:"30px",width:"580px",height:"30px"},onFocus:function(e){e.target.select()},value:H+"/game/"+t,type:"text",readOnly:!0}),Object(m.jsx)("br",{}),Object(m.jsxs)("h1",{style:{textAlign:"center",marginTop:"100px"},children:[" ","Waiting for other opponent to join the game..."," "]})]})})},N=s(27),k=s.n(N),E=s(20),R=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={didGetUserName:!1,username:"",inputEmail:"",inputPassword:"",inputText:""},n.typingEmail=function(){var e=n.email.current.value;n.setState({inputEmail:e})},n.typingPassword=function(){var e=n.password.current.value;n.setState({inputPassword:e})},n.typingUserName=function(){var e=n.textArea.current.value;n.setState({inputText:e})},n.email=i.a.createRef(),n.password=i.a.createRef(),n.textArea=i.a.createRef(),n}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsx)(i.a.Fragment,{children:this.state.didGetUserName?Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)(j,{userName:this.state.username,isHost:!1}),Object(m.jsx)(G,{myUserName:this.state.username,isHost:!1})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Log in:"}),Object(m.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.email,onInput:this.typingEmail}),Object(m.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.password,type:"password",onInput:this.typingPassword}),Object(m.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputEmail.length>0&&this.state.inputPassword.length>0),onClick:function(){console.log("logging in"),E.post("https://game-nexus.herokuapp.com/api/v1/validate/",{email:e.state.inputEmail,passwordHash:k()(e.state.inputPassword)}).then((function(t){console.log("got response:",t),w.set("username",t.data.username.username,{path:"/"}),e.setState({username:t.data.username.username,didGetUserName:!0})})).catch((function(e){alert("Invalid credentials!"),console.log("got error:",e.response)}))},children:"Submit"}),Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Play as guest:"}),Object(m.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.textArea,onInput:this.typingUserName}),Object(m.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputText.length>0),onClick:function(){e.setState({username:e.state.inputText,didGetUserName:!0})},children:"Submit"})]})})}}]),s}(i.a.Component),U=Object(n.createContext)({didRedirect:!1,playerDidRedirect:function(){},playerDidNotRedirect:function(){}}),I=s(37),_=s.n(I),C=s(63),P=s(64),L=s.n(P),W=s(30).socket,A=s(20),D=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={didGetUserName:!1,inputEmail:"",inputPassword:"",inputText:"",gameId:""},n.send=function(){var e=L()();return W.emit("createNewGame",e),e},n.typingEmail=function(){var e=n.email.current.value;n.setState({inputEmail:e})},n.typingPassword=function(){var e=n.password.current.value;n.setState({inputPassword:e})},n.typingUserName=function(){var e=n.textArea.current.value;n.setState({inputText:e})},n.email=i.a.createRef(),n.password=i.a.createRef(),n.textArea=i.a.createRef(),n}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsx)(i.a.Fragment,{children:this.state.didGetUserName?Object(m.jsx)(d.a,{to:"/game/"+this.state.gameId}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Log in:"}),Object(m.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.email,onInput:this.typingEmail}),Object(m.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.password,type:"password",onInput:this.typingPassword}),Object(m.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputEmail.length>0&&this.state.inputPassword.length>0),onClick:Object(C.a)(_.a.mark((function t(){var s,n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("logging in"),t.prev=1,t.next=4,A.post("https://game-nexus.herokuapp.com/api/v1/validate/",{email:e.state.inputEmail,passwordHash:k()(e.state.inputPassword)});case 4:s=t.sent,console.log("got response:",s.data.username.username),w.set("username",s.data.username.username,{path:"/"}),e.props.didRedirect(),e.props.setUserName(s.data.username.username),n=e.send(),e.setState({didGetUserName:!0,gameId:n}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),alert("Invalid credentials!"),console.log("got error:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])}))),children:"Submit"}),Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Play as guest:"}),Object(m.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.textArea,onInput:this.typingUserName}),Object(m.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputText.length>0),onClick:function(){e.props.didRedirect(),e.props.setUserName(e.state.inputText);var t=e.send();e.setState({didGetUserName:!0,gameId:t})},children:"Submit"})]})})}}]),s}(i.a.Component),F=function(e){var t=i.a.useContext(U);return Object(m.jsx)(D,{didRedirect:t.playerDidRedirect,setUserName:e.setUserName})};var K=function(){var e=i.a.useState(!1),t=Object(c.a)(e,2),s=t[0],n=t[1],o=i.a.useCallback((function(){n(!0)}),[]),a=i.a.useCallback((function(){n(!1)}),[]),l=i.a.useState(""),u=Object(c.a)(l,2),h=u[0],p=u[1];return Object(m.jsx)(U.Provider,{value:{didRedirect:s,playerDidRedirect:o,playerDidNotRedirect:a},children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/",exact:!0,children:Object(m.jsx)(F,{setUserName:p})}),Object(m.jsx)(d.b,{path:"/game/:gameid",exact:!0,children:s?Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)(j,{userName:h,isHost:!0}),Object(m.jsx)(G,{myUserName:h,isHost:!0})]}):Object(m.jsx)(R,{})}),Object(m.jsx)(d.a,{to:"/"})]})})})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,131)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),o(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root")),M()},21:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t),s.d(t,"socket",(function(){return r})),s.d(t,"mySocketId",(function(){return n}));var n,i=s(61),o=s.n(i),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8e3,c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL||"localhost:".concat(a),r=o()(c);r.on("createNewGame",(function(e){console.log("A new game has been created! Username: "+e.userName+", Game id: "+e.gameId+" Socket id: "+e.mySocketId),n=e.mySocketId}))},70:function(e,t,s){},94:function(e,t){}},[[130,1,2]]]);
//# sourceMappingURL=main.b2b3fcc0.chunk.js.map
(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{103:function(e,t,s){},130:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(59),o=s.n(n),a=(s(69),s(9)),r=s(8),d=s(2),l=s(13),h=s(14),j=s(16),u=s(15),p=s(0),b=s(29).socket,x=function(e){return function(e,t,s){var c={gameId:e,userName:t,isHost:s};b.emit("playerJoinGame",c)}(Object(d.g)().gameid,e.userName,e.isHost),Object(p.jsx)("div",{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Rock, paper, scissors"})})},m=(s(103),s(20)),O=s.n(m),g=new(s(64).a),v=s(29).socket,S=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8e3,f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL||"localhost:".concat(S),w="https://game-nexus.herokuapp.com/",y=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={host:e.props.isHost,choiceHost:-1,choiceGuest:-1,scoreHost:0,scoreGuest:0,winner:"nobody",endOfGame:!1},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;function t(){if(console.log("MAMY TO"),alert("winner: "+this.state.winner),3==this.state.scoreGuest){var e=g.get("username");e&&(O.a.post(w+"api/v1/stats",{game:"rps",username:e,result:this.stats.isHost?1:0}),g.get("username",{path:"/"})),console.log("WESZLO GUEST"),window.location.href="/guestWin.html"}else if(3==this.state.scoreHost){var t=g.get("username");t&&(O.a.post(w+"api/v1/stats",{game:"rps",username:t,result:this.stats.isHost?1:0}),g.get("username",{path:"/"})),console.log("WESZLO HOST"),window.location.href="/hostWin.html"}this.setState({winner:"nobody",choiceGuest:-1,choiceHost:-1})}console.log("props:",this.props),console.log(this.state),this.setState({isHost:this.props.isHost}),v.on("hostMove",(function(s){console.log("hostMoveEvent",s),console.log(e.state.isHost),e.state.isHost||e.setState({choiceHost:s}),-1!=e.state.choiceGuest&&-1!=e.state.choiceHost&&(e.state.choiceGuest==e.state.choiceHost?(e.setState({winner:"draw"}),console.log("sc: "+e.state.scoreGuest)):1==e.state.choiceGuest&&0==e.state.choiceHost||2==e.state.choiceGuest&&1==e.state.choiceHost||0==e.state.choiceGuest&&2==e.state.choiceHost?(e.setState({winner:"Guest"}),e.setState({scoreGuest:e.state.scoreGuest+1}),console.log("sc: "+e.state.scoreGuest)):(0==e.state.choiceGuest&&1==e.state.choiceHost||1==e.state.choiceGuest&&2==e.state.choiceHost||2==e.state.choiceGuest&&0==e.state.choiceHost)&&(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scoreHost+1})),window.alert("the winner is "+e.state.winner),console.log(e.state.scoreHost),3==e.state.scoreHost&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),console.log(e.state.scoreGuest),3==e.state.scoreGuest&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),e.setState({winner:"nobody",choiceGuest:-1,choiceHost:-1}))})),v.on("guestMove",(function(s){console.log("guestMoveEvent",s),console.log(e.state.isHost),e.state.isHost&&e.setState({choiceGuest:s}),-1!=e.state.choiceGuest&&-1!=e.state.choiceHost&&(e.state.choiceGuest==e.state.choiceHost?e.setState({winner:"draw"}):1==e.state.choiceGuest&&0==e.state.choiceHost||2==e.state.choiceGuest&&1==e.state.choiceHost||0==e.state.choiceGuest&&2==e.state.choiceHost?(e.setState({winner:"Guest"}),e.setState({scoreGuest:e.state.scoreGuest+1}),console.log("sc: "+e.state.scoreGuest)):0==e.state.choiceGuest&&1==e.state.choiceHost?(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scoreHost+1})):1==e.state.choiceGuest&&2==e.state.choiceHost?(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scorHost+1})):2==e.state.choiceGuest&&0==e.state.choiceHost&&(e.setState({winner:"Host"}),e.setState({scoreHost:e.state.scoreHost+1})),window.alert("the winner is "+e.state.winner),console.log(e.state.scoreHost),3==e.state.scoreHost&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),console.log(e.state.scoreGuest),3==e.state.scoreGuest&&(console.log("koniec!!!"),e.setState({endOfGame:!0}),t()),e.setState({winner:"nobody",choiceGuest:-1,choiceHost:-1}))}))}},{key:"render",value:function(){return Object(p.jsx)(i.a.Fragment,{children:this.state.endOfGame?Object(p.jsx)(d.a,{to:"/end"}):Object(p.jsxs)("div",{className:"box",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("button",{onClick:this.choose.bind(this,this.state.host,0),children:"rock"})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("button",{onClick:this.choose.bind(this,this.state.host,1),children:"paper"})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("button",{onClick:this.choose.bind(this,this.state.host,2),children:"scissors"})}),"Host:",Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Score:"}),Object(p.jsx)("output",{children:this.state.scoreHost})]}),"Guest:",Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Score:"}),Object(p.jsx)("output",{children:this.state.scoreGuest})]})]})})}},{key:"choose",value:function(e,t){1==this.state.endOfGame?console.log("koniec"):e?(this.setState({choiceHost:t}),v.emit("new host move",{choice:t,gameId:this.props.gameId}),console.log("inH")):(this.setState({choiceGuest:t}),v.emit("new guest move",{choice:t,gameId:this.props.gameId}),console.log("inG"))}}]),s}(i.a.Component),H=function(e){var t=Object(d.g)().gameid,s=i.a.useState(""),c=Object(a.a)(s,2),n=(c[0],c[1]),o=i.a.useState(!1),r=Object(a.a)(o,2),l=r[0],h=r[1],j=i.a.useState(""),u=Object(a.a)(j,2),b=u[0],x=u[1],m=i.a.useState(!1),O=Object(a.a)(m,2),g=O[0],S=O[1];return console.log(e.isHost),i.a.useEffect((function(){v.on("playerJoinedRoom",(function(e){console.log("A new player has joined the room! Username: "+e.userName+", Game id: "+e.gameId+" Socket id: "+e.mySocketId),v.id!==e.mySocketId&&n(e.mySocketId)})),v.on("status",(function(e){console.log(e),alert(e),"This game session does not exist."!==e&&"There are already 2 people playing in this room."!==e||S(!0)})),v.on("start game",(function(s){console.log("START!"),s!==e.myUserName?(x(s),h(!0)):v.emit("request username",t)})),v.on("give userName",(function(s){v.id!==s&&(console.log("give userName stage: "+e.myUserName),v.emit("recieved userName",{userName:e.myUserName,gameId:t}))})),v.on("get Opponent UserName",(function(e){v.id!==e.socketId&&(x(e.userName),console.log("data.socketId: data.socketId"),n(e.socketId),h(!0))}))}),[]),Object(p.jsx)(i.a.Fragment,{children:l?Object(p.jsxs)("div",{children:[Object(p.jsxs)("h4",{children:[" Opponent: ",b," "]}),Object(p.jsx)("div",{style:{display:"flex"},children:Object(p.jsx)(y,{gameId:t,isHost:e.isHost})}),Object(p.jsxs)("h4",{children:[" You: ",e.myUserName," "]})]}):g?Object(p.jsx)("div",{children:Object(p.jsx)("h1",{style:{textAlign:"center",marginTop:"200px"},children:" :( "})}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/8)+"px"},children:["Hey ",Object(p.jsx)("strong",{children:e.myUserName}),", copy and paste the URL below to send to your friend:"]}),Object(p.jsx)("textarea",{style:{marginLeft:String(window.innerWidth/2-290)+"px",marginTop:"30px",width:"580px",height:"30px"},onFocus:function(e){e.target.select()},value:f+"/game/"+t,type:"text",readOnly:!0}),Object(p.jsx)("br",{}),Object(p.jsxs)("h1",{style:{textAlign:"center",marginTop:"100px"},children:[" ","Waiting for other opponent to join the game..."," "]})]})})},k=s(26),T=s.n(k),G=s(20),N=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={didGetUserName:!1,username:"",inputEmail:"",inputPassword:"",inputText:""},c.typingEmail=function(){var e=c.email.current.value;c.setState({inputEmail:e})},c.typingPassword=function(){var e=c.password.current.value;c.setState({inputPassword:e})},c.typingUserName=function(){var e=c.textArea.current.value;c.setState({inputText:e})},c.email=i.a.createRef(),c.password=i.a.createRef(),c.textArea=i.a.createRef(),c}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)(i.a.Fragment,{children:this.state.didGetUserName?Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(x,{userName:this.state.username,isHost:!1}),Object(p.jsx)(H,{myUserName:this.state.username,isHost:!1})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Log in:"}),Object(p.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.email,onInput:this.typingEmail}),Object(p.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.password,type:"password",onInput:this.typingPassword}),Object(p.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputEmail.length>0&&this.state.inputPassword.length>0),onClick:function(){console.log("logging in"),G.post("https://game-nexus.herokuapp.com/api/v1/validate/",{email:e.state.inputEmail,passwordHash:T()(e.state.inputPassword)}).then((function(t){console.log("got response:",t),g.set("username",t.data.username.username,{path:"/"}),e.setState({username:t.data.username.username,didGetUserName:!0})})).catch((function(e){alert("Invalid credentials!"),console.log("got error:",e.response)}))},children:"Submit"}),Object(p.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Play as guest:"}),Object(p.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.textArea,onInput:this.typingUserName}),Object(p.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputText.length>0),onClick:function(){e.setState({username:e.state.inputText,didGetUserName:!0})},children:"Submit"})]})})}}]),s}(i.a.Component),E=Object(c.createContext)({didRedirect:!1,playerDidRedirect:function(){},playerDidNotRedirect:function(){}}),R=s(36),I=s.n(R),U=s(62),C=s(63),P=s.n(C),_=s(29).socket,L=s(20),W=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={didGetUserName:!1,inputEmail:"",inputPassword:"",inputText:"",gameId:""},c.send=function(){var e=P()();return _.emit("createNewGame",e),e},c.typingEmail=function(){var e=c.email.current.value;c.setState({inputEmail:e})},c.typingPassword=function(){var e=c.password.current.value;c.setState({inputPassword:e})},c.typingUserName=function(){var e=c.textArea.current.value;c.setState({inputText:e})},c.email=i.a.createRef(),c.password=i.a.createRef(),c.textArea=i.a.createRef(),c}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)(i.a.Fragment,{children:this.state.didGetUserName?Object(p.jsx)(d.a,{to:"/game/"+this.state.gameId}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Log in:"}),Object(p.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.email,onInput:this.typingEmail}),Object(p.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.password,type:"password",onInput:this.typingPassword}),Object(p.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputEmail.length>0&&this.state.inputPassword.length>0),onClick:Object(U.a)(I.a.mark((function t(){var s,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("logging in"),t.prev=1,t.next=4,L.post("https://game-nexus.herokuapp.com/api/v1/validate/",{email:e.state.inputEmail,passwordHash:T()(e.state.inputPassword)});case 4:s=t.sent,console.log("got response:",s.data.username.username),g.set("username",s.data.username.username,{path:"/"}),e.props.didRedirect(),e.props.setUserName(s.data.username.username),c=e.send(),e.setState({didGetUserName:!0,gameId:c}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),alert("Invalid credentials!"),console.log("got error:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])}))),children:"Submit"}),Object(p.jsx)("h1",{style:{textAlign:"center",marginTop:String(window.innerHeight/3)+"px"},children:"Play as guest:"}),Object(p.jsx)("input",{style:{marginLeft:String(window.innerWidth/2-120)+"px",width:"240px",marginTop:"62px"},ref:this.textArea,onInput:this.typingUserName}),Object(p.jsx)("button",{className:"btn btn-primary",style:{marginLeft:String(window.innerWidth/2-60)+"px",width:"120px",marginTop:"62px"},disabled:!(this.state.inputText.length>0),onClick:function(){e.props.didRedirect(),e.props.setUserName(e.state.inputText);var t=e.send();e.setState({didGetUserName:!0,gameId:t})},children:"Submit"})]})})}}]),s}(i.a.Component),A=function(e){var t=i.a.useContext(E);return Object(p.jsx)(W,{didRedirect:t.playerDidRedirect,setUserName:e.setUserName})};function D(e){e.userName;return Object(p.jsxs)("html",{lang:"en",children:[Object(p.jsx)("head",{children:Object(p.jsx)("title",{children:"rock, paper, scissors"})}),Object(p.jsxs)("body",{children:[Object(p.jsx)("script",{children:"myStorage = window.sessionStorage; // Save data to sessionStorage"}),Object(p.jsxs)("div",{class:"box",children:[Object(p.jsxs)("div",{class:"titlebox",children:[Object(p.jsx)("h1",{children:"Rock, Paper, Scissors"}),Object(p.jsx)("p",{children:" To play the game choose your weapon by clicking on one of the buttons below."})]}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"button",children:Object(p.jsxs)("form",{action:"rock",children:[Object(p.jsx)("input",{type:"image",src:"../img/rock.png"}),Object(p.jsx)("div",{class:"desc",children:"Rock"})]})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsxs)("form",{action:"paper",children:[Object(p.jsx)("input",{type:"image",src:"../img/paper.png"}),Object(p.jsx)("div",{class:"desc",children:"Paper"})]})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsxs)("form",{action:"scissors",children:[Object(p.jsx)("input",{type:"image",src:"../img/scissors.png"})," ",Object(p.jsx)("br",{}),Object(p.jsx)("div",{class:"desc",children:"Scissors"})]})})]})]})]})]})}var F=(console.log("musi smigac"),Math.floor(3*Math.random()));console.log(F);var K="rock",M="It's a draw!";function Y(e){e.userName;return Object(p.jsxs)("html",{lang:"en",children:[Object(p.jsx)("head",{children:Object(p.jsx)("title",{children:"rock, paper, scissors"})}),Object(p.jsxs)("body",{children:["// Get saved data from sessionStorage",Object(p.jsxs)("div",{class:"box",children:[Object(p.jsx)("div",{class:"titlebox",children:Object(p.jsx)("h1",{children:"Results:"})}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsxs)("div",{class:"field",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h4",{children:" Your choice:"})}),Object(p.jsxs)("div",{class:"button",children:[Object(p.jsx)("input",{type:"image",src:"../img/rock.png"}),Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h3",{children:"rock"})})]})]}),Object(p.jsxs)("div",{class:"field2",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h1",{children:M})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsx)("form",{action:"/single",children:Object(p.jsx)("input",{type:"submit",value:"Play again"})})})]}),Object(p.jsxs)("div",{class:"field",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h4",{children:" Computer's choice:"})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h3",{children:K})})})]})]})]})]})]})}console.log("SZK"+F),0==F?K="paper":2==F&&(K="scissors"),0==F?M="You lose!":2==F&&(M="You win!"),F=F;var B=(console.log("musi smigac"),Math.floor(3*Math.random()));console.log(B);var Z="rock",J="You lose!";function V(e){e.userName;return Object(p.jsxs)("html",{lang:"en",children:[Object(p.jsx)("head",{children:Object(p.jsx)("title",{children:"rock, paper, scissors"})}),Object(p.jsxs)("body",{children:["// Get saved data from sessionStorage",Object(p.jsxs)("div",{class:"box",children:[Object(p.jsx)("div",{class:"titlebox",children:Object(p.jsx)("h1",{children:"Results:"})}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsxs)("div",{class:"field",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h4",{children:" Your choice:"})}),Object(p.jsxs)("div",{class:"button",children:[Object(p.jsx)("input",{type:"image",src:"../img/rock.png"}),Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h3",{children:"scissors"})})]})]}),Object(p.jsxs)("div",{class:"field2",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h1",{children:J})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsx)("form",{action:"/single",children:Object(p.jsx)("input",{type:"submit",value:"Play again"})})})]}),Object(p.jsxs)("div",{class:"field",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h4",{children:" Computer's choice:"})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h3",{children:Z})})})]})]})]})]})]})}console.log("SZK"+B),0==B?Z="paper":2==B&&(Z="scissors"),0==B?J="You win!":2==B&&(J="It's a draw!"),B=B;var q=(console.log("musi smigac"),Math.floor(3*Math.random()));console.log(q);var z="rock",Q="You win!";function X(e){e.userName;return Object(p.jsxs)("html",{lang:"en",children:[Object(p.jsx)("head",{children:Object(p.jsx)("title",{children:"rock, paper, scissors"})}),Object(p.jsxs)("body",{children:["// Get saved data from sessionStorage",Object(p.jsxs)("div",{class:"box",children:[Object(p.jsx)("div",{class:"titlebox",children:Object(p.jsx)("h1",{children:"Results:"})}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsxs)("div",{class:"field",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h4",{children:" Your choice:"})}),Object(p.jsxs)("div",{class:"button",children:[Object(p.jsx)("input",{type:"image",src:"../img/rock.png"}),Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h3",{children:"paper"})})]})]}),Object(p.jsxs)("div",{class:"field2",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h1",{children:Q})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsx)("form",{action:"/single",children:Object(p.jsx)("input",{type:"submit",value:"Play again"})})})]}),Object(p.jsxs)("div",{class:"field",children:[Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h4",{children:" Computer's choice:"})}),Object(p.jsx)("div",{class:"button",children:Object(p.jsx)("div",{class:"desc",children:Object(p.jsx)("h3",{children:z})})})]})]})]})]})]})}console.log("SZK"+q),0==q?z="paper":2==q&&(z="scissors"),0==q?Q="It's a draw!":2==q&&(Q="You lose!"),q=q;var $=function(){var e=i.a.useState(!1),t=Object(a.a)(e,2),s=t[0],c=t[1],n=i.a.useCallback((function(){c(!0)}),[]),o=i.a.useCallback((function(){c(!1)}),[]),l=i.a.useState(""),h=Object(a.a)(l,2),j=h[0],u=h[1];return Object(p.jsx)(E.Provider,{value:{didRedirect:s,playerDidRedirect:n,playerDidNotRedirect:o},children:Object(p.jsx)(r.a,{children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/single",exact:!0,children:Object(p.jsx)(D,{userName:j})}),Object(p.jsx)(d.b,{path:"/rock",exact:!0,children:Object(p.jsx)(Y,{userName:j})}),Object(p.jsx)(d.b,{path:"/paper",exact:!0,children:Object(p.jsx)(X,{userName:j})}),Object(p.jsx)(d.b,{path:"/scissors",exact:!0,children:Object(p.jsx)(V,{userName:j})}),Object(p.jsx)(d.b,{path:"/",exact:!0,children:Object(p.jsx)(A,{setUserName:u})}),Object(p.jsx)(d.b,{path:"/game/:gameid",exact:!0,children:s?Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(x,{userName:j,isHost:!0}),Object(p.jsx)(H,{myUserName:j,isHost:!0})]}):Object(p.jsx)(N,{})}),Object(p.jsxs)(d.b,{path:"/end",exact:!0,children:[Object(p.jsx)("div",{children:"Thanks for playing rock-paper-scissors"}),Object(p.jsx)("a",{href:"https://game-nexus.herokuapp.com/",children:"Back to hub"})]}),Object(p.jsx)(d.a,{to:"/"})]})})})},ee=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,131)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;s(e),c(e),i(e),n(e),o(e)}))};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root")),ee()},29:function(e,t,s){"use strict";s.r(t),s.d(t,"socket",(function(){return r})),s.d(t,"mySocketId",(function(){return c}));var c,i=s(60),n=s.n(i),o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8e3,a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL||"localhost:".concat(o),r=n()(a);r.on("createNewGame",(function(e){console.log("A new game has been created! Username: "+e.userName+", Game id: "+e.gameId+" Socket id: "+e.mySocketId),c=e.mySocketId}))},69:function(e,t,s){},93:function(e,t){}},[[130,1,2]]]);
//# sourceMappingURL=main.cf76486c.chunk.js.map
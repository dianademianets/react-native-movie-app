(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return we}));var o,i,r,a,c,l,s,u,d,f,j,h,b,x,g,p,O,m=n(0),v=n.n(m),y=n(316),w=n(310),S=n(315),I=n(114),C=n(11),z=n.n(C),M=n(32),T=n.n(M),V=n(28),k=n(1),E=n(54),N=n(50),J=n(86),W=n(40),_=n(99),R=n(33),D=n(9),H=R.default.View(o||(o=T()(["\n  margin-bottom: 15px;\n  background: #040C18;\n  border-radius: 20px;\n  justify-content: center;\n  align-items: center;\n\n"]))),P=R.default.View(i||(i=T()(["\n  padding: 10px;\n"]))),B=R.default.Image(r||(r=T()(["\n  width: 100px;\n  height: 130px;\n  border-radius: 12px;\n"]))),L=R.default.Text(a||(a=T()(["\n  font-size: 12px;\n  color: snow;\n  font-weight: bold;\n"]))),Z=R.default.View(c||(c=T()(["\n  display: flex;\n  justify-content: center;\n"]))),G=function(e){var t,n=e.item;return Object(D.jsxs)(H,{children:[Object(D.jsx)(P,{children:Object(D.jsx)(B,{source:{uri:"https://image.tmdb.org/t/p/w300"+n.poster_path}})}),Object(D.jsx)(Z,{children:Object(D.jsx)(L,{children:(t=n.original_title,t.length>=8?t.substring(0,8)+"...":t)})})]})},F=n(175),Y=n.n(F).a.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTRhMTA4NDYwN2IxNjRlMDM4ZmM5NGY0NTIyZDcxNyIsInN1YiI6IjVmZmVhNzMwMGZmMTVhMDAzZDVhOGRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8uRmvLzDEPlGfMzO8habaeVmLeEk2dUYVKuTbw-wBg "}}),A=function(e){return Y.get("/discover/movie?page="+e)},U=function(e){return Y.get("/movie/"+e)},Q=function(){return Y.get("/discover/movie?sort_by=popularity.desc")},q=function(){return Y.get("/discover/movie?sort_by=vote_average.desc")},K=function(e,t){return Y.get("/search/movie?query="+e+"&page="+t)},X=function(e){return Y.get("/movie/"+e+"/videos")},$=R.default.View(l||(l=T()(["\n  border: 1px solid white;\n  border-radius: 10px;\n  background: #040C18;\n  margin: 10px 20px;\n  padding: 10px 20px;\n  flex-direction: row;\n  column-gap: 10px;\n"]))),ee=R.default.View(s||(s=T()(["\n  background: black;\n  padding: 10px 20px 30px;\n"]))),te=R.default.View(u||(u=T()(["\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: 20px;\n"]))),ne=R.default.View(d||(d=T()(["\n  flex-direction: row;\n  justify-content: center;\n  column-gap: 20px;\n"]))),oe=function(e){var t=e.navigation,n=v.a.useState(!0),o=z()(n,2),i=o[0],r=o[1],a=v.a.useState(1),c=z()(a,2),l=c[0],s=c[1],u=v.a.useState([]),d=z()(u,2),f=d[0],j=d[1],h=v.a.useState(""),b=z()(h,2),x=b[0],g=b[1];v.a.useEffect((function(){r(!0),A(l).then((function(e){var t=e.data;j(t.results)})).catch((function(e){console.log(e)})).finally((function(){r(!1)}))}),[l]);if(v.a.useEffect((function(){r(!0),K(x,l).then((function(e){var t=e.data;j(t.results),console.log(t.results)})).catch((function(e){console.log(e)})).finally((function(){r(!1)}))}),[x,l]),i)return Object(D.jsxs)(k.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[Object(D.jsx)(E.default,{size:"large"}),Object(D.jsx)(V.default,{style:{marginTop:15},children:"Loading..."})]});return Object(D.jsx)(W.default,{horizontal:!1,showsVerticalScrollIndicator:!1,showsHorizontalScrollIndicator:!1,children:Object(D.jsxs)(ee,{children:[Object(D.jsxs)($,{children:[Object(D.jsx)(k.default,{style:{width:"10%"},children:Object(D.jsx)(I.default,{name:"search",size:20,color:"snow"})}),Object(D.jsx)(_.default,{placeholder:"Search...",onSubmitEditing:function(e){return g(e.nativeEvent.text)},style:{color:"snow",width:"88%"}})]}),Object(D.jsxs)(k.default,{children:[Object(D.jsx)(te,{children:f.map((function(e){return Object(D.jsx)(N.default,{onPress:function(){return t.navigate("FullMovies",{id:e.id})},children:Object(D.jsx)(G,{item:e},e.id)})}))}),Object(D.jsxs)(ne,{children:[Object(D.jsx)(J.default,{title:"previous",onPress:function(){s(l<=1?1:l-1)}}),Object(D.jsx)(J.default,{title:"next",onPress:function(){s(l>=32241?32241:l+1)}})]})]})]})})},ie=n(57),re=R.default.View(f||(f=T()(["\n  background: black;\n"]))),ae=R.default.View(j||(j=T()(["\n  margin: 20px 0 30px 10px;\n  justify-content: space-between;\n"]))),ce=R.default.Text(h||(h=T()(["\n  margin:10px;\n  text-align: center;\n  color: snow;\n  padding: 5px;\n  font-weight: bold;\n  font-size: 20px;\n"]))),le=function(e){var t=e.navigation,n=v.a.useState(!0),o=z()(n,2),i=o[0],r=o[1],a=v.a.useState([]),c=z()(a,2),l=c[0],s=c[1],u=v.a.useState([]),d=z()(u,2),f=d[0],j=d[1];return v.a.useEffect((function(){r(!0),Q().then((function(e){var t=e.data;s(t.results)})).catch((function(e){console.log(e),ie.default.alert("Error","error")})).finally((function(){r(!1)}))}),[]),v.a.useEffect((function(){r(!0),q().then((function(e){var t=e.data;j(t.results)})).catch((function(e){console.log(e),ie.default.alert("Error","error")})).finally((function(){r(!1)}))}),[]),i?Object(D.jsxs)(k.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[Object(D.jsx)(E.default,{size:"large"}),Object(D.jsx)(V.default,{style:{marginTop:15},children:"Loading..."})]}):Object(D.jsx)(re,{children:Object(D.jsxs)(ae,{children:[Object(D.jsx)(ce,{children:"What's Popular Movies"}),Object(D.jsx)(W.default,{ref:function(e){return e},horizontal:!0,pagingEnabled:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:{justifyContent:"center",alignItems:"center"},decelerationRate:0,children:l.map((function(e){return Object(D.jsx)(N.default,{onPress:function(){return t.navigate("FullMovies",{id:e.id})},children:Object(D.jsx)(G,{item:e},e.id)})}))}),Object(D.jsx)(ce,{children:"What's Rated Movies"}),Object(D.jsx)(W.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,pagingEnabled:!0,contentContainerStyle:{justifyContent:"center",alignItems:"center"},decelerationRate:0,children:f.map((function(e){return Object(D.jsx)(N.default,{onPress:function(){return t.navigate("FullMovies",{id:e.id})},children:Object(D.jsx)(G,{item:e},e.id)})}))})]})})},se=n(182),ue=n.n(se),de=R.default.View(b||(b=T()(["\n  background: black;\n"]))),fe=R.default.View(x||(x=T()(["\n  justify-content: center;\n  align-items: center;\n"]))),je=R.default.Image(g||(g=T()(["\n  margin: 2% 5%;\n  width: 200px;\n  height: 300px;\n  border-radius: 12px;\n"]))),he=R.default.Text(p||(p=T()(["\n  text-align: center;\n  color: snow;\n  padding: 5px;\n  font-weight: bold;\n  font-size: 20px;\n"]))),be=R.default.Text(O||(O=T()(["\n  color: snow;\n  padding: 10px 20px;\n  font-weight: bold;\n  font-size: 15px;\n"]))),xe=function(e){var t=e.route.params.id,n=v.a.useState(!0),o=z()(n,2),i=o[0],r=o[1],a=v.a.useState([]),c=z()(a,2),l=c[0],s=c[1],u=v.a.useState([]),d=z()(u,2),f=d[0],j=d[1];return v.a.useEffect((function(){r(!0),U(t).then((function(e){var t=e.data;s(t)})).catch((function(e){console.log(e),ie.default.alert("Error","error")})).finally((function(){r(!1)}))}),[t]),v.a.useEffect((function(){r(!0),X(t).then((function(e){var t=e.data;j(t.results)})).catch((function(e){console.log(e),ie.default.alert("Error","error")})).finally((function(){r(!1)}))}),[t]),i?Object(D.jsxs)(k.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[Object(D.jsx)(E.default,{size:"large"}),Object(D.jsx)(V.default,{style:{marginTop:15,color:"snow"},children:"Loading..."})]}):Object(D.jsx)(W.default,{horizontal:!1,showsVerticalScrollIndicator:!1,showsHorizontalScrollIndicator:!1,children:Object(D.jsxs)(de,{style:{padding:20},children:[Object(D.jsx)(he,{children:l.original_title}),Object(D.jsxs)(k.default,{children:[Object(D.jsx)(fe,{children:Object(D.jsx)(je,{source:{uri:"https://image.tmdb.org/t/p/w200"+l.poster_path}})}),Object(D.jsxs)(k.default,{children:[Object(D.jsxs)(be,{children:["Movie rating: ",l.vote_average]}),Object(D.jsxs)(be,{children:["Popularity:",l.popularity]}),Object(D.jsxs)(be,{children:["Budget:",l.budget]}),Object(D.jsxs)(be,{children:["Overview: ",l.overview]}),Object(D.jsxs)(be,{children:["Release date: ",l.release_date]}),Object(D.jsxs)(be,{children:["Original language: ",l.original_language]})]})]}),Object(D.jsx)(k.default,{children:f.length?Object(D.jsx)(ue.a,{height:300,play:!0,videoId:f[0].key}):null})]})})},ge=Object(w.default)(),pe=Object(S.default)(),Oe=Object(S.default)();function me(){return Object(D.jsxs)(pe.Navigator,{children:[Object(D.jsx)(pe.Screen,{name:"Home",component:le,options:{title:"Home",headerStyle:{backgroundColor:"#040C18"},headerTintColor:"#fff",headerTitleStyle:{fontWeight:"bold"}}}),Object(D.jsx)(pe.Screen,{name:"FullMovies",component:xe,options:{title:"Details",headerStyle:{backgroundColor:"#040C18"},headerTintColor:"#fff",headerTitleStyle:{fontWeight:"bold"}}})]})}function ve(){return Object(D.jsxs)(Oe.Navigator,{children:[Object(D.jsx)(Oe.Screen,{name:"Movies",component:oe,options:{title:"Movies",headerStyle:{backgroundColor:"#040C18"},headerTintColor:"#fff",headerTitleStyle:{fontWeight:"bold"}}}),Object(D.jsx)(Oe.Screen,{name:"FullMovies",component:xe,options:{title:"Details",headerStyle:{backgroundColor:"#040C18"},headerTintColor:"#fff",headerTitleStyle:{fontWeight:"bold"}}})]})}var ye=function(){return Object(D.jsx)(y.default,{children:Object(D.jsxs)(ge.Navigator,{barStyle:{backgroundColor:"#040C18"},screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var n,o=e.focused,i=e.color,r=e.size;return"Home"===t.name?n=o?"home":"home-outline":"Movies"===t.name&&(n=o?"film":"film-outline"),Object(D.jsx)(I.default,{name:n,size:r,color:i})},tabBarActiveTintColor:"red",tabBarInactiveTintColor:"blue"}},children:[Object(D.jsx)(ge.Screen,{name:"Home",component:me,options:{headerShown:!1}}),Object(D.jsx)(ge.Screen,{name:"Movies",component:ve,options:{headerShown:!1}})]})})};function we(){return Object(D.jsx)(ye,{})}},206:function(e,t,n){e.exports=n(299)}},[[206,1,2]]]);
//# sourceMappingURL=app.78c4d41d.chunk.js.map
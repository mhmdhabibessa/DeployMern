(this.webpackJsonpproduct=this.webpackJsonpproduct||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(15),r=n.n(s),l=(n(51),n(52),n(5)),i=n(13),o=n(19),j=n.n(o),d=n(108),b=n(2),h=function(e){e.id,e.name;var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){j.a.get("http://localhost:8000/api/players/").then((function(e){return s(e.data)}))}),[a]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(l.a,{to:"",children:"  Manage Players "})," ||",Object(b.jsx)(l.a,{to:"/status/game/1",children:" Manage   Player Status"}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Team  Name"}),Object(b.jsx)("th",{children:"Perferd positions"}),Object(b.jsx)("th",{children:"Actions"})]}),a.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name},e),Object(b.jsxs)("td",{children:[" ",e.positions," "]}),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.a,{style:{backgroundColor:"#900000",color:"white"},onClick:function(t){var n;n=e._id,j.a.delete("http://localhost:8000/api/players/delete/"+n).then((function(e){s(a.filter((function(e){return e._id!==n}))),Object(l.c)("/")})).catch((function(e){return console.log(e)}))},children:"  Delete  "},t),"  "]})]})}))]})]})},u=function(e){var t=e.id,n=(e.name,Object(c.useState)([])),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){j.a.get("http://localhost:8000/api/players/").then((function(e){return r(e.data)}))}),[s]),Object(b.jsxs)("div",{children:[Object(b.jsx)(l.a,{style:{fontSize:"28px"},to:"",children:" Mange Player "})," || ",Object(b.jsx)(l.a,{style:{fontSize:"28px"},to:"",children:" Manage Player Status"}),Object(b.jsxs)("fieldset",{style:{backgroundColor:"white",marginTop:"60px"},children:[Object(b.jsxs)("h3",{children:[" Player Status Game:  ",t," "]}),Object(b.jsx)(l.a,{style:{fontSize:"22px"},to:"/status/game/1",children:" Game 1 "})," || ",Object(b.jsx)(l.a,{style:{fontSize:"22px"},to:"/status/game/2",children:" Game 2 "})," ||",Object(b.jsx)(l.a,{style:{fontSize:"22px"},to:"/status/game/3",children:" Game 3 "}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Team  Name"}),Object(b.jsx)("th",{children:"Actions"})]}),s.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name},t),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.a,{style:{backgroundColor:"white"},onClick:function(e){e.target.style.backgroundColor="red"},children:" Playing "}),Object(b.jsx)(d.a,{style:{backgroundColor:"white"},onClick:function(e){e.target.style.backgroundColor="green"},children:" NotPlaying "}),Object(b.jsx)(d.a,{style:{backgroundColor:"white"},onClick:function(e){return e.target.style.backgroundColor="yellow"},children:" Undecide "})," "]})]})}))]})]})]})},O=n(107),x=n(43),p=n(109),f=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),d=o[0],h=o[1],u=Object(c.useState)([]),f=Object(i.a)(u,2),g=f[0],y=f[1];return Object(b.jsxs)("fieldset",{children:[Object(b.jsx)(l.a,{to:"",children:"  Manage Players "})," ||",Object(b.jsx)(l.a,{to:"status/game/:id",children:" Manage   Player Status"}),Object(b.jsx)(O.a,{elevation:3,children:Object(b.jsx)("p",{children:"Some text here"})}),Object(b.jsx)("div",{className:" links ",children:Object(b.jsx)(l.a,{to:"/player/list",children:" List"})}),Object(b.jsx)("fieldset",{style:{backgroundColor:"white"},children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/new",{name:a,positions:d}).then((function(e){return console.log(e)})).catch((function(e){var t=e.response.data.errors.name.message;console.log(e.response.data.errors.name.message),y(t)})),Object(l.c)("/player/list")},children:["Player Name  :   ",Object(b.jsx)(p.a,{style:{width:"100%"},type:"text",onChange:function(e){return s(e.target.value)},value:a}),Object(b.jsxs)("p",{style:{color:"red"},children:[" ",g,"  "]}),Object(b.jsx)("br",{}),"Perferd Positions :: ",Object(b.jsx)(x.a,{options:[{value:"Forward",label:"Forward"},{value:"Midelfeilder",label:"Midelfeilder"},{value:"GoolKeeper",label:"GoolKeeper"}],onChange:function(e){return h(e.value)}}),Object(b.jsxs)("p",{style:{color:"red"},children:[" ",g,"  "]}),Object(b.jsx)("input",{type:"submit"})]})})]})};var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)(l.b,{children:[Object(b.jsx)(f,{path:"/player/addplay"}),Object(b.jsx)(h,{path:"/player/list"}),Object(b.jsx)(u,{path:"/status/game/:id"})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),y()}},[[92,1,2]]]);
//# sourceMappingURL=main.b1bd571e.chunk.js.map
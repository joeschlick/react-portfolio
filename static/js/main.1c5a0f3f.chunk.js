(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{80:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a(10),i=a.n(c),s=a(37),o=a(9),l=a(137),d=(a(80),a(20)),j=a(55),h=a(33),b=a(117),m=a(138),g=a(139),x=a(140),p=a(122),u=a(123),O=a(141),v=a(124),f=a(125),k=a(126),w=a(127),y=a(128),C=a(49),S=a(118),N=a(119),B=a(120),M=a(121),E=a(129),I=a.p+"static/media/coolpic.cf67edc9.jpg",P=a(114),A=a(116),z=a(65),T=a.n(z),W=a(66),F=a.n(W),D=a(93),_=Object(D.a)({root:{"& .MuiBottomNavigationAction-root":{minWidth:0,maxWidth:150},"& .MuiSvgIcon-root":{fill:"white","&:hover":{fill:"grey",fontSize:"1.8rem"}}}}),R=function(){var e=_();return Object(n.jsxs)(P.a,{width:"auto",style:{background:"#222"},children:[Object(n.jsx)(A.a,{className:e.root,style:{padding:0},icon:Object(n.jsx)(T.a,{}),href:"https://github.com/joeschlick",target:"blank"}),Object(n.jsx)(A.a,{className:e.root,style:{padding:0},icon:Object(n.jsx)(F.a,{}),href:"https://www.linkedin.com/in/joe-schlick-664b503a/",target:"blank"})]})},J=Object(b.a)((function(e){return{menuSliderContainer:{width:250,background:"black",height:"100%"},avatar:{display:"block",margin:"0.5rem auto",width:e.spacing(13),height:e.spacing(13)},listItem:{color:"white"}}})),H=[{listIcon:Object(n.jsx)(S.a,{}),listText:"Home",listPath:"/"},{listIcon:Object(n.jsx)(N.a,{}),listText:"Experience",listPath:"/resume"},{listIcon:Object(n.jsx)(B.a,{}),listText:"Projects",listPath:"/portfolio"},{listIcon:Object(n.jsx)(M.a,{}),listText:"Contact Info",listPath:"/contacts"}],L=function(){var e,t=Object(r.useState)({right:!1}),a=Object(h.a)(t,2),c=a[0],i=a[1],o=function(e,t){return function(){i(Object(j.a)(Object(j.a)({},c),{},Object(d.a)({},e,t)))}},l=J();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(g.a,{component:"nav",children:Object(n.jsx)(k.a,{position:"static",style:{background:"black"},children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(y.a,{onClick:o("right",!0),children:Object(n.jsx)(E.a,{style:{color:"lightGrey"}})}),Object(n.jsx)(C.a,{variant:"h5",style:{color:"lightGrey"},children:"Web Development Portfolio"}),Object(n.jsxs)(m.a,{anchor:"right",open:c.right,onClose:o("right",!1),children:[(e="right",Object(n.jsxs)(g.a,{className:l.menuSliderContainer,component:"div",onClick:o(e,!1),children:[Object(n.jsx)(x.a,{className:l.avatar,src:I,alt:"pic of me"}),Object(n.jsx)(p.a,{}),Object(n.jsx)(u.a,{children:H.map((function(e,t){return Object(n.jsxs)(O.a,{button:!0,component:s.b,to:e.listPath,children:[Object(n.jsx)(v.a,{className:l.listItem,children:e.listIcon}),Object(n.jsx)(f.a,{className:l.listItem,primary:e.listText})]},t)}))})]})),Object(n.jsx)(R,{})]})]})})})})},G=a(130),q=Object(b.a)((function(e){return{avatar:{width:e.spacing(20),height:e.spacing(20),margin:e.spacing(2)},title:{color:"white"},subtitle:{color:"white",marginBottom:"2rem"},text:{color:"white",marginTop:0,maxWidth:"80%",margin:"auto",marginBottom:"2rem"},typedContainer:{background:"rgba(38,50,56,0.7)",borderRadius:5,position:"absolute",top:"50%",left:"50%",transform:"translate( -50%, -50%)",width:"100vw",textAlign:"center",zIndex:1}}})),K=function(){var e=q();return Object(n.jsxs)(g.a,{className:e.typedContainer,children:[Object(n.jsx)(G.a,{container:!0,justify:"center",children:Object(n.jsx)(x.a,{className:e.avatar,src:I,alt:"pic of me"})}),Object(n.jsx)(C.a,{className:e.title,variant:"h2",children:"Joe Schlick"}),Object(n.jsx)("br",{}),Object(n.jsx)(C.a,{className:e.subtitle,variant:"h4",children:"Full Stack Web Developer"}),Object(n.jsx)(C.a,{className:e.text,variant:"h6",children:"Background in Corporate Event Production and Film Production. Highly adaptable, thriving in dynamic environments where deadlines count. Enthusiastic team player with tested management skills. Excellent verbal and written communicator. Fast learner, dependable and hard-working, with a good attitude and a great sense of humor."})]})},Q=a(131),V=a(68),U=a.n(V);a(90);var X,Y,Z=function(e){var t=Object(r.useState)(""),a=Object(h.a)(t,2),c=a[0],i=a[1],s=Object(r.useState)("0px"),o=Object(h.a)(s,2),l=o[0],d=o[1],j=Object(r.useState)("accordion__icon"),b=Object(h.a)(j,2),m=b[0],g=b[1],x=Object(r.useRef)(null);return Object(n.jsxs)("div",{className:"accordion__section",children:[Object(n.jsxs)("button",{className:"accordion ".concat(c),onClick:function(){i(""===c?"active":""),d("active"===c?"0px":"".concat(x.current.scrollHeight,"px")),g("active"===c?"accordion__icon":"accordion__icon rotate")},children:[Object(n.jsx)("p",{className:"accordion__title",children:e.title}),Object(n.jsx)(U.a,{fontSize:"large",className:"".concat(m)})]}),Object(n.jsx)("div",{ref:x,style:{maxHeight:"".concat(l)},className:"accordion__content",children:Object(n.jsx)("div",{className:"accordion__text",dangerouslySetInnerHTML:{__html:e.content}})})]})},$=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},mainContainer:{background:"rgba(38,50,56,0.7)",color:"white"},title:{color:"white"},subtitle:{color:"white",marginBottom:"1rem",paddingTop:"1rem"},text:{color:"white",marginTop:0,maxWidth:"80%",margin:"auto",marginBottom:"2rem"},typedContainer:{justifyContent:"center",background:"rgba(38,50,56,0.7)",borderRadius:5,position:"absolute",width:"90%",zIndex:1},button:{color:"#4A4A4A",fontSize:"24px",marginTop:"1rem",marginBottom:"1rem",borderColor:"white"},strong:{color:"white",fontSize:"24px",textDecoration:"underline"},stronga:{color:"white"}}})),ee=function(){var e=$();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{}),Object(n.jsx)(G.a,{container:!0,justify:"center",children:Object(n.jsxs)(g.a,{className:e.typedContainer,children:[Object(n.jsx)(C.a,{align:"center",children:Object(n.jsx)(Q.a,{className:e.button,href:"https://www.dropbox.com/s/07berl05qv02uq2/Joe-Schlick-Developer-Resume-1.6.2021%20-%20Google%20Docs.pdf?dl=0",variant:"contained",size:"large",children:"Download Full Resume"})}),Object(n.jsx)(C.a,{className:e.subtitle,variant:"h4",align:"center",children:"Technical Skills"}),Object(n.jsxs)(C.a,{className:e.text,variant:"h6",children:[Object(n.jsx)("strong",{className:e.strong,children:"Languages:"})," React, Mongoose, Mongo DB, Sequelize, MySQL, Express, Node JS, JavaScript, HTML, CSS, Bootstrap, Material UI",Object(n.jsx)("br",{}),Object(n.jsx)("strong",{className:e.strong,children:"Applications:"})," Mac OS, VS Code, G Suite, Microsoft Office, Windows 10, Sketchup, Illustrator, Photoshop"]}),Object(n.jsx)(C.a,{className:e.subtitle,variant:"h4",align:"center",children:"Work Experience"}),Object(n.jsx)(Z,{title:"Freelance Event Producer: 2011\u20132021",content:" <strong > Companies: Jack Morton Worldwide, Freeman, George P. Johnson, The XD Agency </strong> <br /> <br /> Client facing project manager for corporate events with 10,000+ attendees. Inspiring client and creative team to create visual, interactive, and presentation content. Creating and managing budgets. Hiring crew leads and engaging vendors. Managing onsite execution of all planned events and last minute additions. <br /> <br /> <strong >Key Accomplishments:</strong> <br /> \u25cf Building relationships with all departments on an event to achieve a common goal <br /> \u25cf Reliably staying on or under budget for projects with constant changes <br /> \u25cf Effective and respectful communication with all stakeholders <br /> \u25cf Delegating tasks to responsible parties with respect, and total willingness to jump in where needed to get the job done. <br /> <br /> <strong > Clients Include: Google, VMware, T-Mobile, Cisco, HP, Kia, IBM, Square Enix, Capcom </strong> "}),Object(n.jsx)(Z,{title:"Freelance Stage Manager: 2015\u20132021",content:" <strong > Companies: Jack Morton Worldwide, Freeman, Opus Agency, EMN8 Creative </strong> <br /> <br /> Assisting producer in talent management, cueing, and other related needs for running show and rehearsals. Planning and managing onstage furniture placement and stage moves. Supervising stage hands/carpenters as needed for all stage moves. <br /> <br /> <strong >Key Accomplishments:</strong> <br /> \u25cf Performing flawlessly while staying calm, focused, and respectful in high-pressure, live situations <br /> \u25cf Working directly with high profile personalities such as: Michelle Obama, Joe Biden, John Legend, Brene Brown, Gwynneth Paltrow, Natalie Portman, and Kanye West <br /> <br /> <strong > Clients Include: Google, VMware, T-Mobile, Cisco, HP, Kia, IBM, Square Enix, Capcom </strong>"}),Object(n.jsx)(Z,{title:"Freelance Speaker Coordinator: 2015\u20132021",content:" <strong > Companies: FNTech, Jack Morton Worldwide </strong> <br /> <br /> Point of contact for all speakers. Managing speaker information on the show website and in the registration database. Managing speaker slide decks and submitting them for client approval. Scheduling rehearsal times and relaying logistics information to presenters before they arrive onsite. Managing speaker support onsite, ensuring that all speakers have successful sessions. <br /> <br /> <strong >Key Accomplishments:</strong> <br /> \u25cf Successfully managing international events, with hundreds of speakers, from start to finish <br /> \u25cf Working diligently to meet speaker needs while staying in scope established by client <br /> \u25cf Collaborating with all departments to set up speakers for successful sessions <br /> <br /> <strong > Clients Include: Facebook, OpenStack, Oculus, Open Compute Project </strong> "}),Object(n.jsx)(C.a,{className:e.subtitle,variant:"h4",align:"center",children:"Education"}),Object(n.jsxs)(C.a,{className:e.text,variant:"h6",children:["\u25cf UC Davis Continuing and Professional Education Bootcamp - Full Stack Web Development",Object(n.jsx)("br",{}),"\u25cf Santa Fe University of Art and Design (formerly College of Santa Fe) - B.A., Moving Image Arts",Object(n.jsx)("br",{}),"\u25cf Lewis & Clark College - Art Major"]})]})})]})},te=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(L,{}),Object(n.jsx)(K,{})]})},ae=a(132),ne=a(133),re=a(134),ce=a(135),ie=a(136),se=a.p+"static/media/Qtrends.795dc4d9.png",oe=a.p+"static/media/travel.38610e28.png",le=a.p+"static/media/burger.71273013.png",de=a.p+"static/media/fitness.3cd9d39c.png",je=a.p+"static/media/weather.f33a0a14.png",he=a.p+"static/media/note-taker.1ba51d06.png",be=a.p+"static/media/coders-corner.9e60fea9.png",me=Object(b.a)({mainContainer:{background:"rgba(38,50,56,0.7)",height:"100%"},header:{color:"white"},cardContainer:(X={maxWidth:345,margin:"3rem"},Object(d.a)(X,"margin","5rem auto"),Object(d.a)(X,"background","#EEE9E9"),X),cardContent:{height:170}}),ge=function(){var e=me();return Object(n.jsxs)(g.a,{component:"div",className:e.mainContainer,children:[Object(n.jsx)(L,{}),Object(n.jsx)(g.a,{component:"header",className:e.header,children:Object(n.jsx)(C.a,{variant:"h4",align:"center",children:"Projects"})}),Object(n.jsxs)(G.a,{container:!0,justify:"center",children:[Object(n.jsx)(G.a,{item:!0,xs:12,sm:8,md:6,children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(re.a,{component:"img",alt:"",height:"100%",image:be}),Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h5",children:"Coder's Corner"}),Object(n.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:"A social network for coding enthusiasts! Coder's Corner is a platform for developers to share resources, network, chat, post their thoughts, and write their own code."})]}),Object(n.jsxs)(ie.a,{children:[Object(n.jsx)(Q.a,{size:"small",variant:"outlined",children:Object(n.jsx)("a",{href:"https://the-coders-corner.herokuapp.com/",target:"blank",children:"Site"})}),Object(n.jsx)(Q.a,{size:"small",variant:"outlined",children:Object(n.jsx)("a",{href:"https://github.com/joeschlick/the-coders-corner",variant:"outlined",target:"blank",children:"Repo"})})]})]})})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:8,md:6,children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(re.a,{component:"img",alt:"",height:"100%",image:se}),Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h5",children:"Quicktrends"}),Object(n.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:"Quicktrends provides our users with essential data, easy to read trend analysis, and breaking news for individual stocks. Enter the ticker symbol and watch the logic unfold."})]}),Object(n.jsxs)(ie.a,{children:[Object(n.jsx)(Q.a,{size:"small",variant:"outlined",children:Object(n.jsx)("a",{href:"https://quicktrends.herokuapp.com/",target:"blank",children:"Site"})}),Object(n.jsx)(Q.a,{size:"small",variant:"outlined",children:Object(n.jsx)("a",{href:"https://github.com/joeschlick/quicktrends-v2",variant:"outlined",target:"blank",children:"Repo"})})]})]})})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:8,md:6,children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(re.a,{component:"img",alt:"",height:"100%",image:oe}),Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h5",children:"The Cynical Traveler's Guide"}),Object(n.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:"Enter a city and state and get a wealth of information: A 5 day weather forecast in case a hurricane is on the way, the latest COVID-19 data, and breaking local news stories to inform me of any current or impending disasters."})]}),Object(n.jsxs)(ie.a,{children:[Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://joeschlick.github.io/team-sac-repo/",target:"blank",children:"Site"})}),Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://github.com/joeschlick/team-sac-repo",target:"blank",children:"Repo"})})]})]})})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:8,md:6,children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(re.a,{component:"img",alt:"",height:"100%",image:le}),Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h5",children:"Eat Da Burger"}),Object(n.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:"A burger logger created with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)"})]}),Object(n.jsxs)(ie.a,{children:[Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://sheltered-savannah-06669.herokuapp.com/",target:"blank",children:"Site"})}),Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://github.com/joeschlick/burger",target:"blank",children:"Repo"})})]})]})})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:8,md:6,children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(re.a,{component:"img",alt:"",height:"100%",image:de}),Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h5",children:"Workout Tracker"}),Object(n.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:"A workout tracker with a Mongo database, Mongoose schema and Express routes"})]}),Object(n.jsxs)(ie.a,{children:[Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://sheltered-inlet-81142.herokuapp.com",target:"blank",children:"Site"})}),Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://github.com/joeschlick/workout-tracker",target:"blank",children:"Repo"})})]})]})})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:8,md:6,children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(re.a,{component:"img",alt:"",height:"100%",image:je}),Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h5",children:"Weather Dashboard"}),Object(n.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:"A browser-based weather app using jQuery and a weather API"})]}),Object(n.jsxs)(ie.a,{children:[Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://joeschlick.github.io/Weather-Dashboard/",target:"blank",children:"Site"})}),Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://github.com/joeschlick/Weather-Dashboard",target:"blank",children:"Repo"})})]})]})})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:8,md:6,children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(re.a,{component:"img",alt:"",height:"100%",image:he}),Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h5",children:"Express Note Taker"}),Object(n.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:"An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file."})]}),Object(n.jsxs)(ie.a,{children:[Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://frozen-stream-80617.herokuapp.com/",target:"blank",children:"Site"})}),Object(n.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:Object(n.jsx)("a",{href:"https://github.com/joeschlick/express-note-taker",target:"blank",children:"Repo"})})]})]})})})]})]})},xe=Object(b.a)({mainContainer:{background:"rgba(38,50,56,0.7)",color:"white",paddingBottom:500},cardContainer:(Y={width:520,margin:"3rem"},Object(d.a)(Y,"margin","3rem auto"),Object(d.a)(Y,"background","#EEE9E9"),Y),cardContent:{height:600,margin:"1rem"}}),pe=function(){var e=xe();return Object(n.jsxs)(g.a,{component:"div",className:e.mainContainer,children:[Object(n.jsx)(L,{}),Object(n.jsx)(g.a,{component:"div",children:Object(n.jsx)(C.a,{variant:"h4",align:"center",children:"Contact Information"})}),Object(n.jsx)(G.a,{container:!0,justify:"center",children:Object(n.jsx)(ae.a,{className:e.cardContainer,children:Object(n.jsxs)(ce.a,{className:e.cardContent,children:[Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h4",children:"Location"}),Object(n.jsx)(C.a,{variant:"h6",children:"Auburn, California"}),Object(n.jsx)("br",{}),Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h4",children:"Mobile"}),Object(n.jsx)(C.a,{variant:"h6",children:"415.377.6370"}),Object(n.jsx)("br",{}),Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h4",children:"Email"}),Object(n.jsx)(Q.a,{href:"mailto: schlickjoe@gmail.com",variant:"outlined",children:"schlickjoe@gmail.com"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h4",children:"GitHub"}),Object(n.jsx)(Q.a,{href:"https://github.com/joeschlick",variant:"outlined",target:"blank",children:"https://github.com/joeschlick"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(C.a,{gutterBottom:!0,variant:"h4",children:"LinkedIn"}),Object(n.jsx)(Q.a,{href:"https://www.linkedin.com/in/joe-schlick-664b503a/",target:"blank",variant:"outlined",children:"https://www.linkedin.com/in/joe-schlick-664b503a"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})})})]})};var ue=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",component:te}),Object(n.jsx)(o.a,{path:"/resume",component:ee}),Object(n.jsx)(o.a,{path:"/portfolio",component:ge}),Object(n.jsx)(o.a,{path:"/contacts",component:pe})]})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,144)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(ue,{})}),document.getElementById("root")),Oe()}},[[91,1,2]]]);
//# sourceMappingURL=main.1c5a0f3f.chunk.js.map
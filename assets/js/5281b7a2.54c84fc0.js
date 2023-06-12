"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"architecture",title:"Architecture"},c=void 0,l={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"In this section a global overview of the Jitsi infrastructure is provided. If you just started contributing to the project, we highly recommend reading this section thoroughly.",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/handbook/docs/architecture",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1686557745,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Introduction",permalink:"/handbook/docs/intro"},next:{title:"Security",permalink:"/handbook/docs/security"}},p={},u=[{value:"Components",id:"components",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2},{value:"Code Map",id:"code-map",level:2},{value:"Testing",id:"testing",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section a global overview of the Jitsi infrastructure is provided. If you just started contributing to the project, we highly recommend reading this section thoroughly."),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"Jitsi comprises a ",(0,i.kt)("a",{parentName:"p",href:"https://jitsi.org/projects/"},"collection of projects"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/jitsi-meet"},"Jitsi Meet")," - WebRTC compatible JavaScript application that uses Jitsi Videobridge to provide high quality, scalable video conferences. Build upon React and React Native."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/jitsi-videobridge"},"Jitsi Videobridge (JVB)")," - WebRTC compatible server designed to route video streams amongst participants in a conference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jitsi/jicofo"},"Jitsi Conference Focus (jicofo)")," - server-side focus component used in Jitsi Meet conferences that manages media sessions and acts as load balancer between each of the participants and the videobridge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jitsi/jigasi"},"Jitsi Gateway to SIP (jigasi)")," - server-side application that allows regular SIP clients to join Jitsi Meet conferences"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jitsi/jibri"},"Jitsi Broadcasting Infrastructure (jibri)")," - set of tools for recording and/or streaming a Jitsi Meet conference that works by launching a Chrome instance rendered in a virtual framebuffer and capturing and encoding the output with ffmpeg.")),(0,i.kt)("p",null,"External Software used by Jitsi:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prosody.im/"},"Prosody")," - XMPP server used for signalling")),(0,i.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,i.kt)("p",null,"The individual connections between the previously described components, as well as their external integrations are described in the figure below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/ArchitectureDiagram.png",alt:null})),(0,i.kt)("p",null,"The external connections can be categorized into two main groups. Firstly, the connections between clients that request a video or audio connection performed through remote requests and data streams. The second category of external connections is those to external services that help store recordings, stream recordings, stream videos or help with creating meetings."),(0,i.kt)("h2",{id:"code-map"},"Code Map"),(0,i.kt)("p",null,"In this section we will look at the main parts of the codebase and see what they can be used for."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"./react/features"),"\nThis folder is where it is best to start writing your code, as it contains most of the app components that are used in the apps on Android and iOS, as well as on the web version. This source folder is split up into all the different features that Jitsi has to offer, such as authentication, chat interaction, keyboard shortcuts, screenshot capture, remote control and virtual background. Each of these features has its own folder in this map, which is then again split up to keep a hierarchy and consistency throughout the code."),(0,i.kt)("p",null,"Each feature folder consists of a subfolder called components, in this folder all of the React, or React Native for mobile, components are expressed. Usually in this folder there will be a separation between native and web components, however in some cases the same component could be used for both Android, iOS and web browser, in which case there is no separation made."),(0,i.kt)("p",null,"As stated before, the codebase mostly consists of React and React Native, which is the React version for mobile applications. Most of the features make use of the so-called class component by React ",(0,i.kt)("sup",{parentName:"p",id:"fnref-class-comp"},(0,i.kt)("a",{parentName:"sup",href:"#fn-class-comp",className:"footnote-ref"},"class-comp")),", however some new features start to use the new way to write functional components by using hooks",(0,i.kt)("sup",{parentName:"p",id:"fnref-func-comp"},(0,i.kt)("a",{parentName:"sup",href:"#fn-func-comp",className:"footnote-ref"},"func-comp")),"."),(0,i.kt)("p",null,"The application makes use of React Redux as well, this is used as a general state store to keep track of important parameters that are used throughout the application. More on React Redux can be found here ",(0,i.kt)("sup",{parentName:"p",id:"fnref-react-redux"},(0,i.kt)("a",{parentName:"sup",href:"#fn-react-redux",className:"footnote-ref"},"react-redux")),"."),(0,i.kt)("p",null,"Most features also contain a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware.js"),". This file acts as a bridge between the component and the functionality of the rest of the application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"./modules/external-api"),"\nIn this folder, the external API can be found. This API can be used in various events like participants joining/leaving the meeting, changes in avatars or chat, as well as errors in using the microphone or camera."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"./android and ./ios"),"\nBoth of these folders contain the basics of the Android and iOS app respectively. However, the code for the application itself and its components can be found in the ",(0,i.kt)("strong",{parentName:"p"},"react/features")," folder, which is explained earlier in this section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"./conference.js"),"\nThis file can be found at the root of the project, and contains the foundation of any interaction between a user and a conference room. This consists of setting up a connection to it, joining the meeting room, muting and unmuting, but also functions to gather information about the participants that are in the room."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"./lang"),"\nThis folder contains all the different translations that are present in Jitsi Meet. The translations can be found in the code with each of the keys in the translation maps that can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"main-[language].json")," files."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"./css"),"\nThis folder contains all the css that is used in the project. The files (mostly .scss files",(0,i.kt)("sup",{parentName:"p",id:"fnref-scss"},(0,i.kt)("a",{parentName:"sup",href:"#fn-scss",className:"footnote-ref"},"scss")),") are split up into features like the React features that they are used in."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"The main form of testing code changes is done through torture tests, next to this the code is tested manually."),(0,i.kt)("p",null,"The torture tests are located in a separate repository, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-torture"},"Jitsi Meet Torture"),". The project contains end to end tests for several key functions such as peer to peer and invites. The testing can be done for iOS, Android and web, which are all the platforms that Jitsi Meet can be used on. The testing is done automatically for pull requests by project members, where it is used in combination with the continuous integration by a Jenkins instance running the tests, testing on the ",(0,i.kt)("a",{parentName:"p",href:"https://meet.jit.si"},"meet.jit.si")," instance. Other members can run the tests locally. The test results can be viewed on an automatically generated web page."),(0,i.kt)("p",null,"Manual testing is performed while doing code reviews, however there are also testing releases that can be freely downloaded and deployed, or can be used on the ",(0,i.kt)("a",{parentName:"p",href:"https://beta.meet.jit.si/"},"beta test server"),"."))}d.isMDXComponent=!0}}]);
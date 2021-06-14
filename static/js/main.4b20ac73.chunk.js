(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(22),s=n.n(o),c=(n(28),n(7)),i=n.n(c),u=n(8),l=n(2),h=n(6),d=n(4),p=n(3),f=(n(30),n(31),n(0)),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!0===e.state.showDetails?e.setState({showDetails:!1}):e.setState({showDetails:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h2",{className:"event-summary",children:n.summary}),Object(f.jsx)("p",{className:"event-location",children:n.location}),t&&Object(f.jsxs)("div",{className:"expanded",children:[Object(f.jsx)("p",{className:"description",children:n.description}),Object(f.jsx)("a",{className:"link",href:n.htmlLink,children:"See details on Google Calendar"})]}),Object(f.jsx)("button",{className:"detailsButton",onClick:function(){return e.handleShowDetails()},children:t?"Hide":"Show more"})]})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(b),g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(b),O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));return 0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(j,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,placeholder:"Name of city",onChange:this.handleInputChanged}),Object(f.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({NumberOfEvents:n}),n<1||n>32?e.setState({infoText:"Please, pick a number between 1 and 32"}):e.setState({infoText:""})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(f.jsxs)("div",{className:"numberOfEvents",children:[Object(f.jsx)("input",{type:"text",className:"event-number-input",value:e,onChange:this.handleInputChanged}),Object(f.jsx)(g,{text:this.state.infoText})]})}}]),n}(a.Component);var y=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:" Welcome to the Meet App"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events aroung the world for full-stack developers"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("a",{href:"https://rl6mfyisw7.execute-api.ap-southeast-2.amazonaws.com/dev/api/get-auth-url",rel:"nofollow noopener",class:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with your Google account"})})]})}),Object(f.jsx)("a",{href:"https://anthropovixen.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy Policy"})]})},k=n(11),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],T=n(10),C=n.n(T),E=n(9),N=n.n(E),Z=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},I=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",S);case 4:return e.next=6,A();case 6:if(!(t=e.sent)){e.next=16;break}return D(),n="https://rl6mfyisw7.execute-api.ap-southeast-2.amazonaws.com/dev/api/get-events/"+t,e.next=12,C.a.get(n);case 12:return(a=e.sent).data&&(r=Z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),N.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,I(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&n){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(r=e.sent){e.next=22;break}return e.next=19,C.a.get("https://rl6mfyisw7.execute-api.ap-southeast-2.amazonaws.com/dev/api/get-auth-url");case 19:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 22:return e.abrupt("return",r&&M(r));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(),n=encodeURIComponent(t),e.next=4,fetch("https://rl6mfyisw7.execute-api.ap-southeast-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",tokenCheck:!1,warningText:""},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?L().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t,locations:n.locations})})):L().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,I(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents()),navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"Cached data is being displayed."});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return!1===this.state.tokenCheck?Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(y,{})}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Meet App"}),Object(f.jsx)("h5",{children:"Choose your nearest city"}),Object(f.jsx)(O,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(f.jsx)("h5",{children:" Number of events you want to see"}),Object(f.jsx)(x,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(f.jsx)(w,{text:this.state.warningText}),Object(f.jsx)("h5",{children:" List of events"}),Object(f.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(23).config("716f15c3c59f431aa2686132ec63f711").install(),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[51,1,2]]]);
//# sourceMappingURL=main.4b20ac73.chunk.js.map
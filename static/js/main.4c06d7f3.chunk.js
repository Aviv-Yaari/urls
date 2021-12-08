(this.webpackJsonpurls=this.webpackJsonpurls||[]).push([[0],{48:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,l,d,s,u,b,p,f=t(0),j=t(8),x=t.n(j),h=t(4),O=t(2),m=t(3),g=t(18),v=Object(O.b)(r||(r=Object(m.a)(["\n   ","\n   * {\n       box-sizing: border-box;\n   }\n   body {\n       font-family: 'Open Sans', sans-serif;\n       color: ",";\n       font-size: ",";\n       line-height: 1.5;\n   }\n   h1,h2,h3,h4,h5,h6 {\n       color: ",";\n       font-weight: 700;\n       margin: 10px 0;\n   }\n   h2 {\n       font-size: 2em;\n   }\n"])),g.a,(function(n){return n.theme.colors.textBody}),(function(n){return n.theme.font.size}),(function(n){return n.theme.colors.textHeading})),y={colors:{primary:"#2684ff",primary2:"#1a61bd",textHeading:"#2a2a2b",textBody:"#404145",background:"#f7f7f7",border:"hsl(0, 0%, 80%)",borderHover:"hsl(0, 0%, 70%)"},font:{size:"0.875rem"}},w=O.d.div(i||(i=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  min-height: 100vh;\n  background: ",";\n"])),(function(n){return n.theme.colors.background})),k=t(6),S=O.d.main(o||(o=Object(m.a)(["\n  padding: 20px;\n  background: #fff;\n  width: 100%;\n  max-width: 1080px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n\n  > label {\n    margin-top: 12px;\n    font-weight: 700;\n  }\n\n  > div:last-child {\n    display: flex;\n    flex-direction: column;\n    flex-basis: 820px;\n    gap: 30px;\n    button {\n      margin-left: auto;\n    }\n  }\n"]))),R={mobile:"480px",tablet:"768px",laptop:"1024px"},C=O.d.button(a||(a=Object(m.a)(["\n  background: ",";\n  padding: 10px 25px;\n  border: none;\n  color: #fff;\n  font-family: inherit;\n  font-weight: 700;\n  border-radius: 20px;\n  cursor: pointer;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.primary2}),(function(n){return n.theme.colors.primary})),U=O.d.form(c||(c=Object(m.a)(["\n  display: flex;\n  align-items: stretch;\n  gap: 20px;\n  flex-direction: column;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n  }\n\n  label {\n    font-weight: 500;\n  }\n  input {\n    width: 100%;\n  }\n"])),R.mobile),E=O.d.div(l||(l=Object(m.a)(["\n  @media (min-width: ",") {\n    flex-basis: 250px;\n  }\n"])),R.mobile),L=O.d.div(d||(d=Object(m.a)(["\n  @media (min-width: ",") {\n    flex-basis: 450px;\n  }\n  position: relative;\n"])),R.mobile),z=O.d.span(s||(s=Object(m.a)(["\n  position: absolute;\n  left: 0;\n  bottom: -20px;\n  font-size: 0.9em;\n  color: #e70000;\n"]))),A=Object(O.d)(C)(u||(u=Object(m.a)(["\n  margin-left: auto;\n"]))),I=U,H=t(21),N=O.d.input(b||(b=Object(m.a)(["\n  outline: none;\n  border: 1px solid ",";\n  font-family: inherit;\n  padding: 8px;\n  border-radius: 4px;\n  transition: all 100ms;\n\n  ","\n"])),(function(n){return n.isError?"red":n.theme.colors.border}),(function(n){return!n.isError&&Object(O.c)(p||(p=Object(m.a)(["\n      &:hover {\n        border-color: ",";\n      }\n\n      &:focus {\n        border-color: ",";\n        box-shadow: 0 0 0 1px ",";\n      }\n    "])),(function(n){return n.theme.colors.borderHover}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}))})),T=t(13),B=Object(T.b)({name:"url",initialState:{options:[{value:"EQUALS",label:"URL is"},{value:"NOT_EQUALS",label:"URL is not"},{value:"CONTAINS",label:"URL contains"},{value:"NOT_CONTAINS",label:"URL not contains"},{value:"PREFIX",label:"URL starts with"},{value:"SUFFIX",label:"URL ends with"}],data:{}},reducers:{add:function(n,e){var t=e.payload,r=t.url,i=t.type;n.data[i]||(n.data[i]=[]),n.data[i].includes(r)||n.data[i].push(r)},remove:function(n,e){var t=e.payload,r=t.url,i=t.type;n.data[i]&&Array.isArray(n.data[i])&&(n.data[i]=n.data[i].filter((function(n){return n!==r})),n.data[i].length||delete n.data[i])}}}),P=B.actions,F=P.add,D=P.remove,J=B.reducer,M=t(1);var Q,X,_,V,Y,q,G,K=function(n){var e=n.type,t=n.options,r=n.onSelectChange,i=Object(f.useState)(""),o=Object(k.a)(i,2),a=o[0],c=o[1],l=Object(f.useState)(null),d=Object(k.a)(l,2),s=d[0],u=d[1],b=Object(h.b)();return Object(M.jsxs)(I,{onSubmit:function(n){if(n.preventDefault(),"/"!==a.charAt(0))return u("URLs must start with '/'");u(null),c(""),b(F({url:a,type:e.value}))},children:[Object(M.jsx)(E,{children:Object(M.jsx)(H.a,{name:"type",options:t,onChange:r,value:e})}),Object(M.jsxs)(L,{children:[Object(M.jsx)(N,{isError:!!s,name:"url",placeholder:"e.g. /index.php",onChange:function(n){c(n.target.value)},value:a}),s&&Object(M.jsx)(z,{children:s})]}),Object(M.jsx)(A,{children:"Add"})]})},W=O.d.div(Q||(Q=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),Z=O.d.section(X||(X=Object(m.a)(["\n  display: flex;\n  gap: 10px;\n  align-items: stretch;\n  flex-direction: column;\n  @media (min-width: ",") {\n    align-items: center;\n    flex-direction: row;\n  }\n  > :first-child {\n    word-break: break-all;\n    @media (min-width: ",") {\n      width: 150px;\n    }\n  }\n"])),R.mobile,R.mobile),$=O.d.ul(_||(_=Object(m.a)(["\n  min-height: 100px;\n  padding: 5px;\n  border: 1px solid ",";\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  flex-grow: 1;\n  gap: 10px;\n"])),(function(n){return n.theme.colors.borderHover})),nn=O.d.button(V||(V=Object(m.a)(["\n  display: flex;\n  padding: 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"]))),en=O.d.div(Y||(Y=Object(m.a)(["\n  display: flex;\n  gap: 4px;\n  background: ",";\n  padding: 5px 10px;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.border})),tn=["title","titleId"];function rn(){return rn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},rn.apply(this,arguments)}function on(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function an(n,e){var t=n.title,r=n.titleId,i=on(n,tn);return f.createElement("svg",rn({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:e,"aria-labelledby":r},i),t?f.createElement("title",{id:r},t):null,q||(q=f.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),G||(G=f.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})))}var cn=f.forwardRef(an);t.p;var ln=function(n){var e=n.url,t=n.onRemove;return Object(M.jsxs)(en,{children:[Object(M.jsx)("span",{children:e}),Object(M.jsx)(nn,{onClick:function(){return t(e)},children:Object(M.jsx)(cn,{width:15,height:15})})]})};var dn=function(n){var e=n.urls,t=n.onRemove;return Object(M.jsx)($,{children:null===e||void 0===e?void 0:e.map((function(n){return Object(M.jsx)(ln,{url:n,onRemove:t},n)}))})};var sn=function(n){var e=n.type,t=n.urls,r=Object(h.b)();return Object(M.jsxs)(Z,{children:[Object(M.jsx)("span",{children:e.label||"Unknown"}),Object(M.jsx)(dn,{urls:t,onRemove:function(n){r(D({url:n,type:e.value}))}})]})};var un,bn,pn,fn,jn,xn=function(n){var e,t,r=n.currentType,i=Object(h.c)((function(n){return n.url.data})),o=Object(h.c)((function(n){return n.url.options}));return Object(M.jsxs)(W,{children:[null===(e=Object.keys(i))||void 0===e?void 0:e.map((function(n){return Object(M.jsx)(sn,{type:o.find((function(e){return e.value===n})),urls:i[n]},n)})),!(null===(t=Object.keys(i))||void 0===t?void 0:t.find((function(n){return n===r.value})))&&Object(M.jsx)(sn,{type:r,urls:i[r]})]})},hn=O.d.section(un||(un=Object(m.a)(["\n  position: fixed;\n  inset: 0;\n  display: grid;\n  place-content: center;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 100;\n"]))),On=O.d.div(bn||(bn=Object(m.a)(["\n  background: #fff;\n  padding: 20px;\n"]))),mn=Object(O.d)(nn)(pn||(pn=Object(m.a)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n"]))),gn=Object(O.d)(On)(fn||(fn=Object(m.a)(["\n  min-width: 280px;\n  max-width: 450px;\n  min-height: 300px;\n  border-radius: 10px;\n\n  h2 {\n    margin-top: 0;\n    border-bottom: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.border})),vn=O.d.p(jn||(jn=Object(m.a)(["\n  margin: 10px 0;\n  span {\n    font-weight: 700;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary2})),yn=gn;var wn=function(n){var e=n.onClose,t=Object(h.c)((function(n){return n.url.data}));return Object(M.jsx)(hn,{onClick:e,children:Object(M.jsxs)(yn,{onClick:function(n){n.stopPropagation()},children:[Object(M.jsx)(mn,{onClick:e,children:Object(M.jsx)(cn,{fill:"#fff",width:40,height:40})}),Object(M.jsx)("h2",{children:"Saved Data"}),Object(M.jsx)("h3",{children:"Your blocked URLs are:"}),Object.entries(t).map((function(n){return Object(M.jsxs)(vn,{children:[Object(M.jsxs)("span",{children:[n[0],": "]}),n[1].join(", ")]},n[0])}))]})})};var kn=function(){var n=Object(h.c)((function(n){return n.url.options})),e=Object(f.useState)(n[0]),t=Object(k.a)(e,2),r=t[0],i=t[1],o=Object(f.useState)(!1),a=Object(k.a)(o,2),c=a[0],l=a[1];return Object(M.jsxs)(M.Fragment,{children:[c&&Object(M.jsx)(wn,{onClose:function(){return l(!1)}}),Object(M.jsxs)(S,{children:[Object(M.jsx)("label",{children:"Block URLs"}),Object(M.jsxs)("div",{children:[Object(M.jsx)(K,{type:r,options:n,onSelectChange:function(n){i(n)}}),Object(M.jsx)(xn,{currentType:r}),Object(M.jsx)(C,{onClick:function(){return l(!0)},children:"Save"})]})]})]})},Sn=Object(T.a)({reducer:{url:J}});var Rn=function(){return Object(M.jsx)(h.a,{store:Sn,children:Object(M.jsxs)(O.a,{theme:y,children:[Object(M.jsx)(v,{}),Object(M.jsx)(w,{children:Object(M.jsx)(kn,{})})]})})};x.a.render(Object(M.jsx)(Rn,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4c06d7f3.chunk.js.map
(this["webpackJsonpteste-qi-tech"]=this["webpackJsonpteste-qi-tech"]||[]).push([[0],{26:function(e,a,c){},27:function(e,a,c){},28:function(e,a,c){},35:function(e,a,c){},36:function(e,a,c){},37:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c.n(t),n=c(20),o=c.n(n),i=(c(26),c(27),c(12)),m=c(3),r=c(18),j=c(8),l=c(2);var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a="https://pokeapi.co/api/v2/pokemon/";return a+=e,fetch(a,{method:"GET"}).then((function(e){return e.json()}))},b=(c(28),c.p+"static/media/pokebola.8956d521.png"),d=c.p+"static/media/steel.6d672946.png",O=c.p+"static/media/fire.867dc9b3.png",u=c.p+"static/media/water.4c97bd3c.png",h=c.p+"static/media/bug.8756ae52.png",g=c.p+"static/media/normal.812eaf8c.png",x=c.p+"static/media/poison.abf776b3.png",N=c.p+"static/media/electric.59a93d6c.png",f=c.p+"static/media/ground.165e4eab.png",v=c.p+"static/media/fighting.787a1299.png",k=c.p+"static/media/pychic.19aef5fd.png",S=c.p+"static/media/rock.5a9b0d09.png",y=c.p+"static/media/flying.f8e33e79.png",T=c.p+"static/media/ghost.adee0730.png",A=c.p+"static/media/ice.4ad1cbc9.png",E=c.p+"static/media/dragon.8fba8add.png",F=c.p+"static/media/dark.0fafd3c6.png",C=c.p+"static/media/fairy.0ae36ddf.png",R=c(0);var L=function(){var e=Object(m.f)(),a=Object(t.useState)({name:"",err:!1,errMsg:""}),c=Object(l.a)(a,2),s=c[0],n=c[1],o=Object(t.useState)([]),i=Object(l.a)(o,2),L=i[0],M=i[1],D=function(e){if(e.currentTarget.checked){Object(r.a)(L);M([].concat(Object(r.a)(L),[e.currentTarget.value]))}};console.log(L);var w=[{label:"FOGO",img:O,value:"fire"},{label:"\xc1GUA",img:u,value:"water"},{label:"INSETO",img:h,value:"bug"},{label:"NORMAL",img:g,value:"normal"},{label:"VENOSO",img:x,value:"poison"},{label:"EL\xc9TRICO",img:N,value:"electric"},{label:"TERRA",img:f,value:"ground"},{label:"LUTADOR",img:v,value:"fighting"},{label:"PS\xcdQUICO",img:k,value:"psychic"},{label:"PEDRA",img:S,value:"rock"},{label:"VOADOR",img:y,value:"flying"},{label:"FANTASMA",img:T,value:"ghost"},{label:"GELO",img:A,value:"ice"},{label:"DRAG\xc3O",img:E,value:"dragon"},{label:"MET\xc1LICO",img:d,value:"steel"},{label:"NOTURNO",img:F,value:"dark"},{label:"FADA",img:C,value:"fairy"}];return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("form",{className:"form",onSubmit:function(a){a.preventDefault(),L.length?e.push("/gh-pages-buscar-pokemon/-".concat(L.join("-"))):p(s.name).then((function(a){n(Object(j.a)(Object(j.a)({},s),{},{errMsg:""})),e.push("/gh-pages-buscar-pokemon/".concat(s.name))})).catch((function(){n(Object(j.a)(Object(j.a)({},s),{},{errMsg:"Ops, esse pokemon n\xe3o existe"}))}))},children:[Object(R.jsxs)("div",{className:"informations-input",children:[Object(R.jsx)("input",{type:"text",onChange:function(e){n(Object(j.a)(Object(j.a)({},s),{},{name:e.currentTarget.value.toLowerCase()}))},value:s.name,className:"input_form",name:"name",placeholder:"Nome do p\xf3kemon"}),Object(R.jsx)("button",{className:"search",type:"submit",children:Object(R.jsx)("img",{className:"pokebola",src:b})})]}),Object(R.jsx)("p",{children:s.errMsg}),Object(R.jsx)("h2",{children:" OU escolha 1 ou mais tipos de Pok\xe9mon"}),Object(R.jsx)("div",{className:"types",children:w.map((function(e){return Object(R.jsxs)("div",{className:"box-type",children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{className:"img-type",src:e.img})}),Object(R.jsx)("label",{children:e.label}),Object(R.jsx)("input",{className:"checkbox",onChange:D,type:"checkbox",value:e.value})]},e.value)}))}),Object(R.jsx)("div",{className:"box-submit",children:Object(R.jsx)("button",{className:"submit",type:"submit",children:"Buscar"})})]})})},M=(c(35),c.p+"static/media/ash.2a88804f.png"),D=c.p+"static/media/title.4acf8d59.png";var w=function(){return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"container-home",children:[Object(R.jsxs)("div",{className:"box",children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{className:"ash",src:M})}),Object(R.jsx)("div",{children:Object(R.jsx)("img",{className:"title",src:D})})]}),Object(R.jsx)(L,{})]})})};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a="https://pokeapi.co/api/v2/type/";return a+=e,fetch(a,{method:"GET"}).then((function(e){return e.json()}))},I=(c(36),c.p+"static/media/girl.0d66d041.png"),P=c.p+"static/media/logo.927812cc.png";var U=function(){var e=Object(m.g)(),a=Object(t.useState)({name:"",photo:""}),c=Object(l.a)(a,2),s=c[0],n=c[1],o=Object(t.useState)([]),i=Object(l.a)(o,2),r=i[0],b=i[1],d=Object(t.useState)([]),O=Object(l.a)(d,2),u=O[0],h=O[1],g=Object(t.useState)([]),x=Object(l.a)(g,2),N=x[0],f=x[1],v=Object(t.useState)([]),k=Object(l.a)(v,2),S=k[0],y=k[1],T=Object(t.useState)([]),A=Object(l.a)(T,2),E=A[0],F=A[1],C=Object(t.useState)([]),L=Object(l.a)(C,2),M=L[0],D=L[1],w=Object(t.useState)([]),U=Object(l.a)(w,2),B=U[0],q=U[1],J=Object(t.useState)([]),V=Object(l.a)(J,2),_=V[0],Q=V[1],z=Object(t.useState)([]),H=Object(l.a)(z,2),K=H[0],W=H[1],X=Object(t.useState)([]),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=Object(t.useState)([]),ae=Object(l.a)(ee,2),ce=ae[0],te=ae[1],se=Object(t.useState)([]),ne=Object(l.a)(se,2),oe=ne[0],ie=ne[1],me=Object(t.useState)([]),re=Object(l.a)(me,2),je=re[0],le=re[1],pe=Object(t.useState)([]),be=Object(l.a)(pe,2),de=be[0],Oe=be[1],ue=Object(t.useState)([]),he=Object(l.a)(ue,2),ge=he[0],xe=he[1],Ne=Object(t.useState)([]),fe=Object(l.a)(Ne,2),ve=fe[0],ke=fe[1],Se=Object(t.useState)([]),ye=Object(l.a)(Se,2),Te=ye[0],Ae=ye[1];return Object(t.useEffect)((function(){e.pokemonName&&("-"===e.pokemonName.charAt(0)?e.pokemonName.split("-").forEach((function(e){G(e).then((function(a){"fire"===e&&b(a.pokemon.map((function(e){return{name:e.pokemon.name}}))),"water"===e&&h([]),"bug"===e&&f([]),"normal"===e&&y([]),"poison"===e&&F([]),"electric"===e&&D([]),"ground"===e&&q([]),"fighting"===e&&Q([]),"psychic"===e&&W([]),"rock"===e&&$([]),"flying"===e&&te([]),"ghost"===e&&ie([]),"ice"===e&&le([]),"dragon"===e&&Oe(),"steel"===e&&xe([]),"dark"===e&&ke([]),"fairy"===e&&Ae([])}))})):p(e.pokemonName).then((function(e){n(Object(j.a)(Object(j.a)({},s),{},{name:e.name,photo:e.sprites.front_default}))})))}),[e.pokemonName]),console.log(r),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"container-results",children:[Object(R.jsx)("div",{className:"box-logo",children:Object(R.jsx)("img",{className:"logo",src:P})}),Object(R.jsxs)("div",{className:"box-results",children:[Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:s.photo}),Object(R.jsx)("hr",{}),Object(R.jsxs)("span",{className:"name-pokemon",children:["Nome: ",s.name]})]}),Object(R.jsx)("div",{className:"box-img-results",children:Object(R.jsx)("img",{className:"img-results",src:I})}),r.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),u.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),N.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),S.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),E.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),M.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),B.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),_.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),K.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),Z.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),ce.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),oe.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),je.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),de.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),ge.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),ve.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})})),Te.map((function(e){return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{className:"photo-pokemon",src:e.photo}),Object(R.jsx)("span",{className:"name-pokemon",children:e.name})]})}))]})]})})};var B=function(){return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(i.a,{children:Object(R.jsxs)(m.c,{children:[Object(R.jsx)(m.a,{path:"/",exact:!0,component:w}),Object(R.jsx)(m.a,{path:"/:pokemonName",component:U})]})})})};var q=function(){return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(B,{})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(a){var c=a.getCLS,t=a.getFID,s=a.getFCP,n=a.getLCP,o=a.getTTFB;c(e),t(e),s(e),n(e),o(e)}))};o.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(q,{})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.5ea3fdba.chunk.js.map
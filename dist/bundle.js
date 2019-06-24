!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){t(1),t(6)},function(n,e,t){var r=t(2);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(3)(!1)).push([n.i,'/* IMPORTING ALL STYLES */\n/* RESET */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n/* From 0-base.sass */\n/* VARIABLES */\n/* SCROLL */\n/* width */\n::-webkit-scrollbar {\n  width: 8px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: black; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #FACE5E; }\n\n/* Main tags */\nbody {\n  font-family: Montserrat;\n  background-color: #f7f7f7;\n  transition: 0.3s; }\n\nsection {\n  padding: 40px;\n  width: 100%; }\n\nh1 {\n  font-size: 48px;\n  text-align: center; }\n\nh2 {\n  font-size: 36px; }\n\na {\n  text-decoration: none;\n  color: black; }\n\n.bold {\n  font-weight: bold; }\n\n.light {\n  font-weight: 200; }\n\n.thin {\n  font-weight: 100; }\n\n#gmap_canvas img {\n  width: 100% !important;\n  background: none !important; }\n\n.whiteFont {\n  color: white; }\n\n.fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 9999;\n  box-shadow: 0px 0px 58px -25px rgba(0, 0, 0, 0.8);\n  transition: 0.5s; }\n\n.flex {\n  display: flex;\n  justify-content: space-between; }\n\n.hidden {\n  display: none; }\n\n.grid {\n  display: grid; }\n\n/* Nav menu */\n.dropdown {\n  opacity: 0;\n  position: absolute;\n  overflow: hidden;\n  top: -21px;\n  padding: 30px;\n  transition: all 0.3s;\n  transform: translateY(100px);\n  will-change: transform;\n  display: none;\n  right: 0; }\n\n.dropdownBackground {\n  width: 750px;\n  min-height: 150px;\n  position: absolute;\n  background: #fff;\n  transform-origin: 50% 0%;\n  justify-content: center;\n  opacity: 0;\n  flex-direction: column;\n  cursor: default; }\n  .dropdownBackground li {\n    padding-bottom: 20px;\n    list-style: none;\n    cursor: default;\n    grid-template-columns: 50% 30% 10% 10%;\n    grid-template-areas: "name price order--amount delete";\n    align-items: center;\n    font-size: 1.4rem; }\n    .dropdownBackground li .name {\n      grid-area: name; }\n    .dropdownBackground li .price {\n      grid-area: price;\n      padding: 0 5px;\n      display: flex;\n      justify-content: flex-end; }\n    .dropdownBackground li .order--amount {\n      grid-area: order--amount;\n      padding: 0 5px;\n      text-align: center;\n      display: flex;\n      justify-content: flex-end; }\n    .dropdownBackground li .delete {\n      grid-area: delete;\n      font-size: 30px;\n      width: 40px;\n      height: 40px;\n      border: 1px solid black;\n      cursor: pointer;\n      margin-left: auto;\n      margin-right: 0; }\n\n@media screen and (max-width: 1150px) {\n  .dropdown {\n    top: -15px; }\n  .dropdownBackground {\n    width: 100%;\n    padding: 2rem; }\n    .dropdownBackground li {\n      padding-bottom: 2rem;\n      font-size: 1.8rem; }\n      .dropdownBackground li .price {\n        display: flex;\n        justify-content: flex-end; }\n      .dropdownBackground li .order--amount {\n        margin-left: auto;\n        margin-right: 0; }\n      .dropdownBackground li .delete {\n        display: flex;\n        justify-content: center;\n        width: 60px;\n        height: 60px; } }\n\n.priceContainer {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center; }\n  .priceContainer .priceItem {\n    display: flex;\n    font-size: 1.8rem; }\n  .priceContainer .orderButton {\n    display: flex;\n    height: 50px;\n    width: 120px;\n    border: none;\n    font-size: 1.4rem;\n    justify-content: center;\n    cursor: pointer; }\n\n@media screen and (max-width: 1150px) {\n  .priceItem {\n    font-size: 2rem; } }\n\n.open {\n  opacity: 1; }\n\n.disabled {\n  background: #f1f1f1;\n  color: white; }\n\n.primary-background {\n  background: #FACE5E; }\n\n/* HEADER */\nnav {\n  width: 100%;\n  height: 100px;\n  background: white; }\n  nav .wrapper {\n    width: 100%;\n    height: 100px;\n    padding: 6px 30px;\n    background: white;\n    transition: 1s; }\n    nav .wrapper .logo {\n      display: flex;\n      width: 140px;\n      align-content: center;\n      justify-content: center;\n      z-index: 9999; }\n    nav .wrapper .menu__full {\n      padding-top: 16px;\n      display: inline-flex;\n      list-style: none;\n      text-decoration: none;\n      align-items: center;\n      font-size: 1.5rem; }\n      nav .wrapper .menu__full > li {\n        padding-right: 35px;\n        font-weight: 300;\n        color: #000; }\n      nav .wrapper .menu__full .delivery {\n        margin-left: 10px;\n        border-radius: 20px;\n        cursor: pointer;\n        padding: 6px; }\n      nav .wrapper .menu__full a:hover {\n        color: #ff7f2a;\n        transition: 0.2s ease; }\n    @media screen and (max-width: 1150px) {\n      nav .wrapper .menu__full {\n        font-size: 2rem; } }\n\n/* Hero */\n.hero .parallax, .contact .parallax {\n  min-height: 400px;\n  object-fit: contain;\n  width: auto;\n  padding-top: calc(300px/2); }\n\n.hero .hero--belt, .contact .hero--belt {\n  min-height: 230px;\n  width: 100%;\n  margin-top: -15px;\n  padding: 60px;\n  display: inline-flex;\n  justify-content: space-around;\n  font-size: 24px;\n  text-transform: uppercase;\n  text-align: center; }\n  .hero .hero--belt p, .contact .hero--belt p {\n    margin: auto;\n    padding: 10px;\n    display: block;\n    justify-content: space-around;\n    font-size: 24px;\n    text-align: center; }\n\n@media screen and (max-width: 1150px) {\n  .hero .hero--belt, .contact .hero--belt {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: left; }\n    .hero .hero--belt .column, .contact .hero--belt .column {\n      margin: auto; }\n      .hero .hero--belt .column p, .contact .hero--belt .column p {\n        display: inline-flex; } }\n\n/* Break */\n.break {\n  padding: 120px 0;\n  min-height: 400px;\n  width: 100%;\n  background: white;\n  align-items: center; }\n  .break img {\n    width: 120px;\n    height: 120px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto; }\n  .break h1, .break h2 {\n    text-align: center;\n    margin: 20px; }\n\n/* Services */\n.services .row {\n  width: 100%;\n  padding: 40px;\n  min-height: 480px;\n  background: white;\n  display: inline-flex;\n  justify-content: space-around;\n  margin: auto; }\n  .services .row .stage img {\n    width: 380px;\n    height: auto; }\n  .services .row .stage h2 {\n    width: 380px;\n    text-align: center;\n    padding-top: 30px;\n    line-height: 36px; }\n\n@media screen and (max-width: 1150px) {\n  .services .row {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: auto; }\n    .services .row .stage {\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      align-items: center; }\n      .services .row .stage img {\n        width: 720px;\n        height: auto; }\n      .services .row .stage h2 {\n        text-align: center;\n        width: 80%;\n        padding: 30px; } }\n\n.menu {\n  padding: 40px;\n  background: black; }\n  .menu .menu--title {\n    color: #fff;\n    display: inline;\n    text-align: center; }\n    .menu .menu--title h1 {\n      padding-bottom: 30px; }\n  .menu .menu--list {\n    background: #000;\n    list-style: none;\n    text-decoration: none; }\n    .menu .menu--list li {\n      background: #FACE5E;\n      width: 100%;\n      min-height: 6rem;\n      align-items: center;\n      margin-bottom: 10px;\n      padding: 20px; }\n    .menu .menu--list .dish {\n      display: grid;\n      grid-template-columns: 200px 1.0fr 0.1fr auto 0.1fr 0.1fr 0.1fr;\n      grid-template-rows: 2fr;\n      grid-template-areas: "name ingredients price buttons add amount substract";\n      font-size: 1.6rem; }\n      .menu .menu--list .dish .name {\n        grid-area: name;\n        padding-right: 1em; }\n      .menu .menu--list .dish .ingredients {\n        grid-area: ingredients;\n        justify-content: flex-start;\n        text-align: left;\n        font-size: 1.4rem; }\n      .menu .menu--list .dish .price {\n        grid-area: price;\n        padding: 0 1rem; }\n      .menu .menu--list .dish .button-wrapper {\n        grid-area: buttons; }\n      .menu .menu--list .dish .add {\n        grid-area: add; }\n      .menu .menu--list .dish .amount {\n        grid-area: amount; }\n      .menu .menu--list .dish .substract {\n        grid-area: substract; }\n  .menu img {\n    width: 60%;\n    display: flex;\n    justify-content: center;\n    margin: auto; }\n\n/*Menu*/\n/* Contact */\n.contact {\n  padding: 40px; }\n\n/* Review */\nfooter {\n  height: 170px;\n  background: #05090A;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: auto; }\n  footer ul {\n    text-decoration: none;\n    list-style: none; }\n    footer ul li {\n      color: #fff;\n      font-size: 20px;\n      padding-bottom: 4px; }\n  footer .inline {\n    display: inline-flex; }\n    footer .inline li {\n      padding: 10px;\n      font-size: 24px; }\n    footer .inline a {\n      color: #fff; }\n    footer .inline a:hover {\n      color: #ff7f2a;\n      cursor: pointer;\n      transition: 0.4s; }\n',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var c=n[a];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),s=null,d=0,u=[],l=t(5);function p(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(x(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(x(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function f(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function m(n,e){var t=c(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),u.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(n.insertAt.before,t);t.insertBefore(e,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=u.indexOf(n);e>=0&&u.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return v(e,n.attrs),m(n,e),e}function v(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function x(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=d++;t=s||(s=h(e)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(e,n.attrs),m(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,e),o=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){g(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return p(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(c=i[a.id]).refs--,r.push(c)}n&&p(f(n,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var b,y=(b=[],function(n,e){return b[n]=e,b.filter(Boolean).join("\n")});function w(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){"use strict";t.r(e);t(7),t(8),t(9),t(10),t(11)},function(n,e){var t=document.querySelectorAll(".delivery"),r=document.querySelectorAll(".list-init"),o=document.querySelectorAll(".list > li"),i=document.querySelector(".dropdownBackground");function a(){var n=this;this.classList.add("trigger-enter"),setTimeout(function(){return n.classList.contains("trigger-enter")&&n.classList.add("trigger-enter-active")},100),i.classList.add("open"),i.style.display="inline-flex",o.forEach(function(n){return n.classList.add("open")})}function c(){this.classList.remove("trigger-enter","trigger-enter-active"),i.classList.remove("open"),i.style.display="none"}r.forEach(function(n){return n.addEventListener("mouseover",a)}),t.forEach(function(n){return n.addEventListener("mouseleave",c)})},function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var i=[{name:"Margarita",amount:"0",price:24.99,ingredients:"basil, tomato saunce, cheese, mushroom",size:["S","M","L"],id:0},{name:"Italiana",amount:"0",price:24.99,ingredients:"basil, tomato saunce, cheese, mushroom, basil, tomato saunce, cheese",size:["S","M","L"],id:1},{name:"Napoleoni",amount:"0",price:29.99,ingredients:"basil, oregano, tomato, tomato saunce, cheese, mushroom",size:["S","M","L"],id:2},{name:"4 Cheeses",amount:"0",price:26.99,ingredients:"cheese, ementaler, gouda, tomato saunce, cheese, mushroom, basil, tomato saunce, cheese, mushroom",size:["S","M","L"],id:3},{name:"Chineese",amount:"0",price:34.99,ingredients:"fish, oregano, tomato, garlic saunce, chicken, mushroom, basil, tomato, saunce, cheese, shitake",size:["S","M","L"],id:4},{name:"Sea Food",amount:"0",price:45.99,ingredients:"lobster, shrimps, tiger shrimps, tuna, fish, eel, lavender, sea salt, cheese",size:["S","M","L"],id:5}],a=function(){function n(){o(this,n)}return r(n,null,[{key:"displayMenu",value:function(){c.getPizza().forEach(function(e){return n.addMenu(e)}),c.ordered(),n.createCard(),n.hideCard(),c.getPrice(),n.createPrice(),n.showPrice(),n.createButton(),n.updateButton()}},{key:"addMenu",value:function(n){var e=document.querySelector(".menu--list"),t=document.createElement("li");t.classList="dish",t.innerHTML='<div class="name bold">'.concat(n.name,'</div>\n        <div class="ingredients">Ingredients: ').concat(n.ingredients,'</div>\n        <div class="price">').concat(n.price,'$</div>\n        <button class="add" name = "amount">+</button>\n        <span class="amount" id = "amount').concat(n.id,'">').concat(n.amount,'</span>\n        <button class="substract" name = "amount">-</button>'),e.appendChild(t)}},{key:"shopCard",value:function(n){var e=document.querySelector(".dropdownBackground"),t=document.createElement("li");t.classList="open",t.classList="bag".concat(n.id),t.innerHTML='\n    <div class="name bold">'.concat(n.name,'</div>\n    <div class="price">').concat(n.price,'$</div>\n    <span class="order--amount" id = "order--amount').concat(n.id,'">').concat(n.amount,'</span>\n    <button class="delete delete').concat(n.id,'">X</button>\n    '),e.appendChild(t)}},{key:"createCard",value:function(){c.getPizza().forEach(function(e){e.amount&&n.shopCard(e)})}},{key:"hideCard",value:function(){for(var n=c.getPizza(),e=0;e<n.length;e++){var t=document.querySelector(".bag".concat(e));0==n[e].amount?(t.classList.add("hidden"),t.classList.remove("grid")):(t.classList.remove("hidden"),t.classList.add("grid"))}}},{key:"createButton",value:function(){var n=document.querySelector(".dropdownBackground"),e=document.querySelector(".priceContainer"),t=document.createElement("form"),r=document.createElement("input");r.type="submit",r.value="ORDER",r.classList="orderButton bold flex",r.formAction="/ordered.html",t.appendChild(r),n.appendChild(e),e.appendChild(t)}},{key:"updateButton",value:function(){var n=c.getPrice(),e=document.querySelector(".orderButton");0==n?(e.classList.add("disabled"),e.classList.remove("primary-background")):(e.classList.remove("disabled"),e.classList.add("primary-background"))}},{key:"updateCard",value:function(){for(var n=c.getPizza(),e=document.querySelectorAll(".order--amount"),t=0;t<e.length;t++)parseInt(e[t].innerText)!==parseInt(n[t].amount)&&(e[t].innerText=n[t].amount)}},{key:"updateMenu",value:function(){for(var n=c.getPizza(),e=document.querySelectorAll(".amount"),t=0;t<e.length;t++)parseInt(e[t].innerText)!==parseInt(n[t].amount)&&(e[t].innerText=n[t].amount)}},{key:"amountCatch",value:function(n){var e,t;n.classList.contains("add")?(t=1,e=n.nextElementSibling):(t=-1,e=n.previousElementSibling),e.innerText>=0?e.innerText=parseInt(e.innerText)+t:(t=-1,e.innerText=0)}},{key:"createPrice",value:function(){var n=document.querySelector(".dropdownBackground"),e=document.createElement("span"),t=document.createElement("span");t.classList="priceItem",e.classList="priceContainer",n.appendChild(e),e.appendChild(t)}},{key:"showPrice",value:function(){var n,e,t=document.querySelector(".priceItem");n=c.getPrice(),e=c.roundPrice(n,2),t.innerText=n>0?"Price: ".concat(e,"$"):"Your card is empty..."}},{key:"deleteCatch",value:function(n){for(var e=n.previousElementSibling.innerText,t=document.querySelectorAll(".delete"),r=0;r<t.length;r++)n.classList.contains("delete".concat(r))&&c.deleteOrder(e,r)}}]),n}(),c=function(){function n(){o(this,n)}return r(n,null,[{key:"getPizza",value:function(){var n;return null===localStorage.getItem("pizzas")?n=[].concat(i):window.alert("There is something wrong... :("),n}},{key:"deleteOrder",value:function(n,e){var t=this.getPizza();n>0&&(t[e].amount="0"),a.updateCard()}},{key:"ordered",value:function(){for(var n=document.querySelectorAll(".amount"),e=[],t=0;t<n.length;t++){var r=document.getElementById("amount".concat(t)).innerText;e.push(r),i[t].amount=e[t]}}},{key:"getPrice",value:function(){var e,t,r=[];return n.getPizza().forEach(function(n){e=n.amount*n.price,r.push(e),t=r.reduce(function(n,e){return n+e})}),t}},{key:"roundPrice",value:function(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}}]),n}();document.addEventListener("DOMContentLoaded",a.displayMenu),document.addEventListener("click",function(){a.updateCard(),a.hideCard(),a.updateMenu(),a.updateButton(),c.getPrice(),a.showPrice()}),document.querySelector(".menu--list").addEventListener("click",function(n){if("amount"!=n.target.name)return 0;a.amountCatch(n.target),c.ordered(),console.log(n.target)}),document.querySelector(".dropdownBackground").addEventListener("click",function(n){if("BUTTON"!=n.target.tagName)return 0;a.deleteCatch(n.target)}),document.querySelectorAll('a[href^="#"]').forEach(function(n){n.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})},function(n,e){window.addEventListener("scroll",function(n){var e=document.querySelector(".parallax"),t=window.pageYOffset;e.style.backgroundPositionY=.5*t+"px"})},function(n,e){var t=document.querySelector(".wrapper"),r=t.offsetTop;window.addEventListener("scroll",function(){window.scrollY>r?t.classList.add("fixed"):t.classList.remove("fixed")})},function(n,e){}]);
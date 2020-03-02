(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],h=0,d=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.changeWeatherBackground(),attrs:{id:"app"}},[a("main",[a("div",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.query},on:{keypress:e.fetchWeather,input:function(t){t.target.composing||(e.query=t.target.value)}}})]),"undefined"!=typeof e.weatherData.main?a("div",{staticClass:"weather-wrapper"},[a("div",{staticClass:"location-box"},[a("div",{staticClass:"location"},[e._v(e._s(e.weatherData.name)+", "+e._s(e.weatherData.sys.country))]),a("div",{staticClass:"date"},[e._v(e._s(e.getCurrentDate()))])]),a("div",{staticClass:"weather-box"},[a("div",{staticClass:"temperature"},[a("span",[e._v(e._s(Math.round(e.weatherData.main.temp))+"°")]),a("span",{staticClass:"degree-letter"},[e._v("C")])]),a("div",{staticClass:"weather"},[e._v(e._s(e.weatherData.weather[0].main))])])]):e._e()])])},o=[],s=(a("99af"),a("caad"),a("d3b7"),a("2532"),a("96cf"),a("1da1")),i={name:"App",data:function(){return{API_key:"e14a2d57a1361704e93fd82b3ff3069f",URL_base:"https://api.openweathermap.org/data/2.5/",query:"",weatherData:{}}},methods:{fetchWeather:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("Enter"!=e.key){a.next=10;break}return a.next=3,fetch("".concat(t.URL_base,"weather?q=").concat(t.query,"&units=metric&APPID=").concat(t.API_key));case 3:return r=a.sent,console.log(r),a.next=7,r.json();case 7:n=a.sent,console.log(n),t.setResults(n);case 10:case"end":return a.stop()}}),a)})))()},setResults:function(e){this.weatherData=e},changeWeatherBackground:function(){var e="";return"undefined"!==typeof this.weatherData.main&&(this.weatherData.main.temp>16?this.weatherData.weather[0].main.includes("Haze")?e="hazy":this.weatherData.weather[0].main.includes("Cloud")?e="cloudy":this.weatherData.weather[0].main.includes("Clear")&&(e="warm"):this.weatherData.main.temp<16?this.weatherData.weather[0].main.includes("Cloud")?e="overcast":this.weatherData.weather[0].main.includes("Snow")?e="snowy":this.weatherData.weather[0].main.includes("Clear")&&(e="cool"):e="",this.weatherData.weather[0].main.includes("Rain")&&(e="rainy"),console.log(this.weatherData.weather[0].main)),e},getCurrentDate:function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],r=t[e.getDay()],n=e.getDate(),o=a[e.getMonth()],s=e.getFullYear();return"".concat(r," ").concat(n," ").concat(o," ").concat(s)}},components:{}},c=i,u=(a("034f"),a("2877")),l=Object(u["a"])(c,n,o,!1,null,null,null),h=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.f2501160.js.map
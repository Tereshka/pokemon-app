(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{24:function(e,a,n){e.exports=n(34)},32:function(e,a,n){},34:function(e,a,n){"use strict";n.r(a);var t=n(3),m=n.n(t),c=n(17),r=n(7),o=n(23),s=n(14),l=n(18),i=n(11);function p(){var e=Object(l.a)(["\n  query pokemons($first: Int!) {\n    pokemons(first: $first) {\n      id\n      name\n      image\n      maxHP\n      maxCP\n      attacks {\n        special {\n          name\n          damage\n        }\n      }\n    }   \n  }\n"]);return p=function(){return e},e}var u=n.n(i)()(p());function k(e){var a=e.pokemon,n=a.attacks.special.slice(0,3).map((function(e){return m.a.createElement("span",{key:"".concat(e.name,"-").concat(e.damage)},e.name," / ",e.damage)}));return m.a.createElement("div",{className:"pokemon"},m.a.createElement("div",{className:"pokemon__name"},m.a.createElement("span",{className:"meta"},a.maxHP),m.a.createElement("span",{className:"name"},a.name),m.a.createElement("span",{className:"meta"},a.maxCP)),m.a.createElement("div",{className:"pokemon__image"},m.a.createElement("img",{src:a.image,alt:a.name})),m.a.createElement("div",{className:"pokemon__attacks"},n))}function d(){var e=Object(s.a)(u,{variables:{first:10}}).data,a=(e=void 0===e?{}:e).pokemons,n=void 0===a?[]:a,t=n.map((function(e){return m.a.createElement(k,{key:"pokemon-".concat(e.id),pokemon:e})}));return m.a.createElement("div",{className:"container"},n&&t)}n(32);var E=function(){var e=new o.a({uri:"https://graphql-pokemon.now.sh"});return m.a.createElement(r.a,{client:e},m.a.createElement("main",null,m.a.createElement(d,null)))};Object(c.render)(m.a.createElement(m.a.StrictMode,null,m.a.createElement(E,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d419fe0e.chunk.js.map
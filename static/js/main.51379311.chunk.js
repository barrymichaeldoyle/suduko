(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{20:function(n,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a}));var t=r(8),c=function(){return{type:t.a}},o=function(n,e){return{coords:e,type:t.b,value:n}},a=function(n){return{coords:n,type:t.c}}},21:function(n,e){},26:function(n,e,r){"use strict";var t=r(13);var c=function(n){for(var e=0;e<9;e++)for(var r=0;r<9;r++)if(0===n[e][r])return!1;return!0};var o=function n(e,r){if(!Array.isArray(e)&&!Array.isArray(r))return e===r;if(e.length!==r.length)return!1;for(var t=0,c=e.length;t<c;t++)if(!n(e[t],r[t]))return!1;return!0};var a=function(n){for(var e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],r=0;r<9;r++){e[r]=[0,0,0,0,0,0,0,0,0];for(var t=0;t<9;t++)e[r][t]=n[r][t]}return e};var l=function(){var n=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];return u(n),n},i=[1,2,3,4,5,6,7,8,9];var u=function n(e){for(var r=0,t=0,o=0;o<81;o++)if(t=o%9,0===e[r=Math.floor(o/9)][t]){g(i);var a=!0,l=!1,u=void 0;try{for(var f,b=i[Symbol.iterator]();!(a=(f=b.next()).done);a=!0){var k=f.value;if(!v({grid:e,row:r,value:k})&&!s({col:t,grid:e,value:k})){var j=d({grid:e,row:r,col:t});if(!h({square:j,value:k})){if(e[r][t]=k,c(e))return!0;if(n(e))return!0}}}}catch(O){l=!0,u=O}finally{try{a||null==b.return||b.return()}finally{if(l)throw u}}break}e[r][t]=0};var f=function(){return Math.floor(Math.random()*Math.floor(9))};var d=function(n){var e=n.col,r=n.grid,t=n.row,c=[];if(t<3)if(e<3)for(var o=0;o<3;o++)c.push([r[o][0],r[o][1],r[o][2]]);else if(e<6)for(var a=0;a<3;a++)c.push([r[a][3],r[a][4],r[a][5]]);else for(var l=0;l<3;l++)c.push([r[l][6],r[l][7],r[l][8]]);else if(t<6)if(e<3)for(var i=3;i<6;i++)c.push([r[i][0],r[i][1],r[i][2]]);else if(e<6)for(var u=3;u<6;u++)c.push([r[u][3],r[u][4],r[u][5]]);else for(var f=3;f<6;f++)c.push([r[f][6],r[f][7],r[f][8]]);else if(e<3)for(var d=6;d<9;d++)c.push([r[d][0],r[d][1],r[d][2]]);else if(e<6)for(var s=6;s<9;s++)c.push([r[s][3],r[s][4],r[s][5]]);else for(var v=6;v<9;v++)c.push([r[v][6],r[v][7],r[v][8]]);return c};var s=function(n){for(var e=n.col,r=n.grid,t=n.value,c=0;c<9;c++)if(t===r[c][e])return!0;return!1};var v=function(n){var e=n.grid,r=n.row,t=n.value;return e[r].includes(t)},b=r(10);var h=function(n){var e=n.square,r=n.value;return[].concat(Object(b.a)(e[0]),Object(b.a)(e[1]),Object(b.a)(e[2])).includes(r)},k={counter:0};var j=function(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;e>0;){for(var r=f(),t=f();0===n[r][t];)r=f(),t=f();var c=n[r][t];n[r][t]=0;var o=a(n);k.counter=0,p(o),1!==k.counter&&(n[r][t]=c,e-=1)}return n};var g=function(n){for(var e=n.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),t=[n[r],n[e]];n[e]=t[0],n[r]=t[1]}},O=[1,2,3,4,5,6,7,8,9];var p=function n(e){for(var r=0,t=0,o=0;o<81;o++)if(t=o%9,0===e[r=Math.floor(o/9)][t]){var a=!0,l=!1,i=void 0;try{for(var u,f=O[Symbol.iterator]();!(a=(u=f.next()).done);a=!0){var b=u.value;if(!v({grid:e,row:r,value:b})&&!s({col:t,grid:e,value:b})){var j=d({grid:e,row:r,col:t});if(!h({square:j,value:b})){if(e[r][t]=b,c(e)){k.counter++;break}if(n(e))return!0}}}}catch(g){l=!0,i=g}finally{try{a||null==f.return||f.return()}finally{if(l)throw i}}break}e[r][t]=0},m=r(8),x={};e.a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.a:var r=l(),c=a(r),i=j(c);return Object(t.a)({},n,{challengeGrid:i,solvedGrid:r,workingGrid:a(i)});case m.b:if(n.workingGrid&&n.solvedGrid){if(n.solvedGrid[e.coords[0]][e.coords[1]]!==e.value)return alert("Incorrect option!"),n;if(n.workingGrid[e.coords[0]][e.coords[1]]=e.value,o(n.workingGrid,n.solvedGrid)&&alert("Completed!"),n.workingGrid)return Object(t.a)({},n)}return n;case m.c:return Object(t.a)({},n,{selectedBlock:e.coords});default:return n}}},29:function(n,e,r){n.exports=r(40)},4:function(n,e,r){"use strict";var t=r(26),c=r(20);r.d(e,"createFullGrid",(function(){return c.a})),r.d(e,"fillBlock",(function(){return c.b})),r.d(e,"selectBlock",(function(){return c.c}));r(21);e.default=t.a},40:function(n,e,r){"use strict";r.r(e);var t=r(0),c=r.n(t),o=r(12),a=r.n(o),l=r(5),i=r(1),u=r(10),f=r(3),d=r(4),s=r(2);function v(){var n=Object(s.a)(["\n    align-items: center;\n    background-color: ",";\n    border: solid 1px ",";\n    cursor: pointer;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 0;\n    font-weight: ",";\n    font-size: 20px;\n    height: auto;\n    justify-content: center;\n    transition: ",";\n    user-select: none;\n\n    &:before {\n      padding-top: 100%;\n      content: '';\n      float: left;\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  "]);return v=function(){return n},n}function b(){var n=Object(s.a)(["\n  ","\n"]);return b=function(){return n},n}var h=i.d.div(b(),(function(n){var e=n.active,r=n.puzzle,t=n.theme;return Object(i.c)(v(),e?t.colors.blue:t.colors.white,t.colors.black,r?"bold":"normal",t.transition,t.colors.lightBlue)})),k=function(n){var e=n.colIndex,r=n.rowIndex,t=Object(l.c)((function(n){var t=n.grid,c=t.challengeGrid,o=t.selectedBlock,a=t.solvedGrid,l=t.workingGrid;return{isActive:!!o&&(o[0]===r&&o[1]===e),isPuzzle:!(!c||0===c[r][e]),solvedValue:a?a[r][e]:0,value:l?l[r][e]:0}})),o=Object(l.b)();return c.a.createElement(h,{active:t.isActive,"data-cy":"block-container-".concat(r,"-").concat(e),onClick:function(){t.isActive||o(Object(d.selectBlock)([r,e]))},puzzle:t.isPuzzle},0===t.value?"":t.value)};function j(){var n=Object(s.a)(["\n    display: flex;\n    flex-flow: row;\n\n    &:nth-child(1) {\n      div {\n        border-top: solid 4px ",";\n      }\n    }\n    &:nth-child(3),\n    &:nth-child(6) {\n      div {\n        border-bottom: solid 3px ",";\n      }\n    }\n    &:nth-child(9) {\n      border-bottom: solid 4px ",";\n    }\n\n    div {\n      &:nth-child(1) {\n        border-left: solid 4px ",";\n      }\n      &:nth-child(3),\n      &:nth-child(6),\n      &:nth-child(9) {\n        border-right: solid 4px ",";\n      }\n      &:nth-child(4),\n      &:nth-child(7) {\n        border-left: none;\n      }\n    }\n  "]);return j=function(){return n},n}function g(){var n=Object(s.a)(["\n  ","\n"]);return g=function(){return n},n}function O(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return O=function(){return n},n}var p=i.d.div(O()),m=i.d.div(g(),(function(n){var e=n.theme;return Object(i.c)(j(),e.colors.black,e.colors.black,e.colors.black,e.colors.black,e.colors.black)})),x=function(){var n=Object(l.c)((function(n){var e=n.grid,r=e.selectedBlock,t=e.workingGrid;return{selectedBlock:r,selectedValue:t&&r?t[r[0]][r[1]]:0}})),e=Object(l.b)(),r=Object(t.useCallback)((function(){return e(Object(d.createFullGrid)())}),[e]),o=Object(t.useCallback)((function(r){n.selectedBlock&&0===n.selectedValue&&e(Object(d.fillBlock)(r,n.selectedBlock))}),[e,n.selectedBlock,n.selectedValue]);return Object(f.a)(["1"],(function(){return o(1)})),Object(f.a)(["2"],(function(){return o(2)})),Object(f.a)(["3"],(function(){return o(3)})),Object(f.a)(["4"],(function(){return o(4)})),Object(f.a)(["5"],(function(){return o(5)})),Object(f.a)(["6"],(function(){return o(6)})),Object(f.a)(["7"],(function(){return o(7)})),Object(f.a)(["8"],(function(){return o(8)})),Object(f.a)(["9"],(function(){return o(9)})),Object(f.a)("down",(function(){n.selectedBlock&&n.selectedBlock[0]<8&&e(Object(d.selectBlock)([n.selectedBlock[0]+1,n.selectedBlock[1]]))})),Object(f.a)("left",(function(){n.selectedBlock&&n.selectedBlock[1]>0&&e(Object(d.selectBlock)([n.selectedBlock[0],n.selectedBlock[1]-1]))})),Object(f.a)("right",(function(){n.selectedBlock&&n.selectedBlock[1]<8&&e(Object(d.selectBlock)([n.selectedBlock[0],n.selectedBlock[1]+1]))})),Object(f.a)("up",(function(){n.selectedBlock&&n.selectedBlock[0]>0&&e(Object(d.selectBlock)([n.selectedBlock[0]-1,n.selectedBlock[1]]))})),Object(t.useEffect)((function(){r()}),[r]),c.a.createElement(p,{"data-cy":"grid-container"},t.Children.toArray(Object(u.a)(Array(9)).map((function(n,e){return c.a.createElement(m,{"data-cy":"grid-row-container"},t.Children.toArray(Object(u.a)(Array(9)).map((function(n,r){return c.a.createElement(k,{colIndex:r,rowIndex:e})}))))}))))};function y(){var n=Object(s.a)(["\n        opacity: 0.4;\n        pointer-events: none;\n      "]);return y=function(){return n},n}function w(){var n=Object(s.a)(["\n    align-items: center;\n    background-color: ",";\n    border: 2px solid ",";\n    border-radius: 4px;\n    box-shadow: ;\n    color: ",";\n    cursor: pointer;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 0;\n    font-size: 20px;\n    font-weight: bold;\n    height: auto;\n    justify-content: center;\n    margin: 4px 2px;\n    opacity: 0.9;\n    transition: ",";\n\n    &:before {\n      padding-top: 125%;\n      content: '';\n      float: left;\n    }\n\n    &:focus {\n      border-color: ",";\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.6;\n    }\n\n    ","\n  "]);return w=function(){return n},n}function B(){var n=Object(s.a)(["\n  ","\n"]);return B=function(){return n},n}var E=i.d.button(B(),(function(n){var e=n.disabled,r=n.theme;return Object(i.c)(w(),r.colors.black,r.colors.black,r.colors.white,r.transition,r.colors.blue,e&&Object(i.c)(y()))})),C=function(n){var e=n.value,r=Object(l.c)((function(n){var e=n.grid,r=e.selectedBlock,t=e.workingGrid;return{selectedBlock:r,selectedValue:t&&r?t[r[0]][r[1]]:0}})),o=Object(l.b)(),a=Object(t.useCallback)((function(){r.selectedBlock&&0===r.selectedValue&&o(Object(d.fillBlock)(e,r.selectedBlock))}),[o,r.selectedBlock,r.selectedValue,e]);return c.a.createElement(E,{onClick:a},e)};function G(){var n=Object(s.a)(["\n  display: flex;\n  flex-flow: row;\n"]);return G=function(){return n},n}var A=i.d.div(G()),z=function(){return c.a.createElement(A,null,[1,2,3,4,5,6,7,8,9].map((function(n){return c.a.createElement(C,{key:n,value:n})})))};function I(){var n=Object(s.a)(["\n    background-color: ",";\n    border-radius: 15px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    max-height: fit-content;\n    padding: 15px;\n  "]);return I=function(){return n},n}function F(){var n=Object(s.a)(["\n  ","\n"]);return F=function(){return n},n}var L=i.d.div(F(),(function(n){var e=n.theme;return Object(i.c)(I(),e.colors.white)}));function M(){var n=Object(s.a)(["\n  max-width: 500px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return M=function(){return n},n}var V=i.d.div(M());function S(){var n=Object(s.a)(["\n    color: ",";\n    text-align: center;\n    margin-top: 0;\n  "]);return S=function(){return n},n}function _(){var n=Object(s.a)(["\n  ","\n"]);return _=function(){return n},n}var q=i.d.h1(_(),(function(n){var e=n.theme;return Object(i.c)(S(),e.colors.white)})),R=r(9),T=r(25),D=Object(R.combineReducers)({grid:d.default});var J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(R.createStore)(D,n,Object(T.devToolsEnhancer)({}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(){var n=Object(s.a)(["\n    html {\n      height: 100%;\n\n      body {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        margin: 0;\n\n        #root {\n          background: ",";\n          color: ",";\n          display: flex;\n          font-family: sans-serif;\n          height: 100%;\n          justify-content: center;\n          padding: 15px;\n        }\n      }\n    }\n  "]);return K=function(){return n},n}function P(){var n=Object(s.a)(["\n  ","\n"]);return P=function(){return n},n}var W=Object(i.b)(P(),(function(n){var e=n.theme;return Object(i.c)(K(),e.colors.background,e.colors.black)})),U=J();a.a.render(c.a.createElement(i.a,{theme:{colors:{background:"radial-gradient(#282C34CC, #282C34)",black:"#282C34",blue:"#A0E9FD",lightBlue:"#CAF3FE",white:"white"},transition:"0.3s"}},c.a.createElement(W,null),c.a.createElement(l.a,{store:U},c.a.createElement(V,{"data-cy":"content"},c.a.createElement(q,{"data-cy":"title"},"Sudoku"),c.a.createElement(L,{"data-cy":"card"},c.a.createElement(x,null),c.a.createElement(z,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){return n.unregister()}))},8:function(n,e,r){"use strict";r.d(e,"a",(function(){return t})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return o}));var t="CREATE_FULL_GRID",c="FILL_BLOCK",o="SELECT_BLOCK"}},[[29,1,2]]]);
//# sourceMappingURL=main.51379311.chunk.js.map
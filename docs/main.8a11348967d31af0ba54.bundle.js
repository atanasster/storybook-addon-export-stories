(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,n){n(403),n(541),n(1230),t.exports=n(1163)},1:function(t,e){},1230:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),i=n(90),s=(n(14),n(11),n(15),n(18),n(561),n(38)),a=n(82),c=function(t){return{items:t.state.storiesHash}},d=function(){return r.a.createElement(a.Consumer,{filter:c},(function(t){var e=t.items;return r.a.createElement(s.IconButton,{active:!1,title:"Save all stories to a .json file",onClick:function(){return function(t,e){console.log(t);var n=JSON.stringify(t,null,2),o=new Blob([n],{type:"text/csv"});if(navigator&&navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(o,e);else{var r=window.URL||window.webkitURL,i=void 0===r.createObjectURL?"data:text/json;charset=utf-8,"+n:r.createObjectURL(o),s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download",e),document.body.appendChild(s),s.click(),document.body.removeChild(s)}}(e,"stories.json")}},r.a.createElement(s.Icons,{icon:"download"}))}))};d.__docgenInfo={description:"",methods:[],displayName:"ExportButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["dist/ExportButton.js"]={name:"ExportButton",docgenInfo:d.__docgenInfo,path:"dist/ExportButton.js"}),i.addons.register("storybook/export-stories",(function(){i.addons.add("storybook/export-stories",{title:"Export stories",type:i.types.TOOL,match:function(){return!0},render:function(){return r.a.createElement(d,null)}})}))}},[[0,1,2]]]);
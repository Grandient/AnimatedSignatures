(this["webpackJsonp2d-writer"]=this["webpackJsonp2d-writer"]||[]).push([[0],{103:function(e,t,a){},275:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(97),s=a.n(l),o=(a(103),a(3)),r=a(28),c=a(4),d=a(5),h=a(8),u=a(7),p=a(6),f=a(14),v=a(41),m=a(22);function b(e,t,a,n,i){return function(e,t,a){return Math.max(Math.min(e,a),t)}(function(e,t,a,n,i){return n+(e-t)/(a-t)*(i-n)}(e,t,a,n,i),n,i)}function g(e,t){var a=0,n=t*e.total,i=0;m.a.each(e.children,(function(t){var l=e.distances[a],s=i+l,o=b(n,i,s,0,1);t.ending=o,i=s,a++}))}function k(e,t,a){t.index=0;var n=a.makeLinearGradient(a.width/2,-a.height/2,a.width/2,a.height/2,new f.a.Stop(0,t[0]),new f.a.Stop(.5,t[1]),new f.a.Stop(1,t[2]));return e.fill=n,e}var E=a(1),C=a.n(E),y=a(61),S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState({displayColorPicker:!n.state.displayColorPicker})},n.handleClose=function(){n.setState({displayColorPicker:!1})},n.handleChange=function(e){n.setState({color:e.hex})},n.state={displayColorPicker:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=C()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:this.props.color},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return i.a.createElement("div",{id:this.props.id},i.a.createElement("div",{style:e.swatch,onClick:this.handleClick},i.a.createElement("div",{style:e.color})),this.state.displayColorPicker?i.a.createElement("div",{style:e.popover},i.a.createElement("div",{style:e.cover,onClick:this.handleClose}),i.a.createElement(y.SketchPicker,{color:this.props.color,onChange:this.props.handlechange})):null)}}]),a}(i.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e,t=null;return e=i.a.createElement("div",null,i.a.createElement("label",null,"Background: Gradient"),i.a.createElement("input",{type:"checkbox",onClick:this.props.check,id:"checkbg"})),t=this.props.isGradient?i.a.createElement("div",{style:{display:"flex"}},"Gradient Color:",i.a.createElement(S,{color:this.props.grad[0],handlechange:this.props.colorChange,id:"grad0"}),i.a.createElement(S,{color:this.props.grad[1],handlechange:this.props.colorChange,id:"grad1"}),i.a.createElement(S,{color:this.props.grad[2],handlechange:this.props.colorChange,id:"grad2"})):i.a.createElement("div",{style:{display:"flex"}},"Solid Color:",i.a.createElement(S,{color:this.props.solid,handlechange:this.props.colorChange,id:"solid"})),i.a.createElement("div",null,i.a.createElement("div",{className:"center bold"},"Background Options:"),i.a.createElement("div",null,e,t))}}]),a}(i.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"center bold"},"Font Options:"),i.a.createElement("div",{className:"flex"},"Font Selected:",i.a.createElement("div",{id:"fontselected"},this.props.fontName)),i.a.createElement("div",{id:"fontinput"},i.a.createElement("label",{htmlFor:"file"},"Upload Font:"),i.a.createElement("input",{type:"file",id:"file",name:"file",onChange:this.props.onchange})),i.a.createElement("label",null,"Preloaded Fonts:"),i.a.createElement("div",{className:"flex"},i.a.createElement("button",{onClick:this.props.textClick},"Roboto"),i.a.createElement("button",{onClick:this.props.textClick},"Fira Sans"),i.a.createElement("button",{onClick:this.props.textClick},"Yellowtail"),i.a.createElement("button",{onClick:this.props.textClick},"Saira"),i.a.createElement("button",{onClick:this.props.textClick},"Quicksand")))}}]),a}(i.a.Component),w=a(23),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"Icons:"),i.a.createElement("div",{id:"iconsvg"},i.a.createElement(w.d,{onClick:this.props.svgClick,size:32}),i.a.createElement(w.b,{onClick:this.props.svgClick,size:32}),i.a.createElement(w.c,{onClick:this.props.svgClick,size:32}),i.a.createElement(w.e,{onClick:this.props.svgClick,size:32}),i.a.createElement(w.a,{onClick:this.props.svgClick,size:32})))}}]),a}(i.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=new f.a({type:f.a.Types.svg,fullscreen:!1,width:400,height:32}),t=document.getElementById("shapes");e.appendTo(t);var a=e.makeCircle(16,16,15),n=e.makeRectangle(48,16,31,31),i=e.makeLine(64,16,96,16);i.linewidth=8;var l=e.makeStar(112,16,32,16,5),s=e.makeRoundedRectangle(144,16,31,31),o=e.makePolygon(176,16,16,5),r=e.makePolygon(208,16,16,6);e.makeGroup(a,n,i,l,s,o,r).fill="black",e.update()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,"Shapes:"),i.a.createElement("div",{id:"shapes",onClick:this.props.onclick}))}}]),a}(i.a.Component),F=(i.a.Component,function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"center bold"},"History and Element Options:"),i.a.createElement("div",null,"History:"),i.a.createElement("button",{onClick:this.props.onclick},"Undo"))}}]),a}(i.a.Component)),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",{className:"center bold"},"Text Options:"),i.a.createElement("label",null,"Choose Text:"),i.a.createElement("input",{id:"textin",type:"text",onChange:this.props.updateText}),i.a.createElement("div",{className:"flex"},i.a.createElement("label",null,"Text Color:"),i.a.createElement(S,{color:this.props.textColor,handlechange:this.props.onchange,id:"text"})),i.a.createElement("div",{className:"flex"},i.a.createElement("label",null,"Fill:"),i.a.createElement("input",{onChange:this.props.useFill,type:"checkbox"})),i.a.createElement("div",{className:"flex"},i.a.createElement("label",null,"Fill Color:"),i.a.createElement(S,{color:this.props.fillColor,handlechange:this.props.onchange,id:"fill"}))))}}]),a}(i.a.Component),B=(a(275),a(276),null),T=0,V=null,P=new f.a.Group,R=["http://gavingosling.me/fonts/Roboto-thin.ttf","https://opentype.js.org/fonts/FiraSansMedium.woff","http://gavingosling.me/fonts/Yellowtail-Regular.ttf","http://gavingosling.me/fonts/SairaCondensed-Light.ttf","http://gavingosling.me/fonts/Quicksand.ttf"];function I(e,t){var a=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=e.getPath(t,0,150,100);n=n.toSVG();var i=(new DOMParser).parseFromString(n,"text/xml");return i=i.firstChild,a.appendChild(i),{svg:a,path:i}}var M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n,i;return Object(c.a)(this,a),(i=t.call(this,e)).state=(n={text:"null",svg:null,font:null,fill:!1,textColor:"#ffffff",fillColor:"#ffffff",fontName:"Fira Sans",t:0,isGradient:!1,grad:["#ff4040","#ff8000","#00c8ff"],solid:"#AB2567",rectangle:null,points:[],loaded:!1,hide:!1,selectedSVG:null},Object(r.a)(n,"svg",null),Object(r.a)(n,"shape",null),n),i.updateText=i.updateText.bind(Object(h.a)(i)),i.updateFont=i.updateFont.bind(Object(h.a)(i)),i.updateBG=i.updateBG.bind(Object(h.a)(i)),i.updateColorState=i.updateColorState.bind(Object(h.a)(i)),i.updateHide=i.updateHide.bind(Object(h.a)(i)),i.selectShape=i.selectShape.bind(Object(h.a)(i)),i.setSVG=i.setSVG.bind(Object(h.a)(i)),i.removePoints=i.removePoints.bind(Object(h.a)(i)),i.svgClick=i.svgClick.bind(Object(h.a)(i)),i.draw=i.draw.bind(Object(h.a)(i)),i.loadWebFont=i.loadWebFont.bind(Object(h.a)(i)),i.updateTextColor=i.updateTextColor.bind(Object(h.a)(i)),i.useFill=i.useFill.bind(Object(h.a)(i)),i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){B=new f.a({type:f.a.Types.svg,fullscreen:!0});var e=document.getElementById("drawingBoard");B.appendTo(e);var t=this;B.bind("resize",(function(){P.translation.set(B.width/2,B.height/2),t.renderBG(),t.instantDraw()})),(V=B.makeRectangle(B.width/2,B.height/2,B.width,B.height)).noStroke(),V.fill=this.state.solid,v.a.load("https://opentype.js.org/fonts/FiraSansMedium.woff",(function(e,a){e?console.log("Font could not be loaded: "+e):(t.setState({font:a,fontName:"Fira Sans"}),t.draw())}))}},{key:"updateTextColor",value:function(e,t){var a=document.getElementById("text"),n=document.getElementById("fill");a.children.length>1&&this.setState(Object(o.a)(Object(o.a)({},this.state),{},{textColor:e.hex})),n.children.length>1&&this.setState(Object(o.a)(Object(o.a)({},this.state),{},{fillColor:e.hex}))}},{key:"useFill",value:function(e){e.nativeEvent.target.checked?this.setState(Object(o.a)(Object(o.a)({},this.state),{},{fill:!0})):this.setState(Object(o.a)(Object(o.a)({},this.state),{},{fill:!1}))}},{key:"renderBG",value:function(){(V=B.makeRectangle(B.width/2,B.height/2,B.width,B.height)).noStroke(),this.state.isGradient?V=k(V,this.state.grad,B):V.fill=this.state.solid}},{key:"loadWebFont",value:function(e){var t=e.nativeEvent.target.innerText,a=0;switch(t){case"Roboto":a=0;break;case"Fira Sans":a=1;break;case"Yellowtail":a=2;break;case"Saira":a=3;break;case"Quicksand":a=4}var n=R[a],i=this;v.a.load(n,(function(e,a){e?console.log("Font could not be loaded: "+e):i.setState({font:a,fontName:t})}))}},{key:"instantDraw",value:function(){if(null!=this.state.font&&null!=this.state.text){B.unbind("update");var e=I(this.state.font,this.state.text).svg;null==P&&void 0==P||(console.log(e),P=B.interpret(e),this.state.fill?P.fill=this.state.fillColor:P.noFill(),P.center(),P.translation.set(B.width/2,B.height/2),P.stroke=this.state.textColor,P.linewidth=1)}}},{key:"draw",value:function(){null!=P&&(B.unbind("update"),null!=P.distances&&g(P,0),T=0,B.clear(),this.renderBG());var e,t=I(this.state.font,this.state.text).svg;if(this.state.points.length>=1)for(var a=this.state.points,n=0;n<a.length;n++){var i=a[n];i=i.svg;var l=document.getElementById(i.id),s=B.interpret(l);s.translation.set(a[n].x,a[n].y),this.state.fill?s.fill=this.state.fillColor:s.noFill(),s.stroke=this.state.textColor,s.linewidth=1}P=B.interpret(t),this.state.fill?P.fill=this.state.fillColor:P.noFill(),P.center(),P.translation.set(B.width/2,B.height/2),P.stroke=this.state.textColor,P.linewidth=1,P.distances=(e=P,m.a.map(e.children,(function(e){var t,a=0;return m.a.each(e.vertices,(function(e,n){n>0&&(a+=t.distanceTo(e)),t=e})),a}))),P.total=0,m.a.each(P.distances,(function(e){P.total+=e})),function(e,t){e.translation.set(t.width/2,t.height/2)}(P,B),B.bind("update",(function(){T<.9999?T+=.00625:B.unbind("update"),g(P,T)})),B.play()}},{key:"updateText",value:function(e){void 0!=e&&(e=e.nativeEvent,this.setState(Object(o.a)(Object(o.a)({},this.state),{},{text:e.target.value})))}},{key:"updateFont",value:function(e){var t=(e=e.nativeEvent).target.files[0],a=new FileReader,n=e.target;a.onload=function(e){try{var t=v.a.parse(e.target.result),a=n.value,i=a.indexOf("\\")>=0?a.lastIndexOf("\\"):a.lastIndexOf("/");0!==(a=a.substring(i)).indexOf("\\")&&0!==a.indexOf("/")||(a=a.substring(1)),this.setState(Object(o.a)(Object(o.a)({},this.state),{},{font:t,fontName:a}))}catch(l){console.log(l)}}.bind(this),a.readAsArrayBuffer(t)}},{key:"updateColorState",value:function(e,t){if((V=B.makeRectangle(B.width/2,B.height/2,B.width,B.height)).noStroke(),this.state.isGradient){if("nativeEvent"in t&&(t=t.nativeEvent),void 0!=t){for(var a=null,n=0;n<t.path.length;n++){if(t.path[n].hasAttribute("id")){a=t.path[n].id;break}}var i=0;switch(a){case"grad0":i=0;break;case"grad1":i=1;break;case"grad2":i=2;break;default:return console.log("error"),void console.log(t)}var l=this.state.grad;l[i]=e.hex,this.setState({grad:l})}V=k(V,this.state.grad,B)}else this.setState(Object(o.a)(Object(o.a)({},this.state),{},{solid:e.hex})),V.fill=this.state.solid}},{key:"updateBG",value:function(){(V=B.makeRectangle(B.width/2,B.height/2,B.width,B.height)).noStroke(),this.state.isGradient?(this.setState(Object(o.a)(Object(o.a)({},this.state),{},{isGradient:!1})),V.fill=this.state.solid):(this.setState(Object(o.a)(Object(o.a)({},this.state),{},{isGradient:!0})),V=k(V,this.state.grad,B))}},{key:"updateHide",value:function(){this.state.hide?this.setState({hide:!1}):this.setState({hide:!0})}},{key:"svgClick",value:function(e){e=e.nativeEvent;for(var t=null,a=0;a<e.path.length;a++){if("svg"==e.path[a].nodeName){t=e.path[a];break}}for(var n=document.getElementById("iconsvg").children,i=0;i<n.length;i++){var l=n[i];l==t?l!=this.state.selectedSVG?(l.style.fill="blue",this.setState({selectedSVG:t}),this.removeShape()):(l.style.fill="black",this.setState({selectedSVG:null})):l.style.fill="black"}}},{key:"setSVG",value:function(e){if(null!=this.state.selectedSVG){var t,a=e.clientX,n=e.clientY,i=this.state.points;t=function(e,t,a){if(null!=e)return(e=B.interpret(e)).noFill(),e.scale=.25,e.center(),e.translation.set(t,a),e.stroke="white",e.linewidth=1,e}(this.state.selectedSVG,a,n),i.push({x:a,y:n,svg:t}),this.setState({points:i})}else if(null!=this.state.shape){var l=e.clientX,s=e.clientY,o=this.state.shape;(o=B.interpret(o)).translation.set(l,s);var r=this.state.points;r.push({x:l,y:s,svg:o}),this.setState({points:r})}else console.log("empty")}},{key:"selectShape",value:function(e){if("path"==e.nativeEvent.path[0].nodeName){var t=e.nativeEvent.path[0];if(null==this.state.shape)t.style.fill="blue",t.style.stroke="blue",this.setState({shape:t}),this.removeSVG();else if(this.state.shape==t)t.style.fill="black",t.style.stroke="black",this.setState({shape:null});else{var a=this.state.shape;a.style.fill="black",a.style.stroke="black",t.style.fill="blue",t.style.stroke="blue",this.setState({shape:t}),this.removeSVG()}}}},{key:"removeSVG",value:function(){this.state.selectedSVG&&(this.state.selectedSVG.style.fill="black",this.setState({selectedSVG:null}))}},{key:"removeShape",value:function(){if(this.state.shape){var e=this.state.shape;e.style.fill="black",e.style.stroke="black",this.setState({shape:null})}}},{key:"removePoints",value:function(){if(this.state.points.length>=1){this.state.points[this.state.points.length-1].svg.remove();var e=this.state.points;e.pop(),this.setState({point:e})}}},{key:"render",value:function(){if(this.state.hide){return i.a.createElement("div",null,i.a.createElement("div",{id:"form",className:"center small"},i.a.createElement("button",{id:"draw",onClick:this.draw},"Draw"),i.a.createElement("button",{id:"hide",onClick:this.updateHide},"Show")),i.a.createElement("div",{id:"drawingBoard",onClick:this.setSVG}))}return i.a.createElement("div",null,i.a.createElement("div",{id:"form",className:"flex-col",onContextMenu:this.removePoints},i.a.createElement(N,{fillColor:this.state.fillColor,updateText:this.updateText,useFill:this.useFill,textColor:this.state.textColor,onchange:this.updateTextColor}),i.a.createElement(O,{fontName:this.state.fontName,onchange:this.updateFont,textClick:this.loadWebFont}),i.a.createElement(x,{isGradient:this.state.isGradient,check:this.updateBG,grad:this.state.grad,solid:this.state.solid,colorChange:this.updateColorState}),i.a.createElement("div",null,i.a.createElement("div",{className:"center bold"},"Shape and Icon Options:"),i.a.createElement(G,{onclick:this.selectShape}),i.a.createElement(j,{svgClick:this.svgClick})),i.a.createElement(F,{onclick:this.removePoints}),i.a.createElement("div",{className:"center"},i.a.createElement("button",{id:"draw",onClick:this.draw},"Draw"),i.a.createElement("button",{id:"hide",onClick:this.updateHide},"Hide"))),i.a.createElement("div",{id:"drawingBoard",onClick:this.setSVG}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t){},98:function(e,t,a){e.exports=a(277)}},[[98,1,2]]]);
//# sourceMappingURL=main.ede8945a.chunk.js.map
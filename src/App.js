import React from 'react';
import Two from 'two.js';
import opentype from 'opentype.js';
import {setEnding, calculateDistances, resize, makeGradient} from './misc';
import ColorOptions from './ColorOptions';
import FontOptions from './FontOptions';
import IconOptions from './IconOptions';
import ShapeOptions from './ShapeOptions';
import AnimationOptions from './AnimationOptions';
import HistoryPallete from './HistoryPalette';
import TextOptions from './TextOptions';
import _ from 'underscore';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var two = null;
var t = 0;
var rectangle = null;
var svg = new Two.Group();
var links = ["http://gavingosling.me/fonts/Roboto-thin.ttf","https://opentype.js.org/fonts/FiraSansMedium.woff", "http://gavingosling.me/fonts/Yellowtail-Regular.ttf", "http://gavingosling.me/fonts/SairaCondensed-Light.ttf", "http://gavingosling.me/fonts/Quicksand.ttf"]

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "null",
            svg :  null,
            font:  null, 
            fill: false,
            textColor: "#ffffff",
            fillColor: "#ffffff",
            fontName : "Fira Sans",
            t   :  0,
            isGradient : false,
            grad       : ['#ff4040', '#ff8000', '#00c8ff'],
            solid      : "#AB2567",
            rectangle  : null,
            points :  [],  
            loaded : false,
            hide   : false,
            selectedSVG: null,
            svg : null,
            shape : null
        }

        this.updateText = this.updateText.bind(this);
        this.updateFont = this.updateFont.bind(this);
        this.updateBG = this.updateBG.bind(this);
        this.updateColorState = this.updateColorState.bind(this);
        this.updateHide = this.updateHide.bind(this);
        this.selectShape = this.selectShape.bind(this);
        this.setSVG = this.setSVG.bind(this);
        this.removePoints = this.removePoints.bind(this);
        this.svgClick = this.svgClick.bind(this);
        this.draw = this.draw.bind(this);
        this.loadWebFont = this.loadWebFont.bind(this);
        this.updateTextColor = this.updateTextColor.bind(this);
        this.useFill = this.useFill.bind(this);
    }

    componentDidMount(){
        // Load TwoJs Instance
        two = new Two({
            type: Two.Types.svg,
            fullscreen: true
        });
        let drawingBoard = document.getElementById("drawingBoard");
        two.appendTo(drawingBoard);
        let ctx = this;
        two.bind('resize', function(){
            svg.translation.set(two.width / 2, two.height / 2)
            ctx.renderBG();
            ctx.instantDraw();
        }) 

        // Set Color
        rectangle = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
        rectangle.noStroke();
        rectangle.fill = this.state.solid;

        // Load Font
        opentype.load('https://opentype.js.org/fonts/FiraSansMedium.woff', function(err, loadedfont) {
            if (err) {
                 console.log('Font could not be loaded: ' + err);
            } else {
                ctx.setState({ font: loadedfont, fontName: "Fira Sans" })
                ctx.draw();
            }
        });
    }

    updateTextColor(color, e){
        let text = document.getElementById("text");
        let fill = document.getElementById("fill");
        //console.log(text.children)
        if(text.children.length > 1){
            this.setState({
                ...this.state,
                textColor: color.hex
            })
        }
        if(fill.children.length > 1){
            this.setState({
                ...this.state,
                fillColor: color.hex
            })
        }
    }

    useFill(e){
        let checked = e.nativeEvent.target.checked
        if(checked){
            this.setState({...this.state,fill: true})
        } else {
            this.setState({...this.state,fill: false})
        }
    }

    renderBG(){
        rectangle = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
        rectangle.noStroke();
        if(this.state.isGradient){
            rectangle = makeGradient(rectangle, this.state.grad, two);
        } else {
            rectangle.fill = this.state.solid;
        }

    }

    loadWebFont(e){
        // Load Font
        let target = e.nativeEvent.target.innerText;
        let index = 0;
        switch (target){
            case "Roboto":
                index = 0;
                break;
            case "Fira Sans":
                index = 1;
                break;
            case "Yellowtail":
                index = 2;
                break;
            case "Saira":
                index = 3;
                break;
            case "Quicksand":
                index = 4;
                break;
            default:
                break;
        }
        let link = links[index];
        let ctx = this;
        opentype.load(link, function(err, loadedfont) {
            if (err) {
                 console.log('Font could not be loaded: ' + err);
            } else {
                ctx.setState({ font: loadedfont, fontName: target })
            }
        });
    }

    instantDraw(){
        if(this.state.font != null && this.state.text != null){
            two.unbind('update') 
            let svgElement = createSVG(this.state.font, this.state.text).svg;
            if(svg != null || svg != undefined){
                console.log(svgElement)
                svg = two.interpret(svgElement);
                if(!this.state.fill){
                    svg.noFill();
                } else {
                    svg.fill = this.state.fillColor;
                }
                svg.center()
                svg.translation.set(two.width / 2, two.height / 2);
                svg.stroke = this.state.textColor;
                svg.linewidth = 1;
            }
        }
    }

    draw() {
        if(svg != null){
            two.unbind('update')
            if(svg.distances != null){
                setEnding(svg, 0);
            }
            t = 0;
            two.clear();
            this.renderBG();
        }
        // Create the SVG for Twojs
        let result = createSVG(this.state.font, this.state.text);
        let svgElement = result.svg;
        // Convert SVG to Twojs Group
        if(this.state.points.length >= 1) {
            let points = this.state.points;
            for (let index = 0; index < points.length; index++) {
                let element = points[index];
                element = element.svg;
                let path = document.getElementById(element.id);
                let elem = two.interpret(path);
                elem.translation.set(points[index].x, points[index].y);
                if(!this.state.fill){
                    elem.noFill();
                } else {
                    elem.fill = this.state.fillColor;
                }
                elem.stroke = this.state.textColor;
                elem.linewidth = 1;
            }
        }
        svg = two.interpret(svgElement);
        // Dont fill inside the shape
        if(!this.state.fill){
            svg.noFill();
        } else {
            svg.fill = this.state.fillColor;
        }
        // Percentage of SVG drawn
        // Sets vertices around center of group
        svg.center()
        // Translates to center of screen
        svg.translation.set(two.width / 2, two.height / 2);
        // Color of strokes between vertices 
        svg.stroke = this.state.textColor;
        // Width of the strokes 
        svg.linewidth = 1;
        // Find the distance between each vertice
        svg.distances = calculateDistances(svg);
        // Total distance made so far
        svg.total = 0;
        _.each(svg.distances, function(d) {
            svg.total += d;
        });
        resize(svg, two);
        // Callbacks for update (called each frame at 60fps) and on page resize
        two.bind('update', function() {
                if (t < 0.9999) {
                    // How fast the text is gone through
                    t += 0.00625;
                    // 2.67 sec at 0.00625
                } else {
                    two.unbind('update')
                }
                setEnding(svg, t);
        })
        two.play();
    }

    updateText(e){
        if(e != undefined){
            e = e.nativeEvent;
            this.setState({
                ...this.state, 
                text: e.target.value
            })
        }
    }

    updateFont(e){
        e = e.nativeEvent;
        var file = e.target.files[0];
        var reader = new FileReader();
        let input = e.target;
        let read = function(e) {
            try {
                let font = opentype.parse(e.target.result);
                let fileName = input.value;
                let startindex = (fileName.indexOf('\\') >= 0 ? fileName.lastIndexOf('\\') : fileName.lastIndexOf('/'))
                fileName = fileName.substring(startindex)
                if (fileName.indexOf('\\') === 0 || fileName.indexOf('/') === 0) {
                    fileName = fileName.substring(1);
                }
                this.setState({
                    ...this.state, 
                    font: font,
                    fontName: fileName
                })
            } catch (err) {
                console.log(err)
            }
        }
        reader.onload = read.bind(this);
        reader.readAsArrayBuffer(file);
    }

    updateColorState(color, e){
        rectangle = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
        rectangle.noStroke();

        if(this.state.isGradient){
            if('nativeEvent' in e){
                e = e.nativeEvent;
            } 
            if(e != undefined){
                let id = null;
                for (let index = 0; index < e.path.length; index++) {
                    var element = e.path[index];
                    if(element.hasAttribute('id')){
                        id = e.path[index].id;
                        break;
                    }
                }
                let index = 0;
                switch(id){
                    case "grad0":
                        index = 0;
                        break;
                    case "grad1":
                        index = 1;
                        break;
                    case "grad2":
                        index = 2;
                        break;
                    default:
                        console.log("error")
                        console.log(e)
                        return;
                }
                let result = this.state.grad;
                result[index] = color.hex;
                this.setState({
                    grad: result
                })
            }
            rectangle = makeGradient(rectangle, this.state.grad, two);

        } else {
            this.setState({
                ...this.state,
                solid: color.hex
            })
            rectangle.fill = this.state.solid;
        }
    }

    updateBG(){
        rectangle = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
        rectangle.noStroke();
        if(this.state.isGradient){
            this.setState({...this.state, isGradient: false});
            rectangle.fill = this.state.solid;
        } else {
            this.setState({...this.state, isGradient: true});
            rectangle = makeGradient(rectangle, this.state.grad, two);
        }
    }

    updateHide(){
        if(this.state.hide){
            this.setState({hide: false});
        } else {
            this.setState({hide: true});
        }
    }

    svgClick(e){
        e = e.nativeEvent;
        let svg = null;
        for (let index = 0; index < e.path.length; index++) {
            var element = e.path[index];
            if(element.nodeName == 'svg'){
                svg = e.path[index];
                break;
            }
        }

        let div = document.getElementById("iconsvg").children;
        for (let index = 0; index < div.length; index++) {
            const element = div[index];
            if(element == svg){
                if(element != this.state.selectedSVG){
                    element.style.fill = "blue";
                    this.setState({ selectedSVG: svg})
                    this.removeShape();
                } else {
                    element.style.fill = "black";
                    this.setState({ selectedSVG: null})
                }  
            } else {
                element.style.fill = "black";
            }
        }
    }

    setSVG(e){
        if(this.state.selectedSVG != null){
            let x = e.clientX;
            let y = e.clientY;
            let newPoints = this.state.points;
            let svg = null;
            svg = makeSVG(this.state.selectedSVG, x , y);
            newPoints.push({x: x, y: y, svg: svg})
            this.setState({ points: newPoints });
        } else if(this.state.shape != null) {
            let x = e.clientX;
            let y = e.clientY;
            let shape = this.state.shape;
            shape = two.interpret(shape);
            shape.translation.set(x, y);
            let newPoints = this.state.points;
            newPoints.push({x: x, y: y, svg: shape})
            this.setState({points: newPoints})
        } else {
            console.log("empty")
        }
    }

    selectShape(e){
        if(e.nativeEvent.path[0].nodeName == "path"){
            let shape = e.nativeEvent.path[0];
            // Current shape is not the same shape.
            // There is no shape selected currently
            if(this.state.shape == null){
                shape.style.fill = "blue";
                shape.style.stroke = "blue";
                this.setState({ shape: shape}) 
                this.removeSVG();
            // Current shape is the same shape
            } else if (this.state.shape == shape) {
                shape.style.fill = "black";
                shape.style.stroke = "black";
                this.setState({ shape: null}) 
            } else {
                let oldshape = this.state.shape;
                oldshape.style.fill = "black";
                oldshape.style.stroke = "black";
                shape.style.fill = "blue";
                shape.style.stroke = "blue";
                this.setState({ shape: shape}) 
                this.removeSVG();
                
            }
        }
    }

    removeSVG(){
        if(this.state.selectedSVG){
            let svg = this.state.selectedSVG;
            svg.style.fill = "black";
            this.setState({selectedSVG: null})
        }
    }

    removeShape(){
        if(this.state.shape){
            let shape = this.state.shape;
            shape.style.fill = "black";
            shape.style.stroke = "black";
            this.setState({shape: null})
        }
    }

    removePoints(){
        if(this.state.points.length >= 1){
            let lastPoint = this.state.points[this.state.points.length-1];
            lastPoint.svg.remove();
            let newPoints = this.state.points;
            newPoints.pop();
            this.setState({ point: newPoints });
        }
    }

    render() {
        if(this.state.hide){
            let style1 = "center";
            let style2 = "small";
            return (
                    <div>
                        <div id="form" className={style1 + " " + style2}>
                            <button id="draw" onClick={this.draw}>Draw</button>
                            <button id="hide" onClick={this.updateHide}>Show</button>
                        </div>
                        <div id="drawingBoard" onClick={this.setSVG} >
                        </div>
                    </div>
                   )
        } else {
            return (
                <div>
                    <div id="form" className="flex-col" onContextMenu={this.removePoints}>
                    <TextOptions fillColor={this.state.fillColor} updateText={this.updateText} useFill={this.useFill} textColor={this.state.textColor} onchange={this.updateTextColor}/>
                    <FontOptions fontName={this.state.fontName} onchange={this.updateFont} textClick={this.loadWebFont}/>
                    <ColorOptions isGradient={this.state.isGradient} check={this.updateBG} grad={this.state.grad} solid={this.state.solid} colorChange={this.updateColorState}/>
                    <div>
                        <div className={"center" + " bold"}>
                            Shape and Icon Options:
                        </div>
                        <ShapeOptions onclick={this.selectShape}/>
                        <IconOptions svgClick={this.svgClick}/>
                    </div>
                    <HistoryPallete onclick={this.removePoints}/>
                    <div className="center">
                        <button id="draw" onClick={this.draw}>Draw</button>
                        <button id="hide" onClick={this.updateHide}>Hide</button>
                    </div>
                    </div>
                    <div id="drawingBoard" onClick={this.setSVG} >
                    </div>
              </div>
            )
        }
    }
}

/*
                        <label>URL:</label>
                        <input id="checkurl" type="checkbox" onClick={this.updateInput}/>
*/
function createSVG(font, text){
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let path = font.getPath(text, 0, 150, 100);
    path = path.toSVG();
    let pathElement = new DOMParser().parseFromString(path, "text/xml");
    pathElement = pathElement.firstChild;
    svgElement.appendChild(pathElement);
    return {svg: svgElement, path: pathElement}
} 

function makeSVG(svg, x, y){
    if(svg != null){
        svg = two.interpret(svg);
        svg.noFill();
        svg.scale = 0.25;
        svg.center()
        svg.translation.set(x, y);
        svg.stroke = 'white';
        svg.linewidth = 1;
        return svg;
    }
}

/*
    draw() {
        if(svg != null){
            two.unbind('update')
            if(svg.distances != null){
                setEnding(svg, 0);
            }
            t = 0;
            two.clear();
            this.renderBG();
        }
        // Create the SVG for Twojs
        let result = createSVG(this.state.font, this.state.text);
        let svgElement = result.svg;
        //let pathElement = result.path;
        // Convert SVG to Twojs Group
        if(this.state.points.length >= 1) {
            let points = this.state.points;
            for (let index = 0; index < points.length; index++) {
                let element = points[index];
                element = element.svg;
                let path = document.getElementById(element.id);
                let elem = two.interpret(path);
                elem.translation.set(points[index].x, points[index].y);
                elem.noFill();
                elem.stroke = 'white';
                elem.linewidth = 1;
                svg.add(elem);
            }
        }
        let text = two.interpret(svgElement);
        // Dont fill inside the shape
        text.noFill();
        // Percentage of SVG drawn
        // Sets vertices around center of group
        text.center()
        // Translates to center of screen
        text.translation.set(two.width / 2, two.height / 2);
        // Color of strokes between vertices 
        text.stroke = 'white';
        // Width of the strokes 
        text.linewidth = 1;
        // Check if the size is off
        svg.add(text)
        // Find the distance between each vertice
        console.log("text:")
        text.distances = calculateDistances(text);
        console.log("svg:")
        console.log(svg.children)
        svg.distances = [];
        [...svg.children].forEach(child => {
            let result = calculateDistances(child);
            svg.distances.push(result[0]);
        });
        // Total distance made so far
        svg.total = 0;
        _.each(svg.distances, function(d) {
            svg.total += d;
        });
        console.log(svg.total)
        resize(svg, two);
        // Callbacks for update (called each frame at 60fps) and on page resize
        two.bind('update', function() {
                if (t < 0.9999) {
                    // How fast the text is gone through
                    t += 0.00625;
                    // 2.67 sec at 0.00625
                } else {
                    two.unbind('update')
                }
                setEnding(svg, t);
        })
        two.play();
    }
*/

export default App;

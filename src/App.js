import React from 'react';
import Two from 'two.js';
import opentype from 'opentype.js';
import {setEnding, calculateDistances, resize, makeGradient} from './misc';
import ColorOptions from './ColorOptions';
import FontOptions from './FontOptions';
import IconOptions from './IconOptions';
import _ from 'underscore';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var two = null;
var t = 0;
var rectangle = null;
var svg = null;

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "null",
            svg :  null,
            font:  null, 
            t   :  0,
            isGradient : false,
            grad       : ['#ff4040', '#ff8000', '#00c8ff'],
            solid      : "#AB2567",
            rectangle  : null,
            loaded : false,
            hide   : false,
            selectedSVG: null,
            svg : null
        }
        this.updateText = this.updateText.bind(this);
        this.updateFont = this.updateFont.bind(this);
        this.updateBG = this.updateBG.bind(this);
        this.updateColorState = this.updateColorState.bind(this);
        this.updateHide = this.updateHide.bind(this);
        this.svgClick = this.svgClick.bind(this);
        this.draw = this.draw.bind(this);
    }

    componentDidMount(){
        // Load TwoJs Instance
        two = new Two({
            type: Two.Types.svg,
            fullscreen: true
        });
        two.appendTo(document.body);
        let ctx = this;
        two.bind('resize', function(){
            svg.translation.set(two.width / 2, two.height / 2)
            ctx.renderBG();
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
                ctx.state.font = loadedfont;
                ctx.draw();
            }
        });
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

    instantDraw(){

    }

    draw() {
        if(svg != null){
            two.unbind('update')
            setEnding(svg, 0);
            t = 0;
        }
        // Create the SVG for Twojs
        let svgElement = createSVG(this.state.font, this.state.text);
        // Convert SVG to Twojs Group
        svg = two.interpret(svgElement);
        /*
        if(this.state.selectedSVG != null) {
            let svg2 = two.interpret(this.state.selectedSVG)
            console.log(svg2)
        }

        console.log(svg)*/
        // Dont fill inside the shape
        svg.noFill();
        // Percentage of SVG drawn
        // Sets vertices around center of group
        svg.center()
        // Translates to center of screen
        svg.translation.set(two.width / 2, two.height / 2);
        // Find the distance between each vertice
        svg.distances = calculateDistances(svg);
        svg.total = 0;
        _.each(svg.distances, function(d) {
            svg.total += d;
        });
        // Total distance made so far
        //svg.total = svg.distances;  
        // Color of strokes between vertices 
        svg.stroke = 'white';
        // Width of the strokes 
        svg.linewidth = 1;
        // Check if the size is off
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
        console.log(e)
        let read = function(e) {
            try {
                let font = opentype.parse(e.target.result);
                this.setState({
                    ...this.state, 
                    font: font
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
                } else {
                    element.style.fill = "black";
                    this.setState({ selectedSVG: null})
                }  
            } else {
                element.style.fill = "black";
            }
        }
    }

    drawSVG(){

    }

    render() {
        if(this.state.hide){
            let style1 = "center";
            return (
                    <div id="form" className={style1}>
                        <button id="draw" onClick={this.draw}>Draw</button>
                        <button id="hide" onClick={this.updateHide}>Show</button>
                    </div>
                   )
        } else {
            return (
                <div id="form" className="flex-col">
                <div>
                    <label>Choose Text:</label>
                    <input id="textin" type="text" onChange={this.updateText}/>
                    <label>URL:</label>
                    <input id="checkurl" type="checkbox" onClick={this.updateInput}/>
                </div>
                <FontOptions onchange={this.updateFont}/>
                <ColorOptions isGradient={this.state.isGradient} check={this.updateBG} grad={this.state.grad} solid={this.state.solid} colorChange={this.updateColorState}/>
                <IconOptions svgClick={this.svgClick}/>
                <div className="center">
                    <button id="draw" onClick={this.draw}>Draw</button>
                    <button id="hide" onClick={this.updateHide}>Hide</button>
                </div>
              </div>
            )
        }
    }
}

function createSVG(font, text){
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let path = font.getPath(text, 0, 150, 100);
    path = path.toSVG();
    let pathElement = new DOMParser().parseFromString(path, "text/xml");
    pathElement = pathElement.firstChild;
    svgElement.appendChild(pathElement);
    return svgElement;
}

export default App;

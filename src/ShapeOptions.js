import React from 'react';
import Two from 'two.js';
import { TwitterPicker } from 'react-color';

class IconOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var two = new Two({
            type: Two.Types.svg,
            fullscreen: false,
            width: 400,
            height: 32
        });
        let shapeDiv = document.getElementById("shapes");
        two.appendTo(shapeDiv);
        var circle = two.makeCircle(16, 16, 15);
        var rect = two.makeRectangle(48, 16, 31, 31);
        var line = two.makeLine(64, 16, 96, 16);
        line.linewidth = 8;
        var star = two.makeStar(112, 16, 32, 16, 5);
        var rounded = two.makeRoundedRectangle(144, 16, 31, 31);
        var pentagon = two.makePolygon(176, 16, 16, 5);
        var hexagon = two.makePolygon(208, 16, 16, 6);
        var group = two.makeGroup(circle, rect, line, star, rounded, pentagon, hexagon)
        group.fill = "black"
        two.update();
    }

    render() {
        return (
            <div>
                <div>Shapes:</div>
                <div id="shapes" onClick={this.props.onclick}>
                </div>
            </div>
            );
    }
}

export default IconOptions;
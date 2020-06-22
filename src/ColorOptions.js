import React from 'react';
import ColorPicker from './ColorPicker'

class ColorOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let check = null;
        let select = null;
        check = 
            <div>
                <label>Background: Gradient</label>
                <input type="checkbox" onClick={this.props.check} id="checkbg"/>
            </div>
        
        if(this.props.isGradient){
            select = 
                <div style={{display: "flex"}}> 
                    Gradient Color:
                    <ColorPicker color={this.props.grad[0]} handlechange={this.props.colorChange} id="grad0"/>
                    <ColorPicker color={this.props.grad[1]} handlechange={this.props.colorChange} id="grad1"/>
                    <ColorPicker color={this.props.grad[2]} handlechange={this.props.colorChange} id="grad2"/>
                </div>
        } else {
            select = 
                <div style={{display: "flex"}}>
                    Solid Color:
                    <ColorPicker color={this.props.solid} handlechange={this.props.colorChange} id="solid"/>
                </div>
        }
        
        return (
            <div>
                {check}
                {select}
            </div>
            );
    }
}

export default ColorOptions;
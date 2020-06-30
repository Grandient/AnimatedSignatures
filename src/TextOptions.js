import React from 'react';
import ColorPicker from './ColorPicker'
class TextOptions extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className={"center" + " bold"}>
                    Text Options:
                    </div>
                    <label>Choose Text:</label>
                    <input id="textin" type="text" onChange={this.props.updateText}/>
                    <div className="flex">
                        <label>Text Color:</label>
                        <ColorPicker color={this.props.textColor} handlechange={this.props.onchange} id="text"/>
                    </div>
                    <div className="flex">
                        <label>Fill:</label>
                        <input onChange={this.props.useFill} type="checkbox"/>
                    </div>
                    <div className="flex">
                        <label>Fill Color:</label>
                        <ColorPicker color={this.props.fillColor} handlechange={this.props.onchange} id="fill"/>
                    </div>
                </div>
            </div>
        )
    }
}
//<ColorPicker color={this.props.fillColor} onChange={this.props.onchange}/>
export default TextOptions;
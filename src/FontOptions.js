import React from 'react';
class FontOptions extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className={"center" + " bold"}>
                    Font Options:
                </div>
                <div className="flex">
                Font Selected: 
                    <div id="fontselected">
                    {this.props.fontName}
                    </div>
                </div>
                <div id="fontinput">
                    <label htmlFor="file">Upload Font:</label>
                    <input type="file" id="file" name="file" onChange={this.props.onchange}/>
                </div>
                <label>Preloaded Fonts:</label>
                <div className="flex">
                    <button onClick={this.props.textClick}>Roboto</button>
                    <button onClick={this.props.textClick}>Fira Sans</button>
                    <button onClick={this.props.textClick}>Yellowtail</button>
                    <button onClick={this.props.textClick}>Saira</button>
                    <button onClick={this.props.textClick}>Quicksand</button>
                </div>
            </div>
        )
    }
}

export default FontOptions;
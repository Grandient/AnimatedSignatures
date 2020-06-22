import React from 'react';
class FontOptions extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="fontinput">
                <label htmlFor="file">Upload Font:</label>
                <input type="file" id="file" name="file" onChange={this.props.onchange}/>
            </div>
        )
    }
}

export default FontOptions;
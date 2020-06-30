import React from 'react';

class HistoryPalette extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={"center" + " bold"}>
                    History and Element Options:
                </div>
                <div>History:</div>
                <button onClick={this.props.onclick}>Undo</button>
            </div>
            );
    }
}

export default HistoryPalette;
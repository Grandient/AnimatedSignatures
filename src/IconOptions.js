import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope} from 'react-icons/fa';
import reactCSS from 'reactcss';

class IconOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Icons:</div>
                <div id="iconsvg">
                    <FaLinkedin onClick={this.props.svgClick} size={32} />
                    <FaGithub onClick={this.props.svgClick} size={32} />
                    <FaInstagram onClick={this.props.svgClick} size={32} />
                    <FaTwitter onClick={this.props.svgClick} size={32} />
                    <FaEnvelope onClick={this.props.svgClick} size={32} />
                </div>
            </div>
            );
    }
}

export default IconOptions;
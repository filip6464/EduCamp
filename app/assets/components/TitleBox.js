import React, {Component} from 'react';
import './TitleBox.css'

class TitleBox extends Component {

    render() {
        return (
            <div className="container titlebox">
                {this.props.title}
            </div>
        );
    }
}

export default TitleBox;
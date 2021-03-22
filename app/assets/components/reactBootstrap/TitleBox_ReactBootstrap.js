import React, {Component} from 'react';
import './TitleBox_ReactBootstrap.css'

class TitleBox_ReactBootstrap extends Component {

    render() {
        return (
            <div className="container titlebox">
                {this.props.title}
            </div>
        );
    }
}

export default TitleBox_ReactBootstrap;
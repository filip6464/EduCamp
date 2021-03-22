import React, {Component} from 'react';
import TitleBox_ReactBootstrap from "../components/reactBootstrap/TitleBox_ReactBootstrap";
import PostsContainer_ReactBootstrap from "../components/reactBootstrap/PostsContainer_ReactBootstrap";
import PostsContainer from "../components/PostsContainer";
import TitleBox from "../components/TitleBox";

class Homeworks extends Component {
    render() {
        return (
            <div>
                <TitleBox title='Homeworks'/>
                <PostsContainer />
            </div>
        );
    }
}

export default Homeworks;
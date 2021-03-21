import React, {Component} from 'react';
import TitleBox from "../components/TitleBox";
import PostsContainer from "../components/PostsContainer";

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
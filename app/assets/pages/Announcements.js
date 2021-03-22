import React, {Component} from 'react';
import PostsContainer from "../components/PostsContainer";
import TitleBox from "../components/TitleBox";

class Announcements extends Component {
    render() {
        return (
            <div>
                <TitleBox title='Announcements'/>
                <PostsContainer />
            </div>
        );
    }
}

export default Announcements;
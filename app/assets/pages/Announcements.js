import React, {Component} from 'react';
import TitleBox from "../components/TitleBox";
import PostsContainer from "../components/PostsContainer";

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
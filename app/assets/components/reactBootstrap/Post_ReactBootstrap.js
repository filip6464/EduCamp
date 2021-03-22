import React, {Component} from 'react';
import {Card, Navbar} from "react-bootstrap";
import './Post_ReactBootstrap.css'
import post_img_exmaple from "../../images/post_image_example.jpg";

class Post_ReactBootstrap extends Component {
    render() {
        return (
            <div className="post">
                <img
                    src={post_img_exmaple}
                    width="auto"
                    height="150px"
                    className="d-inline-block align-top"
                    alt="post example logo"
                />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
            </div>
        );
    }
}

export default Post_ReactBootstrap;
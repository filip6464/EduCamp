import React, {Component} from 'react';
import TitleBox from "../components/TitleBox";
import ContactForm from "../components/ContactForm";
import {Box, Paper} from "@material-ui/core";
import {Book} from "@material-ui/icons";
import About from "../components/About";

class Contact extends Component {
    render() {
        return (
            <div>
                <TitleBox title='Contact'/>
                <Box component="div">
                    <About />
                </Box>
            </div>
        );
    }
}

export default Contact;
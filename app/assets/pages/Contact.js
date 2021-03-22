import React, {Component} from 'react';
import TitleBox from "../components/TitleBox";
import ContactForm from "../components/ContactForm";
import {Paper} from "@material-ui/core";

class Contact extends Component {
    render() {
        return (
            <div>
                <TitleBox title='Contact'/>
                <Paper>
                    <ContactForm />
                </Paper>
            </div>
        );
    }
}

export default Contact;
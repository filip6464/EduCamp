import React, {Component} from 'react';
import TitleBox from "../components/TitleBox";
import {Box} from "@material-ui/core";
import About from "../components/About";
import ContactPlate from "../components/ContactPlate";

class Admin extends Component {
    render() {
        return (
            <div>
                <TitleBox title='Admin'/>
                <Box component="div" display="flex" flexDirection="row" flexWrap="wrap">
                    <adminPostContainer />
                </Box>
            </div>
        );
    }
}

export default Admin;
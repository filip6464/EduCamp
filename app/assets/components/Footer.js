import React from "react";
import {AppBar, Container, Toolbar} from "@material-ui/core";
import Copyright from "./Copyright";

export default function Footer() {
    return (
        <AppBar position="static" color="light">
            <Container maxWidth="md">
                <Toolbar>
                    <Copyright />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
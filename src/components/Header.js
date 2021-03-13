import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {

    return (
        <div>
            <AppBar position="static" className="header">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className="header">
                        Blog
                    </Typography>

                    <span className="spacer"/>

                    <Button color="inherit" href="/posts">Posts</Button>
                    <Button color="inherit" href="/Categories">Categories</Button>
                    <Button color="inherit" href="/contactUs">Contact Us</Button>
                    <Button color="inherit" href="/browse">Browse</Button>

                    <span className="spacer"/>
                    <Button color="inherit" href="/">Login</Button>
                    <Button color="inherit" href="/signup">Signup</Button>
                </Toolbar>
            </AppBar>
        </div>
    );

};

export default Header;
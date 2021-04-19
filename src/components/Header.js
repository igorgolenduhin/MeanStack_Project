import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AuthContext from '../contexts/AuthContext';
import { useHistory } from 'react-router';
import { AccountCircle } from '@material-ui/icons';

const Header = (props) => {

    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleLogOut = () => {
        auth.logout();
        history.push('/');
    }

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
                    <Button color="inherit" href="/createPost">Create Post</Button>
                    <Button color="inherit" href="/Categories">Categories</Button>
                    <Button color="inherit" href="/contactUs">Contact Us</Button>
                    <Button color="inherit" href="/browse">Browse</Button>

                    <span className="spacer"/>
                    {auth.isLoggedIn &&
                        <Box>
                            <Button
                                color="inherit"
                                startIcon={<AccountCircle/>}
                            >
                                {auth.currentUser.username}
                            </Button>
                            <Button color="inherit" onClick={handleLogOut}>Logout</Button>
                        </Box>
                    }
                    {!auth.isLoggedIn &&
                        <Box>
                            <Button color="inherit" href="/">Login</Button>
                            <Button color="inherit" href="/signup">Signup</Button>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );

};

export default Header;
import React from "react";
import { Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Bookmark, Favorite, MoreVert } from "@material-ui/icons";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const Post = (props) => {

    return (
        <Box width="40%" marginTop="20px" marginX="auto">
            <Card>
                <CardHeader title={props.post.title}
                    action={
                        <IconButton aria-label="settings"
                        >
                            <MoreVert/>
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography>
                        {props.post.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="like" 
                    onClick={() => {
                        store.addNotification({
                          title: 'Liked !',
                          message: 'Someone Like your post',
                          type: 'default',                         // 'default', 'success', 'info', 'warning'
                          container: 'bottom-left',                // where to position the notifications
                          animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                          animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                          dismiss: {
                            duration: 3000
                          }
                        })
                      }}>
                        <Favorite/>
                    </IconButton>
                    <IconButton aria-label="add to favorites"
                    onClick={() => {
                        store.addNotification({
                          title: 'Favourite !',
                          message: 'Someone Favourited your post',
                          type: 'success',                         // 'default', 'success', 'info', 'warning'
                          container: 'bottom-left',                // where to position the notifications
                          animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                          animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                          dismiss: {
                            duration: 3000
                          }
                        })
                      }}>
                        <Bookmark/>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
        
     
    );
  };
export default Post;
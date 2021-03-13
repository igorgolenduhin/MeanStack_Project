import { Box, Button, Card, CardContent, CardHeader, FormGroup, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const ContactForm = (props) => {



    const [message, setMessage] = useState({

    });

    const handleChange = (e) => {
        setMessage( {...message, [e.target.name] : e.target.value} );
        console.log(message);
    };

    const handleSubmit = (e) => {
       
    }

    return (
        <Box width="60%" marginX="auto" marginTop="40px">
        <Card>
            <CardContent>
                <form>
                    <h2>Contact Us</h2>
                    <hr/>
                    <Box display="flex" flexDirection="row" alignItems="center"
                     width="80%" marginTop="20px">
                        <Typography variant="h6">Name:</Typography>
                        <Box marginLeft="10px">
                            <TextField required variant="outlined" label="Title" size="small"
                                name="name" onChange={handleChange} value={message.name}/>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row" alignItems="center"
                     width="80%" marginTop="20px">
                        <Typography variant="h6">Email:</Typography>
                        <Box marginLeft="10px">
                            <TextField required type= "email" variant="outlined" label="Title" size="small"
                                name="email" onChange={handleChange} value={message.email}/>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" alignItems="flex-start" marginTop="30px">
                        <Typography variant="h6">Message:</Typography>
                        <Box display="block" marginTop="10px" width="100%">
                            <TextField variant="outlined" label="Content" multiline rows={4} fullWidth
                                name="message" onChange={handleChange} value={message.message}/>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="center" marginTop="40px">
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Send</Button>
                    </Box>

                </form>
                

            </CardContent>
        </Card>
        </Box>
    );

}

export default ContactForm;
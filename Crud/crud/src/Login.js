
// import { react } from 'react';

import { Box, Grid, Card, Typography, InputLabel, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

// import Forgotpassword2 from './ForgotPassword2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {


    const navigate = useNavigate();
    return (
        <Box mt={10}>
            <Grid container>
                <Grid container mt={10}>
                    <Card style={{
                        margin: 'auto',
                        height: '379px',
                        width: '350px',
                        backgroundColor: 'ButtonFace'


                    }}>
                        <Box container style={{
                            marginLeft: '40px',
                            marginTop: '10px',
                            marginRight: '30px',
                            padding: '3px'

                        }}>
                            <Typography style={{
                                fontSize: '40px',
                                color: 'blue'
                            }}>ZKDIGIMAX L3</Typography>




                            <InputLabel >
                                User Name<span style={{
                                    color: 'red'
                                }}>*</span>
                            </InputLabel>

                            <TextField
                                // onChange={useHandler}
                                // {userError?<span>It is not valid</span>:<span>It is valid</span>}

                                size='small'
                                fullWidth
                                placeholder='Name'
                                multiline
                                maxRows={10}
                                width="fullWidth"
                            />

                            <InputLabel style={{
                                marginTop: '18px',
                                marginRight: '10px'
                            }}>
                                Password<span style={{ color: 'red' }}>*</span>
                            </InputLabel>

                            <TextField
                                required
                                size='small'
                                fullWidth
                                placeholder='password'
                                maxRows={10}
                                width="fullWidth"
                                style={{
                                    marginTop: '10px',

                                }}
                            />
                            <Button
                                variant="contained"
                                fullWidth

                                style={{
                                    // marginTop: '10px',
                                    // marginLeft: '20px'
                                    paddingTop: '2px',
                                    marginTop: '17px'
                                }}
                            //fullWidth
                            // onClick={() => {
                            //     handleSubmit();
                            // }
                            //}
                            >
                                Login
                            </Button>
                            <Button
                                variant="text"
                                fullWidth
                                size='small'
                                style={{
                                    marginTop: '10px',
                                }}
                                onClick={() => { navigate("/Add_new_Employee") }
                                }
                            >
                                Register
                            </Button>
                            <Button
                                variant="filled"
                                fullWidth
                                style={{
                                    marginTop: '10px',
                                }}
                            onClick={() => { navigate("/forgot_password") }
                            }
                            >
                                Forgot Password?
                            </Button>

                        </Box>
                    </Card>
                </Grid>
            </Grid>

        </Box>

    )
}

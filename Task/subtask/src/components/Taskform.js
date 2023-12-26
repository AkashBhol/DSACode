import { react } from 'react';
import { Card, Grid, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Taskfrom = () => {
    return (
        <>

            <p>Add New principal</p>
            <Card style={{ width: "80%", margin: "auto", marginTop: 4, backgroundColor: '#ADD8E6', height: '600px' }}>
                <Grid item container spacing={5} mt={2} >
                    <Grid item container ml={2} mr={2} spacing={2}>

                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                label="Principal Company Name"
                                defaultValue="Name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                label="company code"
                                defaultValue="Company code"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                label="Email"
                                defaultValue="email"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                label="Gender"
                                // defaultValue="Hello World"
                                select
                                value="male"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <InputLabel style={{marginRight:'49'}}>
                                First Name<span style={{ color: 'red' }}>*</span>
                            </InputLabel>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                label="owner first name"
                                defaultValue="first name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth

                                id="outlined-required"
                                label="owner last name"
                                defaultValue="last name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth

                                id="outlined-required"
                                label="owner email"
                                defaultValue="email"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth

                                id="outlined-required"
                                label="Country"
                                defaultValue="select Country"
                                select
                                value={'India'}

                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth

                                id="outlined-required"
                                label="state"
                                defaultValue="select Country"
                                select
                                value={'India'}

                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth

                                id="outlined-required"
                                label="City"
                                defaultValue="select City"
                                select
                                value={'India'}

                            />
                        </Grid>
                        <Grid item xs={12} style={{ margintop: '7px' }}>
                            <TextField
                                required
                                fullWidth

                                id="outlined-required"
                                label="Address"
                                defaultValue="Enter Address"


                            />
                        </Grid>

                        <Grid container spacing={2} px={2}>

                            <Grid item xs={12}>

                                <Box display={"flex"} flexDirection={"row-reverse"} style={{ marginTop: 10 }} ml={80} >

                                    <Box item pl={2}>

                                        <Button

                                            variant="contained"
                                            size="large"
                                            className="text-transform-none"
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                    <Box item>
                                        <Button
                                            className="text-transform-none"
                                            variant="outlined"
                                            size="large"
                                        >
                                            Back
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card >
        </>
    )
}
export default Taskfrom;
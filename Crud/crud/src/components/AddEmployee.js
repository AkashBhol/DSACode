import { Box, Card, Grid, InputLabel, Button, MenuItem } from "@mui/material";
import { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate, navigate } from "react-router-dom";

export default function AddEmployee() {
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        address: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setPayload({
            ...payload,
            [name]: event.target.value,
        })
    };

    const handleSubmit = () => {
        axios.post("http://localhost:8085/api/empsave", payload)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        // navigate("/ShowEmployee")
    }

    return (
        <>
            <Grid container style={{
                marginTop: '80px'
            }}>

                <Card style={{
                    color: "ActiveBorder",
                    margin: 'auto',
                    height: '370px',
                    width: '550px',
                    backgroundColor: 'ButtonFace'
                }}>
                    <span style={{
                        color: 'white',
                        fontSize: '63px',
                        backgroundColor: 'blue',
                        writingMode: "unset"
                    }}>Add New Employee</span>

                    <Grid container rowSpacing={2} padding={2} mt={4} style={{
                        marginTop: '10px', backgroundColor: '#0b0dd0a3'


                    }}>
                        <Grid sm={6} rowSpacing={2}>
                            <InputLabel>
                                First Name<span style={{
                                    color: 'red'
                                }}>*</span>
                            </InputLabel>
                            <TextField
                                fullWidth
                                name="firstName"
                                value={payload.firstName}
                                size="small"
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid sm={6} rowSpacing={2}>
                            <InputLabel>
                                Last Name<span style={{
                                    color: 'red'
                                }}>*</span>
                            </InputLabel>
                            <TextField

                                fullWidth
                                name="lastName"
                                value={payload.lastName}
                                size="small"
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid sm={6} >
                            <InputLabel>
                                Email<span style={{
                                    color: 'red'
                                }}>*</span>
                            </InputLabel>
                            <TextField
                                name="email"
                                value={payload.email}
                                fullWidth
                                size="small"
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid sm={6} >
                            <InputLabel>
                                City
                            </InputLabel>
                            <TextField
                                name="city"
                                value={payload.city}
                                fullWidth
                                size="small"
                                variant="outlined"
                                onChange={handleChange}
                                select
                            ><MenuItem value="option1">Balasore</MenuItem>
                                <MenuItem value="option2">bhadrak</MenuItem>
                                <MenuItem value="option3">baripada</MenuItem>
                                <MenuItem value="option1">Remuna</MenuItem>
                                <MenuItem value="option2">Niligiri</MenuItem>
                                <MenuItem value="option3">Bangalore</MenuItem>

                            </TextField>
                        </Grid>
                        <Grid sm={12}>
                            <InputLabel>
                                Address<span style={{
                                    color: 'red'
                                }}>*</span>
                            </InputLabel>
                            <TextField
                                fullWidth
                                name="address"
                                value={payload.address}
                                size="small"
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid mt={2}>
                            <Button variant="contained" onClick={handleSubmit} >Submit</Button>
                        </Grid>
                        <Grid mt={2} ml={4}>
                            <Button variant="contained"
                                onClick={() => { navigate("/ShowEmployee") }
                                }

                            >Show Employee</Button>
                        </Grid>
                        <Grid ml={20} mt={2}>
                            <Button variant="contained"
                                onClick={() => { navigate("/back1") }
                                }
                            >BACK</Button>
                        </Grid>
                    </Grid>

                </Card >
                
            </Grid >
        </>
    )

}

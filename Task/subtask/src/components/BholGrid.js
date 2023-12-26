import {react} from 'react';
import {Grid} from '@mui/material';
const BholGrid=()=>{
    return(
        <Grid item xs={12} container style={{position:'absolute',padding:'3px',padding:'40px',borderColor:'red',borderRadius:'2px'}} spacing={1}>
            <Grid item  lg={6}  >
                <input type="text" style={{backgroundColor:'green',height:'46px',width:'235px'}}/></Grid>
            <Grid item  lg={6}><input type="text"  style={{backgroundColor:'green',height:'46px',width:'235px'}}/></Grid>
            <Grid item  lg={6}> <input type="text" style={{backgroundColor:'red',height:'46px',width:'235px'}}/></Grid>
            <Grid item  lg={6} ><input type="text" style={{backgroundColor:'red',height:'46px',width:'235px'}}/></Grid>

        </Grid>
    )
}
export default BholGrid;
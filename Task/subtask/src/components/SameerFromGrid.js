import { Grid } from '@mui/material';
import {react} from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Akashhtml from './Akashhtml';
const SameerFromGrid=()=>{
    return(
    <Grid container spacing={2}>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Akashhtml/>
    </Grid>
    )
}
export default SameerFromGrid;
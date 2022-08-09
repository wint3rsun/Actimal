import {Box, Grid} from "@mui/material"

export default function HealthAppConnection(props) {
  return (
    <Box component={"fieldset"}
    sx={{
      width: 500,
      height: 500,
      p: 10,
      m: 'auto',
      border: '1px solid'

    }}
    autoComplete="on"
    >
    <Grid container alignItems="center" justify="center" direction={"column"}>
      <h1>Connect FitBit</h1>
      <Grid item>
        <h2>Place holder for fitbit or health app connection :D</h2>
      </Grid>
    </Grid>
  </Box>
  )
}

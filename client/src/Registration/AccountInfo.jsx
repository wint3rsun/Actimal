import { Grid, Box, TextField } from "@mui/material"

export default function AccountInfo(props) {

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
        <h1>User Information</h1>

        <Grid item>
          <TextField id="email" onChange={(e)=> {
              props.setFormData({
                ...props.formData,
                email: e.target.value
              });
              console.log(props.formData.email)
            }} 
            label="email"
            type={"email"}
            required
            margin="normal"/>
        </Grid>

        <Grid item>
          <TextField id="username" onChange={(e)=> {
              props.setFormData({
                ...props.formData,
                username: e.target.value
              });
            }} 
            value={props.formData.username}
            label="username"
            type={"text"}
            required
            margin="normal"/>
        </Grid>

        <Grid item>
          <TextField id="password" onChange={(e)=> {
              props.setFormData({
                ...props.formData,
                password: e.target.value
              });
            }}  
            label="password"
            type={"password"}
            required margin="normal"/>
        </Grid>
      </Grid>
    </Box>
  )
}

import { Grid, Box, Avatar, ButtonBase, Tooltip, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from "@mui/material";


export default function CharacterSelection(props) {

  return (
    <Box component={"fieldset"}
    sx={{
      width: 500,
      height: 500,
      p: 5,
      m: 'auto',
      border: '1px solid'

    }}
    autoComplete="on"
    >
    <Grid container alignItems="center" justify="center" >
      <h1>Select Your Character</h1>

      <Grid 
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <ButtonBase data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
          <Tooltip title={"Avatar 1"}>
          <Avatar 
              alt="avatar1" 
              src="https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg"
              sx={{width: 100, height: 100, '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              }}}
            />
          </Tooltip>
        </ButtonBase>

        <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Character 1</h5>
                <button type="button" className="avatar btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h2>Fake Character Info Can Go Here!</h2>
                <p>Maybe even our 3D model LOL</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel urna scelerisque, venenatis velit quis, maximus ipsum. Nunc id accumsan neque, suscipit maximus mauris. Maecenas laoreet sapien magna. In iaculis, est in viverra pretium, nisl urna molestie est, vitae aliquam massa quam sit amet diam. Nulla ac velit leo. Suspendisse fringilla ipsum nec tincidunt egestas. Sed vel sem felis. Duis ultricies libero eget erat dignissim, at pulvinar lorem finibus. Suspendisse blandit nisl et lacus sagittis dignissim. In hac habitasse platea dictumst. Nunc vehicula augue et erat ultricies, in faucibus orci sodales. Cras at dignissim nulla, ut aliquam purus. Aliquam erat volutpat. Donec luctus lacus purus. Fusce sodales ut diam ut commodo. Praesent lacinia sapien lacinia elit ultricies, nec congue nisi mollis. Vivamus aliquam ac purus quis molestie. Praesent pharetra lacinia augue et tincidunt. Suspendisse egestas felis vel arcu feugiat, quis sollicitudin diam sollicitudin. Duis sed ex vitae velit placerat condimentum. Morbi at efficitur lectus, at aliquet quam. Vestibulum consectetur arcu vel est laoreet, sit amet viverra erat dictum. Aenean auctor massa libero. Donec rutrum nulla quis commodo ultricies. Nullam auctor elementum quam a facilisis. Maecenas non erat id ipsum tempus porta non nec erat. Aliquam convallis sed risus vitae placerat. Fusce aliquet lectus non risus hendrerit, vitae iaculis nisi aliquet. Vestibulum id felis tellus. Aenean scelerisque lectus et tellus lobortis condimentum. Etiam cursus metus lectus, nec bibendum justo porttitor gravida. In posuere sapien ac rhoncus rutrum. Ut non sem dolor. Nulla facilisi. Maecenas eleifend ex turpis, eu egestas elit tempus ac. Nunc ac dapibus felis. Curabitur bibendum, massa vel consectetur blandit, arcu dui consectetur risus, quis bibendum massa ante nec leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed lorem ac orci tincidunt congue id eget ante. Aenean tristique magna at varius rhoncus. Ut malesuada mi nulla, ac aliquet justo rhoncus ac. Aliquam vel nulla lacus. Nullam sollicitudin aliquam nisi, eget convallis tortor fermentum in. Proin augue risus, auctor eget semper vestibulum, vulputate sed ante. Sed posuere lobortis elementum. Cras ut molestie nunc, vel ultrices nulla. In eros massa, congue non massa egestas, rutrum pellentesque ex. Duis maximus quis velit dignissim laoreet. Quisque a semper odio. Nulla facilisi. Proin ultricies magna sagittis dui malesuada, non condimentum sem placerat. Vivamus maximus suscipit mi, ut luctus erat ornare non. Nullam feugiat dui vel eros tristique tempor. Maecenas ultricies neque sed egestas laoreet. Sed nec vestibulum risus. Integer sit amet orci erat. Quisque lorem neque, sagittis et tempor id, ultrices at tortor. Cras egestas orci id justo efficitur facilisis id sed eros. Etiam pulvinar facilisis ultricies. Proin erat ligula, lobortis sed arcu ut, facilisis varius turpis. Quisque velit nisl, lacinia quis maximus aliquam, mattis quis nisl. Aenean eu venenatis purus, nec dignissim orci. Morbi gravida tortor id nibh feugiat rhoncus. Maecenas vulputate dui eget metus efficitur condimentum. Pellentesque ac faucibus risus. Nulla eu enim eu nisl pharetra varius. Vivamus convallis enim at nulla iaculis consequat. Cras egestas malesuada tortor.</p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </Grid>
      <Grid 
        item
        sm={7}
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <ButtonBase data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
          <Tooltip title={"Avatar 2"}>
          <Avatar 
              alt="avatar1" 
              src="https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg"
              sx={{width: 100, height: 100, '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              }}}
            />
          </Tooltip>
        </ButtonBase>

        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Character 2</h5>
                <button type="button" className="avatar btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h2>Fake Character Info Can Go Here!</h2>
                <p>Maybe even our 3D model LOL</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel urna scelerisque, venenatis velit quis, maximus ipsum. Nunc id accumsan neque, suscipit maximus mauris. Maecenas laoreet sapien magna. In iaculis, est in viverra pretium, nisl urna molestie est, vitae aliquam massa quam sit amet diam. Nulla ac velit leo. Suspendisse fringilla ipsum nec tincidunt egestas. Sed vel sem felis. Duis ultricies libero eget erat dignissim, at pulvinar lorem finibus. Suspendisse blandit nisl et lacus sagittis dignissim. In hac habitasse platea dictumst. Nunc vehicula augue et erat ultricies, in faucibus orci sodales. Cras at dignissim nulla, ut aliquam purus. Aliquam erat volutpat. Donec luctus lacus purus. Fusce sodales ut diam ut commodo. Praesent lacinia sapien lacinia elit ultricies, nec congue nisi mollis. Vivamus aliquam ac purus quis molestie. Praesent pharetra lacinia augue et tincidunt. Suspendisse egestas felis vel arcu feugiat, quis sollicitudin diam sollicitudin. Duis sed ex vitae velit placerat condimentum. Morbi at efficitur lectus, at aliquet quam. Vestibulum consectetur arcu vel est laoreet, sit amet viverra erat dictum. Aenean auctor massa libero. Donec rutrum nulla quis commodo ultricies. Nullam auctor elementum quam a facilisis. Maecenas non erat id ipsum tempus porta non nec erat. Aliquam convallis sed risus vitae placerat. Fusce aliquet lectus non risus hendrerit, vitae iaculis nisi aliquet. Vestibulum id felis tellus. Aenean scelerisque lectus et tellus lobortis condimentum. Etiam cursus metus lectus, nec bibendum justo porttitor gravida. In posuere sapien ac rhoncus rutrum. Ut non sem dolor. Nulla facilisi. Maecenas eleifend ex turpis, eu egestas elit tempus ac. Nunc ac dapibus felis. Curabitur bibendum, massa vel consectetur blandit, arcu dui consectetur risus, quis bibendum massa ante nec leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed lorem ac orci tincidunt congue id eget ante. Aenean tristique magna at varius rhoncus. Ut malesuada mi nulla, ac aliquet justo rhoncus ac. Aliquam vel nulla lacus. Nullam sollicitudin aliquam nisi, eget convallis tortor fermentum in. Proin augue risus, auctor eget semper vestibulum, vulputate sed ante. Sed posuere lobortis elementum. Cras ut molestie nunc, vel ultrices nulla. In eros massa, congue non massa egestas, rutrum pellentesque ex. Duis maximus quis velit dignissim laoreet. Quisque a semper odio. Nulla facilisi. Proin ultricies magna sagittis dui malesuada, non condimentum sem placerat. Vivamus maximus suscipit mi, ut luctus erat ornare non. Nullam feugiat dui vel eros tristique tempor. Maecenas ultricies neque sed egestas laoreet. Sed nec vestibulum risus. Integer sit amet orci erat. Quisque lorem neque, sagittis et tempor id, ultrices at tortor. Cras egestas orci id justo efficitur facilisis id sed eros. Etiam pulvinar facilisis ultricies. Proin erat ligula, lobortis sed arcu ut, facilisis varius turpis. Quisque velit nisl, lacinia quis maximus aliquam, mattis quis nisl. Aenean eu venenatis purus, nec dignissim orci. Morbi gravida tortor id nibh feugiat rhoncus. Maecenas vulputate dui eget metus efficitur condimentum. Pellentesque ac faucibus risus. Nulla eu enim eu nisl pharetra varius. Vivamus convallis enim at nulla iaculis consequat. Cras egestas malesuada tortor.</p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </Grid>
      <Grid 
        item
        sm={3}
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <ButtonBase data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
          <Tooltip title={"Avatar 3"}>
          <Avatar 
              alt="avatar1" 
              src="https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg"
              sx={{width: 100, height: 100, '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              }}}
            />
          </Tooltip>
        </ButtonBase>

        <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Character 3</h5>
                <button type="button" className="avatar btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h2>Fake Character Info Can Go Here!</h2>
                <p>Maybe even our 3D model LOL</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel urna scelerisque, venenatis velit quis, maximus ipsum. Nunc id accumsan neque, suscipit maximus mauris. Maecenas laoreet sapien magna. In iaculis, est in viverra pretium, nisl urna molestie est, vitae aliquam massa quam sit amet diam. Nulla ac velit leo. Suspendisse fringilla ipsum nec tincidunt egestas. Sed vel sem felis. Duis ultricies libero eget erat dignissim, at pulvinar lorem finibus. Suspendisse blandit nisl et lacus sagittis dignissim. In hac habitasse platea dictumst. Nunc vehicula augue et erat ultricies, in faucibus orci sodales. Cras at dignissim nulla, ut aliquam purus. Aliquam erat volutpat. Donec luctus lacus purus. Fusce sodales ut diam ut commodo. Praesent lacinia sapien lacinia elit ultricies, nec congue nisi mollis. Vivamus aliquam ac purus quis molestie. Praesent pharetra lacinia augue et tincidunt. Suspendisse egestas felis vel arcu feugiat, quis sollicitudin diam sollicitudin. Duis sed ex vitae velit placerat condimentum. Morbi at efficitur lectus, at aliquet quam. Vestibulum consectetur arcu vel est laoreet, sit amet viverra erat dictum. Aenean auctor massa libero. Donec rutrum nulla quis commodo ultricies. Nullam auctor elementum quam a facilisis. Maecenas non erat id ipsum tempus porta non nec erat. Aliquam convallis sed risus vitae placerat. Fusce aliquet lectus non risus hendrerit, vitae iaculis nisi aliquet. Vestibulum id felis tellus. Aenean scelerisque lectus et tellus lobortis condimentum. Etiam cursus metus lectus, nec bibendum justo porttitor gravida. In posuere sapien ac rhoncus rutrum. Ut non sem dolor. Nulla facilisi. Maecenas eleifend ex turpis, eu egestas elit tempus ac. Nunc ac dapibus felis. Curabitur bibendum, massa vel consectetur blandit, arcu dui consectetur risus, quis bibendum massa ante nec leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed lorem ac orci tincidunt congue id eget ante. Aenean tristique magna at varius rhoncus. Ut malesuada mi nulla, ac aliquet justo rhoncus ac. Aliquam vel nulla lacus. Nullam sollicitudin aliquam nisi, eget convallis tortor fermentum in. Proin augue risus, auctor eget semper vestibulum, vulputate sed ante. Sed posuere lobortis elementum. Cras ut molestie nunc, vel ultrices nulla. In eros massa, congue non massa egestas, rutrum pellentesque ex. Duis maximus quis velit dignissim laoreet. Quisque a semper odio. Nulla facilisi. Proin ultricies magna sagittis dui malesuada, non condimentum sem placerat. Vivamus maximus suscipit mi, ut luctus erat ornare non. Nullam feugiat dui vel eros tristique tempor. Maecenas ultricies neque sed egestas laoreet. Sed nec vestibulum risus. Integer sit amet orci erat. Quisque lorem neque, sagittis et tempor id, ultrices at tortor. Cras egestas orci id justo efficitur facilisis id sed eros. Etiam pulvinar facilisis ultricies. Proin erat ligula, lobortis sed arcu ut, facilisis varius turpis. Quisque velit nisl, lacinia quis maximus aliquam, mattis quis nisl. Aenean eu venenatis purus, nec dignissim orci. Morbi gravida tortor id nibh feugiat rhoncus. Maecenas vulputate dui eget metus efficitur condimentum. Pellentesque ac faucibus risus. Nulla eu enim eu nisl pharetra varius. Vivamus convallis enim at nulla iaculis consequat. Cras egestas malesuada tortor.</p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
      </Grid>
    </Grid>
    <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Select Avatar</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="avatar"
          value={props.formData.avatar}
          onChange={(e)=>{
            props.setFormData({
              ...props.formData,
              avatar: e.target.value
            });
          }}
          
        >
          <FormControlLabel value="1" control={<Radio />} label="Avatar 1" />
          <FormControlLabel value="2" control={<Radio />} label="Avatar 2" />
          <FormControlLabel value="3" control={<Radio />} label="Avatar 3" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

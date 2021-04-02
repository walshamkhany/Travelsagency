import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

      },
    gridMargin:
    {   
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    gridbreak:
    {    display:"none",
        [theme.breakpoints.up('md')]: {
            display:"block",
          },
    }

}));

const GreenCheckbox = withStyles({
    root: {
      color: "#5132e2",
      '&$checked': {
        color: "linear-gradient(125deg, #5132e2 0%, #6a2ee5 50%, #8329e9 100%)",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const countries  = [
    { label: 'United Arab Emirates' },
    { label: 'Afghanistan'},
    { label: 'Austria'},
    { label: 'Australia', suggested: true },
    { label: 'Belgium'},
    { label: 'Brazil'},
    { label: 'Bouvet Island'},
    { label: 'Canada', suggested: true },
    { label: 'Switzerland'},
    { label: 'Faroe Islands' },
    { label: 'France' , suggested: true },
    { label: 'United Kingdom'},
    { label: 'Greenland' },
    { label: 'Greece'},
    { label: 'Hong Kong' },
    { label: 'Croatia' },
    { label: 'Haiti' },
    { label: 'Hungary'},
    { label: 'Indonesia'},
    { label: 'Ireland' },
    { label: 'India'},
    { label: 'British Indian Ocean Territory' },
    { label: 'Iraq' },
    { label: 'Iran, Islamic Republic of'},
    { label: 'Iceland' },
    { label: 'Italy'},,
    { label: 'Jordan' },
    { label: 'Japan', suggested: true },
    { label: 'Comoros' },
    { label: 'Korea, Republic of'},
    { label: 'Kuwait' },
    { label: 'Kazakhstan'},
    { label: 'Lebanon' },
    { label: 'Sri Lanka'},
    { label: 'Liberia' },
    { label: 'Libya' },
    { label: 'Maldives' },
    { label: 'New Zealand'},
    { label: 'Oman' },
    { label: 'Philippines'},
    { label: 'Pakistan'},
    { label: 'Poland'},
    { label: 'Palestine, State of' },
    { label: 'Qatar' },
    { label: 'Reunion' },
    { label: 'Romania'},
    { label: 'Serbia' },
    { label: 'Russian Federation'},
    { label: 'Saudi Arabia' },
    { label: 'Sudan' },
    { label: 'Sweden'},
    { label: 'Slovenia' },
    { label: 'Svalbard and Jan Mayen'},
    { label: 'Slovakia' },
    { label: 'South Sudan' },
    { label: 'Turkey'},
    { label: 'Tuvalu' },
    { label: 'Taiwan, Province of China' },
    { label: 'United Republic of Tanzania' },
    { label: 'Ukraine' },
    { label: 'United States',suggested: true },
    { label: 'Uruguay' },
    { label: 'Uzbekistan'},
    { label: 'Yemen' },
  ];
  const nationalities  = [
    { label: 'United Arab Emirates' },
    { label: 'Afghanistan'},
    { label: 'Austria'},
    { label: 'Australia', suggested: true },
    { label: 'Belgium'},
    { label: 'Brazil'},
    { label: 'Bouvet Island'},
    { label: 'Canada', suggested: true },
    { label: 'Switzerland'},
    { label: 'Faroe Islands' },
    { label: 'France' , suggested: true },
    { label: 'United Kingdom'},
    { label: 'Greenland' },
    { label: 'Greece'},
    { label: 'Hong Kong' },
    { label: 'Croatia' },
    { label: 'Haiti' },
    { label: 'Hungary'},
    { label: 'Indonesia'},
    { label: 'Ireland' },
    { label: 'India'},
    { label: 'British Indian Ocean Territory' },
    { label: 'Iraq' },
    { label: 'Iran, Islamic Republic of'},
    { label: 'Iceland' },
    { label: 'Italy'},,
    { label: 'Jordan' },
    { label: 'Japan', suggested: true },
    { label: 'Comoros' },
    { label: 'Korea, Republic of'},
    { label: 'Kuwait' },
    { label: 'Kazakhstan'},
    { label: 'Lebanon' },
    { label: 'Sri Lanka'},
    { label: 'Liberia' },
    { label: 'Libya' },
    { label: 'Maldives' },
    { label: 'New Zealand'},
    { label: 'Oman' },
    { label: 'Philippines'},
    { label: 'Pakistan'},
    { label: 'Poland'},
    { label: 'Palestine, State of' },
    { label: 'Qatar' },
    { label: 'Reunion' },
    { label: 'Romania'},
    { label: 'Serbia' },
    { label: 'Russian Federation'},
    { label: 'Saudi Arabia' },
    { label: 'Sudan' },
    { label: 'Sweden'},
    { label: 'Slovenia' },
    { label: 'Svalbard and Jan Mayen'},
    { label: 'Slovakia' },
    { label: 'South Sudan' },
    { label: 'Turkey'},
    { label: 'Tuvalu' },
    { label: 'Taiwan, Province of China' },
    { label: 'United Republic of Tanzania' },
    { label: 'Ukraine' },
    { label: 'United States',suggested: true },
    { label: 'Uruguay' },
    { label: 'Uzbekistan'},
    { label: 'Yemen' },
  ];



export default function UserInfoPage(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        Male: false,
        Female: false,
    });

    const handleChange = (event) => {
        state.Female = false;
        state.Male = false;
        props.setUserInfo("Gender", event.target.name)
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    

  return (
    <React.Fragment>
         <Grid container spacing="3" justify ="center" >
            <Grid item xs= {12} md = {6} style = {{backgroundColor: "#6a2ee5"}} className ={classes.gridbreak}>
              {/* ADD BACKGOUND */}
            </Grid>
            <Grid item xs= {12} md = {6}>
            <div className={classes.root}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h4" align="center">
                        Apply now to work in Dubai
                    </Typography>
                </Grid>

                <Grid container spacing={1} className={classes.gridMargin}> 
                    <Grid item xs={12} md={6 }>
                        <TextField  
                            required
                            id="outlined-firstname-input"
                            label="First Name"
                            type="name"
                            autoComplete="current-firstname"
                            variant="outlined"
                            fullWidth
                            onChange = {e => props.setUserInfo("firstname", e.target.value)}
                         
                        />
                    </Grid>
                    <Grid item xs={12} md={6 }> 
                            <TextField
                            required
                            id="outlined-lastname-input"
                            label="Last Name"
                            type="name"
                            autoComplete="current-lastname"
                            variant="outlined"
                            fullWidth 
                            onChange = {e => props.setUserInfo("lastname", e.target.value)}
                        />
                     </Grid>
                </Grid>

                <Grid container spacing={1} className={classes.gridMargin}> 
                    <Grid item xs={12} md={6 }className={classes.container}>
                        <TextField
                        required
                                id="date"
                                label="Date of Birth"
                                type="date"
                                variant="outlined"
                                defaultValue=""
                                fullWidth 
                        
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange = {e => props.setUserInfo("DateOfBirth", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6 }> 
                     <p style= {{margin:1}}>Gender</p>
                        <FormGroup required row>
                            <FormControlLabel
                                control={<GreenCheckbox  checked={state.Male } onChange={handleChange} name="Male" />}
                                label="Male"
                            />
                            <FormControlLabel
                                control={<GreenCheckbox  checked={state.Female} onChange={handleChange} name="Female" />}
                                label="Female"
                            />
                        </FormGroup>
                     </Grid>
                </Grid>

                <Grid container spacing={1} className={classes.gridMargin}> 
                    <Grid item xs={12} md={6 }className={classes.container}>
                        <Autocomplete
                            id="country-select-demo"
                            fullWidth
                            options={countries}
                            classes={{
                                option: classes.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(option) => (
                                <React.Fragment>
                    
                                {option.label} 
                                </React.Fragment>
                            )}
                            onChange = {e => props.setUserInfo("Nationality", e.target.innerText)}
                            renderInput={(params) => (
                                <TextField
                                required
                                {...params}
                                label="Nationality"
                                variant="outlined"
                                
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                    
                                }}
                                />
                            )}

             
                            />
                        </Grid>
                    <Grid item xs={12} md={6 }> 
                        <Autocomplete
                            id="country-select-demo"
                            fullWidth
                            options={nationalities}
                            classes={{
                                option: classes.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(option) => (
                                <React.Fragment>
                    
                                {option.label} 
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                required
                                {...params}
                                label="Country of Residence"
                                variant="outlined"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            onChange = {e => props.setUserInfo("CountryOfResidence", e.target.innerText)}
                        />
    
                     </Grid>
                </Grid>
                
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5" align="left">
                        How can we contact you?
                    </Typography>
                </Grid>
                <Grid container spacing={1} className={classes.gridMargin}> 
                    <Grid item xs={12} md={6 }>
                        <TextField
                        required
                            id="outlined-number-input"
                            label="Contact number"
                            type="phone"
                            autoComplete="current-number"
                            variant="outlined"
                            fullWidth
                            onChange = {e => props.setUserInfo("ContactNumber", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6 }> 
                            <TextField
                            required
                            id="outlined-email-input"
                            label="Email address"
                            type="email"
                            autoComplete="current-email"
                            variant="outlined"
                            fullWidth 

                            onChange = {e => props.setUserInfo("Email", e.target.value)}
                        />
                     </Grid>
                </Grid> 

            </div>
        </Grid>

          </Grid>
      
    </React.Fragment>
  );
}
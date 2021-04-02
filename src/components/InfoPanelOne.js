import IconTextButton from './IconTextButton'
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';
import calender from './Icons/schedule.svg';
import {YesNo} from './Icons/iconsmap';
import thumbdown from './Icons/thumb-down.svg';
import thumbup from './Icons/thumbs-up.png';


export default function InfoPanelOne({handleButton, buttonStates}) {
  return (
    <>
    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        Have you ever visited Dubai?
        
      </Typography>
      <Grid container spacing="3">
      <Grid item >
            <img className = "img-icon" src={thumbup}/>
            <IconTextButton tag="Yes"  handleButton={handleButton} pageNumber="0" buttonState={buttonStates[0]}> {/*pagenumbers are the button indexes in the state array of the parent */}
            </IconTextButton>
          </Grid>
          <Grid item >
            <img className = "img-icon" src={thumbdown}/>
            <IconTextButton tag="No"  handleButton={handleButton} pageNumber="0" buttonState={buttonStates[0]}> {/*pagenumbers are the button indexes in the state array of the parent */}
            </IconTextButton>
          </Grid>
          
      </Grid>
      
      
    </div>

    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        Do you have any friends or family in Dubai?
      </Typography>
      <Grid container spacing="3">
        <Grid item >
              <img className = "img-icon" src={thumbup}/>
              <IconTextButton tag="Yes"  handleButton={handleButton} pageNumber="7" buttonState={buttonStates[7]}> {/*pagenumbers are the button indexes in the state array of the parent */}
              </IconTextButton>
            </Grid>
            <Grid item >
              <img className = "img-icon" src={thumbdown}/>
              <IconTextButton tag="No"  handleButton={handleButton} pageNumber="7" buttonState={buttonStates[7]}> {/*pagenumbers are the button indexes in the state array of the parent */}
              </IconTextButton>
            </Grid>
      </Grid>
    </div>

    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        How long do you want to stay in Dubai?
      </Typography>
      <Grid container spacing="3">
        {["Upto 3 months", "3 to 6 months", "6 to 12 months", "+12 months", "+3 years"].map((tag, idx) => (
          <Grid item >
     
            <img className = "img-icon" src={calender}/>
            <IconTextButton key={idx} tag={tag}  handleButton={handleButton} pageNumber="8" buttonState={buttonStates[8]}/> {/*pagenumbers are the button indexes in the state array of the parent */}
          </Grid>
        ))}
      </Grid>
    </div>
    
    </>
  );
}
import IconTextButton from './IconTextButton'
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';

export default function InfoPanelThree ({handleButton, buttonState}) {
    const list = [
        "Construction", "Hosiptality", "Real estate", "Tourism", "Manufacturing", "Technology", "Media",
        "Farming", "Fishing", "Education", "Public services", "Administration", "Financial services",
        "Legal", "Health care", "Government", "Medical", "Security", "Logistics", "Robotics", "Fashion",
        "Automotive", "Transporation", "Customer support",
    ]
  return (
    <>
    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        What industries would you prefer to work in?
      </Typography>
      <Grid container spacing="3">
        {list.map((tag, idx) => (
          <Grid item >
            <IconTextButton key={idx} tag={tag} handleButton={handleButton} pageNumber="2" buttonState={buttonState}/>
          </Grid>
        ))}
      </Grid>
    </div>
    
    </>
  );
}
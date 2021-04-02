import IconTextButton from './IconTextButton'
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';



export default function InfoPanelTwo ({handleButton, buttonState}) {
  return (
    <>
    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        Why do you want to come to Dubai?
      </Typography>
      <Grid container spacing="3">
        {["Lifestyle", "work opportunities", "Education", "Finance", "Toursim", "Family", "Business", "Security", "The weather", "Meeting new people", "culture"].map((tag, idx) => (
          <Grid item >
            <IconTextButton key={idx} tag={tag} handleButton={handleButton} pageNumber="1" buttonState={buttonState}/>
          </Grid>
        ))}
      </Grid>
    </div>
    
    </>
  );
}
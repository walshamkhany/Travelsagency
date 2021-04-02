import IconTextButton from './IconTextButton'
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';

export default function InfoPanelSeven({handleButton, buttonState}) {
    const list = [
        "Right now", "0 to 3 months", "3 to 6 months", "6 to 12 months", "After 1 year", "I'm not sure"
    ]
  return (
    <>
    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        How soon do you want to come to Dubai?
      </Typography>
      <Grid container spacing="3">
        {list.map((tag, idx) => (
          <Grid item >
            <IconTextButton key={tag} tag={tag} handleButton={handleButton} pageNumber="6" buttonState={buttonState}/>
          </Grid>
        ))}
      </Grid>
    </div>
    
    </>
  );
}
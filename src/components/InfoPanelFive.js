import IconTextButton from './IconTextButton'
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';

export default function InfoPanelFive({handleButton, buttonState}) {
    const list = [
        "No savings", "0 to 1000 aed", "1000 to 5000 aed", "5000 to 10000 aed", "10,000 to 20,000 aed",
        "20,000 to 50,000 aed", "+50,000 aed",
    ]
  return (
    <>
    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        Do you have any financial savings?
      </Typography>
      <Grid container spacing="3">
        {list.map((tag, idx) => (
          <Grid item >
            <IconTextButton key={tag} tag={tag} handleButton={handleButton} pageNumber="4" buttonState={buttonState}/>
          </Grid>
        ))}
      </Grid>
    </div>
    
    </>
  );
}
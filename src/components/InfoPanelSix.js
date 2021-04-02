import IconTextButton from './IconTextButton'
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';

export default function InfoPanelSix({handleButton, buttonState}) {
    const list = [
        "High school or less", "College", "Diploma", "Batchelors"
    ]
  return (
    <>
    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        What is your level of education?
      </Typography>
      <Grid container spacing="3">
        {list.map((tag, idx) => (
          <Grid item >
            <IconTextButton key={idx} tag={tag} handleButton={handleButton} pageNumber="5" buttonState={buttonState}/>
          </Grid>
        ))}
      </Grid>
    </div>
    
    </>
  );
}
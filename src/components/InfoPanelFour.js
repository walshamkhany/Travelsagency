import IconTextButton from './IconTextButton'
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';

export default function InfoPanelFour ({handleButton, buttonState}) {
    const list = [
        "Outdoors", "Fitness", "Health", "Travel", "Theme parks", "Cooking", "Sports", "Adventure",
        "Music", "Fashion", "Technology", "Architecture", "Writing", "Gaming", "Dining","History",
        "Theatre", "Networking", "Art", "Politics", "Fishing",  "Meet people", "Podcasts",
        "Gambling", "Self improvement", "Foreign languages", "Movies", "Celebrities", "Dating",
        "Social media", "Photography"
    ]
  return (
    <>
    <div className="component-space">
      <Typography variant="h6" gutterBottom>
        What are your interests?
      </Typography>
      <Grid container spacing="3">
        {list.map((tag, idx) => (
          <Grid item >
            <IconTextButton key={tag} tag={tag} handleButton={handleButton} pageNumber="3" buttonState={buttonState}/>
          </Grid>
        ))}
      </Grid>
    </div>
    
    </>
  );
}
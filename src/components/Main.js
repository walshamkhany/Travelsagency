import React, { useEffect, useState } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InfoPanelOne from './InfoPanelOne';
import InfoPanelTwo from './InfoPanelTwo';
import InfoPanelThree from './InfoPanelThree';
import InfoPanelFour from './InfoPanelFour';
import InfoPanelFive from './InfoPanelFive';
import InfoPanelSix from './InfoPanelSix';
import InfoPanelSeven from './InfoPanelSeven';
import UserInfoPage from './UserInfoPage';
import PaymentForm from './PaymentForm';
import Review from './Review';
import LinearProgress from '@material-ui/core/LinearProgress';
import './style.css'

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },

  buttons: {
    display: 'flex',
    marginTop: theme.spacing(3),
  },
  
  root: {
    flexGrow: 1,
  },

  mainlayout:{
    margin:0,
    padding: theme.spacing(8),
    clear: "both",
    display: "block",
  },
  header:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(8),
  },

}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    bar: {
      borderRadius: 5,
      background: "linear-gradient(125deg, #5132e2 0%, #6a2ee5 50%, #8329e9 100%)",
    
    },
  }))(LinearProgress);

const steps = ['User Info', 'Travel Info panel 1', 'Travel Info panel 2', 
              'Travel Info panel 3' , 'Travel Info panel 4' , 'Travel Info panel 5' , 
              'Travel Info panel 6', 'Travel Info panel 7' , 'Review'];






export default function Main() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [buttonStates, setButtonStates] = useState(["0", "1", "2", "3", "4", "5","6", "7", "8"]);
  //function (params)
  //uses set state (params)

  const [progress, setprogress] = useState(0)
  const handleNext = (event) => {
    event.preventDefault()
    setActiveStep(activeStep + 1);
    if (progress > 85) setprogress(100);
    else setprogress(progress + 13);
  };

  const handleBack = (event) => {
    event.preventDefault()
    setActiveStep(activeStep - 1);
    setprogress(progress - 13);
  };

  const handleSetStep = (event, target) => {
    event.preventDefault()
    setActiveStep(target);
    setprogress(13*target);
  };

  const [UserInfo, setUserInfo] = useState({})
  const UserInfoHandler = (type, value) => {
    console.log(value)
    setUserInfo({...UserInfo, [type]: value})
  }



  const handleButtonsChange = (pageNumber, tag) => {
    var state = [...buttonStates]
    state[pageNumber] = tag
    setButtonStates([...state])
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <UserInfoPage setUserInfo={UserInfoHandler} />;
      case 1:
        return <InfoPanelOne buttonStates={buttonStates} handleButton={handleButtonsChange}/>;
      case 2:
        return <InfoPanelTwo buttonState={buttonStates[1]} handleButton={handleButtonsChange}/>;
      case 3:
        return <InfoPanelThree buttonState={buttonStates[2]} handleButton={handleButtonsChange}/>;
      case 4:
        return <InfoPanelFour buttonState={buttonStates[3]} handleButton={handleButtonsChange}/>;
      case 5:
        return <InfoPanelFive buttonState={buttonStates[4]} handleButton={handleButtonsChange}/>;
      case 6:
        return <InfoPanelSix buttonState={buttonStates[5]} handleButton={handleButtonsChange}/>;
      case 7:
        return <InfoPanelSeven buttonState={buttonStates[6]} handleButton={handleButtonsChange}/>;
      case 8:
        return <Review UserInfo= {UserInfo} buttonStates={buttonStates} handleSetStep={handleSetStep} />;  
      default:
        throw new Error('Unknown step');
    }
  }
  

  return (
    <>

      <main className={classes.mainlayout}>

      <div className={classes.header}>
        <Typography component="h1" variant="h4" align="center">
          digg
        </Typography>

        {activeStep === 0 ? <> </> : 
          <div style={{width: "70%"}}>
            <div className={classes.root}>
                <BorderLinearProgress variant="determinate" value={progress} />
            </div>
          </div>}
      </div>

          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your <i class="fa fa-times-circle-o" aria-hidden="true"></i>.
                </Typography>
                <Typography variant="subtitle1">
                  Your form have been submited
                </Typography>
              </>
            ) : (
              <>
              <form onSubmit={handleNext}>
                {getStepContent(activeStep)}
                <div className={classes.buttons} style={activeStep == 0 ?{float: "right"} : {}}>
                  {activeStep !== 0 && (
                    <button 
                    className="back-btn"
                    onClick={handleBack}>
                      Back
                    </button>
                  )}
                  <button
                    className="next-btn"
                    type="submit"
                    // onClick={handleNext}
                    style={ {marginLeft:"25px"}}
                  >
                    {activeStep === steps.length - 1 ? 'Complete Application' : 'Next'}
                  </button>
                </div>
              </form>
              </>
            )}
          </>
      </main>
    </>
  );
}
import React from 'react';
import Grid from  '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import IconTextButton from './IconTextButton'

import EditIcon from '@material-ui/icons/Edit';
import './style.css'

export default function Review({UserInfo, buttonStates, handleSetStep}) {

  const questionaire = {
    question1: buttonStates.[0],
    question2: buttonStates.[7],
    question3: buttonStates.[8],
    question4: buttonStates.[1],
    question5: buttonStates.[2],
    question6: buttonStates.[3],
    question7: buttonStates.[4],
    question8: buttonStates.[5],
    question9: buttonStates.[6],
  }

  const date = (new Date(UserInfo.DateOfBirth)).toDateString()
  const datesplit = date.split(' ')
  const dateformmated = `${datesplit[2]} ${datesplit[1]} ${datesplit[3]}`

  return (
    <>
    <Typography variant="h6" gutterBottom>
      Complete - Review your application
    </Typography>

    <div className="review-body">
      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" className="review-title" style={{marginRight: "20px"}}>
          Basic information
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(0)}>
            <EditIcon fontSize="inherit" />
        </IconButton  >
      </div>

      <Grid container spacing="3">

        {UserInfo? 
        <>
        {console.log(UserInfo)}
          <Grid item >
            <Typography variant="subtitle" gutterBottom>
              Name: {UserInfo.firstname} {UserInfo.lastname} 
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle" gutterBottom>
              {console.log( new Date(UserInfo.DateOfBirth))}
              Date of birth: {dateformmated}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle" gutterBottom>
              Gender: {UserInfo.Gender}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle" gutterBottom>
              Nationality: {UserInfo.Nationality}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle" gutterBottom>
              Country of residence: {UserInfo.CountryOfResidence}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle" gutterBottom>
              ContactNumber: {UserInfo.ContactNumber}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle" gutterBottom>
              Email: {UserInfo.Email}
            </Typography>
          </Grid>
        </>
        : {}}
      </Grid>

    </div>



    <div className="review-body">
      <Typography variant="h6" className="review-title" style={{marginBottom:"20px"}}>
        Questionnaire
      </Typography>

      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
          Have you ever visited Dubai?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(1)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question1}/>
      </div>

      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
          Do you have any friends or family in Dubai?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(1)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question2}/>
      </div>


      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
        How long do you want to stay in Dubai?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(1)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question3}/>
      </div>


      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
        Why do you want to come to Dubai?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(2)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question4}/>
      </div>


      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
        What industries would you prefer to work in?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(3)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question5}/>
      </div>


      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
        What are your interests?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(3)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question6}/>
      </div>

      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
        Do you have any financial savings?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(4)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question7}/>
      </div>

      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
        What is your level of education?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}} onClick={()=>handleSetStep(5)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question8}/>
      </div>

      <div style={{display:"flex", marginBottom:"20px"}}>
        <Typography variant="h6" style={{marginRight: "20px"}}>
        How soon do you want to come to Dubai?
        </Typography>
        <IconButton aria-label="edit" size="small" style={{color:"#6a2ee5"}}  onClick={()=>handleSetStep(6)}>
            <EditIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="component-space">
        <IconTextButton tag={questionaire.question9}/>
      </div>
      
    </div>
    
  </>
  );
}
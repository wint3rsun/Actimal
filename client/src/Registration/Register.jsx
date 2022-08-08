import * as React from 'react';
import { useState } from 'react';

import {Box, Stepper, Step, StepLabel, Button, Typography} from '@mui/material';

import Story from './Story';
import AccountInfo from './AccountInfo';
import CharacterSelection from './CharacterSelection';
import HealthAppConnection from './HealthAppConnection';
import Footer from '../Footer';

import "./Register.scss"


const steps = ['Story', 'Personal Information', 'Select a Character', 'Connect Tracker'];

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: -1
  });

  const isStepOptional = (step) => {
    return step === 0;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    handleNext();
  }


  return (
    <>
    <main className='register'>
      <form className='register' onSubmit={handleSubmit}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1, height: "100%" }}>
              All steps completed - Best of Luck!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button variant='contained' href='/dashboard'>Start!</Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              {activeStep === steps.length - 1 && <Button type='submit'>Submit</Button>}
              {activeStep < steps.length - 1 && <Button onClick={handleNext}>Next</Button>}
            </Box>
          </>
        )}
      {steps[activeStep] === "Story" && <Story key={activeStep}/>}
      {steps[activeStep] === "Personal Information" && <AccountInfo formData={formData} setFormData={setFormData} key={activeStep}/>}
      {steps[activeStep] === "Select a Character" && <CharacterSelection formData={formData} setFormData={setFormData} key={activeStep}/>}
      {steps[activeStep] === "Connect Tracker" && <HealthAppConnection formData={formData} setFormData={setFormData} key={activeStep}/>}
      </form>
    </main>
    <Footer />
    </>
  );
}

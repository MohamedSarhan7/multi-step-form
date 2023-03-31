import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
export default function MyForm() {
  const [data, setData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password1: "",
    password2: "",
  })

  const [currentStep, setCurrentStep] = useState(0)
  const handleNextStep = (newData ,final=false) => {
    setData(prev => ({ ...prev, ...newData }));
    if(final){
      console.log("submit",newData);
      return
    }
    setCurrentStep(prev => prev + 1)
  }

  const handlePrevStep = (newData) => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1)
  }
  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data}  />]
  return (
    <>
      {steps[currentStep]}

    </>
  )
}

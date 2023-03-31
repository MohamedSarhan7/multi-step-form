import { useState } from 'react'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import Account from './components/steps/Account'
import Details from './components/steps/Details'
import Final from './components/steps/Final'
import Payment from './components/steps/Payment'

import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    "Account Info",
    "Personale Details",
    "Complete"
  ]
  const dsipalyStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Payment />
      case 4:
        return <Final />
      default:
      
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    //
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl p-2 bg-white'>
      <div className="container horizontal mt-5">

        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
      </div>
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps} />
    </div>

  )
}

export default App

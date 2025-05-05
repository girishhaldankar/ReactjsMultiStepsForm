import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { FormProvider } from '../../contexts/FormContext';
import { stepsConfig } from './stepsConfig';

export default function FormBWrapper() {
  const [currentStep, setCurrentStep] = useState(0);
  const CurrentComponent = stepsConfig[currentStep].component;

  const next = () => currentStep < stepsConfig.length - 1 && setCurrentStep(currentStep + 1);
  const back = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  return (
    <FormProvider>
      <div className="max-w-4xl mx-auto">
        <CurrentComponent next={next} back={back} />
      </div>
    </FormProvider>
  );
}

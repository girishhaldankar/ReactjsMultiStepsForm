import React from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import { FormProvider } from "../../contexts/FormContext";
import StepFormWrapper from "./StepFormWrapper";

export default function MultiStepForm({ stepsConfig, validationSchemas }) {
  const { currentStep, next, prev, setStep } = useMultiStepForm(stepsConfig);

  const StepComponent = stepsConfig[currentStep].component;

  return (
    <FormProvider>
      <div className="p-4 border rounded shadow">
        <div className="mb-4 font-bold text-xl">
          {stepsConfig[currentStep].title}
        </div>
        <StepFormWrapper
          StepComponent={StepComponent}
          validationSchema={validationSchemas[currentStep]}
          next={next}
          prev={prev}
          currentStep={currentStep}
          totalSteps={stepsConfig.length}
        />
      </div>
    </FormProvider>
  );
}

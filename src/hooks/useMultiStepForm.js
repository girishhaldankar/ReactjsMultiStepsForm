import { useState } from "react";

export function useMultiStepForm(stepsConfig) {
  if (!stepsConfig) {
    throw new Error("Steps config is required");
  }

  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((prev) =>
      prev < stepsConfig.length - 1 ? prev + 1 : prev
    );
  };

  const prev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const setStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < stepsConfig.length) {
      setCurrentStep(stepIndex);
    }
  };

  return { currentStep, next, prev, setStep };
}

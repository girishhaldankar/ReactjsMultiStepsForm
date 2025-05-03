import React from "react";

export default function StepFormWrapper({
  StepComponent,
  validationSchema,
  next,
  prev,
  currentStep,
  totalSteps
}) {
  return (
    <>
      <StepComponent next={next} prev={prev} validationSchema={validationSchema} />
      <div className="mt-4 flex justify-between">
        {currentStep > 0 && (
          <button onClick={prev} className="bg-gray-300 px-4 py-2 rounded">
            मागे
          </button>
        )}
        {currentStep < totalSteps - 1 && (
          <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">
            पुढे
          </button>
        )}
      </div>
    </>
  );
}

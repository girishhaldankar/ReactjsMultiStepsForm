import React from 'react';
import { useFormContext } from '../../contexts/FormContext';

export default function StepThree({ back }) {
  const { formData } = useFormContext();

  const handleFinalSubmit = () => {
    // Handle final data (e.g., send to backend)
    console.log("✅ Final submitted data:", formData);

    // You could also convert file objects to FormData if needed for upload
    alert("Final submission complete!");
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">तुमची माहिती तपासा</h2>

      <div className="bg-gray-100 p-4 rounded space-y-2">
        <p><strong>नाव:</strong> {formData.name}</p>
        <p><strong>दिनांक:</strong> {formData.date}</p>
        <p><strong>मोबाईल नं.:</strong> {formData.mobile}</p>
        <p><strong>पत्ता:</strong> {formData.address}</p>
        <p><strong>तालुका:</strong> {formData.taluka}</p>
        <p><strong>भू. क्र.:</strong> {formData.bhukhandNo}</p>
        <p><strong>मौजे:</strong> {formData.mouje}</p>
        <p><strong>महानगरपालिका:</strong> {formData.nagarpalika}</p>
        <p><strong>वॉर्ड क्र.:</strong> {formData.wardNo}</p>

        <div>
          <strong>अपलोड केलेले डॉक्युमेंट्स:</strong>
          <ul className="list-disc ml-5 mt-2">
            {formData.documentOne && (
              <li>
                <a
                  href={URL.createObjectURL(formData.documentOne)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {formData.documentOne.name}
                </a>
              </li>
            )}
            {formData.documentTwo && (
              <li>
                <a
                  href={URL.createObjectURL(formData.documentTwo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {formData.documentTwo.name}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={back} className="bg-gray-400 text-white px-4 py-2 rounded">
          मागे
        </button>
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          अंतिम सबमिट
        </button>
      </div>
    </div>
  );
}

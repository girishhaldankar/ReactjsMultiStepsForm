import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormContext } from "../../contexts/FormContext";


export default function StepTwo({ next, back, validationSchema  }) {
  const { formData, updateFormData } = useFormContext();
  const [documents, setDocuments] = useState({
    documentOne: null,
    documentTwo: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("File too large (max 10MB)");
    } else {
      setDocuments(prev => ({
        ...prev,
        [name]: file,
      }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!documents.documentOne || !documents.documentTwo) {
      alert('Please upload both documents.');
      return;
    }
    updateFormData({ ...formData, ...documents });
    next();
  };

  return (
    <form className="flex flex-col gap-6">
      <div>
        <label>Document 1:</label>
        <input type="file" name="documentOne" onChange={handleFileChange} />
        {documents.documentOne && <p>Uploaded: {documents.documentOne.name}</p>}
      </div>

      <div>
        <label>Document 2:</label>
        <input type="file" name="documentTwo" onChange={handleFileChange} />
        {documents.documentTwo && <p>Uploaded: {documents.documentTwo.name}</p>}
      </div>

      <div className="flex justify-between mt-4">
        <button type="button" onClick={back} className="bg-gray-400 text-white px-4 py-2 rounded">
          मागे
        </button>
        <button type="button" onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
          पुढे
        </button>
      </div>
    </form>
  );
}

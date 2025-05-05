import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepOneSchema } from './validationSchemas'
import { useFormContext } from "../../contexts/FormContext";


export default function StepOne({ next, validationSchema }) {
  const { formData, updateFormData } = useFormContext();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
    resolver: yupResolver(stepOneSchema)
  });

  const onSubmit = (data) => {
    updateFormData(data);
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label>नाव</label>
        <input className="border p-2 w-full" {...register('name')} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label>दिनांक</label>
        <input type="date" className="border p-2 w-full" {...register('date')} />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}
      </div>
      <div>
        <label>मोबाईल नं.</label>
        <input className="border p-2 w-full" {...register('mobile')} />
        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
      </div>
      <div>
        <label>पत्ता</label>
        <input className="border p-2 w-full" {...register('address')} />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
      </div>
      <div>
        <label>तालुका</label>
        <input className="border p-2 w-full" {...register('taluka')} />
        {errors.taluka && <p className="text-red-500">{errors.taluka.message}</p>}
      </div>
      <div>
        <label>भू. क्र.</label>
        <input className="border p-2 w-full" {...register('bhukhandNo')} />
        {errors.bhukhandNo && <p className="text-red-500">{errors.bhukhandNo.message}</p>}
      </div>
      <div>
        <label>मौजे</label>
        <input className="border p-2 w-full" {...register('mouje')} />
        {errors.mouje && <p className="text-red-500">{errors.mouje.message}</p>}
      </div>
      <div>
        <label>महानगरपालिका</label>
        <select className="border p-2 w-full" {...register('nagarpalika')}>
          <option value="">-निवडा-</option>
          <option value="mumbai">मुंबई</option>
          <option value="thane">ठाणे</option>
          <option value="pune">पुणे</option>
        </select>
        {errors.nagarpalika && <p className="text-red-500">{errors.nagarpalika.message}</p>}
      </div>
      <div>
        <label>वॉर्ड क्र.</label>
        <input className="border p-2 w-full" {...register('wardNo')} />
        {errors.wardNo && <p className="text-red-500">{errors.wardNo.message}</p>}
      </div>

      <div className="md:col-span-2 flex justify-end mt-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          पुढे
        </button>
      </div>
    </form>
  );
}

import * as yup from 'yup';

export const stepOneSchema = yup.object().shape({
  name: yup.string().required('नाव आवश्यक आहे'),
  date: yup.string().required('दिनांक आवश्यक आहे'),
  mobile: yup.string().required('मोबाईल नं. आवश्यक आहे'),
  address: yup.string().required('पत्ता आवश्यक आहे'),
  taluka: yup.string().required('तालुका आवश्यक आहे'),
  bhukhandNo: yup.string().required('भू. क्र. आवश्यक आहे'),
  mouje: yup.string().required('मौजे आवश्यक आहे'),
  nagarpalika: yup.string().required('महानगरपालिका आवश्यक आहे'),
  wardNo: yup.string().required('वॉर्ड क्र. आवश्यक आहे'),
});

export const validationSchemas = [
  stepOneSchema,
  null, // Step Two is file upload (custom validated), no Yup schema
  null, // Step Three is review
];

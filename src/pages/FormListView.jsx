import { Link } from 'react-router-dom';

export default function FormListView() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Forms</h1>
      <Link to="/formA" className="text-blue-600 block mb-2">Form A</Link>
      <Link to="/formB" className="text-green-600 block">Form B</Link>
    </div>
  );
}

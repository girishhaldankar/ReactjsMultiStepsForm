import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormListView from './pages/FormListView';
import FormAWrapper from './forms/formA/FormAWrapper';
import FormBWrapper from './forms/formB/FormBWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormListView />} />
        <Route path="/formA" element={<FormAWrapper />} />
        <Route path="/formB" element={<FormBWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;

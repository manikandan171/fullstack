import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MealPlanner from './pages/MealPlanner';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MealPlanner />} />
    </Routes>
  );
}

export default App;
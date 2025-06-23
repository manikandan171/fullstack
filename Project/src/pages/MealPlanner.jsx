import React, { useState } from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MealPlanner = () => {
  const [meals, setMeals] = useState({});
  const [input, setInput] = useState({ day: daysOfWeek[0], meal: '' });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!input.meal.trim()) return;
    setMeals((prev) => ({
      ...prev,
      [input.day]: prev[input.day] ? [...prev[input.day], input.meal] : [input.meal],
    }));
    setInput({ ...input, meal: '' });
  };

  const handleRemoveMeal = (day, idx) => {
    setMeals((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== idx),
    }));
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h1 style={{ marginBottom: 24 }}>Meal Planner</h1>
      <form onSubmit={handleAddMeal} style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <select name="day" value={input.day} onChange={handleChange} style={{ flex: 1 }}>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <input
          name="meal"
          value={input.meal}
          onChange={handleChange}
          placeholder="Add a meal..."
          style={{ flex: 2, padding: 8 }}
        />
        <button type="submit" style={{ flex: 0.5 }}>Add</button>
      </form>
      <div>
        {daysOfWeek.map((day) => (
          <div key={day} style={{ marginBottom: 16, background: '#f9f9f9', borderRadius: 8, padding: 12 }}>
            <h3 style={{ margin: 0 }}>{day}</h3>
            <ul style={{ paddingLeft: 20 }}>
              {(meals[day] || []).length === 0 && <li style={{ color: '#aaa' }}>No meals planned.</li>}
              {(meals[day] || []).map((meal, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{meal}</span>
                  <button onClick={() => handleRemoveMeal(day, idx)} style={{ marginLeft: 8, color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanner; 
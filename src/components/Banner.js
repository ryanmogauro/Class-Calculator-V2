import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div>
      <h1>Welcome to Class Calculator</h1>
      <nav>
        <ul>
          <li>
            <Link to="/GPACalculator">GPA Calculator</Link>
          </li>
          <li>
            <Link to="/FinalGrade">Course Grade Calculator</Link>
          </li>
          <li>
            <Link to="/NeededGrade">Needed Grade Calculator</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Banner;
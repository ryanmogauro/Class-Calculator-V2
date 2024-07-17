import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Add a new list item for the button */}
        <li style={{ float: 'right' }}>
          <Link to="/welcome">
            <button style={{ backgroundColor: 'blue', border: 'none', color: 'white', padding: '10px', borderRadius: '5px' }}>Back to Welcome</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
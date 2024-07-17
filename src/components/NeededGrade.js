import React, { useState } from 'react';
import './NeededGrade.css'
import { Link } from 'react-router-dom';

function NeededGrade(){
    const [currentGrade, setCurrentGrade] = useState('');
    const [desiredGrade, setDesiredGrade] = useState('');
    const [finalWeight, setFinalWeight] = useState('');
    const [neededGrade, setNeededGrade] = useState(null); 
    const [message, setMessage] = useState('');

    const calculateNeededGrade = () => {
        if(currentGrade === '' || desiredGrade === '' || finalWeight  === ''){
            alert('Please fill in all fields');
            return;

        }
        const finalWeightDecimal = finalWeight / 100;
        const needed = (desiredGrade - (currentGrade * (1 - finalWeightDecimal))) / finalWeightDecimal;
        const roundedNeeded = needed.toFixed(2)
        setNeededGrade(roundedNeeded);
        setMessage("Your needed grade is: " + roundedNeeded) 
    };

    return (
        <div className='NeededGrade'>
          <h1>Needed Grade Calculator</h1>
          <div style={{ marginBottom: '20px' }}>
            <label>Current Grade: </label>
            <input
              type="number"
              value={currentGrade}
              onChange={(e) => setCurrentGrade(Number(e.target.value))}
              placeholder='Set Current Grade'
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Desired Grade: </label>
            <input
              type="number"
              value={desiredGrade}
              onChange={(e) => setDesiredGrade(Number(e.target.value))}
              placeholder='Set Desired Grade'
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Weight of Final (%): </label>
            <input
              type="number"
              value={finalWeight}
              onChange={(e) => setFinalWeight(Number(e.target.value))}
              placeholder='Set Final Weight'
            />
         </div>
      <button style = {{backgroundColor: 'blue', 
      border : '0px',
      fontSize : '12px', 
      color: 'white', 
      padding: '10px', 
      width: '150px', 
      textAlign: 'center',
      borderRadius: '20px', 
      whiteSpace: 'nowrap'}}
      onClick={calculateNeededGrade}>Calculate Needed Grade</button>
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
    <div style={{ marginTop: '20px' }}>
        <Link to="/welcome">
          <button style={{ backgroundColor: 'blue', border: 'none', color: 'white', padding: '10px', borderRadius: '5px' }}>
            Back to Welcome
          </button>
        </Link>
      </div>
    </div>
  );
}
    
export default NeededGrade;

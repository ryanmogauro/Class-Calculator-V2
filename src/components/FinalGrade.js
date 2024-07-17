import React, { useState } from 'react';
import './FinalGrade.css'; 
import { Link } from 'react-router-dom';
function FinalGrade(){
    const [currentGrade, setCurrentGrade] = useState('');
    const [finalGrade, setFinalGrade] = useState('');
    const [finalWeight, setFinalWeight] = useState('');
    const [overallGrade, setOverallGrade] = useState(null); 
    const [message, setMessage] = useState('');

    const calculateFinalGrade = () => {
        if(currentGrade === '' || finalGrade === '' || finalWeight  === ''){
            alert('Please fill in all fields');
            return;

        }
        const finalWeightDecimal = finalWeight / 100;
        const overall = (currentGrade * (1 - finalWeightDecimal)) + (finalGrade * finalWeightDecimal);
        const roundedOverall = overall.toFixed(2)
        setOverallGrade(roundedOverall);
        setMessage("Your overall grade is: " + roundedOverall) 
    };

    return (
        <div className='FinalGrade'>
          <h1>Course Grade Calculator</h1>
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
            <label>Grade on Final: </label>
            <input
              type="number"
              value={finalGrade}
              onChange={(e) => setFinalGrade(Number(e.target.value))}
              placeholder='Set Grade on Final'
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
      onClick={calculateFinalGrade}>Calculate Final Grade</button>
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
    
export default FinalGrade;

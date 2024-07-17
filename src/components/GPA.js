import React, { useState } from 'react';
import './GPA.css'
import { Link } from 'react-router-dom';

function GPA(){

    const [numAPlus, setNumAPlus] = useState(0); 
    const [numA, setNumA] = useState(0); 
    const [numAMinus, setNumAMinus] = useState(0); 
    const [numBPlus, setNumBPlus] = useState(0); 
    const [numB, setNumB] = useState(0); 
    const [numBMinus, setNumBMinus] = useState(0); 
    const [numCPlus, setNumCPlus] = useState(0); 
    const [numC, setNumC] = useState(0); 
    const [numCMinus, setNumCMinus] = useState(0); 
    const [numDPlus, setNumDPlus] = useState(0); 
    const [numD, setNumD] = useState(0); 
    const [numDMinus, setNumDMinus] = useState(0); 
    const [numF, setNumF] = useState(0); 
    const [gpa, setGPA] = useState(''); 

    const calculateGPA = () => {
        const sumGPA = ((4.0 * numAPlus) + (4.0 * numA) + (3.7*numAMinus) 
        + (3.3 * numBPlus) + (3.0 * numB) + (2.7 * numBMinus) 
        + (2.3 * numCPlus) + (2.0 * numC) + (1.7 * numCMinus) 
        + (1.3 * numDPlus) + (1.0 * numD) + (.7 * numDMinus));

        const classCount = numAPlus + numA + numAMinus 
        + numBPlus + numB + numBMinus 
        + numCPlus + numC + numCMinus 
        + numDPlus + numD + numDMinus; 

        const decimalGPA = sumGPA / classCount;
        const roundedGPA = decimalGPA.toFixed(2); 
        setGPA("Your GPA is: " + roundedGPA);
    };



    return (
        <div className='GPA'>
          <h1>GPA Calculator</h1>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of A+s: </label>
            <input
              type="number"
              value={numAPlus}
              onChange={(e) => setNumAPlus(Number(e.target.value))}
              placeholder='A+ Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of As: </label>
            <input
              type="number"
              value={numA}
              onChange={(e) => setNumA(Number(e.target.value))}
              placeholder='A Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of A-s: </label>
            <input
              type="number"
              value={numAMinus}
              onChange={(e) => setNumAMinus(Number(e.target.value))}
              placeholder='A- Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of B+s: </label>
            <input
              type="number"
              value={numBPlus}
              onChange={(e) => setNumBPlus(Number(e.target.value))}
              placeholder='B+ Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of Bs: </label>
            <input
              type="number"
              value={numB}
              onChange={(e) => setNumB(Number(e.target.value))}
              placeholder='B Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of B-s: </label>
            <input
              type="number"
              value={numBMinus}
              onChange={(e) => setNumBMinus(Number(e.target.value))}
              placeholder='B- Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of C+s: </label>
            <input
              type="number"
              value={numCPlus}
              onChange={(e) => setNumCPlus(Number(e.target.value))}
              placeholder='C+ Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of Cs: </label>
            <input
              type="number"
              value={numC}
              onChange={(e) => setNumC(Number(e.target.value))}
              placeholder='C Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of C-s: </label>
            <input
              type="number"
              value={numCMinus}
              onChange={(e) => setNumCMinus(Number(e.target.value))}
              placeholder='C- Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of D+s: </label>
            <input
              type="number"
              value={numDPlus}
              onChange={(e) => setNumDPlus(Number(e.target.value))}
              placeholder='D+ Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of Ds: </label>
            <input
              type="number"
              value={numD}
              onChange={(e) => setNumD(Number(e.target.value))}
              placeholder='D Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of D-s: </label>
            <input
              type="number"
              value={numDMinus}
              onChange={(e) => setNumDMinus(Number(e.target.value))}
              placeholder='D- Count'
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Number of Fs: </label>
            <input
              type="number"
              value={numF}
              onChange={(e) => setNumDMinus(Number(e.target.value))}
              placeholder='D- Count'
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
      onClick={calculateGPA}>Calculate GPA</button>
      {gpa && (
        <div>
          <p>{gpa}</p>
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

export default GPA;
import React, { useState } from 'react';

const NetworkFuncTest = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const DEFAULT_START_NODE = '0';

  const handleButtonClick = () => {
    fetch(
        `http://127.0.0.1:5001/social-insights-66e0d/us-central1/get_seperation_degree/?start_node=${DEFAULT_START_NODE}&end_node=${inputText}`,
        {
          method: "GET",
        }
      )
  };

  return (
    <div>
      <label>
        <h1>Degrees of Seperation</h1>
        Enter account ID:
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </label>
      <button onClick={handleButtonClick}>Search</button>
      <p>{displayText}</p>
    </div>
  );
};

export default NetworkFuncTest;
import React, { useState } from 'react';
import Tooltip from './Tooltip';
import Forms from './Forms';

function App() {
  const [content, setContent] = useState("Customized tooltip!");
  const [position, setPosition] = useState("right");
  return (
    <div style={{ padding: '50px' }}>
      <Forms setContent = {setContent} setPosition={setPosition}/> 
      <Tooltip 
        content={content}
        position={position}
        style={{ backgroundColor: 'gray', color: 'white' }}

        // likewise add all other configurables as props
      >
        
      </Tooltip> 
      
    </div>
  );
}

export default App;
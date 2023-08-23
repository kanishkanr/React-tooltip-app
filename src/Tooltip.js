import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip(props) {
  const [visible,setVisible] = useState(true);
  
 
  const {
    content,
    position = "top", // Default is top
    style = {}
  } = props;

  const contentStyle = {
    ...style,
    ...position && { [position]: 'auto' } // Add the class for positioning
  };

  return (

    <div className="position">
      <div className="tooltip-outline">
        <div
        className="tooltip" 
        >
        button 1
        
          <div className={`tooltip-content ${position}`} style={contentStyle}>
            {content}
          </div>
        
        </div>
      </div>
    </div>


   
    
  );
}

export default Tooltip;
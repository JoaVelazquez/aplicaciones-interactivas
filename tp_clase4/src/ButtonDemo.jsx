import React from 'react';
import ReusableButton from './ReusableButton';

const ButtonDemo = () => {
  const handleClick = (buttonText) => {
    alert(`You clicked: ${buttonText}`);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Reusable Button Demo</h2>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <ReusableButton 
          text="Primary Button" 
          onClick={() => handleClick('Primary Button')}
          variant="primary"
        />
        
        <ReusableButton 
          text="Secondary Button" 
          onClick={() => handleClick('Secondary Button')}
          variant="secondary"
        />
        
        <ReusableButton 
          text="Success Button" 
          onClick={() => handleClick('Success Button')}
          variant="success"
        />
        
        <ReusableButton 
          text="Danger Button" 
          onClick={() => handleClick('Danger Button')}
          variant="danger"
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <ReusableButton 
          text="Small Button" 
          onClick={() => handleClick('Small Button')}
          size="small"
        />
        
        <ReusableButton 
          text="Medium Button" 
          onClick={() => handleClick('Medium Button')}
          size="medium"
        />
        
        <ReusableButton 
          text="Large Button" 
          onClick={() => handleClick('Large Button')}
          size="large"
        />
      </div>

      <div>
        <ReusableButton 
          text="Disabled Button" 
          onClick={() => handleClick('Disabled Button')}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default ButtonDemo;

import React, { useState } from 'react';

const InputText = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  const formatBoldText = (text: string) => {
    // Regular expression to find occurrences of **text**
    const boldRegex = /\*\*(.*?)\*\*/g;

    const parts = text.split(boldRegex);
    const formattedText = parts.map((part, index) => {
      if (part.match(boldRegex)) {
        // Render the bold text within a <strong> element
        return <b key={index}>{part.replace(/\*\*/g, '')}</b>;
      }
      return part;
    });

    return formattedText;
  };

  return (
    <div>
      <label>
        Input Text:
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
        />
      </label>
      <div>
        {/* Render the formatted text */}
        {formatBoldText(text)}
      </div>
    </div>
  );
};

export default InputText;

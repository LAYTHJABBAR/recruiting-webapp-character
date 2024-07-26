import React, { forwardRef } from 'react';
import './ClassDialog.css';

const DialogBox = forwardRef(({ title, content, onClose }, ref) => {
  return (
    <dialog ref={ref} className="dialog-box">
      <h2>{title}</h2>
      {content.map(({ attribute, value }) => (
        <div className='att' key={attribute}>{`${attribute}: ${value}`}</div>
      ))}
      <button onClick={onClose} className="dialog-close-button">Close</button>
    </dialog>
  );
});

export default DialogBox;

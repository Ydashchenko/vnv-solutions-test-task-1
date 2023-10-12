import { useState } from 'react';
import '../styles/widget.css'

export default function Widget() {
  const [showWidget, setShowWidget] = useState(true);

  const closeWidget = () => {
    const widget = document.querySelector('.discount-widget')
    widget.classList.remove("fade-in")
    widget.classList.add("fade-out-to-right")
    setTimeout(() => {
        setShowWidget(false);
    }, 500);
  };

  return (
    showWidget && (
      <div className={`discount-widget fade-in`}>
        <span>Discount on the first order!</span>
        <button onClick={closeWidget} className="close-button">X</button>
      </div>
    )
  );
}

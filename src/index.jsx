import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import { JenCard } from './components';
import imageUrl from "./assets/images/card-image.png";

const App = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const currentCartAction = (
      <button
        className="card__button"
        onClick={() => setIsButtonDisabled((_disabled) => !_disabled)}
        disabled={isButtonDisabled}
      >
        <span className="card__button-title">Read more</span>
        <div className="card__button-icon">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.4763 6.16658L6.00633 1.69657L7.18483 0.518066L13.6667 6.99992L7.18483 13.4817L6.00633 12.3032L10.4763 7.83325H0.333328V6.16658H10.4763Z" />
          </svg>
        </div>
      </button>
    );
  
    const mockData = {
      category: 'Interior',
      title: 'Top 5 Living Room Inspirations',
      description:
        'Curated vibrants colors for your living, make it pop & calm in the same time.',
      actions: [currentCartAction],
      imageUrl: imageUrl
    };
  
    return (
      <div className="card-demo">
        <JenCard {...mockData} />
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
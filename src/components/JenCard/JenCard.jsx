import React from 'react';
import './JenCard.scss';
// import { CardImageData } from './card-image-data.js';

export const JenCard = ({ title, category, description, actions, imageUrl }) => {
  return (
    <div className="card__container">
      <img className="card__image" src={imageUrl} alt="card image" />
      <div className="card__content">
        <div className="card__header">
          <div className="card__badge-container">
            <span className="card__badge">{category}</span>
          </div>
          <p className="card__title">{title}</p>
        </div>
        <div className="card__text">
          <div className="card__description">{description}</div>
          {actions && <div className="card__action">{actions}</div>}
        </div>
      </div>
    </div>
  );
};
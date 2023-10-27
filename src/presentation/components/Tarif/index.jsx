import React from 'react';
import './styles.scss';

function Tarif(props) {
  const containerClass = 'tarif_container';

  return (
    <div
      className={`tarif_container ${props.colorClass} ${
        props.isSelected ? 'large' : ''
      }`}
      onClick={props.onClick}
    >
      <div className="tarif_title tarif_item">{props.title}</div>
      <div className="tarif_price tarif_item">{props.price}</div>
      <div className="tarif_speed tarif_item">{props.speed}</div>
      <div className="tarif_details tarif_item">{props.details}</div>
    </div>
  );
}

export { Tarif };

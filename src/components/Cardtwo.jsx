import React from "react";
import './Card.css'

const Cardtwo = (props) => {

  return (
      <div className="card" >
        <div className="card-body">
          <p className="card-title">{props.heading}</p>
          <h3 className="card-text">${props.dollar}/month</h3>
        </div>
        <hr />
        <div>
          <p><i className="bi bi-check-lg check"></i> {props.rowOne}</p>
          <p><i className="bi bi-check-lg check"></i> {props.rowTwo}</p>
          <p><i className="bi bi-check-lg check"></i> {props.rowThree}</p>
          <p><i className="bi bi-check-lg check"></i> {props.rowFour}</p>
          <p><i className="bi bi-check-lg check"></i> {props.rowFive}</p>
          <p><i className="bi bi-check-lg check"></i> {props.rowSix}</p>
          <p><i className="bi bi-check-lg check"></i> {props.rowSeven}</p>
          <p className="cancel"><i className="bi bi-x cancel"></i> {props.rowEight}</p>
        </div>
        <button type="button" className="btn btn-primary disabled">Subscribe</button>
      </div>
    
  );
}


export default Cardtwo;

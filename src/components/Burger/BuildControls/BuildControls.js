import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
  <p>Precio: {props.price.toFixed(2)}</p>
    {controls.map(control => (
      <BuildControl 
      key={control.label} 
      label={control.label} 
      added={() => props.ingredientAdded(control.type)} 
      deleted={()=> props.ingredientRemoved(control.type)}
      disabled={props.disabled[control.type]}/>
    ))}
    <button className={classes.OrderButton} disabled={props.purchaseable} onClick={props.ordered}>Pedir</button>
  </div>
);

export default buildControls;

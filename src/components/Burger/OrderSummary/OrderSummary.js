import React from 'react';
import Aux from '../../../hoc/Auxiliar';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  console.log('ORDER SUMMARY PROPS', props.ingredients);
  const ingredientSummary = Object.keys(props.ingredients).map(ingredient => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: 'capitalize' }}>
          {ingredient} {props.ingredients[ingredient]}
        </span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>El pedido</h3>
      <p>Hamburgesa con estos ingredientes</p>
      <ul>{ingredientSummary}</ul>
      <p>Precio: {props.price}</p>
      <p>Pagar?</p>
      <Button clicked={props.purchaseCanceled} btnType="Danger">
        Cancelar
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        Continuar
      </Button>
    </Aux>
  );
};

export default orderSummary;

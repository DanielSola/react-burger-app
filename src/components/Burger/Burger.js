import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  console.log('BURGER PROPS', props.ingredient);
  console.log('KEYS', Object.keys(props.ingredient))
  let transformedIngredients =  Object.keys(props.ingredient)
    .map(ingredient => {
      return [...Array(props.ingredient[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Añade ingredientes</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

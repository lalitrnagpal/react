import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {

    // since ingredient in BurgerIngredients is a object
    // convert that to a array in order to be able to map
    // through it
    let transformedIngredients = 
             Object.keys( props.ingredients )
                   .map( ingredientKey => {
                        // sends the key which is the ingredient and gets the value, ...Arrays will create a empty array of length = value
                        return [...Array( props.ingredients[ ingredientKey ] ) ]              // [,] array of 2 elements when value is 2
                                    .map( (_, i) => {                                         // _ since only the index is important
                                        return <BurgerIngredients key={ingredientKey + i}     // i is just index - 1, 2, 3
                                                        type={ingredientKey}/>;
                                    });
                   })
                   .reduce((arr, el) => {
                       return arr.concat(el);               // flattened the array
                   }, []);                                  // blank initial value []

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    console.log('transformedIngredients -> ' + transformedIngredients);

    return <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
               { transformedIngredients }
            <BurgerIngredients type="bread-bottom"/>
        </div>;
};

export default Burger;
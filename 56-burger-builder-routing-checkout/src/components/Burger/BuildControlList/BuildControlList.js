import React from 'react';
import classes from './BuildControlList.css';
import BuildControl from '../BuildControlList/BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControlList = (props) => {
    return ( 
        <div className={classes.BuildControlList}>
            {
                controls.map(ctrl => 
                    <BuildControl key={ctrl.label} label={ctrl.label} 
                        added = { () => props.ingredientAdded(ctrl.type) }
                        deleted = { () => props.ingredientDeleted(ctrl.type) }
                        disabled = { props.disabledInfo[ctrl.type] }/>
                )
            }
            <p/>
            <button 
                className={classes.OrderButton} 
                disabled={!props.canPurchase}
                onClick={props.ordered}>ORDER NOW</button>

        </div>
    );
}

export default buildControlList;
import React from 'react';
import './Card.css'

// onClick={e => props.moveLeft(category.id)}

function Card(props) {
    console.log(props)
    return <table>
    <tbody>
        <tr>
            <td colSpan="3">
                <label className="" htmlFor={props.labelId} for={props.colorId}>
                    Card Stuff will go here
                </label>
            </td>
        </tr>
        </tbody>
</table>
}

export default Card;

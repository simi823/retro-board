import React from 'react';
import './ControlCard.css'

// onClick={e => props.moveLeft(category.id)}

function ControlCard(props) {
    console.log(props)
    return <table>
            <tbody>
            <tr for={props.colorId}>
                    <td>
                        <button>&lt;</button>
                    </td>
                    <td>
                        <button>x</button>
                    </td>
                    <td>
                        <button>&gt;</button>
                    </td>
                </tr>
            </tbody>
        </table>;
}


export default ControlCard;

import React, { Component } from 'react';
import './AddCard.css'

// onClick={e => props.moveLeft(category.id)}

function AddCard(props) {
    console.log(props)
    return <table>
            <tbody>
                <tr>
                    <td colSpan="3" for="addCard">
                    <label>Add New Item</label>
                        <textarea/>
                        <button>
                            ADD
                        </button>
                        <a className="delete-link message-body-link" href="javascript:void(0)">
                            delete
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
}

export default AddCard;

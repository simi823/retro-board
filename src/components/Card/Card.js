import React from 'react';
import '../../retro-board.css';


function Card(props) {
    console.log(props);
    return (
        <div key={props.card_index} className="Retro">
            <div key={props.card.card_id}>
                <p>{props.card.title}</p>
            </div>
            <div className="Retro ButtonGroup">
                <button onClick={e => props.moveLeft(props.cat_index, props.new_left_cat_index, props.card.card_id)}>&lt;</button>
                <button onClick={e => props.deleteCard(props.cat_index, props.card_id)}>x</button>
                <button onClick={e => props.moveRight(props.cat_index, props.new_right_cat_index, props.card_id)}>&gt;</button>
            </div>
        </div>
    )
}

export default Card;

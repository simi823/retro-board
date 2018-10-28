import React from 'react';
import '../../retro-board.css'


function AddCard(props) {
    return <div className="Retro RetroBoardCategory textbox">
        <div className={props.cardBackgroundColorClassName}>
            <textarea className="textbox" value={'Enter Text here' ? props.inputValue : null} category_id={0} onChange={props.handleChange} placeholder="Enter Text Here" />
        </div>
        <div className="ButtonGroup">
            <button type="submit" onClick={e => props.addNewCard(e, props.cat_index)}>ADD</button>
            <button type="delete" onClick={e => props.deleteNewCard(e, props.cat_index)}>delete</button>
        </div>
    </div>
}

export default AddCard;

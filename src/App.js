import React, { Component } from 'react';
import './retro-board.css';

const categories = [
  {
    category_id: 1,
    name: 'Went Well',
    colorId: 'ww',
    color: '#019588',
    cards: [{ card_id: 0, title: 'Card: This is a test one' }],
  },
  {
    category_id: 2,
    name: 'To Improve',
    colorId: 'ti',
    color: '#e91e63',
    cards: [{ card_id: 0, title: 'Card: This is a test two' }],
  },
  {
    category_id: 3,
    name: 'Action Items',
    colorId: 'ai',
    color: '#9c28b0',
    cards: [{ card_id: 0, title: 'Card: This is a test three' }],
  },
];

function AddNewCard(props) {
  console.log("AddNewCard: ", props);
  return (
      <div>
        New Card Input Here for Category {props.category_id} of {props.cards.length}
        <div>
          <textarea className="form-input" category_id={props.category_id} value={props.input} onChange={props.handleChange} />
          <button onClick={props.handleSubmitNewCard}>ADD</button>
          <button onClick={props.deleteNewCard}>delete</button>
        </div>
      </div>
  );
}

function Card(props) {
  console.log("Card: ", props);
  return (
    <div>
      <div card_id={props.card_id}>
        <p>{props.title}</p>
      </div>
      <div>
        <button onClick={props.moveLeft}>&lt;</button>
        <button onClick={props.deleteCard}>x</button>
        <button onClick={props.moveRight}>&gt;</button>
      </div>
    </div>
  )
}
class App extends Component {
  state = {
    categories: categories,
    showAddCard: false,
    inputValue: '',
    inputCategory: null,
    cardAdded: {}
  };
  onClickNewCard(category_id) {
      console.log(category_id);
  };
  handleChange = (e, category_id) => {
    this.setState({
        inputValue: e.target.value,
        inputCategory: category_id
    })
  };
  handleSubmitNewCard = (value, category_id) => {
      console.log("NewCard Submit value: " + this.state.inputValue);
      //e.preventDefault();
      this.setState({cards: this.cards.push({id: category_id+100, title: this.state.inputValue})})
  };
  deleteNewCard(e) {
    e.preventDetaul();
    this.setState({showAddCard: !this.state.showAddCard})
  };
  moveLeft() {
    console.log(this.state);
  };
  moveRight() {
    console.log(this.state);
  };
  deleteCard() {
    console.log(this.state);
  };
  render() {
    console.log("Main render: ", this.state);
    return (
    <div className="container">
        <h1>Retrospective Board</h1>
        <h2>Went Well</h2>
        <div>
            <button onClick={this.onClickNewCard()}>+</button>
        </div>
        <div>
            <form className="form" onSubmit={this.handleSubmitNewCard}>
                <label className="newCardLabel">Add New Card</label>
                <div className="inputValueForNewCard">
                    <textarea
                        className="form-input"
                        value={this.state.inputValue}
                        onChange={() => this.handleChange()}
                    />
                </div>
                <div className="AddDelete">
                    <button onClick={this.handleSubmitNewCard}>ADD</button>
                    <button onClick={this.deleteNewCard}>delete</button>
                </div>
            </form>
        </div>
        <div>
            {categories[0].cards && categories[0].cards.map((card, index) => {
                console.log(card);
                return (
                    <Card
                        key={card.card_id}
                        card_id={card.card_id}
                        title={card.title}
                        moveLeft={this.moveLeft}
                        moveRight={this.moveRight}
                        deleteCard={this.deleteCard}
                    />
                )
            })}
        </div>
    </div>
    )
  };
}

export default App;

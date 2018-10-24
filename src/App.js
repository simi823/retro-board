import React, { Component } from 'react';
import './retro-board.css';

const categories = [
  {
    category_id: 1,
    name: 'Went Well',
    colorId: 'ww',
    color: '#019588',
    showNewCard: false,
    cards: [{ card_id: 0, title: 'Card: This is a test one' }],
  },
  {
    category_id: 2,
    name: 'To Improve',
    colorId: 'ti',
    color: '#e91e63',
    showNewCard: false,
    cards: [{ card_id: 0, title: 'Card: This is a test two' }],
  },
  {
    category_id: 3,
    name: 'Action Items',
    colorId: 'ai',
    color: '#9c28b0',
    showNewCard: false,
    cards: [{ card_id: 0, title: 'Card: This is a test three' }],
  },
];

function Card(props) {
  console.log("Card: ", props);
  return (
    <div>
      <div key={props.card_id}>
        <p>{props.title}</p>
      </div>
      <div>
        <button onClick={props.moveLeft(props.card_id)}>&lt;</button>
        <button onClick={props.deleteCard(props.card_id)}>x</button>
        <button onClick={props.moveRight(props.card_id)}>&gt;</button>
      </div>
    </div>
  )
}
class App extends Component {
  state = {
    categories: categories,
    showAddCard: false,
    showAddSign: '+',
    inputValue: '',
    inputCategory: 0,
    cardAdded: {}
  };
  handleChange = (e) => {
    this.setState({
        inputValue: e.target.value,
        inputCategory: this.state.inputCategory
    })
  };
  handleSubmitNewCard = (e) => {
      e.preventDefault();
      this.setState({
        categories: this.state.categories.map((category, index) => {
              if (category.category_id === this.state.categories[0].category_id){
                  category.cards.push({ card_id: category.cards.length, title: this.state.inputValue})
              }
              return category;
          }),
        inputValue: '',
        inputCategory: null,
        showAddCard: !this.state.showAddCard
        })
  };
  deleteNewCard = () => {
    this.setState({
        showAddCard: !this.state.showAddCard,
        inputValue: ''
    })
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
    const { showAddCard } = this.state;
    return (
    <div className="container">
        <h1>Retrospective Board</h1>
        <h2>Went Well</h2>
        <div>
            <button onClick={() => this.setState({ showAddCard: !this.state.showAddCard})}>{this.state.showAddSign}</button>
            { showAddCard ? 
                <div>
                    <label className="newCardLabel">Add New Card</label>
                    <div className="inputValueForNewCard">
                        <textarea
                            className="form-input"
                            value={this.state.inputValue}
                            category_id={0}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="AddDelete">
                        <button type="submit" onClick={this.handleSubmitNewCard}>ADD</button>
                        <button type="delete" onClick={this.deleteNewCard}>delete</button>
                    </div>
                </div>
                : null
            }
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

import React, { Component } from 'react';
import './retro-board.css';

const categories = [
  {
    id: 1,
    name: 'Went Well',
    colorId: 'ww',
    color: '#019588',
    cards: [{ id: 0, title: 'Card: This is a test one' }],
  },
  {
    id: 2,
    name: 'To Improve',
    colorId: 'ti',
    color: '#e91e63',
    cards: [{ id: 0, title: 'Card: This is a test two' }],
  },
  {
    id: 3,
    name: 'Action Items',
    colorId: 'ai',
    color: '#9c28b0',
    cards: [{ id: 0, title: 'Card: This is a test three' }],
  },
];

function AddNewCard(props) {
  console.log("AddNewCard: ", props);
  return <div>
      New Card Input Here for Category {props.category_id} of {props.cards.length}
      <div>
        <textarea className="form-input" category_id={props.category_id} value={props.input} onChange={props.handleChange} />
        <button onClick={props.handleSubmitNewCard}>ADD</button>
        <button onClick={props.deleteNewCard}>delete</button>
      </div>
    </div>;
}

function Card(props) {
  console.log("Card: ", props);
  return (
    <div>
      <div card_id={props.id}>
        <p>{props.title}</p>
      </div>
      <div>
        <button>&lt;</button>
        <button>x</button>
        <button>&gt;</button>
      </div>
    </div>
  )
}
class App extends Component {
  state = {
    categories: categories,
    showAddCard: false,
    showButton: '+',
    input: ''
  };
  onClickNewCard = id => {
    console.log('onClickNewCard: ', id, this.state)
    if (this.state.id === id)
      this.setState({
        showAddCard: !this.state.showAddCard,
        showButton: "-"
      })
  };
  handleSubmitNewCard(e) {

  };
  deleteNewCard(e) {
    e.preventDetaul();
    this.setState({showAddCard: !this.state.showAddCard})
  };
  render() {
    console.log("Main render: ", this.state);
    return (
    <div className="container">
      <h1>Retrospective Board</h1>
        {this.state.categories && this.state.categories.map((category, index) => {
          console.log(category);
          return (
            <div category_id={category.id}>
              <h2>{category.name}</h2>
              <div>
                <button onClick={() => this.onClickNewCard(category.id)}>{this.state.showButton}</button>
              </div>
              <div>
                {category.cards && category.cards.map((card, index) => {
                  console.log(card);
                  return (<Card id={card.id} title={card.title}/>)
                })}
              </div>              
              <div>
                {this.state.showAddCard && <AddNewCard category_id={category.id} cards={category.cards} />}
              </div>
            </div>
          )
        })}
    </div>
    )
  };
}

export default App;

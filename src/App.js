import React, { Component } from 'react';
import './retro-board.css';

const categories = [
  {
    category_id: 1,
    name: 'Went Well',
    showNewCard: false,
    cards: [],
  },
  {
    category_id: 2,
    name: 'To Improve',
    showNewCard: false,
    cards: [],
  },
  {
    category_id: 3,
    name: 'Action Items',
    showNewCard: false,
    cards: [],
  },
];

function Card(props) {
    console.log(props);
  return (
      <div key={props.card_index} className="Retro">
          <div key={props.card.card_id}>
              <p>{props.card.title}</p>
          </div>
          <div className="Retro ButtonGroup">
              <button onClick={e => props.moveLeft(props.cat_index, props.card.card_id)}>&lt;</button>
              <button onClick={e => props.deleteCard(props.cat_index, props.card.card_id)}>x</button>
              <button onClick={e => props.moveRight(props.cat_index, props.card.card_id)}>&gt;</button>
          </div>
      </div>
    )
}
class App extends Component {
    state = {
    categories: categories,
    showAddCardCategory: null,
    showAddCard: false,
    inputValue: '',
    inputCategory: 0,
    cardAdded: {},
    newCatIndex: null,
    cardToMove: null,
    };

    handleChange = (e) => {
    this.setState({
        inputValue: e.target.value,
        inputCategory: this.state.inputCategory
    })
    };

    handleSubmitNewCard = (e, cat_index) => {
        e.preventDefault();
        this.setState({
        categories: this.state.categories.map((category, index) => {
            if (category.category_id === this.state.categories[cat_index].category_id){
                    category.cards.push({ card_id: category.cards.length, title: this.state.inputValue})
                }
                return category;
            }),
        inputValue: '',
        inputCategory: null,
        showAddCard: !this.state.showAddCard,
        showAddCardCategory: !this.state.showAddCardCategory
        })
    };

    deleteNewCard = () => {
    this.setState({
        showAddCard: !this.state.showAddCard,
        inputValue: ''
    })
    };

    moveLeft = (cat_index, card_id) => {
        const newCatIndex = (cat_index === 0) ? this.state.categories.length - 1 : cat_index - 1;
        const cardToMove = this.state.categories[cat_index].cards.filter((card, idx) => {return card.card_id === card_id ? card : null;});
        this.setState({
            categories: this.state.categories.map((category, index) => {
                if (category.category_id === this.state.categories[newCatIndex].category_id) {
                    category.cards.push(cardToMove[0]);
                }
                return category;
            }),
        }, this.deleteCard(cat_index, card_id));
    };

    moveRight = (cat_index, card_id) => {
        const newCatIndex = (cat_index === this.state.categories.length - 1) ? 0 : cat_index + 1;
        const cardToMove = this.state.categories[cat_index].cards.filter((card, idx) => { return card.card_id === card_id ? card : null; });
        this.setState({
            categories: this.state.categories.map((category, index) => {
                if (category.category_id === this.state.categories[newCatIndex].category_id) {
                    category.cards.push(cardToMove[0]);
                }
                return category;
            }),
        }, this.deleteCard(cat_index, card_id));
    };

    deleteCard = (cat_index, card_id) => {
        this.setState({
            categories: this.state.categories.map((category, index) => {
                if (cat_index === index)
                    category.cards = category.cards.filter((card, index) => {
                        return card.card_id !== card_id;
                    })
                return category;
            })
        })
    };

  render() {
    const { showAddCard } = this.state;
    return (
    <div className="content">
        <h1>Retrospective Board</h1>
            <div className="RetroBoad">
            {this.state.categories.map((category, cat_index) => {
                let cardBackgroundColorClassName = "RetroBoardCategory-" + category.category_id;
                return <div className="RetroBoardCategory" key={category.category_id}>
                        <h2>{category.name}</h2>
                        <div className="Retro button button-new">
                            <button onClick={() => this.setState({ showAddCard: !this.state.showAddCard, showAddCardCategory: cat_index })}>+</button>
                        </div>
                        {(showAddCard && this.state.showAddCardCategory === cat_index) ?
                        <div className="Retro">
                            <div className={cardBackgroundColorClassName}>>
                                <textarea className="textbox" value={'Enter Text here' ? this.state.inputValue : null} category_id={0} onChange={this.handleChange} />
                            </div>
                            <div className="ButtonGroup">
                                <button type="submit" onClick={e => this.handleSubmitNewCard(e, cat_index)}>ADD</button>
                                <button type="delete" onClick={e => this.deleteNewCard(e, cat_index)}>delete</button>
                            </div>
                        </div>
                        : null}
                        <div className = { cardBackgroundColorClassName }>
                            {category.cards && category.cards.map((card, card_index) => {
                            return <div key={card_index} className="Retro">
                                <div key={card.card_id}>
                                    <p>{card.title}</p>
                                </div>
                                <div className="Retro ButtonGroup">
                                    <button onClick={e => this.moveLeft(cat_index, card.card_id)}>&lt;</button>
                                    <button onClick={e => this.deleteCard(cat_index, card.card_id)}>x</button>
                                    <button onClick={e => this.moveRight(cat_index, card.card_id)}>&gt;</button>
                                </div>
                            </div>

/*                                     <Card 
                                    card={card} 
                                    card_index={card_index}
                                    moveLeft={this.moveLeft}
                                    deleteCard={this.deleteCard}
                                    moveRight={this.moveRight}
                                    categories={this.state.categories}
                                    /> */
                                }
                            )}
                        </div>
                    </div>;
            })}
        </div>
    </div>
    )
  };
}

export default App;

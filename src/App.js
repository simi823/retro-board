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
        <button onClick={props.moveLeft(props.category_id, props.card_id)}>&lt;</button>
        <button onClick={props.deleteCard(props.category_id, props.card_id)}>x</button>
        <button onClick={props.moveRight(props.category_id, props.card_id)}>&gt;</button>
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
        if (cat_index === 0) {
            this.setState({newCatIndex: this.state.categories.length - 1});
        } else {
            this.setState({newCatIndex: cat_index - 1});
        } 
        this.setState({
            categories: this.state.categories.map((category, index) => {
                // Remove from current Category
                if (cat_index === index) {
                    let cardToMoveIndex = category.cards.findIndex(x => x.card_id === card_id);
                    this.setState({cardToMove: category.cards[cardToMoveIndex]});
                    category.cards = category.cards.filter((card, card_index) => {
                        return card.card_id !== card_id;
                    })
                    return category;
                }
            })
        });
        this.setState({
            categories: this.state.categories.map((category, index) => {
                // Move to new Category
                if(cat_index === this.state.newCatIndex) {
                    category.cards = category.cards.push(this.state.cardToMove);
                }
                return category;
            }),
            cardToMove: null
        })
    };

    moveRight = (cat_index, card_id) => {
        if (cat_index === this.state.categories.length - 1) {
            this.setState({ newCatIndex: 0 });
        } else {
            this.setState({ newCatIndex: cat_index + 1 });
        };
        console.log("newCatIndex: " + this.state.newCatIndex);
        this.setState({
            categories: this.state.categories.map((category, index) => {
                // Remove from current Category
                if (cat_index === index) {
                    let cardToMoveIndex = category.cards.findIndex(x => x.card_id === card_id);
                    this.setState({ cardToMove: category.cards[cardToMoveIndex] });
                    category.cards = category.cards.filter((card, card_index) => {
                        return card.card_id !== card_id;
                    })
                }
                return category;
            })
        });
        this.setState({
            categories: this.state.categories.map((category, index) => {
                // Move to new Category
                if (cat_index === this.state.newCatIndex) {
                    category.cards = category.cards.push(this.state.cardToMove);
                }
                return category;
            }),
            cardToMove: null
        })
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
    console.log("Main render: ", this.state);
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
                                    </div>;
                                })}
                        </div>
                    </div>;
            })}
        </div>
    </div>
    )
  };
}

export default App;

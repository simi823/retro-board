import React, { Component } from 'react';
// import pen from './pen.svg';
import './retro-board.css';
import Card from './components/Card/Card.js'
import AddCard from './components/AddCard/AddCard.js'
import ControlCard from './components/ControlCard/ControlCard.js'

const categories = [
    {
      id: 1,
      name: 'Went Well',
      colorId: "ww",
      color: '#019588',
    },
    {
      id: 2,
      name: 'To Improve',
      colorId: "ti",
      color: '#e91e63',
    },
    {
      id: 3,
      name: "Action Items",
      colorId: "ai",
      color: '#9c28b0',
    }
];

function Category(props) {
  return (
    <div>
      <h2 className="h4">{props.name}</h2>
      {props.categories.map(category => {
        const key = "category-" + category.id;
        const labelId = "change-category-" + category.id;
        if (category.name === props.name) {
          return <table className="table">
          <tbody>
            <tr key={key}>
              <td className="form-inline">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={e => this.addCard(props.id, e.targer.value)}>
                    +
                  </button>
              </td>
            </tr>
            <tr>
              <td>
                  <Card labelId={labelId} key={key} category_id={category.id} name={category.name} colorId={category.colorId} />
              </td>
            </tr>
            <tr>
              <td>
                  <ControlCard labelId={labelId} key={key} category_id={category.id} name={category.name} colorId={category.colorId} />
              </td>
            </tr>
          </tbody>
        </table>;
        } else return null;
      })}
    </div>
  );
}

class App extends Component {
  state = {
    categories: categories
  }
  addCard = (id, name) => {
    this.setState({
      categories: this.state.categories.map(category => {
        console.log(category);
        return category;
      }),
    });
  };
  moveRight = (id, name) => {
    this.setState({
      categories: this.state.categories.map(category => {
        if (category.id === id) category.name = name;
        return category;
      }),
    });
  };
  moveLeft = (id, category) => {
    this.setState({
      categories: this.state.categories.map(category => {
        if (category.id === id) category.name = category;
        return category;
      }),
    });
  };
  delete = id => {
    this.setState({
      categories: this.state.categories.filter(category => {
        return category.id !== id;
      }),
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Retrospective Board</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <Category
                  name="Went Well"
                  categories={this.state.categories}
                  addCard={this.addCard}
                  moveLeft={this.moveLeft}
                  delete={this.delete}
                  moveRight={this.moveRight}
                />
              </td>
              <td>
                <Category
                  name="To Improve"
                  categories={this.state.categories}
                  addCard={this.addCard}
                  moveLeft={this.moveLeft}
                  delete={this.delete}
                  moveRight={this.moveRight}
                />
              </td>
              <td>
                <Category
                  name="Action Items"
                  categories={this.state.categories}
                  addCard={this.addCard}
                  moveLeft={this.moveLeft}
                  delete={this.delete}
                  moveRight={this.moveRight}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

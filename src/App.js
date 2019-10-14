import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const monsters = await response.json();

    this.setState({ monsters });
  }

  // handleSearch(event) {
  //   this.setState({ searchField: event.target.value });
  // }

  handleSearch = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

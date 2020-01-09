import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
    <div>Hello {this.props.name}!</div>
    );
  }
}

export class App extends Component {
  constructor(props) {

    this.state = {
      name: 'Dragos',
      surname: 'Iordache',
      newName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      newName: evt.target.value
    });
  }

    handleSubmit(evt) {
      this.setState({
        name: this.state.newName,
        newName: ''
    });

  evt.preventDefault();
}

  render() {
    return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/person">Person</Link>

          </li>
        </ul>
      </nav>
      <hr></hr>

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
          <Home name={this.state.name}>Martor</Home>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Nume"
              name="newName"
              value={this.state.newName}
              onChange={this.handleChange}
            ></input>
          </form>
        </Route>
        <Route path="/about">
        <h1>Home</h1>
        </Route>
        <Route path="/person">
        <h1>Person</h1>
        </Route>
      </Switch>
    </Router>
    )};
}

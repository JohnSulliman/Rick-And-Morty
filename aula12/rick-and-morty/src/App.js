import './App.css';
import CardList from './Componentes/CardList'
import Info from './Componentes/Info'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={CardList} />
            <Route path='/char/:id' component={Info} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

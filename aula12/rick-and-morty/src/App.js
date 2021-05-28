import './App.css';
import CardList from './Componentes/CardList'
import Info from './Componentes/Info'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={CardList} />
          <Route path='/char/rick-sanchez' component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

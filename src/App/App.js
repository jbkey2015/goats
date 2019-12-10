import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import goatData from '../helpers/data/goatData';
import GoatCorral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
    <div className="App">
      <button className='btn btn-danger'>HELP ME</button>
      <GoatCorral butts={this.state.goats} />
    </div>
    );
  }
}

export default App;

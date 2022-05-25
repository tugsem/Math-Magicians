import Calculator from './components/Calculator';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="App">
      <Calculator />
    </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import coin2 from './components/coin2.png'
import Bitcoin from './components/convertToBit';
import Satoshi from './components/convertToSat';

class Convert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sats: 100000000,
      bits: 1
    }

      this.handleSatChange = this.handleSatChange.bind(this);
      this.handleBitChange = this.handleBitChange.bind(this);

  }
  
  handleSatChange(event) {
    this.setState({sats: event.target.value});
      }
  
  handleBitChange(event) {
    this.setState({bits: event.target.value});
  };

  render() {
  return (  
    <div className="App">
      <header className="App-header">
        <img src={coin2} className="coinicon" />
        <p>
         Bitcoin To Satoshi and Satoshi to Bitcoin Converter
        </p>
        <label>
          Enter the Amount of Bitcoins:
          <input type="text" value={this.state.bits} onChange={this.handleBitChange} />
        </label>
        <label>
          Enter the Amount of Satoshis:
          <input type="text" value={this.state.sats} onChange={this.handleSatChange} />
        </label>
        <Satoshi bits={this.state.bits} />
        <Bitcoin sats={this.state.sats} />
      </header>
    </div>
  );
  }
}

function App() {
  return (
    <Convert />
  );
}

export default App;

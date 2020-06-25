import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [{shoe: "sneaker"}, {shoe: "boot"}, {shoe: "sandal"}, {shoe: "dress"}, {shoe: "other"}]
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/shoe").then(res => res.json()).then(data => this.setState({shoes: data}))
  }

  render() {
    return (
      <div>
        {this.state.shoes.map((s) => {
          return (
        <ul>
          <li>Shoe Size {s.size}</li>
          <li>Shoe Brand {s.brand_name}</li>
          <li>Shoe Manufacturer{s.manufacturer}</li>
          <li>Shoe Color {s.color}</li>
          <li>Shoe Material{s.material}</li>
          <li>Shoe Type{s.shoe_type}</li>
          <li>Shoe Fastener Type{s.fasten_type}</li>
        </ul>
          )
        }
        )}
      </div>
    );
  }
}

export default App;

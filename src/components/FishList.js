import React from "react";
import PropTypes from "prop-types";
import Fish from './Fish'

class FishList extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
  };

  render() {
  return (
    <ul className="fishes">
      {Object.keys(this.props.fishes).map(key => (
        <Fish
          key={key}
          index={key}
          details={this.props.fishes[key]}
          addToOrder={this.props.addToOrder}
        />
      ))}
    </ul>
    );
  }
}

export default FishList;

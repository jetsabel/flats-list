import React from "react";
import PropTypes from "prop-types";
import FishList from './FishList'
import FishDetails from './Fish'
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };
  render() {
    // console.log(this.props)
    const { image, name, price, desc, status } = this.props.fishes;
    const isAvailable = status === "available";
    return (
      <div>
          {this.props.info ? 
              <FishDetails fishes={this.props.fishes} showDetails={this.props.showDetails} addToOrder={this.props.addToOrder} /> 
              :
              <FishList fishes={this.props.fishes} showDetails={this.props.showDetails} addToOrder={this.addToOrder} /> 
          }
          </div>
    );
  }
}

export default Fish;

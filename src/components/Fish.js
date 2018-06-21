import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  state = {
    showDetails: false
  };

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

  toggleDetails = () => {
    let sd = this.state.showDetails
    sd = !sd
    this.setState({showDetails: sd})
  }
    
  render() {
  let showDetails=false
    const { image, name, price, desc, status, phone, address } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
        <button onClick={this.toggleDetails} > {this.state.showDetails ? "Hide" : "Details"} </button>
        </h3>
        <div>
          <span className="price">{formatPrice(price)}
          </span>
        </div>
        <h3>
        <p>{address}</p>
        {this.state.showDetails && <p>{phone}</p>}
        </h3>
        <h3>
        {this.state.showDetails && <p>{desc}</p>}
        </h3>
        {/* {<button disabled={!isAvailable} > Leased </button> */}
      </li>
    );
  }
}

export default Fish;

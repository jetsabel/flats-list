import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";


class FishDetails extends React.Component {
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
    const { image, name, price, desc, status, phone } = this.props.details;
    const isAvailable = status === "available";
    let isShowingDetails= false
    if(isShowingDetails===false) {
      return (
        <li className="menu-fish">
          <img src={image} alt={name} />
          <h3 className="fish-name">
            {name}
            <span className="price">{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          <button
            disabled={!isAvailable}
            onClick={() => {isShowingDetails= !isShowingDetails}}
          >
            {isAvailable ? "Details" : "Leased"}
          </button>
        </li>
      );
    }
    if(isShowingDetails===true) {
      return (
        <li className="menu-fish">
          <img src={image} alt={name} />
          <h3 className="fish-name">
            {name}
          </h3>
          <p>{desc}</p>
          <p>{phone}</p>
          <button
            disabled={!isAvailable}
            onClick={() => {isShowingDetails= !isShowingDetails}}
            // onClick={() => this.props.addToOrder(this.props.index)}
          >
            {isAvailable ? "Hide" : "Leased"}
          </button>
        </li>
      );
    }
  }
}

export default FishDetails;

import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
import Tachyons from 'tachyons'

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
    const { image, name, price, desc, status, phone, address, suburb, postcode, contactName, email } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
        <button onClick={this.toggleDetails} > {this.state.showDetails ? "Hide" : "Details"} </button>
        {/* <button onClick={this.toggleDetails} > {this.state.showDetails ? "Contact" : "Contact"} </button> */}
        </h3>
        <div>
          <span className="price">{formatPrice(price)} </span>
        </div>
        <h3 className='fish-name'>
        {this.state.showDetails && <p>{address}, </p>} <p>{suburb}</p>
        {this.state.showDetails && <p> {postcode}</p>}
        </h3>
        <h3>
        {this.state.showDetails && <p>{desc}</p>}
        </h3>
        <h3 className='price tr'>
        {this.state.showDetails && <p>Contact: {contactName} on {phone}</p>}
        {(this.state.showDetails && email) && <p> or {email}</p>}
        </h3>

        {/* <button disabled={!isAvailable} > {isAvailable ? "Available Now!" : "Leased"}</button> */}
      </li>
    );
  }
}

export default Fish;

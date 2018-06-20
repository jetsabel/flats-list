import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  phoneRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  createFish = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      phone: this.phoneRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Available</option>
          <option value="unavailable">Leased</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="phone"
          ref={this.phoneRef}
          type="text"
          placeholder="Phone"
        />
        {/* <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        /> */}
        <button type="submit">+ Add Flat</button>
      </form>
    );
  }
}

export default AddFishForm;

import React from "react";




class Contact extends React.Component {

  render() {
    console.log("props", this.props);
    return (
      <section className="container">
        <div>Contact Us</div>
        {/* <div>{this.props.Foods}</div> */}
      </section>
    );
  }
}


export default Contact;

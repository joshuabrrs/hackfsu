import React from "react";
import PropTypes from "prop-types";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    const { header, body } = this.props;
    const display = this.state.isOpen ? "inline-block" : "none";

    return (
      <div className="bg-white w-100 ph4 pv4 mt4" onClick={this.toggle}>
        <h1 className="galano f3 black-70 mv0">{header}</h1>
        <p
          className="avenir-book f4 black-70 mb0"
          style={{
            display: display,
          }}
        >
          {body}
        </p>
      </div>
    );
  }
}

FAQ.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default FAQ;

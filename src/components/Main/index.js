import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from 'actions/user';

class Main extends Component {
  static store(state) {
    return {
        user: state.user
    };
  }

  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.addTodo();
  }

  render() {
    return(
      <div>
        Main
        <button onClick={this.onClick}>action test</button>
      </div>
    );
  }
}

Main.propTypes = {
  addTodo: PropTypes.func
}

module.exports.default = module.exports = connect(Main.store, { addTodo })(Main);

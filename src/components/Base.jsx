const React = require('react');

var Base = React.createClass({
  render: function () {
    return(
  <div>
    <div> <h1>  Header </h1></div>
    <div>
      {this.props.children}
    </div>
    <div>
      <h1>Footer</h1>
    </div>
  </div>
);
  }
});

module.exports = Base;

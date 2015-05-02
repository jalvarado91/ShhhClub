var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});



var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 2});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

var QBox = React.createClass({
  render: function(){
    return (
      <div className="qbox"> WASSAAAPP </div>
    );
  }
});

var Sidebar = React.createClass({
  render: function(){
    return (
      <div className="sidebar">
        <h1> Shhhh.club </h1>
      </div>
    );
  }
});
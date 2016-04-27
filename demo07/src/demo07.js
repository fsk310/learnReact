var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? '是' : '不是';
    return (
      <p onClick={this.handleClick}>
        你 {text} 大表哥. 点击切换.
      </p>
    );
  }
});

React.render(
  <LikeButton />,
  document.getElementById('example')
);
var Post = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    published: React.PropTypes.bool,
    publishedBy: React.PropTypes.node,
    publishedBy: React.PropTypes.node,
    publishedBy: React.PropTypes.node,
    publishedBy: React.PropTypes.node,
    publishedBy: React.PropTypes.node,
    publishedBy: React.PropTypes.node
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
        <div>Published: {this.props.published}</div>
        <div>Published By: {this.props.published_by}</div>
        <div>Published By: {this.props.published_by}</div>
        <div>Published By: {this.props.published_by}</div>
        <div>Published By: {this.props.published_by}</div>
        <div>Published By: {this.props.published_by}</div>
        <div>Published By: {this.props.published_by}</div>
      </div>
    );
  }
});

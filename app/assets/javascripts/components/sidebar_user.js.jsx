var SidebarUser = React.createClass({
    displayName: 'SidebarUser',
    render: function () {
        return (
            <div className="sidebar-user">
            	<img src={this.props.thumb} />
            	<span>{this.props.name}</span>
            </div>
        );
    }
});
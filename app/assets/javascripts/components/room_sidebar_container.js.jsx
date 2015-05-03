var RoomSidebar = React.createClass({
    displayName: 'RoomSidebar',
    render: function () {
        return (
            <div className="room-sidebar">
            	{this.props.children}
			</div>
        );
    }
});
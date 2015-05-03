var UserSidebar = React.createClass({
	displayName: 'UserSidebar',

    render: function () {
		var userNodes = this.props.users.map(function ( sidebar_user ) {
	      return <SidebarUser 
	      				name={ sidebar_user.name } 
	      				thumb={ sidebar_user.image_thumb } />
	    });

        return (
            <div className="user-sidebar">
            	<div className="users-container dynamicList">
            		<h2>Users Here</h2>
            		{ userNodes }
            	</div>
			</div>
        );
    }
});

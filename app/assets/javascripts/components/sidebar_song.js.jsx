var SidebarSong = React.createClass({
    displayName: 'SidebarSong',
    
    render: function () {
        return (
            <div className="sidebar-song">
            	<span className="song-name">{this.props.name}</span>
            	<span>{this.props.artist}</span>
            </div>
        );
    }
});
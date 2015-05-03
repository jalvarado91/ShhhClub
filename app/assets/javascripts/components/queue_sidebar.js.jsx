var QueueSidebar = React.createClass({
    displayName: 'QueueSidebar',

    render: function () {
        var songNodes = this.props.songs.map(function ( sidebar_song ) {
          return <SidebarSong 
                  name={ sidebar_song.name } 
                  artist={ sidebar_song.artist } />
        });
        return (
            <div className="queue-sidebar">
              <div className="queue-container dynamicList">
                <h2>Up Next</h2>
              	{ songNodes }
              </div>
			      </div>
        );
    }
});
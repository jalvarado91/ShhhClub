var Room = React.createClass({

	getInitialState: function() {
    	return {
    		room_data: [],
    		song_data: {
    			title: ""
    		}
    	};
  	},

	loadRoomFromServer: function() {
    	$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({
					room_data: data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
	    });
  	},
	componentDidMount: function() {
	    this.loadRoomFromServer();
	    setInterval(this.loadRoomFromServer, this.props.pollInterval);
	},
    render: function () {
        return (
        	<div>
        		<h1>{ this.state.room_data.title }</h1>
        		<h3>{ this.state.room_data.description } </h3>
	            <div class="current-container">
	            	<h3>Now Playing</h3>
	            	<CurrentSong 
	            		title="Follow You"
        				artist="Monogem"
    					album_url="https://i1.sndcdn.com/artworks-000081163804-gh5yfd-t500x500.jpg" />
            	</div>
            	 
	            <div>
	            	<h2>Sidebar</h2>
	            	<div>
		            	<h3>Users</h3>
		            	<ul><li>Jon Snow</li><li>Sansa Stark</li></ul>
	            	</div>
	            	<div>
	            		<h3>Queue</h3>
	            		<ul>
	            			<li>Institutionalized - Kendrick Lamar</li>
	            			<li>Fading - Shlohmo</li>
	            			<li>Celebrating Nothing - Phantogram</li>
						</ul>
	    			</div>
	            </div>
        		<div><h2>Player</h2></div>
            </div>
        );
    }
});

var CurrentSong = React.createClass({
    displayName: 'CurrentSong',
    render: function () {
        return (
            <div className="current-song">
            	<img src={ this.props.album_url } />
            	<div class="song-meta">
	            	<h2 class="title">{ this.props.title }</h2>
	            	<h3 class="artist">{ this.props.artist }</h3>
            	</div>
            </div>
        );
    }
});

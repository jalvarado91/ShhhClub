var Room = React.createClass({

	getInitialState: function() {
    	return {
    		room_data: [],
    		song_data: {
    			title: ""
    		},
    		current_users: [
    			{
    				name: "Juan Alvarado",
    				image_thumb: "http://i.imgur.com/Xn2DAvm.png"
    			},
    			{
    				name: "Miguel Ramos",
    				image_thumb: "http://i.imgur.com/V7rRpg0.png"
    			},
    			{
    				name: "Chris Scott",
    				image_thumb: "http://i.imgur.com/wKhby3U.png"
    			},
    			{
    				name: "Julissa Cotillo",
    				image_thumb: "http://i.imgur.com/ww5oXqO.png"
    			}
    		]
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
            	<RoomSidebar>
            		<UserSidebar users={this.state.current_users} />
            	</RoomSidebar>
	            <div>
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

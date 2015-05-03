var Room = React.createClass({

	getInitialState: function() {
    	return {
    		room_data: [],
    		song_data: {
    			title: "Follow You",
    			artist: "Monogem",
    			album_art: "https://i1.sndcdn.com/artworks-000081163804-gh5yfd-t500x500.jpg"
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
    		],
    		song_queue: [
    			{
    				name: 'Institutionalized',
    				artist: 'Kendrick Lamar'
    			},
    			{
    				name: 'Fading',
    				artist: 'Shlohmo'
    			},
    			{
    				name: 'Celebrating Nothing',
    				artist: 'Phantogram'
    			},
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
		var divStyle = {
		  backgroundImage: 'url(' + this.state.song_data.album_art + ')'
		};

        return (
        	<div className="room-container" >
        		<div className="container-bg" style={divStyle}></div>
        		<div className="top">
	        		<h1>{ this.state.room_data.title }</h1>
	        		<h3>{ this.state.room_data.description } </h3>
        		</div>
        		<div className="middle-container">
		            <div className="current-container">
		            	<h3>Now Playing</h3>
		            	<CurrentSong 
		            		title={this.state.song_data.title}
	        				artist={this.state.song_data.artist}
	    					album_url={this.state.song_data.album_art} />
	            	</div>
	            	<RoomSidebar>
	            		<UserSidebar users={this.state.current_users} />
	            		<QueueSidebar songs={this.state.song_queue} />
	            	</RoomSidebar>
            	</div>
        		<div className="bottom">
        			<h2>Player</h2>
    			</div>
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
            	<div className="song-meta">
	            	<h2 className="title">{ this.props.title }</h2>
	            	<h3 className="artist">{ this.props.artist }</h3>
            	</div>
            </div>
        );
    }
});

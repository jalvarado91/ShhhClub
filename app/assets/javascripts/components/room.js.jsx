var Room = React.createClass({

	getInitialState: function() {
    	return {
    		room_data: [],
    		song_data: {
    			title: "Follow You",
    			artist: "Monogem",
    			album_art: "https://i1.sndcdn.com/artworks-000081163804-gh5yfd-t500x500.jpg",
                track_id: "186879560",
                track_stream_url: ""
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

  	loadSoundCloudData: function() {

  		$.ajax({
            url: 'http://api.soundcloud.com/resolve.json?url='+this.props.soundcloud_url+'&client_id=6071634b72ac609bca02841b84533438',
			// url: 'http://api.soundcloud.com/tracks/'+this.props.track_id+'.json?client_id=6071634b72ac609bca02841b84533438',
			dataType: 'json',
			cache: false,
			success: function(data) {
                var album_art_url = data.artwork_url.replace('-large', '-t500x500');
				this.setState({
                    song_data : {
                        title: data.title,
                        artist: data.user.username,
                        album_art: album_art_url,
                        track_id: data.id,
                        track_stream_url: 'https://api.soundcloud.com/tracks/'+data.id+'/stream?client_id=6071634b72ac609bca02841b84533438'
                    }
                });
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
	    });
  	},
    handleSubmit: function ( event ) {
        event.preventDefault();

        var song_url = this.refs.song_url.getDOMNode().value.trim();

        // validate
        if (!song_url) {
          return false;
        }

        // submit
        this.props.soundcloud_url  = song_url;
        this.loadSoundCloudData();

        // reset form
        this.refs.song_url.getDOMNode().value = "";
    },

	componentDidMount: function() {
	    this.loadRoomFromServer();
	    this.loadSoundCloudData();

	    var room_id = this.props.room_id
	    var presenceChannel = pusher.subscribe("presence-room-" + room_id);

	    presenceChannel.bind('pusher:subscription_succeeded', function(members) {
	     alert(members.count)
	    }).bind(this);

	    Channel = pusher.subscribe("private-room-" + room_id);

	    Channel.bind('pusher:subscription_succeeded', function() {

	      Channel.bind('client-player', function(data){

	        console.log(data.action);

	        if (data.action === "pause"){
	          console.log('pausing');
	          $('.player').trigger('pause');
	        };
	        if (data.action === "play"){
	          console.log('play');
	          $('.player').trigger('play');
	        }

	      });

	    }).bind(this);

        $('.player')[0].onpause = function(){
	      Channel.trigger('client-player', {action: 'pause'})
	    }
	    $('.player')[0].onplay = function(){
	      Channel.trigger('client-player', {action: 'play'})
	    }

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
                        <form ref="form" className="song-form" accept-charset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
                            <input ref="song_url" name="song[author]" placeholder="SoundCloud Url" />
                            <button type="submit">Change Song</button>
                        </form>
                        <UserSidebar users={this.state.current_users} />
                        <QueueSidebar songs={this.state.song_queue} />
                    </RoomSidebar>
            	</div>
        		<div className="bottom">
        			<audio 
        				controls="controls" 
        				className="player" 
        				src={this.state.track_stream_url != null? this.state.track_stream_url: this.props.track_stream}>
    				</audio>
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

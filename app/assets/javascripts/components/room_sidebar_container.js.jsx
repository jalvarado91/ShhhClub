
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



var ready;
ready = function() {

	$(".createroom").click(function(){
		$('.create').toggle();
	});
};

$(document).ready(ready);
$(document).on('page:load', ready);


if (navigator.geolocation){
        	navigator.geolocation.getCurrentPosition(function(position, sortResults){
            	var latt = position.coords.latitude;
            	var longg = position.coords.longitude;
            	$('.hidelat').val(latt);
				$('.hidelng').val(longg);
			});
}




var getRooms = function(){
	$.ajax({
		url: "/rooms",
		dataType: 'json',
		cache: false,
		success: function(data){
			console.log(data[0].title)
			console.log(data);
			for(var i=data.length-1; i>=0; i--){
				var roomtitle = data[i].title;
				var youtubeurl = "http://img.youtube.com/vi/"+data[i].youtube_url+"/0.jpg";
					$(".rooms").append(
						"<div class='room' style=background-image:url('"+ youtubeurl+"') >" +
						"<a href='/rooms/"+data[i].id+"'>title: " + roomtitle +
						"</a></div>"
					);
			}

		},
		error: function(xhr, status, err){
			console.log(err);
		}
	});
}

getRooms();
		
	

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require rooms
//= require_tree .


// Enable pusher logging - don't include this in production
  Pusher.log = function(message) {
  if (window.console && window.console.log) {
  window.console.log(message);
}
};

  var channel = pusher.subscribe('test_channel');

  channel.bind('my_event', function(data) {
  alert(data.message);
});
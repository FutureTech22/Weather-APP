jQuery(function(){



	$.ajax({
		url:'http://api.openweathermap.org/data/2.5/forecast/daily?q=cincinnati&units=imperial&APPID=b52a2c029fff494c5032a2860ad870f2',
	success: function(response){

		console.log(response);

		response.list.forEach(function(city){
			$('#temperature').append(`
				<div class='city col-md-4'>
				<h1>${city.temp.max}</h1>
				<h1>${city.temp.min}</h1>
				</div> `)
		})
	}})
});


$('#submit').click(function() {
  var content = $('#cities').val();
  $('#temperature').html('');
  $.ajax({
		url:`http://api.openweathermap.org/data/2.5/forecast/daily?q=${content}&units=imperial&APPID=b52a2c029fff494c5032a2860ad870f2`,
	success: function(response){

		console.log(response);

		response.list.forEach(function(city){
			$('#temperature').append(`
				<div class="city col-md-4">
				<h1>${city.temp.max}</h1>
				<h1>${city.temp.min}</h1>
				</div> `)
		})
	}})
});
	


//Make Enter Clickable
// assign variable content to input
// When enter is clicked submit input content to API

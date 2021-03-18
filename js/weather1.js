$(document).ready(function(){
	$('#submit').click(function(){
		
		var city=$("#city").val();
		
		if(city!='' ){
			
			$.ajax({
				
				url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
				"&appid=eae12b014effe69a87eee0ef7e676fbd",
				type:"GET",
				dataType:"jsonp",
				success:function(data){
					var widget=show(data);
					$("#show").html(widget);
					$("#city").val('');
				}
				
			});
			
		}else{
			$("#error").html('cannot empty');
			
		}
		
	});
});

function show(data){
	return "<h1>"+data.name +"    "+data.sys.country+"</h1>"+  
	       "<h3><strong>Weather</strong>: "+data.weather[0].main +" </h3>"+ 
	       "<h3><img src=' http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'> "+data.weather[0].description +"</h3>"+ 
		   "<h3><strong>Temprature</strong>: "+data.main.temp +" <strong>'C</strong></h3>"+ 
		   "<h3><strong>Pressure</strong>: "+data.main.pressure +"<strong>hPa</strong></h3>"+ 
		   "<h3><strong>Humidity</strong>: "+data.main.humidity +"<strong>%</strong></h3>";
		   
		   
	
}
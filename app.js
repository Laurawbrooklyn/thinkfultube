
$("form").on("submit", function(event) {

	event.preventDefault()
	var query = $("input").val()
	search(query)
	$("input").val('')
})

function search(query) {

	var url = "https://www.googleapis.com/youtube/v3/search?q=" + query + "&maxResults=25&part=snippet%20&key=AIzaSyCvAX32SbTMteQkYGq_UXSopMNTPdh7jvA"
	$(".js-videos").html('')
	$.getJSON(url, function(results) {
		$(".js-videos").html('')
		for (var i = 0; i < results.items.length; i++) {	
			$(".js-videos").append("<h1>" + results.items[i].snippet.title + "</h1>")
			console.log("<h1>" + results.items[i].snippet.title + "</h1>")
			var videoUrl = 'https://www.youtube.com/watch?v=' + results.items[i].id.videoId			
			$(".js-videos").append("<a href='" + videoUrl + "'>Watch Me</a>")
			$(".js-videos").append("<img src='" + results.items[i].snippet.thumbnails.medium.url + "'> ")
		}
	})
}

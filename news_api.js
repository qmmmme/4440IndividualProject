//function for default homepage about charlotte news
$(window).on("load", function(e){
	//prevent reloading the Web page
	e.preventDefault();

	let queryString = "charlotte";
	let url = "https://api.thenewsapi.com/v1/news/top?api_token=4RKR8wJk5ifkY3DboIh9YjGha8jesJ2RmMcHR34n&search="+queryString+"";

	if(queryString !== "") {
		
		$.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			//show the loader indicator when waiting
			beforeSend: function() {
				$("#loader").show(); 
			},
			// hide the loader indicator
			complete: function () {
				$("#loader").hide();
			},
			// when the response is fully received
			success: function(info) {
				let op = "";
				let latestNews = info.data;

				for(var i in  latestNews) {
					op += `
						<div class="output1">
						<h4>${latestNews[i].title}</h4>
						<a href="${latestNews[i].url}" target="_blank"><img src="${latestNews[i].image_url}"></a>
						<p>Language: ${latestNews[i].language}</p>
						<p>${latestNews[i].description}</p>
						<p>Published on: ${latestNews[i].published_at}<br>
						<p>Source: ${latestNews[i].source}</p>
						<a href="${latestNews[i].url}" target="_blank">Read more</a></p>
						
						</div>
					`;
				}
				if(op !== "") {
					console.log("here");
					$("#default_news").html(op);

				}
				else {
					//console.log("not found");
					let newsNotFound = "This  news isn't available. Sorry for that";
					$("#default_news").html(newsNotFound);
				}
			},
			error: function() {
				console.log("error");
			}
		});
	}
	
	
});

$(document).ready( function (){
	
	
	$("#searchbtn").click( function(e){
		//prevent reloading the Web page
		e.preventDefault();
		//hide the default news
		// $("#default_news").hide();
		let queryString = $("#searchquery").val();
		let url = "https://api.thenewsapi.com/v1/news/top?api_token=4RKR8wJk5ifkY3DboIh9YjGha8jesJ2RmMcHR34n&search="+queryString+"";

		if(queryString !== "") {
			
			$.ajax({
				url: url,
				method: "GET",
				dataType: "json",
				//show the loader indicator when waiting
				beforeSend: function() {
					$("#loader").show(); 
				},
				// hide the loader indicator
				complete: function () {
					$("#loader").hide();
				},
				// when the response is fully received
				success: function(info) {
					let op = `<h2>${queryString.toUpperCase()} News</h2>`;
					let latestNews = info.data;

					for(var i in  latestNews) {
						op += `
							<div class="output">
							<h4>${latestNews[i].title}</h4>
							<a href="${latestNews[i].url}" target="_blank"><img src="${latestNews[i].image_url}"></a>
							<p>Language: ${latestNews[i].language}</p>
							<p>${latestNews[i].description}</p>
							<p>Published on: ${latestNews[i].published_at}<br>
							<p>Source: ${latestNews[i].source}</p>
							<a href="${latestNews[i].url}" target="_blank">Read more</a></p>
							
							</div>
						`;
					}
					if(op !== "") {
						//console.log("here");
						$("#news").html(op);

					}
					else {
						//console.log("not found");
						let newsNotFound = "This  news isn't available. Sorry for that";
						$("#news").html(newsNotFound);
					}
				},
				error: function() {
					console.log("error");
				}
			});
		}
		
		
	});
	
	
});


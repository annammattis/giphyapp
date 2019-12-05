
var topics =["The Good Place", "Game of Thrones", "How I Met Your Mother", "Westworld", "Family Guy"];

//go through the list
for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
    //create a button
    //give it a name
    var button = $("<button>").text(topics[i]);
    //grabs the buttonArea div and shows the buttons on the page
    $("#buttonArea").append(button);
}

//have the gifs show on the page when a button is clicked
$("#buttonArea button").on("click", function() {
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });
});



function getData(){

    var input = $("#searchText").val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=QTQ2zi6YT1LXmYu8cTtapd86PFrOjdBZ&limit=30");

    xhr.done(function(response) { console.log("success data here", response); 
    
    var gifs = response.data
    
    for(i in gifs) {
        // $(".container").append('<img src='"+gifs[i].images.original.url"'>')
    }
    });

}

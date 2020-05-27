
function getMovieByTitle(title) {
var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";
return $.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
  console.log(response);
  console.log(response.Runtime);
  return response
});

var searchEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var nytApiKey = "01bb2ae58dce49a798ab121c364137f4";

function searchArticle(search){
    var url = searchEndpoint;
    url += '?' + $.param({
        'api-key': nytApiKey,
        'q': search
      });
}



console.log(url);
// 
var searchEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var nytApiKey = "01bb2ae58dce49a798ab121c364137f4";

function searchArticle(search, records, startYear, endYear) {
    
    //Set the URL to the searchEndPoint per the api docs
    var url = searchEndpoint;
    
    url += '?' + $.param({
        'api-key': nytApiKey, //The API KEY from above
        'q': search //The search criteria; this is required
    });

    if(startYear && startYear.length === 4){
        url += "&" + $.param({
            'begin_date': startYear + "0101" //The search criteria; this is required
        });  
    }

    if(endYear && endYear.length === 4){
        url += "&" + $.param({
            'end_date': endYear //The search criteria; this is required
        });  
    }

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        
        // Document Stuff Here

        console.log(result);


    }).fail(function (err) {
        throw err;
    });
}


  function swap(){
    var tweet = document.body.getElementsByClassName("tweet-text");
    document.write("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>EX1</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"></head><body>");
    for (var i = 0; i < tweet.length; i++) {
      document.write("<h4><b>TWEET "+(i+1)+"</b></h4><p>"+tweet[i].textContent+"</p>");
      document.write("<div class=\"container\">");
      document.write("</div>");
    }
  }
  swap();

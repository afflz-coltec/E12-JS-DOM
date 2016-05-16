function swap(){
  var img = document.body.getElementsByTagName("img");
  for (var i = 0; i < img.length; i++) {
    img[i].src = img[i].textContent;
  }

}
swap();

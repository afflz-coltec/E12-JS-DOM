function seek_destroy(search,tag){
  var sum = 0;
  tag = tag.toUpperCase();
  for (var i = 0; i < search.childNodes.length; i++) {
    var childNode = search.childNodes[i];

    if(childNode.childNodes.length > 0){
      sum += seek_destroy(childNode,tag);
      if(childNode.tagName != null && childNode.tagName == tag){
        sum ++;
      }
    }
  }
  return sum;
}
console.log(seek_destroy(document.body,"a"));

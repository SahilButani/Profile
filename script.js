function setImages()
{
  var obj = JSON.parse(data);
  var imgData = obj.images;

var table = document.getElementById("imageTable");

  for(var i=0;i<imgData.length;i++){
    var image = document.createElement("img");
    image.src=imgData[i].url;
    table.appendChild(image);
  }
}

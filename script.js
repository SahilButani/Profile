getJsonObjectLocally = function() {
	return JSON.parse(localStorage.getItem('imagesJson'));
}

function setImages()
{
  var obj;
  if(getJsonObjectLocally() == null) {
    obj = JSON.parse(data);
  } else {
    obj = getJsonObjectLocally();
  }
  
  var imgData = obj.images;

var table = document.getElementById("imageTable");

  for(var i=0;i<imgData.length;i++){
    var image = document.createElement("img");
    image.src=imgData[i].url;
    table.appendChild(image);
  }
}

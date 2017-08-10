$(document).foundation()

console.log('Started');

document.querySelector('.thumb').addEventListener('click', featureImage);

function featureImage(e) {
  var targetElement = e.target || e.srcElement;
  targetId = targetElement.getAttribute("id");
  console.log(targetId);



  document.getElementById("img__featured").innerHTML = "<img src=\"img/cat" + targetId + ".jpg\" width=\"400px\" alt=\"Featured photo\" />";
}
$(document).foundation()

console.log('Started');

document.querySelector('.thumb').addEventListener('click', featureImage);

function featureImage(e) {
  var targetElement = e.target || e.srcElement;
  targetId = targetElement.getAttribute("id");
  console.log(targetId);

  document.getElementById("img__featured").innerHTML = "<img src=\"img/cat" + targetId + ".jpg\" width=\"400px\" alt=\"Featured photo\" />";
  fadeIn(document.getElementById("img__featured"));
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
var screenHeight = $(window).height();
var imageHeight = screenHeight;
if (imageHeight < 50) {
    imageHeight = 50;
}
document.getElementById("heroImage").width = imageHeight;
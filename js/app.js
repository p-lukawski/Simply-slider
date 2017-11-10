document.addEventListener("DOMContentLoaded", function(){

  var previous = document.getElementById("prevPicture");
  var next = document.getElementById("nextPicture");
  var picsTab = document.querySelectorAll("li");
  var currentIndex = 0;
  var currentPic = picsTab[currentIndex];
  currentPic.setAttribute("class", "visible");

  previous.addEventListener("click", function(){
    if(currentIndex == 0) {
        currentPic.setAttribute("class", "");
        currentIndex = 5;
        currentPic = picsTab[currentIndex];
        currentPic.setAttribute("class", "visible");
    }else{
      currentPic.setAttribute('class', '');
      currentIndex--;
      currentPic = picsTab[currentIndex];
      currentPic.setAttribute('class', 'visible');
    }
  });
  next.addEventListener("click", function(){
    if(currentIndex < 5) {
        currentPic.setAttribute("class", "");
        currentIndex++;
        currentPic = picsTab[currentIndex];

        currentPic.setAttribute("class", "visible");
    }else {
      currentPic.setAttribute("class", "");
      currentIndex = 0;
      currentPic = picsTab[currentIndex];
      currentPic.setAttribute("class", "visible");
    }
  });
    


});

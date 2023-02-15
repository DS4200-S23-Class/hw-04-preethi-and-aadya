// makes a border for the selected points 
function addBorder(circle) {
    circle.classList.toggle('addBorder');
  }
  
  // displays the cordinates of the selected point 
  function displayCordinates(circle) {
    let cx = circle.getAttribute('cx') / 50
    let cy = (500 - circle.getAttribute('cy')) / 50
    let newText = 'The coordinate of the clicked point is: (' + cx + ',' + cy + ')';
    document.getElementById('selected-point').innerHTML = newText;
  }
  

  // Add the point from the user input
  function addPoint() {

    let X = document.getElementById("x-coordinates");
    let Y = document.getElementById("y-coordinates");
    let chosenX = parseInt(X.value);
    let chosenY = parseInt(Y.value);
    
      let graph = document.getElementById('frame')
  
      let newPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  
      newPoint.setAttribute("cx", (chosenX * 50));
      newPoint.setAttribute("cy", (500 - (chosenY * 50))); 
      newPoint.setAttribute("r", 10); 
  
      graph.appendChild(newPoint);
  
      newPoint.addEventListener('click', function(){addBorder(newPoint)});
      newPoint.addEventListener('click', function(){displayCordinates(newPoint)});;
  }
  
  document.getElementById("subButton").addEventListener("click", addPoint);
  
// the operations are preformed when the circle get clicked 
  function circleClicked() {
    let circles = document.getElementsByTagName('circle');
    for (let i = 0; i < circles.length; i++){
      circles[i].addEventListener('click', function(){addBorder(circles[i])});
      circles[i].addEventListener('click', function(){displayCordinates(circles[i])});
    }
  }
  
// calls the function that perform the operations when the circles are clicked 
  circleClicked()
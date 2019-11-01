/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

entryPoint = document.querySelector('.carousel-container');
entryPoint.appendChild(carouselCreator());

function carouselCreator() {
  const newCarousel = document.createElement('div');
  newCarousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = ' < ';
  newCarousel.appendChild(leftButton);

  const imgMountain = document.createElement('img');
  imgMountain.src = "./assets/carousel/mountains.jpeg";
  newCarousel.appendChild(imgMountain);

  const imgComputer = document.createElement('img');
  imgComputer.src = "./assets/carousel/computer.jpeg";
  newCarousel.appendChild(imgComputer);

  const imgTrees = document.createElement('img');
  imgTrees.src = "./assets/carousel/trees.jpeg";
  newCarousel.appendChild(imgTrees);

  const imgTurntable = document.createElement('img');
  imgTurntable.src = "./assets/carousel/turntable.jpeg";
  newCarousel.appendChild(imgTurntable);

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ' > ';
  newCarousel.appendChild(rightButton);

  return newCarousel;
}
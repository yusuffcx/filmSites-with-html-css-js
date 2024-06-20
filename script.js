const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  console.log(imageItem);
  arrow.addEventListener("click", function () {
  if (imageItem - (4 + clickCounter) >= 0) {
      clickCounter++;
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
  }else{
    movieLists[i].style.transform = "translateX(0)"
  }
});

});
 

/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-item-title");


ball.addEventListener("click",function()
{
    items.forEach((item) => item.classList.toggle("active"));

})




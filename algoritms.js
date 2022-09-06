//Sorting Algorithms 
//- Bubble sort
//- Selection sort
//- Insertion sort
//- Merge Sort

//Searching Algorithms
//- Liear Search
//- Binary Search

//String Reverse Algorithm

//Hashing algorithm (Caesar cipher)

//Fibonacci sequence

// Factorial Algorithm





const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "http://aws.random.cat/meow";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;

  if (isLoaded) {
    fetchHandler();
  }
});







<div class="container">
<h2>Anime</h2>
<div class="card">
  <img src="https://sun9-west.userapi.com/sun9-48/s/v1/if2/UZb9yCVJHagKT5XoQfkbh6XiZNuFFR7bsLOHLEKwKLrno7hH3R9dF5q2_tRJVEE0RzsSwNkhSVaBS8hQEnkM1BfP.jpg?size=750x750&quality=95&type=album" alt="Cat" class="img">
</div>
<button class="btn" type="button">Random Cat</button>
</div>
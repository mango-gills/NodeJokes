const submitBtn = document.querySelector(".submit-btn");
const jokeText = document.getElementById("joke");
const answer = document.getElementById("answer");

// get a random joke on submit button click
submitBtn.addEventListener("click", () => {
  handleClick();
});

// get json data from api endpoint
const fetchJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// get the joke text from json data
const handleClick = async () => {
  const { joke } = await fetchJoke();
  jokeText.innerText = joke;
};

// set a joke on jokeText on page load.
handleClick();

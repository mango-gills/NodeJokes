const submitBtn = document.querySelector(".submit-btn");
const jokeText = document.getElementById("joke");
const answer = document.getElementById("answer");

handleClick();

submitBtn.addEventListener("click", () => {
  handleClick();
});

const randomJoke = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

console.log("working for now");

async function fetchJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeText.innerText = joke;
}

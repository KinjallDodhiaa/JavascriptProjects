const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const getJokes = document.querySelector("#getJokes");
  const newLi = document.createElement("li");
  getJokes.appendChild(newLi);
  newLi.append(jokeText);
};

const getDadJoke = async () => {
  try {
    const config = {
      headers: { Accept: "application/json" },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes available............";
  }
};

const button = document.querySelector("button");

button.addEventListener("click", addNewJoke);

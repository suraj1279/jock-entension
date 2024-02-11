fetch(
  "https://hindi-jokes-api.onrender.com/jokes?api_key=b4c65c0f46fcd6edf2c73716df43"
)
  .then((response) => response.json())
  .then((jokeData) => {
   // console.log(jokeData);
    const jokeText = jokeData.jokeContent;
    const jokeElement = document.getElementById("jokeElement");
      //console.log(jokeText);
   jokeElement.innerHTML = jokeText;
  });

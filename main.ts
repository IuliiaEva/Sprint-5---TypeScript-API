//Show jokes to the user
async function joke(): Promise<void> {
  try {
    const response: Response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data: { joke: string } = await response.json();
    const jokeText: HTMLElement | null = document.getElementById("joke-text");
    if (jokeText) {
      jokeText.textContent = data.joke;
    }
  } catch (error) {
    console.error(error);
  }
}

async function jokeChuckNorris(): Promise<void> {
  try {
    const response: Response = await fetch('https://api.chucknorris.io/jokes/random');
    const data: { value: string } = await response.json();
    const jokeText: HTMLElement | null = document.getElementById("joke-text");
    if (jokeText) {
      jokeText.textContent = data.value;
    }
  } catch (error) {
    console.error(error);
  }
}

async function nextJoke(): Promise<void> {
  const random: number = Math.ceil(Math.random() * 2);
  console.log(random);
  const jokeText: HTMLElement | null = document.getElementById("joke-text");
  if (random === 1) {
    await joke();
  } else {
    await jokeChuckNorris();
  }
}

/*function joke() {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response: Response) => response.json())
      .then((data: { joke: string }) => {
        const jokeText = document.getElementById("joke-text") as HTMLElement;
        if (jokeText) {
          jokeText.textContent = data.joke;
        }
      })
      .catch((error: Error) => console.error(error));
  }
  //Show  Chuck Norris's jokes to the user
  function jokeChuckNorris() {
    fetch('https://api.chucknorris.io/jokes/random')
     .then((response: Response) => response.json())
      .then((data: { joke: string }) => {
        const jokeText = document.getElementById("joke-text") as HTMLElement;
        if (jokeText) {
          jokeText.textContent = data.joke;
        }
      })
      .catch((error: Error) => console.error(error));
    }
  function nextJoke() {
  const random = Math.ceil(Math.random() * 2)
  console.log(random)
  const jokeText = document.getElementById("joke-text");
  if (random === 1) {
   joke()
  }
  else {
   jokeChuckNorris()
  }
}*/
  //Call current weather data
  function weather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=1726701&appid=21305bc5aa6226defd36003bc2eb46f8')
      .then((resp: Response) => resp.json())
      .then((data: any) => {
        console.log(data);
        const brandElement = document.querySelector('.navbar-brand');
        if (brandElement) {
          brandElement.textContent = data.name;
        }
        const tempElement = document.querySelector('.nav-link.deg');
        if (tempElement) {
          tempElement.textContent = `${Math.round(data.main.temp - 273)}°`;
        }
        const characterElement = document.querySelector('.nav-link.character');
        if (characterElement) {
          characterElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        }
      });
  }
  
  weather();

  //Scoring Jokes
  const reportJoke: { joke: string, score: number, date: string }[] = [];

  function score(number: number): void {
      const jokeElement = document.getElementById('joke-text');
      const joke = jokeElement?.innerHTML;
  
      reportJoke.forEach((item, index) => {
          if (item.joke === joke) {
              reportJoke.splice(index, 1);
          }
      });
  
      const scoreValue = number;
      const date = new Date().toISOString();
      
      if (joke !== undefined) {
          const scoredJoke = { joke: joke, score: scoreValue, date };
          reportJoke.push(scoredJoke);
      }
  
      console.log(reportJoke);
  }

  
  
  
  
  
  
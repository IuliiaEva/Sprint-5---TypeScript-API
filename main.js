"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Show jokes to the user
function joke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = yield response.json();
            const jokeText = document.getElementById("joke-text");
            if (jokeText) {
                jokeText.textContent = data.joke;
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
function jokeChuckNorris() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://api.chucknorris.io/jokes/random');
            const data = yield response.json();
            const jokeText = document.getElementById("joke-text");
            if (jokeText) {
                jokeText.textContent = data.value;
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
function nextJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const random = Math.ceil(Math.random() * 2);
        console.log(random);
        const jokeText = document.getElementById("joke-text");
        if (random === 1) {
            yield joke();
        }
        else {
            yield jokeChuckNorris();
        }
    });
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
        .then((resp) => resp.json())
        .then((data) => {
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
const reportJoke = [];
function score(number) {
    const jokeElement = document.getElementById('joke-text');
    const joke = jokeElement === null || jokeElement === void 0 ? void 0 : jokeElement.innerHTML;
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

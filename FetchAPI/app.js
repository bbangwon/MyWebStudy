// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("RESOLVED!", res);
//         return res.json();  //res.json()은 json을 Promise를 리턴한다.
//     })
//     .then(data => {
//         console.log("Json Done", data); //실제 데이터
//     })
//     .catch(err => {
//         console.log("ERROR!", err);
//     });

// const loadStarWarsPeople = async() => {
//     try 
//     {
//         const res = await fetch("https://swapi.dev/api/people/1");
//         const data = await res.json();
//         console.log("Async Done", data);

//         const res2 = await fetch("https://swapi.dev/api/people/2");
//         const data2 = await res2.json();
//         console.log("Async Done", data2);
//     } catch(e) {
//         console.log("ERROR!", e);
//     }

// }

// loadStarWarsPeople();


// Axios 사용
axios.get("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("Axios Done", res.data);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });

const getStarWarsPeople = async id => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log("Axios Async Done", res.data);
    }
    catch (e) {
        console.log("ERROR!", e);
    }
};

getStarWarsPeople(5);

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
   
//Headers
const getDaaJoke = async () => {
    try {
        const res = await axios.get("https://icanhazdadjoke.com/",
            {
                headers: {
                    Accept: "application/json"
                }
            });

        console.log("Joke", res.data.joke);
        return res.data.joke;
    }
    catch (e) {
        console.log("NO JOKES AVALIABLE!", e);
    }
}

const addNewJoke = async () => {
    const jokeText = await getDaaJoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener("click", addNewJoke);


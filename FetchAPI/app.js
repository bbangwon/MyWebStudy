fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("RESOLVED!", res);
        return res.json();  //res.json()은 json을 Promise를 리턴한다.
    })
    .then(data => {
        console.log("Json Done", data); //실제 데이터
    })
    .catch(err => {
        console.log("ERROR!", err);
    });

const loadStarWarsPeople = async() => {
    try 
    {
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log("Async Done", data);
    
        const res2 = await fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log("Async Done", data2);
    } catch(e) {
        console.log("ERROR!", e);
    }

}

loadStarWarsPeople();

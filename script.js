setTimeout(
    function(){
        console.log("Ferdig å laste");
    }, 
    10000
);

// hva skjer.

function delay(ms) {
    return new Promise (function (resolve) {
        setTimeout(resolve, ms);
    });
};

async function timeout () {
    console.log("Ventetid");
    await delay(5000);
    console.log("Ferdig å vente");
};

timeout();


console.log("----Next---")
//
//

const myCatInfo = ["Cats are ok", "Cats only need you when thay want smting."];

console.log(myCatInfo [0]);

for (let index = 0; index < myCatInfo.length; index++) {
    console.log(myCatInfo[index]);
};

console.log("----Next---")
async function getApiData () {
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response);

    console.log("----Next---")

    const data = await response.json();
    console.log(data);
    console.log(data.data);
    console.log(data.data[3]);
    console.log(data.data[3].fact);

    const catFact = data.data;



    for (let index = 0; index < catFact.length; index++) {
        console.log(catFact[index].fact);

        const p = document.createElement("p");
    p.textContent = catFact[index].fact;

    const main = document.querySelector("main");
    main.appendChild(p);
    };
}

getApiData();


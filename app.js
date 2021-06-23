document.getElementById("button").addEventListener("click", function(e){
    const button = document.getElementById("button");
    const title = document.getElementById("title");
    const back = document.getElementById("back");
    const candaan = document.getElementById("candaan");
    const numberJokes = document.getElementById("number_jokes");
    

    button.style.display = "none"
    title.style.display = "none"
    back.style.display = "block"
    candaan.style.display = "block"
    numberJokes.style.display = "none"


    const xml = new XMLHttpRequest;

    let number = document.getElementById("total_jokes").value;

    xml.open("GET", `http://api.icndb.com/jokes/random/${number}`, true)

    xml.onload = function(){
        if(this.status === 200) {
            const jokes = JSON.parse(this.responseText);

            let output = "";

            if(jokes.type === "success"){
                jokes.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                })
            }
            document.getElementById("candaan").innerHTML = output;
        }
    }

    xml.send();

    e.preventDefault();  

})


document.getElementById("back").addEventListener("click", function(){
    const button = document.getElementById("button");
    const title = document.getElementById("title");
    const back = document.getElementById("back");
    const candaan = document.getElementById("candaan");
    const numberJokes = document.getElementById("number_jokes");
    const totalJokes = document.getElementById("total_jokes");
    

    button.style.display = "block"
    title.style.display = "block"
    back.style.display = "none"
    candaan.style.display = "none"
    numberJokes.style.display = "block"
    totalJokes.value = ""
})
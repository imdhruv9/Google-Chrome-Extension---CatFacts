let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const jokeText = data.fact;
        const catf = document.getElementById('joke');
        catf.innerHTML = jokeText;

    })
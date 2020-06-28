 function FindLyrics(singer,music){

    return fetch(`https://api.lyrics.ovh/v1/${singer}/${music}`);
} 

const form = document.querySelector("#form").addEventListener("submit", e => {

    e.preventDefault();
    Submit();

});


async function Submit() {
    
    const singer = document.querySelector("#singer");
    const music = document.querySelector("#music");
    const letras = document.querySelector("#lyrics");
    const title = document.querySelector("#title");
    
    letras.innerHTML = "<i class='fa fa-spinner fa-pulse'></i>";

    const responselyrics = await FindLyrics(singer.value,music.value)
    const data = await responselyrics.json();
    letras.innerHTML = data.lyrics;
    
    let a = music.value.replace(music.value[0], music.value[0].toUpperCase());
    
    title.innerText = a;

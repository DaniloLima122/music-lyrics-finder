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


    //usando async await

    const responselyrics = await FindLyrics(singer.value,music.value)
    const data = await responselyrics.json();
    letras.innerHTML = data.lyrics;
    
    let a = music.value.replace(music.value[0], music.value[0].toUpperCase());
    
    title.innerText = a;    


    //Usando o then
    
    // FindLyrics(singer.value,music.value)
    
    // .then(Response => Response.json())
    
    // .then(data =>{
        
    //     if(data.lyrics){
        

    //         letras.innerHTML = data.lyrics;
        

    //     }
    //     else{

    //         letras.innerHTML = data.error;
    //     }
    // })

    // .catch(erro => {

    //     letras.innerHTML = `Letra não encontrada! ${erro}`;
    // })
    
}



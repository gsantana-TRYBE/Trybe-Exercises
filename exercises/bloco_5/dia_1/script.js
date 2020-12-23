document.getElementById("future").innerText="Não sei, como me vejo no futuro?";
document.getElementsByClassName("main-content")[0].style.backgroundColor="#4ca46d";
document.getElementsByClassName("center-content")[0].style.backgroundColor="white";
document.getElementsByTagName("h1")[0].innerText="Exercício 5.1 - JavaScript ";

for(let i=0;i<document.getElementsByTagName("p").length;i++){
    document.getElementsByTagName("p")[i].style.textTransform="uppercase";
    console.log(document.getElementsByTagName("p")[i].innerHTML);
}

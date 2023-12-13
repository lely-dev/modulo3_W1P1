// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione 
// "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

let linkTwitter = document.querySelector(".p-4 .list-unstyled > li:nth-of-type(2)");



function hideTwitter(){
    linkTwitter.style.display = "none";
}

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM 
// cliccando sul link "Continua a leggere".


let continueTitle = document.querySelector(".jumbotron a.font-weight-bold");
let continueFirstPost = document.querySelector(".row.mb-2 .col-md-6:first-child a");
let continueSecondPost = document.querySelector(".row.mb-2 .col-md-6:nth-child(2) a");




continueTitle.addEventListener("click", function(){
    continueTitle.parentElement.parentElement.parentElement.remove();
});

continueFirstPost.addEventListener("click", function(){
    continueFirstPost.parentElement.parentElement.parentElement.remove();
});

continueSecondPost.addEventListener("click", function(){
    continueSecondPost.parentElement.parentElement.parentElement.remove();
});


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che 
// il cursore passa sopra l'autore del post.


let firstAutor = document.querySelector(".blog-post:nth-of-type(1) p.blog-post-meta a");
let secondAutor = document.querySelector(".blog-post:nth-of-type(2) p.blog-post-meta a");
let thirdAutor = document.querySelector(".blog-post:nth-of-type(3) p.blog-post-meta a");

"mouseover"

firstAutor.addEventListener("mouseover", function(){
    alert(firstAutor.innerHTML);
});

secondAutor.addEventListener("mouseover", function(){
    alert(secondAutor.innerHTML);
});

thirdAutor.addEventListener("mouseover", function(){
    alert(thirdAutor.innerHTML);
});
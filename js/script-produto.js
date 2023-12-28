//script para favoritar o coração
let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener('click', function(event){
    //dentro da minha target tudo que tiver o nome de
    if(event.target.nodeName === "I"){
        event.target.classList.toggle("red");
    }
});

//script para inclementar e decrementar o número de produtos
let decrementar = document.querySelector(".bi-dash-square");
let inclementar = document.querySelector(".bi-plus-square");
let textoProduto = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(textoProduto.textContent);

inclementar.addEventListener("click", function(){
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click", function(){
    if(quantidadeProduto<=1){
        alert("A quantidade de produto não pode ser menos que 1.")
    }else{
        quantidadeProduto--;
        textoProduto,innerHTML = quantidadeProduto;
    }
})

console.log(decrementar);
console.log(inclementar);
console.log(quantidadeProduto);
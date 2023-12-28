let btnAdd = document.querySelector('#addBotao');

//Criar um evento de click para o botão, que irá executar a function anonima
btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('#meuInput').value;
    if(inputValor === ""){
        alert("Você não preencheu os campos!")
    }else{
        //alert("Login realizado com sucesso")
        document.querySelector("#mensagem-ok").insertAdjacentHTML(
            "afterbegin",
            `<div class="card-teste">
            <span>LOGIN EFETUADO COM SUCESSO!</span>
            </div>
            `
        );
        let mensagem = document.querySelector('.card-teste');
        setTimeout(() =>{
            mensagem.style.display = "none";

        }, 3000);
    }

    document.querySelector('#meuInput').value = "";
    //zerou o imput
    document.querySelector('#meuInput2').value = "";
    //zerou o imput
});
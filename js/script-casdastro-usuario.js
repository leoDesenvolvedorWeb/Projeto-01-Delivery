let btnAdd = document.querySelector('#addBotao');

//criar evento de click para o botão
    btnAdd.addEventListener("click", function(){
        let inputValor = document.querySelector('#meuinput').value;
        if(inputValor === ""){
            alert("VOCÊ NÃO PREENCHEU OS CAMPOS!")
        }else{
            //alert("CADASTRO REALIZADO COM SUCESSO")
            document.querySelector("#mensagem-ok").insertAdjacentHTML(
                "afterbegin",
                `<div class="card-teste">
                <span>CADASTRO EFETUADO COM SUCESSO!</span>
                </div>
                `
            )
        }

        document.querySelector('#meuinput').value = "";
    });
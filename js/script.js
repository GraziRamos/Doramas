document.getElementById("botãoenviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
    alert("Pronto! Você receberá a lista por e-mail!!")
}else{
    alert("Por favor, preencha os campos de nome e e-mail para você receber a lista!")
}
}
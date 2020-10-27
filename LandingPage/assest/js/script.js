let nome = window.document.querySelector('#nome')
let email= document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let nomeOk= false
let emailOk= false
let assuntoOk= false
//contato

email.style.width="30%"
assunto.style.width="30%"
nome.style.width='30%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
       txtNome.innerHTML='Nome inválido'
       txtNome.style.color='red'
    }else{ 
        txtNome.innerHTML='Nome válido'
        txtNome.style.color='green'
        nomeOk= true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".")== -1 ){
        txtEmail.innerHTML='email inválido'
        txtEmail.style.color='red'
    }else{
        txtEmail.innerHTML='email válido'
        txtEmail.style.color='green'
        emailOk= true
    }    
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length > 100){
        txtAssunto.innerHTML='Digite no máximo 100 caracteres'
        txtAssunto.style.color= 'red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}
function enviar(){
    if (nomeOk==true && assuntoOk==true && emailOk==true){
        alert('Formulário enviado com sucesso!!')
    }else{
        alert('Formulário inválido')
    }
}

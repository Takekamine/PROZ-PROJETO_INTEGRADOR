const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

function setError(index){
    campos[index].style.border = '4px solid #e63636'
    spans[index].style.display='block'
}

function removeError(index){
    campos[index].style.border = '4px solid #4ba375'
    spans[index].style.display='none'
}
function nameValidate(){
    if(campos[0].value.length<3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function senhaValidate(){
    if(campos[2].value.length<6)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        senhaValidate2();
    }
}

function senhaValidate2(){
    if(campos[2].value == campos[3].value && campos[3].value.length>=6)
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}
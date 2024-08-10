const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateinputs();
})

function validateinputs(){
    const usernameval = username.Value.trim()
    const emailval = email.value.trim();
    const password = password.value.trim();
    const cpassword = cpassword.value.trim();

    if(usernameval===''){
        SetError(username,'username is required')
    }
    else{
    setsuccess(username)}
    if(emailval===''){
        seterror(email,'email is required')
    }
    else if(!validatemail(emailval)){
        seterror(email,'please enter valid email')
    }
    else{
        setsuccess(email)
    }
    if(passwordval === ''){
        seterror(password,'password is required')
    }
    else if(passwordval.length<8){
        seterror(password,'password must be atleast 8 charecters long')

    }
    else{
        setsuccess(password)
    }
    if(cpasswordval === ''){
        seterror(cpassword,'confirm password is required')

    }
    else if(cpasswordval!==passwordval){
        seterror(cpassword,'password does not match')
    }
}

function seterror(element,message){
    const inputgroup = element.parentelement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innertext = 'message';
    inputgroup.classlist.add('error')
    inputgroup.classlist.remove('success')
}

function setsuccess(element){
    const inputgroup = element.parentelement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innertext = '';
    inputgroup.classlist.add('success')
    inputgroup.classlist.remove('error')
}

const validatemail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 );
};
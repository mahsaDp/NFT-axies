

'use strict'

let userpattern= /^[a-zA-Z][\w_.@0-9]{7,29}$/
let passpattern= 0
let validation= 'false'
const form= document.querySelector('.login')
let emailtext=document.querySelector('#email-address')
let passtext=document.querySelector('#password')

form.addEventListener('submit', e=>{
    console.log(validation)
    console.log(passpattern)
    if (!(validation==='true' && passpattern===5)) {
        e.preventDefault()

        if (validation==='false'){
            emailtext.classList.add('invalid')
            emailtext.classList.remove('valid')
        }
        if (passpattern !== 5){
            passtext.classList.add('invalid')
            passtext.classList.remove('valid')
        }
    }

})



emailtext.addEventListener('focus', function (){
    emailtext.placeholder=""
    emailtext.addEventListener('keyup', e=>{
        if (e.target.value && userpattern.test(e.target.value)){
            emailtext.classList.add('is-valid')
            emailtext.classList.remove('is-invalid')
            validation='true'
        }
        else{
            emailtext.classList.add('invalid')
            emailtext.classList.remove('valid')
            validation='false'
        }
    })

})
emailtext.addEventListener('focusout', function () {
    emailtext.placeholder = "Email Address"
})


passtext.addEventListener('focus', function (){
    passtext.placeholder=""
    passtext.addEventListener('keyup', e=>{
        passtext.textContent= "*".repeat(e.target.value.length)
        if (e.target.value){
            passpattern=0
            passpattern+= /[a-z]/.test(e.target.value) ? 1 : 0
            passpattern+= /[A-Z]/.test(e.target.value) ? 1 : 0
            passpattern+= /[0-9]/.test(e.target.value) ? 1 : 0
            passpattern+= /[\W]/.test(e.target.value) ? 1 : 0
            passpattern+= e.target.value.length>=5 ? 1 : 0
            if (passpattern===5){
                passtext.classList.add('valid')
                passtext.classList.remove('invalid')
            }
        }
        else{
            passtext.classList.add('invalid')
            passtext.classList.remove('valid')
            passpattern=0
        }
    })

})
passtext.addEventListener('focusout', function () {
    passtext.placeholder = "Password"
})

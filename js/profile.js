
'use strict'

const covers= document.querySelectorAll('.cover-container>div>img')
const headBackground= document.querySelector('.back-gnd')
const profileUpload= document.querySelector('.profile-image__upload')
const profileImage= document.querySelector('.profile-image>img')






covers.forEach((cover) =>{
    cover.addEventListener('click', function (){
        covers.forEach(c => {
            c.classList.remove('cover-active')
        })
        cover.classList.add('cover-active')
        headBackground.style.background=`url("${cover.src}") no-repeat`
        headBackground.style.backgroundSize= "100% 100%"
    })
})

// profileUpload.addEventListener('click', ()=>{
//     // profileUpload.nextElementSibling.checked="checked";
//     profileImage.src=`axies-images/cover/${profileUpload.nextElementSibling.files.name}`
// })
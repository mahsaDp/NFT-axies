
'use strict'


const pdtsearchicon = document.querySelector('body > header > div.right-head > label.search-box > i')
const pdtsearchbox= document.querySelector('.search-box')
let own= document.querySelectorAll('.owners>div> p> span')
const title=document.querySelectorAll('.table-head>li')
const  bidHistory=document.querySelector('.user-history')
const  info=document.querySelector('.info-table')
const  provenance=document.querySelector('.prove-table')



const countdown= ()=>{
    let timerText= document.querySelector('.timer-text-cd>span')
    const countDate=new Date("jan 1, 2023 00:00:00").getTime()
    const now = new Date().getTime()

    const remain= countDate - now
    const second= 1000 //remain.getSeconds()
    const minute= second * 60 //remain.getMinutes()
    const hour= minute * 60 //remain.getHours()
    const day = hour * 24  //remain.getDay()

    timerText.textContent= `${Math.floor(remain / day)} :
     ${Math.floor((remain % day) / hour)} : 
     ${Math.floor((remain % hour) / minute)} :
      ${Math.floor((remain % minute) / second)}`

}

setInterval(countdown, 1000)

pdtsearchbox.addEventListener('mouseover', function (){
    pdtsearchicon.addEventListener('click', function (){
        pdtsearchicon.previousElementSibling.style.width = '170px'
        pdtsearchicon.previousElementSibling.style.padding = '10px 7px'
    })
})


pdtsearchbox.addEventListener('mouseleave', function (){
    document.querySelector('body>div.page-title').addEventListener('click', function (){
        pdtsearchicon.previousElementSibling.style.width = '0'
        pdtsearchicon.previousElementSibling.style.padding = '0'
    })
})


own.forEach(owner =>{
    owner.addEventListener('mouseover', function (){
        let ownName=owner.textContent
        owner.setAttribute('title', `Go to ${ownName} page`)
    })
})

title.forEach((t, index)=>{
    t.addEventListener('click', function (){
        title.forEach((tit,index2)=>{
            if(index!==index2){
                tit.classList.remove('title-active')
            }
        })
        t.classList.add('title-active')
        if (t.textContent==='Bid history'){
            bidHistory.classList.remove('hide-table')
            info.classList.add('hide-table')
            provenance.classList.add('hide-table')
        }
        if (t.textContent==='Info'){
            info.classList.remove('hide-table')
            bidHistory.classList.add('hide-table')
            provenance.classList.add('hide-table')
        }
        if (t.textContent==='Provenance'){
            provenance.classList.remove('hide-table')
            bidHistory.classList.add('hide-table')
            info.classList.add('hide-table')
        }
    })
})



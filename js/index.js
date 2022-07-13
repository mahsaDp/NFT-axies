
'use strict'

//header
const header=document.querySelector('header')
const day=document.querySelector('header> div.right-head > div.icons> div.sun')
const  iconbox=document.querySelector('.icons')
let dayimg= document.querySelector('header> div.right-head > div.icons> div.sun > img')
const searchicon = document.querySelector('body > header > div > .search-box > i')
const searchbox= document.querySelector('.search-box')

//section3
const section3= document.querySelector('.section3')
const footbtn = document.querySelectorAll('.section3-foot-btn');
const btnleft=document.querySelector('.foot-btn1')
let section3post =document.querySelectorAll('.section3-post')
let imgshop = document.querySelectorAll('.img-shop');
const btnright=document.querySelector('.foot-btn6')
const  section3all=document.querySelector('.section3-all-posts')

//section6
const loadMore=document.querySelector('.section6-footer>button')
const todayPosts=document.querySelector('.section6-all-posts')


//footer
const  goup=document.querySelector('.go-up-btn')
let mousedigit=0





let myTime = ()=>{
    let clock = document.querySelectorAll('.timer-text>span')
    clock.forEach(clk=>{
        let myDate = new Date()
        clk.textContent = `${myDate.getHours()} : ${myDate.getMinutes()} : ${myDate.getSeconds()} : ${myDate.getMilliseconds()}`
    })
}

searchbox.addEventListener('mouseover', function (){
    searchicon.addEventListener('click', function (){
        searchicon.previousElementSibling.style.width = '170px'
        searchicon.previousElementSibling.style.padding = '10px 7px'
    })
})


searchbox.addEventListener('mouseleave', function (){
    // document.querySelector('body>div.links-box').addEventListener('click', function (){
    //     searchicon.previousElementSibling.style.width = '0'
    //     searchicon.previousElementSibling.style.padding = '0'
    // })
    document.querySelector('body>header>.logo').addEventListener('click', function (){
        searchicon.previousElementSibling.style.width = '0'
        searchicon.previousElementSibling.style.padding = '0'
    })
    document.querySelector('body>main').addEventListener('click', function (){
        searchicon.previousElementSibling.style.width = '0'
        searchicon.previousElementSibling.style.padding = '0'
    })
    document.querySelector('body>footer').addEventListener('click', function (){
        searchicon.previousElementSibling.style.width = '0'
        searchicon.previousElementSibling.style.padding = '0'
    })
})



setInterval(myTime, 1000)


//section 3

if (section3){

    footbtn.forEach(btn=>{
        btn.addEventListener('mouseover', function (){
            footbtn.forEach(btn1=>{
                btn1.parentElement.classList.remove('section3-active')
            })
            btn.parentElement.classList.add('section3-active')
            btn.parentElement.classList.remove('section3-hidden')
        })
    })

    btnright.addEventListener('click', function (){
        section3all.scrollLeft += 305
    })

    btnleft.addEventListener('click', function (){
        section3all.scrollLeft -= 305
    })

    footbtn.forEach(btn =>{
        btn.addEventListener('click', function (){
            section3all.scrollLeft += 305
        })
    })


    section3post.forEach((img, index) =>{
        img.addEventListener('mouseover',function (){
            imgshop[index].classList.remove('img-shop-hide')
        })
        img.addEventListener('mouseleave', function (){
            imgshop[index].classList.add('img-shop-hide')
        })
    })


}


//load more button clicked- section6

if (loadMore){
    loadMore.addEventListener('click', function (){
        for (let i=0; i<4; i++){
            let d= todayPosts.innerHTML
            todayPosts.innerHTML = `${d} <div class="section6-post">
                <div class="image">
                    <img src="axies-images/06_Today's%20Picks/card-item-7.jpg" alt="post1-img">
                    <div class="section6-like-btn flexible">
                        <i class="fa-regular fa-heart"></i> &nbsp; 100
                    </div>
                </div>
                <p>“Hamlet Contemplates Yorick’s...</p>
                <div class="creator flexible">
                    <div class="flexible">
                        <img src="axies-images/05_Top%20Seller/avt-${i+1}.jpg" alt="avatar">
                        <p>Creator<br><span>SalvadorDali</span></p>
                    </div>
                    <button>BSC</button>
                </div>
                <div class="current-bid flexible">
                    <p>Current Bid<br>
                        <span>4.89 ETH  </span>= $12.246</p>
                    <aside><i class="fa-solid fa-arrows-rotate"></i>&nbsp; View History</aside>
                </div>
            </div>`
        }
    })
}


day.addEventListener('click', function (){
    document.body.classList.toggle('white-mood')
    if (document.body.className==='white-mood'){
        dayimg.src="axies-images/01_header/moon-2.png"
        dayimg.addEventListener('mouseover', function (){
            day.style.backgroundColor="whitesmoke"
            dayimg.style.backgroundColor='transparent'
        })
        dayimg.addEventListener('mouseleave', function (){
            day.style.backgroundColor="#343444"
            dayimg.style.backgroundColor='transparent'
        })
    }
    else{
        dayimg.src="axies-images/01_header/sun.png"
        dayimg.addEventListener('mouseover', function (){
            day.style.backgroundColor="lightyellow"
            dayimg.style.backgroundColor='#e5e545'
        })
        dayimg.addEventListener('mouseleave', function (){
            day.style.backgroundColor="#343444"
            dayimg.style.backgroundColor='transparent'
        })
    }
})

window.addEventListener('scroll', function () {
    if (window.scrollY>80){
        header.style.backgroundColor="var(--bg-color)"
        if (window.scrollY>300){
            goup.style.display="block"
        }else {
            goup.style.display="none"
        }
    }
    else {
        header.style.backgroundColor="transparent"
    }
})

goup.addEventListener('click', function (){
    window.scrollTo({top:0, behavior:"smooth"})
})
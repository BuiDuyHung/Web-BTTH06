function check(a){
    if(a<10){
        a='0'+a
    }
    return a
}
const t = () =>{
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    h=check(h)
    m=check(m)
    s=check(s)
    let time = document.querySelector('.time')
    time.innerHTML=`${h} : ${m} : ${s}`
    let text = document.querySelector('p')
    if(h>=0 && h<12){
        text.innerHTML = 'Chào buổi sáng'
        text.classList.add('p-animation') 
    }
    else if(h>=12 && h<17){
        text.innerHTML = 'Chào buổi chiều'
        text.classList.add('p-animation') 
    }
    else{
        text.innerHTML = 'Chào buổi tối'
        text.classList.add('p-animation') 
    }
    const color = ['red', 'black']
    text.style.color = color[Math.floor(Math.random() * 2)]
}
setInterval(t,500)





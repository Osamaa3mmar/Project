let cc_300=document.querySelector(".cc-300");







let counter=(num,letter,element)=>{
let step=parseInt(Math.ceil(num/30));
let current=0;
setInterval(()=>{
    if(current>num){
        element.innerHTML=`${num} ${letter}<span class="fw-bolder text-warning">+</span>`;
    }
    else{
        element.innerHTML=`${current} ${letter} <span class="fw-bolder text-warning">+</span>`;
    }

    current+=step;

},100)
};






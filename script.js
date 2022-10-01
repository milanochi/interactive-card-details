const acctNum = document.getElementById('acct-num');
const acctName = document.getElementById('acct-name');
const cvv = document.getElementById('cvv-num');
const expire = document.querySelectorAll('.content__F3');
const form = document.querySelector('.content');
const month = document.getElementById('exp');
const year = document.getElementById('exp2');
const show = document.querySelector('.content__err2');
const show1 = document.querySelector('.content__err1');
const cardName = document.querySelector('.sidebar__cardtext-left');
const content = document.querySelectorAll('input');
const code =   document.querySelector('.sidebar__cardback-inner');
const mth = document.querySelector('.right1');
const yr = document.querySelector('.sidebar__cardtext-right');
const cardNum = document.querySelector('.sidebar__cardtext');
const complete = document.querySelector('.content__confirm');
const input = document.querySelectorAll('input');



acctName.addEventListener('input', (e) =>{
    let res = e.target.value
    cardName.textContent = res;
})
acctNum.addEventListener('input', (e) =>{
 
    if(e.target.value.length > 0){
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        cardNum.innerHTML = e.target.value
        // if(e.target.value.length % 5 === 0){
        //     e.target.value += " "
        // }
    } 
})
cvv.addEventListener('input', (e) =>{
    let res = e.target.value;
    code.textContent = res;

})
year.addEventListener('input', (e) =>{
    let val = e.target.value;
    mth.innerHTML = "/" + val;

})
month.addEventListener('input', (e) =>{
    let res = e.target.value;
    yr.innerHTML = res;

})


form.addEventListener('submit', (e) =>{
    e.preventDefault();


if(cvv.value === '' || cvv.value === null){
            show.style.opacity = '1';
       cvv.classList.add('coder-red')
}
else{
    show.style.opacity = '0';
    form.style.display = 'none';
    complete.style.display ='block';
}


expire.forEach((elem) => {
    if(elem.value == '' || elem.value  == null){
        show1.style.opacity = '1'
    }
    else{
        show1.style.opacity = '0';
        form.style.display = 'none';
    complete.style.display ='block';
    }
    
})
cvv.value = '';
month.value = '';
year.value='';
acctName.value='';
acctNum.value='';

// err.forEach((val) =>{
//     if(val.value > 0){
    
//     }
// })
    // else{
        
    // }
})
  


 




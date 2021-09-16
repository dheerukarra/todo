var inp = document.querySelector('.i1');
var btn = document.querySelector('.b1');
var ul = document.querySelector('.ul');

inp.addEventListener('keyup', (e)=> {
  if (e.keyCode === 13) {
      add();
  }
});


btn.addEventListener('click',()=>add())

function add(){
  let inpt =  inp.value;
  if(inpt != ""){
    let h2 = document.createElement('h2');
    h2.classList.add('itxt');
    h2.innerText = inpt;

    let dbtn = document.createElement('button');
    dbtn.classList.add('donebtn');
    dbtn.innerHTML = '&#x2714'

    let rbtn = document.createElement('button');
    rbtn.classList.add('removebtn');
    rbtn.innerHTML = '&#x2716';

    let li = document.createElement('li');

    li.appendChild(h2);
    li.appendChild(dbtn);
    li.appendChild(rbtn);
  
    ul.appendChild(li);
    
    dbtn.addEventListener('click',(e)=>{
      let par = e.target.parentElement;
      par.childNodes[0].style.textDecoration = 'line-through';
    }) 

    rbtn.addEventListener('click',(e)=>{
      let par = e.target.parentElement;
      par.style.display = 'none';
    })

    inp.value = "";
    }else{
      alert('Enter some text');
    }
}
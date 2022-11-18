let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let loadMoreBtn = document.querySelector('#load-more-btn');

loadMoreBtn.onclick = () =>{
    let url = '../html/resourses.html';
    loadMoreBtn = window.open(url,"_blank");
}

// let cross = document.querySelector('#cross-btn');
// let userform = document.querySelector('.user-form');
// let signin = document.querySelector('.sign .in');
// let signup = document.querySelector('.sign .up');
// let signinForm = document.querySelector('.signIn');
// let signupForm = document.querySelector('.signUp');

let dsa_cross = document.querySelector('#dsa');
let body = document.querySelector('.body');
let dsa_v = document.querySelector('.dsa-v');
let dsa = document.querySelector('.dsa');


// cross.addEventListener('click',()=>{
//     userform.style.display = 'none';
// })

// signin.addEventListener('click',()=>{
//     userform.style.display = 'flex';
//     signinForm.style.display = 'block';
//     signupForm.style.display = 'none';
//     userform.classList.remove("cross");
// })

// signup.addEventListener('click',()=>{
//     userform.style.display = 'flex';
//     signupForm.style.display = 'block';
//     signinForm.style.display = 'none';
//     userform.classList.remove("cross");
// })

dsa_v.addEventListener('click', () => {
    dsa.style.display = 'block';
})

dsa_cross.addEventListener('click',()=>{
    dsa.style.display = 'none';
})

let discrete_cross = document.querySelector('#discrete');
let discrete_v = document.querySelector('.discrete-v');
let discrete = document.querySelector('.discrete');

discrete_v.addEventListener('click', () => {
    discrete.style.display = 'block';
})

discrete_cross.addEventListener('click',()=>{
    discrete.style.display = 'none';
})

let microprocessor_cross = document.querySelector('#microprocessor');
let microprocessor_v = document.querySelector('.microprocessor-v');
let microprocessor = document.querySelector('.microprocessor');

microprocessor_v.addEventListener('click', () => {
    microprocessor.style.display = 'block';
})

microprocessor_cross.addEventListener('click',()=>{
    microprocessor.style.display = 'none';
})

let dbms_cross = document.querySelector('#dbms');
let dbms_v = document.querySelector('.dbms-v');
let dbms = document.querySelector('.dbms');

dbms_v.addEventListener('click', () => {
    dbms.style.display = 'block';
})

dbms_cross.addEventListener('click',()=>{
    dbms.style.display = 'none';
})


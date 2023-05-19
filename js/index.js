function show_mobile_nav(){
    document.querySelector('#mobile-navbar').style.display ="block";
}

function hide_mobile_nav(){
    document.querySelector('#mobile-navbar').style.display="";
}



//get all sections and items of the navbar
var elements = [];
var ls = document.querySelectorAll('nav ul li a');

document.querySelectorAll('section').forEach(el => {
    if (el.id == 'about-us2')
        return;

    elements.push(el);
})

//change the color of nav-link when the page is scrolled
var prev_link = document.querySelector('nav ul li a#active');

window.addEventListener('scroll', () => {
    //change header color and show go-up button
    if (window.scrollY > 450){
        document.querySelector('header').className = "active";
        document.querySelector('.btn.go-up').classList.add("active");
    }else{
        document.querySelector('header').className = "";
        document.querySelector('.btn.go-up').classList.remove('active');
    }



    for (var i = 0; i < ls.length;i++){
        var vh = window.innerHeight - 80;
        if (elements[i].getBoundingClientRect().bottom <= vh & elements[i].getBoundingClientRect().bottom >= 0){
            document.querySelector('nav ul li a#active').id = "";
            ls[i].id = "active";
        }
    }
})


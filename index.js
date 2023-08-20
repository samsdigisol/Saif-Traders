
function home(){
    document.getElementById("main").innerHTML ='<object type="text/html" data="home.html">';
    document.getElementById('home').style.color='greenyellow';
    document.getElementById('product').style.color='goldenrod';
    document.getElementById('about').style.color='goldenrod';
    // document.getElementById('privacy').style.color='goldenrod';
    if(window.screen.width<768){
        document.getElementById("toggle").style.display = "block";
        document.getElementById("nav_button").style.display = "none";

    }
}


function about(){
    document.getElementById("main").innerHTML ='<object type="text/html" data="about.html">';
    document.getElementById('home').style.color='goldenrod';
    document.getElementById('product').style.color='goldenrod';
    document.getElementById('about').style.color='greenyellow';
    // document.getElementById('privacy').style.color='goldenrod';
    if(window.screen.width<768){
        document.getElementById("toggle").style.display = "block";
        document.getElementById("nav_button").style.display = "none";

    }
}

function product(){
    document.getElementById("main").innerHTML ='<object type="text/html" data="product.html">';
    document.getElementById('home').style.color='goldenrod';
    document.getElementById('product').style.color='greenyellow';
    document.getElementById('about').style.color='goldenrod';
    // document.getElementById('privacy').style.color='goldenrod';
    if(window.screen.width<768){
        document.getElementById("toggle").style.display = "block";
        document.getElementById("nav_button").style.display = "none";

    }
}

function privacy(){
    document.getElementById("main").innerHTML ='<object type="text/html" data="privacy&policy.html">';
    document.getElementById('home').style.color='goldenrod';
    document.getElementById('product').style.color='goldenrod';
    document.getElementById('about').style.color='goldenrod';
    // document.getElementById('privacy').style.color='greenyellow';
    if(window.screen.width<768){
        document.getElementById("toggle").style.display = "block";
        document.getElementById("nav_button").style.display = "none";

    }
}   
function toggle(){
    document.getElementById('toggle').style.display='none';
    document.getElementById('nav_button').style.display='grid';
}  


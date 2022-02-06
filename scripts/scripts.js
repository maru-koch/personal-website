function socialMedia(id, image){
    const whatsappImg = document.getElementById(`${id}`);
    whatsappImg.src = "../icons/"+`${image}`;
}




function changeHeaderImage(){
    let img = document.getElementById('header-img')
    let width = window.screen.width;
    img.style.src = "../images/profile_600*600.png"

}

function displayMenu(){
    const menu = document.getElementById("menu-container")
    menu.style.display = block;
    menu.style.backgroundColor = '#454545'
}

function hideMenu(){
    const menu = document.getElementsByClassName('menu-container')
    menu.style.display = "none";
    
}

function menu() {
    var x = document.getElementById("menu-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }
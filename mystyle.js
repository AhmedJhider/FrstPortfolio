var images=[];

images[1] = "art/girlknifemouth.png";
images[2] = "art/anggycigar.png";
images[3] = "art/gunmen.png";
images[4] = "art/witcher.png";
images[5] = "art/imp.png";
images[6] = "art/axebigman1.png";
images[7] = "art/mountain.png";
images[8] = "art/cava.png";
images[9] = "art/fistfighter.png";


let selection = document.querySelector(".selection");
let selection_background = document.querySelector("#selection_background");
let selection_image = document.querySelector("#selection_image img");
let container_item = document.querySelector(".selection_image img");

var x; 

function closer(){
    selection.style.display = "none";

}


function select(imag){
    selection.style.display = "block";
    selection_image.src = images[imag];

    x= imag;
}


function nexter(){
    if(x == 9){
    selection_image.src = images[9];
    }
    else if(x < 9) {
    x=x+1;
    selection_image.src = images[x];
    
    }
}
function backer(){ 
    if(x == 1){
        selection_image.src = images[1];
    }else{
        x=x-1;
        selection_image.src = images[x];
    }
}


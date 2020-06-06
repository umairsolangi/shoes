menucounter=0
function menu(){
    let dropdown=document.querySelector('.drop-down')
    if (menucounter==0){
    dropdown.style="transform: translateX(0px);"
    menucounter=1
    }
    else if(menucounter==1){
    dropdown.style="transform: translateX(-200px);"
    menucounter=0
    }
    
}
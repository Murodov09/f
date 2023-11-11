const login = document.querySelector('.screen');



let displayNone = 0;


function hideShow(){
    if(displayNone == 1){
        login.style.display = 'block';
        displayNone = 0;
    }else{
        login.style.display = 'none'
        displayNone = 1;
    }
}
let daBydetSvet = false;
let lampochka = document.getElementsByClassName("lamp");
let knopka = document.getElementsByClassName('switch');
function daySvet() {
    console.log(daBydetSvet);
    if (daBydetSvet) {
        daBydetSvet = false;
        lampochka[0].style.backgroundColor = 'white';
        knopka[0].style.backgroundColor = 'white';
        knopka[0].firstChild.nodeValue  = "Вкл";
       
    }
    else {
        daBydetSvet = true;
        lampochka[0].style.backgroundColor = 'orange';
        knopka[0].style.backgroundColor = 'red';
        knopka[0].firstChild.nodeValue  = "Выкл";
        console.log( 'false ->' + knopka[0].style.innerHTML );
    }
}
    


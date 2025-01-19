let pagecont=document.getElementById('pages2')
pagecont.style.maxHeight="0px";
function toogle(){
    if(pagecont.style.maxHeight=="0px")
    {
        pagecont.style.maxHeight="300px";
    }
    else{
        pagecont.style.maxHeight="0px";
        
    } 
}

function reg(){
    pagecont.style.maxHeight="0px";
}
function abt(){
    pagecont.style.maxHeight="0px";
}
function cnct(){
    pagecont.style.maxHeight="0px";
}
function menus(){
    pagecont.style.maxHeight="0px";
}
let mycolrlist =document.getElementById('myfoods');
let mycolrlist1 =document.getElementById('myfoods1');
let mycolrlist2 =document.getElementById('myfoods2');
let mycolrlist3 =document.getElementById('myfoods3');
let mycolrlist4 =document.getElementById('myfoods4');
let mycolrlist5 =document.getElementById('myfoods5');
let mycolrlist6 =document.getElementById('myfoods6');
let mycolrlist7 =document.getElementById('myfoods7');
let mycolrlist8 =document.getElementById('myfoods8');


let myiconlist =document.getElementById('chev');
let myiconlist1 =document.getElementById('chev1');
let myiconlist2 =document.getElementById('chev2');
let myiconlist3 =document.getElementById('chev3');
let myiconlist4 =document.getElementById('chev4');
let myiconlist5 =document.getElementById('chev5');
let myiconlist6 =document.getElementById('chev6');
let myiconlist7 =document.getElementById('chev7');
let myiconlist8 =document.getElementById('chev8');
function changecol(){
    myiconlist.style.color="White";
    mycolrlist.style.color="white";
}
function nocolor(){
    myiconlist.style.color="black"; 
    mycolrlist.style.color="black";
}
function changecol1(){
    myiconlist1.style.color="White";
    mycolrlist1.style.color="white";
}
function nocolor1(){
    myiconlist1.style.color="black";
    mycolrlist1.style.color="black";
}
function changecol2(){
    myiconlist2.style.color="White";
    mycolrlist2.style.color="white";
}
function nocolor2(){
    myiconlist2.style.color="black";
    mycolrlist2.style.color="black";
}
function changecol3(){
    myiconlist3.style.color="White";
    mycolrlist3.style.color="white";
}
function nocolor3(){
    myiconlist3.style.color="black";
    mycolrlist3.style.color="black";
}
function changecol4(){
    myiconlist4.style.color="White";
    mycolrlist4.style.color="white";
}
function nocolor4(){
    myiconlist4.style.color="black";
    mycolrlist4.style.color="black";
}
function changecol5(){
    myiconlist5.style.color="White";
    mycolrlist5.style.color="white";
}
function nocolor5(){
    myiconlist5.style.color="black";
    mycolrlist5.style.color="black";
}
function changecol6(){
    myiconlist6.style.color="White";
    mycolrlist6.style.color="white";
}
function nocolor6(){
    myiconlist6.style.color="black";
    mycolrlist6.style.color="black";
}
function changecol7(){
    myiconlist7.style.color="White";
    mycolrlist7.style.color="white";
}
function nocolor7(){
    myiconlist7.style.color="black";
    mycolrlist7.style.color="black";
}
function changecol8(){
    myiconlist8.style.color="White";
    mycolrlist8.style.color="white";
}
function nocolor8(){
    myiconlist8.style.color="black";
    mycolrlist8.style.color="black";
}

var index = 0;
next(index)
function next(i){
    index+=i;
    var imgs = document.getElementsByClassName('menuimgs');
    for(i=0;i<imgs.length;i++){
        imgs[i].style.display="none";
    }
    if(index<0){
        index=imgs.length-1;
        
    }
    if(index>imgs.length-1){
        index=0;
    }
    imgs[index].style.display="block"
    
}



    
    



$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : fals
    });
});

var menustatus=false;
var availinput=true;
var winheight=parseInt;
var actualscroll=parseInt;
var winwidth=parseInt;
var bgwidth=parseInt;
var bgx=parseInt;
var bgy=parseInt;
var bgheight=parseInt;
var winwidth=0;
var bgwidth=0;
var bgx=0;
var bgy=0;
var bgheight=0;
var scrollmaincontainer;
var containerneedheight;
var resizing=false;
winheight=0;
actualscroll=0;

$(document).ready(function(){
    $('body').ScrollTo(500);
});

function showclosemenu(){
  if (availinput==true) {
    if (menustatus==false) {
      showmenu();
      menustatus=true;
    }
    else{
      closemenu();
      menustatus=false;
    }
  }

}

function showmenu(){
  availinput=false;
  document.getElementById('ptmenu').style.display='block';
  document.getElementById('btn1').style.display='block';
  document.getElementById('btn2').style.display='block';
  document.getElementById('btn3').style.display='block';
  document.getElementById('btn4').style.display='block';
  document.getElementById('btn5').style.display='block';
  window.setTimeout(function(){document.getElementById('ptmenu').style.backgroundSize='80rem';document.getElementById('ptmenu').style.backgroundPosition='center';},41);
  window.setTimeout(function(){document.getElementById('btn1').style.opacity='1'},900);
  window.setTimeout(function(){document.getElementById('btn2').style.opacity='1'},1000);
  window.setTimeout(function(){document.getElementById('btn3').style.opacity='1'},1100);
  window.setTimeout(function(){document.getElementById('btn4').style.opacity='1'},1200);
  window.setTimeout(function(){document.getElementById('btn5').style.opacity='1'},1300);
  window.setTimeout(function(){document.getElementById('ptmenu').style.transition='all ease-in-out 400ms';},1300);
  window.setTimeout(function(){document.getElementById('ptmenu').style.boxShadow='0px 4px 4px rgba(0,0,0,0.65)'},1400);
  window.setTimeout(function(){availinput=true;},1700);
}
function closemenu(){
  availinput=false;
  document.getElementById('ptmenu').style.boxShadow='0px 0px 0px rgba(0,0,0,0)';
  window.setTimeout(function(){document.getElementById('ptmenu').style.transition='all ease-in-out 1s';},100);
  window.setTimeout(function(){document.getElementById('btn5').style.opacity='0'},100);
  window.setTimeout(function(){document.getElementById('btn4').style.opacity='0'},200);
  window.setTimeout(function(){document.getElementById('btn3').style.opacity='0'},300);
  window.setTimeout(function(){document.getElementById('btn2').style.opacity='0'},400);
  window.setTimeout(function(){document.getElementById('btn1').style.opacity='0'},500);
  window.setTimeout(function(){document.getElementById('ptmenu').style.backgroundPosition='top right';document.getElementById('ptmenu').style.backgroundSize='3rem';},600);
  window.setTimeout(function(){document.getElementById('ptmenu').style.display='none';document.getElementById('btn1').style.display='none';document.getElementById('btn2').style.display='none';document.getElementById('btn3').style.display='none';document.getElementById('btn4').style.display='none';document.getElementById('btn5').style.display='none';availinput=true;},1600);
}
function checkopenmenu(){
    winwidth=window.innerWidth;
    changebgsizes();
    if(winwidth>=1024){
        document.getElementById('btn1').style.display='none';
        document.getElementById('btn2').style.display='none';
        document.getElementById('btn3').style.display='none';
        document.getElementById('btn4').style.display='none';
        document.getElementById('btn5').style.display='none';
  }
  else{

    if(menustatus==true){
        document.getElementById('btn1').style.display='block';
        document.getElementById('btn2').style.display='block';
        document.getElementById('btn3').style.display='block';
        document.getElementById('btn4').style.display='block';
        document.getElementById('btn5').style.display='block';
    }
  }
}

function checkscroll(){
 
  actualscroll=document.body.scrollTop;
  if (actualscroll>=document.getElementById('maincontainer').clientHeight) {
    document.getElementById('topbar').style.position='fixed';
    document.getElementById('topbar').style.top='0rem';
    document.getElementById('barseparator').style.display='block';

  }
  else{
    document.getElementById('topbar').style.position='relative';
    document.getElementById('barseparator').style.display='none';
  }
}

function showpresencover(){
  winwidth=window.innerWidth;
   if(winwidth>=1024){
  document.getElementById('glowlogo').style.width='25%';
  $( "#glowlogo" ).animate({
opacity: 0, width: winwidth*0.32
},{queue: false, duration: 1000});
}
else{

    $( "#glowlogo" ).animate({
opacity: 0, width: winwidth*0.5, width: "350px"
},{queue: false, duration: 1000});
}
}

function animgifload(){
  $( "#gifload" ).animate({
opacity: 0, width: "300px", height: "250px"
}, {queue: false, duration: -1000});
window.setTimeout(function(){showcover();},1300);
}

function showcover(){
  scrollmaincontainer = document.getElementById('maincontainer').scrollHeight - document.getElementById('maincontainer').clientHeight;
  if(scrollmaincontainer>1){
    document.getElementById('maincontainer').style.height=((scrollmaincontainer+document.getElementById('maincontainer').clientHeight)+25)+'px';
    document.getElementById('contaboutus').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contproject').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contcontact').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
    winheight=scrollmaincontainer+document.getElementById('maincontainer').clientHeight;
  }
  else{
    winheight=window.innerHeight;
    document.getElementById('maincontainer').style.height=winheight+'px';
    document.getElementById('contaboutus').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contproject').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contcontact').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
  }
  winwidth=window.innerWidth;
  if(winwidth>=winheight*1.6){
    bgx=winwidth;
    bgy=winwidth/1.6;
  }
  else{
    bgx=(winheight*1.6)
    bgy=winheight
  }
  
  document.getElementById('loadcontainer').style.display='none';
  document.getElementById('incontainer').style.backgroundSize=bgx+'px '+bgy+'px';
  document.getElementById('glowlogo').style.display='none';
  document.getElementById('incontainer').style.display='block';
  window.setTimeout(function(){document.getElementById('incontainer').style.opacity=1},100);
  window.setTimeout(function(){document.getElementById('incontainer').style.transition='all ease-in-out 5s'},300);
  window.setTimeout(function(){document.getElementById('incontainer').style.backgroundSize=(bgx*1.25)+'px '+(bgy*1.25)+'px'},400);
}

function changebgsizes(){
  //se multiplica por 1.6 porque los tamaños originales de la imagen son: 1680x1050
  //al dividirlos nos da 1.6, este numero nos servira para mantener la relación en el tamaño de la imagen de fondo
  //en el tamaño de los diferentes dispositivos o al ajustar el tamaño de la ventana
  //si trabajaramos con diferentes tamaños sería suficiente con dividir el ancho por el alto
  winwidth=window.innerWidth;
  scrollmaincontainer = document.getElementById('maincontainer').scrollHeight - document.getElementById('maincontainer').clientHeight;
  if(scrollmaincontainer<1 && document.getElementById('maincontainer').clientHeight !== window.innerHeight){
    winheight=window.innerHeight;
    document.getElementById('maincontainer').style.height=winheight+'px';
    document.getElementById('contaboutus').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contproject').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contcontact').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
  }
  else{
     document.getElementById('maincontainer').style.height=((scrollmaincontainer+document.getElementById('maincontainer').clientHeight)+25)+'px';
     document.getElementById('contaboutus').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contproject').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
     document.getElementById('contcontact').style.minHeight=document.getElementById('maincontainer').clientHeight+'px';
    winheight=scrollmaincontainer+document.getElementById('maincontainer').clientHeight;
  }
 
  
  if(winwidth>=winheight*1.6){
    //ejem: si el ancho de la ventana es 1000 y el alto 500 al multiplicar 500*1.6 es equivalente a 800
    //realizará la siguiente operación:
    bgx=winwidth;
    bgy=winwidth/1.6;
    //ancho de fondo es igual al ancho de pantalla en el caso mencionado es equivalente a 1000px 
    //y el alto es igual al ancho de pantalla por 1.6 en este caso 500*1.6 es 800px
    // si dividimos 800 entre 1.6 nos dara 500 asegurandonos que no se distorcionará el fondo
  }
  else{
    bgx=(winheight*1.6)
    bgy=winheight
  }
  window.setTimeout(function(){document.getElementById('incontainer').style.backgroundSize=(bgx*1.25)+'px '+(bgy*1.25)+'px'},400);
  //multiplicamos el ancho 1.25 y el alto por 1.25 para que haga un acercamiento del 25% ejem
  //si tuviéramos 1.50 haría un acercamiento del 50% si fuese 0.50 haría un alejamiento del 50%
}

function checkresizing(resizecounter){
    resizecounter--;
    if(resizecounter==0){
      window.setTimeout(function(){checkresizing(resizecounter)},100)
    }
    else{
      resizing=false;
      changebgsizes();
    }
}
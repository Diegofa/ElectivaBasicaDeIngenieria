window.onload=function ()
 
{
   adiv="";
   aleatorio ();
   intentos();
   pistas();
 
   alert("Ingresa un Numero para Empezar a Jugar");
      
    var a = Number(nom_div("adivina").value);
    

    nom_div("comprueba").addEventListener('click', function(event)
   
   {
       adiv = Number(nom_div("adivina").value);
       if(adiv==" ")
       {
           alert("Intentalo,Ingresa un Numero");    
       }
       
   });

   function aleatorio()
   {

       var num = Math.floor((Math.random()* 200)+1);
       nom_div("rangoAdivina").innerHTML = "El Numero esta entre 1 y "+ num;
       alert(num);
      
   }

   
    function intentos ()
    {
       
       for( var i=0 ;i<=3 ;i++)
               {
                   if( adiv.value && adiv == aleatorio)
                   {
                       alert("correcto");
                       break;
                       
                   }
                   else
                  {
                       nom_div("intentos").innerHTML ="Intento "+ i +" de 10" ;
                       
                       //alert("sigue intentando");
                  }
                }              

    }


    function pistas()
    {
        if(adiv.value < aleatorio)
        {
            nom_div("pistas").innerHTML ="frio" ;
        }

        else
        {
         // nom_div("pistas").innerHTML ="Tibio" ;  
        }

    }

   function nom_div(div)
   {
       return document.getElementById(div);
   }

}
    
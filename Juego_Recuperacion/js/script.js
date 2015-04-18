window.onload = function()
{	
	var resultado_Juego;

	//funcion que genera un numero aleatorio de 1 a 3 y le asigna un string  que contiene la palabra piedra, papel o tijera
	var aleatorio = function() 
 	{
    	var n=  Math.floor((Math.random()*3)+1); 
    	var respuesta;
    	
    	if (n == 1) 
    	{
    		respuesta = "piedra";
    	}

    	else if (n == 2) 
    	{
    		respuesta = "papel";
    	} 
    	else 
    	{
        	respuesta = "tijera";
    	}
    	return alert(respuesta.value);
    };


	var decisionOrdenador=aleatorio;
	// funcion que captura el valor del boton de eleccion del usuario y lo guarda en una variable 
	var usuariodecide= function()
	{
		var respuesta2;
		if(nom_div("piedra").addEventListener('click', function(event)
		{
            
			respuesta2="piedra";
		}));
		
		if(nom_div("papel").addEventListener('click', function(event)
		{
			respuesta2="papel";
		}));

		if(nom_div("tijera").addEventListener('click', function(event)
		{
			respuesta2="tijera";
		}));
	};
	
	var decisionUsuario=usuariodecide;
	//Funcion quien gana 

	var quien_Gana = function() 
	{
    	if (decisionUsuario==decisionOrdenador) 
    		{
    		alert("Empate");
    		} 
    		else
    		{
        		if(decisionUsuario == "piedra" && decisionOrdenador == "papel") 
        		{
            		alert("gana la maquina");
        		} 

        			if(decisionUsuario == "piedra" && decisionOrdenador == "tijera") 
        			{
            			alert("has ganado");
        			} 

        				if(decisionUsuario == "papel" && decisionOrdenador == "tijera") 
        				{ 
        					alert("gana la maquina");
         				}
         					if (decisionUsuario == "papel" && decisionOrdenador == "piedra")
         					{
         						alert("has ganado");
       						}
         						if (decisionUsuario == "tijera" && decisionOrdenador == "piedra") 
         						{
            						alert("gana la maquina");
            					}
            						if (decisionUsuario == "tijera" && decisionOrdenador == "papel")
            						{
            							alert("has ganado");
            						}
    		}
	};
}

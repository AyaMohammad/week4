
this is my work for the eerste one



var invullen;
invullen = prompt("Is de kaas geel?");
if(invullen == "ja") {
	invullen = prompt("Zitten er gaten in?");
    }
        if(invullen == "ja") {
    	    invullen = prompt("Is de kaas belachelijk duur?");
    	     if(invullen == "ja") { //voor ja
             	invullen = alert("Emmenthaler");
                }
		        else{
		      	invullen = alert("Leerdammer");
		      	}
    }
        else{
        	invullen = prompt("Is de kaas hard als steen?");
        
            if(invullen == "ja"){ //voor nee
            	invullen = alert("Pammigiano Reggiano");
            }
            else{
            	invullen = alert("Goudse kaas");
            }
    
        }   

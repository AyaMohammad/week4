	//<script>
		var turn = true; //true means X turn
		var squaers = [];


		function reset(A,B,C){
			document.getElementById('A'+A).style.color="#000";
			document.getElementById('A'+B).style.color="#000";
			document.getElementById('A'+C).style.color="#000";
			setTimeout(function(){location.reload()},2000);
		}
	    

		function checkWinner(){
			for(var i=1; i<=9; 1++){
				squaers[i] = document.getElementById('A'+i).innerHTML;
            }

            // check horizontal
            if(squaers[1]==squaers[2] && squaers[2]==squaers[3] && squaers[1]!=""){
            	alert('player ' + squaers[1] + 'wins the game');
            	reset(1,2,3);
            }
                        if(squaers[4]==squaers[5] && squaers[5]==squaers[6] && squaers[4]!=""){
            	alert('player ' + squaers[4] + 'wins the game');
            	reset(4,5,6);
            }
                        if(squaers[7]==squaers[8] && squaers[8]==squaers[9] && squaers[7]!=""){
            	alert('player ' + squaers[7] + 'wins the game');
            	reset(7,8,9);
            }

            //check vertical
                        if(squaers[1]==squaers[4] && squaers[4]==squaers[7] && squaers[1]!=""){
            	alert('player ' + squaers[1] + 'wins the game');
            	reset(1,4,7);
            }
                        if(squaers[2==squaers[5] && squaers[5]==squaers[8] && squaers[2]!=""){
            	alert('player ' + squaers[2] + 'wins the game');
            	reset(2,5,8);
            }
                        if(squaers[3]==squaers[6] && squaers[6]==squaers[9] && squaers[3]!=""){
            	alert('player ' + squaers[3] + 'wins the game');
            	reset(3,6,9);
            }

            //check degenal
                        if(squaers[1]==squaers[5] && squaers[5]==squaers[9] && squaers[1]!=""){
            	alert('player ' + squaers[1] + 'wins the game');
            	reset(1,5,9);
            }
                        if(squaers[3]==squaers[5] && squaers[5]==squaers[7] && squaers[3]!=""){
            	alert('player ' + squaers[3] + 'wins the game');
            	reset(3,5,7);
            }

		}
        function insert(id){
        	var s = document.getElementById(id);
	        if(turn && s.innerHTML==""){
		       s.innerHTML="X";
		       turn = !turn;
	        }else if(!turn && s.innerHTML==""){
		       s.innerHTML="O"
		       turn = !turn;

	    }
        checkWinner();
    }
//	</script>




 // <link rel="stylesheet" type="text/js" href="game.js">
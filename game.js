
var turn = true; //true means X turn
function insert(id){
	if(turn){
		document.getElementById(id).innerHTML="X";
		turn = ! turn;
	}else{
		document.getElementById(id).innerHTML="O"
		turn = ! turn;

	}

}
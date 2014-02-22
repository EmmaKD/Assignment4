/**
 * @author Emm
 */

//This is my handler function
function addJsonToPage(FileThree){

//This command will console my data that I have in FileThree Json
	console.log(FileThree);
	
	
	//This command will ask my computer to explore to json file three and take out the first data that is in my guitarslist
	
	var firstDiv = $("<div>");
	$(firstDiv).html(FileThree.myguitarsList[0].type);
	$("#Jamming").append(firstDiv);
	
	//This command will ask my computer to explore to json file three and take out the second data that is in my guitarslist

	var secondDiv = $("<div>");
	$(secondDiv).html(FileThree.myguitarsList[1].type);
	$("#Jamming").append(secondDiv);
	
	//This command will ask my computer to explore to json file three and take out the third data that is in my guitarslist
 	var thirdDiv = $("<div>");
	$(thirdDiv).html(FileThree.myguitarsList[2].type);
	$("#Jamming").append(thirdDiv);
	

}

//This is the function command that will help me to add textin my write up
function books(){
	
	
var firstDiv = $("<div>");
$(firstDiv).html("Interest in African literature grows in the West")
$("#Jamming").append(firstDiv);

//With this command I am asking the computer to add the following statement in my write up
var secondDiv = $("<div>");
$(secondDiv).html("The importance of African literature grips the world")
$("#Jamming").append(secondDiv);

////With this command I am asking the computer to add this other statement in my write up

var thirdDiv = $("<div>");
$(thirdDiv).html("Readers of African literature grows")
$("#Jamming").append(thirdDiv);

$.get("FileThree.json", addJsonToPage, "Json");

console.log("Popularity of African literature grows worldwide");

}

$(document).ready(books);
console.log("African writers becoming competitive")


var selectedText;


var initialise=function(){
//add an event listener for click
document.addEventListener("click",
	function(e){
		//when shift + mouse click occurs
			if(e.shiftKey){
                    
                    //grab the selected text
					 selectedText=document.getSelection().toString() || "";
					 
					 chrome.runtime.sendMessage({inComingData:selectedText}, function(response) {
				          //alert (selectedText);
																						}
										);
						} //end of if
						}
						
						);//end of listener
			
			}//end of initialise

initialise();


var selectedText;
////////////////////////////////////////
//create a popuptext
var createPopupText=function(txt,e){
    //alert(window.title);
    var x=document.createElement("div");
    x.setAttribute("id","msgBox")
    x.innerHTML=txt;
    
    x.setAttribute("style","width:320px;border-width:10px;background-color: #f8f0f0;position:absolute;text-overflow:inherit;background-image: url(bg.jpg);border-color: #111111;" );
    var topPos=String(Number(Math.round((document.body.scrollTop+window.innerHeight/2)+0.3*window.innerHeight)))+"px;";
    //alert(x.style);
    x.style.top=String(e.pageY)+"px";
    x.style.left="35%"
    document.body.appendChild(x);
   // alert(document.body.innerHTML=txt);

    setTimeout(function(){
        var element = document.getElementById("msgBox");
        element.parentNode.removeChild(element);

},2000);   

}
//////////////////////////////////////
var initialise=function(){
//add an event listener for click
document.addEventListener("click",
	function(e){
		//when shift + mouse click occurs
			if(e.shiftKey){
                    
                    //grab the selected text
					 selectedText=document.getSelection().toString() || "";
                    //run a popup for 500 ms
                    createPopupText(selectedText,e);
					 
					 chrome.runtime.sendMessage({inComingData:selectedText}, function(response) {
				          //alert (selectedText);
																						}
										);
						} //end of if
						}
						
						);//end of listener
			
			}//end of initialise

initialise();

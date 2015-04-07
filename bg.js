
var storage=window.localStorage;
//get the total no of words store inside the storage
var total=Number(storage.getItem('total') )|| 0;

//create  a data storing function to store input strings inside the localstorage

var storeData = function(dataString){
    //total=Number(storage.getItem('total') )|| 0;
    if (String(dataString) !='' && String(dataString) !="undefined")
    {
        storage.setItem(total,dataString);
    total+=1;
    
    storage.setItem("total",total);}
    
}//end of storeData function

//update the popupfile with storage data
var updatePopupHtmlFile=function(){
    var innerHtmlString='<div class="txt">';
    for (var i=0;i<total;i++) innerHtmlString+=storage[total-1-i]+"<br><br></div><div class='empty'></div>";
   // alert(innerHtmlString);
    /**
    var views = chrome.extension.getViews({type: "popup"});
    for (var i = 0; i < views.length; i++) {
                views[i].document.getElementById('store').innerHTML=innerHtmlString;
        }**/
   // var popupUrl = chrome.extension.getURL('pop.html');
}

//listen to the content provider and store data inside the storage
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
       // alert('hi');
	var x=request.inComingData || "";
        if (x != "" && typeof(x)=='string' && x !='undefined'){
            var dataString=request.inComingData;
            storeData(dataString);
            //updatePopupHtmlFile();
    
            //alert(request.inComingData);
            //conosle.log(storage);
}
  else{  
    alert('data not stored');
    }
}

);//end of listener


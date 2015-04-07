
//alert(chrome.tabs.id);
var init=function(){
    
//create a button 

var w=chrome.extension.getBackgroundPage();
    
var total=Number(w.localStorage["total"]);
    
var innerHtmlString="<img class='help' width=32 src='help.png'></><a id='link' href='' download='data.txt'><img class='download' width=30 src='download.png'></><a><img class ='delete' width=32 src='delete.png'></><div class='empty'></div><div class='txt'>";
for (var i=0;i<total;i++) {
    if (w.localStorage[total-1-i] !="")
    innerHtmlString +=w.localStorage[total-1-i]+"<br><img class='trash' width=24 src='trash.png' id="+String(total-1-i)+" ></><div class='empty'></div>";}
    
    //alert (total);
    //alert(String(innerHtmlString));

    
/////////////////////////////////////////    
var onclickImage=function(){
    
    var i=Number(this.id)
    w.localStorage[i]='';
    //alert(this.id);
    init();


}
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
var onClearClick=function(){
    w.localStorage.clear();
    init();
}
////////////////////////////////////////////
//onclick clear button
//document.getElementById("delete").addEventListener('click',onClearClick,false);
//////////////////////////////////////////////////////////
//on help click
var onHelpClick=function(){

    alert("(By Anshuman Mund)\n\nTo save content into the extension browse into any website and select the text contents to be saved.Then keep the Shift Key pressed and press the left mouse button on the screen .Now your content is saved.To see it click on the icon button near the address bar"); 
}
////////////////////////////////////
var onDownloadClick=function(){
    //download the complete file
    var txt=''
    for (var i=0;i<total;i++) {
        if (w.localStorage[total-1-i] !="") txt +=w.localStorage[total-1-i]+"\n\n##############################################################################################################\n";}
    document.getElementById('link').onclick=function(code){
  
    this.href='data:text/plain;charset=utf-8,'+ encodeURIComponent(txt);  
    }
//alert ("download");
}

x=document.getElementById("store");
x.innerHTML=innerHtmlString;
 ///////////////create the event listeners   
var classnames=document.getElementsByClassName("download");
for (var i=0;i<classnames.length;i++) classnames[i].addEventListener('click',onDownloadClick,false);

var classnames=document.getElementsByClassName("help");
for (var i=0;i<classnames.length;i++) classnames[i].addEventListener('click',onHelpClick,false);

var classnames=document.getElementsByClassName("delete");
for (var i=0;i<classnames.length;i++) classnames[i].addEventListener('click',onClearClick,false);

var classnames=document.getElementsByClassName("trash");
for (var i=0;i<classnames.length;i++) classnames[i].addEventListener('click',onclickImage,false);
}


window.onload=init;


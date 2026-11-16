const save=document.getElementById("savebtn");
const title=document.getElementById("save");
const store=document.getElementById("store");
const display=document.getElementById("displaybtn");
const clear=document.getElementById("clearbtn")

save.addEventListener("click", function(e) {

    localStorage.setItem("title", title.value);
    localStorage.setItem("content", store.value);
    alert("Your personal note was saved!");

});
display.addEventListener("click", function(e) {

    const savedtitle = localStorage.getItem("title");
    const savedcontent = localStorage.getItem("content");

    document.getElementById("savedtitle").innerHTML = savedtitle;
    document.getElementById("savedcontent").innerHTML = savedcontent;

});
clear.addEventListener("click",function(e){
     localStorage.removeItem("title");
     localStorage.removeItem("content");
     title.value=""
     store.value=""
    document.getElementById("savedtitle").innerHTML = "";
    document.getElementById("savedcontent").innerHTML = "";
    alert("Your personal note was cleared !")
})
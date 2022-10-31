let username;
let occ,em;



document.getElementById("register").onclick=function(){
    username=document.getElementById("name").value;
    occ=document.getElementById("occupation").value;
    em=document.getElementById("email").value;
    let newdiv = document.createElement("p");
    newdiv.innerHTML = username + "<br />" + occ + "<br />"+ em +"<br />"+``;
    document.getElementById("secondcontainer").appendChild(newdiv);
}
document.getElementById("clear").onclick=function(){
    document.getElementById("secondcontainer").innerHTML="";
}
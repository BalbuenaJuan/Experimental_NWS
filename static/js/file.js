/**
 * Created by Juan on 02/03/2016.
 */


var avatarContainer = document.getElementById("avatar");

var avatar1 = "./static/img/juan-a.jpg";
var avatar2 = "./static/img/juan-b.jpg";

avatarContainer.addEventListener("mouseover", function(){
        avatarContainer.src = avatar2;
    });

avatarContainer.addEventListener("mouseout", function(){
        avatarContainer.src =  avatar1;
    });



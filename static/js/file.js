/**
 * Created by Juan on 02/03/2016.
 */

(function () {
    // GUARDAR ETIQUETA IMG PARA CAMBIAR SRC
    var avatarContainer = document.getElementById("avatar");
    // GUARDAR URLs ABSOLUTAS
    var avatar1 = "./static/img/juan-a.jpg";
    var avatar2 = "./static/img/juan-b.jpg";
    // AÑADIR EVENTO DE ENTRADA DE MOUSE A LA ETIQUETA IMG
    avatarContainer.addEventListener("mouseover", entraMouse);
    // ENTRA MOUSE Y CAMBIA FOTO
    function entraMouse(){
        avatarContainer.src = avatar2;
    }
    // AÑADIR EVENTO DE SALIDA DE MOUSE A LA ETIQUETA IMG
    avatarContainer.addEventListener("mouseout", saleMouse);
    // SALE MOUSE Y CAMBIA FOTO
    function saleMouse(){
        avatarContainer.src =  avatar1;
    }
})();



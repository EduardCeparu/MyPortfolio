'use strict'

let image = document.getElementsById('image');
let images = ['003-html-5.png ','005-css-3.png','001-bootstrap.png', '006-java.png', '004-js.png','007-github.png','002-sql-server.png']

setInterval(function(){
    let random = Math.floor(Math.random() *4);
    image.src = images[random];
}, 800);
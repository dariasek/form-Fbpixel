let name = document.getElementById('name');
let email = document.getElementById('email');
let web = document.getElementById('web');
let message = document.getElementById('message');

let nameSp = document.getElementsByClassName('name-span')[0];
let emailSp = document.getElementsByClassName('email-span')[0];
let webSp = document.getElementsByClassName('web-span')[0];
let messageSp = document.getElementsByClassName('message-span')[0];

name.onclick = () => nameSp.style.visibility = 'hidden';
email.onclick = () => emailSp.style.visibility = 'hidden';
web.onclick = () => webSp.style.visibility = 'hidden';
message.onclick = () => messageSp.style.visibility = 'hidden';

name.onchange = () => {
    if (!name.value){
        nameSp.style.visibility = 'visible';
    }
}

email.onchange = () => {
    if (!email.value){
        emailSp.style.visibility = 'visible';
    }
}

web.onchange = () => {
    if (!web.value){
        webSp.style.visibility = 'visible';
    }
}

message.onchange = () => {
    if (!message.value){
        messageSp.style.visibility = 'visible';
    }
}

let noSrc = document.createElement('noscript');
let noSrcContent = document.createTextNode(`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
/>`)

noSrc.appendChild(noSrcContent);
document.body.appendChild(noSrc);
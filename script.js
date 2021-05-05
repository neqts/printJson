'use strict';

document.body.style.cssText = `
margin:0px;
boxing-size:border-box;
padding:0px;
background:linear-gradient(to right, #6f0000, #200122);
`;

/*create container div*/
const main = document.createElement('div');
main.classList.add('container');
document.body.appendChild(main);
main.style.cssText = `
width:100%;
height:100vh;
display:flex;
justify-content:center;
text-align:center;
align-items:center;
`;

/*inside container div */
const overall = document.createElement('div');
overall.classList.add('overall');
main.appendChild(overall);
overall.style.cssText = `
width:60%;
height:300px;
background:#ffffffad;

`;

/*inside container overall */
const within = document.createElement('div');
within.classList.add('within');
overall.append(within);
within.style.cssText = `
justify-content:center;
text-align:center;
align-items:center;
height:100%;
display: inline-block;
padding-top:40px
`;

/*create buttons*/
const bold = document.createElement('button');
const lean = document.createElement('button');
const bullet = document.createElement('button');
const save = document.createElement('button');
save.classList.add('btn');
bullet.classList.add('btn');
lean.classList.add('btn');
bold.classList.add('btn');
lean.textContent = 'LEAN';
bullet.textContent = 'BULLET';
bold.textContent = 'BOLD';
save.textContent = 'SAVE';
within.appendChild(bold);
within.appendChild(lean);
within.appendChild(bullet);
within.appendChild(save);
const btns = document.getElementsByTagName('button');
bold.style.cssText = `
border: 3px solid black;
padding:10px;
margin:10px;
cursor:pointer;
    color: black;`;
bullet.style.cssText = `
border: 3px solid black;
padding:10px;
margin:10px;
cursor:pointer;
    color: black;`;
lean.style.cssText = `
border: 3px solid black;
padding:10px;
margin:10px;
cursor:pointer;
    color: black;`;
save.style.cssText = `
    border: 3px solid black;
    padding:10px;
    background-color:green;
    margin:10px;
    cursor:pointer;
        color: black;`;

/*input */
const text = document.createElement('input');
within.appendChild(text);
text.id = 'myText';
text.type = 'text';
text.classList.add('text');
text.placeholder = 'Type your text here...';
text.style.cssText = `
width:80%;
background:#fff;
border:none;
margin:20px
`;
/* Info paragraf */
const Info = document.createElement('p');
within.appendChild(Info);
Info.innerHTML = `Click ENTER and start styling...`;
Info.style.cssText = `
color:gray`;

/* output text */
const outputText = document.createElement('p');
within.appendChild(outputText);
outputText.classList = 'outputText';
outputText.style.cssText = `
width:100%;
height:30px;`;

/* ENTER function */
const show = function () {
  let paragraf = document.getElementById('myText').value;
  outputText.innerText = paragraf;
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    show();
  }
});
let li;
let ul;

const paragraChangePoint = function () {
  ul = document.createElement('ul');
  li = document.createElement('li');
  within.appendChild(ul);
  ul.appendChild(li);
  outputText.style.display = 'none';
  li.innerText = outputText.innerText;
};

const paragrafChangeBold = function () {
  outputText.style.fontWeight = '700';
  li.style.fontWeight = '700';
};
const paragrafChangeLean = function () {
  outputText.style.fontStyle = 'Italic';
  li.style.fontStyle = 'Italic';
};

const paragrafSave = function () {
  var json = JSON.stringify(outputText);
  var fs = require('fs');
  fs.writeFile('myjsonfile.json', json, 'utf8', callback);
};

bullet.addEventListener('click', paragraChangePoint);
lean.addEventListener('click', paragrafChangeLean);
bold.addEventListener('click', paragrafChangeBold);
save.addEventListener('click', paragrafSave);

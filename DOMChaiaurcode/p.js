const arrImage = [
    document.getElementById('image1'),
    document.getElementById('image2'),
    document.getElementById('image3'),
];

const objObject = document.getElementById('output');
let strHtml = "<ul>";

for (const img of arrImages) {
    strHtml += `<li>images${i + 1}: height=${img.height},
    width=${img.width}, style.height=${img.style.height},
    style.width=${img.style.width}</li>`;
}

strHtml += "</ul>";

objObject.innerHTML = strHtml;
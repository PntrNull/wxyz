function createDiv(inputObject) {
    "use strict";

    const uTime = inputObject.time;
    const uFrom = inputObject.from;
    const uText = inputObject.text;

    const timeP = document.createElement("p");
    timeP.innerHTML = "Time: " + uTime;
    const fromP = document.createElement("p");
    fromP.innerHTML = "From: " + uFrom;
    const textP = document.createElement("p");
    textP.innerHTML = "Text: " + uText;

    const newDiv = document.createElement("div");
    newDiv.classFrom = "Text";
    newDiv.appendChild(timeP);
    newDiv.appendChild(fromP);
    newDiv.appendChild(textP);

    const parentDiv = document.getElementById("Texts");
    parentDiv.appendChild(newDiv);
    return newDiv;
}

function insertTexts(arr) {
    "use strict";
    console.log(arr);
    for (let i = 0; i < arr.length; ++i) {
        createDiv(arr[i]);
    }
    return true;
}

function readFile() { // 获取文本所对应的JavaScript对象
    "use strict";
    fetch("./texts/data.json")
        .then(Response => Response.json())
        .then(Data => insertTexts(Data));
    return true;
}

const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");


function countingCharacter(){
    const textLength = textarea.value.length;

    counter.innerText = `${textLength}`;

}
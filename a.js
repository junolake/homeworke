let descButton = document.querySelector('#description');
let descText = document.querySelector('#desc-text');
let descSpan = document.querySelector('.info-item span');

descButton.addEventListener('click', showDesc);

function showDesc() {
    if(descText.classList.contains("off-description")) {
        descText.classList.remove("off-description");
        descSpan.classList.add("desc-active");
    }
    else {
        descText.classList.add("off-description");
        descSpan.classList.remove("desc-active");
    }
}
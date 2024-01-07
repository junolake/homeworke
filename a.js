let topItems = document.querySelectorAll('.top100-item');
let descButton = document.querySelector('#description');
let descText = document.querySelector('#desc-text');
let descSpan = document.querySelector('.info-item span');

descButton.addEventListener('click', showDesc);

topItems .forEach(function(item) {
    item.addEventListener("click", function() {
        
        topItems.forEach(function(innerItem) {
            innerItem.classList.remove("top-selected");
        });
        item.classList.add("top-selected");
    });
}); 

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
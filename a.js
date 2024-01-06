let topItems = document.querySelectorAll('.top100-item');

topItems .forEach(function(item) {
    item.addEventListener("click", function() {
        // Remove the "color" class from all elements
        topItems.forEach(function(innerItem) {
            innerItem.classList.remove("top-selected");
        });
        item.classList.add("top-selected");
    });
}); 
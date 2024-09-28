///////////this code is only for notes purpose/////////////
let scrollCounter = 0;
window.addEventListener('scroll', function () {
if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log(Window.innerHeight +window.scrollY);
        // User has scrolled to the bottom of the page
        scrollCounter++;

        if (scrollCounter == 2) {
            // User has scrolled to the bottom twice, load more rows
            addRows(currentRows, increment)
            currentRows += 100
            console.log("🚀 ~ window.addEventListener ~ currentRows:", currentRows)                    // Reset scroll counter
            scrollCounter = 0;
        }
    }
});
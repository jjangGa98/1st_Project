window.onload = function () {

    const cards = document.querySelectorAll(".card");
    for(let i=0; i<cards.length; i++) {
        cards[i].addEventListener('click', function() {
            console.log("click");
            console.log(this.getAttribute('aria-label'));
            // window.open(this.getAttribute('aria-label'));
        });
    }


}
function search_animal() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('items');


    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().include(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list.item"
        }

    }
}
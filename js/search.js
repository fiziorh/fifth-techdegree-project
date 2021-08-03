function search_animal() {
    let input = document.getElementById('searchbar').value;
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


function search() {

    //VARIABLES
    let input = document.getElementById('searchbar');
    let filter = input.value.toUpperCase();
    let gallery = document.getElementById('all');
    let data = a.getElemetsByTagName('data-caption');

    //LOOP
    for (i = 0; i < data.length; i++) {
        a = li[i]
    }

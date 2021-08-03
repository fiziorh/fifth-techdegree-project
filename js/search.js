function search_gallery() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByTagName('a');


    for (i = 0; i < x.length; i++) {

        let caption = x[i].getAttribute('data-caption').toLowerCase();
        if (!caption.includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "flex"
        }

    }
}


// function search() {

//     //VARIABLES
//     let input = document.getElementById('searchbar');
//     let filter = input.value.toUpperCase();
//     let contain = document.getElementById('all');
//     let data = contain.getElemetsByTagName('data-caption');

//     //LOOP
//     for (i = 0; i < data.length; i++) {
//         a = li[i]
//     }
// }

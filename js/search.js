
// first, make a function declaration
function search_gallery() {
    // the input variable get the value of what you type on the searchbar
    let input = document.getElementById('searchbar').value;
    // make it toLowerCase for uppercase sensitivity
    input = input.toLowerCase();
    // the x variable gather the anchor tags information
    let x = document.getElementsByTagName('a');

    // make a loop that compare it to the length of "x variable" 
    for (i = 0; i < x.length; i++) {

        // the caption variable get the data-caption attribute from the anchor tags
        let caption = x[i].getAttribute('data-caption').toLowerCase();
        // if the caption variable doesn't match the input (what you type on the searchbar), then it displays "none"
        if (!caption.includes(input)) {
            x[i].style.display = "none";
        }
        // else it will display it
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

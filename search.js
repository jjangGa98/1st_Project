const all = document.querySelectorAll('.item');
for (var i of all) {
    i.style.display = 'none';
}

function filter() {
    const my_input = document.querySelector('.value');
    const all = document.querySelectorAll('.item');
    console.log(my_input.value);

    if (my_input.value == '' || null) {
        for (var i of all) {
            i.style.display = 'none';
        }
        return;
    }

    var value, name, item, i;
    for (var i of all) {
        i.style.display = 'none';
    }

    value = document.getElementsByClassName("value").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for (i = 0; i < item.length; i++) {
        name = item[i].getElementsByClassName("name");
        if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
            item[i].style.display = "flex";
        }
    }
}

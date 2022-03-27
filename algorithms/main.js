// Range Of Size
let inp_as = document.getElementById('a_size');
let array_size = inp_as.value;

// Range of Speed and Displaying Array Variables
let inp_gen = document.getElementById("a_generate");
let inp_aspeed = document.getElementById("a_speed");

// Buttons Variables
let algos_buttn = document.querySelectorAll(".algos button");

let main_array = []; // Main Array
let divs = []; // Created Divs
let margin_size;
let cont = document.getElementById("array_container");

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

// Generate New Array
function generate_array() {
    cont.innerHTML = "";

    for (let i = 0; i < array_size; i++) {
        main_array[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:#642CA9; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (main_array[i]) + "%;";
    }
    // console.log(main_array);
}

// Update Array
function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

// Auto load for Array
window.onload = update_array_size();

// console.log(algos_buttn.length);

for (let i = 0; i < algos_buttn.length; i++) {
    algos_buttn[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (let i = 0; i < algos_buttn.length; i++) {

        algos_buttn[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        // inp_aspeed.disabled = true;
    }
}

function runalgo(event) {

    disable_buttons();

    this.classList.add("bttn_selected");

    switch (this.innerHTML) {
        case "Bubble": myBubbleSort();
            break;
        case "Selection": mySelectionSort();
            break;
        case "Insertion": myInsertionSort();
            break;
        case "Merge Sort": myMergeSort();
            break;
        case "Quick Sort": myQuickSort();
            break;
        case "Heap Sort": myHeapSort();
            break;
    }
}







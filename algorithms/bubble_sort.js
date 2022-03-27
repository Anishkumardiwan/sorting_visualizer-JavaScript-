
// Bubble Sort Function 
function myBubbleSort() {
    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            // Color Change
            div_update(divs[j], main_array[j], "yellow");

            if (main_array[j] > main_array[j + 1]) {
                div_update(divs[j], main_array[j], "red");//Color update
                div_update(divs[j + 1], main_array[j + 1], "red");//Color update

                var temp = main_array[j];
                main_array[j] = main_array[j + 1];
                main_array[j + 1] = temp;

                div_update(divs[j], main_array[j], "red");//Height update
                div_update(divs[j + 1], main_array[j + 1], "red");//Height update
            }

            // Color Change
            div_update(divs[j], main_array[j], "blue");
        }
        //Color update
        div_update(divs[j], main_array[j], "green");
    }
    //Color update
    div_update(divs[0], main_array[0], "green");

    enable_buttons();
    // console.log(main_array);
}
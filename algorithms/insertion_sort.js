function myInsertionSort() {
    c_delay = 0;

    for (var j = 0; j < array_size; j++) {
        //Color update
        div_update(divs[j], main_array[j], "yellow");
        var key = main_array[j]; // Store Key 
        var i = j - 1;
        while (i >= 0 && main_array[i] > key) {
            div_update(divs[i], main_array[i], "red");//Color update
            div_update(divs[i + 1], main_array[i + 1], "red");//Color update

            main_array[i + 1] = main_array[i];

            div_update(divs[i], main_array[i], "red");//Height update
            div_update(divs[i + 1], main_array[i + 1], "red");//Height update

            div_update(divs[i], main_array[i], "blue");//Color update
            if (i == (j - 1)) {
                div_update(divs[i + 1], main_array[i + 1], "yellow");//Color update
            }
            else {
                div_update(divs[i + 1], main_array[i + 1], "blue");//Color update
            }
            i -= 1;
        }
        main_array[i + 1] = key;

        for (var t = 0; t < j; t++) {
            div_update(divs[t], main_array[t], "green");//Color update
        }
    }
    //Color update
    div_update(divs[j - 1], main_array[j - 1], "green");

    enable_buttons();
}
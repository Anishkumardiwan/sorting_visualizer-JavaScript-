
function mySelectionSort() {
    c_delay = 0;

    for (var i = 0; i < array_size; i++) {
        // Color Update
        div_update(divs[i], main_array[i], "red");
        index_min = i;

        for (var j = i + 1; j < array_size; j++) {
            //Color update
            div_update(divs[j], main_array[j], "yellow");

            if (main_array[j] < main_array[index_min]) {
                if (index_min != i) {
                    // console.log(index_min , i);
                    //Color update
                    div_update(divs[index_min], main_array[index_min], "blue");
                }
                index_min = j;
                //Color update
                div_update(divs[index_min], main_array[index_min], "red");
            }
            else {
                //Color update
                div_update(divs[j], main_array[j], "blue");
            }
        }

        if (index_min != i) {
            var temp = main_array[index_min];
            main_array[index_min] = main_array[i];
            main_array[i] = temp;

            //Height update
            div_update(divs[index_min], main_array[index_min], "red");
            //Height update
            div_update(divs[i], main_array[i], "red");
            //Color update
            div_update(divs[index_min], main_array[index_min], "blue");
        }

        // Color Update
        div_update(divs[i], main_array[i], "green")
    }
    //Color update
    div_update(divs[i], main_array[i], "green");

    enable_buttons();
}
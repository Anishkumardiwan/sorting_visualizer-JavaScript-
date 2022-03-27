
function myQuickSort() {
    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_sort_partition(start, end) {
    var i = start + 1;
    var piv = main_array[start];//make the first element as pivot element.
    div_update(divs[start], main_array[start], "yellow");//Color update

    for (var j = start + 1; j <= end; j++) {
        //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
        if (main_array[j] < piv) {
            div_update(divs[j], main_array[j], "yellow");//Color update

            div_update(divs[i], main_array[i], "red");//Color update
            div_update(divs[j], main_array[j], "red");//Color update

            var temp = main_array[i];
            main_array[i] = main_array[j];
            main_array[j] = temp;

            div_update(divs[i], main_array[i], "red");//Height update
            div_update(divs[j], main_array[j], "red");//Height update

            div_update(divs[i], main_array[i], "blue");//Height update
            div_update(divs[j], main_array[j], "blue");//Height update

            i += 1;
        }
    }
    div_update(divs[start], main_array[start], "red");//Color update
    div_update(divs[i - 1], main_array[i - 1], "red");//Color update

    var temp = main_array[start];//put the pivot element in its proper place.
    main_array[start] = main_array[i - 1];
    main_array[i - 1] = temp;

    div_update(divs[start], main_array[start], "red");//Height update
    div_update(divs[i - 1], main_array[i - 1], "red");//Height update

    for (var t = start; t <= i; t++) {
        div_update(divs[t], main_array[t], "green");//Color update
    }

    return i - 1;//return the position of the pivot
}

function quick_sort(start, end) {
    if (start < end) {
        //stores the position of pivot element
        var piv_pos = quick_sort_partition(start, end);

        //sorts the left side of pivot.
        quick_sort(start, piv_pos - 1);

        //sorts the right side of pivot.
        quick_sort(piv_pos + 1, end);
    }
}
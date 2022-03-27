

function myMergeSort() {
    c_delay = 0;

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_sort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = main_array[q++];
            // Color Update
            div_update(divs[q - 1], main_array[q - 1], "red");

        } else if (q > end) {
            Arr[k++] = main_array[p++];
            //Color update
            div_update(divs[p - 1], main_array[p - 1], "red");

        } else if (main_array[p] < main_array[q]) {
            Arr[k++] = main_array[p++];
            //Color update
            div_update(divs[p - 1], main_array[p - 1], "red");

        } else {
            Arr[k++] = main_array[q++];
            //Color update
            div_update(divs[q - 1], main_array[q - 1], "red");

        }
    }

    for (var t = 0; t < k; t++) {
        main_array[start++] = Arr[t];
        div_update(divs[start - 1], main_array[start - 1], "green");//Color update
    }

}


function merge_partition(start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);

        //Color update
        div_update(divs[mid], main_array[mid], "yellow");

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}
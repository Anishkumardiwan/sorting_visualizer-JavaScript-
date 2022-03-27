// Speed Variable
let speed = 10000;

// Add Event on Range of Speed
inp_aspeed.addEventListener("input", vis_speed);

// Speed Controler Function
function vis_speed() {
    let array_speed = inp_aspeed.value;
    // console.log(array_speed);
    // console.log(parseInt(array_speed));

    switch (parseInt(array_speed)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }

    // console.log(speed);
    //Decrease numerator to increase speed.
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
    // console.log(delay_time);
}

//Decrease numerator to increase speed.
let delay_time = 10000 / (Math.floor(array_size / 10) * speed);
// console.log(delay_time);

//This is updated of every div change so that visualization is visible.
let c_delay = 0;


// Color Chnage Function
// console.log(c_delay += delay_time);
function div_update(cont, height, color) {
    window.setTimeout(function () {
        cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time);
}

// Enable Buttons Function
function enable_buttons() {
    window.setTimeout(function () {
        for (let i = 0; i < algos_buttn.length; i++) {
            algos_buttn[i].classList = ["btn btn-danger mb-3"];

            algos_buttn[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            // inp_aspeed.disabled = true;
        }
    }, c_delay += delay_time);
}





















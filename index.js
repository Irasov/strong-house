const lengthField = document.querySelector(".data__input_long");
const heightField = document.querySelector(".data__input_height");
const priceColorField = document.querySelector(".data__input_price-c");
const priceCincField = document.querySelector(".data__input_price-o");
const gazField = document.querySelector(".data__input_gaz");
const manField = document.querySelector(".data__input_man");
const square = document.querySelector(".calc__sqr");
const countLists = document.querySelector(".calc__lists");
const countListsN = document.querySelector(".calc__lists-n");
const price = document.querySelector(".calc__price");
const priceOne = document.querySelector(".calc__price-list")

function getData() {
    let datas = [];
    datas.push(document.querySelector('input[name="shelf"]:checked').value);
    datas.push(document.querySelector('input[name="color"]:checked').value);
    //datas.push(document.querySelector('input[name="round"]:checked').value);
    datas.push("round");
    datas.push(document.querySelector('input[name="move"]:checked').value);
    return datas
}

function calcDates(length, lengthFull, datas) {
    let lists = 0;
    let sqr = 0;
    let priceList = 0;
    let priceLists = 0;
    let move = 0;
    lists =  +lengthField.value / length;
    countListsN.textContent = lists.toFixed(2);
    if (datas[2] === "round") {
        lists = Math.ceil(lists);  
    } else {
        lists = Math.round(lists);
    }
    sqr = +heightField.value * lists * lengthFull;
    if (datas[1] == "color") {
        priceList = +priceColorField.value;
    } else {
        priceList = +priceCincField.value;
    }
    priceOne.textContent = Math.round((sqr * priceList) / lists);
    switch (datas[3]) {
        case "gaz":
            move = +gazField.value;
            priceLists = sqr * priceList + move;
            break;
        case "man":
            move = +manField.value;
            priceLists = sqr * priceList + +manField.value;
            break;
        case "not":
            priceLists = sqr * priceList;
            break;
    }
    countLists.textContent = lists;
    square.textContent = sqr.toFixed(1);
    price.textContent = Math.round(priceLists);
}

function calc(datas) {
    length = 0;
    lengthFull = 1.15;
    switch(datas[0]) {
        case "twenty":
            calcDates(1.1, 1.15, datas);
            break;    
        case "eight":
            calcDates(1.15, 1.2, datas);
            break;
    }

}
calc(getData());

document.addEventListener('change', (e) => {
    calc(getData());
})


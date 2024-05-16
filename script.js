let number = 10;
if (number<50) {
    console.log("<50");
} else if (number>20) {
    console.log(">20");
} else {
    console.log("error");
}

let text = "mariam";
if (text=="mariam") {
    console.log("true");
} else {
    console.log("false");
}

switch ("mariam") {
    case "mariam":
        console.log("true");
        break;

    default:
        console.log("false");
        break;
}
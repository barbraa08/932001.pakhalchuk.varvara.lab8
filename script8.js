let line = document.querySelector(".line").cloneNode(true);
function MoveUp(pointer) {
    previous = pointer.parentElement.previousElementSibling;
    if (previous) pointer.parentElement.after(previous);
}
function MoveDown(pointer) {
    next = pointer.parentElement.nextElementSibling;
    if (next) pointer.parentElement.before(next);
}
function RemoveLine(pointer) {
    pointer.parentElement.remove();
}
function AddLine(num) {
    document.querySelector(".list").append(line.cloneNode(true));
}
function GetJSON() {
    Mass = document.getElementsByClassName("line");
    JSON_string = "";
    for (let item of Mass) {
        fields = item.getElementsByTagName("input");
        JSON_string += `"${fields[0].value}":"${fields[1].value}",`;
    }
    document.querySelector(".output").innerHTML = `{${JSON_string.slice(0, -1)}}`;
}
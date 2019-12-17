let mode = "grid";
const listView = document.getElementById("list-view");
const gridView = document.getElementById("grid-view");

setTimeout(() => {
    gridView.classList.add("hide");
}, 100);

function changeView(view) {
    mode = view;
    if (mode === "grid") {
        listView.classList.add("hide");
        gridView.classList.remove("hide");
    }
    if (mode === "list") {
        listView.classList.remove("hide");
        gridView.classList.add("hide");
    }
}
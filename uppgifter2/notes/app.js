const txtTitle = document.querySelector("#txtTitle");
const txtText = document.querySelector("#txtText");
const btnAddItem = document.querySelector("#btnAddItem");
const btnRemoveAll = document.querySelector("#btnRemoveAll");

let btnRemoveItem = document.querySelector(".btnRemoveItem");

btnAddItem.addEventListener("click", () => {
    let items = GetItems();

    AddItem(txtTitle.value, txtText.value, items);
    ListItems("items");
});

btnRemoveAll.addEventListener("click", () => {
    console.log("HMMM");
    localStorage.clear();
    let items = GetItems();
    ListItems("items");
});

function ListItems(printBoxId){
    let items = GetItems();

    let itemBox = document.querySelector("#" + printBoxId);
    itemBox.innerHTML = "";

    for(i = 0; i < items.length; i++){
        let mainNode = document.createElement("div");
        mainNode.className = "item";

        let node = document.createElement("div");
        node.className = "itemInfo";

        let nodeTitle = document.createElement("h3");
        nodeTitle.className = "lblTitle";
        nodeTitle.innerText = items[i].title;
        node.appendChild(nodeTitle);

        let nodeText = document.createElement("p");
        nodeText.className = "lblText";
        nodeText.innerText = items[i].text;
        node.appendChild(nodeText);

        let nodeDate = document.createElement("p");
        nodeDate.className = "lblDate";
        nodeDate.innerText = items[i].date;
        node.appendChild(nodeDate);

        mainNode.appendChild(node);


        node = document.createElement("div");
        node.className = "itemFunctions";

        let nodeRemoveItem = document.createElement("button");
        nodeRemoveItem.className = "btnRemoveItem";
        nodeRemoveItem.innerText = "🗑️";
        nodeRemoveItem.setAttribute("onclick", "RemoveItem('" + i + "');");
        node.appendChild(nodeRemoveItem);

        let nodeEditItem = document.createElement("button");
        nodeEditItem.className = "btnEditItem";
        nodeEditItem.innerText = "✎";
        nodeEditItem.setAttribute("onclick", "EditItem('" + i + "');");
        node.appendChild(nodeEditItem);

        mainNode.appendChild(node);
        itemBox.appendChild(mainNode);
    }
    btnRemoveItem = document.querySelector(".btnRemoveItem");

    console.log(items);
} 

ListItems("items");

function AddItem(title, text){
    let items = GetItems();

    let d = new Date();

    let item = {
        "title":title,
        "text":text,
        "date": d.getDate().toString() + "/" + (d.getMonth() + 1).toString() + "/" + d.getFullYear().toString()
    };

    items.push(item);
    SetItems(items);
}

function SetItems(items){
    localStorage.setItem("notes", JSON.stringify(items));
}
function GetItems(){
    let items = JSON.parse(localStorage.getItem("notes"));
    if (items == null){
        items = [];
    }
    return items;
}

function RemoveItem(index){
    let items = GetItems();

    items.splice(index, 1);

    SetItems(items);

    ListItems("items");
}

function EditItem(index){
    let d = new Date();

    let items = GetItems();

    items[index].title = prompt("Title:");
    items[index].text = prompt("Text:");
    items[index].date = d.getDate().toString() + "/" + (d.getMonth() + 1).toString() + "/" + d.getFullYear().toString();

    SetItems(items);
    ListItems("items");
}

ListItems("items");
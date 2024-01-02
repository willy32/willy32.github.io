const frmAddUser = document.getElementById("frmAddUser");
frmAddUser.addEventListener("submit", (e) => {
    e.preventDefault();

    add(
        frmAddUser.elements["txtAddUsername"].value,
        frmAddUser.elements["txtAddEmail"].value,
        frmAddUser.elements["txtAddPassword"].value
    );
});

async function remove(id){
    console.log(id);

    const res = await fetch(`/notes/delete.php?id=${id}`, {method:"POST"});
    const data = await res.json();
    console.log(data);

    document.querySelector("main").removeChild(document.getElementById(data["id"]));
}

async function add(username, email, password){
    const res = await fetch(`/notes/insert.php?username=${username}&email=${email}&password=${password}`, {method:"POST"});
    const data = await res.json();
    console.log(data);

    document.querySelector("main").innerHTML += `
    <div class="container" id="a${data["id"]}">
        <p>${data["username"]}</p>
        <p>${data["email"]}</p>
        <button type="submit" onclick="remove(${data["id"]});">Delete</button>
        <button type="submit" onclick="edit(${data["id"]});">Edit</button>
    </div>
    `;
}

async function edit(id){
    const [username, email, password] = [frmAddUser.elements["txtAddUsername"].value, frmAddUser.elements["txtAddEmail"].value, frmAddUser.elements["txtAddPassword"].value]

    const res = await fetch(`/notes/update.php?id=${id}&username=${username}&email=${email}&password=${password}`, {method:"POST"});
    const data = await res.json();
    console.log(data);

    document.querySelector("#a" + data["id"]).querySelector("p").innerText = data["username"];
    document.querySelector("#a" + data["id"]).querySelector("p + p").innerText = data["email"];
}






//<3
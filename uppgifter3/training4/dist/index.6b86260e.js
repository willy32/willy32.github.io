let postList = document.getElementById("postList");
let modal = document.getElementById("modal");
fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((data)=>{
    console.log(data);
    data.forEach((post, index)=>{
        postList.innerHTML += `
        <div class="post" onclick="OpenPost(${index + 1})">
            <h3>${post["title"]}</h3>
            <h4>${post["body"]}</h4>
        </div>
        `;
    });
});
function OpenPost(num) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + num.toString()).then((response)=>response.json()).then((data)=>{
        console.log(data);
        modal.innerHTML = `
        <div class="post">
            <h3>${data["title"]}</h3>
            <h4>${data["body"]}</h4>
        </div>
        `;
        modal.style.display = "flex";
    });
}

//# sourceMappingURL=index.6b86260e.js.map

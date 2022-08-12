let postList:HTMLElement = document.getElementById("postList");
let modal:HTMLElement = document.getElementById("modal");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((post:any, index:number) => {
        postList.innerHTML += `
        <div class="post" onclick="OpenPost(${index + 1})">
            <h3>${post["title"]}</h3>
            <h4>${post["body"]}</h4>
        </div>
        `;
    });
});

function OpenPost(num:number):void{
    fetch('https://jsonplaceholder.typicode.com/posts/' + num.toString())
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        modal.innerHTML = `
        <div class="post">
            <h3>${data["title"]}</h3>
            <h4>${data["body"]}</h4>
        </div>
        `;
        modal.style.display = 'flex';
    });
}
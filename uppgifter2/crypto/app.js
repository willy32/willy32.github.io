const lblValue = document.getElementById("value");
let pastvalue = 0;
let pastvalues = [];

function NumberParser(number){
    let stringedNum = Math.floor(number).toString();
    let arrayedNum = stringedNum.split('');

    let whitespaces = Math.floor(stringedNum.length / 3);

    for(let i = 1; i < whitespaces + 1; i++){
        arrayedNum.splice(arrayedNum.length - 3 * i, 0, ' ');
    }

    return arrayedNum.join("") + "." + number.toString().split('.')[1];
}


const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC'],
        datasets: [{
            label: 'BTC',
            data: pastvalues,
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)'

            ],
            borderColor: [
                'rgba(54, 162, 235, 0.8)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});


setInterval(FetchPrice, 2000);
async function FetchPrice(){
    const res = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=BTCUSDT");
    const data = await res.json();
    console.log(data);

    lblValue.innerText = " $" + NumberParser(data.lastPrice);

    if(pastvalue <= data.lastPrice){
        lblValue.className = "green";
        lblValue.innerText += "  ▲"
    }else{
        lblValue.className = "red";
        lblValue.innerText += "  ▼"
    }
    pastvalue = data.lastPrice;
    if(pastvalues.length >= 20) pastvalues.shift();
    pastvalues.push(data.lastPrice);
    
    ctx.clearRect(0, 0, 600, 400);
    
    myChart.data.datasets[0].data = pastvalues;
    console.log(myChart.data.datasets[0].data);
    myChart.update();
}
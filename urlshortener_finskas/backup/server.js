const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("./public/"));
app.use(express.json());

let cleanUrlJson;

// getUTCTime is used to get the UTC time in milliseconds (Same as Date().getTime() but reutrns the UTC time instead of local time).
const getUTCTime = (year=undefined, monthIndex=undefined, date=0, hours=0, minutes=0, seconds=0, ms=0) => {
    let currentDate = new Date();
    let resultDate;
    if(year && monthIndex){
        let tempDate = new Date(year, monthIndex, date, hours, minutes, seconds, ms);
        resultDate = new Date(tempDate.getUTCFullYear(), tempDate.getUTCMonth(), tempDate.getUTCDate(), tempDate.getUTCHours(), tempDate.getUTCMinutes(), tempDate.getUTCSeconds(), tempDate.getUTCMilliseconds());
    }
    else {
        resultDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds(), currentDate.getUTCMilliseconds());
    } 
    return resultDate.getTime();
};

// sortUrlJson is used to remove expired URLs and sort them in descending order. It also saves the changes to the url.json file and saves it to cleanUrlJson array. 
const sortUrlJson = () => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));
    const currentTimeMS = getUTCTime();

    cleanUrlJson = urlJson.filter((a) => 
        a.expireDate > currentTimeMS
    );

    cleanUrlJson.sort((a, b) => b.expireDate - a.expireDate);

    fs.writeFileSync("./url.json", JSON.stringify(cleanUrlJson));
};

// sortUrlJson is called to get data for the cleanUrlJson array. 
sortUrlJson();

const generateUrlId = (urlIdLength, urlIdChars = "qwertyuiopasdfghjklzxcvbnm1234567890") => {
    let urlId = "";
    for(let i = 0; i < urlIdLength; i++){
        urlId += urlIdChars[Math.floor(Math.random() * urlIdChars.length)];
    }
    return urlId;
}

// Adds the URL to the url.json file and sorts the cleanUrlJson array.
const addURL = (urlId, expireDate, file, comment = "") => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));

    urlJson.push({urlId: urlId, expireDate: expireDate, file: file, comment: comment, viewAmout: 0});
    fs.writeFileSync("./url.json", JSON.stringify(urlJson));
    // sortUrlJson is used to sort the new changes correctly and update the cleanUrlJson array. 
    sortUrlJson();
};

// Deletes the URL with urlId from the url.json file and sorts the cleanUrlJson array.
const deleteURL = (urlId) => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));

    // Loops through url.json until it finds the urlId and removes it
    urlJson.forEach((data, index) => {
        if(data.urlId === urlId) {
            urlJson.splice(index, 1);
            fs.writeFileSync("./url.json", JSON.stringify(urlJson));
            sortUrlJson();
        }
    });
};

// Runs sortUrlJson every minute to check if urls have expired.
setInterval(sortUrlJson, 60 * 1000);

// Handles the GET request for urlIds and sends back the right HTML file.
app.get("/url/:urlId", (req, res) => {
    // Loops through all the cleanUrlJson array and checks if the urlId matches any of them, if so it sends out the HTML file.
    cleanUrlJson.forEach(data => {
        if(data.urlId === req.params.urlId){
            res.sendFile(__dirname + "/" + data.file);
            data.viewAmout += 1;
        }
    });
    fs.writeFileSync("./url.json", JSON.stringify(cleanUrlJson));
});

// Handles the POST request for adding a new URL.
app.post("/addURL", (req, res) => {
    const urlId = generateUrlId(10);
    const expireDate = req.body.expireDate;
    const file = req.body.path;
    const comment = req.body.comment;

    addURL(urlId, expireDate, file, comment);

    res.json({done: true});
});

// Sends back the cleanUrlJson array.
app.get("/getAllUrls", (req, res) => {
    res.json(cleanUrlJson);
});

// Handles the DELETE request for deleting a specific urlId.
app.delete("/deleteURL", (req, res) => {
    const urlId = req.body.urlId;
    deleteURL(urlId);

    res.json({done: true});
});

// Handles the DELETE request for deleting all URLs and deletes all URLs.
app.delete("/deleteAllURL", (req, res) => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));
    urlJson = [];

    fs.writeFileSync("./url.json", JSON.stringify(urlJson));
    sortUrlJson();
    res.json({done: true});
});

app.listen(3000, () => console.log("Listening on port 3000"));
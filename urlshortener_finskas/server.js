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
    let viewsArr = JSON.parse(fs.readFileSync("./views.json"));
    const currentTimeMS = new Date().getTime();


    // Removes expired urls.
    /*cleanUrlJson = urlJson.filter((a) =>
        a.expireDate > currentTimeMS
    );*/
    // Makes expired urls inactive.
    urlJson.forEach((url) => {
        if(url.expireDate > currentTimeMS) url["active"] = true;
        else url["active"] = false;
    });
    cleanUrlJson = urlJson;

    let cleanViewsArr = viewsArr.filter((a) => (
        JSON.stringify(cleanUrlJson).includes(a.urlId)
    ));

    cleanUrlJson.sort((a, b) => b.expireDate - a.expireDate);


    fs.writeFileSync("./url.json", JSON.stringify(cleanUrlJson));
    fs.writeFileSync("./views.json", JSON.stringify(cleanViewsArr));
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
const addURL = (urlId, expireDate, file, comment = "", email = "") => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));

    const currentTime = new Date().getTime();

    urlJson.push({urlId: urlId, expireDate: (currentTime + expireDate), file: file, comment: comment, email: email, viewAmout: 0, active: true});
    fs.writeFileSync("./url.json", JSON.stringify(urlJson));
    // sortUrlJson is used to sort the new changes correctly and update the cleanUrlJson array.
    sortUrlJson();
};

// Edits the URL and saves it to the url.json file and sorts the cleanUrlJson array.
const editURL = (urlId, expireDate, file, comment = "", email = "") => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));

    const currentTime = new Date().getTime();

    urlJson.forEach(data => {
        if(data.urlId === urlId){
            data.expireDate = (currentTime + expireDate);
            data.file = file;
            data.comment = comment;
            data.email = email;
        }
    });

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
            let viewsArr = JSON.parse(fs.readFileSync("./views.json"));
            viewsArr.forEach((viewUrl, viewUrlIndex) => {
                if(urlId === viewUrl.urlId){
                    viewsArr.splice(viewUrlIndex, 1);
                    return;
                }
            });
            fs.writeFileSync("./views.json", JSON.stringify(viewsArr));
            urlJson.splice(index, 1);
            fs.writeFileSync("./url.json", JSON.stringify(urlJson));
            sortUrlJson();
        }
    });
};

// Resets the viewAmount for the URL with the right urlId and sorts the cleanUrlJson array.
const resetViews = (urlId) => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));

    // Loops through url.json until it finds the urlId and removes it
    urlJson.forEach((data) => {
        if(data.urlId === urlId) {
            data.viewAmout = 0;
            let viewsArr = JSON.parse(fs.readFileSync("./views.json"));
            viewsArr.forEach(viewUrl => {
                if(urlId === viewUrl.urlId){
                    viewUrl.views = [];
                    return;
                }
            });
            fs.writeFileSync("./views.json", JSON.stringify(viewsArr));
            fs.writeFileSync("./url.json", JSON.stringify(urlJson));
            sortUrlJson();
        }
    });
};

// setTimeout is used to make the setInterval run a second after something might have expired.
// Ex. Current Time is 12:29:30, it waits for 30 seconds before running the code so it runs on 12:30:00.
setTimeout(() => {
    // Runs sortUrlJson every minute to check if urls have expired.
    setInterval(sortUrlJson, 60 * 1000);
}, (61 - (new Date().getSeconds())) * 1000);

// Handles the GET request for urlIds and sends back the right HTML file.
app.get("/url/:urlId", (req, res) => {
    // Loops through all the cleanUrlJson array and checks if the urlId matches any of them, if so it sends out the HTML file.
    let validUrlId = false;
    cleanUrlJson.forEach(data => {
        if(data.urlId === req.params.urlId && data.active){
            validUrlId = true;
            res.sendFile(__dirname + "/" + data.file);
            data.viewAmout += 1;

            // Handles tracking for each request to the urlId.
            let viewsArr = JSON.parse(fs.readFileSync("./views.json"));
            let found = false;
            viewsArr.forEach(viewUrl => {
                if(req.params.urlId === viewUrl.urlId){
                    found = true;
                    viewUrl.views.push({view: data.viewAmout, time: new Date().getTime()});
                    return;
                }
            });
            if(!found) viewsArr.push({
                urlId: req.params.urlId,
                views: [
                    {
                        view: data.viewAmout,
                        time: new Date().getTime()
                    }
                ]
            });
            fs.writeFileSync("./views.json", JSON.stringify(viewsArr));
        }
    });
    if(!validUrlId) res.sendFile(__dirname + "/pageNotFound.html");
    fs.writeFileSync("./url.json", JSON.stringify(cleanUrlJson));
});

// Handles the GET request for urlIds and sends back the right HTML file.
app.get("/getViews/:urlId", (req, res) => {
    const urlId = req.params.urlId;
    let viewsArr = JSON.parse(fs.readFileSync("./views.json"));
    let found = false;
    viewsArr.forEach(viewUrl => {
        if(urlId === viewUrl.urlId){
            res.json(viewUrl);
            found = true;
            return;
        }
    });
    if(!found) res.json([]);
});

// Handles the POST request for adding a new URL.
app.post("/addURL", (req, res) => {
    const urlId = generateUrlId(10);
    const expireDate = req.body.expireDate;
    const file = req.body.path;
    const comment = req.body.comment;
    const email = req.body.email;

    addURL(urlId, expireDate, file, comment, email);

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

// Handles the PUT request for reseting viewAmount.
app.put("/resetViews", (req, res) => {
    const urlId = req.body.urlId;
    resetViews(urlId);

    res.json({done: true});
});

// Handles the DELETE request for deleting all URLs and deletes all URLs.
app.delete("/deleteAllURL", (req, res) => {
    let urlJson = JSON.parse(fs.readFileSync("./url.json"));
    urlJson = [];

    fs.writeFileSync("./url.json", JSON.stringify(urlJson));
    fs.writeFileSync("./views.json", "[]");
    sortUrlJson();
    res.json({done: true});
});

// Handles the PUT request for editing URLs with a specific urlId.
app.put("/editURL", (req, res) => {
    editURL(req.body.urlId, req.body.expireDate, req.body.path, req.body.comment, req.body.email);

    res.json({done: true});
});

// Handles the GET request for sending out the premade e-mail address.
app.get("/getEmail", (req, res) => {
    const url = req.headers.referer;
    const urlId = url.slice(url.indexOf("/url/") + 5, url.includes("?", url.indexOf("/url/") + 5) ? url.indexOf("?") : undefined);
    cleanUrlJson.forEach(data => {
        if(data.urlId === urlId){
            res.json({email: data.email});
        }
    });
});

app.listen(3000, () => console.log("Listening on port 3000"));
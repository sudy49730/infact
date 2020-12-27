const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
var formidable = require('formidable');
const PORT = 3000;
const FACTS_FILE_NAME = "facts.json";

app.use(cors());
app.use(express.static('factImages'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/facts', (req, res) => {
    fs.readFile(FACTS_FILE_NAME, (err, data) => {
        if (err)
            res.end("400");
        else {
            console.log(JSON.parse(data));
            res.send(JSON.parse(data));
            res.end("200");
        }
    })
})

// app.post('/facts', (req, res) => {
//     fs.access(FACTS_FILE_NAME, (err) => {
//         if (err) {
//             fs.writeFile(FACTS_FILE_NAME, JSON.stringify([req.body]), (err) => {
//                 if (err)
//                     res.end("400");
//                 else
//                     res.end("200");
//             });
//         }
//         else {
//             let facts = require("./" + FACTS_FILE_NAME);
//             facts.push(req.body);
//             fs.writeFile(FACTS_FILE_NAME, JSON.stringify(facts), (err) => {
//                 if (err)
//                     res.end("400");
//                 else
//                     res.end("200");
//             });
//         }
//     });
// })

app.get('/clearall', (req, res) => {
    fs.unlink(FACTS_FILE_NAME, (err) => {
        if (err)
            res.end("400");
        else
            res.end("200");
    })
})

app.get('/portal', (req, res) => {
    res.sendFile('portal.html', { root: __dirname });
})

app.post('/savefact', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.factimage.path;
        var newpath = __dirname + "/factImages/" + files.factimage.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            let facts = require("./" + FACTS_FILE_NAME);
            let fact = {
                "imageUrl": "http://192.168.43.27:3000/" + files.factimage.name,
                "fact": fields.factdescription
            }
            facts.push(fact);
            fs.writeFile(FACTS_FILE_NAME, JSON.stringify(facts), (err) => {
                if (err)
                    res.end("400");
                else
                    res.end("200");
            });
            res.write('File uploaded and moved!');
            res.end();
        });
    })
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
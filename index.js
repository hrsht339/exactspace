const express = require("express")
const cors = require("cors");
const path = require("path");
const app = express()
app.use(cors());

app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend.html"));
});


app.post("/",(req,res)=>{
  console.log(req.body)
    if (req.is('json') && Object.keys(req.body).length != 0) {
        res.send(true);
      } else {
        res.send(false);
      }
})


app.listen(3000,()=>{
    console.log("server up")
})
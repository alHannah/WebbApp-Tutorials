import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Node Express</h1>");
})

// app.get("/about", (req, res) => {
//     res.redirect('www.google.com');
// })

// app.get("/contact", (req, res) => {
//     res.redirect('/contact');
// })

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
})
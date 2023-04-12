var express = require('express');
var bodyParser = require('body-parser');
const port = process.env.PORT||3000;
var app = express();
var path = require('path');
var topic = ""

var title = ['Day1', 'Day2','Day3','Day4'];
var entry = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat cum accusantium molestiae aliquid ipsam vitae, maiores minus ratione error voluptas quo perferendis assumenda et, veritatis excepturi laborum repellat voluptatem fugit mollitia quidem ea? Magni, a veniam. Eveniet odit inventore quasi eos dolore tempora. Expedita, ab culpa quis alias molestias numquam a, delectus rem cumque nostrum nesciunt vero dolore dicta ipsa quibusdam blanditiis earum nisi. Enim, exercitationem nobis. Libero, sed?','Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat cum accusantium molestiae aliquid ipsam vitae, maiores minus ratione error voluptas quo perferendis assumenda et, veritatis excepturi laborum repellat voluptatem fugit mollitia quidem ea? Magni, a veniam. Eveniet odit inventore quasi eos dolore tempora. Expedita, ab culpa quis alias molestias numquam a, delectus rem cumque nostrum nesciunt vero dolore dicta ipsa quibusdam blanditiis earum nisi. Enim, exercitationem nobis. Libero, sed?','Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat cum accusantium molestiae aliquid ipsam vitae, maiores minus ratione error voluptas quo perferendis assumenda et, veritatis excepturi laborum repellat voluptatem fugit mollitia quidem ea? Magni, a veniam. Eveniet odit inventore quasi eos dolore tempora. Expedita, ab culpa quis alias molestias numquam a, delectus rem cumque nostrum nesciunt vero dolore dicta ipsa quibusdam blanditiis earum nisi. Enim, exercitationem nobis. Libero, sed?','Day4'];

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('home', {title : title, entry:entry});
})

app.post('/', (req,res)=>{
    let newTitle = req.body.title;
    let newEntry = req.body.entryData;
    title.push(newTitle);
    entry.push(newEntry);
    res.redirect('/');
})
app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})
app.get('/compose',(req,res)=>{
    res.render('compose');
})


app.post(`/posts`,(req,res)=>{
    topic = req.body.ReadMore;
    res.redirect(`/posts/${topic}`);
});

app.get(`/posts/:topic`, (req,res) => {
    var i;
    for(i = 0 ; i < title.length; i++){
        if(title[i] == topic)
        break;
    }
    res.render('postPage', {title:title[i], entry: entry[i]});
})

app.listen(port,() =>{
    console.log("App is Listening on port " + port);
});
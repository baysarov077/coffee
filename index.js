const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3050

mongoose.connect('mongodb+srv://baysarov077:Avenger95@cluster0.9anwb.mongodb.net/coffemania?retryWrites=true&w=majority').then(() => console.log('Сервер успешно запущен'))
    .catch(() => console.log('не удалось запустить сервер'))

app.use(express.json())
app.listen(port, () => console.log('Соединение...'))
app.get('/', (req, res) => console.log('Hello'))

app.use(require('./routes/coffee.route'))
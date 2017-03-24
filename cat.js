const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

// app.get('/', ({url, headers}, res) => {
//     res.send('index.html')
// })

app.get('/monkeys', (req, res, next) => {
	// res.send(__dirname + '/monkeys.html')
	res.sendFile(__dirname + '/public/monkeys.html')
})

app.get('/chickens', (req, res, next) => {
	res.send('<h3>No Chickens</h3><form method="POST"><input type="text" /><button type="submit">Submit</button></form>')
})

app.post('/chickens', (req, res, next) => {
	console.log('Posting a form for chickens')
})

app.use((req, res, next) => {
	res.send('<h1>Nothing Here</h1>')
})

app.listen(8080, () => {
	console.log('catServer')
})

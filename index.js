const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routers');

const app = express();
app.use(bodyParser.json());

app.use('/user', router.user);
app.use('/login', router.login);
app.use('/categories', router.category);
app.use('/post', router.post);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

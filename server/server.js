let http = require('http');
let url = require('url');

let server = http.createServer();
let login = {};

let banksList =  [
  {
    bankId: 1,
    bankName: 'Альфа-банк'
  }, {
    bankId: 2,
    bankName: 'ВТБ'
  }, {
    bankId: 3,
    bankName: 'Сбербанк'
  }, {
    bankId: 4,
    bankName: 'ЮГРА'
  }, {
    bankId: 5,
    bankName: 'Открытие'
  }
]

let transactionsList = [
];

const store = {
  login,
  banksList,
  transactionsList
};

server.on('request', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  let urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname == '/dataRequest') {
    console.log(store);
    res.end(JSON.stringify(store));

  } else if (urlParsed.pathname == '/sendData') {

    let data = '';
    req.on('data', function(chunk) {
      data += chunk.toString();
    });

    req.on('end', function() {
      let newData = JSON.parse(data);
      store.transactionsList.push(newData);

    });

    res.end(JSON.stringify(store));

  } else if (urlParsed.pathname == '/sendLogin') {

    let data = '';
    req.on('data', function(chunk) {
      data += chunk.toString();
    });

    req.on('end', function() {
      let newData = JSON.parse(data);
      store.login={...newData};
      console.log('login ', store);
    });

    res.end(JSON.stringify(store));

  } else if (urlParsed.pathname == '/deleteRow') {

    let data = '';
    req.on('data', function(chunk) {
      data += chunk.toString();
    });

    req.on('end', function() {
      let newData = JSON.parse(data);
      store.transactionsList = store.transactionsList.filter(item => (item.transactionId !== newData.transactionId));
      console.log('store ' , store);
    });

    res.end(JSON.stringify(store));

  } else {
    res.statusCode = 404; // Not Found
    res.end("Page not found");
  }
});

server.listen(1337);

// *************************************************************************
const express = require('express');
const app = express();
const port = 3000;

const os = require('os');

// Get network interfaces information
var ip =''
ip = os.networkInterfaces();

// Access the desired value (IPv4 address in this case)
const ipv4Address = ip['Ethernet'][1]['address'];
console.log("IPv4 Address:", ipv4Address);

// Hostname
const hostname = os.hostname()
console.log("Hostname:",os.hostname()) 

// User Name
const username = os.userInfo()
console.log(os.userInfo())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/ip', (req, res) => {
  res.send(ipv4Address);
});
app.get('/name', (req, res) => {
  res.send(username.username);
});
app.get('/host', (req, res) => {
  res.send(hostname);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

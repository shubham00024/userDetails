// *************************************************************************
const express = require('express');
const app = express();
const port = 3000;

const os = require('os');

// Get network interfaces information
var ip = os.networkInterfaces();

if (ip && ip['Ethernet'] && ip['Ethernet'][1] && ip['Ethernet'][1]['address']) {
  const ipv4Address = ip['Ethernet'][1]['address'];
  console.log("IPv4 Address:", ipv4Address);
} else {
  console.error("Unable to find the IPv4 address for the Ethernet interface.");
}

/// Hostname
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

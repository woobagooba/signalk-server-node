#!/usr/bin/env node

var nano = require('nanomsg');
var addr = 'tcp://127.0.0.1:7789'

var sub = nano.socket('sub');
sub.connect(addr);

sub.on('message', function (buf) {
  console.log(buf.toString());
});
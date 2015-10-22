# tessel-watcher
Tessel app that detects motion in the environment and emails a notification

## requirements

* [Tessel](http://www.tessel.io)
* [Mailgun API key](https://www.mailgun.com)
* [PIR sensor](https://www.adafruit.com/products/189)

## usage

Node modules are included in this repo already.

Take the `config-sample.js` file and rename it to `config.js`, insert your own Mailgun API key, and email you want Tessel to send to, and you're good to go!
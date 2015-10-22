var tessel 	= require('tessel'),
	pir    	= require('../').use(tessel.port['GPIO'].pin['G3']),
	config 	= require('./config')
	mail	= require('mailgun-send');

mail.config({
  key: config.key,
  sender: 'tessel-watcher@myapp.com'
});

pir.on('ready', function (pir) {
  console.log('Ready');

  pir.on('movement', function (time) {
    console.log('Something moved! Time ' + time);

    var msg = {
	    subject: 'Sensor activated',
	    recipient: config.email,
	    body: 'Sensor activated at ' + time + '!!';
	};

	mail.send(msg);

  });

  pir.on('stillness', function (time) {
    console.log('All is still. Time ' + time);
  });

});

pir.on('error', function (err) {
  console.log(err);
});
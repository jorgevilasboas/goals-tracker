const express = require('express'),
      app = express(),
      port = Number(process.env.PORT || 8080);

app.get('/', (req,res) =>{
  res.send('Our first route is working.:)');	
});

app.listen(port, ()=>{
	console.log('Listening on port' + port);
});
module.exports = function(app) {

app.get('/api/:friends?', function(req, res){
  console.log(req.params.friends);

  

});

};
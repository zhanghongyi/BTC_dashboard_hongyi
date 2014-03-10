var fs = require('fs');
/*
 * GET home page.
 */
exports.index = function(req, res){

	res.render('index', { title: 'BTC_dashboard' });

};

FileData= '';
exports.api= function(req, res){
  	fs.readFile('data/data.json', function (err, data) {
        if (err) throw err;
        //console.log("File:"+data);
        FileData=data;
    });
    console.log("Filedata"+FileData);
    res.send(FileData);
};
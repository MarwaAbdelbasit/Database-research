var express = require('express');
var router = express.Router();
var conn = require('../dbConn.js');

router.post('/customer', function(req, res){
    var body = req.body;
    var query = 'INSERT INTO `customer` (`first name`, `last name`, `Address`,\
                                         `city`, `customer id`, `employee id`) VALUES ("'+
                                        body.fname + '","' +
                                        body.lname + '","' +
                                        body.add + '","' +
                                        body.city + '","' +
                                        body.custId + '","' +
                                        body.empId + '")';
                                        
    conn.query(query, function(err, result, fields){
        if(err) res.send(err);
        else res.send(body);
    });   
});

module.exports = router;
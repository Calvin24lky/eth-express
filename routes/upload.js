var fs = require('fs');
var express = require('express');
var multer  = require('multer');
var path = require('path');
var router = express.Router();

var crypto = require('crypto'); // 调用crypto模块

var upload = multer({dest: 'upload_tmp/'});

router.post('/', upload.any(), function(req, res, next) {
    console.log(req.files[0]);  // 上传的文件信息

    var des_file = "./upload_tmp/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                var hmac = crypto.createHmac('md5','key');
                hmac.update(data);
                var hamcmsg = hmac.digest('hex');
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname,
                    hash:hamcmsg
                };
                console.log( response );
                res.end( JSON.stringify( response ) );
            }
        });
    });
});

module.exports = router;
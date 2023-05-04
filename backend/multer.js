const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, "uploads/");
    },
    filename: function (req,file,cb) {
        console.log('file',file)
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        console.log('filename',filename)
        cb(null,filename + "-" + uniqueSuffix + ".png");
    },
});

exports.upload = multer({storage: storage});
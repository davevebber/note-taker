let path = require('path');
let router = require('express').Router();

router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname,'../Develop/public/notes.html'));
});

module.exports = router;
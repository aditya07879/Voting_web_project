const express = require('express');
const router = express.Router();
const Admin = require('../Controllers/admin.controller');

// show form
router.get('/elections/new', (req, res) => {
    res.render('create-election');
});

// create election
router.post('/elections', Admin.createElection);

// delete
router.delete('/elections/:id', Admin.deleteElection);

// update
router.put('/elections/:id', Admin.updateElection);

module.exports = router;

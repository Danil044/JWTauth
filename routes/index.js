const express = require('express');
const router = express.Router();

const uCreate = require('./../controller/user/create')
const uLogin = require('./../controller/user/login')
const uRefresh = require('./../controllers/user/refresh')


router.post('/create', uCreate.tryUserCreate);
router.post('/login', uLogin.tryLogin);
router.post('/refresh', uRefresh.refresh);


module.exports = router;

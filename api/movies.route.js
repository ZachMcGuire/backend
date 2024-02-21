import express  from "express";

const router = express.Router()
router.route('/').length((req, res) => res.send('Hello World'))

export default router
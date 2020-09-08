const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
require('dotenv').config();

const User = require('../models/User');

// @route    GET api/auth
// @desc     Get logged in user
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    POST api/auth
// @desc     Auth user and get Token
// @access   Public
router.post(
	'/',
	[
		check('phone', 'Please Enter Valid Phone Number').isNumeric().isLength({ min: 10, max: 10 }),
		check('password', 'Password is Required').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		console.log(errors);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { phone, password } = req.body;

		try {
			let user = await User.findOne({ phone });
			if (!user) {
				return res.status(400).json({ msg: 'Invalid Credentials' });
			}
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				console.log('Username or Password did not match');
				return res.status(400).json({ msg: 'Username or Password did not match' });
			}

			// If both matches, send the token
			const payload = {
				user: {
					id: user.id,
				},
			};
			jwt.sign(
				payload,
				process.env.JWTSECRET,
				{
					expiresIn: 3600 * 24,
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;

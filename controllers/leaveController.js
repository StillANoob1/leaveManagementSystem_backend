const Leave = require('../models/leaveModel');
const User = require('../models/userModel');


exports.createLeave = async (req, res) => {
    const { username, department, leaveType, duration } = req.body;
    try {
        if (leaveType !== 'casual' && leaveType !== 'sick') {
            return res.status(400).json({ message: 'Invalid leave type' });
          }
          
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (duration > user[`${leaveType}Leaves`]) {
            return res.status(400).json({ message: `Insufficient ${leaveType} leaves` });
        }

        user[`${leaveType}Leaves`] -= duration;

        await user.save();

        const leave = new Leave({
            username,
            department,
            leaveType,
            duration,
        });

        await leave.save();

        res.status(201).json({
            message: 'Leave application created successfully',
            leave,
            user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

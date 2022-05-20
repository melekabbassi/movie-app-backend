const User = require('../models/User');

exports.register = async (req, res) => {
    console.log(req.body);
    try {
        const user = new User(req.body);
        await user.save();
        res.send({ data: user });
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).send("User not found");
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            res.status(401).send("Invalid password");
        }
        res.send({ data: user });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.findUser = async (req, res) => {
    try {
        const user = await User.findById( req.params.id );
        res.send({ data: user });
    } catch {
        res.status(404).send("User not found");
    }
};

exports.updateUser = async (req, res) => {
    const user = await User.findById( req.params.id );
    try {
        Object.assign(user, req.body);
        await user.save();
        res.send({ data: user });
    } catch {
        res.status(404).send("User not found");
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById( req.params.id );
        await user.remove();
        res.send({ data: true });
    } catch {
        res.status(404).send("User not found");
    }
}


exports.findUsers = async (req, res) => {
    const users = await User.find();
    res.send({ data: users });
}


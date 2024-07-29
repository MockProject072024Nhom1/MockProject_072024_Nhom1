const User = require('../model/userModel')
const bcrypt = require("bcrypt")

const createUser = async (newUser) => {
    const { name, email, password, confirmPassword } = newUser;
    try {
        const checkUser = await User.findOne({ email });

        if (checkUser) {
            return {
                status: 'ERR',
                message: 'This email is already registered'
            };
        }
        if (password !== confirmPassword) {
            return {
                status: 'ERR',
                message: 'Passwords do not match'
            };
        }
        const hash = bcrypt.hashSync(password, 10);
        const result = await User.create({
            name,
            email,
            password: hash,
        });
        return {
            status: 'OK',
            message: 'User created successfully',
            data: result
        };
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (userLogin) => {
    const { email, password } = userLogin;
    try {l
        const checkUser = await User.findOne({ email: email })
        if (!checkUser) {
            return {
                status: 'ERR',
                message: 'The user is not defined'
            };
        }
        const comparePassword = bcrypt.compareSync(password, checkUser.password);
        if (!comparePassword) {
            return {
                status: 'ERR',
                message: 'The password or user is incorrect'
            };
        }
        return {
            status: 'OK',
            message: 'SUCCESS'
        };

    } catch (e) {
        console.log(e)
    }
}


module.exports={createUser,loginUser}
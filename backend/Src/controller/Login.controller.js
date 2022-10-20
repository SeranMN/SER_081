const User = require('../modal/login');
const jwt = require('jsonwebtoken')

//Add project

const addUser = async (req, res) => {
    if (req.body) {
        const user = new User(req.body)
        await user.save()
            .then((data) => { res.status(200).send({ data: data }) })
            .catch((err) => { res.status(500).send(err) });
    }
};

const getAllUsers = async (req, res) => {
    await User.find()
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        });

}

const updateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.status(500).send(err) });
}

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send('Successfully Deleted'))
        .catch((err) => { res.status(500).send(err) })
}

const findUserByEmail = async (req, res) => {
    await User.findOne({email:req.params.id})
        .then((data) => {
            if (data) {
                console.log(req)
                if (req.body.password == data.password) {
                    
                    const token = jwt.sign(data.email, "secret")
                    res.header('auth-token', token).send({
                        "email": data.email,
                        "role": data.role
                    }) 
                }
                else {
                    res.send('Invalid')
                }
                
            } else {
                res.send('Invalid')
            }
        })
        .catch((err) => { res.status(400).send(err) })
    
}
module.exports = {
    addUser,
    getAllUsers,
    updateUser,
    deleteUser,
   findUserByEmail
}
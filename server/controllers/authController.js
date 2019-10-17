const bcrypt = require('bcryptjs');

module.exports = {
    register: ( req, res) => {
        // get username password and email off the body
        const { new_username, new_password, new_email } = req.body
        console.log(req.body)
        //check to make sure username is not taken
        const db = req.app.get('db')
        db.verifyUser([new_username]).then(usersList => {
            if(usersList.length > 0) {
                res.status(403).json({
                    error:"Username Already Taken"
                })
            } else {
                //hash the password
                bcrypt.hash(new_password,10).then(hash => { //hash takes place of password so it cant be see
                    db.createUser(new_username, hash, new_email).then( ()=> {
                        req.session.user = {
                            username: new_username,
                            email: new_email,
                        }
                        res.status(200).json(req.session.user)
                    }).catch(error => console.log(error))
                }).catch(error => console.log(error))
            }
        }).catch(error => console.log(error))
    },
    loginUser: (req, res) => {
        //get username and password of req.body
        console.log(req.body)
        const { username, password } = req.body
        //get the database
        const db = req.app.get('db')
        //find the user with that username
        db.verifyUser(username).then(user => {
            if(user.length > 0) {
                bcrypt.compare(password, user[0].password).then(doesMatch => {
                    //check password
                    if(doesMatch) {
                        req.session.user.username = user[0].username;
                        req.session.user.email =user[0].email;
                        req.session.user.admin =user[0].admin;
                        console.log(req.session.user)
                        res.status(200).json(req.session.user)
                    } else {
                        res.status(403).json ({
                            error: 'Username or password is incorrect'
                        })
                    }
                })
            } else {
                res.status(404).json({
                    error:'User does not exist'
                })
            }
        })
    },
    loginAdmin: (req, res) => {
        //get username and password of req.body
        console.log(req.body)
        const { username, password} = req.body
        const db = req.app.get('db')
        db.admin(username).then(user => {
            if(user.length > 0){
                bcrypt.compare(password,user[0].password).then(doesMatch => {
                    //check the password
                    if(doesMatch){
                        req.session.user.username = user[0].username;
                        req.session.user.email = user[0].email;
                        req.session.user.admin = true;
                        //put them on the session
                        //send response
                        res.status(200).json(req.session.user)
                    }else{
                        res.status(403).json({
                            error: 'Username or password is incorrect'
                        })
                    }
                })
            } else {
                res.status(404).json({
                    error: 'user does not exist'
                })
            }
        })
    },
    getSession: (req, res) => {
        res.status(200).json(req.session)
    },
    logout:(req, res) => {
        req.session.destroy();
        res.status(200).send(req.session)
    }
}
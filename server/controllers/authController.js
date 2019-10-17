const bcrypt = require('bcryptjs');

module.exports = {
    register: ( req, res) => {
        const {new_username, new_password, new_email} = req.body;
        const db = req.app.get('db');
        if(new_username = ''){
            db.add_user([username,password,email])
            return res.status(200).json(username)
        } else {
            const result = await db.get_user([new_username])
            const user_id = await db.get_user_id([username])
            let user_id = user_id[0].user_id
            const existingUser = result.length;
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(new_password, salt);
        }
        if(existingUser > 0){
            res.status(403).json({
                alert:('Username already taken')
            })
        } else {
            const registeredUser = await db.add_user(new_username, new_password, new_email)
            const user = registeredUser[0]
            req.session.user = {id:  user.id, email: user.new_email}
            return res.status(201).json(req.session.user)
        }
    },
    
loginUser: (req, res) => {
const {username , password} = req.body
const db  = req.app.get('db')
const foundUser = await db.get_user([username]);
const user = foundUser[0];
const isAuthenticated = bcrypt.compareSync(password, user.user_password)
if(!user){
    return res.status(401).json('Invalid User')
} if (!isAuthenticated){
    return res.status(403).json('Authenticated')
}
req.session.user = {
    id: user.users_id,
    email: user.users_email
}
return res.send(req.session.user)
},

loginAdmin: (req, res) => {
const {username, password} =req.body
const db = req.app.get('db')
db.admin(username).then(user => {
    if(user.length > 0){
        bcrypt.compare(password,user[0].password).then(doesMatch => {
            if(doesMatch){
                req.session.user.username = user[0].username;
                        req.session.user.email = user[0].email;
                        req.session.user.admin = true;
                        res.status(200).json(req.session.user)
            }else {
                res.status(403).json({
                    error: 'Username or password is incorrect'
                })
            }
        })
    } else {
        res.status(404).json({
            error: 'User does not exist'
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
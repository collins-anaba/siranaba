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
}
}
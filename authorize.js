const authorize = (req, res, next)=>{
    const {user} = req.query
    if(user === 'pratik'){
        req.user={user:"pratik", id:"1"}
        next()
    }
    else{
        res.status(401).send("unauthorized")
    }
}

module.exports = authorize
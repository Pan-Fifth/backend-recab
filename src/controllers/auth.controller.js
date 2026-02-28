
export function registerController(req, res) {
    console.log(req.body)
    res.send("register controller")
}


export function loginController(req, res) {
    console.log(req.body)
    res.send("login controller")
}
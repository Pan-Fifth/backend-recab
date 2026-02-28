export function getDesertsController(req, res) {
    res.send("get desert controller")
}
export function postDesertsController(req, res) {
    res.send("post desert controller")
}
export function deleteDesertsController(req, res) {
    console.log(req.params.id)
    res.send("delete desert controller")
}
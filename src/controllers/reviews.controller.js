export function postReviewsController(req, res) {
    console.log(req.body)
    res.send("post Review Controller")
}
export function getReviewsController(req, res) {
    console.log(req.body)
    res.send("get Review Controller")
}
export function deleteReviewsController(req, res) {
    console.log(req.params.id)
    res.send("delete Review Controller")
}
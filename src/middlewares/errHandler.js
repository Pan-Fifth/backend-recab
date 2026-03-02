function errHandler(err, req, res, next) {
    console.log(err)
    const status = err.status || 500
    res.status(status).json({
        status: "error",
        message: err.message || "Intrnal Server Error"
    })
}

export default errHandler;

import express from 'express'
import authRouter from './routes/auth.routes.js';
import desertsRouter from './routes/deserts.routes.js';
import reviewsRouter from './routes/reviews.routes.js';
import usersRouter from './routes/users.routes.js';
import errHandler from './middlewares/errHandler.js'



const app = express()
const PORT = 3000;
app.use(express.json())

app.use("/auth", authRouter)
app.use("/users", usersRouter)
app.use("/deserts", desertsRouter)
app.use('/reviews', reviewsRouter)


app.use(errHandler)

app.listen(PORT, () => {
    console.log(`Server is running on localhost ${PORT}`)
})
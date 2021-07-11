import express, {Application, Request, Response} from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hello");
})

const port = process.env.NODE_ENV || 3000

app.listen(port, () => console.log(`Server running on port ${port}`))

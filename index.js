import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'

async function main () {

    dotenv.config ()
    const client = new mongodb.MongoClient(
        process.env.MOVIREVIEWS_DB_URI
    )

    const port = process.env.PORT || 8000

    try {
        await client.connect()

        app.listen(port, () => {
            console.log('server is runner on port:' + port);
        })
    } catch (e) {
        console.error(e);
        process.exit(1)
    }
}

main().catch(console.error);
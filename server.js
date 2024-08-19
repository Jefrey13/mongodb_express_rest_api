import app from './src/app'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});
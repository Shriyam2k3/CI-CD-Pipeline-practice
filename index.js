import  express from 'express';
const app = express();

const PORT = process.env.PORT ?? 8080;

app.get('/' , (req , res) => {
    return res.json({
        message : 'Hello , My name is Shriyam and i am a currently study in Vellore Institute of Technology'
    });
})
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})
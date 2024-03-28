const info = require("./mydata")

const Respond = (req, res) => {
    res.send(info)
    console.log('ok')
}






module.exports = {Respond}
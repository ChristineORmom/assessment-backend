const user = requires('./db.json')
let globalId = 4

module.exports = {
    createUser: (req, res) => {
        let { userName, userCompliment, userFortune } = req.body
        let newUser = {
            id: globalId,
            userName,
            userCompliment,
            userFortune,
        }
        user.push(newUser)
        res.status(200).send(user)
        globalId++
    },
    deleteUser: (req, res) => {
        let index = user.findIndex(elem => +req.params.id)
        user.splice(index, 1)
        res.status(200).send(user)
    },
    updateUser: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = user.findIndex(elem => +elem.id === +id)

        if (user[index].userFortune === userFortune) {
            res.status(200).send(user)
        }else {
            res.sendStatus(400)
        }
    }
}
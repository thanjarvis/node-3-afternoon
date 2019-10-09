module.exports = {
    create: (req, res) => {
        
    const{name, description, price, image_url} = req.body
    const db = req.app.get('db')
    db.create_product({name, description, price, image_url}).then(products => {
        res.status(200).send(products)
    })
    .catch(err => res.status(500).send(err))
    },


    getOne: (req, res) => {
        const {id} = req.params
        req.app.get('db').read_product({id}).then(products => {res.status(200).send(products)})
        .catch(err => res.status(500).send(err))
    },
 
    getAll: (req,res) => {
        req.app.get('db').read_products().then(res.status(200).send(products))
    },
 
    update: (req, res) => {
        const {id} = req.params
        const {description} = req.query
        req.app.get('db').update_product({id, description}).then(products => {
            res.status(200).send(products)
        })
    },

    delete: (req,res) => {
        const {id} = req.params
        req.app.get('db').delete_product({id}).then(products => {
            res.status(200).send(products)
        })
    }
}
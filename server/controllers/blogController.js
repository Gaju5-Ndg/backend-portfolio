import model from '../models/db/blog.js';

class adminController{

    static async posts (req, res)  {
        const Data = new model({
            
            title: req.body.title,
            content: req.body.content
        })
    
        try {
            const data = await Data.save();
            res.status(200).json({
                status:200,
                msg:'post added'
            })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async getAll (req, res) {
        const Data = await model.find({});
        res.status(200).json({
            status: 200,
            data: Data,
        })
     }
     static  async getOne (req, res) {
        try {
            // const id = req.params._id;
            const Data = await model.findById(req.params._id)
            res.send({
                status: 200,
                data: Data,
            })
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
        }

    static async deletePost  (req,res){
        try {
            const id = req.params._id;
            const Data = await model.findByIdAndDelete(id)
            res.send(`blog with ${Data.title} user  has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async updatePost (req, res) {
        if(!req.body) {
            res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }
        const id = req.params._id;
        const data = await model.findByIdAndUpdate(id, req.body, 
            { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `blog not found.`
            });
        }else{
           
            res.send({ message: "blog updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

}
export default  adminController;
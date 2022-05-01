const updatePost = (req )=> {
    const update = {
        title: req.body.title,
        content: req.body.content,
    }


    return update;
}
const deletePost = (req )=> {
    const erase = {
        _id:req.query.id,
        
    }


    return erase;
}

module.exports={updatePost,deletePost}
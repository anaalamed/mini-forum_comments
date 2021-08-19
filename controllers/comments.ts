import Comment from '../models/comment';


export const getComments = async (req, res) => {
    try {
        const entity = req.query.entity;
        if (!entity) {
            return res.status(400).json({ message: "Please provide an entity ID" })
        }
        const comments = await Comment.find({ entity });
        res.json(comments);
    } catch {
        res.status(500).json({ message: "Could not load comments" })
    }
}

export const createComment = async (req, res) => {
    try {
        const _id = req.user;
        console.log(_id);
        const { entity, content, username } = req.body;
        if (!entity) {
            return res.status(400).json({ message: "Please provide an entity ID" })
        }
        const newComment = await Comment.create({ entity, content, username, user: _id });
        res.json(newComment);
    } catch {
        res.status(500).json({ message: "Could not create comment" })
    }
}

export const updateComment = async (req, res) => {
    try {
        const { content } = req.body;
        const _id = req.params.commentId;
        const updatedComment = await Comment.updateOne({ _id, user: req.user }, { $set: { content } });
        res.json(updatedComment);
    } catch {
        res.status(500).json({ message: "Could not update comment" })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const _id = req.params.commentId;
        const user = req.user;
        console.log(_id);
        console.log(user);
        // const deletedComment = await Comment.deleteOne({ _id, user }); // the right one
        const deletedComment = await Comment.deleteOne({ _id }); // verify deleting post delete all the comments  
        res.json(deletedComment);
    } catch {
        res.status(500).json({ message: "Could not delete comment" })
    }
}


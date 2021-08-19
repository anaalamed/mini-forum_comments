import { Router } from 'express';
import { getComments, createComment, updateComment, deleteComment } from '../controllers/comments'

const commentsRouter = Router();

const verifyUser = (req, res, next) => {
    if (req.headers.user) {
        req.user = JSON.parse(req.headers.user);
        next();
    }
    else {
        res.status(401).json({ message: "Not authorize" })
    }
}


commentsRouter.get('/api/comments', getComments);
commentsRouter.post('/api/comments', verifyUser, createComment);
commentsRouter.put('/api/comments/:commentId', verifyUser, updateComment);
commentsRouter.delete('/api/comments/:commentId', verifyUser, deleteComment);

export default commentsRouter;

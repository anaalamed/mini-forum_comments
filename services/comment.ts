import Comment from '../models/comment'

export default function addComment(comment){
    const newComment = new Comment(comment);
	return newComment.save();
}

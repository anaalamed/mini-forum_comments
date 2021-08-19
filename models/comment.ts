import { model, Schema, Types } from 'mongoose';

const CommentSchema = new Schema({
    entity: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    username: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: () => false
    }
});

const Comment = model('Comment', CommentSchema);

export default Comment;
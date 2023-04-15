const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal),
        },

        username: {
            type: String,
            required: true,
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

//missing Schema Settings: Create a virtual called reaction Count that retrieves the length of the thought's reactions array field on query.









}
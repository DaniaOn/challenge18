const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
},
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/] // mongoose's matching validation)
    },  
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
},
{
    toJSON: {  
        virtuals: true,
    },
    id: false,
    }
);

// Create a virtual property friendCount
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize User model
const User = model('User', UserSchema);

// Export User model
module.exports = User;
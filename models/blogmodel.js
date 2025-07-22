const blogSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

module.exports=mongoose.model('blog',blogSchema);


const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    options: [
        {
            text: {
                type: String,
                required: true,
            },
            isCorrect: {
                type: Boolean,
                default: false,
            },
        },
    ],
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quizSchema',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports=mongoose.model('questionSchema',questionSchema );

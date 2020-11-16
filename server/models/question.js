import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuestionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'Navn må bestå av flere enn 3 tegn'],
      max: ['100', 'Navn må være under 100 tegn'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

QuestionSchema.virtual('QuestionChoice', {
  ref: 'Choice',
  localField: '_id',
  foreignField: 'question',
});

export default mongoose.model('Question', QuestionSchema);

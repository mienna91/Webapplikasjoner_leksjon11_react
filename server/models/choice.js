import moongose from 'mongoose';

const { Schema } = moongose;

const ChoiceSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      minlength: [1, 'Svaret må minimum bestå av et tegn'],
    },
    votes: {
      type: Number,
      default: 0,
    },
    question: {
      type: moongose.Schema.ObjectId,
      ref: 'Question',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default moongose.model('Choice', ChoiceSchema);

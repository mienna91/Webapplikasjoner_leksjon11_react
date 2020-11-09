import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const PollSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'Navn må bestå av flere enn 3 tegn'],
      max: ['100', 'Navn må være under 100 tegn'],
    },
    slug: String,
  },
  { timestamps: true }
);

PollSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
});

export default mongoose.model('Poll', PollSchema);

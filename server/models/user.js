import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'Navn må bestå av flere enn 3 tegn'],
      max: ['70', 'Navn må være under 70 tegn'], // basert på norges lengste navn
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Ugyldig epost adresse'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual('UsersQuestion', {
  ref: 'Question',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

export default mongoose.model('User', UserSchema);

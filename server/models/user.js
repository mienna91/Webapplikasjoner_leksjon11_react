import mongoose from 'mongoose';
import slugify from 'slugify';


const {Schema} = mongoose;

const UserSchema = new Schema(
    {
    name: {
        type: String,
        required: true,
        trim: true,
        min: ['3', 'Navn må bestå av flere enn 3 tegn'],
        max: ['100', 'Navn må være under 100 tegn'],
    },
    },
    { timestamps: true}
)



export default mongoose.model('User', UserSchema);
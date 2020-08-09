import mongoose, { Schema } from 'mongoose'

interface UserModel extends mongoose.Document {
  username: string,
  firstName: string,
  lastName: string,
}

const UserSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
})

export default mongoose.model<UserModel>('User', UserSchema)

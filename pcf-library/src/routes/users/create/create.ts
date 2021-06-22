import mongoose from 'mongoose';
import { CreateUserOptions } from '../../../lib/types';
import Users, { User } from '../users.model';

const add = async ({ username, password, role }: CreateUserOptions): Promise<User | null> => {
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    
    // confirm user does not already exist in the DB
    const user = (await Users.findOne({ username }).session(session)) as User;

    if (user) {
      throw new Error(`User ${username} already exists`);
    }


    await session.commitTransaction();
    await session.endSession();
    return null;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export default add;

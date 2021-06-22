import Users from '../routes/users/users.model';
import Locations from '../routes/locations/location.model';
import { UserRole } from './types';

// Initialize the database with base content
const seedDb = async (): Promise<void> => {
  const existingUsers = await Users.find({});

  if (!existingUsers.length) {
    console.log(`Seeding default user`);
    await Users.create([
      {
        username: 'super',
        password: 'super',
        role: UserRole.super,
      },
    ]);
    console.log(`Default user created`);
  }

  const existingLocations = await Locations.find({});

  if (!existingLocations.length) {
    console.log(`Seeding default location`);
    await Locations.create([
      {
        name: 'Default Location',
        removed: false,
      },
    ]);
    console.log(`Default location created`);
  }
};

export default seedDb;

import { expect } from 'chai';
import 'mocha';
import authenticate from './authenticate';
import Users from '../users.model';

describe('Users :: Authenticate', async () => {
  beforeEach(async () => {
    const u = {
      removed: false,
      system: false,
      username: 'super',
      password: 'super',
      role: 'Super',
    };
    await Users.create(u);
  });

  it('Authenticate succeeds', async () => {
    const result = await authenticate({ username: 'super', password: 'super' });

    expect(result).to.have.property('success');
    expect(result).to.have.property('role');
    expect(result.success).to.eql(true)
    expect(result.role).to.eql('Super')
  });

  it('Fails if the user doesnt exist', async () => {
    const unknownUsername = 'unknown'
    const errMsg = `User ${unknownUsername} does not exist`;

    await expect(authenticate({ username: unknownUsername, password: 'unknownpassword' })).to.be.rejectedWith(errMsg);
  });

  it('Fails if the password is wrong', async () => {
    const errMsg = `Error: Invalid password`;

    await expect(authenticate({ username: 'super', password: 'ppp' })).to.be.rejectedWith(errMsg);
  });
});

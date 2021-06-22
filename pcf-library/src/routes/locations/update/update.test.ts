/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from 'chai';
import 'mocha';
import update from './update';
import create from '../create/create';
import Locations, { Location, LocationLean } from '../location.model';

describe('Location :: Update', async () => {
  it('The name can be changed', async () => {
    const locationToBeUpdated = await create({name: 'update test'})
    const newName = 'new name'
    const result = await update({id: locationToBeUpdated._id, name: newName})

    expect(result).to.have.property('_id');
    expect(result).to.have.property('name', newName, 'name mismatch');
  });

  it('Fails gracefully if the id isnt found', async () => {
    const id = 'ddb75eaea925fe43ce6842a4';

    await expect(update({ id })).to.be.rejectedWith(`Failed to update Location: No location found with id ${id}`);
  });
});

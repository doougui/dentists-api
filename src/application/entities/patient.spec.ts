import { describe, expect, it } from 'vitest';
import { Patient } from './patient';
import { Password } from './value-objects/password';

describe('Patient', () => {
  it('creates an patient', () => {
    const patient = new Patient({
      name: 'Example patient',
      email: 'test@example.com',
      phone: '+999999999999',
      password: new Password('12345'),
    });

    expect(patient).toBeInstanceOf(Patient);
    expect(patient.name).toEqual('Example patient');
  });
});

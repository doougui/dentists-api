import { EmailValidatorAdapter } from '@application/infra/adapters/email-validation-adapter';
import { Validator } from '@application/infra/validator';
import { RegisterDentistInputDTO } from '@infra/http/dtos/dentists/register-dentist-dto';
import { EmailFieldValidation } from '@infra/validation/email-field-validation';
import { RequiredFieldValidation } from '@infra/validation/required-field-validation';
import { ValidatorCompositor } from '@infra/validation/validator-compositor';

export function makeRegisterDentistValidation() {
  const validations: Validator<RegisterDentistInputDTO>[] = [];

  for (const field of ['name', 'email']) {
    validations.push(
      new RequiredFieldValidation<RegisterDentistInputDTO>(field),
    );
  }

  validations.push(
    new EmailFieldValidation('email', new EmailValidatorAdapter()),
  );

  return new ValidatorCompositor(validations);
}

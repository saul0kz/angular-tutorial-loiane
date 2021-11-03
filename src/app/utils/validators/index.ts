import {
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export abstract class CustomValidators {
  public static requiredMinCheckbox(min = 1): ValidationErrors | null {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map((v) => v.value)
        .reduce((total, current) => (current ? total + current : total), 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }

  public static equalsTo(otherField: string): ValidationErrors | null {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necesário informar um campo');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necesário informar um campo válido. ');
      }
      if (field.value !== formControl.value) {
        return { equalsTo: true };
      }
      return null;
    };
    return validator;
  }
}

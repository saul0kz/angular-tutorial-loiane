import { FormArray, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export abstract class CustomValidadors {

  public static requiredMinCheckbox (min = 1) : ValidationErrors | null {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;

  }
}

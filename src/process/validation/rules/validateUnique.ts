import { FieldError } from '../../../error/FieldError';
import { RuleFn, ValidationContext } from '../../../types/index';
import { isEmptyObject } from '../util';
import { ValidatorError } from 'error';
import { ProcessorInfo } from 'types/process/ProcessorInfo';

export const shouldValidate = (context: ValidationContext) => {
    const { component, value } = context;
    if (!component.unique) {
        return false;
    }

    if (!value || isEmptyObject(value)) {
        return false;
    }
    return true;
};

export const validateUnique: RuleFn = async (context: ValidationContext) => {
    const { value, config, component } = context;
    if (!shouldValidate(context)) {
        return null;
    }

    if (!config || !config.database) {
        throw new ValidatorError("Can't test for unique value without a database config object");
    }
    try {
        const isUnique = await config.database?.isUnique(context, value);
        if (typeof isUnique === 'string') {
            return new FieldError('unique', {
                ...context,
                component: {...component, conflictId: isUnique},
            });
        }
        return (isUnique === true) ? null : new FieldError('unique', context);
    }
    catch (err: any) {
        throw new ValidatorError(err.message || err);
    }
};

export const validateUniqueInfo: ProcessorInfo<ValidationContext, FieldError | null>  = {
    name: 'validateUnique',
    fullValue: true,
    process: validateUnique,
    shouldProcess: shouldValidate,
};

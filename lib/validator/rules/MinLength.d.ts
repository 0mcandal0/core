import { Rule } from './Rule';
export declare class MinLengthRule extends Rule {
    defaultMessage: string;
    check(value?: any): Promise<boolean>;
}
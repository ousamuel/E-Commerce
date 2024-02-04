/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductMenuCreateFormInputValues = {
    productName?: string;
    description?: string;
    price?: number;
    stockQuantity?: number;
    createdTime?: string;
    updatedTime?: string;
};
export declare type ProductMenuCreateFormValidationValues = {
    productName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    stockQuantity?: ValidationFunction<number>;
    createdTime?: ValidationFunction<string>;
    updatedTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductMenuCreateFormOverridesProps = {
    ProductMenuCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    productName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    stockQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    createdTime?: PrimitiveOverrideProps<TextFieldProps>;
    updatedTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductMenuCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductMenuCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductMenuCreateFormInputValues) => ProductMenuCreateFormInputValues;
    onSuccess?: (fields: ProductMenuCreateFormInputValues) => void;
    onError?: (fields: ProductMenuCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductMenuCreateFormInputValues) => ProductMenuCreateFormInputValues;
    onValidate?: ProductMenuCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductMenuCreateForm(props: ProductMenuCreateFormProps): React.ReactElement;

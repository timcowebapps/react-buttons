/// <reference types="react" />
import * as React from 'react';
import { IJsonSchema } from 'timcowebapps-react-utils';
export interface IButtonProps {
    schema?: IJsonSchema;
    children?: React.ReactNode;
}

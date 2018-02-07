/// <reference types="react" />
import * as React from 'react';
import { IButtonProps } from './buttonProps';
declare class Button extends React.Component<IButtonProps, any> {
    static displayName: string;
    static propTypes: {
        onClick: any;
        children: any;
    };
    constructor(props?: IButtonProps);
    private _renderLabel();
    render(): React.ComponentElement<any, React.Component<any, React.ComponentState>>;
}
export default Button;

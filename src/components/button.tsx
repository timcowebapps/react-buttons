'use strict';

/**
 * Внешние зависимости.
 */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';
/**
 * Внутренние зависимости.
 */
import { IButtonProps } from './buttonProps';

const Button: React.StatelessComponent<IButtonProps> = (props: IButtonProps) => {
	let htmlAttrs = function (properties: any): any {
		let result: any = {}
		if (properties.tag === "a") {
			result.href = properties.to || "/";
		}
		else if (properties.tag === "button") {
			result.type = properties.type || "button";
		}

		return result;
	};

	return React.createElement(
		props.schema.properties.tag,
		{
			...htmlAttrs(props.schema.properties),
			onClick: props.onClick,
			className: Classes.combine(props.schema.properties.classes)
		},
		props.children
	);
}

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.string
	])
}

export default Button;
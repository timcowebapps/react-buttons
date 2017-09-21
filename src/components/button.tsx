'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
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

		result.style = properties.style || null;

		return result;
	};

	let renderLabel = function (): any {
		if (props.schema.items) {
			let label: any = undefined;

			if (Array.isArray(props.schema.items)) {
				label = _.filter(props.schema.items, { id: 'label' })[0];
			}
			else {
				label = props.schema.items;
			}

			return React.DOM.span({ className: label.properties.classes }, label.default.text)
		}
		else return props.children;
	}

	return React.createElement(
		props.schema.properties.tag,
		{
			...htmlAttrs(props.schema.properties),
			onClick: props.onClick,
			className: Classes.combine(props.schema.properties.classes)
		},
		renderLabel()
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
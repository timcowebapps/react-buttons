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
	const {
		schema
	} = props;
	
	return React.createElement(
		schema.properties.tag,
		{ className: Classes.combine(schema.properties.classes) },
		props.children
	);
}

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.string
	])
}

export default Button;
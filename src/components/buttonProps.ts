'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface IButtonProps {
	/**
	 * Событие.
	 * 
	 * @type {Function}
	 * @memberof IButtonProps
	 */
	onClick?: Function;

	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof IButtonProps
	 */
	schema?: IJsonSchema;

	/**
	 * Дочерние элементы.
	 *
	 * @type {React.ReactNode}
	 * @memberof IButtonProps
	 */
	children?: React.ReactNode;
};
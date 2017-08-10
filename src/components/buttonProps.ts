'use strict';

/**
 * Внешние зависимости.
 */
import * as React from 'react';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface IButtonProps {
	schema?: IJsonSchema;

	/**
	 * Дочерние элементы.
	 *
	 * @type {React.ReactNode}
	 * @memberof IButtonProps
	 */
	children?: React.ReactNode;
}
'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export namespace ButtonProps {
	export interface IProps {
		/**
		 * Схема.
		 * 
		 * @type {IJsonSchema}
		 * @memberof ButtonProps.IProps
		 */
		schema: IJsonSchema;

		/**
		 * Дочерние элементы.
		 *
		 * @type {React.ReactNode}
		 * @memberof ButtonProps.IProps
		 */
		children?: React.ReactNode;

		/**
		 * Обработчик клика по кнопке.
		 * 
		 * @type {Function}
		 * @memberof ButtonProps.IProps
		 */
		onClick?: Function;
	}

	export const types: PropTypes.ValidationMap<IProps> = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.element),
			PropTypes.string
		]),
		onClick: PropTypes.func
	}

	export const defaults: IProps = {
		schema: {
			properties: {
				classes: {
					pipeline: undefined,
					block: "btn"
				}
			}
		}
	}
}

'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { IButtonProps } from './buttonProps';

class Button extends React.Component<IButtonProps, any> {
	public static displayName: string = 'button';
	public static propTypes = {
		onClick: PropTypes.func,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.element),
			PropTypes.string
		])
	}

	/**
	 * Конструктор класса.
	 * 
	 * @class Button
	 * @constructor
	 * @param {IButtonProps} props Свойства компонента.
	 */
	public constructor(props?: IButtonProps) {
		super(props);
	}

	/**
	 * Отрисовывает текст.
	 * 
	 * @class Button
	 * @method _renderLabel
	 * @private
	 */
	private _renderLabel() {
		if (this.props.schema.items) {
			let label: any = undefined;

			if (Array.isArray(this.props.schema.items)) {
				label = _.filter(this.props.schema.items, { id: 'label' })[0];
			}
			else {
				label = this.props.schema.items;
			}

			return React.createElement('span', { className: label.properties.classes }, label.default.text)
		}
		else return this.props.children;
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class Button
	 * @method render
	 */
	public render() {
		let htmlAttrs = (properties: any) => {
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

		return React.createElement(
			this.props.schema.properties.tag,
			{
				...htmlAttrs(this.props.schema.properties),
				onClick: this.props.onClick,
				className: Classes.combine(this.props.schema.properties.classes)
			},
			this._renderLabel()
		);
	}
}

export default Button;
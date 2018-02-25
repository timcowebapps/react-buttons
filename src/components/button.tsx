'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes, IJsonSchema, Schema } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ButtonProps } from './button-props';

/**
 * Микрокомпонент кнопки.
 */
class Button extends React.Component<ButtonProps.IProps, any> {
	public static displayName: string = 'Button';
	public static propTypes: PropTypes.ValidationMap<ButtonProps.IProps> = ButtonProps.types;
	public static defaultProps: ButtonProps.IProps = ButtonProps.defaults;

	/**
	 * Конструктор класса.
	 * 
	 * @class Button
	 * @public
	 * @constructor
	 * @param {ButtonProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: ButtonProps.IProps) {
		super(props);
	}

	/**
	 * Отрисовывает текст.
	 * 
	 * @class Button
	 * @private
	 * @method _renderLabel
	 */
	private _renderLabel(item: IJsonSchema, pipeline: any, blockName: string): React.ReactNode {
		if (item) {
			return React.createElement('span', {
				className: Classes.bem(pipeline, blockName, {
					element: 'label',
					modifiers: item.properties.classes.modifiers
				})
			}, item.properties.text)
		} else {
			return this.props.children;
		}
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class Button
	 * @public
	 * @method render
	 */
	public render() {
		const { properties, items } = this.props.schema;
		const classesRootBlock = properties.classes.block;

		let htmlAttrs = (props: any) => {
			let attributes: any = {}
			if (props.tag === "a") {
				attributes.href = props.to || "/";
			} else if (props.tag === "button") {
				attributes.type = props.type || "button";
			}

			attributes.style = props.style || null;

			return attributes;
		};

		return React.createElement(
			properties.tag,
			{
				...htmlAttrs(properties),
				onClick: this.props.onClick,
				className: Classes.bem(properties.classes.pipeline, classesRootBlock, {
					modifiers: properties.classes.modifiers
				})
			},
			this._renderLabel(Schema.getItemById(items, "label"), properties.classes.pipeline, classesRootBlock)
		);
	}
}

export default Button;

'use strict';

/**
 * Внешние зависимости.
 */
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IJsonSchema } from 'timcowebapps-react-utils';
/**
 * Внутрение зависимости.
 */
import Button from '../src/components/button';
var styles: any = require('../src/components/button.scss');

const App: React.StatelessComponent<any> = (props: any) => {

	var getJsonSchema = function (extraStyles: any): any {
		return {
			properties: {
				tag: "button",
				classes: _.union([styles.btn], extraStyles),
				style: { width: "100px" }
			}
		} as IJsonSchema;
	};

	return (
		<div>
			<div style={{ padding: '20px 20px 0' }}>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_lg])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_lg])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_success, styles.btn_lg])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_warning, styles.btn_lg])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_danger, styles.btn_lg])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_inverse, styles.btn_lg])}>Large</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_primary])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_success])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_warning])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_danger])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_inverse])}>Medium</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_sm])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_sm])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_success, styles.btn_sm])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_warning, styles.btn_sm])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_danger, styles.btn_sm])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_inverse, styles.btn_sm])}>Small</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_xs])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_xs])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_success, styles.btn_xs])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_warning, styles.btn_xs])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_danger, styles.btn_xs])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_inverse, styles.btn_xs])}>Extra small</Button>
				</p>
			</div>

			<div style={{ padding: '20px 20px 0' }}>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_lg, styles.btn_bordred])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_lg, styles.btn_bordred])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_success, styles.btn_lg, styles.btn_bordred])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_warning, styles.btn_lg, styles.btn_bordred])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_danger, styles.btn_lg, styles.btn_bordred])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_inverse, styles.btn_lg, styles.btn_bordred])}>Large</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_bordred])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_bordred])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_success, styles.btn_bordred])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_warning, styles.btn_bordred])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_danger, styles.btn_bordred])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_inverse, styles.btn_bordred])}>Medium</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_sm, styles.btn_bordred])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_sm, styles.btn_bordred])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_success, styles.btn_sm, styles.btn_bordred])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_warning, styles.btn_sm, styles.btn_bordred])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_danger, styles.btn_sm, styles.btn_bordred])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_inverse, styles.btn_sm, styles.btn_bordred])}>Small</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_xs, styles.btn_bordred])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_xs, styles.btn_bordred])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_success, styles.btn_xs, styles.btn_bordred])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_warning, styles.btn_xs, styles.btn_bordred])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_danger, styles.btn_xs, styles.btn_bordred])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_inverse, styles.btn_xs, styles.btn_bordred])}>Extra small</Button>
				</p>
			</div>

			<div style={{ padding: '20px 20px 0' }}>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_lg, styles.btn_rounded])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_lg, styles.btn_rounded])}>Large</Button>

					<Button schema={getJsonSchema([styles.btn_default, styles.btn_lg, styles.btn_rounded, styles.btn_bordred])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_lg, styles.btn_rounded, styles.btn_bordred])}>Large</Button>

					<Button schema={getJsonSchema([styles.btn_outline_default, styles.btn_lg, styles.btn_rounded])}>Large</Button>
					<Button schema={getJsonSchema([styles.btn_outline_primary, styles.btn_lg, styles.btn_rounded])}>Large</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_rounded])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_rounded])}>Medium</Button>

					<Button schema={getJsonSchema([styles.btn_default, styles.btn_rounded, styles.btn_bordred])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_rounded, styles.btn_bordred])}>Medium</Button>

					<Button schema={getJsonSchema([styles.btn_outline_default, styles.btn_rounded])}>Medium</Button>
					<Button schema={getJsonSchema([styles.btn_outline_primary, styles.btn_rounded])}>Medium</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_sm, styles.btn_rounded])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_sm, styles.btn_rounded])}>Small</Button>

					<Button schema={getJsonSchema([styles.btn_default, styles.btn_sm, styles.btn_rounded, styles.btn_bordred])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_sm, styles.btn_rounded, styles.btn_bordred])}>Small</Button>

					<Button schema={getJsonSchema([styles.btn_outline_default, styles.btn_sm, styles.btn_rounded])}>Small</Button>
					<Button schema={getJsonSchema([styles.btn_outline_primary, styles.btn_sm, styles.btn_rounded])}>Small</Button>
				</p>
				<p>
					<Button schema={getJsonSchema([styles.btn_default, styles.btn_xs, styles.btn_rounded])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_xs, styles.btn_rounded])}>Extra small</Button>

					<Button schema={getJsonSchema([styles.btn_default, styles.btn_xs, styles.btn_rounded, styles.btn_bordred])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_primary, styles.btn_xs, styles.btn_rounded, styles.btn_bordred])}>Extra small</Button>

					<Button schema={getJsonSchema([styles.btn_outline_default, styles.btn_xs, styles.btn_rounded])}>Extra small</Button>
					<Button schema={getJsonSchema([styles.btn_outline_primary, styles.btn_xs, styles.btn_rounded])}>Extra small</Button>
				</p>
			</div>

			<div style={{ padding: '20px 20px 0' }}>
				<Button schema={{
					properties: {
						tag: "button",
						classes: [styles.btn, styles.btn_default, styles.btn_block]
					},
					items: [{
						id: 'label',
						default: {
							text: "Block"
						},
						properties: {
							classes: [styles.btn__label]
						}
					}]
					
				}} />
			</div>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);
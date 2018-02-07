'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Classes, IJsonSchema } from 'timcowebapps-react-utils';

/* Внутрение зависимости. */
import Button from '../src/components/button';
var styles: any = require('./index.scss');

const App: React.StatelessComponent<any> = (props: any) => {

	var getJsonSchema = function (extraClassNames: any): any {
		return {
			properties: {
				tag: "button",
				classes: _.union([styles.btn], extraClassNames),
				style: { width: "100px" }
			}
		} as IJsonSchema;
	};

	const variants = [
		styles["btn--default"], styles["btn--success"], styles["btn--danger"], styles["btn--warning"], styles["btn--info"]
	];

	return (
		<div>
			<div style={{ padding: '20px 20px 0' }}>
				<p>{
					variants.map((style, i) => (
						<Button key={i} schema={getJsonSchema([style])}>Medium</Button>
					))
				}</p>

				<pre>{`
					`}</pre>
			</div>

			<div style={{ padding: '20px 20px 0' }}>
				<Button schema={{
					properties: {
						tag: "button",
						classes: _.union([Classes.bem(styles, "btn", { modifiers: ["default", "block"] })], [styles["btn--outline_gradient"]])
					},
					items: [{
						id: 'label',
						default: {
							text: "Block"
						},
						properties: {
							classes: [Classes.bem(styles, "btn", { element: "label", modifiers: [] })]
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

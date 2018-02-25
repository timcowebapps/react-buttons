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
	return (
			<div style={{ padding: '20px 20px 0' }}>
				<Button schema={{
					properties: {
						tag: "button",
						classes: {
							pipeline: styles,
							block: "btn",
							modifiers: ["default", "block"]
						}
					},
					items: [{
						id: 'label',
						properties: {
							text: "Block",
							classes: {
								modifiers: []
							}
						}
					}]
				}} />
			</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);

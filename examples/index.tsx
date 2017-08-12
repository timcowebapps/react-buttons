'use strict';

/**
 * Внешние зависимости.
 */
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
/**
 * Внутрение зависимости.
 */
import Button from '../src/components/button';
var btnStyles: any = require('../src/components/button.scss');

const App: React.StatelessComponent<any> = (props: any) => {
	return (
		<div style={{ padding: '20px 20px 0' }}>
			<Button schema={{ properties: { tag: "button", classes: [btnStyles.tg_btn, btnStyles.tg_btn_default] } }}>Default Button</Button>
			<Button schema={{ properties: { tag: "a", to: "/", classes: [btnStyles.tg_btn, btnStyles.tg_btn_primary] } }}>Primary Button</Button>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);
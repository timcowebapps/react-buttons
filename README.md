## React-Buttons [![Discord](https://discordapp.com/api/guilds/402238411639095297/widget.png)](https://discord.gg/vCMcgwQ)

[![dependencies](https://david-dm.org/timcowebapps/react-buttons.svg)](https://david-dm.org/timcowebapps/react-buttons)

[![NPM](https://nodei.co/npm/timcowebapps-react-buttons.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/timcowebapps-react-buttons/)

Микрокомпонент базовой кнопки.

### Установка

```console
$ npm i -S timcowebapps-react-buttons
```

### Настройка webpack

```js
{
	// ...
	resolve: {
		alias: {
			'timcowebapps-react-buttons-dir': path.resolve(__dirname, 'node_modules',	'timcowebapps-react-buttons', 'lib')
		}
	}
	// ...
}
```

### Применение

```jsx
import Button from 'timcowebapps-react-buttons';
const styles: any = require('timcowebapps-react-buttons-dir/button.scss');

<Button schema={{
	properties: {
		tag: "button",
		classes: styles.btn
	}
}}>Button content</Button>
```

| Property       | Type               | Default     | Description |
| :------------- | :----------------- | :---------- | :---------- |
| `schema`       | `any`              | `-`         |             |

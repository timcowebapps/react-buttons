## React-Buttons [![dependencies](https://david-dm.org/timcowebapps/react-buttons.svg)](https://david-dm.org/timcowebapps/react-buttons)

[![NPM](https://nodei.co/npm/timcowebapps-react-buttons.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/timcowebapps-react-buttons/)

Микрокомпонент базовой кнопки.

### Установка

```
npm i -S timcowebapps-react-buttons
```

### Настройка webpack

```
resolve: {
	extensions: [".js", ".jsx", ".ts", ".tsx"],
	alias: {
		'dir': path.resolve(__dirname, 
			'node_modules', 'timcogroup-rc-datadisplay', 'lib')
	}
}
```

### API

````jsx
import Button from 'timcowebapps-react-buttons';
const styles: any = require('dir/button.scss');

<Button schema={{
	properties: {
		tag: "button",
		classes: styles.btn
	}
}}>Button content</Button>
````

| Property       | Type               | Default     | Description |
| :------------- | :----------------- | :---------- | :---------- |
| `schema`       | `any`              | `-`         |             |
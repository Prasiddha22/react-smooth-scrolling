# @prasiddha/react-smooth-scrolling

@prasiddha/react-smooth-scrolling makes the scroll smooth for your react site.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install @prasiddha/react-image-loader.

```terminal
npm install @prasiddha/react-smooth-scrolling --save
```

## Usage

With @prasiddha/react-smooth-scrolling you can pass `ease` prop to define how much smooth your scrolling should be. The value that can be passed is 1-9. The lower, the smoother scroll

```tsx
import { SmoothScroll } from '@prasiddha/react-smooth-scrolling';

const App = () => {
  return <SmoothScroll ease={4}>{/* Your App goes here */}</SmoothScroll>;
};

export default App;
```

## Props

| Property | Required | Default value | Description                                                                                                   |
| :------- | :------- | :------------ | :------------------------------------------------------------------------------------------------------------ |
| `ease`   | no       | 4             | How much smooth your scrolling should be. The value that can be passed is 1-9. The lower, the smoother scroll |

###

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

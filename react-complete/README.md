## Concepts Learned

### **Radium** package

Radium is a popular package for React which allows us to use inline style with sudo selectors and media queries.

``` npm install --save radium ```

Then it is necessary to import it in the component you are going to use it

``` import Radium from 'radium'; ```

And finally, go to the end of your component file, where your export it, and you can call *Radium* as a function and wrap you component with it. In the example below the component is the *App*. This is called a higher order component (we will lear more about this later). We can use this approach either in components created as functions or created as classes.

``` export default Radium(App); ```

### Styled Components library (not a good approach)

``` npm install --save styled-components ```

Remember that using this package we are going to use regular CSS, this is, instead of *backgroundColor: 'green'* we have to use *background-color: green*, for example.

### Command to access configurations that are under the hood in the project

```npm run eject```

Running this we will have access to the folder **config**

We did some configurations in the files *webpack.config.dev.js* and *webpack.config.prod.js*. See below that we add *modules* and *localIdentName* to the *options* in the test css part 

```sh
test: /\.css$/,
use: [
    require.resolve('style-loader'),
    {
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        modules: true, 
        localIdentName: '[name]__[local]__[hash:base64:5]'
    },
    },...

```

This configuration is for use *CSS Module* which, in my opinion, is better than the *Radium* and than *styled-components* because the JS and CSS files will be separated.

More about [how to use CSS Modules with create-react-app](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)

[CSS Modules GitHub]( https://github.com/css-modules/css-modules)

## React Developer Tools

A Chrome browser tool useful to inspect our code and simulate some data without hardcode anything in our project.

[Chrome Devtool Debugging](https://developers.google.com/web/tools/chrome-devtools/javascript/)

Error Boundaries: https://reactjs.org/docs/error-boundaries.html


## Stateless vs Stateful (presentation vs container component)

- **Stateful (container component)** component is when we are managing state in the component. stateful component does not automatically mean a class component because the functional component can also manage states and be a stateful component.

- **Stateless (presentation component)** is a functional component that does not manage state. 

- The majority components of your application should be *stateless*, this is, functional component that does not manage states. **Why?** having less stateful components is going to make easier to manage your application data flow because you will know better where your states are being modified. And as your application grows you will easily manage it.


## Class-based vs Functional Components

|          | class-based   |  Functional |
|----------|:-------------:|------:|
|declaration|class XY extends Component| const XY = props => {...} |
|Acess to state|    Access and manage   |   Access and manage with the useSate() |
| Lifecycle Hooks | HAS |    HASN'T |
| Way to access *state* and *props* | via *this* keyword| props as an argument|
|Examples | this.state.XY & this.props.XY | props.XY|
|When use it| Use if you need to manage State or access to Lifecycle Hooks and you don't want to use React Hooks | Use in all other Cases|

## Component Lifecycle

- Only available in Class-based Components!

## Hooks

- useEffect() - is used in functional components as lifecycle Hooks. Each component can has more than one useEffect().

- export default **React.memo(cockpit)** - this React.memo is indicated when we have functional component that doesn't need to be executed everytime its parent is updated. In class based component this is the **shouldComponentUpdate** method.
*OBS:* if your component needs to be updated every time its parent component change, you don't need to use *React.memo* or *shouldComponentUpdate*

## React Fragment
- React Fragment is used to wrap a JSX code when we don't want to put a div or another HTML element wrapping the code. Instead of React Fragment we can also use a Auxiliary Component (Higher Order Components - HOC) like this

```sh
const aux = props => props.children;

export default aux;
```

## Higher Order Components (HOC)
- What is does? It's essentially wrapper another component. 

## setState function

- If you need to set a state that depends on the old state, it is not a good practice just reassigned the value. Instead of this, you must use a function like this

```sh
this.setState((prevState, props) => {
    return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
    };
});
``` 

If instead of **prevState.changeCounter** you use **this.state.changeCounter** you don't guarantee that the previous value is correct.

## PropTypes Package
It is useful if you are writing a library or if if want to share your component with other people. With this, you will define the props type and if the state changes to a wrong type, an error will appear in the console.

- Example of a PropTypes usage in a Person component

```sh
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
```


# Concepts Learned

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

```javascript
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

See more information [here](https://reactjs.org/docs/fragments.html)

## Higher Order Components (HOC)
- What is does? It's essentially wrapper another component. 

See more information [here](https://reactjs.org/docs/higher-order-components.html)

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

```javascript
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
```

## Using Refs
- References can be added in any component, including your own component. It is a special property detected and understood by React.

- It can be used in some ways. For the older React versions you can use like this

```javascript
componentDidMount() {
    this.inputElement.focus();
}

<input ref={(inputEl) => {this.inputElement = inputEl}}
    type="text" 
    onChange={this.props.changed} 
    value={this.props.name}/>     

```

## React Context

- Used when we don't want to pass our data accross multiple layers of the components, just to get it from component A to component D and component B and C doesn't matter for these data.

- To use this we need to create a context file, for example

```sh
import React from 'react';

const authContext = React.createContext({
    authenticated: false, 
    login: () => {}
});

export default authContext;
```

In this case the context will be used to help the login information pass through the components that need to consume and provide the data, and the data will be the *authenticated* and the *login* method.

- In the provider component we will wrap the JSX components that will need the data, in this case below, the components are *Cockpit* and *persons*

```javascript
<AuthContext.Provider 
    value={{
    authenticated: this.state.authenticated, 
    login: this.loginHandler
}}>
    {this.state.showCockpit ? (
    <Cockpit 
    title={this.props.appTitle}
    showPersons={this.state.showPersons}
    personsLength={this.state.persons.length} 
    clicked={this.togglePersonsHandler}
    />
    ) : null}
    
    {persons} 
</AuthContext.Provider>
```

- In the Person component, one of the consumer we need to wrap the code part that will need the context data

```html
<!--Code 1.1-->
<AuthContext.Consumer>
    {
        (context) => context.authenticated ? <p>Authenticated<p> : <p>Please log in</p>
    }
</AuthContext.Consumer>
```

- The samething in the Cockpit component 

```html
<!--Code 1.2-->
<AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
```
- In **class based components**, like *Person*, it has an alternative to better format the Provider. Let's see the steps:

1 - We will use the method *componentDidMount* because here you also need the authentication status bacause you maybe sending an HTTP request that needs the userID;

2 - We need to add a *static* variable with the name  **contextType** written exactly like this and need to be a static property. *Static* property means it can be accessed from outside without need to instantiate an object based on this class first and React will access contextType for you.

```javascript
// AuthContext is the name of your context Component
static contextType = AuthContext;
```

This code above allows React to automatic connect this class-based component to your context. And this code also gives you a new property the **this.content** property. So, instead of the code 1.1, we can simplify to

```javascript
{this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
```

- For the functional components we can use the **useContext** hook from React. In the function body:

```javascript
/* The constant name can be whatever you want and as the argument of you useContext function, you will pass your context component */
const authContext = useContext(AuthContext);
```

Like this, React is going to make the connection again. And now the *authContext* constant will hold the information from your AuthContext data. Instead of **code 1.2** we can simplify to:

```html
    <button onClick={authContext.login}>Log in</button>
```

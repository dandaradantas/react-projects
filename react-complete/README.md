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
## Concepts Learned

### **Radium** package

Radium is a popular package for React which allows us to use inline style with sudo selectors and media queries.

``` npm install --save radium ```

Then it is necessary to import it in the component you are going to use it

``` import Radium from 'radium'; ```

And finally, go to the end of your component file, where your export it, and you can call *Radium* as a function and wrap you component with it. In the example below the component is the *App*. This is called a higher order component (we will lear more about this later). We can use this approach either in components created as functions or created as classes.

``` export default Radium(App); ```
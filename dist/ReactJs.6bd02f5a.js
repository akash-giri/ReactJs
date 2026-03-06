/**
 * <div id="parent">
 *      <div id="child">
 *        <h1>Hello world from React</h1>
 *      </div>
 * </div>
 */ const parent = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {
    id: 'child'
}, [
    React.createElement('h1', {
        id: 'h1'
    }, 'i am h1 tag'),
    React.createElement('h2', {
        id: 'h2'
    }, 'i am h2 tag')
]));
// const heading = React.createElement(
//     'h1', {id: 'heading'}, 'Hello world from React'
// );
// console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
root.render(parent);

//# sourceMappingURL=ReactJs.6bd02f5a.js.map

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`


**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## useRef

- ???ng d???ng count down + stop
- L??u c??c gi?? tr??? qua m???t tham chi???u b??n ngo??i func component
- useRef return ==> obj {**curent**: "some_thing"}
    
        const timerId = useRef()
        timerId.curent = newValue

## memo
- C?? th??? skip vi???c render khi props ???????c truy???n v??o l?? gi???ng nhau. **React.memo** l?? m???t higher order component. React.memo l?? m???t ph????ng ph??p ???????c s??? d???ng nh?? l?? m???t ti???n ??ch cho vi???c t???i ??u ho?? hi???u su???t ???ng d???ng (performance optimization).

- Kh??ng render l???i nh???ng component kh??ng c???n thi???t
- Ch??? re-render khi props c???a ch??nh n?? c?? s??? thay ?????i

        export default memo(TestMemo);
        ...
        <TestMemo/>
        <h1>{count}</h1>
        <button  onClick={handlerNumber}>Stop</button>

## useCallback

- N???u s??? d???ng **useCallback** th?? d??ng chung **memo** cho *component con*
- [] --> dependences

        const handlerNumber = useCallback(() => {
		setCount(prev => prev + 1);
	}, []);

## useMemo

1. **useMemo** tr??nh cho vi???c t??nh to??n l???i m???t function l???p ??i l???p l???i nhi???u l???n m???i l???n component re-render. 
2. B???n ch???t **useMemo** l?? caching l???i gi?? tr??? return c???a function, m???i l???n component rerender n?? s??? ki???m tra gi?? tr??? tham s??? truy???n v??o function n???u gi?? tr??? ???? kh??ng thay ?????i, th?? return value ???? caching trong memory. Ng?????c l???i n???u gi?? tr??? tham s??? truy???n v??o thay ?????i, n?? s??? th???c hi???n t??nh to??n l???i v??o tr??? v??? value, sao ???? caching l???i value cho nh???ng l???n rerender ti???p theo.
3. Do App re-render nen func bi call lai  ==> Su dung useMemo de luu kq tinh toan + tinh lai neu co it nhat 1 epenps thay doi.

        const total = useMemo(() => {
            console.log("Tinh toan lai ....");
            const total = products.reduce((result, product) => {
                return result + product.price;
            }, 0);
            return total;
        }, [products]);

## useReducer

        * Init state
        * Action
        * Reducer
        * Dispatch

1. **useReducer** th???c ch???t l?? l?? m???t phi??n b???n n??ng cao c???a **useState**.
2. Trong tr?????ng h???p logic state c???a component tr??? n??n l???n v?? ph???c t???p h???p th?? khi ???? d??ng ta s??? d??ng m???t h??m hook l?? **useReducer** s??? gi??p ch??ng ta d??? qu???n l?? v?? t??? ch???c state t???t h??n.

        // Init value
        const initCount = 0

        // Actions
        const UP_ACTION = "up"
        const DOWN_ACTION = "down"

        const reducer = (state, action) => {
            switch (action) {
                case UP_ACTION:
                    return state + 1	
                case DOWN_ACTION:
                    return state - 1
                default:
                    break;
            }
        }

        ...
        const [count, dispatch] = useReducer(reducer, initCount)

        return (
           <>
                <p>{count}</p>
                <button onClick={() => {dispatch(DOWN_ACTION)}}>Down</button>
                <button onClick={() => {dispatch(UP_ACTION)}}>Up</button>
           </>
        );


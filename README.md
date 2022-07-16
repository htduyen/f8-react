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

- Ứng dụng count down + stop
- Lưu các giá trị qua một tham chiếu bên ngoài func component
- useRef return ==> obj {**curent**: "some_thing"}
    
        const timerId = useRef()
        timerId.curent = newValue

## memo
- Có thể skip việc render khi props được truyền vào là giống nhau. **React.memo** là một higher order component. React.memo là một phương pháp được sử dụng như là một tiện ích cho việc tối ưu hoá hiệu suất ứng dụng (performance optimization).

- Không render lại những component không cần thiết
- Chỉ re-render khi props của chính nó có sự thay đổi

        export default memo(TestMemo);
        ...
        <TestMemo/>
        <h1>{count}</h1>
        <button  onClick={handlerNumber}>Stop</button>

## useCallback

- Nếu sử dụng **useCallback** thì dùng chung **memo** cho *component con*
- [] --> dependences

        const handlerNumber = useCallback(() => {
		setCount(prev => prev + 1);
	}, []);

## useMemo

1. **useMemo** tránh cho việc tính toán lại một function lặp đi lặp lại nhiều lần mỗi lần component re-render. 
2. Bản chất **useMemo** là caching lại giá trị return của function, mỗi lần component rerender nó sẽ kiểm tra giá trị tham số truyền vào function nếu giá trị đó không thay đổi, thì return value đã caching trong memory. Ngược lại nếu giá trị tham số truyền vào thay đổi, nó sẽ thực hiện tính toán lại vào trả về value, sao đó caching lại value cho những lần rerender tiếp theo.
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

1. **useReducer** thực chất là là một phiên bản nâng cao của **useState**.
2. Trong trường hợp logic state của component trở nên lớn và phức tạp hợp thì khi đó dùng ta sẽ dùng một hàm hook là **useReducer** sẽ giúp chúng ta dễ quản lý và tổ chức state tốt hơn.
3. Chi su dung useReducer thay useState de xu ly cases phuc tap.

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


import "./styles.css"
import ProductList from './components/product_list/ProductList'
import Cart from './components/cart/Cart'
function App() {

  return (
    <>
      <div className='container w-[90%] h-full max-w-[1250px] mx-auto flex flex-nowrap justify-between align-top gap-8 my-20 tb:flex-wrap tb:gap-y-8 mb:flex-wrap mb:gap-y-8'>
        <ProductList></ProductList>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App

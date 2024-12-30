import "./styles.css"
import ProductList from './components/product_list/ProductList'
function App() {

  return (
    <>
      <div className='container w-[90%] max-w-[1250px] mx-auto flex flex-nowrap justify-between align-top gap-8'>
        <ProductList></ProductList>
      </div>
    </>
  )
}

export default App

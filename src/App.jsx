import { useEffect, useState } from 'react'
import './App.css'
import CardProduct from './components/common/cards/CardProduct'
import { useNavigate } from 'react-router-dom';
import CardLoading from './components/common/cards/CardLoading';
import { useSelector } from 'react-redux';

function App() {
  const [products , setProducts] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const navigate = useNavigate();
  const loading = [1,2,3,4,5,6,7,8]
  const itemIncart = useSelector((state) => state.cart)

  //fetch product from api
  useEffect(() =>{
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
    .then((res)=> res.json())
    .then((data) => {
      setProducts(data.products);
      setIsLoading(false);
    })
    .catch((error) => console.log(error))
  } , [])

  //todo : handle click


  function handleClick(product){
    navigate('/product-detail' , {state : {product}})
  }
  return (
    <>
    <main className="mt-5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {isLoading && loading.map((index) => <CardLoading key={index}/>)}
      {!isLoading &&  products.map((product , index ) => {
        return (
          <CardProduct
          key={index}
          image={product.images[0]}
          title = {product.title}
          price = {product.price}
          id = {product.id}
          qty={1}
          description={product.description}
          handleClick = {() => handleClick(product)}
          />
        )
      })}
    </main>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Nav from './features/Nav'
import Header from './features/header'
import Footer from './features/Footer'
import Main from './features/Main'

const products = [
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 1',
    price: 200.0,
    reviews: 4.2,
    variants: [
      { originPrice: 250.0 },
      { originPrice: 300.0, salePrice: 250.0 },
    ],
    isSale: true,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 2',
    price: 150.0,
    reviews: 4.5,
    variants: [{ originPrice: 180.0 }, { originPrice: 200.0 }],
    isSale: false,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 3',
    price: 99.0,
    reviews: 4.0,
    variants: [{ originPrice: 120.0, salePrice: 99.0 }],
    isSale: true,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 4',
    price: 350.0,
    reviews: 4.8,
    variants: [{ originPrice: 400.0 }],
    isSale: false,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 5',
    price: 75.0,
    reviews: 3.5,
    variants: [
      { originPrice: 90.0, salePrice: 75.0 },
      { originPrice: 100.0, salePrice: 80.0 },
    ],
    isSale: true,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 6',
    price: 180.0,
    reviews: 4.1,
    variants: [{ originPrice: 200.0, salePrice: 180.0 }],
    isSale: true,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 7',
    price: 299.0,
    reviews: 4.3,
    variants: [{ originPrice: 320.0, salePrice: 299.0 }],
    isSale: true,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 8',
    price: 120.0,
    reviews: 4.6,
    variants: [{ originPrice: 140.0, salePrice: 120.0 }],
    isSale: true,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 9',
    price: 220.0,
    reviews: 4.4,
    variants: [
      { originPrice: 250.0, salePrice: 220.0 },
      { originPrice: 280.0, salePrice: 240.0 },
    ],
    isSale: true,
  },
  {
    thumbnail: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    name: 'Sản phẩm 10',
    price: 90.0,
    reviews: 3.9,
    variants: [{ originPrice: 100.0, salePrice: 90.0 }],
    isSale: true,
  },
];


function App() {
  const [count, setCount] = useState(0)
   const [{product, loading,error}, setProduct]= useState({
    products:[],
    loading:true,
    error:null,
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
        setError(null);
      } catch (error) {
        setProducts([]);
        setLoading(false);
        setError('Failed to fetch product data');
      }
    };

    fetchData();
  }, []);
  if(loading) return <div>Loading...</div>
  if (error)  return <div>Error :{error}</div>
  

  return (
    <>
    <Nav/>
    <Header/>
    <Main products = {products}/>
    <Footer/>




    </>

    


  )
}

export default App

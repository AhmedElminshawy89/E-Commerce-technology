import { Fragment,useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, useParams } from "react-router-dom";
import Root from "./Components/Root/Root";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notifySuccess = () =>    

    toast(' Product is added to cart ', {
      type:"success",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
    );
    const notifyWarning = () =>    

    toast(' The Product is already added to cart ', {
      type:"warning",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
    );

    const notifySuccessFavorite = () =>    

    toast(' Product is added to favorite ', {
      type:"success",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
    );
    const notifyWarningFavorite = () =>    

    toast(' The Product is already added to favorite ', {
      type:"warning",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
    );

  const [StoreData,setStoreData]=useState([])
  const [cart,setCart]=useState([])
  const [favorite,setFavorite]=useState([])


  const FetchData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products');
    setStoreData(response.data)
  }

useEffect(()=>
{
  FetchData()
},[])

const allcategory=['All',...new Set(StoreData.map((i)=>i.category))]

const filterCategory=(p)=>{
  if(p==='All'){
    FetchData();
  }else{
    const newarr=StoreData.filter((e)=>e.category===p);
    setStoreData(newarr);
  }
}

const filterSearch=async(word)=>{
  if(word===''){
    FetchData()
  }else{
    const response=await axios.get(`https://fakestoreapi.com/products/category/${word}`)
    setStoreData(response.data);
  }
}

  const addtocart=(product)=>{

    const exist=cart.find((x)=>{
      return x.id===product.id;
    })
    if(exist){
      notifyWarning();
    }else{
      setCart([...cart,{...product,qty:1  }])
      notifySuccess();
    }
  }

const addtofavorite=(product)=>{
  const exist=favorite.find((x)=>{
    return x.id===product.id;
  })
  if(exist){
    notifyWarningFavorite();
  }
  else{
    setFavorite([...favorite,{...product}]);
    notifySuccessFavorite();
  }
}

  return (
    <Fragment>
      {/* <Bounce > */}
        <BrowserRouter>
                <ToastContainer/>
                <NavBar Cart cart={cart} favorite={favorite} StoreData={StoreData} filterSearch={filterSearch}/> 
                <Root StoreData={StoreData} filterCategory={filterCategory} allcategory={allcategory}  cart={cart} setCart={setCart} favorite={favorite} setFavorite={setFavorite} addtofavorite={addtofavorite} addtocart={addtocart}></Root> 
                <Footer/>  
        </BrowserRouter>
      {/* </Bounce > */}
    </Fragment>
  );
}

export default App;

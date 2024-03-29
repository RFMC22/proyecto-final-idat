import { addDoc, collection, getDoc, getDocs, setDoc } from "firebase/firestore";
import { database } from "../../firebase/Config";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";

import '../../styles/pages/admin/Product.css'
import { getPromosPersonales } from "../../services";

const Product = () => {
  const {register, handleSubmit, reset} = useForm();
  const [selectedCollection, setSelectedCollection] = useState('combos');

  const fieldsByCollection = {
    combos: ['name', 'price', 'img', 'link', 'description', 'orderimg', 'bigPrice', 'terms'],
    hamburguesas: ['name', 'price', 'img', 'link','terms'],
    complementos: ['name', 'price', 'img', 'link', 'terms'],
    bebidas: ['name', 'price', 'img','link','terms'],
    inka_chips: ['name', 'price', 'img', 'link','terms'],
    menu: ['name', 'img', 'link'],
    promociones_online: ['name','description','actual_price','old_price','discount', 'img'],
    promociones_personales: ['name','description','actual_price','old_price','discount','img'],
    promociones_para_dos: ['name','description','actual_price','old_price','discount','img','terms'],
    promociones_para_compartir: ['name','description','actual_price','old_price','discount','img','terms'],
    cupones: ['name','description','announcement','actual_price','old_price','discount','img']
  };

  const numericFields = [ 
    'price',
    'bigPrice',
    'actual_price',
    'old_price',
    'discount'
  ]

  useEffect(()=>{
    // const getData = async () => {
    //   const collRef = collection(database, 'pollo');
    //   const data = await getDocs(collRef)
    //   data.docs.map(doc => console.log({...doc.data(),id:doc.id}))
    // }
    // getData()
     getPromosPersonales()
  },[])

  const newProduct = product => {
    const selectedCollectionFields = fieldsByCollection[selectedCollection];
    const filteredData = Object.keys(product)
      .filter(key => selectedCollectionFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = product[key];
        return obj;
      }, {});
    const collectionRef = collection(database, selectedCollection);
    addDoc(collectionRef, filteredData);
    reset();
  }
  const handleCollectionChange = (event) => {
    setSelectedCollection(event.target.value);
  };

  return (
    <div className="container admin-form">
      <h1>Agregar Productos</h1>
      <form onSubmit={handleSubmit(newProduct)}>
        <select value={selectedCollection} onChange={handleCollectionChange}>
          <option value="combos">Combos</option>
          <option value="hamburguesas">Hamburguesas</option>
          <option value="complementos">Complementos</option>
          <option value="bebidas">Bebidas</option>
          <option value="inka_chips">Inka Chips</option>
          <option value="menu">Menu</option>
          <option value="promociones_online">Promociones Online</option>
          <option value="promociones_personales">Promociones Personales</option>
          <option value="promociones_para_dos">Promociones para Dos</option>
          <option value="promociones_para_compartir">Promociones para Compartir</option>
          <option value="cupones">Cupones</option>
        </select>
        {fieldsByCollection[selectedCollection].map(fieldName => (
          <div key={fieldName}>
            <input 
              type={numericFields.includes(fieldName) ? 'number' : 'text'}
              step={numericFields.includes(fieldName) ? 0.01 : undefined}
              placeholder={`Ingresa el ${fieldName}`}
              {...register(fieldName,{required:true, ...(numericFields.includes(fieldName) && {valueAsNumber:true})})}
            />
          </div>
        ))}
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Product
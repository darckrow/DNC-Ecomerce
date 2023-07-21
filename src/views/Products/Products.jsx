/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Serch/Serch'
import './index.scss'
import ProductDetail from '../../components/ProductDetail/ProductDetail'


const Products = ({data}) => {
  const {productId} = useParams();
  const selectdProduct = data.find(product => product.id == productId)


  return (
    <section className="Product">
      <HeaderMenu/>
      <Search/>
      <ProductDetail data={selectdProduct}/>
    </section>

)
}

export default Products
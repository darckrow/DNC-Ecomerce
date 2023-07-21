import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Serch/Serch";
import ProductsCard from "../../components/ProductsCard/ProductsCard";




const Home = ({ data }) => {
    console.log(data)
    return (
        <div className="Home">
            <HeaderMenu />
            <Search />
                <div className="home__products">
            {data.map((product) => (
                <ProductsCard key={product.id} data={product} />
                ))}
                </div>
            
        
        </div>
    )
};

export default Home;
import Plantilla from '../Components/Plantilla';
import Cortes from '../Components/Cortes';
import junior from '../assets/imgs/junior.png';
import Clasico from'../assets/imgs/Clasico.png';
import Caballero from'../assets/imgs/Caballero.png';
import '../assets/styles/Cortes.css';



function App() {

    const products = [
        {
            img: junior,
            name: "Corte junior para niños",
            price: "$230",
        },
        {
            img:Clasico,
            name: "Paquete clasico",
            price: "$430",
        },
        {
            img:Caballero,
            name: "Corte caballero",
            price: "$320",
        },
    ];

    return (
        <div className='App'>

            <Plantilla>
            
                    <div className='container-body'>
                         
                            {products.map((product) => {
                                return (
                                    <Cortes 
                                        img={product.img}
                                        name={product.name}
                                        price={product.price}
                                    />
                            
                                )
                            })}
                        
                    </div>
                
            </Plantilla>


        </div>
    );
}

export default App;
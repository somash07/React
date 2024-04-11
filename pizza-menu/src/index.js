import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  
function App(){
    return <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
}


function Header(){
  //inline css.
    // const style={color: 'red', fontSize: '40px', textTransform: 'uppercase'}
    // return <h1 style={style}>Somash React Pizza </h1>
    return (
      <header className='header'>
       <h1>Somash React Pizzas</h1>
       </header>
    )
   
}

function Menu(){
  const numPizzas=pizzaData.length;
    return <main className='menu'>
        <h2>Our Menu</h2>
       

        {(numPizzas>0)? 
        <ul className="pizzas">
          {pizzaData.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
        </ul>:<p>we are working on menu</p>}
        
        {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={100}/>

        <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/funghi.jpg' price={200}/> */}

        </main>
}

function Pizza(props){
  // console.log(props)
    return (
        <li className='pizza'>
            <img src={props.pizzaObj.photoName} alt={props.name} />
            <div>
              <h3>{props.pizzaObj.name}</h3>
              <p>{props.pizzaObj.ingredients}</p>
              <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    )
}

function Footer(){
    const hour=new Date().getHours()
    const openHour=9;
    const closeHour=22;

    // if(hour>=openHour && hour <=closeHour){
    //     alert('we are open')
    // }
    // else{
    //     alert('we are closed')
    // }

    const isOpen= (hour>=openHour && hour <=closeHour)
    return <footer className='footer'>
      {
         isOpen ?
         <div className='order'>
         <p> We're Open until {closeHour}:00 . Come visit us or order online.</p>

          <button className='btn'>Order</button>
         </div>:<p>We are currently closed. We welcome you from {openHour}:00</p>
      }
    </footer>
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>)
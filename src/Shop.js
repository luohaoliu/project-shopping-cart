import  React, {useState, useEffect } from "react";
import "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import Nav from "./Nav"

const Shop = () => {

  const inventory = 
  [{image: './Doughnut.jpg', name: "French Cruller Doughnut", identity:"frenchCrullerDoughnut", price: 1.50},
  {image: './Glazed-Donut.jpg', name: "plain glazed donut", identity:"plainGlazedDonut", price: 1.50},
  {image: "./Jelly-Donut.jpg", name: "jelly donut", identity:"jellyDonut", price: 1.50},
  {image: "./Donut-Toasted-Coconut.jpg", name: "Coconut doughnut", identity: "coconutDoughnut", price: 1.50},
  {image: "./Vanilla-Sprinkled.jpg", name: "Vanilla sprinkled donut", identity: "vanillaSprinkledDonut", price: 1.50},
  {image: "./Chocolate-Sprinkled.jpg", name: "Chocolate sprinkled donut", identity:"chocolateSprinkledDonut", price: 1.50},
  {image: "./Pink-Frosted-Donut.jpg", name: "Pink frosted donut", identity: "pinkFrostedDonut", price: 1.50},
  {image: "./Dough-Donut-Dulce-de-Leche.jpg", name: "Dulce de Leche doughnut", identity: "dulceDeLecheDoughnut", price: 1.50},
  {image: "./Dough-Donut-Toasted-Coconut.jpg", name: "toasted coconut donut", identity: "toastedCoconutDonut", price: 1.50},
  {image: "./Dough-Donut-Cafe-Au-Lait.jpg", name: "Cafe au Lait doughnut", identity: "cafeAuLaitDoughnut", price: 1.50}];

  
  const [allCountValues, setAllCountValues] = useState({

    frenchCrullerDoughnut: 0,
    plainGlazedDonut: 0,
    jellyDonut: 0,
    coconutDoughnut: 0,
    vanillaSprinkledDonut: 0,
    chocolateSprinkledDonut: 0,
    pinkFrostedDonut: 0,
    dulceDeLecheDoughnut: 0,
    toastedCoconutDonut: 0,
    cafeAuLaitDoughnut: 0,

  });

  const [countNextToShoppingBasket, setCountNextToShoppingBasket] = useState(0);

  const [arrayThatShouldBeIncluded, setarrayThatShouldBeIncluded] = useState([]);

  const [finalAmount, setFinalAmount] = useState(0);

  const changeHandler = (e) => {

    setAllCountValues({...allCountValues, [e.target.name]: e.target.value});
    
  }

  const [selectedItemsOnly, setSelectedItemsOnly] = useState(false);

  const minusButton = (obj) => {

    const arrayCopy = JSON.parse(JSON.stringify(allCountValues));

    for (const donutName in arrayCopy) {

      if (donutName === obj && arrayCopy[donutName] >= 1) {

        arrayCopy[donutName] -= 1;

      }
    }
    setAllCountValues(arrayCopy);
    
  }


  const plusButton = (obj) => {

    const arrayCopy = JSON.parse(JSON.stringify(allCountValues));
    
    for (const donutName in arrayCopy) {

      if (donutName === obj) {

        arrayCopy[donutName] += 1;
      }
    }

    setAllCountValues(arrayCopy);
  }

  const addToShoppingBasket = () => {

    const arrayCopy = JSON.parse(JSON.stringify(allCountValues));
    
    let totalItemsInShoppingCart = 0;

    for (const donutName in arrayCopy) {
    
      totalItemsInShoppingCart += arrayCopy[donutName];
    }

    setCountNextToShoppingBasket(totalItemsInShoppingCart);
  
  };


  const payBill =() => {

    if(countNextToShoppingBasket !== 0) {
      const arrayCopy = JSON.parse(JSON.stringify(allCountValues));
      const eligibleItemArray = [];

      for (const donutName in arrayCopy) { 

          if (arrayCopy[donutName] > 0) {

            eligibleItemArray.push(donutName);
          }

      }

      setarrayThatShouldBeIncluded(eligibleItemArray);

      let totalPriceAmount = 0;

      for (let i = 0; i<inventory.length; i++) {

        if (arrayThatShouldBeIncluded.includes(inventory[i].identity)){

          totalPriceAmount += inventory[i].price * allCountValues[inventory[i].identity];
        }
      }

      setFinalAmount(totalPriceAmount);
      
      setSelectedItemsOnly(true);
    
    } else {
      alert("Please add donuts to the shoppoing basket.");
    }
    
  }

  const confirmPayment = () => {
    setAllCountValues({

      frenchCrullerDoughnut: 0,
      plainGlazedDonut: 0,
      jellyDonut: 0,
      coconutDoughnut: 0,
      vanillaSprinkledDonut: 0,
      chocolateSprinkledDonut: 0,
      pinkFrostedDonut: 0,
      dulceDeLecheDoughnut: 0,
      toastedCoconutDonut: 0,
      cafeAuLaitDoughnut: 0,
  
    })

    setCountNextToShoppingBasket(0);

    alert("Thanks for coming by. See you next time.")

    setSelectedItemsOnly(false);

  }

  useEffect(()=> {

    const arrayCopy = JSON.parse(JSON.stringify(allCountValues));

    const eligibleItemArray = [];

    for (const donutName in arrayCopy) { 

        if (arrayCopy[donutName] > 0) {

          eligibleItemArray.push(donutName);
        }

    }

    setarrayThatShouldBeIncluded(eligibleItemArray);

    let totalPriceAmount = 0;

    for (let i = 0; i<inventory.length; i++) {
      if (arrayThatShouldBeIncluded.includes(inventory[i].identity)){
        totalPriceAmount += inventory[i].price * allCountValues[inventory[i].identity];
      }
    }

    setFinalAmount(totalPriceAmount);
    
  }, [countNextToShoppingBasket]);

  
  return (
    <div>
      <Nav countNextToShoppingBasket={countNextToShoppingBasket} />
      <div id="food-background" style={{display: "block"}} >
      {inventory.map((donut, index) => {
        if (arrayThatShouldBeIncluded.includes(donut.identity) && selectedItemsOnly === true ) {
        return (
        <ul key={index}> 
        <div className="individual-image">    
        <img className="small-image" src={donut.image} style={{width:"150px", height:"150px", padding: "2px", borderRadius:"100px", position: "relative", top: "5px"}} alt={donut.name} ></img>
        <p style={{position: "relative",  left: "22px", fontFamily:"monospace", fontSize: "11px", top: "5px"}}>{donut.name} {donut.price}</p>        
        <div style={{position:"relative", left: "40px", top: "5px"}}> 
        <input disabled={true} type="number" name={donut.identity} style={{position: "sticky", width: "40px", textAlign: "center"}} onChange={changeHandler} value={allCountValues[donut.identity]} /> 
        </div>      
      </div>
      </ul>
    )} 
  
    if(selectedItemsOnly === false) {
      return (
        <ul key={index}> 
        <div className="individual-image">
          <img className="small-image" src={donut.image} style={{width:"150px", height:"150px", padding: "2px", borderRadius:"100px", position: "relative", top: "5px"}} alt={donut.name} ></img>
          <p style={{position: "relative",  left: "22px", fontFamily:"monospace", fontSize: "11px", top: "5px"}}>{donut.name} {donut.price}</p>
          <div style={{position:"relative", left: "40px", top: "5px"}}>
          <button onClick={()=>plusButton(donut.identity)}><FontAwesomeIcon icon={faPlus} style={{color: "grey"}} /></button>
          <button onClick={()=>minusButton(donut.identity)}><FontAwesomeIcon icon={faMinus} style={{color: "grey"}} /></button>
          <input type="number" name={donut.identity} style={{position: "sticky", width: "40px"}} onChange={changeHandler} value={allCountValues[donut.identity]} /> 
          <button onClick={addToShoppingBasket} style={{position: "sticky"}}> <FontAwesomeIcon icon={faShoppingBasket} style={{color: "grey"}} /></button>
          </div>
        </div>
        </ul>
      )
    }
    
    })}
      </div>

      <div style={{fontFamily: "monospace", fontSize: "20px", position: "relative", top: "500px", left: "550px", display: selectedItemsOnly ? "block" : "none", visibility: finalAmount === 0 ? "hidden" : "visible"}}>Total amount: $ {finalAmount} </div>
      <button onClick={confirmPayment} style={{fontFamily: "monospace", fontSize: "20px", position: "relative", top: "520px", left: "560px", borderRadius: "50px", display: selectedItemsOnly ? "block" : "none", visibility: finalAmount === 0 ? "hidden" : "visible"}}>Submit the order</button>
      <button onClick={payBill} style={{fontFamily: "monospace", fontSize: "20px", position: "relative", top: "585px", left: "555px", borderRadius: "50px", display: selectedItemsOnly ? "none" : "block"}}>Go to checkout</button>
      </div>
  );
}

export default Shop;

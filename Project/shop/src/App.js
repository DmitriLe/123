import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Basket from "./Pages/Basket";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Items from "./Components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Книга 1',
          img: '_pishheblok.jpg',
          price: '2100'
        },
        {
          id: 2,
          title: 'Книга 2',
          img: '_poslednee-zhelanie.jpg',
          price: '8500'
        },
        {
          id: 3,
          title: 'Книга 3',
          img: '_priklyucheniya-elektronika.jpg',
          price: '3600'
        },
        {
          id: 4,
          title: 'Книга 4',
          img: '1.jpg',
          price: '24000'
        }
      ]
    } 
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Routes>
            <Route path="*" element={<Notfound/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Items items={this.state.items} onAdd={this.addToOrder}/>
          <Footer />
        </div>
      </Router>
    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray=true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item]})
  }

}

export default App;

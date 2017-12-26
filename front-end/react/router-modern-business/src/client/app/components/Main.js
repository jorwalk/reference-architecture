import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Services from './containers/Services'
import Contact from './containers/Contact'
import PortfolioOne from './containers/PortfolioOne'
import PortfolioTwo from './containers/PortfolioTwo'
import PortfolioThree from './containers/PortfolioThree'
import PortfolioFour from './containers/PortfolioFour'
import PortfolioItem from './containers/PortfolioItem'
import Pricing from './containers/Pricing'
import NotFound from './containers/NotFound'
import FullWidth from './containers/FullWidth'
import LongScroll from './containers/LongScroll'
import ShopHomepage from './containers/ShopHomepage'
import ShopItem from './containers/ShopItem'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => {
  return (
    <main className='container-fluid'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/sidebar' component={Sidebar}/>
        <Route exact path='/portfolio-1-col' component={PortfolioOne}/>
        <Route exact path='/portfolio-2-col' component={PortfolioTwo}/>
        <Route exact path='/portfolio-3-col' component={PortfolioThree}/>
        <Route exact path='/portfolio-4-col' component={PortfolioFour}/>
        <Route exact path='/portfolio-item' component={PortfolioItem}/>
        <Route exact path='/pricing' component={Pricing}/>
        <Route exact path='/404' component={NotFound}/>
        <Route exact path='/full-width' component={FullWidth}/>
        <Route exact path='/long-scroll' component={LongScroll}/>
        <Route exact path='/shop-homepage' component={ShopHomepage}/>
        <Route exact path='/shop-item' component={ShopItem}/>
      </Switch>
    </main>
  )
}

export default Main

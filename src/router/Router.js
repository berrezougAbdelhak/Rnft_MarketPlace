import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from '../collection/Collection'
import MarketPlace from '../marketplace/MarketPlace'

function Router() {
  return (
    <Routes>
        <Route
            path="/"
            element={<MarketPlace />}
        />
        <Route
            path="/collection"
            element={<Collection />}
        />
        
        

    </Routes>
  )
}

export default Router
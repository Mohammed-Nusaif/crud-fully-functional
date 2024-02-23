

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crud1 from './Crud1'
import Create from './Actions/Create'
import Update from './Actions/Update'
import Delete from './Actions/Delete'
import ViewComponent from './Actions/ViewComponent'

function Router1() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Crud1/>}/>
                <Route path='/Create' element={<Create/>}/>
                <Route path='/Update/:_id' element={<Update/>}/>
                <Route path='/view/:_id' element={<ViewComponent/>}/>
                <Route path='/Delete/:user' element={<Delete/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router1
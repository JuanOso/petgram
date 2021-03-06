/* eslint-disable react/jsx-indent */
import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './components/pages/Home'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            </Router>
      }
    </>
  )
}

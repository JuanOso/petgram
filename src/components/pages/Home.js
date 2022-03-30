import React from 'react'
import { ListOfCategories } from '../ListOfCategories'
import { ListOfPhotoCards } from '../ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

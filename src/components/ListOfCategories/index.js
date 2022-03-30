import React, { useState, useEffect } from 'react'
import { Category } from '../category'
import { Item, List } from './styles'

// custom hook
function useCategoriesDate () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(
    function () {
      setLoading(true)
      window.fetch('https://petgram-server-juan-oso-juanoso.vercel.app/categories')
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    }, [])
  return { categories, loading }
}

// && quiere decir entonces, como para comparar si algo es true or false
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesDate()

  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
              loading
                ? <Item key='loading'><Category /></Item>
                : categories.map(category =>
                  <Item key={category.id}>
                    <Category {...category} path={`/pet/${category.id}`} />
                  </Item>
                )
          }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

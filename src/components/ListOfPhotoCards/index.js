import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/client'
import { withPhotos } from '../hoc/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId } })

  if (error) {
    return <h2>Internasl server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul>
      {
                data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
            }
    </ul>
  )
}

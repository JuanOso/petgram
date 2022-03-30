import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { LikeButton } from '../likeButton'
import { useMutationToggleLike } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { mutation, mutationLoading, mutationError } = useMutationToggleLike()

  // console.log(liked)
  const handleLikeClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
    console.log(mutationLoading, mutationError, ' mutations logs')
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>

            </a>
            <LikeButton liked={liked} likes={likes} onClick={handleLikeClick} />
          </>
      }
    </Article>
  )
}

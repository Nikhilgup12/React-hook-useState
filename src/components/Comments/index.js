import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [commentList, setList] = useState([])
  const onComment = event => setComment(event.target.value)
  const onName = event => setName(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newcomment = {
      id: uuidv4(),
      name,
      comment,
    }

    setList(prevstate => [...prevstate, newcomment])
    setName(' ')
    setComment(' ')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onName}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onComment}
          value={comment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        <ul>
          {commentList.map(each => (
            <CommentItem commentDetails={each} />
          ))}
        </ul>
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments

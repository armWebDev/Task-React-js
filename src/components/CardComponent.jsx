import './CardComponent.css'

function CardComponent({ post, openPopup }) {
  return (
    <div className='cardItem' onClick={() => openPopup(post)}>
      <div className='imageItem'>
        <img
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          src={post.img}
          alt={post.title}
        />
      </div>
      <p className='categoryItem'>{post.tags}</p>
      <p className='hraderTitle'>{post.title}</p>
      <p>
        <span className='aouthorName'>{post.autor}</span>
        <span className='spanComponent'>
          • {post.date} • {post.views} Views
        </span>
      </p>
      <p className='postText'>{post.text}</p>
    </div>
  );
}

export default CardComponent;
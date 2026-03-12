import "./PopUp.css";
import cencel from "../assets/images/x.svg";

function PopUp({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="popupOverlay" onClick={onClose}>
      <div className="popupContent" onClick={(e) => e.stopPropagation()}>
        <div className="postPopHeader">
            <h2>{post.title}</h2>
            <div className="closeMenu" onClick={onClose}>
                <img src={cencel} alt="" />
            </div>
        </div>
        <p>{post.text}</p>
      </div>
    </div>
  );
}

export default PopUp;

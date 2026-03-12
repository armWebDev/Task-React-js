import { useEffect, useState } from "react";
import "./BodyElements.css";
import CardComponent from "./CardComponent";
import { useSelector } from "react-redux";
import PopUp from "./PopUp";

function BodyElements() {
  const searchTerm = useSelector((state) => state.search.term);
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((status) => status.json())
      .then((receivedData) => {
        setData(receivedData);
        setFilteredData(receivedData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!data) return;
    const arr = data.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.text.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredData(arr);
  }, [searchTerm, data]);

  return (
    <div className="containerElements">
      <div className="containerBody">
        {!data
          ? "Loading..."
          : filteredData.map((element, key) => {
              return (
                <CardComponent
                  key={key}
                  post={element}
                  openPopup={setSelectedPost}
                />
              );
            })}

        <PopUp post={selectedPost} onClose={() => setSelectedPost(null)} />
      </div>
    </div>
  );
}

export default BodyElements;

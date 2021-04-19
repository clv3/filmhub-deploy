import React from "react";
import "./styles.scss";
import firebase from 'firebase/app';
import { PostList } from "./PostList";

function Posts() {
  const [reviews, setReviews] = React.useState([]);
  

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("reviews").get();
      setReviews(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  

  return (
    <ul>
      {reviews.map(review => (
          <div>
        <li key={review.username}>
          <PostList review={review} />
        </li>
        
        </div>
      ))}
      
    </ul>
  );
}

export default Posts;
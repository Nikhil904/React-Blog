import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="Image"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos commodi
        corrupti corporis quidem voluptatum repudiandae ipsa, maiores explicabo
        aspernatur consequatur est quo quia dicta illo dolore nihil quas et cum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos commodi
        corrupti corporis quidem voluptatum repudiandae ipsa, maiores explicabo
        aspernatur consequatur est quo quia dicta illo dolore nihil quas et cum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos commodi
        corrupti corporis quidem voluptatum repudiandae ipsa, maiores explicabo
        aspernatur consequatur est quo quia dicta illo dolore nihil quas et cum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos commodi
        corrupti corporis quidem voluptatum repudiandae ipsa, maiores explicabo
        aspernatur consequatur est quo quia dicta illo dolore nihil quas et cum.
      </p>
    </div>
  );
};

export default Post;
// 35.35

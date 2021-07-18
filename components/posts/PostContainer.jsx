import PostItem from "./PostItem";

const PostContainer = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
export default PostContainer;

import Post from "../components/Post";

interface PostPropsType {
  title: string;
  body: string;
  id: number;
}

const PostPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostPropsType[] = await data.json();
  return (
    <div>
      <h2>Post page: {posts.length}</h2>
      <div className=" grid grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;

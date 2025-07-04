import PostForm from "../components/PostForm";

function AddPost({addPost}) {
    return(
        <div>
            <h1>⚡☄️🌤️</h1>
                <h2>Add a New Post</h2>
            <PostForm addPost={addPost} />
             <h1>☄️☄️☄️</h1>
        </div>
    );
}

export default AddPost;
import PostList from "../components/PostList";
import PostItem from "../components/PostItem";
import './Home.css'

function Home({posts}) {
    return(
        <div className="home-container">
            <p>😍Welcome to the Wall Post Of NITTE😘</p>
            {posts.length === 0 ? (
                <p>No Posts yet!!!</p>
            ) : (
                <PostList posts={posts}/>
            )}
        </div>
    );
}

export default Home;
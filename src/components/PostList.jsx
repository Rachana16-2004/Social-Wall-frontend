import PostItem from "./PostItem";

function PostList({posts}) {
    return(
        <div>
            {posts.length === 0 ? (
                <p>😒No Posts yet!!😒</p>               
            ) : (
                posts.map(({text, image}, index) => (
                    <PostItem key={index} text={text} image={image}/>
                ))
            )}
        </div>
    );
}

export default PostList;
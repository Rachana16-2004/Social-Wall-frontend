function PostItem({text, image}) {
    return(
        <div className="post-card">
            <p>{text}</p>
            {image &&(
                <img 
                    src={image}
                    alt='Uploaded Image'
                    style={{maxWidth: '100%', borderRadius: '10px', marginTop:'0.5rem'}}
                />
            )}
        </div>
    );
}

export default PostItem;
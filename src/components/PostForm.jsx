import { useState } from "react";

function PostForm({addPost}) {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '' && !image) return;
        addPost({text, image});
        setText('');
        setImage(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        } else {
            setImage(null);
        }
    };

    return(
        <form onSubmit={handlesubmit}>
            <textarea 
                placeholder="What's on your mind..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                cols={40}
            />
            <br />
            <input 
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <br />
            <button type="submit">Post</button>
        </form>
    )
}

export default PostForm;
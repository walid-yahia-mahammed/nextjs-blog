import PostItem from "./post-item"
import classes from "./logo.module.css"

function PostsGrid(props){
    const {posts} = props;

    return <ul className={classes.grid}>
        {posts.map(post=> <PostItem />)}
    </ul>
}

export default PostsGrid;
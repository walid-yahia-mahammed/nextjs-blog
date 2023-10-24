import classes from "./all-posts.module.css"
import PostsGrid from "./posts-grid";

function AllPosts(props){
    return <section className={classes.posts}>
        <h2>All Posts</h2>
        <PostsGrid posts={props.posts} />
    </section>
}

export default AllPosts;
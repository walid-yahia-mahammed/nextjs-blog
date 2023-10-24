import Link from "next/link";
import Image from 'next/image';
import classes from "./post-item.module.css"

function PostItem(props){
    const { title, image, excerpt, date, slug} = props.post;
    const formatedDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return <li className={classes.post}>
        <Link>
            <div className={classes.image}>
                <Image src={image} alt={title} width={300} height={200} />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formatedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
}

export default PostItem;
import { PostSmallProps } from "./post-small.model";
import Image from 'next/image'

export const PostSmall = ({ className = "", post }: PostSmallProps) => {
    return (
        <div className={"item post-small " + className}>
            <Image
                loader={({ src, width, quality }) => {
                    return `${src}?w=${width}&q=${quality || 75}`
                }}
                src={post.preview}
                className={"item-preview"}
                alt=""
                fill
                sizes='100vw'
            />

            <div className="item-content">
                <div className="main-content">
                    <div className="meta-category">
                        <span>Fashion</span>
                    </div>
                    <a href="post-details.html"><h4>{post.title}</h4></a>
                    <ul className="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">{post.date}</a></li>
                        <li><a href="#">12 Comments</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
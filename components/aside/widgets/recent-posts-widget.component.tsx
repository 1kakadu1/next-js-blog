import Link from "next/link"

interface IRecentPostsProps {
    title: string, date: string, href: string
}

export const RecentPosts = ({ posts }: { posts: IRecentPostsProps[] }) => {
    return (
        <div className="sidebar-item recent-posts">
            <div className="sidebar-heading">
                <h2>Recent Posts</h2>
            </div>
            <div className="content">
                <ul>
                    {
                        posts.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                >
                                    <h5>{item.title}</h5>
                                    <span>{item.date}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
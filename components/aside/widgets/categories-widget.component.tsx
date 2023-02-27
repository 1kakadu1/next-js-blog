interface ICategoriesProps {
    href: string,
    title: string
}
export const Categories = ({ categories }: { categories: ICategoriesProps[] }) => {
    return (
        <div className="sidebar-item categories">
            <div className="sidebar-heading">
                <h2>Categories</h2>
            </div>
            <div className="content">
                <ul>
                    {
                        categories.map((item) => (
                            <li key={item.href}><a href={item.href}>- {item.title}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export const LayoutPosts = ({ children, sidebar, footer }: { children: JSX.Element[] | JSX.Element, sidebar: JSX.Element, footer?: JSX.Element }) => {
    return (
        <section className="blog-posts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="all-blog-posts">
                            <div className="row">
                                {children}
                            </div>
                        </div>
                        {
                            footer && (
                                <div className="all-blog-posts__footer">
                                    {footer}
                                </div>
                            )
                        }

                    </div>

                    <div className="col-lg-4">
                        {sidebar}
                    </div>
                </div>
            </div>
        </section>
    )
}
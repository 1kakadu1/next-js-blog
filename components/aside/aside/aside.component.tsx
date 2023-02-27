import { Categories } from "../widgets/categories-widget.component"
import { RecentPosts } from "../widgets/recent-posts-widget.component"
import { SearchWidget } from "../widgets/search-widget.component"
import { Tags } from "../widgets/tags-widget.component"

export const Aside = () => {
    return (
        <div className="sidebar">
            <div className="row">

                <div className="col-lg-12">
                    <SearchWidget />
                </div>

                <div className="col-lg-12">
                    <RecentPosts posts={
                        [
                            {
                                title: 'Swag hella echo park leggings, shaman cornhole ethical coloring',
                                date: 'May 14, 2020',
                                href: "/swag"
                            }
                        ]
                    } />
                </div>

                <div className="col-lg-12">
                    <Categories
                        categories={[
                            {
                                title: "Awesome Layouts",
                                href: "/1"
                            },
                            {
                                title: "Creative Ideas",
                                href: "/2"
                            },
                            {
                                title: "Responsive Templates",
                                href: "/3"
                            }

                        ]}
                    />
                </div>
                <div className="col-lg-12">
                    <Tags />
                </div>
            </div>
        </div>
    )
}
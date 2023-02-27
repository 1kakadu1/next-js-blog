import { CallToAction } from '@/components/call-to-action/call-to-action.component'
import { LayoutPage } from '@/components/layouts/layout-page/layout-page.component'
import Image from 'next/image'

export default function About() {
    return (
        <LayoutPage
            meta={{
                title: "About",
                description: "Generated by create next app"
            }}
        >
            <CallToAction
                preview='https://wallpaperaccess.com/full/1308942.png'
                title='OUR RECENT BLOG ENTRIES'
                subtile='RECENT POSTS'
                classes={{
                    root: "call-to-action_size"
                }}
                full
            />

            <section className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about__preview">
                                <Image
                                    loader={({ src, width, quality }) => {
                                        return `${src}?w=${width}&q=${quality || 75}`
                                    }}
                                    src={"https://environment.ec.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2021-07/banner_v1_1.png?itok=_VO4aRIL"}
                                    alt=""
                                    fill
                                    sizes='50vw'
                                />
                            </div>
                            <p>Please tell your friends about TemplateMo website. Thank you. You can browse through different categories of templates such as <a rel="nofollow" href="https://templatemo.com/tag/business" target="_parent">business</a>, <a rel="nofollow" href="https://templatemo.com/tag/portfolio" target="_parent">portfolio</a>, <a rel="nofollow" href="https://templatemo.com/tag/restaurant" target="_parent">restaurant</a>, etc. Pellentesque quis luctus libero. Maecenas pretium molestie erat, ac tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin. Fusce vitae commodo turpis. Integer ullamcorper purus nec justo mollis fermentum. Nunc imperdiet erat nec lacinia laoreet. <br /><br />Maecenas faucibus ullamcorper felis vitae finibus. Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Two-One Donec porttitor augue</h4>
                            <p>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                        </div>
                        <div className="col-lg-6">
                            <h4>Two-Two Donec porttitor augue</h4>
                            <p>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <h4>1-03 Donec porttitor augue</h4>
                            <p>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4>2-03 Donec porttitor augue</h4>
                            <p>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>3-03 Donec porttitor augue</h4>
                            <p>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h4>01 Four Columns</h4>
                            <p>Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4>02 Four Columns</h4>
                            <p>Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4>03 Four Columns</h4>
                            <p>Morbi ac interdum metus. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4>04 Four Columns</h4>
                            <p>Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="social-icons">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >

        </LayoutPage>
    )
}

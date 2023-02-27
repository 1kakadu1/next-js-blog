import { IPostProps } from "./post.model";
import Image from 'next/image'

export const Post = ({ classes, small = false }: IPostProps) => {
    return (
        <div className={`blog-post ${classes?.root ? classes.root : ""}`}>
            <div className="blog-thumb">
                <Image
                    loader={({ src, width, quality }) => {
                        return `${src}?w=${width}&q=${quality || 75}`
                    }}
                    src={"https://environment.ec.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2021-07/banner_v1_1.png?itok=_VO4aRIL"}
                    className={"blog-thumb__preview"}
                    alt=""
                    fill
                    sizes='100vw'
                />
            </div>
            <div className="down-content">
                <span>Lifestyle</span>
                <a href="post-details.html"><h4>Best Template Website for HTML CSS</h4></a>
                <ul className="post-info">
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">May 31, 2020</a></li>
                    <li><a href="#">12 Comments</a></li>
                </ul>
                <p>Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">Contact TemplateMo</a> for more info. Thank you.</p>
                <div className="post-options">
                    <div className="row">
                        <div className={small ? "col-12" : "col-6"}>
                            <ul className="post-tags">
                                <li><i className="fa fa-tags"></i></li>
                                <li><a href="#">Beauty</a>,</li>
                                <li><a href="#">Nature</a></li>
                            </ul>
                        </div>
                        {
                            !small && (
                                <div className="col-6">
                                    <ul className="post-share">
                                        <li><i className="fa fa-share-alt"></i></li>
                                        <li><a href="#">Facebook</a>,</li>
                                        <li><a href="#"> Twitter</a></li>
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
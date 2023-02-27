import { ICallToActionProps } from "./call-to-action.model";

export const CallToAction = ({ classes, title, preview, subtile, link, full = false }: ICallToActionProps) => {
    return (
        <section className={`call-to-action ${classes?.root ? classes.root : ""}`}>
            <div className={"call-to-action_height " + (full ? "container-fluid" : "container")}>
                <div className="row call-to-action_height">
                    <div className="col-lg-12 col-padding_null">
                        <div className={`main-content ${classes?.background ? classes.background : ""}`} style={{ backgroundImage: `url(${preview})` }}>
                            <div className="main-content__overlay"></div>
                            <div className={"row main-content_position " + (full ? "container" : "")}>
                                <div className={`col-lg-${link ? 8 : 12}`}>
                                    <span>{subtile}</span>
                                    <h4>{title}</h4>
                                </div>
                                {
                                    link && (
                                        <div className="col-lg-4">
                                            <button className="main-button link" onClick={link.onClick}>
                                                {link.label}
                                            </button>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
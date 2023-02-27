const socials: { [key: string]: { label: string, href: string } } = {
    facebook: {
        label: "Facebook",
        href: "#"
    },
    dribbble: {
        label: "Dribbble",
        href: "#"
    },
    twitter: {
        label: "Twitter",
        href: "#"
    },
    behance: {
        label: "Behance",
        href: "#"
    },
    linkedin: {
        label: "Linkedin",
        href: "#"
    }
}

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="social-icons">
                            {
                                Object.keys(socials).map((key) => (
                                    <li key={key}><a href={socials[key].href} target="_blank" rel="nofollow noreferrer">{socials[key].label}</a></li>
                                ))
                            }

                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            <p>Copyright 2023 Stand Blog Co.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
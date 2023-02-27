import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useRef } from "react";

export enum RoutsPath {
    home = "/",
    about = '/about',
    blog = '/blog',
    contact = '/contact'
}

export enum MenuKey {
    home = "home",
    about = 'about',
    blog = 'blog',
    contact = 'contact'
}

const MENU: { [key: string]: { link: string, label: string, isPrivate?: boolean } } = {
    [MenuKey.home]: {
        link: RoutsPath.home,
        label: "Главная",
    },
    [MenuKey.blog]: {
        link: RoutsPath.blog,
        label: "Блог",
    },
    [MenuKey.about]: {
        link: RoutsPath.about,
        label: "О нас",
    },
    [MenuKey.contact]: {
        link: RoutsPath.contact,
        label: "Контакты",
    },

}

export const Header = () => {
    const router = useRouter();
    const refMenu = useRef<HTMLDivElement | null>(null);

    const handleToggleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (refMenu.current) {
            if (refMenu.current.classList.contains("open")) {
                refMenu.current.classList.remove("open");
            } else {
                refMenu.current.classList.add("open");
            }

        }
    }


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link href={RoutsPath.home} className="navbar-brand"><h2>Stand Blog<em>.</em></h2></Link>
                        <button className="navbar-toggler" type="button" onClick={handleToggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse" id="navbarResponsive" ref={refMenu}>
                            <ul className="navbar-nav ml-auto">
                                {
                                    Object.keys(MENU).map((key) => (
                                        <li className={`nav-item ${router.asPath === MENU[key].link ? "active" : ""}`} key={key}>
                                            <Link href={MENU[key].link} className="nav-link">{MENU[key].label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="header__offset" />
        </>
    )
}
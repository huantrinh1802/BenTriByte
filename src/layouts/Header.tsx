import React, { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NavBar from './Navbar';
// @ts-ignore
import nightwind from "nightwind/helper";

type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    // }
    // export default function Header({title}) {
    // const [loaded, setLoaded] = useState(false);
    return (
        <div className="header">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="King Cong Studio"
                />
                <link rel="shortcut icon" href="/favicon.ico"></link>
                <link rel="apple-touch-icon" href="/apple-touch-icon-iphone-60x60-precomposed.png"></link>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-ipad-76x76-precomposed.png"></link>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-iphone-retina-120x120-precomposed.png"></link>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-ipad-retina-152x152-precomposed.png"></link>
                <meta name="apple-mobile-web-app-title" content="King Cong's Studio" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
                <link rel="manifest" href="/manifest.json"></link>
                <title>{title}</title>
            </Head>
            {/* <Loader loading={this.state.loading} /> */}
            <NavBar transparent={false}>
                <main className="profile-page">
                    <section className="relative block" style={{ height: 500 }}>
                        <div
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    // "url('https://wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-18.png')"
                                    // eslint-disable-next-line no-template-curly-in-string
                                    "url(/img/code-wallpaper-18.png)",
                            }}
                        />{" "}
                    </section>{""}
                </main>
            </NavBar>
        </div>
    )
}

// const Loader = ({ loading }) => <div className={loading ? 'loading-show' : ''} id="loader-bar" />;
export default Header;
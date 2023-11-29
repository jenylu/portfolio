function Footer() {
    return (
        <footer className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-sm-between p-4 flex-wrap">
                {/* <!-- Left --> */}
                <div className="d-lg-block">
                    <span>ALL IMAGES © 2023 JENNIFER LU</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="mailto: lu.jennifer@outlook.com" className="me-4 text-reset" target="_blank">
                        EMAIL
                    </a>
                    <a href="https://www.instagram.com/lunaludraws" className="me-4 text-reset" target="_blank">
                        INSTAGRAM
                    </a>
                    <a href="https://www.twitter.com/lunaludraws" className="text-reset" target="_blank">
                        TWITTER
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
        </footer>
    );
}

export default Footer;


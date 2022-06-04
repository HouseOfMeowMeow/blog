class Header extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML =`
            <header class="s-header">
                <div class="header__top">
                    <div class="header__logo">
                        <a class="site-logo" href="index.html">
                            <p style="font-weight: bold; font-size: 40px;">Nhà Mèo</p>
                        </a>
                    </div>
                    <a href="#0" class="header__menu-toggle"><span>Menu</span></a>
                </div> 

                <nav class="header__nav-wrap">
                    <ul class="header__nav">
                        <li>
                            <a href="index.html" title="">Trang Chủ</a>
                        </li>
                        <li class="has-children">
                            <a href="" title="">Chủ Đề</a>
                            <ul class="sub-menu">
                                <li><a href="category.html">Transformer</a></li>
                                <li><a href="category.html">CNN</a></li>
                                <li><a href="category.html">Sequence Models</a></li>
                                <li><a href="category.html">NLP</a></li>
                                <li><a href="category.html">CV</a></li>
                                <li><a href="category.html">Tâm Sự</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/HouseOfMeowMeow" title="">Github</a>
                        </li>
                        <li>
                            <a href="page-about.html" title="">Về Chúng Tôi</a>
                        </li>
                        <li>
                            <a href="page-contact.html" title="">Buy Us Some Fishes</a>
                        </li>
                    </ul>
                    <ul class="header__social">
                        <li class="ss-facebook">
                            <a href="https://facebook.com/">
                                <span class="screen-reader-text">Facebook</span>
                            </a>
                        </li>
                        <li class="ss-twitter">
                            <a href="#0">
                                <span class="screen-reader-text">Twitter</span>
                            </a>
                        </li>
                        <li class="ss-dribbble">
                            <a href="#0">
                                <span class="screen-reader-text">Dribbble</span>
                            </a>
                        </li>
                        <li class="ss-pinterest">
                            <a href="#0">
                                <span class="screen-reader-text">Behance</span>
                            </a>
                        </li>
                    </ul>
                </nav> 

            </header> 
        `
    }

}

customElements.define('header-component', Header);
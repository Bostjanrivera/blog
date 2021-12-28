import '../assets/styles/app.scss'
// <li><a href="/#/articles">Articles</a></li>
const Header = () => {
    const view = `
        <div class="header">
            <div class="header-left">
                <a href="/" class="header-left--name">Sebas Rivera</a>
            </div>
            <nav>
                <ul class="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/biography">Biography</a></li>
                    <li><a href="https://twitter.com/srbostjan" target="_blank">@bostjan_sebas</a></li>
                </ul>
            </nav>
        <div>
    `;

    return view;
}

export default Header;
import '../assets/styles/app.scss'

const Header = () => {
    const view = `
        <div class="header">
            <div class="header-left">
                <a href="/" class="header-left--name">Sebas Rivera</a>
            </div>
            <nav>
                <ul class="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Biography</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">@bostjan_sebas</a></li>
                </ul>
            </nav>
        <div>
    `;

    return view;
}

export default Header;
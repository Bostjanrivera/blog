const Biography = () => {
  let view = `
    <div class="main-biography">
      <section class="my-info">
        <h1>Sebastian Rivera</h1>
        <p>I’m a developer from Colombia who is mainly interested in web technologies, especially in frontend development.</p>
        <p>Since I was little I was always interested in technology. And so I was always good at it. At age 13 I learned my first language, HTML, with which I made my first Hello world.</p>
        <p>
          Developing my skills as a self-taught person with books and online platforms like Platzi. My curiosity always made me learn quickly about new technologies and tools.
        </p>
      </section>
      <section class="stack">
        <h1>My stack</h1>
        <p>Technologies that i use:</p>
        <ul class="stack-tech">
          <li><img src="https://i.ibb.co/yYzh9hR/icons8-html-5-48.png" alt="html icon"><p>HTML</p></li>
          <li><img src="https://i.ibb.co/ckvF6qj/icons8-css3-48.png" alt="css icon"><p>CSS</p></li>
          <li><img src="https://i.ibb.co/TgVcPpV/icons8-sass-48.png" alt="sass icon"><p>Sass</p></li>
          <li><img src="https://i.ibb.co/9pRJ0T7/icons8-javascript-48.png" alt="javascript icon"><p>JavaScript</p></li>
          <li><img src="https://i.ibb.co/VVp89wN/icons8-react-40-1.png" alt="React icon"><p>React</p></li>
          <li><img src="https://i.ibb.co/H7zxq2x/icons8-redux-144-1.png" alt="Redux icon"><p>Redux</p></li>
          <li><img src="https://i.ibb.co/VVp89wN/icons8-react-40-1.png" alt="React native icon"><p>React Native</p></li>
          <li><img src="https://i.ibb.co/CPMRS3j/icons8-vue-js-48-1.png" alt="Vue icon"><p>Vue</p></li>
          <li><img src="https://i.ibb.co/JvNvfxT/icons8-webpack-64.png" alt="webpack icon"><p>Webpack</p></li>
          <li><img src="https://i.ibb.co/PFGbYc1/icons8-git-48.png" alt="git icon"><p>Git</p></li>
          <li><img src="https://i.ibb.co/r62hGp7/icons8-figma-48.png" alt="figma-icon"><p>Figma</p></li>
        </ul>
      </section>
      <section class="contact">
        <h1>Social Media</h1>
        <ul class="social-media">
          <li><a target="_blank" href="https://www.facebook.com/srbostjan/"><img src="https://i.ibb.co/Jjc0cdH/facebook-gradient-blue.png" alt="facebook icon"></a></li>
          <li><a target="_blank" href="https://twitter.com/srbostjan"><img src="https://i.ibb.co/pjsTXmj/twitter-gradient-blue-icon.png" alt="twitter icon"></a></li>
          <li><a target="_blank" href="https://www.instagram.com/srbostjan/"><img src="https://i.ibb.co/wYQxdm9/instagram-gradient-blue-icon.png" alt="instagram icon"></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/bostjanrivera/"><img src="https://i.ibb.co/58vHNTL/linkedin-gradient-blue.png" alt="linkedin icon"></a></li>
          <li><a target="_blank" href="https://github.com/Bostjanrivera"><img src="https://i.ibb.co/ZK6nbs6/github-gradient-blue-icon.png" alt="Github icon"></a></li>
        </ul>
      </section>
      <section class="made-love">
        <p>Made with <img src="https://i.ibb.co/WtH8k9y/red-heart.png" alt="Heart animated"></p>
        <p><span>© </span> 2021 Sebastian Rivera</p>
      </section>
    </div>
  `

  return view
}
export default Biography
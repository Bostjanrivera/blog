import { articles } from "../resources/articles"
const Articles = () => {
  let view = `
    <div class="main-articles">
      <h2>Articles</h2>
      <section class="articles-cards--container">
        <div class="articles-card">
          <figure class="articles-card--img" >
            <img src="" alt="">
          </figure>
          <div class="articles-card--text">
            <h3>${articles[0].title}</h3>
            <p>${articles[0].content}</p>
          </div>
        </div>
        <div class="articles-card">
          <figure class="articles-card--img" >
            <img src="" alt="">
          </figure>
          <div class="articles-card--text">
            <h3>${articles[0].title}</h3>
            <p>${articles[0].content}</p>
          </div>
        </div>
        <div class="articles-card">
          <figure class="articles-card--img" >
            <img src="" alt="">
          </figure>
          <div class="articles-card--text">
            <h3>${articles[0].title}</h3>
            <p>${articles[0].content}</p>
          </div>
        </div>
        <div class="articles-card">
          <figure class="articles-card--img" >
            <img src="" alt="">
          </figure>
          <div class="articles-card--text">
            <h3>${articles[0].title}</h3>
            <p>${articles[0].content}</p>
          </div>
        </div>
        <div class="articles-card">
          <figure class="articles-card--img" >
            <img src="" alt="">
          </figure>
          <div class="articles-card--text">
            <h3>${articles[0].title}</h3>
            <p>${articles[0].content}</p>
          </div>
        </div>
      </section>
    </div>
  `

  return view
}
export default Articles
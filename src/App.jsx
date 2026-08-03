import { useState } from 'react'
import './index.css'

// Dados dos jogos
const jogosDestaque = [
  {
    id: 1,
    img: 'src/imagens/GTA - 6.jpg',
    titulo: 'GTA VI',
    generos: ['Ação', 'Mundo aberto'],
  },
  {
    id: 2,
    img: 'src/imagens/KRATOS E ATREUS 1.jpg',
    titulo: 'God of War',
    generos: ['Ação', 'Aventura'],
  },
  {
    id: 3,
    img: 'src/imagens/ASSASIN.jpg',
    titulo: "Assassin's Creed",
    generos: ['Ação-aventura', 'Combate'],
  },
  {
    id: 4,
    img: 'src/imagens/HOGWARTS.jpg',
    titulo: 'Hogwarts Legacy',
    generos: ['RPG', 'Combate'],
  },
]

const jogosLancamento = [
  {
    id: 5,
    img: 'src/imagens/THE WITCHER.png',
    titulo: 'The Witcher 3: Wild Hunt',
    generos: ['RPG', 'Combate'],
  },
  {
    id: 6,
    img: 'src/imagens/Call of Duty  telefon wallpaper.jpg',
    titulo: 'CYBERPUNK',
    generos: ['RPG', 'FPS'],
  },
  {
    id: 7,
    img: 'src/imagens/SPIDERMAN2.jpg',
    titulo: 'Spider-Man 2',
    generos: ['Ação', 'Aventura'],
  },
  {
    id: 8,
    img: 'src/imagens/GODOFWARRAGNAROK.jpg',
    titulo: 'God of War Ragnarok',
    generos: ['Ação', 'Aventura'],
  },
]

const banners = [
  'src/imagens/SNOOPDOG.png',
  'src/imagens/CARRO.png',
  'src/imagens/TIRO.png',
]

function CardJogo({ jogo }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100">
        <div className="card-img-wrap">
          <img src={jogo.img} className="card-img-top" alt={jogo.titulo} />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{jogo.titulo}</h5>
          <ul className="game-genres">
            {jogo.generos.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <a href="#" className="btn btn-compra w-100">
            <i className="bi bi-cart-plus"></i> Comprar
          </a>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [carrinho, setCarrinho] = useState(0)

  return (
    <div className="app">
      {/* ===== HEADER ===== */}
      <header className="cabecalho container-fluid p-3 sticky-top">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mb-0 game">
            GAME<strong className="store">STORE</strong>
          </h1>

          <div className="d-flex align-items-center gap-3">
            <a href="#" className="cart-icon position-relative">
              <i className="bi bi-cart3"></i>
              {carrinho > 0 && (
                <span className="cart-badge">{carrinho}</span>
              )}
            </a>

            {/* BOTÃO MOBILE */}
            <button
              className="btn btn-menu d-md-none"
              data-bs-toggle="collapse"
              data-bs-target="#menuMobile"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>

        {/* MENU */}
        <nav
          id="menuMobile"
          className="collapse d-md-flex justify-content-end align-items-center mt-3 mt-md-0"
        >
          <a href="#" className="me-3 nav-link-custom">Início</a>
          <a href="#" className="me-3 nav-link-custom">Jogos</a>
          <a href="#" className="me-3 nav-link-custom">Ofertas</a>

          <form className="d-flex my-2 my-md-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar"
            />
            <button className="btn btn-search" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </nav>
      </header>

      {/* ===== BANNER / CARROSSEL ===== */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-banner"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {banners.map((banner, i) => (
            <div
              className={`carousel-item ${i === 0 ? 'active' : ''}`}
              key={banner}
            >
              <img src={banner} className="d-block w-100" alt={`Banner ${i + 1}`} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      {/* ===== JOGOS EM DESTAQUE ===== */}
      <section className="container py-5">
        <h2 className="section-title">
          <i className="bi bi-trophy-fill"></i> Jogos em Destaque
        </h2>
        <div className="row g-4">
          {jogosDestaque.map((jogo) => (
            <CardJogo key={jogo.id} jogo={jogo} />
          ))}
        </div>
      </section>

      {/* ===== JOGOS EM LANÇAMENTO ===== */}
      <section className="container py-4">
        <h2 className="section-title">
          <i className="bi bi-stars"></i> Jogos em Lançamento
        </h2>
        <div className="row g-4">
          {jogosLancamento.map((jogo) => (
            <CardJogo key={jogo.id} jogo={jogo} />
          ))}
        </div>
      </section>

      {/* ===== ESTATÍSTICAS ===== */}
      <section className="container-fluid meio-footer text-center py-4">
        <div className="row">
          <div className="col-4">
            <h2 className="stat-number">500+</h2>
            <p className="stat-label">Jogos disponíveis</p>
          </div>
          <div className="col-4">
            <h2 className="stat-number">50+</h2>
            <p className="stat-label">Clientes satisfeitos</p>
          </div>
          <div className="col-4">
            <h2 className="stat-number">24/7</h2>
            <p className="stat-label">Suporte ao cliente</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="rodape py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <h3 className="rodape-logo">GAME<strong>STORE</strong></h3>
              <p className="rodape-texto">
                A melhor loja de games online. Jogos de qualidade com os
                melhores preços do mercado.
              </p>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <h4 className="rodape-titulo">Links Rápidos</h4>
              <ul className="rodape-lista">
                <li><a href="#">Início</a></li>
                <li><a href="#">Carrinho</a></li>
                <li><a href="#">Todos os Jogos</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <h4 className="rodape-titulo">Categorias</h4>
              <ul className="rodape-lista">
                <li><a href="#">RPG</a></li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Strategy</a></li>
                <li><a href="#">Racing</a></li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <h4 className="rodape-titulo">Contato</h4>
              <ul className="rodape-lista">
                <li><i className="bi bi-envelope"></i> contato@gamestore.com</li>
                <li><i className="bi bi-telephone"></i> +55 (11) 9999-9999</li>
                <li><i className="bi bi-geo-alt"></i> São Paulo, Brasil</li>
              </ul>
            </div>
          </div>

          <hr className="rodape-divisor" />
          <div className="text-center">
            <h5 className="rodape-copy">&copy; 2026 GameStore. Todos os direitos reservados.</h5>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

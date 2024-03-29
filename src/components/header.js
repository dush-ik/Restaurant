import logo from '../static/images/logo.jpg';

const Logo = {
  render: () => (
    `
      <a href="#/home">
        <img class="logo" src=${logo} alt='logo' />
      </a>
    `
  )
};

const Title = {
  render: () => (
    `
      <h1>The Prancing Pony</h1>
    `
  )
};

const Nav = {
  render:() => (
    `
      <nav>
        <ul>
          <li>
            <a id="home" href="#/home">Home</a>
          </li>
          <li>
            <a id="menu" href="#/menu">Menu</a>
          </li>
          <li>
            <a id="contact" href="#/contact">Contact</a>
          </li>
        </ul>
      </nav>
    `
  )
};

const Header = {
  render: () => (
    `
      <header>
        ${Logo.render()}
        <div class="title-nav">
          ${Title.render()}
          ${Nav.render()}
        </div>
      </header>
    `
  ),
  highlight: (name)  => {
    const $nav = document.getElementById(name);
    if ($nav) {
      document.getElementById('home').classList.remove('hightlight');
      document.getElementById('menu').classList.remove('hightlight');
      document.getElementById('contact').classList.remove('hightlight');
      $nav.classList.add('hightlight');
    }
  }
}

export default Header;

class Header extends React.Component {
  render() {
    return React.createElement('header', { className: 'header' },
      React.createElement('div', { className: 'logo' },
        React.createElement('img', { src: 'logo.png', alt: 'Logo' })
      ),
      React.createElement('nav', { className: 'menu' },
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('a', { href: '#' }, 'Home')),
          React.createElement('li', null, React.createElement('a', { href: '#' }, 'About')),
          React.createElement('li', null, React.createElement('a', { href: '#' }, 'Contact'))
        )
      ),
      React.createElement('div', { className: 'login' },
        React.createElement('button', null, 'Login')
      )
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); 
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  }

  render() {
    return React.createElement('div', { className: 'app' },
      React.createElement(Header, null),
      React.createElement('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`)
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));


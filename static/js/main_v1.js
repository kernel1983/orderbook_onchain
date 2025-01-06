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
    if (this.state.screenWidth < 1400) {
      return React.createElement('div', { className: 'app' },
        React.createElement(Header, null),
        React.createElement('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
        React.createElement('div', { className: 'flex flex-row' },
          React.createElement('div', { className: 'flex-auto' },
            React.createElement('h2', { className: 'text-lg font-bold' }, 'Chart Panel'),
          ),
          React.createElement('div', { className: 'bg-red-500', style: {width:'300px'} },
            React.createElement('h2', { className: 'text-lg font-bold' }, 'Order Panel'),
          )
        ),
        React.createElement('div', { className: 'flex flex-row' },
          React.createElement('div', { className: 'flex-auto' },
            React.createElement('h2', { className: 'text-lg font-bold' }, 'Info Panel'),
          ),
          React.createElement('div', { className: 'bg-green-500', style: {width:'300px'} },
            React.createElement('h2', { className: 'text-lg font-bold' }, 'Assets Panel'),
            React.createElement('h2', { className: 'text-lg font-bold' }, 'Market Panel'),
          ),
        ),
      );
    }
    return React.createElement('div', { className: 'app' },
      React.createElement(Header, null),
      React.createElement('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
      React.createElement('div', { className: 'flex flex-row' },
        React.createElement('div', { className: 'flex-auto' },
          React.createElement('h2', { className: 'text-lg font-bold' }, 'Chart Panel'),
        ),
        React.createElement('div', { className: 'bg-yellow-500', style: {width:'300px'} },
          React.createElement('h2', { className: 'text-lg font-bold' }, 'Market Panel'),
        ),
        React.createElement('div', { className: 'bg-red-500', style: {width:'300px'} },
          React.createElement('h2', { className: 'text-lg font-bold' }, 'Order Panel'),
        )
      ),
      React.createElement('div', { className: 'flex flex-row' },
        React.createElement('div', { className: 'flex-auto' },
          React.createElement('h2', { className: 'text-lg font-bold' }, 'Info Panel'),
        ),
        React.createElement('div', { className: 'bg-green-500', style: {width:'300px'} },
          React.createElement('h2', { className: 'text-lg font-bold' }, 'Assets Panel'),
        )
      ),
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));


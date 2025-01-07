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

class ChartPanel extends React.Component {
  render() {
    return React.createElement('div', { className: 'chart-panel bg-yellow-500' },
      React.createElement('h2', { className: 'text-lg font-bold' }, 'chart Panel',
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
      )
    );
  }
}

class MarketPanel extends React.Component {
  render() {
    return React.createElement('div', { className: 'market-panel bg-pink-500' },
      React.createElement('h2', { className: 'text-lg font-bold' }, 'market Panel')
    );
  }
}

class OrderPanel extends React.Component {
  render() {
    return React.createElement('div', { className: 'order-panel bg-gray-500' },
      React.createElement('h2', { className: 'text-lg font-bold' }, 'order Panel')
    );
  }
}

class InfoPanel extends React.Component {
  render() {
    return React.createElement('div', { className: 'info-panel  bg-blue-500' },
      React.createElement('h2', { className: 'text-lg font-bold' }, 'info Panel',
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
        React.createElement('br', null, null),
      )
    );
  }
}

class AssetsPanel extends React.Component {
  render() {
    return React.createElement('div', { className: 'assets-panel bg-purple-500' },
      React.createElement('h2', { className: 'text-lg font-bold' }, 'assets Panel')
    );
  }
}

class ToolPanel extends React.Component {
  render() {
    return React.createElement('div', { className: 'tool-panel bg-purple-500' },
      React.createElement('h2', { className: 'text-lg font-bold' }, 'Tool Panel')
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
    if (this.state.screenWidth < 960) {
      return React.createElement('div', { className: 'app' },
        React.createElement(Header, null),
        React.createElement('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
        React.createElement(ChartPanel, null),
        React.createElement(InfoPanel, null),
        React.createElement(ToolPanel, null),
      );
    }

    if (this.state.screenWidth < 1400) {
      return React.createElement('div', { className: 'app' },
        React.createElement(Header, null),
        React.createElement('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
        React.createElement('div', { className: 'flex flex-row' },
          React.createElement('div', { className: 'flex-auto' },
            React.createElement(ChartPanel, null),
          ),
          React.createElement('div', { className: '', style: {width:'300px'} },
            React.createElement(OrderPanel, null),
          )
        ),
        React.createElement('div', { className: 'flex flex-row' },
          React.createElement('div', { className: 'flex-auto' },
            React.createElement(InfoPanel, null),
          ),
          React.createElement('div', { className: '', style: {width:'300px'} },
            React.createElement(AssetsPanel, null),
            React.createElement(MarketPanel, null),
          ),
        ),
      );
    }
    return React.createElement('div', { className: 'app' },
      React.createElement(Header, null),
      React.createElement('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
      React.createElement('div', { className: 'flex flex-row' },
        React.createElement('div', { className: 'flex-auto' },
          React.createElement(ChartPanel, null),
        ),
        React.createElement('div', { className: '', style: {width:'300px'} },
          React.createElement(MarketPanel, null),
        ),
        React.createElement('div', { className: '', style: {width:'300px'} },
          React.createElement(OrderPanel, null),
        )
      ),
      React.createElement('div', { className: 'flex flex-row' },
        React.createElement('div', { className: 'flex-auto' },
          React.createElement(InfoPanel, null),
        ),
        React.createElement('div', { className: '', style: {width:'300px'} },
          React.createElement(AssetsPanel, null),
        )
      ),
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));


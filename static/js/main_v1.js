
let rc = React.createElement;

class Header extends React.Component {
  render() {
    return rc('header', { className: 'header' },
      rc('div', { className: 'logo' },
        rc('img', { src: 'logo.png', alt: 'Logo' })
      ),
      rc('nav', { className: 'menu' },
        rc('ul', null,
          rc('li', null, rc('a', { href: '#' }, 'Home')),
          rc('li', null, rc('a', { href: '#' }, 'About')),
          rc('li', null, rc('a', { href: '#' }, 'Contact'))
        )
      ),
      rc('div', { className: 'login' },
        rc('button', null, 'Login')
      )
    );
  }
}

class ChartPanel extends React.Component {
  render() {
    return rc('div', { className: 'chart-panel bg-yellow-500' },
      rc('h2', { className: 'text-lg font-bold' }, 'Chart Panel'),
      rc('div', { id: 'lightweight-charts', style:{ minHeight:'400px' } })
    );
  }

  componentDidMount() {
    const chartDiv = document.getElementById('lightweight-charts');
    const chartWidth = chartDiv.offsetWidth;
    const chartHeight = chartDiv.offsetHeight;
    console.log(chartWidth);
    console.log(chartHeight);
    this.chart = LightweightCharts.createChart(document.getElementById('lightweight-charts'), { width: chartWidth, height: chartHeight });
    const lineSeries = this.chart.addLineSeries();
    lineSeries.setData([
      { time: '2023-01-01', value: 10 },
      { time: '2023-02-01', value: 15 },
      { time: '2023-03-01', value: 20 },
      { time: '2023-04-01', value: 18 },
      { time: '2023-05-01', value: 25 },
    ]);

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); 
  }

  handleResize = () => {
    const chartDiv = document.getElementById('lightweight-charts');
    const chartHeight = chartDiv.offsetHeight;
    console.log(chartHeight);

    let chartWidth;
    if (window.innerWidth < 960) {
      chartWidth = window.innerWidth;
    }else if (window.innerWidth < 1400) {
      chartWidth = window.innerWidth - 300;
    }else{
      chartWidth = window.innerWidth - 600;
    }
    chartWidth -= 20;
    console.log(chartWidth);

    this.chart.resize(chartWidth, chartHeight);
  }
}

class MarketPanel extends React.Component {
  render() {
    return rc('div', { className: 'market-panel bg-pink-500', style: { minWidth: '300px'}  },
      rc('h2', { className: 'text-lg font-bold' }, 'market Panel')
    );
  }
}

class OrderPanel extends React.Component {
  render() {
    return rc('div', { className: 'order-panel bg-gray-500', style: { minWidth: '300px'} },
      rc('h2', { className: 'text-lg font-bold' }, 'order Panel')
    );
  }
}

class InfoPanel extends React.Component {
  render() {
    return rc('div', { className: 'info-panel  bg-blue-500' },
      rc('h2', { className: 'text-lg font-bold' }, 'info Panel',
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
        rc('br', null, null),
      )
    );
  }
}

class AssetsPanel extends React.Component {
  render() {
    return rc('div', { className: 'assets-panel bg-purple-500' },
      rc('h2', { className: 'text-lg font-bold' }, 'assets Panel')
    );
  }
}

class ToolPanel extends React.Component {
  render() {
    return rc('div', { className: 'tool-panel bg-purple-500' },
      rc('h2', { className: 'text-lg font-bold' }, 'Tool Panel')
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
    if (window.innerWidth < 960) {
      return rc('div', { className: 'app' },
        rc(Header, null),
        rc('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
        rc(ChartPanel, null),
        rc(InfoPanel, null),
        rc(ToolPanel, null),
      );
    }

    if (window.innerWidth < 1400) {
      return rc('div', { className: 'app' },
        rc(Header, null),
        rc('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
        rc('div', { className: 'flex flex-row' },
          rc('div', { className: 'flex-auto' },
            rc(ChartPanel, null),
          ),
          rc('div', { className: '', style: {width:'300px'} },
            rc(OrderPanel, null),
          )
        ),
        rc('div', { className: 'flex flex-row' },
          rc('div', { className: 'flex-auto' },
            rc(InfoPanel, null),
          ),
          rc('div', { className: '', style: {width:'300px'} },
            rc(AssetsPanel, null),
            rc(MarketPanel, null),
          ),
        ),
      );
    }

    return rc('div', { className: 'app' },
      rc(Header, null),
      rc('h1', null, `Hello from React! Screen width: ${this.state.screenWidth}px`),
      rc('div', { className: 'flex flex-row' },
        rc('div', { className: 'flex-auto' },
          rc(ChartPanel, null),
        ),
        rc('div', { className: '', style: {width:'300px'} },
          rc(MarketPanel, null),
        ),
        rc('div', { className: '', style: {width:'300px'} },
          rc(OrderPanel, null),
        )
      ),
      rc('div', { className: 'flex flex-row' },
        rc('div', { className: 'flex-auto' },
          rc(InfoPanel, null),
        ),
        rc('div', { className: '', style: {width:'300px'} },
          rc(AssetsPanel, null),
        )
      ),
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(rc(App, null));


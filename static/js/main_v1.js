import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.2/ethers.min.js";

let rc = React.createElement;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleMetamaskLogin = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask not installed!');
    } else {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.setState({ ethAddress: accounts[0] });
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Login failed.');
      }
    }
  }

  render() {
    return rc('header', { className: 'header p-4 flex justify-between items-center bg-gray-800 text-white' },
      rc('div', { className: 'logo flex items-center' },
        rc('img', { src: 'logo.png', alt: 'Logo', className: 'h-8 w-8 mr-2' }),
        rc('span', { className: 'text-xl font-bold' }, 'OrderBook')
      ),
      rc('nav', { className: 'menu' },
        rc('ul', { className: 'flex space-x-4' },
          rc('li', null, rc('a', { href: '#', className: 'hover:text-gray-400' }, 'Home')),
          rc('li', null, rc('a', { href: '#', className: 'hover:text-gray-400' }, 'About')),
          rc('li', null, rc('a', { href: '#', className: 'hover:text-gray-400' }, 'Contact'))
        )
      ),
      rc('div', { className: 'login' },
        this.state.ethAddress ?
        rc('span', { className: 'font-mono' }, `${this.state.ethAddress.substring(0, 6)}...${this.state.ethAddress.substring(this.state.ethAddress.length - 4)}`) :
        rc('button', { onClick: this.handleMetamaskLogin, className: 'bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded' }, 'Connect Wallet')
      )
    );
  }
}

class ChartPanel extends React.Component {
  render() {
    return rc('div', { className: 'chart-panel bg-gray-900 p-4 rounded-lg' },
      rc('h2', { className: 'text-lg font-bold text-white mb-2' }, 'BTC/USD Chart'),
      rc('div', { id: 'lightweight-charts', style:{ minHeight:'400px' } })
    );
  }

  componentDidMount() {
    const chartDiv = document.getElementById('lightweight-charts');
    const chartOptions = {
        width: chartDiv.offsetWidth,
        height: 400,
        layout: {
            background: { color: 'transparent' },
            textColor: 'rgba(255, 255, 255, 0.9)',
        },
        grid: {
            vertLines: { color: '#2d3748' },
            horzLines: { color: '#2d3748' },
        },
        crosshair: {
            mode: LightweightCharts.CrosshairMode.Normal,
        },
        priceScale: {
            borderColor: '#4a5568',
        },
        timeScale: {
            borderColor: '#4a5568',
        },
    };

    this.chart = LightweightCharts.createChart(chartDiv, chartOptions);
    const candleSeries = this.chart.addCandlestickSeries({
      upColor: '#48bb78',
      downColor: '#f56565',
      borderDownColor: '#f56565',
      borderUpColor: '#48bb78',
      wickDownColor: '#f56565',
      wickUpColor: '#48bb78',
    });

    // More realistic historical data for BTC/USD
    const data = [
        { time: '2023-05-01', open: 29214, high: 29340, low: 28050, close: 28586 },
        { time: '2023-05-02', open: 28586, high: 28800, low: 28150, close: 28693 },
        { time: '2023-05-03', open: 28693, high: 29150, low: 28500, close: 29045 },
        { time: '2023-05-04', open: 29045, high: 29250, low: 28800, close: 28843 },
        { time: '2023-05-05', open: 28843, high: 29800, low: 28750, close: 29543 },
        { time: '2023-05-06', open: 29543, high: 29700, low: 28900, close: 28904 },
        { time: '2023-05-07', open: 28904, high: 29100, low: 28450, close: 28450 },
        { time: '2023-05-08', open: 28450, high: 28500, low: 27600, close: 27704 },
        { time: '2023-05-09', open: 27704, high: 27800, low: 27350, close: 27657 },
        { time: '2023-05-10', open: 27657, high: 28300, low: 27500, close: 27621 },
        { time: '2023-05-11', open: 27621, high: 27700, low: 26800, close: 27000 },
        { time: '2023-05-12', open: 27000, high: 27100, low: 25800, close: 26805 },
        { time: '2023-05-13', open: 26805, high: 27000, low: 26650, close: 26780 },
        { time: '2023-05-14', open: 26780, high: 27200, low: 26700, close: 26930 },
        { time: '2023-05-15', open: 26930, high: 27500, low: 26800, close: 27250 },
        { time: '2023-05-16', open: 27250, high: 27300, low: 26900, close: 27025 },
        { time: '2023-05-17', open: 27025, high: 27450, low: 26600, close: 27400 },
        { time: '2023-05-18', open: 27400, high: 27500, low: 26800, close: 26850 },
        { time: '2023-05-19', open: 26850, high: 27200, low: 26700, close: 26880 },
        { time: '2023-05-20', open: 26880, high: 27150, low: 26800, close: 27100 },
        { time: '2023-05-21', open: 27100, high: 27250, low: 26950, close: 27150 },
        { time: '2023-05-22', open: 27150, high: 27200, low: 26550, close: 26850 },
        { time: '2023-05-23', open: 26850, high: 27300, low: 26250, close: 26300 },
        { time: '2023-05-24', open: 26300, high: 26600, low: 26100, close: 26250 },
        { time: '2023-05-25', open: 26250, high: 26550, low: 25900, close: 26480 },
        { time: '2023-05-26', open: 26480, high: 26900, low: 26350, close: 26720 },
        { time: '2023-05-27', open: 26720, high: 26850, low: 26550, close: 26800 },
        { time: '2023-05-28', open: 26800, high: 28400, low: 26700, close: 28080 },
        { time: '2023-05-29', open: 28080, high: 28200, low: 27500, close: 27750 },
        { time: '2023-05-30', open: 27750, high: 28000, low: 27600, close: 27700 },
        { time: '2023-05-31', open: 27700, high: 27800, low: 26850, close: 27220 },
        { time: '2023-06-01', open: 27220, high: 27300, low: 26600, close: 26820 },
        { time: '2023-06-02', open: 26820, high: 27250, low: 26500, close: 27245 },
        { time: '2023-06-03', open: 27245, high: 27300, low: 27050, close: 27080 },
        { time: '2023-06-04', open: 27080, high: 27200, low: 26900, close: 27150 },
        { time: '2023-06-05', open: 27150, high: 27200, low: 25400, close: 25750 },
        { time: '2023-06-06', open: 25750, high: 27300, low: 25600, close: 27250 },
        { time: '2023-06-07', open: 27250, high: 27400, low: 26150, close: 26350 },
        { time: '2023-06-08', open: 26350, high: 26800, low: 26250, close: 26500 },
        { time: '2023-06-09', open: 26500, high: 26750, low: 26300, close: 26480 },
        { time: '2023-06-10', open: 26480, high: 26550, low: 25500, close: 25850 },
        { time: '2023-06-11', open: 25850, high: 26200, low: 25700, close: 25950 },
        { time: '2023-06-12', open: 25950, high: 26100, low: 25400, close: 25900 },
        { time: '2023-06-13', open: 25900, high: 26400, low: 25700, close: 25920 },
        { time: '2023-06-14', open: 25920, high: 26000, low: 24900, close: 25150 },
        { time: '2023-06-15', open: 25150, high: 25800, low: 24800, close: 25580 },
        { time: '2023-06-16', open: 25580, high: 26750, low: 25500, close: 26520 },
        { time: '2023-06-17', open: 26520, high: 26800, low: 26300, close: 26510 },
        { time: '2023-06-18', open: 26510, high: 26700, low: 26300, close: 26330 },
        { time: '2023-06-19', open: 26330, high: 27200, low: 26300, close: 26850 },
        { time: '2023-06-20', open: 26850, high: 28400, low: 26700, close: 28320 },
        { time: '2023-06-21', open: 28320, high: 30800, low: 28200, close: 30020 },
        { time: '2023-06-22', open: 30020, high: 30300, low: 29500, close: 29900 },
        { time: '2023-06-23', open: 29900, high: 31400, low: 29800, close: 30680 },
        { time: '2023-06-24', open: 30680, high: 30800, low: 30200, close: 30550 },
        { time: '2023-06-25', open: 30550, high: 31000, low: 30300, close: 30480 },
        { time: '2023-06-26', open: 30480, high: 30700, low: 30000, close: 30270 },
        { time: '2023-06-27', open: 30270, high: 31000, low: 30200, close: 30690 },
        { time: '2023-06-28', open: 30690, high: 30750, low: 30050, close: 30080 },
        { time: '2023-06-29', open: 30080, high: 31250, low: 30000, close: 30450 },
        { time: '2023-06-30', open: 30450, high: 31300, low: 29300, close: 30480 },
    ];
    candleSeries.setData(data);
    this.chart.timeScale().fitContent();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const chartDiv = document.getElementById('lightweight-charts');
    let chartWidth = chartDiv.offsetWidth;
    this.chart.resize(chartWidth, 400);
  }
}

class MarketPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Order Book',
      orderBook: {
        bids: [
          { price: 68000, size: 0.5, total: 0.5 },
          { price: 67999, size: 1.2, total: 1.7 },
          { price: 67998, size: 0.8, total: 2.5 },
        ],
        asks: [
          { price: 68001, size: 0.3, total: 0.3 },
          { price: 68002, size: 0.9, total: 1.2 },
          { price: 68003, size: 1.5, total: 2.7 },
        ]
      },
      trades: [
        { price: 68001, size: 0.1, time: '10:30:05' },
        { price: 68000, size: 0.2, time: '10:30:01' },
        { price: 68002, size: 0.05, time: '10:29:55' },
      ]
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderOrderBook() {
      return rc('div', { className: 'order-book text-white' },
          rc('div', { className: 'flex justify-between text-xs text-gray-400 p-2' },
              rc('span', null, 'Price (USD)'),
              rc('span', null, 'Size (BTC)'),
              rc('span', null, 'Total')
          ),
          rc('div', { className: 'asks' },
              this.state.orderBook.asks.map((ask, index) =>
                  rc('div', { key: index, className: 'flex justify-between p-1 text-red-500' },
                      rc('span', null, ask.price.toFixed(2)),
                      rc('span', null, ask.size.toFixed(4)),
                      rc('span', null, ask.total.toFixed(4))
                  )
              )
          ),
          rc('div', { className: 'current-price p-2 text-lg font-bold text-center' }, '68000.50'),
          rc('div', { className: 'bids' },
              this.state.orderBook.bids.map((bid, index) =>
                  rc('div', { key: index, className: 'flex justify-between p-1 text-green-500' },
                      rc('span', null, bid.price.toFixed(2)),
                      rc('span', null, bid.size.toFixed(4)),
                      rc('span', null, bid.total.toFixed(4))
                  )
              )
          )
      );
  }

  renderTrades() {
      return rc('div', { className: 'trades text-white' },
          rc('div', { className: 'flex justify-between text-xs text-gray-400 p-2' },
              rc('span', null, 'Price (USD)'),
              rc('span', null, 'Size (BTC)'),
              rc('span', null, 'Time')
          ),
          this.state.trades.map((trade, index) =>
              rc('div', { key: index, className: `flex justify-between p-1 ${trade.price > 68000 ? 'text-green-500' : 'text-red-500'}` },
                  rc('span', null, trade.price.toFixed(2)),
                  rc('span', null, trade.size.toFixed(4)),
                  rc('span', null, trade.time)
              )
          )
      );
  }

  render() {
    return rc('div', { className: 'market-panel bg-gray-900 p-4 rounded-lg text-white', style: { minWidth: '300px', height: '100%' } },
      rc('div', { className: 'flex border-b border-gray-700' },
        rc('button', { className: `px-4 py-2 ${this.state.activeTab === 'Order Book' ? 'border-b-2 border-blue-500' : ''}`, onClick: () => this.handleTabChange('Order Book') }, 'Order Book'),
        rc('button', { className: `px-4 py-2 ${this.state.activeTab === 'Trades' ? 'border-b-2 border-blue-500' : ''}`, onClick: () => this.handleTabChange('Trades') }, 'Trades')
      ),
      rc('div', { className: 'mt-4' },
        this.state.activeTab === 'Order Book' ? this.renderOrderBook() : this.renderTrades()
      )
    );
  }
}

class OrderPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Limit',
      tradeType: 'Buy',
      price: '68000',
      size: '',
      rangeValue: '0',
      sizeUnit: 'BTC', // BTC or USDC
      balance: {
          BTC: 1.2345,
          USDC: 5000.00
      }
    };
  }

  handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  handleRangeChange = (e) => {
      const percentage = e.target.value;
      const { tradeType, balance, price, sizeUnit } = this.state;
      let newSize = '';

      if (tradeType === 'Buy') {
          const budget = balance.USDC * (percentage / 100);
          if (price > 0) {
              newSize = sizeUnit === 'BTC' ? (budget / price).toFixed(6) : budget.toFixed(2);
          }
      } else { // Sell
          const amount = balance.BTC * (percentage / 100);
          if (price > 0) {
              newSize = sizeUnit === 'BTC' ? amount.toFixed(6) : (amount * price).toFixed(2);
          }
      }

      this.setState({ rangeValue: percentage, size: newSize });
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleTradeTypeChange = (type) => {
    this.setState({ tradeType: type, size: '', rangeValue: '0' });
  };

  handleSizeUnitChange = () => {
      this.setState(prevState => ({ sizeUnit: prevState.sizeUnit === 'BTC' ? 'USDC' : 'BTC', size: '' }));
  }

  placeOrder = () => {
    alert(`Placing ${this.state.tradeType} ${this.state.activeTab} order.`);
  };

  render() {
    const tradeTypeClass = this.state.tradeType === 'Buy' ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700';
    const balanceToShow = this.state.tradeType === 'Buy' ? `${this.state.balance.USDC.toFixed(2)} USDC` : `${this.state.balance.BTC.toFixed(4)} BTC`;
    let total = 0;
    if(this.state.price > 0 && this.state.size > 0) {
        if(this.state.sizeUnit === 'BTC') {
            total = this.state.price * this.state.size;
        } else {
            total = parseFloat(this.state.size);
        }
    }

    return rc('div', { className: 'order-panel bg-gray-900 p-4 rounded-lg text-white', style: { minWidth: '300px', height: '100%' } },
      rc('div', { className: 'flex border-b border-gray-700' },
        rc('button', { className: `px-4 py-2 ${this.state.activeTab === 'Market' ? 'border-b-2 border-blue-500' : ''}`, onClick: () => this.handleTabChange('Market') }, 'Market'),
        rc('button', { className: `px-4 py-2 ${this.state.activeTab === 'Limit' ? 'border-b-2 border-blue-500' : ''}`, onClick: () => this.handleTabChange('Limit') }, 'Limit')
      ),
      rc('div', { className: 'flex mt-4' },
        rc('button', { className: `flex-1 py-2 ${this.state.tradeType === 'Buy' ? 'bg-green-600' : 'bg-gray-700'}`, onClick: () => this.handleTradeTypeChange('Buy') }, 'Buy'),
        rc('button', { className: `flex-1 py-2 ${this.state.tradeType === 'Sell' ? 'bg-red-600' : 'bg-gray-700'}`, onClick: () => this.handleTradeTypeChange('Sell') }, 'Sell')
      ),
      rc('div', { className: 'mt-4 space-y-4' },
        rc('div', { className: 'flex justify-between text-sm'},
            rc('span', { className: 'text-gray-400' }, 'Available:'),
            rc('span', { className: 'font-mono' }, balanceToShow)
        ),
        this.state.activeTab === 'Market' && rc('div', { className: 'market-tab space-y-4' },
            rc('div', null,
                rc('label', { className: 'block text-sm text-gray-400' }, 'Size'),
                rc('input', { type: 'text', placeholder: 'Enter size', className: 'w-full p-2 bg-gray-800 border border-gray-700 rounded' })
            )
        ),
        this.state.activeTab === 'Limit' && rc('div', { className: 'limit-tab space-y-4' },
            rc('div', null,
                rc('label', { className: 'block text-sm text-gray-400' }, 'Price'),
                rc('input', { type: 'text', name: 'price', value: this.state.price, onChange: this.handleInputChange, className: 'w-full p-2 bg-gray-800 border border-gray-700 rounded' })
            ),
            rc('div', null,
                rc('div', { className: 'flex justify-between'},
                    rc('label', { className: 'block text-sm text-gray-400' }, 'Size'),
                    rc('button', { onClick: this.handleSizeUnitChange, className: 'text-sm text-blue-400 hover:text-blue-300' }, `in ${this.state.sizeUnit}`)
                ),
                rc('input', { type: 'text', name: 'size', value: this.state.size, onChange: this.handleInputChange, placeholder: `Enter size in ${this.state.sizeUnit}` , className: 'w-full p-2 bg-gray-800 border border-gray-700 rounded' })
            ),
            rc('div', { className: 'range' },
                rc('input', {
                    type: 'range', min: '0', max: '100', value: this.state.rangeValue,
                    onChange: this.handleRangeChange,
                    className: 'w-full'
                }),
                rc('div', { className: 'flex justify-between text-xs text-gray-400' },
                    rc('span', null, '0%'),
                    rc('span', null, '25%'),
                    rc('span', null, '50%'),
                    rc('span', null, '75%'),
                    rc('span', null, '100%')
                )
            ),
            rc('div', { className: 'flex justify-between text-sm'},
                rc('span', { className: 'text-gray-400' }, 'Total:'),
                rc('span', { className: 'font-mono' }, `${total.toFixed(2)} USDC`)
            )
        ),
        rc('button', { className: `w-full mt-4 py-2 rounded text-white font-bold ${tradeTypeClass}`, onClick: this.placeOrder }, `Place ${this.state.tradeType} Order`)
      )
    );
  }
}

class InfoPanel extends React.Component {
  render() {
    return rc('div', { className: 'info-panel bg-gray-900 p-4 rounded-lg text-white' },
      rc('h2', { className: 'text-lg font-bold mb-4' }, 'Market Info'),
      rc('div', { className: 'grid grid-cols-2 gap-4 text-sm' },
        rc('div', null,
            rc('div', { className: 'text-gray-400' }, '24h High'),
            rc('div', { className: 'font-bold' }, '69,420.00')
        ),
        rc('div', null,
            rc('div', { className: 'text-gray-400' }, '24h Low'),
            rc('div', { className: 'font-bold' }, '67,123.00')
        ),
        rc('div', null,
            rc('div', { className: 'text-gray-400' }, '24h Volume (BTC)'),
            rc('div', { className: 'font-bold' }, '1,234.56')
        ),
        rc('div', null,
            rc('div', { className: 'text-gray-400' }, '24h Volume (USD)'),
            rc('div', { className: 'font-bold' }, '84,567,890.12')
        )
      )
    );
  }
}

class AssetsPanel extends React.Component {
    render() {
        const assets = [
            { name: 'Bitcoin', symbol: 'BTC', amount: '1.2345', value: '84,000.00 USD' },
            { name: 'Ethereum', symbol: 'ETH', amount: '10.5', value: '35,000.00 USD' },
            { name: 'USD Coin', symbol: 'USDC', amount: '5,000.00', value: '5,000.00 USD' },
        ];

        return rc('div', { className: 'assets-panel bg-gray-900 p-4 rounded-lg text-white h-full' },
            rc('h2', { className: 'text-lg font-bold mb-4' }, 'My Assets'),
            rc('div', { className: 'space-y-4' },
                assets.map(asset =>
                    rc('div', { key: asset.symbol, className: 'flex justify-between items-center' },
                        rc('div', null,
                            rc('div', { className: 'font-bold' }, asset.name),
                            rc('div', { className: 'text-sm text-gray-400' }, asset.symbol)
                        ),
                        rc('div', { className: 'text-right' },
                            rc('div', { className: 'font-bold' }, asset.amount),
                            rc('div', { className: 'text-sm text-gray-400' }, asset.value)
                        )
                    )
                )
            )
        );
    }
}

class ToolPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkTheme: true
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({ isDarkTheme: !prevState.isDarkTheme }));
        // In a real app, you'd also change the CSS classes on the body
    }

    render() {
        return rc('div', { className: 'tool-panel bg-gray-900 p-4 rounded-lg text-white' },
            rc('h2', { className: 'text-lg font-bold mb-4' }, 'Tools & Settings'),
            rc('div', { className: 'flex justify-between items-center' },
                rc('span', null, 'Dark Theme'),
                rc('label', { className: 'switch' },
                    rc('input', { type: 'checkbox', checked: this.state.isDarkTheme, onChange: this.toggleTheme }),
                    rc('span', { className: 'slider round' })
                )
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
    document.body.className = 'bg-gray-800';
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
    const commonLayout = (mainPanel, sidePanel1, sidePanel2) => {
        return rc('div', { className: 'app' },
            rc(Header, null),
            rc('main', { className: 'p-4' },
                rc('div', { className: 'flex flex-col lg:flex-row gap-4' },
                    rc('div', { className: 'flex-grow' },
                        mainPanel
                    ),
                    rc('div', { className: 'w-full lg:w-80 space-y-4' },
                        sidePanel1,
                        sidePanel2
                    )
                )
            )
        );
    };

    const mainContent = rc('div', { className: 'space-y-4' },
        rc(ChartPanel, null),
        rc(InfoPanel, null)
    );

    const marketPanel = rc(MarketPanel, null);
    const orderPanel = rc(OrderPanel, null);
    const assetsPanel = rc(AssetsPanel, null);
    const toolPanel = rc(ToolPanel, null);

    if (this.state.screenWidth < 960) { // Mobile layout
        return commonLayout(
            rc('div', { className: 'space-y-4' }, mainContent, orderPanel, marketPanel, assetsPanel, toolPanel),
            null,
            null
        );
    }

    if (this.state.screenWidth < 1400) { // Tablet layout
        return commonLayout(
            mainContent,
            rc('div', { className: 'space-y-4' }, orderPanel, marketPanel),
            rc('div', { className: 'space-y-4' }, assetsPanel, toolPanel)
        );
    }

    // Desktop layout
    return rc('div', { className: 'app' },
        rc(Header, null),
        rc('main', { className: 'p-4' },
            rc('div', { className: 'flex gap-4' },
                rc('div', { className: 'flex-grow space-y-4' },
                    rc(InfoPanel, null),
                    rc(ChartPanel, null),
                    rc(AssetsPanel, null)
                ),
                rc('div', { className: 'w-80 space-y-4' },
                    rc(MarketPanel, null),
                    rc(ToolPanel, null)
                ),
                rc('div', { className: 'w-80 space-y-4' },
                    rc(OrderPanel, null)
                )
            )
        )
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(rc(App, null));
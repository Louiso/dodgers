# CICLO DE VIDA

```
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      errors: {

      }
    };
  }

  componentWillMount() {

  }

  // despues del primer render
  componentDidMount() {
    window.addEventListener('resize', () => { console.log("awdawdawdaw") })
    this.interval = setInterval(() => {
      console.log('interval')
    }, 3000)
  }

  // se ejecuta despues de ejecutar el render despues de la primera
  componentDidUpdate() {
    if(Object.values(this.errors).length > 0) {
      snackController.enqueueSnackbar('Tiene un nuevo error cuidado!!!!')
    }
  }

  shouldComponentUpdate(prevProps, prevState) {
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => { console.log("awdawdawdaw")})
    clearInterval(this.interval)
  }

  getFullName = () => {

  }

  render() {

    return (
      <div>
        <h1>Hello World</h1>
        <p>{this.getFullName()}</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}


const Parent = () => {
  const [ value, setValue ] = useState(true)
  return (
    <div>
      { value && <Example/>}
    </div>
  );
};
```
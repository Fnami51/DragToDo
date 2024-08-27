import styles from './App.module.css'
import Area from './components/Area'
import Header from './components/Header'

function App() {

  return (
    <div className={styles.background}>
      <Header />
      <Area />
    </div>
  )
}

export default App

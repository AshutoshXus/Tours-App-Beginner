import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import Loading from './components/Loading'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const filterTour = tours.filter((tour) => tour.id !== id)
    setTours(filterTour)
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      setLoading(false)
      console.log(tours)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            className="btn"
            style={{ marginTop: '2rem' }}
            onClick={() => {
              fetchTours()
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App

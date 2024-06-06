
import TheForm from './components/TheForm';
import {LoaderOverlay} from 'oolib'
import { useGetJsonDataQuery } from './redux/slices/apiSlice';

function App() {

  const {data , error , isLoading} = useGetJsonDataQuery();

  if(isLoading) {
    return <LoaderOverlay  loaderText={'Components Loading....'} />
  }

  if(error) {
    return <div>{error.message}</div>
  }

  return (
    <>
        <TheForm formData={data.data} />
    </>
  )
}

export default App

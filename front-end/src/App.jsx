
import TheForm from './components/TheForm';
import {LoaderOverlay} from 'oolib'
import { useGetJsonDataQuery } from './redux/slices/apiSlice';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

function App() {

  const { data , error , isLoading } = useGetJsonDataQuery();

  useEffect(() => {
    if(error) {

      let errMessage = 'Unexpected error occured!'

      if(error.status && error.status === 500) {
        errMessage = 'Server Error. Please try again Later';
      }

      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: errMessage,
        showCancelButton: true,
        confirmButtonText: 'Refresh',
        cancelButtonText: 'OK',
      }).then((res) => {
        if(res.isConfirmed) {
          window.location.reload();
        }
      })
    }
  },[error]);


  if(isLoading) {
    return <LoaderOverlay  loaderText={'Components Loading....'} />
  }

  if(error) {
    return null;
  }

  return (
    <>
        <TheForm formData={data.data} />
    </>
  )
}

export default App

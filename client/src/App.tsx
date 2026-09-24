import { useSiteStore } from './store/useSiteStore';
import './App.css'

function App()
{
    const { siteName } = useSiteStore();

    return(
      <>
        <p>{siteName}</p>
      </>
    );
}

export default App
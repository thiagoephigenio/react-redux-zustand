import { useEffect } from 'react';

function App() {
    const teste = 'asdasd';
    useEffect(() => {
        console.log('teste', teste);
    }, []);
  
    return (
        <div> 

        </div>
        
    );
}

export default App;

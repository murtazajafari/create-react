import React, {lazy, startTransition, Suspense, useState} from 'react';
import './App.css'
// 1. Import
// import("./math").then(math => {
//     console.log(math.add(16, 26));
// });


// 2. React.Lazy 
// Error boundry comes first 
import MyErrorBoundary from './MyErrorBoundary';

const Photos = lazy(()=> import('./Photos'));
const Comments = lazy(()=> import('./Comments'));

function App() {
    const [tab, setTab] = useState('Comments');
    const [button, setButton] = useState(false);

    function clickHandler(e){

        startTransition(() => {
            setTab(e.target.name);        
            setButton(!button);               
        })
    }
    return (
        <div className={`App ${button ? 'night': 'day'}`}>
            <MyErrorBoundary>
                <Suspense fallback={<div>Loading</div>}>
                    {tab == 'Photos' ? <Photos/> : <Comments/>}
                </Suspense>
            </MyErrorBoundary>

            <br />
            <button onClick={(e) => clickHandler(e)} name={button ? 'Comment': 'Photos'}>Switch</button>

        </div>
    );
}

export default App;

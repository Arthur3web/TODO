import { useState, useEffect } from 'react';

export default function useWindowSize(){
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
      const resizeHandler = () => setSize([window.innerWidth, window.innerHeight]);
      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);
    }, []);
  
    return size;
}

function MyResponsiveComponent() {
    const [width, height] = useWindowSize();
    return <div>Ширина: {width}, Высота: {height}</div>;
  }
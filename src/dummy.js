import { useEffect } from "react"

export default function Dummy () {

    useEffect(() => {
        const handleChildEvent = (event) => {
          const message = event.detail.message;
          alert(message + 'From Dummy')
          event.preventDefault();
    
        };
    
        // Listen for custom event
        window.addEventListener('childEvent', handleChildEvent);
    
        return () => {
          // Clean up event listener
          window.removeEventListener('childEvent', handleChildEvent);
        };
      }, []);
    return (
        <p>From Dummy</p>
    )
}
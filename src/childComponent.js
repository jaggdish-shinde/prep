import { useRef } from "react";

export default function ChildComponent () {

    const buttonRef = useRef(null)
    const handleClick = () => {

      // Creating custom event
      const event = new CustomEvent('childEvent', {
        detail: { message: 'Child event 463634!' },
        // we can add that that we want to send where it will listen
        bubbles: true,
        cancelable: true,
        // composed: true
      });

      // Dispatching Custom Event 

      // here we can listen this any where .
      window.dispatchEvent(event);

      // here to listen this event we have to mae bubble : true then only it start prpogating 
      buttonRef.current.dispatchEvent(event);

      // setting default action
        let canceled = !document.dispatchEvent(event);
        if (canceled) return;

        // alert is default action 
        // above we checking if event default action is stop by event.prevent default 
        // this alert (default action will not work)
        alert(23343)
    };
  
    return (
      <button onClick={handleClick} ref={buttonRef}>
        Click me to trigger event in parent
      </button>
    );
  };
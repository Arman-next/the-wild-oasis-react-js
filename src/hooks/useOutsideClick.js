import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  // for close the model window if click outside of the model window
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      // The model window is attatch to the body of the dom. So, the after click, the event function will bubble up and the click event happend outside the window(or it detect outside the window) so, the window doesn't open or rather it will open for a milisec but then it will immediately close
      // So we only listen the event in the capturing phase(i.e. when the event moves down to the dom tree) not the bubbilng phase(i.e. when the event moves up to the dom tree)
      document.addEventListener("click", handleClick, listenCapturing);

      // need/must to remove eventlistner as the component unmount
      return () =>
        document.addEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

import React from 'react'
import { useState, useEffect } from 'react'

import './growl.css'

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
)

export function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // After 3 seconds set the show value to false
      setGrowlActive(false);
    }, 3000);
    return () => clearTimeout(timer);
    //Growl Active to avoid redundancy call
  }, [growlActive]);

  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active)
    }
  ]
}
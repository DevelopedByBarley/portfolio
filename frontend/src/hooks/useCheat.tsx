/* import { useEffect } from "react";
import {  playThemSound } from "../helpers/PlayAudio";

export const useCheat = (cheat, setCheat, setShow) => {
  
  const targetCode = 'hesoyam';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setCheat(prev => prev + e.key);
    };

    // Hozzáadjuk az eseménykezelőt
    window.addEventListener('keydown', handleKeyDown);

    // Eltávolítjuk az eseménykezelőt a komponens elhagyásakor
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Üres dependency array, hogy csak egyszer fusson le

  if(cheat.endsWith('hesoyam')) {
    playThemSound();
    setShow(true);
    setCheat('');

    setTimeout(() => {
      setShow(false);
    },4000)

    return true;
  }

   if(cheat.length > targetCode.length ) {
    
    setCheat(prev => prev.slice(-targetCode.length));
  } 





  if(cheat === targetCode) return true;
  return false;
};
 */
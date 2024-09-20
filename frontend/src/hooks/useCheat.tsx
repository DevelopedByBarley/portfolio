import { useEffect } from "react";
import { playOrStopMissionPassed, playOrStopSelectSound } from "../helpers/PlayAudio";
import { toast } from "react-toastify";

type CheatType = {
  cheat: string;
  setCheat: React.Dispatch<React.SetStateAction<string>>; // Jobb típusmeghatározás
  setShowPassedModal: React.Dispatch<React.SetStateAction<boolean>>; // Boolean típus pontosítása
  showPassedModal: boolean
};

export const useCheat = ({ cheat, setCheat, showPassedModal,  setShowPassedModal }: CheatType) => {
  const targetCode = 'hesoyam';

  useEffect(() => {

    if(showPassedModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      setCheat(prev => prev + e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCheat, showPassedModal]); // Hozzáadva a setCheat függőségi tömbbe


  if (cheat.endsWith(targetCode)) {
    
    toast.dark('Cheat activated!');
    playOrStopSelectSound('play')

    setTimeout(() => {
      
      playOrStopMissionPassed('play');
      setShowPassedModal(true);
      setCheat('');
    }, 1000)

    return true;
  }

  // Ha a cheat hosszabb mint a targetCode, a felesleges karaktereket levágjuk
  if (cheat.length > targetCode.length) {
    setCheat(prev => prev.slice(-targetCode.length));
  }

  return false;
};

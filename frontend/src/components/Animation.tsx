import { IoMdStar } from 'react-icons/io';
import profile from '/assets/images/profile.jpg';
import gsap from 'gsap';
import { useEffect } from 'react';
import { playOrStopMissionPassed } from '../helpers/PlayAudio';
import { useCookies } from 'react-cookie';

const Animation = () => {
  const [cookies, setCookies] = useCookies(['entered', 'sound']);

  useEffect(() => {
    const month = 30 * 24 * 60 * 60 * 1000;


    const tl = gsap.timeline();
    tl.to('#animation-bg', { bottom: '0', duration: 0.5, ease: 'power1.out', delay: !cookies.entered ? 5 : 0 })
      .to('#animation-bg', { bottom: '100%', duration: 0.3, ease: 'power1.in' }, "+=1") // időzítés a korábbi animáció vége után
      .to('#animation-container', { bottom: '100%', duration: 0.4, ease: 'power1.inOut' }, "-=0.5");

    if (cookies.entered) return;
    if (cookies.sound) {
      playOrStopMissionPassed('play');
    }

    gsap.fromTo('.star',
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        repeatDelay: 0.5,
        ease: 'none',
        onComplete: () => {
          gsap.to('.star', { opacity: 1, delay: 0.5 });
          gsap.to('.profile-img', { opacity: 1, delay: 0.5 });
        }
      })


    setCookies('entered', 1, { path: '/', expires: new Date(Date.now() + month) })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="bg-mainDark fixed bottom-0 left-0 w-screen h-screen z-50"
      id="animation-container"
    >
      <div className="container mx-auto relative flex items-center justify-center flex-col h-full w-full">
        <div
          className="bg-mainOrange h-full w-full fixed bottom-[-100%]"
          id="animation-bg"
        ></div>
        <img
          src={profile}
          alt="Profile"
          className="rounded-full w-48 md:w-52 xl:w-64 mx-auto profile-img opacity-0"
        />

        <div className="stars flex items-center justify-center my-5">
          {[...Array(5)].map((_, i) => (
            <IoMdStar className="star opacity-0 text-white" key={i} size={50} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animation;

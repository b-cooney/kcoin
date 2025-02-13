import { useEffect } from 'react';

interface GlitchyTextProps {
  text: string;
}

const GlitchyText = ({ text }: GlitchyTextProps) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="mt-8 relative">
      <h1 className="text-white text-3xl font-['Press_Start_2P'] glitch-text"
          data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default GlitchyText;

import React, { useEffect, useRef } from 'react';
interface PropsOutside extends React.Attributes {
  onHandleClick: any;
  children: React.ReactNode;
  className?: string;
  targetIgnoreId?: string;
}
const OutSides: React.FC<PropsOutside> = (props) => {
  const { children, className, onHandleClick, targetIgnoreId } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        ref &&
        ref.current &&
        !ref.current.contains(event.target as HTMLElement) &&
        !(targetIgnoreId && targetIgnoreId === (event?.target as HTMLElement)?.id)
      ) {
        onHandleClick();
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref, onHandleClick]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default OutSides;

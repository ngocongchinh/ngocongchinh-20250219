import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ClientSideRender: React.FC<Props> = ({ children }: Props) => {
  const [isRenderOnClient, setRenderOnClient] = useState(false);

  useEffect(() => {
    setRenderOnClient(true);
  }, []);

  return <>{isRenderOnClient ? children : null}</>;
};

export default ClientSideRender;

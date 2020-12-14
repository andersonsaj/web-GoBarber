import React from 'react';
import { Container } from './styles';

interface TootipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TootipProps> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;

import React, { ReactNode } from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Oops, something went wrong!
        </Alert>
      );
    }

    return this.props.children;
  }
}

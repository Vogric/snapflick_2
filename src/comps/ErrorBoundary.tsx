import { Component } from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  error: Error | null;
  errorInfo: string;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: '',
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  render() {
    return this.state.error ? (
      <p>{this.state.error.toString()}</p>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;

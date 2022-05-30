import React from "react";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { error: "", errorInfo: "" };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={{ overflowY: "scroll", height: "25vh" }}>
          <h2>Something went wrong.</h2>
          <button onClick={this.reloadPage}>Reload Page</button>

          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />

            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

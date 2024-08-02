import { IErrorBoundryProps, IErrorBoundryState } from "general"
import { Component, ErrorInfo } from "react"
import "./index.css"

export class ErrorBoundry extends Component<
  IErrorBoundryProps,
  IErrorBoundryState
> {
  constructor(props: IErrorBoundryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): IErrorBoundryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", { error, errorInfo })
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (!hasError) return children

    return (
      <div className='error-boundry-container'>
        <div className='mainbox'>
          <div className='mainbox__error--text'>404</div>
          <div className='mainbox__error--message'>
            Maybe this page moved? Got deleted? Is hiding out in quarantine?
            Never existed in the first place?
            <p className='mainbox__error--passage'>
              Let's go{" "}
              <a className='mainbox__error--passage-anchor' href=''>
                home
              </a>{" "}
              and try from there.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

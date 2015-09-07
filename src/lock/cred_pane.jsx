import React from 'react/addons';
import GlobalError from './global_error';
import SubmitButton from './submit_button';
import Header from '../header/header';
import * as l from './index';
import * as g from '../gravatar/index';
import Terms from '../lock/terms';

const ReactTransitionGroup = React.addons.TransitionGroup;
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let height;

export default class CredPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {placeholderHeight: height};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({placeholderHeight: undefined});
    }, 850);
  }

  componentDidUpdate() {
    if (!this.state.placeholderHeight) {
      const node = React.findDOMNode(this.refs.container);
      var computedStyle = window.getComputedStyle(node, null);
      height = computedStyle.height;
    }
  }

  render() {
    const { auxiliaryPane, className, lock } = this.props;

    const gravatar = l.gravatar(lock);
    const icon = l.ui.icon(lock);
    const globalError = l.globalError(lock);
    const disableSubmit = l.submitting(lock);

    let backgroundUrl, name;
    if (gravatar) {
      backgroundUrl = g.imageUrl(gravatar);
      name = g.displayName(gravatar);
    } else {
      backgroundUrl = icon;
      name = "";
    }

    const container = (
      <div ref="container">
        <ReactTransitionGroup>
          {globalError && <GlobalError key="global-error" message={globalError} />}
        </ReactTransitionGroup>
        <div className="auth0-lock-content">
          {this.props.children}
        </div>
        {l.ui.terms(lock) && <Terms content={l.ui.terms(lock)} />}
      </div>
    );

    const placeholder = <div style={{height: this.state.placeholderHeight}} />;

    return (
      <div className={className + " auth0-lock-cred-pane"}>
        <Header name={name} backgroundUrl={backgroundUrl} logoUrl={icon}/>
        {this.state.placeholderHeight ? placeholder : container}
        <SubmitButton disabled={disableSubmit} />
        <ReactCSSTransitionGroup transitionName="slide">
          {auxiliaryPane}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

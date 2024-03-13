/**
 * ! This is a practice component
 * * This was to practice my understanding of writing component
 * * Also to distingush the difference between 'class' and normal 'function'
 */

import { Component } from "react";

/**
 * ! The class
 */
class Button extends Component {
  render() {
    return (
      <div>
        <h1>Button Here</h1>
        <p>I'm a clickable button</p>
        <p>{this.props.popUp}</p>
      </div>
    );
  }
}

export default Button;

/**
 * ! The Function
 * * This is a function that acts the same as class
 * * It will do the same thing
 *
 */
// const Button = (props) => {
//   return (
//     <div>
//       <h1>Button Here</h1>
//       <p>I'm a clickable button</p>
//       <p>{props.popUp}</p>
//     </div>
//   );
// };

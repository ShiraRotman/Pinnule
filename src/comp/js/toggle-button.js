import React from "react";
import BooleanComponent from "./boolean-component.js";
import "../css/toggle-button.css";

export default class ToggleButton extends BooleanComponent
{
	render()
	{
		const wrapperClassName="button-wrapper" + (this.props.disabled?" disabled":"");
		const buttonClassName="toggle-button " + (this.state.value?"toggled":"untoggled");
		return (
			<div className={wrapperClassName}>
				<div aria-label={this.props["aria-label"]} aria-pressed={this.state.value}
					aria-disabled={this.props.disabled} onClick={this.handleValueChange}
					onKeyDown={this.componentKeyDown} tabIndex={this.props.disabled?-1:0}
					className={buttonClassName + " " + (this.props.className || "")} role="button">
					
					<div>{this.props.children}</div>
				</div>
			</div>
		);
	}
}

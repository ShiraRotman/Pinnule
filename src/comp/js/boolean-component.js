import React from "react";

export default class BooleanComponent extends React.Component
{
	constructor(props)
	{ 
		super(props); this.state={ value: props.value || false };
		this.componentKeyDown=this.componentKeyDown.bind(this);
		this.handleValueChange=this.handleValueChange.bind(this);
	}
	
	handleValueChange() 
	{
		const value=!this.state.value;
		if (this.props.onValueChange) this.props.onValueChange(value);
		this.setState({ value: value });
	}
	
	componentKeyDown(event)
	{
		let activated=false;
		if (this.props.activation) activated=(event.key===this.props.activation);
		else activated=(event.key===" " || event.key==="Spacebar");
		if (activated) this.handleValueChange();
	}
}

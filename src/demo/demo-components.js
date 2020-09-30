import React from "react";
import ToggleButton from "../comp/js/toggle-button.js";
import "./custom-styles.css";

function ContentCard(props)
{
	return (
		<div className="card" style={{ width: "84%", margin: "0.5rem 0" }}>
			<div className="card-body">
				<h6 className="card-title" style={{ fontWeight: 600 }}>{props.header}</h6>
				{props.children}
			</div>
		</div>
	);
}

export default function PinnuleDemo(props)
{
	return (
		<div className="container-fluid pl-4">
			<h5 className="mt-3">{props.header}</h5>
			<ContentCard header="Toggle Buttons">
				<div className="row">
					<div className="col-3 col-lg-2">
						<label className="mb-1">Default Toggle</label>
						<ToggleButton>Toggle me!</ToggleButton>
					</div>
					<div className="col-3 col-lg-2">
						<label className="mb-1">Disabled Toggle</label>
						<ToggleButton disabled={true}>Can't toggle...</ToggleButton>
					</div>
					<div className="col-3 col-lg-2">
						<label className="mb-1">Material Style</label>
						<ToggleButton className="material-button">I am pretty</ToggleButton>
					</div>
				</div>
			</ContentCard>
		</div>
	);
}

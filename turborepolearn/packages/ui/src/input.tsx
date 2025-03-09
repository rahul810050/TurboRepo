"use client"

interface InputProps {
	placeholder: string;
	type: string;
	bgcolor?: string;
	color?: string
	// onChange?: (e: any)=> void;
}

export function Input(props: InputProps) {
	return (
		<input
		style={{
			padding: "10px",
			border: "1px solid black",
			borderRadius: "5px",
			backgroundColor: `${props.bgcolor ?  props.bgcolor: "white"}`,
			color: `${props.color ?  props.color: "black"}`,
		}}
		onChange={(e) => { alert(e.target.value)}}
		placeholder={props.placeholder} type={props.type} />
	)
}
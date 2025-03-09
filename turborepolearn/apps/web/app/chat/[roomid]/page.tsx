import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";


export default function Room(){
	return (
		<div style={
			{
				display: "flex",
				width: "100vw",
				height: "100vh",
				backgroundColor: "white",
				justifyContent: "center",
				alignItems: "center",
				color: "black",
				flexDirection: "column"

			}
		}>
			<h1>Chat Room</h1>
			<div style={{
				backgroundColor: "black",
				height: "80vh",
				width: "20vw",
				color: "white",
				borderRadius: "5px",
				padding: "10px 6px",
			}}>
				
				<span style={
					{
						backgroundColor: "white",
						padding: "5px",
						borderRadius: "5px",
						color: "black",
						maxWidth: "100px"
					}
				}>
					hi 
				</span>
				
			</div>
			<div>
				<Input color="black" bgcolor="green" placeholder="write a message..." type="text" />
				<Button text="send"/>
			</div>
		</div>
	)
}
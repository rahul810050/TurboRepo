"use client";


interface ButtonProps {
  onClick?: (e: any) => void;
  className?: string;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        fontSize: "16px",
        fontFamily: "Arial",
        fontWeight: "semibold",
        
      }}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {props.text}
    </button>
  );
};

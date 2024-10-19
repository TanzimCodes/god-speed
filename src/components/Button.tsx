import React from "react";

function Button({ children, onClick, className="" }: React.PropsWithChildren<{ className?: string, onClick?: () => void | null}>) {
  return <button className={`px-2 py-1 rounded-md ${className}`} onClick={onClick} > 
	{children}
  </button>;
}

export default Button;
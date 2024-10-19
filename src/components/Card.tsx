function Card({ children, className="" }: { children: React.ReactNode, className?: string }) {
return (
	<div className={`p-4 bg-white rounded-md shadow-md ${className}`}>
		{children}
	</div>
  );
}

export default Card;
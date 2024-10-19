
function InputField({label}: { label: string }) {
	return (
		<div>
			<input placeholder={label} className="border-gray-500 border-2 rounded-md px-2 py-1"/>
		</div>
	);
}

export default InputField;
import Button from "@/components/Button";
import Card from "@/components/Card";
import InputField from "@/components/InputField";

export default function Header() {
	return (
		<form action="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<Card className="flex flex-col gap-2 items-center border-2 border-yellow-300">
				<InputField label="Username" />
				<InputField label="Password" />
				<Button className="bg-yellow-200 self-stretch">Login</Button>
			</Card>
		</form>

	);
}
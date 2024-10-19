import ListItem from "./ListItem";


export default function Header() {
  return (
    <ul className="flex mt-1">

      <ListItem itemName="FAQ"></ListItem>
      <ListItem itemName="Wall Of 💟"></ListItem>
      <ListItem itemName="Resources"></ListItem>
      <ListItem itemName="Buy me a sandwitch" extraClass="!ml-auto"></ListItem>
      <ListItem itemName="Search" extraClass="!ml-auto"></ListItem>
      <ListItem itemName="Login"></ListItem>
      <ListItem itemName="Signup"></ListItem>
    </ul>
  );
}

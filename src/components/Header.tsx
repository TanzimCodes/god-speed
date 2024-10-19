import ListItem from "./ListItem";
import Link from 'next/link'

export default function Header() {


  return (
    <ul className="flex mt-1">

      <ListItem itemName="FAQ"></ListItem>
      <ListItem itemName="Wall Of 💟"></ListItem>
      <ListItem itemName="Resources"></ListItem>
      <ListItem itemName="Buy me a sandwitch" extraClass="!ml-auto"></ListItem>
      <ListItem itemName="Search" extraClass="!ml-auto"></ListItem>
      <Link href="/login"><ListItem itemName="Login"></ListItem></Link>
      <ListItem itemName="Signup"></ListItem>
    </ul>
  );
}

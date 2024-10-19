interface ListItemProps {
  itemName: string;
  extraClass?: string;
}

export default function ListItem({ itemName, extraClass }: ListItemProps) {
  return (
    <li className={`${extraClass} hover:rounded-full hover:bg-red-200 ml-2 px-2 py-1 transition-all `}>{itemName}</li>
  );
}

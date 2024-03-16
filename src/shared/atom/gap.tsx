import { Column } from "..";

export const Gap = ({size = "h-[150vh]"}: {size?:string}) => <Column className={size} />;
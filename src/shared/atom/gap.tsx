import { cn } from "@shared/cn";
import { Column } from "..";

export const Gap = ({height}: {height?: string;}) => <Column className={cn("h-[90vh] md:h-[70vh] lg:h-[30vh]", height)} />;
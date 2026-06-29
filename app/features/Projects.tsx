import Image from "next/image";
import Link from "next/link";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
  ItemFooter,
} from "@/components/ui/item";
import { projects } from "../data";

const Page = () => {
  return (
    <div className="flex w-full max-w-[90vw] px-20 flex-col gap-6">
      <ItemGroup className="grid grid-cols-4 gap-10">
        {projects.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
            <ItemActions>hello</ItemActions>
            <ItemFooter>
              <Link href={model.link}>View</Link>
            </ItemFooter>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
};
export default Page;

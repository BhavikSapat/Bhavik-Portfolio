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
import { projects } from "../../data";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  const currentSlugName = slug ? slug[0] : "";

  const matchedProject = projects.find((p) => p.name === currentSlugName);

  return (
    <>
      <div className="py-10">You are viewing: {slug?.join("/") || "Home"}</div>

      <div className="min-h-screen p-10 text-2xl font-bold">
        {matchedProject ? (
          <ItemGroup className="grid grid-cols-4 gap-10">
            <Item key={matchedProject.name} variant="outline">
              <ItemHeader>
                <Image
                  src={matchedProject.image}
                  alt={matchedProject.name}
                  width={128}
                  height={128}
                  className="aspect-square w-full rounded-sm object-cover"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle>{matchedProject.name}</ItemTitle>
                <ItemDescription>{matchedProject.description}</ItemDescription>
              </ItemContent>
              <ItemActions>hello</ItemActions>
              <ItemFooter>
                <Link href={matchedProject.link}>View</Link>
              </ItemFooter>
            </Item>
          </ItemGroup>
        ) : (
          <div className="text-red-500">
            Project {currentSlugName} not found.
          </div>
        )}
      </div>
    </>
  );
}

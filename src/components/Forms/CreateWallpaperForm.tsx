"use client";

import Image from "next/image";
import { CardContent, CardFooter } from "../shadcnui/card";
import { useFilePicker } from "use-file-picker";
import React, { useState } from "react";
import { Button } from "../shadcnui/button";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "../shadcnui/combobox";

const CreateWallpaperForm = () => {
  const [isFile, setIsFile] = useState(false);

  const frameworks = [
    "Next.js",
    "SvelteKit",
    "Nuxt.js",
    "Remix",
    "Astro",
  ] as const;
  const anchor = useComboboxAnchor();

  const { openFilePicker, filesContent } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => setIsFile(true),
    onClear: () => setIsFile(false),
  });
  return (
    <>
      <CardContent className="grid gap-4">
        <button
          type="button"
          onClick={openFilePicker}
          className="cursor-pointer">
          {!isFile && (
            <Image
              src={"https://placehold.co/440x360/png"}
              alt=""
              width={440}
              height={360}
            />
          )}
          {filesContent.map((file, idx) => (
            <Image
              key={idx}
              src={file.content}
              alt={file.name}
              width={440}
              height={360}
            />
          ))}
        </button>
        <Combobox
          multiple
          autoHighlight
          items={frameworks}
          defaultValue={[frameworks[0]]}>
          <ComboboxChips
            ref={anchor}
            className="w-full max-w-xs">
            <ComboboxValue>
              {(values) => (
                <React.Fragment>
                  {values.map((value: string) => (
                    <ComboboxChip key={value}>{value}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem
                  key={item}
                  value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Button>Uploded</Button>
      </CardContent>

      <CardFooter className="justify-center gap-1">
        Missing Tags? Create Now
      </CardFooter>
    </>
  );
};

export default CreateWallpaperForm;

"use client";

import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./styles.css";

import { cn } from "@/lib/utils";
import TipTapEditorHeader from "./headers/header";

interface TipTapEditorWithHeaderProps {
  className?: string;
  initialContent?: string;
  placeholder?: string;
  includeHeader?: boolean;
  onTextChanged: (content: string) => void;
}

export default function TipTapEditorWithHeader({
  className,
  initialContent,
  placeholder = "type here",
  onTextChanged,
  includeHeader = true,
}: TipTapEditorWithHeaderProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Placeholder.configure({
        placeholder: placeholder,
      }),
      Superscript,
      Subscript,
      Table,
      TableCell,
      TableHeader,
      TableRow,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onTextChanged(editor.getHTML());
    },
  });
  return (
    <div
      className={cn(
        "flex size-full max-h-[20rem] flex-col gap-y-3 overflow-y-auto rounded-md border border-input bg-background pb-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {includeHeader && <TipTapEditorHeader editor={editor} />}
      <EditorContent
        editor={editor}
        className="min-h-[100px] px-3 *:w-full *:h-full"
      />
    </div>
  );
}

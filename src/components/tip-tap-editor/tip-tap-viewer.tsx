import { Highlight } from "@tiptap/extension-highlight";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { Table } from "@tiptap/extension-table";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { TextAlign } from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

const TipTapViewer = ({
  content,
  className,
}: {
  content: any;
  className?: string;
}) => {
  const editor = useEditor({
    extensions: [
      Superscript,
      Subscript,
      StarterKit,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Table,
      TableCell,
      TableHeader,
      TableRow,
    ],
    immediatelyRender: false,
    content: content,
    editable: false, // Make it non-editable if you only want to display the content
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);
  return <EditorContent editor={editor} className={className} />;
};

export default TipTapViewer;

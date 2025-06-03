import Code from "@tiptap/extension-code";
import Document from "@tiptap/extension-document";
import { Highlight } from "@tiptap/extension-highlight";
import Paragraph from "@tiptap/extension-paragraph";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { Table } from "@tiptap/extension-table";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import Typography from "@tiptap/extension-typography";

import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import { TextAlign } from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { ColorHighlighter } from "./custom-extensions/color-highlighter";
import { SmilieReplacer } from "./custom-extensions/smiley-replacer";

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
      Typography,
      Code,
      Document,
      Paragraph,
      Text,
      ColorHighlighter,
      SmilieReplacer,
      Dropcursor,
      Image,
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

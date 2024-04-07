import React, { useState,useRef } from 'react'
import { Box } from '@chakra-ui/react'
import {Editor} from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';

const CodeEditor = () => {

    const editorRef = useRef();
    const [value, setvalue] = useState("");
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    return (
        <Box>
            <LanguageSelector />
            <Editor
                height="75vh" 
                theme='vs-dark'
                defaultLanguage="javascript" 
                defaultValue="// some comment" 
                onMount={onMount}
                value={value}
                onChange={(value) => setvalue(value)}
            />
        </Box>
    )
}

export default CodeEditor
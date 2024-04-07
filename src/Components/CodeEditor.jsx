import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import { Box,HStack } from '@chakra-ui/react'
import {Editor} from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../langsupport';
import logo from '../assets/logo.svg'
import './css/CodeEditor.css'

const CodeEditor = () => {

    const editorRef = useRef();
    const [value, setvalue] = useState("");
    const [language, setlanguage] = useState("Javascript");
    
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setlanguage(language);
        setvalue(CODE_SNIPPETS[language])
    }

    return (
        <Box minH="100vh" bg="#000" color="gray.500" px={6} py={8}>
            <HStack spacing={4}>
                <Box w="50%">
                <Link to='/' className="logo-container">
                    <div className='logo'>
                        <img src={logo} alt="Logo" className="logo-img" />
                        <h1 className="logo-text">CodeLogs</h1>
                    </div>
                </Link>
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        height="90vh" 
                        theme='vs-dark'
                        language={language}
                        defaultValue="// some comment" 
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setvalue(value)}
                    />
                </Box>
            </HStack>
            
        </Box>
    )
}

export default CodeEditor

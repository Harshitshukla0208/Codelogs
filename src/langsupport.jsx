export const LANGUAGE_VERSIONS = {
    Javascript: "18.15.0",
    Typescript: "5.0.3",
    Cpp: "17.0.0",
    C: "11.0.0",
    Java: "15.0.2",
    Python: "3.10.0",
    Csharp: "6.12.0",
    Php: "8.2.3",
    Ruby: "3.1.0",
    Go: "1.18.0",
    Rust: "1.58.0",
    Kotlin: "1.6.10",
    Swift: "5.6.0",
};

export const CODE_SNIPPETS = {
    Javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Harshit Shukla");\n`,
    Typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Harshit Shukla" });\n`,
    Python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Harshit Shukla")\n`,
    Java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    Csharp:
        'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    Php: "<?php\n\n$name = 'Harshit Shukla';\necho $name;\n",
    Ruby: `puts "Hello, World!"`,
    Go: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}`,
    Rust: `fn main() {\n\tprintln!("Hello, World!");\n}`,
    Kotlin: `fun main() {\n\tprintln("Hello, World!")\n}`,
    Swift: `print("Hello, World!")`,
    // Adding code snippets for C++ and C
    Cpp: `#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!" << std::endl;\n\treturn 0;\n}`,
    C: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello, World!\\n");\n\treturn 0;\n}`,
};

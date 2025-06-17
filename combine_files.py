import os
import re

def remove_ts_comments(code_content):
    """
    Removes single-line (//) and multi-line (/* ... */) comments from TypeScript/JavaScript code.
    This is a regex-based approach and might not handle all edge cases perfectly
    (e.g., comments inside string literals that look like comments).
    """
    # Remove multi-line comments /* ... */
    code_content = re.sub(r'/\*.*?\*/', '', code_content, flags=re.DOTALL)
    
    # Remove single-line comments // ...
    lines = code_content.splitlines()
    cleaned_lines = []
    for line in lines:
        # Remove text from // to the end of the line
        cleaned_line = re.sub(r'//.*$', '', line)
        # Only add the line if it's not empty after stripping comments and whitespace
        if cleaned_line.strip():
            cleaned_lines.append(cleaned_line)
    return '\n'.join(cleaned_lines)

def combine_files(file_list, output_filename, project_root="."):
    """
    Combines the content of specified files into a single output file,
    removing comments from the source files.

    Args:
        file_list (list): A list of relative file paths to combine.
        output_filename (str): The name of the output file.
        project_root (str): The root directory of the project.
    """
    output_filepath = os.path.join(project_root, output_filename)

    with open(output_filepath, 'w', encoding='utf-8') as outfile:
        for i, relative_filepath in enumerate(file_list):
            input_filepath = os.path.join(project_root, relative_filepath)
            
            # Add a newline before the file header if it's not the first file
            if i > 0:
                outfile.write("\n")
                
            outfile.write(f"// {relative_filepath.replace(os.sep, '/')}\n")
            
            try:
                with open(input_filepath, 'r', encoding='utf-8') as infile:
                    original_content = infile.read()
                    content_without_comments = remove_ts_comments(original_content)
                    
                    if content_without_comments.strip(): # Check if there's actual content after cleaning
                        outfile.write(content_without_comments)
                        outfile.write("\n") # Add a newline after the content block
                    # If content_without_comments is empty or just whitespace, nothing more is written for this file's content block.
                    # The next file's header will be separated by the newline added at the start of the loop.

                print(f"Successfully processed and cleaned: {relative_filepath}")
            except FileNotFoundError:
                print(f"Error: File not found - {input_filepath}")
                outfile.write(f"// Error: File not found - {relative_filepath.replace(os.sep, '/')}\n")
            except Exception as e:
                print(f"Error processing file {input_filepath}: {e}")
                outfile.write(f"// Error processing file {relative_filepath.replace(os.sep, '/')}: {e}\n")

    print(f"\nAll specified files (with comments removed) have been combined into: {output_filepath}")

if __name__ == "__main__":
    important_files = [
        "src/main.ts",
        "src/app/index.tsx",
        "src/runtime/dom.ts",
        "src/runtime/reconciliation.ts",
        "src/runtime/jsx-runtime.ts",
        "src/runtime/router.ts",
        "src/runtime/store.ts",
        "src/runtime/hooks/state.ts",
        "src/runtime/hooks/effect.ts",
        "src/runtime/tailwind.ts",
    ]
    output_file = "coreact_important_files.txt"
    combine_files(important_files, output_file)
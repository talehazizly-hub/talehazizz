import json
import re
from pathlib import Path
from PyPDF2 import PdfReader

pdf_path = Path('UNEC__1770395429.pdf')
reader = PdfReader(pdf_path)
text = '\n'.join(page.extract_text() or '' for page in reader.pages)
lines = [line.rstrip() for line in text.splitlines()]
questions = []
i = 0
while i < len(lines):
    line = lines[i].strip()
    m = re.match(r'^(\d+)\.\s*(.*)$', line)
    if m:
        num = int(m.group(1))
        qtext = m.group(2)
        i += 1
        while i < len(lines) and not re.match(r'^(\d+)\.\s*', lines[i].strip()) and not re.match(r'^[•√]', lines[i].strip()):
            if lines[i].strip():
                qtext += ' ' + lines[i].strip()
            i += 1
        opts = []
        while i < len(lines) and re.match(r'^[•√]', lines[i].strip()):
            line = lines[i].strip()
            correct = line.startswith('√')
            option_text = line[1:].strip()
            opts.append({'text': option_text, 'correct': correct})
            i += 1
        if opts:
            questions.append({'num': num, 'question': qtext.strip(), 'options': opts})
        continue
    i += 1

out = {'source': pdf_path.name, 'count': len(questions), 'questions': questions}
with open('questions.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, indent=2, ensure_ascii=False)
print(f'Extracted {len(questions)} questions to questions.json')

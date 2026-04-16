import json
from pathlib import Path
with open('questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
js = 'const QUESTIONS = ' + json.dumps(data['questions'], ensure_ascii=False, indent=2) + '\n'
with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(js)
print(f'Created questions.js with {len(data["questions"])} questions')

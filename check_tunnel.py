import shutil
import sys
print('PYTHON', sys.executable)
for tool in ['ngrok', 'lt', 'localtunnel']:
    print(tool.upper(), shutil.which(tool))

from http.server import HTTPServer, SimpleHTTPRequestHandler
from multiprocessing import Process
from pyngrok import ngrok
import os

PORT = 8000

os.chdir(os.path.dirname(os.path.abspath(__file__)))


def run_server():
    server = HTTPServer(('0.0.0.0', PORT), SimpleHTTPRequestHandler)
    print(f'Serving local files on http://127.0.0.1:{PORT}/')
    server.serve_forever()


if __name__ == '__main__':
    server_process = Process(target=run_server)
    server_process.start()
    public_url = ngrok.connect(PORT, bind_tls=True).public_url
    print('Public URL:', public_url)
    print('Open this URL from anywhere, no shared Wi-Fi needed.')
    server_process.join()

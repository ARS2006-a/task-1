"""
Simple HTTP development server for Keyboard Piano.

Usage:
    python server.py

Then open http://localhost:8000 in your browser.
"""

import http.server
import socketserver

PORT = 8000

# Use Python's built-in file-serving request handler
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"🚀 Server running at http://localhost:{PORT}")
    print(f"📂 Open http://localhost:{PORT}/index.html in your browser")
    print("Press Ctrl+C to stop the server.")
    httpd.serve_forever()

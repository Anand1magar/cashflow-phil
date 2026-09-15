#!/usr/bin/env python3
"""Static dev server for this project, with caching disabled.

The default http.server sends Last-Modified, so browsers reuse stale copies of
main.css / *.jsx after an edit and changes appear not to have landed. Every
response here is marked no-store so a plain reload always gets current files.

    python3 serve.py [port]        # default 8777
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_header(self, keyword, value):
        # drop the validators that let a browser serve from cache
        if keyword in ("Last-Modified", "ETag"):
            return
        super().send_header(keyword, value)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8777
    handler = partial(NoCacheHandler, directory=".")
    print(f"serving {__file__.rsplit('/', 1)[0]} at http://127.0.0.1:{port}  (no-cache)")
    ThreadingHTTPServer(("127.0.0.1", port), handler).serve_forever()

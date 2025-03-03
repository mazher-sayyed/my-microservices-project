from starlette.responses import FileResponse 
from fastapi import FastAPI
import os 

parent_dir_path = os.path.dirname(os.path.realpath(__file__))
port = os.getenv('port', 8000)
context = os.getenv('context', '/')

app = FastAPI()

@app.get(context)
async def read_index():
    return FileResponse(parent_dir_path + '/static/index.html')
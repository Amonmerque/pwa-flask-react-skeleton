from flask import Flask, render_template, send_from_directory, redirect
from flask_socketio import SocketIO


app = Flask(__name__, static_folder="build/static", template_folder="build")
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route("/")
def home():
    return render_template('index.html')

@app.route('/<path:path>')
def get_dir(path):
    return send_from_directory('./build', path)

# @socketio.on('REQUEST_MESSAGE')
# def request_message(module):
#     print("REQUEST_MESSAGE")
#     emit('TO_PLATFORM', module, broadcast=True)

@socketio.on('REQUEST_MESSAGE')
def handle_my_custom_event(json):
    print("RECEIVED REQUEST")
    socketio.emit('TO_PLATFORM', json)


# socketio.run(app, host='192.168.1.8', port='5000', debug=True)
socketio.run(app, host='localhost', port='5000', debug=True)
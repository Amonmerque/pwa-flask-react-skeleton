from flask import Flask, render_template, send_from_directory, redirect


app = Flask(__name__, static_folder="build/static", template_folder="build")


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/test")
def tel():
    print("TEST")
    return redirect("tel://0640865682")


@app.route('/<path:path>')
def get_dir(path):
    return send_from_directory('./build', path)


app.run(host='192.168.1.8', port='5000', debug=True)
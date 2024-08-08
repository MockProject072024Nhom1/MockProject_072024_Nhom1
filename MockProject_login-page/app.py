from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        # Xử lý logic đăng nhập ở đây
        return f"Email: {email}, Password: {password}"
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)

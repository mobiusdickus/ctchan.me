from flask import (
    Blueprint,
    jsonify
)


bp = Blueprint('main', __name__)


@bp.route('/')
def main():
    return "Flask Gunicorn React Docker App"


@bp.route('/contact', methods=['GET'])
def test():
    # return { 'data': 'colin@ctchan.me' }
    return jsonify({
        'data': {
            'name': 'Colin Chan',
            'email': 'colin@ctchan.me',
            'github': 'mobiusdickus',
        }
    })

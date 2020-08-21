from flask import (
    Blueprint,
)


bp = Blueprint('main', __name__)


@bp.route('/')
def main():
    return "Flask Gunicorn React Docker App"


@bp.route('/contact', methods=['GET'])
def test():
    return {'data': 'colin at ctchan dot me'}

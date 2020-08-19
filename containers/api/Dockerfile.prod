FROM python:3.7-alpine3.7

WORKDIR /srv

# Install pipenv
RUN pip install pipenv

# Create an app user and run as that
RUN adduser -S api
RUN chown -R api /srv
USER api

# Install Python dependencies
ADD Pipfile Pipfile.lock ./
RUN pipenv install

# Add the project
ADD ./src ./src
ADD ./config/gunicorn.py ./
ADD setup.py ./
RUN pipenv run python setup.py develop

ENV FLASK_APP src
CMD ["pipenv", "run", "gunicorn", "-c", "gunicorn.py", "src:create_app()"]

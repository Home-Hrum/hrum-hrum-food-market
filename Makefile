ENV_NAME=venv
ENV=$(shell pwd)/$(ENV_NAME)/bin
PIP=$(ENV)/pip3


venv:
	python3 -m venv $(ENV_NAME)

install:
	$(PIP) install -r requirements.txt


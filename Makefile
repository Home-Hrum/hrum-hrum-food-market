ENV=$(shell pwd)/venv/bin
PIP=$(ENV)/pip3


venv:
	python3 -m venv venv

install:
	$(PIP) install -r requirements.txt

token:
	python3 -c "import secrets; print(secrets.token_hex(64))"
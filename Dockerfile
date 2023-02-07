FROM node:lts-bullseye-slim AS dev
RUN apt update && apt install git vim -y && apt clean
RUN echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd webapp/ui

# 生成静态文件
yarn run build

cd -

mkdir -p server/webapp
rm -rf server/webapp/*
mv webapp/ui/dist/* server/webapp/

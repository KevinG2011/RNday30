#!/bin/bash
root=/Users/lijia/Documents/Project/RN/huajiao
path=`pwd`
filename=`basename $path`
if [ '$filename' != 'huajiao_ios' ]; then
	cd $root/huajiao_ios
fi

git checkout 20170904_v601
git pull
git checkout 20170901_v406_RCT
git pull 
git merge 20170904_v601

cd $path
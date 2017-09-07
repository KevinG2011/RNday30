#!/bin/bash
root=/Users/lijia/Documents/Project/RN/huajiao
current_path=`pwd`
filename=`basename $current_path`
if [ '$filename' != 'huajiao_ios' ]; then
	cd $root/huajiao_ios
fi

set -x
git checkout 20170904_v601
git pull
git checkout 20170901_v406_RCT
git pull 
git merge 20170904_v601

cd $current_path
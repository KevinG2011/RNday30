#!/bin/bash
root=/Users/lijia/Documents/Project/RN/huajiao
current_path=`pwd`
filename=`basename $current_path`
if [ '$filename' != 'huajiao_ios' ]; then
	cd $root/huajiao_ios
fi

set -x
from=20170921_evening
to=20170901_v406_RCT

git checkout $from
git pull
git checkout $to
git pull
git merge $from

cd $current_path

base=https://www.thingiverse.com/swagger/docs/
for f in `cat files.list.txt`
do
  wget $base$f
done

base=https://www.thingiverse.com/swagger/docs/
for f in `cat files.list.txt`
do
  wget --quiet $base$f
done

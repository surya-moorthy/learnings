read -p "Enter your username:" Username
read -s -p "Enter your password:" Password

echo
echo "Username:" $Username
echo

read -p "Enter the subusers to use it:" -a SubUser
echo

for subuser in "${SubUser[@]}";
do
	echo $subuser
done


